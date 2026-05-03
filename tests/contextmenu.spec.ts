import {test,expect}from "@playwright/test";
test('contextmenu and jsalerts',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/context_menu');
    const contextbox= page.locator('#hot-spot');

    page.on('dialog',async (dialog)=>{
        //console.log(dialog.message());
        expect(dialog.message()).toBe('You selected a context menu');
        await dialog.accept();
    });  
    await contextbox.click({button:'right'});

});