import { test, expect } from '@playwright/test';

test('practice actions', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await page.getByRole('link', { name: 'Get started' }).click();

    await page.getByRole('heading', { name: 'Introduction' }).hover();

    await page.getByText('Search').click();

    const searchBox = page.getByPlaceholder('Search docs');

    await expect(searchBox).toBeVisible(); // key fix

    await searchBox.fill('locators');

    await searchBox.press('Enter'); // better than keyboard
});