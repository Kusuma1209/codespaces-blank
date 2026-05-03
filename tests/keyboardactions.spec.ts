import { test, expect } from '@playwright/test';
test('keyboard actions', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/key_presses');
    
    const input=page.locator('#target');
    const result=page.locator('#result');

    await input.click();
    await input.press('Backspace');
    await expect(result).toHaveText('You entered: BACK_SPACE');

    // await input.click();
    // await input.press('Enter');
    // await expect(result).toHaveText('You entered: ENTER');

    await input.click();
    await input.press('Shift');
    await expect(result).toHaveText('You entered: SHIFT');


    await input.click();
    await input.press('Control');
    await expect(result).toHaveText('You entered: CONTROL');

});