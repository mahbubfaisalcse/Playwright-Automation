import { BasePage } from "./basePage";

export class Product extends BasePage {
    constructor(page){
        super(page);
    }

    getProductFromList(productName, color){
        return this.page.getByRole("heading", { 
            name: `${productName} - ${color}`, 
            level: 3 
        });
    }

    async clickOnProductFromList(productName, color){
        await this.getProductFromList(productName, color).click();
    }
}