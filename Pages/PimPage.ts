// objects/elements related to PIM Page
import { BasePage } from "./Basepage";
export class PIMPage extends BasePage {

    // main page menu locators
    private static menu_pim = "//span[normalize-space()='PIM'] | //a[contains(normalize-space(),'PIM')]";
    private static menu_addEmployee = "//a[contains(normalize-space(),'Add Employee')]";

    // iframe
    private static iframe = "iframe";

    // locators inside iframe
    private static title_addEmployee = "//h2[contains(normalize-space(),'PIM : Add Employee')]";

    private static textbox_lastName = "//input[@name='txtEmpLastName']";
    private static textbox_firstName = "//input[@name='txtEmpFirstName']";
    private static textbox_middleName = "//input[@name='txtEmpMiddleName']";
    private static textbox_nickName = "//input[@name='txtEmpNickName']";

    private static button_save = "//input[@value='Save']";

    private static getFrame() {
        return this.page.frameLocator(this.iframe).first();
    }

    static async clickAddEmployee() {

        // wait until home page menu is loaded
        await this.page.locator(this.menu_pim).first().waitFor({
            state: "visible",
            timeout: 20000
        });

        await this.page.locator(this.menu_pim).first().hover();

        await this.page.locator(this.menu_addEmployee).first().waitFor({
            state: "visible",
            timeout: 20000
        });

        await this.page.locator(this.menu_addEmployee).first().click();

        const frame = this.getFrame();

        await frame.locator(this.title_addEmployee).waitFor({
            state: "visible",
            timeout: 20000
        });

        console.log("Clicked on Add Employee");
    }

    static async enterEmployeeDetails(
        lastName: string,
        firstName: string,
        middleName: string,
        nickName: string
    ) {
        const frame = this.getFrame();

        await frame.locator(this.textbox_lastName).fill(lastName);
        await frame.locator(this.textbox_firstName).fill(firstName);
        await frame.locator(this.textbox_middleName).fill(middleName);
        await frame.locator(this.textbox_nickName).fill(nickName);

        console.log("Employee Details Entered");
    }

    static async clickSaveButton() {
        const frame = this.getFrame();

        await frame.locator(this.button_save).click();

        console.log("Clicked on Save Button");
    }

    static async addEmployee(
        lastName: string,
        firstName: string,
        middleName: string,
        nickName: string
    ) {
        await this.clickAddEmployee();
        await this.enterEmployeeDetails(lastName, firstName, middleName, nickName);
        await this.clickSaveButton();

        console.log("Employee Added Completed");
    }
}