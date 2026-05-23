/**
 * Post-build prerender: writes static HTML for each route so Google
 * indexes unique titles/descriptions per page (critical for SEO).
 */
import puppeteer from 'puppeteer';
import { createServer } from 'http';
import handler from 'serve-handler';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '../dist');
const PORT = 45678;

const ROUTES = [
  '/',
  '/technology',
  '/contact',
  '/blog',
  '/lithium-ion-battery-recycling',
  '/second-life-batteries',
  '/battery-energy-storage-system',
  '/ev-battery-recycling-india',
  '/battery-repurposing',
  '/ai-battery-diagnostics',
  '/battery-circular-economy',
  '/blog/future-of-ev-battery-recycling-india',
  '/blog/ai-revolutionizing-battery-diagnostics',
  '/blog/second-life-bess-cost-advantage',
  '/blog/black-mass-recycling-breakthrough',
  '/blog/sustainable-energy-infrastructure-circular-batteries',
];

const server = createServer((req, res) =>
  handler(req, res, {
    public: DIST,
    rewrites: [{ source: '**', destination: '/index.html' }],
  })
);

await new Promise((resolve) => server.listen(PORT, resolve));
console.log(`Prerender server on :${PORT}`);

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

for (const route of ROUTES) {
  const page = await browser.newPage();
  await page.goto(`http://127.0.0.1:${PORT}${route}`, {
    waitUntil: 'networkidle0',
    timeout: 60000,
  });
  await new Promise((r) => setTimeout(r, 1500));

  let html = await page.content();

  // Inject prerender hint for crawlers
  html = html.replace('<html lang="en">', '<html lang="en" data-prerender="true">');

  const outDir = route === '/' ? DIST : join(DIST, route.slice(1));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html);
  console.log(`Prerendered ${route}`);
  await page.close();
}

await browser.close();
server.close();
console.log('Prerender complete.');
