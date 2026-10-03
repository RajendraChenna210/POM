# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TestSuite.spec.ts >> TC001_AddEmployee
- Location: tests\TestSuite.spec.ts:11:5

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "http://ctcorphyd.com/SureshIT/login.php", waiting until "load"

```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | import { LoginPage } from '../Pages/LoginPage';
  3  | 
  4  | test.beforeEach(async ({ page }) => {
  5  |     LoginPage.page = page;
  6  | 
> 7  |     await page.goto("http://ctcorphyd.com/SureshIT/login.php");
     |                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  8  |     await LoginPage.login("sureshit", "suresh");
  9  | });
  10 | 
  11 | test("TC001_AddEmployee", async () => {
  12 |     // Add Employee
  13 | });
  14 | 
  15 | test("TC002_EmployeeList", async () => {
  16 |     // Employee List
  17 | });
```