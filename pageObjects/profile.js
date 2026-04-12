import { BasePage } from "./basePage";

export class Profile extends BasePage{
    constructor(page){
        super(page); // to stop overlap confilct with basepage constructor
        // account icon-click
        this.accountIcon = this.page.locator("/a[contains(@href,'account')]");
        
        // create account page
        this.createAccLink = this.page.getByRole("link", { name: "Create an account" });
        this.fullNameInput = this.page.getByRole("textbox", { name: "Full Name" });
        this.emailInput = this.page.getByRole("textbox", { name: "Email" });
        this.passwordInput = this.page.getByRole("textbox", { name: "Password" });
        this.invalidFullNameErrorMessage = this.page.getByText("Full Name is required"); 
        this.invalidEmailErrorMessage = this.page.getByText("Please enter a valid email address");
        this.invalidPassErrorMessage = this.page.getByText("Password is required");
//         this.signUpButton = this.page.getByRole("button", { name: "Sign Up" });
// 
//         // login page
//         this.signInButton = this.page.getByRole("button", { name: "Sign In" });
    }


    async clickOnAccountIcon(){
        await this.accountIcon.click();
    }

    async  clickOnCreateAccountLink(){
        await this.creatAccLink.click();
    }

    async enterEmail(email) {
        await this.emailInput.fill(email);
    }

    async enterFullName(fullname){
        await this.fullNameInput.fill(fullname);
    }

    async enterPassword(password){
        await this.passwordInput.fill(password);
    }
    // async clickSignUpButton(){
    //     await this.signUpButton.click();
    // }
    // async clickSignInButton(){
    //     await this.signInButton.ckick();
    // }
}