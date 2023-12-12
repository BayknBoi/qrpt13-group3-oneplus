import { Frani } from "./franiPage";
const page = new Frani(); 


test("Click on the phones and audio", async () => {
    await page.navigate();
    await page.click(page.phones);
    await page.click(page.audio);
    await page.driver.quit()
    
})