import { chromium } from "playwright";
import { mkdirSync, existsSync } from "fs";

const BASE_URL = process.argv[2] || "http://localhost:3000";
const OUT_DIR = process.argv[3] || "./screenshots";

// Pages to capture
const PAGES = [
  { path: "/", name: "home" },
  { path: "/projects", name: "projects" },
  { path: "/projects/ai-support-ticket-triage", name: "project-detail" },
];

// Ensure output directory exists
if (!existsSync(OUT_DIR)) {
  mkdirSync(OUT_DIR, { recursive: true });
}

const browser = await chromium.launch();

for (const page of PAGES) {
  const url = `${BASE_URL}${page.path}`;
  
  // Desktop screenshot
  const desktopCtx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const desktopPage = await desktopCtx.newPage();
  await desktopPage.goto(url, { waitUntil: "networkidle", timeout: 30000 });
  await desktopPage.waitForTimeout(2000);
  
  // Scroll to trigger any animations
  await desktopPage.evaluate(async () => {
    const delay = (ms) => new Promise(r => setTimeout(r, ms));
    for (let i = 0; i < document.body.scrollHeight; i += 400) {
      window.scrollTo(0, i);
      await delay(100);
    }
    window.scrollTo(0, 0);
    await delay(500);
  });
  
  await desktopPage.screenshot({ path: `${OUT_DIR}/${page.name}-desktop-full.png`, fullPage: true });
  await desktopPage.screenshot({ path: `${OUT_DIR}/${page.name}-desktop-above-fold.png` });
  await desktopCtx.close();

  // Mobile screenshot
  const mobileCtx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mobilePage = await mobileCtx.newPage();
  await mobilePage.goto(url, { waitUntil: "networkidle", timeout: 30000 });
  await mobilePage.waitForTimeout(2000);
  
  await mobilePage.evaluate(async () => {
    const delay = (ms) => new Promise(r => setTimeout(r, ms));
    for (let i = 0; i < document.body.scrollHeight; i += 400) {
      window.scrollTo(0, i);
      await delay(100);
    }
    window.scrollTo(0, 0);
    await delay(500);
  });
  
  await mobilePage.screenshot({ path: `${OUT_DIR}/${page.name}-mobile-full.png`, fullPage: true });
  await mobilePage.screenshot({ path: `${OUT_DIR}/${page.name}-mobile-above-fold.png` });
  await mobileCtx.close();
  
  console.log(`✓ Captured: ${page.name}`);
}

await browser.close();
console.log(`\nScreenshots saved to ${OUT_DIR}`);
