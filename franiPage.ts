import {By} from 'selenium-webdriver'; 
import {BasePage} from './basePage'; 

export class Frani extends BasePage {
    phones: By = By.xpath('(//span[@class="label font-body-md"])[1]');
    audio: By = By.xpath('(//a[@class="nav-box-link flex"])[2]');

    constructor(){
        super({url:'https://www.oneplus.com/us'})
    }
};  