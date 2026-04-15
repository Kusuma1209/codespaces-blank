import { test, expect } from '@playwright/test';

test('practice actions', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    
