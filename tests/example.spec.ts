import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  //await page.waitForTimeout(3000);
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await page.waitForTimeout(3000);
  
  await expect(page.getByRole('heading',{name: 'Installing Playwright'})).toBeVisible();
  await page.screenshot({ path: 'screenshot.png', fullPage:true});
});

test('checking How to install Playwright link',async({page})=>{
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('link',{name:'View a trace of your tests'}).click();
  await expect(page.getByRole('heading',{name:'Trace viewer'})).toBeVisible();
  await page.getByRole('link',{name:'How to open the HTML report'}).click();
  await expect(page.getByRole('heading',{name:'Opening the HTML report'})).toBeVisible();
  await page.screenshot({path:'screenshot2.png',fullPage:true});
});
