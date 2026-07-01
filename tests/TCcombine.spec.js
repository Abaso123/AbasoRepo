import { POManager } from '../pageobjects/POManager'
import { customtest as test, expect } from '../fixture/testfixture'
test.describe.parallel('parabank test', () => {

    test('@smoke register', async ({ page, testdataForregistration }) => {
        // const homepage = new HomePage(page)
        const pomanager = new POManager(page)
        const homepage = pomanager.getHomePage()
        await homepage.goTo()
        await homepage.clickOnregisterlink()

        // const registerpage=new RegistrationPage(page)
        const registerpage = pomanager.getRegistrationPage()
        registerpage.registerUser(
            testdataForregistration.firstname,
            testdataForregistration.lastname,
            testdataForregistration.address,
            testdataForregistration.city,
            testdataForregistration.state,
            testdataForregistration.zipcode,
            testdataForregistration.ssn,
            testdataForregistration.username,
            testdataForregistration.password,
            testdataForregistration.confirmpassword
        )
        await registerpage.clickOnRegisterButton()
        await page.waitForTimeout(2000)
    })

    test('@smoke@regression login', async ({ page, testdataForregistration }) => {
        // const homepage = new HomePage(page)
        const pomanager = new POManager(page)
        const homepage = pomanager.getHomePage()
        await homepage.goTo()

        const loginpage = pomanager.getLoginPage()

        await loginpage.loginToApplication(
            testdataForregistration.username,
            testdataForregistration.password
        )


    })

})
