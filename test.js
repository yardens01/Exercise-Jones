const puppeteer = require('puppeteer');
async function run() {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.goto('https://chercher.tech/practice/dropdowns');
    await page.select("select#first", "Apple")
    await page.waitFor(30000)
    //await browser.close();
}
run()