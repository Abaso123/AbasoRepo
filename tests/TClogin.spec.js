import { POManager } from '../pageobjects/POManager'
import { customtest as test,expect } from '../fixture/testfixture'

test('login', async ({ page ,testdataForregistration}) => {
      // const homepage = new HomePage(page)
      const pomanager = new POManager(page)
      const homepage = pomanager.getHomePage()
      await homepage.goTo()
     
       const loginpage=pomanager.getLoginPage()

       await loginpage.loginToApplication(
        testdataForregistration.username,
        testdataForregistration.password
       )

       
   })