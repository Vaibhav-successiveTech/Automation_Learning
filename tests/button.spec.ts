import {test,expect} from '@playwright/test';
test('Button Test',async ({page})=>{
    await page.goto('https://qaplayground.com/practice/buttons');
    const btn = page.locator('#btn-goto-home');
    await btn.click();
    await page.waitForTimeout(1000);
    expect(page.url()).toBe('https://qaplayground.com/');
});

test('Button Text Test',async ({page})=>{
    await page.goto('https://qaplayground.com/practice/buttons');
    const text = await page.locator('#btn-find-location').textContent();
    expect(text).toBe('Find Location');
});