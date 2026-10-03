# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC002.spec.ts >> TC_AddEmployee
- Location: tests\TC002.spec.ts:6:5

# Error details

```
TimeoutError: locator.hover: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('li#pim')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - table [ref=e2]:
    - rowgroup [ref=e3]:
      - row [ref=e4]:
        - cell [ref=e5]:
          - img [ref=e6]
        - cell [ref=e7]
  - table [ref=e8]:
    - rowgroup [ref=e9]:
      - row [ref=e10]:
        - cell [ref=e11]:
          - table [ref=e12]:
            - rowgroup [ref=e13]:
              - row [ref=e14]:
                - cell [ref=e15]
                - cell [ref=e16]
                - cell [ref=e17]
                - cell [ref=e18]
                - cell [ref=e19]
                - cell [ref=e20]
  - generic [ref=e21]:
    - table [ref=e22]:
      - rowgroup [ref=e23]:
        - 'row "Login Name : sureshit Password : Login Clear Invalid Login Orange HRM comes as a comprehensive solution for the efficient management and development of your Human Resource. It will assist you in the complex and strategic process of managing this crucial resource of your enterprise. Based on modular architecture, it facilitates a vast range of HR activities, with features that reflect the main HR management activities. It comes as a web-enabled application and considering the available flexibility, OrangeHRM is a perfect platform for reengineering your HR processes and achieving a new level of HR Management." [ref=e24]':
          - cell [ref=e25]
          - 'cell "Login Name : sureshit Password : Login Clear Invalid Login Orange HRM comes as a comprehensive solution for the efficient management and development of your Human Resource. It will assist you in the complex and strategic process of managing this crucial resource of your enterprise. Based on modular architecture, it facilitates a vast range of HR activities, with features that reflect the main HR management activities. It comes as a web-enabled application and considering the available flexibility, OrangeHRM is a perfect platform for reengineering your HR processes and achieving a new level of HR Management." [ref=e26]':
            - table [ref=e27]:
              - rowgroup [ref=e28]:
                - 'row "Login Name : sureshit Password : Login Clear Invalid Login" [ref=e29]':
                  - cell [ref=e30]
                  - 'cell "Login Name : sureshit Password : Login Clear Invalid Login" [ref=e31]':
                    - img [ref=e32]
                    - table [ref=e33]:
                      - rowgroup [ref=e34]:
                        - row [ref=e35]:
                          - cell [ref=e36]
                          - cell [ref=e37]
                        - 'row "Login Name : sureshit" [ref=e38]':
                          - cell "Login Name :" [ref=e39]
                          - cell "sureshit" [ref=e40]:
                            - textbox [ref=e41]: sureshit
                        - row "Password :" [ref=e42]:
                          - cell "Password :" [ref=e43]
                          - cell [ref=e44]:
                            - textbox [ref=e45]
                        - row "Login Clear" [ref=e46]:
                          - cell "Login" [ref=e47]:
                            - button "Login" [ref=e48]
                          - cell "Clear" [ref=e49]:
                            - button "Clear" [ref=e50]
                        - row "Invalid Login" [ref=e51]:
                          - cell [ref=e52]
                          - cell "Invalid Login" [ref=e53]:
                            - strong [ref=e54]: Invalid Login
                  - cell [ref=e55]:
                    - img [ref=e56]
                  - cell [ref=e57]
                - row [ref=e58]:
                  - cell [ref=e59]
                - row [ref=e60]:
                  - cell [ref=e61]
                - row [ref=e62]:
                  - cell [ref=e63]:
                    - img [ref=e64]
                  - cell [ref=e65]
                - row "Orange HRM comes as a comprehensive solution for the efficient management and development of your Human Resource. It will assist you in the complex and strategic process of managing this crucial resource of your enterprise. Based on modular architecture, it facilitates a vast range of HR activities, with features that reflect the main HR management activities. It comes as a web-enabled application and considering the available flexibility, OrangeHRM is a perfect platform for reengineering your HR processes and achieving a new level of HR Management." [ref=e66]:
                  - cell [ref=e67]
                  - cell "Orange HRM comes as a comprehensive solution for the efficient management and development of your Human Resource. It will assist you in the complex and strategic process of managing this crucial resource of your enterprise. Based on modular architecture, it facilitates a vast range of HR activities, with features that reflect the main HR management activities. It comes as a web-enabled application and considering the available flexibility, OrangeHRM is a perfect platform for reengineering your HR processes and achieving a new level of HR Management." [ref=e68]:
                    - table [ref=e69]:
                      - rowgroup [ref=e70]:
                        - row "Orange HRM comes as a comprehensive solution for the efficient management and development of your Human Resource. It will assist you in the complex and strategic process of managing this crucial resource of your enterprise. Based on modular architecture, it facilitates a vast range of HR activities, with features that reflect the main HR management activities. It comes as a web-enabled application and considering the available flexibility, OrangeHRM is a perfect platform for reengineering your HR processes and achieving a new level of HR Management." [ref=e71]:
                          - cell "Orange HRM comes as a comprehensive solution for the efficient management and development of your Human Resource. It will assist you in the complex and strategic process of managing this crucial resource of your enterprise. Based on modular architecture, it facilitates a vast range of HR activities, with features that reflect the main HR management activities. It comes as a web-enabled application and considering the available flexibility, OrangeHRM is a perfect platform for reengineering your HR processes and achieving a new level of HR Management." [ref=e72]
                - row [ref=e73]:
                  - cell [ref=e74]:
                    - img [ref=e75]
                  - cell [ref=e76]
                - row [ref=e77]:
                  - cell [ref=e78]
                  - cell [ref=e79]
                - row [ref=e80]:
                  - cell [ref=e81]
                  - cell [ref=e82]
                  - cell [ref=e83]
                  - cell [ref=e84]
                  - cell [ref=e85]
                  - cell [ref=e86]
          - cell [ref=e87]
    - table [ref=e88]:
      - rowgroup [ref=e89]:
        - row "SureshIT" [ref=e90]:
          - cell "SureshIT" [ref=e91]:
            - link "SureshIT" [ref=e92] [cursor=pointer]:
              - /url: "#"
```

# Test source

```ts
  1  | // objects/elements related to PIM Page
  2  | import { BasePage } from "./Basepage";
  3  | 
  4  | export class PIMPage extends BasePage {
  5  | 
  6  |     // main page menu locators
  7  |     private static menu_pim = "li#pim";
  8  |     private static menu_addEmployee = "li#pim a[href*='capturemode=addmode']";
  9  | 
  10 |     // iframe
  11 |     private static iframe = "iframe";
  12 | 
  13 |     // locators inside iframe
  14 |     private static title_addEmployee = "//h2[contains(normalize-space(),'PIM : Add Employee')]";
  15 | 
  16 |     private static textbox_lastName = "input[name='txtEmpLastName']";
  17 |     private static textbox_firstName = "input[name='txtEmpFirstName']";
  18 |     private static textbox_middleName = "input[name='txtEmpMiddleName']";
  19 |     private static textbox_nickName = "input[name='txtEmpNickName']";
  20 | 
  21 |     private static button_save = "input[value='Save']";
  22 | 
  23 |     private static getFrame() {
  24 |         return this.page.frameLocator(this.iframe).first();
  25 |     }
  26 | 
  27 |     static async clickAddEmployee() {
> 28 |         await this.page.locator(this.menu_pim).hover();
     |                                                ^ TimeoutError: locator.hover: Timeout 15000ms exceeded.
  29 | 
  30 |         await this.page.locator(this.menu_addEmployee).waitFor({
  31 |             state: "visible",
  32 |             timeout: 10000
  33 |         });
  34 | 
  35 |         await this.page.locator(this.menu_addEmployee).click();
  36 | 
  37 |         const frame = this.getFrame();
  38 | 
  39 |         await frame.locator(this.title_addEmployee).waitFor({
  40 |             state: "visible",
  41 |             timeout: 15000
  42 |         });
  43 | 
  44 |         console.log("Clicked on Add Employee");
  45 |     }
  46 | 
  47 |     static async enterEmployeeDetails(
  48 |         lastName: string,
  49 |         firstName: string,
  50 |         middleName: string,
  51 |         nickName: string
  52 |     ) {
  53 |         const frame = this.getFrame();
  54 | 
  55 |         await frame.locator(this.textbox_lastName).fill(lastName);
  56 |         await frame.locator(this.textbox_firstName).fill(firstName);
  57 |         await frame.locator(this.textbox_middleName).fill(middleName);
  58 |         await frame.locator(this.textbox_nickName).fill(nickName);
  59 | 
  60 |         console.log("Employee Details Entered");
  61 |     }
  62 | 
  63 |     static async clickSaveButton() {
  64 |         const frame = this.getFrame();
  65 | 
  66 |         await frame.locator(this.button_save).click();
  67 | 
  68 |         console.log("Clicked on Save Button");
  69 |     }
  70 | 
  71 |     static async addEmployee(
  72 |         lastName: string,
  73 |         firstName: string,
  74 |         middleName: string,
  75 |         nickName: string
  76 |     ) {
  77 |         await this.clickAddEmployee();
  78 |         await this.enterEmployeeDetails(lastName, firstName, middleName, nickName);
  79 |         await this.clickSaveButton();
  80 | 
  81 |         console.log("Employee Added Completed");
  82 |     }
  83 | }
```