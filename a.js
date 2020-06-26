const {chromium, webkit, firefox} = require('playwright');

(async () => {
  for (const browserType of [chromium, webkit, firefox]) {
    const browser = await browserType.launch();
    const page = await browser.newPage();
    await page.goto('https://github.com/microsoft/playwright');
    await page.screenshot({
      path: `screenshot-${browserType.name()}.png`,
    });
    await browser.close();
    console.log('done: ' + browserType.name());
  }
})();
