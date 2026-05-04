import { test, expect } from '@playwright/test';
test('JS Alerts', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    const result=page.locator('#result');
//Alert
    page.once('dialog',async dialog=>{
        await dialog.accept();
    });
    await page.click('text=Click for JS Alert');
    await expect(result).toHaveText('You successfully clicked an alert');

    //dismiss
    page.once('dialog',async dialog=>{
        await dialog.dismiss();
    });
    await page.click('text=Click for JS Confirm');
    await expect(result).toHaveText('You clicked: Cancel');

    //accept
    page.once('dialog',async dialog=>{
        await dialog.accept();
    });
    await page.click('text=Click for JS Confirm');
    await expect(result).toHaveText('You clicked: Ok');

    //prompt
    page.once('dialog', async dialog => {
    await dialog.accept('Test');
  });
  await page.click('text=Click for JS Prompt');
  await expect(result).toHaveText('You entered: Test');

});