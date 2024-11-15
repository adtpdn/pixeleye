import { test } from "@playwright/test";
import { pixeleyeSnapshot } from "@pixeleye/playwright";

test("Landing page full screenshot", async ({ page }) => {
  await page.goto("https://syntax.pixeleye.io");

  // Wait for any dynamic content to load
  await page.waitForSelector("kbd.ml-auto");

  // Take full page screenshot with additional options
  await pixeleyeSnapshot(page, {
    name: "landing-page",
    fullPage: true,  // Capture the entire page
    waitForSelectors: ["kbd.ml-auto"],  // Wait for specific elements
    waitForStatus: true,  // Wait for build processing
    // Optional: mask any sensitive or dynamic content
    maskSelectors: [],
    // Optional: add custom CSS if needed
    css: `
      // Add any custom CSS here if needed
    `
  });
});