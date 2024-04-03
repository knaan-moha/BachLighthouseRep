const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer"); // v20.7.4 or later
const browserPaths = {
  edge: "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  chrome: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  brave: "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
};

const performTasksAndGenerateReport = async (browserType, trails_num) => {
  const browser = await puppeteer.launch({
    headless: false,
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
    name: "blazorDeleteUserflow",
    config,
    flags,
  });
  {
    const targetPage = page;
    await targetPage.setViewport({
      width: 1512,
      height: 434,
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
    await targetPage.goto("http://localhost:5092/");
    await Promise.all(promises);
  }
  await lhFlow.endNavigation();
  await lhFlow.startTimespan();
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("tr:nth-of-type(1) button > i"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/article/div/table/tbody/tr[1]/td[6]/button/i)'
      ),
      targetPage.locator(":scope >>> tr:nth-of-type(1) button > i"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 8.1796875,
          y: 4.40625,
        },
      });
  }
  await lhFlow.endTimespan();
  const lhFlowReport = await lhFlow.generateReport();

  let reportPath = `../UserFlows/notDeployed/Blazor/Delete/${browserType}`;
  fs.mkdirSync(reportPath, { recursive: true });
  const reportFilename = `blazorDelete${trails_num}ReportLight.html`;
  try {
    fs.writeFileSync(path.join(reportPath, reportFilename), lhFlowReport);
    //console.log("Report saved successfully!");
  } catch (error) {
    console.error("Error saving the report:", error);
  }

  await browser.close();
};

(async () => {
  //? we make iterative over the browser as key
  for (const browserType of Object.keys(browserPaths)) {
    console.log(`Performance Measuring with browser  ${browserType}...`);

    //? trails
    for (let trailNumber = 1; trailNumber <= 2; trailNumber++) {
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
