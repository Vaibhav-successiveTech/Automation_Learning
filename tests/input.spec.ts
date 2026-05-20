import { test, expect } from '@playwright/test';

test('Input Text Test', async ({ page }) => {
  await page.goto('https://qaplayground.com/practice/input-fields');
  await page.fill('#movieName','Dune');
  const value = await page.locator('#movieName').inputValue();
    expect(value).toBe('Dune');
});

test('Input PlaceHolder',async ({page})=>{
    await page.goto('https://qaplayground.com/practice/input-fields');
    const input = page.locator('[data-testid = "input-movie-name"]');
    const placeHolderValue = await input.getAttribute('placeholder');
    expect(placeHolderValue).toBe('Enter hollywood movie name');
    await input.fill('Dune');
    expect(await input.inputValue()).toBe('Dune');
});