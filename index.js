const TimeUntilSpam = 30 //Time to scan the QR-Code
const Message = "Crack"
const SpamCount = 10

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://web.whatsapp.com/');
  await page.waitForTimeout(TimeTillSpam * 1000);
  for (let i = 0; i < SpamCount; i++) {
    await page.keyboard.type(Message)
    await page.keyboard.press("Enter")
  }
  await browser.close();
})();
