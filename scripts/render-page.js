#!/usr/bin/env node
/**
 * render-page.js
 *
 * Launches a headless browser, fully renders the target URL (including JS),
 * then extracts the outerHTML of key page sections.
 *
 * Usage:  node scripts/render-page.js <url>
 * Output: JSON to stdout — one key per section, value is outerHTML string or null.
 */

import puppeteer from 'puppeteer';

const url = process.argv[2];
if (!url) {
  console.error('Usage: node scripts/render-page.js <url>');
  process.exit(1);
}

const SELECTORS = {
  announcementBar: [
    '[class*="announcement"]',
    '[class*="banner-bar"]',
    '[class*="promo-bar"]',
    '[class*="notice-bar"]',
    'header > div:first-child',
  ],
  nav: [
    'header',
    'nav[role="navigation"]',
    '[class*="header"]',
    '[class*="navbar"]',
    '[class*="nav-bar"]',
    '.O-Header',
  ],
  hero: [
    '[class*="hero"]',
    '[class*="stage"]',
    '[class*="banner"]',
    '.M-Stage',
    'main > section:first-child',
    'main > div:first-child',
  ],
  featureCards: [
    '[class*="feature"]',
    '[class*="card-grid"]',
    '[class*="cards"]',
    '[class*="services"]',
    'main > section:nth-child(2)',
    'main > div:nth-child(2)',
  ],
  carousel: [
    '[class*="carousel"]',
    '[class*="slider"]',
    '[class*="swiper"]',
    '[class*="slideshow"]',
  ],
  testimonials: [
    '[class*="testimonial"]',
    '[class*="review"]',
    '[class*="quote"]',
    '[class*="rating"]',
  ],
  footer: [
    'footer',
    '[role="contentinfo"]',
    '[class*="footer"]',
  ],
};

async function firstMatch(page, selectors) {
  for (const sel of selectors) {
    try {
      const el = await page.$(sel);
      if (el) {
        const html = await page.evaluate(e => e.outerHTML, el);
        if (html && html.trim().length > 50) return html;
      }
    } catch (_) {
      // selector failed, try next
    }
  }
  return null;
}

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
    ],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    );

    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 60000,
    });

    // Extra wait for any lazy-loaded / deferred content
    await new Promise(r => setTimeout(r, 2000));

    const result = {};
    for (const [section, selectors] of Object.entries(SELECTORS)) {
      result[section] = await firstMatch(page, selectors);
    }

    // Also extract computed CTA button colors so the skill can use them
    result._ctaButtonColor = await page.evaluate(() => {
      const btn = document.querySelector(
        'button, [class*="btn"], [class*="button"], [class*="cta"]'
      );
      if (!btn) return null;
      const styles = window.getComputedStyle(btn);
      return {
        background: styles.backgroundColor,
        color: styles.color,
        borderColor: styles.borderColor,
      };
    });

    console.log(JSON.stringify(result, null, 2));
  } finally {
    await browser.close();
  }
})();
