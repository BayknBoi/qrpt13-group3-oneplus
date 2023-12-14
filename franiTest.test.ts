import { Frani } from "./franiPage";
const page = new Frani(); 


test("Click on the phones and audio", async () => {
    await page.navigate();
    await page.click(page.phones);
    await page.click(page.audio);

})

test("Click on the tablets and gear", async () => {
    await page.click(page.tablets);
    await page.click(page.gear);
    
})

test("Click on the power cables, cases and protection and bundles", async () => {
    await page.click(page.powerCables);
    await page.click(page.casesProtection);
    await page.click(page.bundles);
    await page.driver.quit()
    
})
