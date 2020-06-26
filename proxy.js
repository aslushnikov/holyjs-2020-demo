const {chromium, webkit, firefox, devices} = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false,
    proxy: {
      server: 'http://proxy.aslushnikov.com:3128',
      username: process.env.PROXY_USERNAME,
      password: process.env.PROXY_PASSWORD,
    },
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
