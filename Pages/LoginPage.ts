//objects/elements related to LoginPage
import { BasePage } from "./Basepage";

export class LoginPage extends BasePage {
    //locators
private static textbox_username = "//input[@name='txtUserName']";
private static textbox_password = "//input[@name='txtPassword']";
private static button_login = "//input[@name='Submit']";

//methods
static async login(username: string, password : string) {
await this.page.locator(this.textbox_username).fill(username);
await this.page.locator(this.textbox_password).fill(password);
await this.page.locator(this.button_login).click();
console.log("Login Complted");

}
}