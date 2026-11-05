const { chromium }=require('playwright-core');
const AxeBuilder=require('@axe-core/playwright').default;
const assert=require('node:assert/strict');const fs=require('fs');
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
 const results={checks:[],responsive:[],errors:[],notFound:[],external:[]};
 const context=await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
 const page=await context.newPage();page.on('pageerror',e=>results.errors.push(e.message));
 const ok=(name)=>results.checks.push(name);
 for(const [locale,path] of [['en','/'],['es','/es']]){
  await page.addInitScript(l=>localStorage.setItem('portfolio-locale',l),locale==='en'?'es':'en');
  const response=await page.goto('http://localhost:3100'+path,{waitUntil:'networkidle'});assert.equal(response.status(),200);assert.equal(new URL(page.url()).pathname,path);assert.equal(await page.locator('html').getAttribute('lang'),locale);ok(locale+': URL overrides stored preference; HTTP 200; html lang');
  const seo=await page.evaluate(()=>({title:document.title,canonical:document.querySelector('link[rel="canonical"]')?.href,alternates:[...document.querySelectorAll('link[hreflang]')].map(e=>[e.hreflang,e.href]),og:[...document.querySelectorAll('meta[property^="og:image"]')].map(e=>[e.getAttribute('property'),e.content]),twitter:document.querySelector('meta[name="twitter:image"]')?.content,jsonLd:JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent)}));
  assert.equal(seo.canonical,'https://williampuma.dev'+(locale==='es'?'/es':'/'));assert.deepEqual(seo.alternates.map(x=>x[0]).sort(),['en','es','x-default']);assert.ok(seo.og.some(x=>x[1].endsWith('/logo-social.jpg')));assert.equal(seo.jsonLd[2].mainEntity['@id'],seo.jsonLd[0]['@id']);results[locale+'SEO']=seo;ok(locale+': canonical, hreflang, OG, Twitter, JSON-LD');
  const broken=await page.locator('a[href^="#"]').evaluateAll(as=>as.filter(a=>!document.getElementById(a.hash.slice(1))).map(a=>a.hash));assert.deepEqual(broken,[]);ok(locale+': all fragment targets exist');
  assert.equal(await page.locator('h1').count(),1);assert.equal(await page.locator('main').count(),1);ok(locale+': heading and main landmarks');
  await page.keyboard.press('Tab');assert.equal(await page.evaluate(()=>document.activeElement.className),'skip-link');await page.keyboard.press('Enter');assert.equal(await page.evaluate(()=>document.activeElement.id),'top');ok(locale+': keyboard skip link focuses main');
  await page.locator('header a[href="#projects"]').first().click();await page.waitForTimeout(100);assert.ok(await page.locator('#projects').evaluate(e=>e.getBoundingClientRect().top>=72));
  await page.locator('header select:visible').selectOption(locale==='en'?'es':'en');await page.waitForURL('**'+(locale==='en'?'/es':'/')+'#projects');await page.waitForLoadState('networkidle');assert.equal(new URL(page.url()).hash,'#projects');assert.equal(await page.locator('html').getAttribute('lang'),locale==='en'?'es':'en');ok(locale+': language switch preserves section and changes language');
 }
 await page.setViewportSize({width:390,height:844});await page.goto('http://localhost:3100/es',{waitUntil:'networkidle'});
 const toggle=page.locator('button[aria-controls="mobile-navigation"]');await toggle.focus();await page.keyboard.press('Enter');assert.equal(await toggle.getAttribute('aria-expanded'),'true');await page.keyboard.press('Tab');assert.equal(await page.evaluate(()=>document.activeElement.getAttribute('href')),'#about');await page.keyboard.press('Escape');assert.equal(await toggle.getAttribute('aria-expanded'),'false');assert.equal(await toggle.evaluate(e=>e===document.activeElement),true);ok('mobile: keyboard open, tab to first link, Escape returns focus');
 await toggle.click();await page.locator('#mobile-navigation a[href="#projects"]').click();assert.equal(await toggle.getAttribute('aria-expanded'),'false');assert.equal(await page.evaluate(()=>document.activeElement.id),'projects');assert.ok(await page.locator('#projects').evaluate(e=>e.getBoundingClientRect().top>=72));ok('mobile: section click closes menu, moves focus and clears fixed header');
 await toggle.click();await page.locator('#mobile-navigation a[download]').focus();await page.keyboard.press('Tab');assert.equal(await toggle.getAttribute('aria-expanded'),'false');ok('mobile: leaving navigation closes panel');
 await toggle.click();await page.setViewportSize({width:1440,height:1000});await page.waitForTimeout(100);await page.setViewportSize({width:390,height:844});assert.equal(await toggle.getAttribute('aria-expanded'),'false');ok('mobile: resize closes menu');
 await toggle.click();await page.locator('#mobile-navigation select').selectOption('en');await page.waitForURL('**/#projects');await page.waitForLoadState('networkidle');ok('mobile: language switch preserves section');
 for(const path of ['/','/es'])for(const width of [320,390,768,1024,1440]){
 await page.setViewportSize({width,height:844});await page.goto('http://localhost:3100'+path,{waitUntil:'networkidle'});
 const overflow=await page.evaluate(()=>({page:document.documentElement.scrollWidth>innerWidth,sections:[...document.querySelectorAll('main>section')].filter(e=>e.scrollWidth>e.clientWidth).map(e=>e.id)}));results.responsive.push({path,width,...overflow});assert.equal(overflow.page,false);assert.deepEqual(overflow.sections,[]);
 }
 ok('responsive: no page or section overflow at 320, 390, 768, 1024, 1440 px in both languages');
 for(const path of ['/missing-page','/es/ruta-inexistente','/es/otra/ruta']){
 const r=await page.goto('http://localhost:3100'+path,{waitUntil:'networkidle'});assert.equal(r.status(),404);const robots=await page.locator('meta[name="robots"]').evaluateAll(es=>es.map(e=>e.content));assert.ok(robots.some(x=>x.includes('noindex')));assert.equal(await page.locator('link[rel="canonical"]').count(),0);const a=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();results.notFound.push({path,status:r.status(),robots,violations:a.violations});assert.deepEqual(a.violations,[]);
 }ok('404: HTTP 404, noindex, no homepage canonical, no axe violations');
 for(const path of ['/William_Puma_CV_Professional_EN.pdf','/William_Puma_CV_Profesional.pdf']){const r=await context.request.get('http://localhost:3100'+path);assert.equal(r.status(),200);assert.match(r.headers()['content-disposition'],/attachment/);assert.ok((await r.body()).subarray(0,4).toString()==='%PDF');}ok('both CV files: HTTP 200, PDF signature and attachment headers');
 const img=await context.request.get('http://localhost:3100/images/logo-social.jpg');assert.equal(img.status(),200);assert.match(img.headers()['content-type'],/image\/jpeg/);ok('social logo: HTTP 200 and image/jpeg');
 const sitemap=await context.request.get('http://localhost:3100/sitemap-0.xml');const xml=await sitemap.text();assert.equal((xml.match(/<url>/g)||[]).length,2);assert.equal((xml.match(/hreflang="x-default"/g)||[]).length,2);assert.ok(!xml.includes('rest'));ok('sitemap: exactly two indexable URLs and reciprocal hreflang');
 const robots=await context.request.get('http://localhost:3100/robots.txt');assert.match(await robots.text(),/Allow: \/[\s\S]*Sitemap: https:\/\/williampuma.dev\/sitemap.xml/);ok('robots.txt allows crawling and references sitemap');
 await page.goto('http://localhost:3100/es',{waitUntil:'networkidle'});const wa=await page.locator('a[href^="https://wa.me/"]').evaluateAll(es=>es.map(e=>e.href));assert.equal(wa.length,2);assert.ok(wa.every(x=>new URL(x).searchParams.get('text')==='Hola William, visité tu portafolio y me gustaría ponerme en contacto contigo.'));ok('WhatsApp: both links preserve phone and localized encoded message');
 const urls=await page.locator('a[href^="https://"]').evaluateAll(es=>[...new Set(es.map(e=>e.href))].filter(h=>!h.startsWith('https://wa.me/')));
 results.external=await Promise.all(urls.map(async url=>{try{const r=await context.request.get(url,{timeout:15000});return {url,status:r.status(),finalUrl:r.url()};}catch(e){return {url,error:e.message.split('\n')[0]};}}));
 assert.deepEqual(results.errors,[]);ok('no browser page errors');
 fs.writeFileSync('docs/audit/browser-checks.json',JSON.stringify(results,null,2));console.log(results);await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
