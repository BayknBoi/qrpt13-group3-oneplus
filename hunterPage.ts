import{By}from 'selenium-webdriver';
import{BasePage}from './basePage';

export class Hunter extends BasePage{
    faqlist: By = By.xpath('//*[@id="footer"]/div[1]/div/dl[4]/dd/ul/li[2]/a');
    phonePage: By = By.xpath('//*[@id="page-accessory-list"]/div/section/div/div[2]/div[4]/div/div/div[2]/a/div[2]/div[1]');
    phone: By = By.xpath('(//span[@class="label font-body-md"])[1]');
    featuring: By = By.xpath('//*[@id="nav-pages-slide"]/div[1]/ul/li[3]/a/span')
    featuring1: By = By.xpath('//*[@id="nav-pages-slide"]/div[1]/ul/li[3]/a/span')
    popupclose: By = By.xpath('//*[@id="truste-consent-close"]/img')
    popupclose2: By = By.xpath('//*[@id="closeIconSvg"]')

    constructor(){
        super({url:'https://www.oneplus.com/us'});
    };
};

export class Hunter1 extends BasePage{
    color: By = By.xpath('//*[@id="phoneInfoStart"]/div[1]/div[2]/div[2]');


    constructor(){
        super({url:'https://www.oneplus.com/us/oneplus-open?sku=5011103225'});
    };
};