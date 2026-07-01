import {test, expect} from '@playwright/test'
test('newtest2', async ({page})=>{
    await page.goto('https://www.google.com/')
})