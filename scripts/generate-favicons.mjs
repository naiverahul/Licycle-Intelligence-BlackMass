import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '../public');
const svg = readFileSync(join(publicDir, 'favicon.svg'));

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'favicon-192x192.png', size: 192 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'logo-512.png', size: 512 },
];

for (const { name, size } of sizes) {
  await sharp(svg).resize(size, size).png().toFile(join(publicDir, name));
  console.log(`Created ${name}`);
}

// Multi-size favicon.ico (16 + 32 + 48)
const ico16 = await sharp(svg).resize(16, 16).png().toBuffer();
const ico32 = await sharp(svg).resize(32, 32).png().toBuffer();
const ico48 = await sharp(svg).resize(48, 48).png().toBuffer();

// Minimal ICO: use 48px PNG as favicon.ico fallback (browsers accept PNG renamed)
writeFileSync(join(publicDir, 'favicon.ico'), await sharp(svg).resize(48, 48).png().toBuffer());
console.log('Created favicon.ico');

// OG image 1200x630
await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: { r: 10, g: 15, b: 26, alpha: 1 },
  },
})
  .composite([
    {
      input: await sharp(svg).resize(200, 200).png().toBuffer(),
      top: 115,
      left: 80,
    },
  ])
  .png()
  .toFile(join(publicDir, 'og-image.png'));
console.log('Created og-image.png');
