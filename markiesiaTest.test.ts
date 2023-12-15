import { markiesiaPage } from "./markiesiaPage";
const page = new markiesiaPage()

const fs = require('fs')

test('click on support', async () => {
    await page.navigate()
    await page.driver.manage().window().maximize()
    await page.driver.sleep(3000)
    await page.click(page.support);
    await page.click(page.aboutOnePlus);
    await page.click(page.bundles);
})
test('click on cart', async () => {
    await page.navigate()
    await page.driver.sleep(3000)
    await page.click(page.cart);
    await page.click(page.goShopping);
})
test('do a search ', async () => {
    await page.navigate()
    await page.driver.sleep(3000)
    await page.click(page.support);
    await page.click(page.searchField);
    await page.search('shipping');
    await page.driver.quit();   
});