import { BasePage } from "./basePage";

export class Search extends BasePage{
    constructor(page){
        super(page);
        this.searchIcon = this.page.locator("//a[@class='search__icon']" );
        this.searchInput = this.page.getByPlaceholder('Search');
    }

    async clickOnSearchIcon(){
        await this.searchIcon.click();
    }

    async enterSearchText(searchText){
        await this.clickOnSearchIcon();
        await this.searchInput.fill(searchText);
        await this.page.keyboard.press("Enter");
    }

    // async doSearch(searchText){
    //     await this.clickOnSearchIcon();
    //     await this.enterSearchText(searchText);
    //     await this.page.waitForTimeout(3000);
    // }
}



