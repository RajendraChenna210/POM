import { test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test.beforeEach(async ({ page }) => {
    LoginPage.page = page;

    await page.goto("http://ctcorphyd.com/SureshIT/login.php");
    await LoginPage.login("admin", "admin");
});

test("TC001_AddEmployee", async () => {
    // Add Employee
});

test("TC002_EmployeeList", async () => {
    // Employee List
});