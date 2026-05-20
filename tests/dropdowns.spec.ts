import{test,expect} from '@playwright/test';
test('DropDown',async({page})=>{
    await page.goto('https://qaplayground.com/practice/dropdowns');
    await page.click('#dropdown-fruit');
    await page.getByRole('option',{name:'Apple'}).click();
});

test('DropDown2',async ({page})=>{
    await page.goto('https://qaplayground.com/practice/dropdowns');
    await page.click('#dropdown-country');
    await page.getByRole('option',{name:'India'}).click();
})

test('DropDown3',async ({page})=>{
    await page.goto('https://qaplayground.com/practice/dropdowns');
    await page.click('#dropdown-fruit');
    await page.getByRole('option',{name:"Banana"}).click();
    const text = await page.locator('[data-testid="result-fruit"]').textContent();
    expect(text).toContain('banana');
})