import { test, expect } from '@playwright/test';
test('dynamic loading', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

  const start = page.locator('#start button');
  const finish = page.locator('#finish');
  const helloText = finish.locator('h4');

  await start.click();

  //await expect(finish).toBeVisible();
  await finish.waitFor({ state: 'visible' }); 
  await expect(helloText).toHaveText('Hello World!');
});