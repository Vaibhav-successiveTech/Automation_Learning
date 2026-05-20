import {test,expect} from '@playwright/test';
test('Form Input',async ({page})=>{
    await page.goto('https://qaplayground.com/practice/forms');
    await page.locator('#firstName').fill('John');
    await page.locator('#lastName').fill('Doe');
    await page.locator('#email').fill('JohnDoe@gmail.com');
    await page.locator('#phone').fill('987654321');
    await page.locator('#dob').fill('2005-07-24');
    await page.locator('#gender-male').click();
    await page.locator('#country').click();
    await page.getByRole('option', { name: 'India' }).click();
    await page.locator('#city').fill('Mumbai');
    await page.locator('#password').fill('Pass@123');
    await page.locator('#confirmPassword').fill('Pass@123');
    await page.locator('#terms').click();
    await page.locator('#submitFormBtn').click();
});

test('Error Message',async({page})=>{
    await page.goto('https://qaplayground.com/practice/forms');
    await page.click('#submitFormBtn');
    expect(page.locator('#emailError')).toBeVisible();
    expect(page.locator('#firstNameError')).toBeVisible();
    expect(page.locator('#lastNameError')).toBeVisible();
    expect(page.locator('#phoneError')).toBeVisible();
    expect(page.locator('#phoneError')).toBeVisible();
    expect(page.locator('#dobError')).toBeVisible();
    expect(page.locator('#genderError')).toBeVisible();
    expect(page.locator('#countryError')).toBeVisible();
    expect(page.locator('#cityError')).toBeVisible();
    expect(page.locator('#passwordError')).toBeVisible();
    expect(page.locator('#confirmPasswordError')).toBeVisible();
    expect(page.locator('#termsError')).toBeVisible();
});