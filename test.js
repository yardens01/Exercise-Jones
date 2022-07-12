const puppeteer = require('puppeteer');

//Veriables
const baseURL = 'http://contractorsinsurancereview.com/ExampleForm/';
const name = "Yarden";
const email = "yardens01@gmmail.com";
const phone= "0545676005";
const company = "Jones";
const employees = '51-500';


//Puppeteer runner
(async () => {
    //Page loaders
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(baseURL);

    //Variable set function
    await variableSet(page);

    //Screenshot capture
    await page.screenshot({path: 'mainPageScreenshot.png'})

    //Click button
    await page.click(".primary.button");

    //Page change check using page title.
    let title = await page.title();
    if (title.match("Thank You"))
        console.log('"Thank You" Page has been reached.');

    
    //await browser.close();
})();



async function variableSet(page) {
    //Added external function and try catch for rubbostness and easy maintenance
    //For ease of reading didn't make a try-catch for each value, although it's a better practice in case a bug will appear in the future. 
try {
    await page.type("#name", name);
    await page.type("#email", email);
    await page.type("#phone", phone);
    await page.type("#company", company);
    await page.type("#employees", employees);
} catch (error) {
    console.log("Variable set error:" + error)
}
    
}
