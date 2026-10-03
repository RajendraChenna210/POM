//Actal testcase/testscript

import {test} from '@playwright/test';
import { BasePage } from '../Pages/Basepage';
import { VerifyPage } from '../Pages/VerifyPage';
import { LoginPage } from '../Pages/LoginPage';
import { LogoutPage } from '../Pages/LogoutPage';
import { Commonmethods } from './Commonmethods';

test("Verify Login functionality", async({ page })=> {
//Assigining reference to BAsepage

    BasePage.page = page;
await BasePage.openApplication("https://ctcorphyd.com/SureshIT/login.php");
await Commonmethods.waitstmt();
await LoginPage.login("sureshit", "sureshit");
await VerifyPage.verifyTitle("SureshIT");
await Commonmethods.waitstmt();
await LogoutPage.logout();
await Commonmethods.waitstmt();

});