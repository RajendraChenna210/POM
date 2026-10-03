//Verification methods related to all pages

import { BasePage } from "./Basepage";
import { expect} from "@playwright/test";

export class VerifyPage extends BasePage {
    //methods

static async verifyTitle(expectedTitle: string) {
    await expect(this.page).toHaveTitle(expectedTitle);
    console.log("Verification completed");
}
}