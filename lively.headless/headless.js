
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:9011/worlds/load?name=__newWorld__');
  await new Promise(r => { setTimeout(r, 200000)})
  await page.keyboard.press('f');
  await page.keyboard.press('Enter'); // Enter Key
  await new Promise(r => { setTimeout(r, 5000)})
  await page.screenshot({path: 'example.png'});
  await browser.close();
})();