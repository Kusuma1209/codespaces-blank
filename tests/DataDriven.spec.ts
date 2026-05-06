import { test, expect } from '@playwright/test';
import loginData from '../test-data/loginData.json';

test.describe('Data Driven Login',()=>{
    for(const data of loginData){
        test(`login test for ${data.username}`,async({page})=>{
            await page.goto('https://www.saucedemo.com/');

            await page.fill('#user-name',data.username);
            await page.fill('#password',data.password);
            await page.click('#login-button');

            // if(data.username==='${data.username}' && data.password==='${data.password}'){
             await expect(page).toHaveURL(/inventory/);
            // }else{
            //     await expect(page.locator('[data-test="error"]')).toBeVisible();
            // }
        });
    }
});