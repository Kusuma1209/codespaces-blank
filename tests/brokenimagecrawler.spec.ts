import { test, expect } from '@playwright/test';
test('broken image crawler',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/broken_images');

    const image=page.locator('img');
    const count = await image.count();
    const baseurl='https://the-internet.herokuapp.com/';

    for(let i=0;i<count;i++){
        const img=image.nth(i);
        const src=await img.getAttribute('src');
        if(src){
            const response=await page.request.get(baseurl+src);
            console.log(src,response.status());
            //expect(response.status()).toBe(200);
        }
    }
});