// Main Page reference & open application
import {Page} from '@playwright/test';

export class BasePage{
    static page: Page;

    static async openApplication(url : string) {
        await this.page.goto(url);
        console.log("Application opened");
    } 
    static async waitstmt(){
        await this.page.waitForTimeout(2000);
        console.log("Wait statement executed");
    }
}
