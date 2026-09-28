import { createServer } from 'node:http';

export async function startFixture({ robotsStatus = 200 } = {}) {
  const requests = [];
  const server = createServer((request, response) => {
    const url = new URL(request.url, `http://${request.headers.host}`);
    requests.push({ method: request.method, path: url.pathname, search: url.search });
    const send = (status, type, body, headers = {}) => {
      response.writeHead(status, { 'Content-Type': type, ...headers }); response.end(body);
    };
    const html = (title, body, extra = '') => `<!doctype html><html lang="en"><head><title>${title}</title><meta name="description" content="Fixture ${title}"><link rel="canonical" href="${url.origin}${url.pathname}"><script type="application/ld+json">${extra || '{"@context":"https://schema.org","@type":"WebPage"}'}</script></head><body><header><nav><a href="/">Home</a><a href="/product/glucare-plus">Glucare Plus</a><a href="/category">Category</a><a href="/news/article">Article</a></nav></header><main><h1>${title}</h1>${body}</main></body></html>`;
    if (url.pathname === '/robots.txt') return send(robotsStatus, 'text/plain', robotsStatus === 200 ? 'User-agent: *\nDisallow: /private\nDisallow: /cart/add\nDisallow: /assets/\nAllow: /\nCrawl-delay: 0\nSitemap: /sitemap.xml\n' : 'Robots temporarily unavailable');
    if (url.pathname === '/sitemap.xml') return send(200, 'application/xml', `<?xml version="1.0"?><sitemapindex><sitemap><loc>${url.origin}/sitemap-pages.xml</loc></sitemap></sitemapindex>`);
    if (url.pathname === '/sitemap-pages.xml') return send(200, 'application/xml', `<?xml version="1.0"?><urlset>${['/', '/product/glucare-plus', '/product/vien-an-duong', '/product/dovital', '/category', '/news/article', '/contact', '/redirect-unsafe', '/redirect-external', '/private', '/?action=delete'].map(path => `<url><loc>${url.origin}${path.replace('&', '&amp;')}</loc></url>`).join('')}</urlset>`);
    if (url.pathname === '/redirect-unsafe') return send(302, 'text/plain', '', { Location: '/checkout/place-order?confirm=1' });
    if (url.pathname === '/redirect-external') return send(302, 'text/plain', '', { Location: 'https://example.com/' });
    if (url.pathname === '/start') return send(302, 'text/plain', '', { Location: '/delete' });
    if (url.pathname === '/two-hop-start') return send(302, 'text/plain', '', { Location: '/two-hop-middle' });
    if (url.pathname === '/two-hop-middle') return send(302, 'text/plain', '', { Location: '/delete' });
    if (url.pathname === '/safe-start') return send(302, 'text/plain', '', { Location: '/safe-final' });
    if (url.pathname === '/safe-final' || url.pathname === '/safe-get') return send(200, 'text/plain', 'SAFE GET');
    if (url.pathname === '/attack-browser') return send(200, 'text/html', html('Attack fixture', `<p>Read-only boundary probe.</p><script src="/checkout/confirm"></script><script src="/checkout/confirm.js"></script><script>window.open('/popup-attack','_blank');fetch('/start').catch(()=>{});fetch('/two-hop-start').catch(()=>{});fetch('/endpoint?command=delete').catch(()=>{});fetch('/checkout/confirm').catch(()=>{});fetch('/safe-get').catch(()=>{});fetch('/safe-start').catch(()=>{});try{const socket=new WebSocket('ws://'+location.host+'/socket');socket.onopen=()=>socket.send('mutation frame')}catch{}</script>`));
    if (url.pathname === '/popup-attack') return send(200, 'text/html', html('Popup fixture', `<script>console.error('popup marker');fetch('/mutation',{method:'POST',body:'mutate'}).catch(()=>{})</script>`));
    if (url.pathname === '/browser-cross-origin') return send(200, 'text/html', html('Browser redirect fixture', '<p>Navigation will be attempted by script.</p><script>setTimeout(() => { location.href = "https://example.com/" }, 100)</script>'));
    if (url.pathname === '/render-stabilization') return send(200, 'text/html', `<!doctype html><html><head><title>Render stabilization</title><link rel="stylesheet" href="/assets/delayed.css?v=1"><script src="/assets/ajax-post.js"></script></head><body><h1>Render stabilization</h1><div style="height:1100px">Initial content</div><section id="reveal" data-revealed="false">Observer content</section><img id="lazy" alt="Lazy" width="40" height="40" data-src="/assets/delayed-image.svg"><img id="failed" alt="Failed" src="/assets/missing.png"><img id="invalid" alt="Invalid" src="/assets/invalid-image.png"><div style="height:1100px"></div><div id="sentinel">Sentinel</div><script>const reveal=document.querySelector('#reveal');const lazy=document.querySelector('#lazy');const sentinel=document.querySelector('#sentinel');new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){if(entry.target===reveal){reveal.classList.add('revealed');reveal.dataset.revealed='true'}if(entry.target===lazy&&!lazy.src)lazy.src=lazy.dataset.src;if(entry.target===sentinel&&!window.__heightGrown){window.__heightGrown=true;const added=document.createElement('div');added.id='dynamic-height';added.style.height='1200px';added.textContent='Dynamically added content';sentinel.before(added)}}}).observe(reveal);const observer2=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting&&!lazy.src)lazy.src=lazy.dataset.src});observer2.observe(lazy);const observer3=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting&&!window.__heightGrown){window.__heightGrown=true;const added=document.createElement('div');added.id='dynamic-height';added.style.height='1200px';added.textContent='Dynamically added content';sentinel.before(added)}});observer3.observe(sentinel)</script></body></html>`);
    if (url.pathname === '/assets/delayed.css') return setTimeout(() => send(200, 'text/css', `@font-face{font-family:DelayedAudit;src:url('/assets/delayed.woff2')}body{font-family:DelayedAudit,sans-serif}#reveal{opacity:0;transition:opacity .12s linear}.revealed{opacity:1!important}`), 120);
    if (url.pathname === '/assets/delayed.woff2') return setTimeout(() => send(200, 'font/woff2', Buffer.from('invalid-font-fixture')), 160);
    if (url.pathname === '/assets/delayed-image.svg') return setTimeout(() => send(200, 'image/svg+xml', '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><rect width="40" height="40" fill="green"/></svg>'), 180);
    if (url.pathname === '/assets/missing.png') return send(404, 'image/png', 'missing');
    if (url.pathname === '/assets/invalid-image.png') return send(200, 'image/png', 'invalid-image-fixture');
    if (url.pathname === '/assets/ajax-post.js') return send(200, 'application/javascript', 'window.__staticScriptLoaded=true');
    if (url.pathname === '/private' || url.pathname === '/cart/add' || url.pathname === '/checkout/place-order' || url.pathname === '/checkout/confirm' || url.pathname === '/checkout/confirm.js' || ['/mutation', '/delete', '/endpoint'].includes(url.pathname) || url.searchParams.has('action')) return send(418, 'text/plain', 'UNSAFE REACHED');
    if (request.method !== 'GET') return send(418, 'text/plain', 'UNSAFE METHOD REACHED');
    if (url.pathname === '/') return send(200, 'text/html', html('Home', `<p style="color:#222;font-size:18px">Welcome to the fixture.</p><img src="/sample.svg" alt="Sample product"><a href="/cart/add?sku=1">Add</a><a href="/?action=delete">Delete</a><a href="/private">Private</a><form method="post" action="/submit"><input name="email" placeholder="Email"><button type="submit">Submit</button></form><button id="buy" style="background:#123456;color:white">Buy</button><script>fetch('/cart/add?sku=1').catch(()=>{});fetch('/submit',{method:'POST'}).catch(()=>{});fetch('/collect?event=pageview').catch(()=>{});window.dataLayer=[{event:'page_view'}]</script>`));
    if (url.pathname === '/sample.svg') return send(200, 'image/svg+xml', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><rect width="20" height="20" fill="blue"/></svg>');
    if (url.pathname.startsWith('/product/')) return send(200, 'text/html', html(url.pathname.split('/').at(-1), '<p>Product details and ingredients.</p><button type="button">Add to cart</button>', '{"@context":"https://schema.org","@type":"Product","name":"Fixture Product"}'));
    if (url.pathname === '/category') return send(200, 'text/html', html('Category', '<a href="/product/dovital">Dovital</a>'));
    if (url.pathname === '/news/article') return send(200, 'text/html', html('Article', '<p>Article text.</p>', '{"@context":"https://schema.org","@type":"Article","headline":"Article"}'));
    if (url.pathname === '/contact') return send(200, 'text/html', html('Contact', '<address>Example address</address>'));
    return send(404, 'text/plain', 'Not found');
  });
  server.on('upgrade', (request, socket) => {
    requests.push({ method: 'WEBSOCKET', path: new URL(request.url, `http://${request.headers.host}`).pathname, search: '' });
    socket.destroy();
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const target = `http://127.0.0.1:${server.address().port}/`;
  return { server, target, requests, close: () => new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve())) };
}
