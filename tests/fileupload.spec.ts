import { test, expect } from '@playwright/test';
test('file upload',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload");

    const chooseFile=page.locator('#file-upload');
    const upload=page.locator('#file-submit');
    const result=page.locator('#uploaded-files');

    await chooseFile.setInputFiles('tests/sampleuploadfile.txt');
    await upload.click();
    await expect(result).toHaveText('sampleuploadfile.txt');

});