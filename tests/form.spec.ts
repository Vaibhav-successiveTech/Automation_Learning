import {test,expect} from '@playwright/test';
test('Form Input',async ({page})=>{
    await page.goto('https://qaplayground.com/practice/forms');
    await page.locator('#firstName').fill('John');
    await page.locator('#lastName').fill('Doe');
    await page.locator('#email').fill('JohnDoe@gmail.com');
    await page.locator('#phone').fill('987654321');
    await page.locator('#dob').fill('24-07-2005');
})