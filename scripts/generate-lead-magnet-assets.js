#!/usr/bin/env node
/**
 * Generate Lead Magnet assets
 * - Open Graph image (1200x630)
 * - PDF file
 */

import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

async function generateOGImage() {
  console.log('Generating Open Graph image...');

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 }
  });

  // Create OG image HTML
  const ogHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      width: 1200px;
      height: 630px;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: white;
      position: relative;
      overflow: hidden;
    }
    .badge {
      background: #00f5ff;
      color: #0f172a;
      padding: 12px 28px;
      border-radius: 30px;
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 30px;
    }
    h1 {
      font-size: 56px;
      font-weight: 800;
      text-align: center;
      line-height: 1.2;
      margin-bottom: 20px;
      max-width: 1000px;
    }
    .subtitle {
      font-size: 28px;
      color: #94a3b8;
      text-align: center;
      max-width: 800px;
    }
    .author {
      position: absolute;
      bottom: 50px;
      display: flex;
      align-items: center;
      gap: 15px;
    }
    .logo {
      width: 40px;
      height: 40px;
      background: #00f5ff;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      color: #0f172a;
      font-size: 18px;
    }
    .author-name {
      font-size: 24px;
      font-weight: 600;
      color: #e2e8f0;
    }
    /* Decorative elements */
    .dot {
      position: absolute;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0, 245, 255, 0.08) 0%, transparent 70%);
    }
    .dot-1 { top: -100px; left: -100px; }
    .dot-2 { bottom: -100px; right: -100px; }
  </style>
</head>
<body>
  <div class="dot dot-1"></div>
  <div class="dot dot-2"></div>
  <div class="badge">Free Download</div>
  <h1>AI Stack Decision Framework</h1>
  <p class="subtitle">A systematic approach to choosing the right AI tools</p>
  <div class="author">
    <div class="logo">I</div>
    <span class="author-name">Ioodu</span>
  </div>
</body>
</html>
  `;

  await page.setContent(ogHtml);
  await page.screenshot({
    path: join(rootDir, 'public', 'og-framework.png'),
    type: 'png'
  });

  await browser.close();
  console.log('✓ Open Graph image saved to public/og-framework.png');
}

async function generatePDF() {
  console.log('Generating PDF...');

  const browser = await chromium.launch();
  const page = await browser.newPage();

  const htmlPath = join(rootDir, 'public', 'downloads', 'ai-stack-decision-framework.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });

  await page.pdf({
    path: join(rootDir, 'public', 'downloads', 'ai-stack-decision-framework.pdf'),
    format: 'A4',
    printBackground: true,
    margin: {
      top: '15mm',
      right: '15mm',
      bottom: '15mm',
      left: '15mm'
    }
  });

  await browser.close();
  console.log('✓ PDF saved to public/downloads/ai-stack-decision-framework.pdf');
}

async function main() {
  try {
    await generateOGImage();
    await generatePDF();
    console.log('\n✓ All assets generated successfully!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
