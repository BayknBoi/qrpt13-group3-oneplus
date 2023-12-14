import { Frani } from "./franiPage";
const page = new Frani(); 


test("Click on the phones and audio", async () => {
    await page.navigate();
    await page.click(page.phones);
    await page.click(page.audio);
    await page.click(page.tablets);
    await page.click(page.gear);
    await page.click(page.powerCables);
    await page.click(page.powerCables);
    await page.click(page.bundles);
    await page.driver.quit()
    
})