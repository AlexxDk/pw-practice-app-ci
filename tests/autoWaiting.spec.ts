import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.URL);
  await page.getByText("Button Triggering AJAX Request").click();
});

test("auto-waiting ", async ({ page }) => {
  const successButtons = page.locator(".bg-success");

  //   await successButtons.click();

  //   const text = await successButtons.textContent();
  //   await successButtons.waitFor({ state: "attached" });
  //   const text = await successButtons.allTextContents();

  //   expect(text).toContain("Data loaded with AJAX get request.");

  await expect(successButtons).toHaveText(
    "Data loaded with AJAX get request.",
    { timeout: 20000 }
  );
});

test("alternative waits", async ({ page }) => {
  const successButtons = page.locator(".bg-success");

  //___wait for elements
  await page.waitForSelector(".bg-success");

  //__wait for particular response
  //   await page.waitForResponse('http://www.uitestingplayground.com/ajaxdata')

  //__wait for network calls to be completed  (not recommended)
  //   await page.waitForLoadState("networkidle");

  //   await page.waitForTimeout(20000);

  const text = await successButtons.allTextContents();
  expect(text).toContain("Data loaded with AJAX get request.");
});
