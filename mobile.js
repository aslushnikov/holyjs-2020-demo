const {chromium, webkit, firefox, devices} = require('playwright');
const iPhonePro11 = devices['iPhone 11 Pro'];
console.log(iPhonePro11);

(async () => {
  const browser = await webkit.launch({
    headless: false,
  });
  const context = await browser.newContext({
    ...iPhonePro11,
  });
  const page = await context.newPage();
  await page.goto('https://github.com/microsoft/playwright');
})();
