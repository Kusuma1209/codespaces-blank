import { test, expect } from '@playwright/test';
test('windows and tab handling',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/windows");

    const [newpage]=await Promise.all([
        page.context().waitForEvent('page'),
        //await page.getByRole('link',{name:'Click Here'}).click(),
        await page.locator('a').nth(1).click()
    ]);
    await newpage.waitForLoadState();

    await expect(newpage.locator('h3')).toHaveText('New Window');
    await newpage.getByRole('heading',{name:'New Window'}).hover();

    await page.bringToFront();

});