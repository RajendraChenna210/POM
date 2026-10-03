import { test } from "@playwright/test";
import { BasePage } from "../Pages/Basepage";
import { LoginPage } from "../Pages/LoginPage";
import { PIMPage } from "../Pages/PimPage";

test("TC_AddEmployee", async ({ page }) => {

    BasePage.page = page;

    await page.goto("http://ctcorphyd.com/SureshIT/login.php");

    await LoginPage.login("sureshit", "sureshit");

    await PIMPage.addEmployee(
        "Chenna",
        "Rajendra",
        "Kumar",
        "Raj"
    );

});