//import { test, expect } from '@playwright/test'
// import { HomePage } from '../pageobjects/HomePage'
// import { RegistrationPage } from '../pageobjects/RegistrationPage'
import { POManager } from '../pageobjects/POManager'
//import testData from '../utils/parabank.json' assert{type: 'json'}
 import { customtest as test,expect } from '../fixture/testfixture'
// test('register', async ({ page }) => {
//    // const homepage = new HomePage(page)
//       const pomanager=new POManager(page)
//       const homepage=pomanager.getHomePage()
//     await homepage.goTo()
//     await homepage.clickOnregisterlink()

//    // const registerpage=new RegistrationPage(page)
//     const registerpage=pomanager.getRegistrationPage()
//         registerpage.registerUser('jhon','sam',
//         'chattarpur','saket','delhi','221234','123344556676',
//         '2222222','javasccript','asdf','asdf'
//         )

//      await   registerpage.clickOnRegisterButton()

//         await page.waitForTimeout(2000)
// })

// for (const data of testData) {
//    test(`register ${data.username}`, async ({ page }) => {
//       // const homepage = new HomePage(page)
//       const pomanager = new POManager(page)
//       const homepage = pomanager.getHomePage()
//       await homepage.goTo()
//       await homepage.clickOnregisterlink()

//       // const registerpage=new RegistrationPage(page)
//       const registerpage = pomanager.getRegistrationPage()
//       registerpage.registerUser(
//          data.firstname,
//          data.lastname,
//          data.address,
//          data.city,
//          data.state,
//          data.zipcode,
//          data.ssn,
//          data.username,
//          data.password,
//          data.confirmpassword
//       )
//       await registerpage.clickOnRegisterButton()
//       await page.waitForTimeout(2000)
//    })
// }


   test('register', async ({ page ,testdataForregistration}) => {
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
