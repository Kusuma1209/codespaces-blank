import { test, expect } from '@playwright/test';

test('practice actions', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await page.getByRole('link', { name: 'Get started' }).click();

    await page.getByRole('heading', { name: 'Introduction' }).hover();

    await page.getByText('Search').click();

    const searchBox = page.getByPlaceholder('Search docs');

    await expect(searchBox).toBeVisible(); // key fix

    //await searchBox.fill('locators');
    await searchBox.type('locators');

    await page.screenshot({path:'screenshot3.png'});

    await searchBox.press('Enter'); // better than keyboard

    await expect(page).toHaveURL('https://playwright.dev/docs/locators');
    await page.screenshot({path:'screenshot4.png'});
    
    const locator1=page.getByRole('link',{name:'page.getByTestId()'});
    //await page.getByRole('link',{name:'page.getByTestId()'}).first().isVisible();
    await locator1.first().isVisible();
    //await page.getByRole('link',{name:'page.getByTestId()'}).nth(0).click();
    await locator1.nth(0).click();

    const locator2=page.getByRole('heading',{name:'Locate by test id'});
    //await page.getByRole('heading',{name:'Locate by test id'}).isVisible();
    await locator2.isVisible();
    //await page.getByRole('heading',{name:'Locate by test id'}).highlight();
    await locator2.highlight();

    //await locator2.hover();
    await page.screenshot({path:'screenshot5.png'});
});