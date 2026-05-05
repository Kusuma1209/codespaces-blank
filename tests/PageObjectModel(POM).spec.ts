import { test, expect } from '@playwright/test';
test('Page Object Model',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    
});