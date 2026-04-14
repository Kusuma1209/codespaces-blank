import {test, expect} from '@playwright/test';

test('GET API', async ({request}, testInfo)=>{
    const response = await request.get('https://jsonplaceholder.typicode.com/posts');

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    // console.log(response);

    const responseBody = await response.json();
    expect(responseBody.length).toBe(100);
    expect(responseBody[0]).toHaveProperty('id');
    expect(responseBody[0]).toHaveProperty('title');
    expect(responseBody[0]).toHaveProperty('body');
    expect(responseBody[3].id).toBe(4);
    expect(responseBody[1].title).toBe('qui est esse');

    testInfo.attach('GET Response', {
        body: JSON.stringify(responseBody, null, 2),
        contentType: 'application/json'
    });
    //console.log(responseBody);

});

test('POST API', async ({request}, testInfo)=>{
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: 'foo',
            body: 'bar',
            userId: 11
        }
    });

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(201);

    const responseBody = await response.json();
     console.log(responseBody);

     testInfo.attach('POST Response', {
        body: JSON.stringify(responseBody, null, 2),
        contentType: 'application/json'
    });
});