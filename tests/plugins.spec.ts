import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Marketing Plugins/);
});

test("navigation to pages", async ({ page }) => {
  await page.goto("/");
  const financeTab = await page.locator("text=Finance");
  const marketingTab = await page.locator("text=Marketing");
  const personnelTab = await page.locator("text=personnel");

  await financeTab.click();
  await expect(page).toHaveTitle(/Finance Plugins/);

  await marketingTab.click();
  await expect(page).toHaveTitle(/Marketing Plugins/);

  await personnelTab.click();
  await expect(page).toHaveTitle(/Personnel Plugins/);
});

test("activate/deactivate plugins", async ({ page }) => {
  await page.goto("/");
  const restoreButton = await page.getByRole("button", {
    name: "Restore data",
  });
  await restoreButton.click();

  const switch1 = await page.getByTestId(`switch-plugin1`);
  await switch1.click();
  await expect(switch1).not.toBeChecked();

  await switch1.click();
  await expect(switch1).toBeChecked();
});

test("disable/enable plugins", async ({ page }) => {
  test.skip(!!process.env.CI, "This test is skipped in CI environments");
  await page.goto("/");
  const restoreButton = await page.getByRole("button", {
    name: "Restore data",
  });
  const disableAll = await page.getByTestId("disable-all");
  await restoreButton.click();

  // disable all
  await disableAll.click();
  await expect(await page.getByTestId(`switch-plugin1`)).toBeDisabled();
  await expect(await page.getByTestId(`switch-plugin2`)).toBeDisabled();
  await expect(await page.getByTestId(`switch-plugin3`)).toBeDisabled();
  await expect(await page.getByTestId(`switch-plugin4`)).toBeDisabled();
  await expect(await page.getByTestId(`switch-plugin5`)).toBeDisabled();
  await expect(await page.getByTestId(`switch-plugin6`)).toBeDisabled();

  // re-enable all
  await disableAll.click();
  await expect(await page.getByTestId(`switch-plugin1`)).not.toBeDisabled();
  await expect(await page.getByTestId(`switch-plugin2`)).not.toBeDisabled();
  await expect(await page.getByTestId(`switch-plugin3`)).not.toBeDisabled();
  await expect(await page.getByTestId(`switch-plugin4`)).not.toBeDisabled();
  await expect(await page.getByTestId(`switch-plugin5`)).not.toBeDisabled();
  await expect(await page.getByTestId(`switch-plugin6`)).not.toBeDisabled();
});
