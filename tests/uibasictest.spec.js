const { test } = require("@playwright/test");

test("Browser Context Playwright Test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

test("Page Playwright Test", async ({ page }) => {
  await page.goto("https://google.com");
  // get the title, check if it's correct
  console.log(await page.title());
});
