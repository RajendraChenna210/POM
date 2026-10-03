import { BasePage } from "./Basepage";

export class LogoutPage extends BasePage {
    //Locators
private static link_logout = "//a[text()='Logout']";

//methods

static async logout() {
    await this.page.locator(this.link_logout).click();
    console.log("Logout Complted");
}
}