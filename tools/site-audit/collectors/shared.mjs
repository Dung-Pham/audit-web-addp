import { createHash } from 'node:crypto';
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { assertSafeRequest } from '../orchestration/core.mjs';

export const hash = value => createHash('sha256').update(String(value)).digest('hex').slice(0, 16);

export async function json(path, fallback) {
  try { return JSON.parse(await readFile(path, 'utf8')); }
  catch (error) { if (error.code === 'ENOENT') return fallback; throw error; }
}

export async function atomicJson(path, value) {
  await mkdir(dirname(path), { recursive: true });
  const temp = `${path}.${process.pid}.${Math.random().toString(36).slice(2)}.tmp`;
  await writeFile(temp, JSON.stringify(value, null, 2) + '\n');
  await rename(temp, path);
}

export async function artifact(runDir, relative, content) {
  const path = join(runDir, ...relative.split('/'));
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, content);
  return relative;
}

export function normalizeUrl(input, base, { keepSearch = false } = {}) {
  let url;
  try { url = new URL(input, base); } catch { return null; }
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) return null;
  url.hash = '';
  url.hostname = url.hostname.toLowerCase();
  url.pathname = url.pathname.replace(/\/{2,}/g, '/');
  const params = new URLSearchParams(url.search);
  for (const key of [...params.keys()]) {
    if (/^(utm_|gclid$|fbclid$|msclkid$|_ga$|_gl$|ref$|source$)/i.test(key)) params.delete(key);
  }
  // Faceted and paginated variants have unbounded cardinality. A configured
  // search URL is the only query-bearing page intentionally sampled.
  if (!keepSearch) params.forEach((_, key) => params.delete(key));
  else for (const key of [...params.keys()]) if (!/^(q|s|search|query)$/i.test(key)) params.delete(key);
  params.sort();
  url.search = params.toString();
  return url.href;
}

export function inspectedUrl(input, base) {
  try { return new URL(input, base).href; } catch { return null; }
}

// Route actions must be explicit.  In particular, `post` is a common content
// noun (for example `/blog/post/a-slug`), not an HTTP method or mutation.
const dangerousPath = /(?:^|[\/_-])(add[\/_-]?to[\/_-]?cart|cart[\/_-]?add|add[\/_-]?cart|place[\/_-]?order|create[\/_-]?order|order[\/_-]?(?:submit|create|confirm)|checkout[\/_-]?(?:submit|process|complete|place)|pay(?:ment)?[\/_-]?(?:process|submit|confirm)|register|signup|sign[\/_-]?up|logout|log[\/_-]?out|subscribe|unsubscribe|delete|remove|update|save|upload|webhook|trigger|add|create|submit|send|apply|execute)(?:[\/_.-]|$)/i;
const dangerousQuery = /^(?:action|act|operation|command|op|do|cmd|controller|route|task|event)$/i;
const dangerousValue = /^(?:add|buy|purchase|order|checkout|pay|submit|create|register|subscribe|delete|remove|update|save|upload|logout)/i;

export function safetyReason(input, method = 'GET') {
  const verb = String(method).toUpperCase();
  if (verb !== 'GET') return `unsafe method ${verb}`;
  let url;
  try { url = new URL(input); } catch { return 'invalid URL'; }
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) return 'unsupported URL';
  let path;
  try { path = decodeURIComponent(url.pathname).toLowerCase(); }
  catch { return 'malformed URL encoding'; }
  if (dangerousPath.test(path)) return 'mutating GET endpoint';
  for (const [key, value] of url.searchParams) {
    if (dangerousQuery.test(key) && dangerousValue.test(value)) return 'mutating GET query';
    if (/^(add-to-cart|add_to_cart|addcart|buy-now|buynow|submit|delete|remove|update|save|subscribe|unsubscribe|add|create)$/i.test(key)) return 'mutating GET query';
  }
  // The core policy is the shared boundary used by orchestration. Collector
  // checks above are stricter for GET-only crawling; the union fails closed.
  try { assertSafeRequest(input, method); }
  catch (error) { return `core safety policy: ${error.message}`; }
  return null;
}

export function assertReadOnly(input, method = 'GET') {
  const reason = safetyReason(input, method);
  if (reason) throw new Error(`Blocked read-only request: ${reason}: ${input}`);
}

export function evidenceFor({ url, pageType, collector, type, viewport = null, artifact: file, rawFact = {} }) {
  return {
    evidence_id: `EVD-${hash([url, collector, type, viewport ?? ''].join('|')).toUpperCase()}`,
    url, page_type: pageType, collector, type, viewport,
    artifact: file, raw_fact: rawFact, observed_at: new Date().toISOString()
  };
}
