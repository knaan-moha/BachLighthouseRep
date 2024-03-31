const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer"); // v20.7.4 or later
const browserPaths = {
  //edge: "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  //chrome: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  brave: "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
};

const browserType = "brave";

const performTasksAndGenerateReport = async (trails_num) => {
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
    name: "reactDeleteUserflow",
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
    await targetPage.goto("http://localhost:3000/");
    await Promise.all(promises);
  }
  await lhFlow.endNavigation();
  await lhFlow.startTimespan();
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("tr:nth-of-type(1) button > i"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"root\\"]/div/table/tbody/tr[1]/td[6]/button/i)'
      ),
      targetPage.locator(":scope >>> tr:nth-of-type(1) button > i"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 9.296875,
          y: 12,
        },
      });
  }
  await lhFlow.endTimespan();
  const lhFlowReport = await lhFlow.generateReport();

  let reportPath = `../UserFlows/notDeployed/React/Delete/${browserType}`;

  fs.mkdirSync(reportPath, { recursive: true });

  const reportFilename = `reactDelete${trails_num}ReportLight.html`;
  try {
    fs.writeFileSync(path.join(reportPath, reportFilename), lhFlowReport);
    //console.log("Report saved successfully!");
  } catch (error) {
    console.error("Error saving the report:", error);
  }

  await browser.close();
};
//* trails
(async () => {
  for (let trialNumber = 1; trialNumber <= 2; trialNumber++) {
    console.log(`Starting trial ${trialNumber}...`);
    await performTasksAndGenerateReport(trialNumber).catch((err) => {
      console.error(`Error in trial ${trialNumber}:`, err);
    });
  }
})();
