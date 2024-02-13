const fs = require("fs");
const os = require("os");
const puppeteer = require("puppeteer"); // v20.7.4 or later

// defining for the browser path for mac os
let browserPaths = {
  edge: "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  chrome: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  brave: "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
};

// env os config for window

if (os.platform === "win32") {
  browserPaths = {
    edge: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    // ad more for paths if it needs
  };
}

// check for the browsers type

const browserType = process.argv[3] || "chrome";

const pageloadPerformance = async (trails_num) => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: browserPaths[browserType],
  });
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  const lhApi = await import("lighthouse"); // v10.0.0 or later
  const flags = {
    screenEmulation: {
      disabled: true,
    },
  };
  const config = lhApi.desktopConfig;
  const lhFlow = await lhApi.startFlow(page, {
    name: "Pageloadblazor",
    config,
    flags,
  });
  {
    const targetPage = page;
    await targetPage.setViewport({
      width: 1920,
      height: 623,
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
    await targetPage.goto("http://localhost:5138/students");
    await Promise.all(promises);
  }
  await lhFlow.endNavigation();
  await lhFlow.startTimespan();
  {
    const targetPage = page;
    await targetPage.keyboard.down("Meta");
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up("Meta");
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up("r");
  }
  await lhFlow.endTimespan();
  const lhFlowReport = await lhFlow.generateReport();

  // config for the fs

  let reportPath = `./Pageloads/NotDeployed/Blazor/${browserType}`;

  // we make a check if the path does not exist
  if (!fs.existsSync(reportPath)) {
    // make new folder
    fs.mkdirSync(reportPath, { recursive: true });
  }

  // save the reports as html

  const reportFilename = `blazorPageLoad${trails_num}ReportLight.html`;
  fs.writeFileSync(`${reportPath}/${reportFilename}`, lhFlowReport);
  await browser.close();
};

// iterate over

(async () => {
  for (let trail_num = 1; trail_num <= 2; trail_num++) {
    console.log(`starting trail ${trail_num}`);
    await pageloadPerformance(trail_num).catch((err) => {
      console.error(`Error in trial ${trail_num}:`, err);
    });
  }
})();
