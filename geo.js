const {chromium, webkit, firefox, devices} = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext({
    geolocation: {
      latitude: 51.5080647,
      longitude: -0.0993812,
    },
    permissions: ['geolocation'],
  });
  const page = await context.newPage();
  await page.goto('https://maps.google.com');
})();
