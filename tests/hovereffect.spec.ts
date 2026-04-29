import{ test, expect} from '@playwright/test';
test('hover', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/hovers');
    const figures=page.locator('.figure');

    //for(let i=0; i<3;i++){
        const figure=figures.nth(0);
        await figure.hover();
        const caption= figure.locator('.figcaption');

        await expect(caption).toBeVisible();
        await expect(caption.locator('h5')).toHaveText('name: user1');
        await expect(caption.locator('a')).toBeVisible();
        await page.screenshot({path:'hover1.png'});
        await page.getByRole('link',{name:'View profile'}).first().click();
        

        await page.getByRole('heading',{name:'Not Found'}).isVisible();
        await page.screenshot({path:'hover2ss.png'});
    //}

});