import { Hunter,Hunter1 } from "./hunterPage";
const page = new Hunter(); 


test("Click on the Phone Page", async () => {
    await page.navigate();
    await page.click(page.phone);
    await page.click(page.phonePage);
    await page.driver.quit();
    
})