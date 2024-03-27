const fs = require("fs");
const puppeteer = require("puppeteer"); // v20.7.4 or later

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    // use the default size of the browser window
    defaultViewport: null,
  });
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  const lhApi = await import("lighthouse"); // v10.0.0 or later
  const flags = {
    emulatedFormFactor: "desktop",
    screenEmulation: {
      disabled: true,
    },
  };

  const config = {
    extends: "lighthouse:default",
  };
  const lhFlow = await lhApi.startFlow(page, {
    name: "reactpageLoads",
    config,
    flags,
  });

  await lhFlow.startNavigation();
  {
    const targetPage = page;
    const promises = [];
    const startWaitingForEvents = () => {
      promises.push(targetPage.waitForNavigation());
    };
    startWaitingForEvents();
    await targetPage.goto("http://localhost:5092/");
    await Promise.all(promises);
  }

  await page.deleteCookie(...(await page.cookies()));

  // Clear localStorage and sessionStorage after the page has loaded
  try {
    await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
  } catch (err) {
    console.error("Error clearing storage:", err);
  }
  await lhFlow.endNavigation();
  const lhFlowReport = await lhFlow.generateReport();
  fs.writeFileSync(__dirname + "/flow.report.html", lhFlowReport);

  await browser.close();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
