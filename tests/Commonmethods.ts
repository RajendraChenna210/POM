import { BasePage } from "../Pages/Basepage";

export class Commonmethods extends BasePage {
    // common methods to all pagess
static async waitstmt(){
        await this.page.waitForTimeout(2000);
        console.log("Wait statement executed");
    }

}