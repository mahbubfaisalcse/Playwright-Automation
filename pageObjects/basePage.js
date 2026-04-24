// import { page } from "@playwright/test";

export class BasePage{
    constructor(page){
        this.page = page;
    }

    buttonLocator(button){
        return this.page.getByRole("button", {name: button, exact: true});
    }

    linkLocator(link){
        return this.page.getByRole("link", {name: link});
    }

    async clickButton(button){
        await this.buttonLocator(button).click();
        await this.page.waitForTimeout(2000);
    }

    async clickOnLink(link){
        await this.linkLocator(link).click();
        await this.page.waitForTimeout(2000);
    }

    async hoverOnButton(button){
        await this.buttonLocator(button).hover();
    }
}    