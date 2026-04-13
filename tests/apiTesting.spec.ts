import {test, expect} from '@playwright/test';

test.only('GET API', async ({request}, testInfo)=>{
    const response = await request.get('https://jsonplaceholder.typicode.com/posts');

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    // console.log(response);

    testInfo.attach('response', {
        body: JSON.stringify(await response.json(), null, 2),
        contentType: 'application/json'
    });
});