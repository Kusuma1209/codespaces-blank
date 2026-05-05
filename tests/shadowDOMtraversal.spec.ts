import {test,expect} from '@playwright/test';
test('shadow DOM traversal',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/shadowdom');
    const para=page.locator('my-paragraph');
    await expect(para.first()).toContainText("Let's have some different text!");

    //await expect(para2.first()).toContainText("Let's have some different text!");
    await expect(para.nth(2)).toContainText("In a list!");
});