import {test, expect} from "@playwright/test";
import { Profile } from "../pageObjects/profile";
import { Product} from "../pageObjects/product";
import { Search } from "../pageObjects/search";
const email = "faisalm7864@gmail.com";
const password = "Faisal786@";
const productName = "Stainless Steel Thermos";
const color = "Yellow";

test.describe.serial("Product add to cart test", () => {
    let profile;

    test.beforeEach(async ({ page }) => {
         profile = new Profile(page);       
        await page.goto("/account/login"); // navigate to the homepage
        await profile.login(email, password); // login using the login method from the profile page object
        await page.waitForLoadState("networkidle");
        await page.waitForURL("https://demo.evershop.io/"); // wait for the homepage to load after login. REGEX pattern to match any URL that contains demo.evershop.io
        await page.waitForTimeout(3000);
        await expect(page).toHaveTitle("EverShop");
        
    });

        test("Validate add to cart from the search", async ({ page }) => {         
            const product = new Product(page);
            const search = new Search(page);
            await search.enterSearchText(productName);
            await page.waitForLoadState("networkidle");
            await product.clickOnProductFromList(productName, color);
            await page.waitForLoadState("networkidle");
            await page.waitForTimeout(2000);
            await product.clickButton(color);
            await expect(page).waitForURL("**color=3", { timeout: 10000 });
            await product.clickButton("ADD TO CART");
            await expect(product.buttonLocator("Checkout")).toBeVisible();
            await page.pause();
        });

        test("Validate add to cart from home page", async ({ page }) => {
            const product = new Product(page);      
            await product.clickOnProductFromList(productName, color);
            await page.waitForLoadState("networkidle");
            await page.waitForTimeout(2000);
            await product.clickButton(color);
            await expect(page).waitForURL("**color=3", { timeout: 10000 });
            await product.clickButton("ADD TO CART");
            await expect(product.buttonLocator("Checkout")).toBeVisible();
            await page.pause();
        });

        test("Validate add to cart from accessories page", async ({ page }) => {
            const product = new Product(page); 
            await product.hoverOnButton("Shop");
            await product.clickOnLink("Accessories"); 
            await page.waitForLoadState("networkidle");    
            await product.clickOnProductFromList(productName, color);
            await page.waitForLoadState("networkidle");
            await page.waitForTimeout(2000);
            await product.clickButton(color);
            await expect(page).waitForURL("**color=3", { timeout: 10000 });
            await product.clickButton("ADD TO CART");
            await expect(product.buttonLocator("Checkout")).toBeVisible();
            await page.pause();
        });
});