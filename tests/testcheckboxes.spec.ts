import {test , expect} from '@playwright/test';
test('checkbox', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const locator=page.locator('#checkboxes input' );

    await locator.nth(0).check();
    await expect(locator.nth(0)).toBeChecked();

    await locator.nth(1).click();
    await expect(locator.nth(1)).not.toBeChecked();

});