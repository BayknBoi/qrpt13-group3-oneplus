import {BasePage} from './basePage'
import { By } from 'selenium-webdriver'

export class markiesiaPage extends BasePage {
    support: By = By.xpath('(//span[text()="Support"])[1]'); 
    //locating the support page at the top header
    aboutOnePlus: By = By.xpath('(//a[text()="About OnePlus"])'); 
    //locating the about OnePlus located in the bottom footer
    bundles: By = By.xpath('(//a[text()="Bundles"])');
    //locating the bundles page at the bottom footer
    cart: By = By.xpath('//a[@class="shop-bag__icon hidden-xs"]');
    //Locating the cart page
    goShopping: By = By.xpath('//a[@class="one-button btn-red frozen"]');
    //Testing the continue shopping button
    searchField: By = By.xpath('//input[@class="el-input__inner"]');
    //Testing the search field on the support page


    constructor() {
        super({url:'https://www.oneplus.com/us/store?from=ribbon'})
    }; 
    async search(searchThing: string) {
        return this.setInput(this.searchField, `${searchThing}\n`);
    }; 
};