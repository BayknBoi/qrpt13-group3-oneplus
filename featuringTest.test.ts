import { Hunter } from "./hunterPage";
const page = new Hunter(); 

test("Click on the FAQ Page", async () => {
    await page.navigate();
    await page.click(page.featuring1);
    await page.driver.quit();
});