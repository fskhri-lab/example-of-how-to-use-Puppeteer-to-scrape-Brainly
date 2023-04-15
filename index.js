const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://brainly.com');
  const title = await page.title();
  console.log(title);
  await browser.close();
})();
