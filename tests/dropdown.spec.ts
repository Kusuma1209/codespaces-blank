import {test , expect} from '@playwright/test';
test('dropdown', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const locator=page.locator('#dropdown');

    await locator.selectOption('1');
    await expect(locator).toHaveValue('1');

    await locator.selectOption({label:'Option 2'});
    await expect(locator).toHaveValue('2');
    await page.screenshot({path:'dropdownss.png'});

    await locator.selectOption({index:1});
    await expect(locator).toHaveValue('1');

});