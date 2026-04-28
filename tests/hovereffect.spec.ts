import{ test, expect} from '@playwright/test';
test('hover',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/hovers');
    const locator=page.locator('.figure');
    const onhover=page.locator('.figcaption');

    await locator.nth(0).hover();
});