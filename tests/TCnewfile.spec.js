import {test, expect} from '@playwright/test'
test('newtest', async ({page})=>{
    await page.goto('https://www.google.com/')
})