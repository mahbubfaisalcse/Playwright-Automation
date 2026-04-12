import {test, expect} from "@playwright/test";
import { faker } from "@faker-js/faker";
import { Profile } from "../pageObjects/profile";
const email = faker.internet.email();
const fullName = faker.internet.displayName();
const password = faker.internet.password();

test.describe.serial("Profile page functionality test", () => {
    let profile;
    test.beforeEach(async ({page}) => {
         profile = new Profile(page);
        await page.goto("/account/register");
        await page.waitForLoadState("networkidle");
    })
    
    test("Validate registration with valid information", async ({ page }) => {
        
        await profile.enterFullName(fullName);
        await profile.enterEmail(email);
        await profile.enterPassword(password);
        await profile.clickButton("Sign Up");
        await expect(page).toHaveTitle("EverShop");
    });

    test("Validate login with invalid fullname", async () => {
        
        await profile.enterFullName("");
        await profile.enterEmail(email);
        await profile.enterPassword(password);
        await profile.clickButton("Sign Up");
        await expect(profile.invalidFullNameErrorMessage).toBeVisible();
    });

    test("Validate login with invalid email", async () => {
        
        await profile.enterFullName(fullName);
        await profile.enterEmail("Invalid email");
        await profile.enterPassword(password);
        await profile.clickButton("Sign Up");
        await expect(profile.invalidEmailErrorMessage).toBeVisible();
    });

    test("Validate login with invalid password", async () => {
        
        await profile.enterFullName(fullName);
        await profile.enterEmail(email);
        await profile.enterPassword("");
        await profile.clickButton("Sign Up");
        await expect(profile.invalidPassErrorMessage).toBeVisible();
    });
});