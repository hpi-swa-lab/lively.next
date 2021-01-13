const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('localhost:9011');
  await page.screenshot({path: 'example.png'});
  await browser.close();
})();