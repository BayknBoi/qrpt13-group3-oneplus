import {By} from 'selenium-webdriver'; 
import {BasePage} from './basePage'; 

export class Frani extends BasePage {
    phones: By = By.xpath('(//span[@class="label font-body-md"])[1]');
    audio: By = By.xpath('(//a[@class="nav-box-link flex"])[2]');
    tablets: By = By.xpath('(//a[@class="nav-box-link flex"])[3]');
    gear: By = By.xpath('(//a[@class="nav-box-link flex"])[4]');
    powerCables: By = By.xpath('(//a[@class="nav-box-link flex"])[5]');
    casesProtection: By = By.xpath('(//a[@class="nav-box-link flex"])[6]');
    bundles: By = By.xpath('(//a[@class="nav-box-link flex"])[7]');


    constructor(){
        super({url:'https://www.oneplus.com/us'})
    }
};  