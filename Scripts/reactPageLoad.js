const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer"); // v20.7.4 or later

const browserPaths = {
  edge: "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  chrome: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  brave: "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
};

// make the browser
//const browserType = "edge";

const performTasksAndGenerateReport = async (browserType, trails_num) => {
  const browser = await puppeteer.launch({
    headless: false,
    // use the default size of the browser window
    defaultViewport: null,
    executablePath: browserPaths[browserType],
  });
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  const lhApi = await import("lighthouse"); // v10.0.0 or later
  const flags = {
    emulatedFormFactor: "desktop",
    throttlingMethod: "simulate",
  };
  const config = lhApi.desktopConfig;
  const lhFlow = await lhApi.startFlow(page, {
    name: "reactpageLoads",
    config,
    flags,
  });

  const targetPage = page;
    await targetPage.setViewport({
      width: 1350,
      height: 940,
    });
  }

  await lhFlow.startNavigation();
  {
    const targetPage = page;
    const promises = [];
    const startWaitingForEvents = () => {
      promises.push(targetPage.waitForNavigation());
    };
    startWaitingForEvents();
    await targetPage.goto("http://localhost:3000/");
    await Promise.all(promises);
  }

  //? Clear localStorage and sessionStorage after the page has loaded
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
  let reportPath = `../Pageloads/notDeployed/React/${browserType}`;
  fs.mkdirSync(reportPath, { recursive: true });

  const reportFilename = `reactPageLoad${trails_num}ReportLight.html`;
  try {
    fs.writeFileSync(path.join(reportPath, reportFilename), lhFlowReport);
    //console.log("Report saved successfully!");
  } catch (error) {
    console.error("Error saving the report:", error);
  }
  await browser.close();
};

(async () => {
  // we make iterative over the browser as key
  for (const browserType of Object.keys(browserPaths)) {
    console.log(`Performance Measuring with browser  ${browserType}...`);

    // trails
    for (let trailNumber = 1; trailNumber <= 20; trailNumber++) {
      console.log(`Starting trial ${trailNumber}...`);

      await performTasksAndGenerateReport(browserType, trailNumber).catch(
        (err) => {
          console.error(
            `Error in trail ${trailNumber} with ${browserType}:`,
            err
          );
        }
      );
    }
  }
})();
