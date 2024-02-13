const fs = require("fs");
const puppeteer = require("puppeteer"); // v20.7.4 or later

//config for the browser types

const browserPaths = {
  edge: "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  chrome: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
};

// make the browser
const browserType = process.argv[2] || "chrome";

// make check if the browser type exits
if (!Object.keys(browserPaths).includes(browserType)) {
  console.error("Unsupported Browser Path!");
  process.exit(1);
}

const performTasksAndGenerateReport = async (trails_num) => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: browserPaths[browserType],
    // "Applications/Brave Browser.app/Contents/MacOS/Brave Browser"
    // Path to Brave
  });

  const page = await browser.newPage();
  const timeout = 10000;
  page.setDefaultTimeout(timeout);

  const lhApi = await import("lighthouse"); // v10.0.0 or later
  const flags = {
    screenEmulation: {
      disabled: true,
      throttle: true,
    },
    throttlingMethod: "devtools",
    throttling: {
      rttMs: 150,
      throughputKbps: 900,
      cpuSlowdownMultiplier: 1,
    },
    screenEmulation: {
      mobile: false,
      width: 1350,
      height: 940,
      deviceScaleFactor: 1,
      disabled: false,
    },
    emulatedUserAgent: "your-desktop-user-agent-string-here",
  };
  const config = lhApi.desktopConfig;
  const lhFlow = await lhApi.startFlow(page, {
    name: "blazorAddUserflow",
    config,
    flags,
  });
  {
    const targetPage = page;
    await targetPage.setViewport({
      width: 1512,
      height: 447,
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
    await targetPage.goto("http://localhost:5138/students", {
      waitUntil: "domcontentloaded",
    });

    await Promise.all(promises);
  }
  await lhFlow.endNavigation();
  await lhFlow.startTimespan();
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(New Student)"),
      targetPage.locator("article > div > a"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/article/div/a)'
      ),
      targetPage.locator(":scope >>> article > div > a"),
      targetPage.locator("::-p-text(New Student)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 60,
          y: 17.0078125,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("#firstName"),
      targetPage.locator('::-p-xpath(//*[@id=\\"firstName\\"])'),
      targetPage.locator(":scope >>> #firstName"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 84,
          y: 11.8125,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("#firstName"),
      targetPage.locator('::-p-xpath(//*[@id=\\"firstName\\"])'),
      targetPage.locator(":scope >>> #firstName"),
    ])
      .setTimeout(timeout)
      .fill("knaan");
  }
  {
    const targetPage = page;
    await targetPage.keyboard.down("Tab");
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up("Tab");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("form > div > div:nth-of-type(2) > input"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/article/form/div/div[2]/input)'
      ),
      targetPage.locator(":scope >>> form > div > div:nth-of-type(2) > input"),
    ])
      .setTimeout(timeout)
      .fill("moh");
  }
  {
    const targetPage = page;
    await targetPage.keyboard.down("Tab");
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up("Tab");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("#lastName"),
      targetPage.locator('::-p-xpath(//*[@id=\\"lastName\\"])'),
      targetPage.locator(":scope >>> #lastName"),
    ])
      .setTimeout(timeout)
      .fill("mohame@uia.no");
  }
  {
    const targetPage = page;
    await targetPage.keyboard.down("Tab");
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up("Tab");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator(
        '::-p-aria([role=\\"article\\"]) >>>> ::-p-aria([role=\\"spinbutton\\"])'
      ),
      targetPage.locator("div:nth-of-type(4) > div:nth-of-type(1) > input"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/article/form/div/div[4]/div[1]/input)'
      ),
      targetPage.locator(
        ":scope >>> div:nth-of-type(4) > div:nth-of-type(1) > input"
      ),
    ])
      .setTimeout(timeout)
      .fill("23");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("div:nth-of-type(4) > div:nth-of-type(2) > input"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/article/form/div/div[4]/div[2]/input)'
      ),
      targetPage.locator(
        ":scope >>> div:nth-of-type(4) > div:nth-of-type(2) > input"
      ),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 26,
          y: 21.8125,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("div:nth-of-type(4) > div:nth-of-type(2) > input"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/article/form/div/div[4]/div[2]/input)'
      ),
      targetPage.locator(
        ":scope >>> div:nth-of-type(4) > div:nth-of-type(2) > input"
      ),
    ])
      .setTimeout(timeout)
      .fill("83838383");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("div:nth-of-type(5) > input"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/article/form/div/div[5]/input)'
      ),
      targetPage.locator(":scope >>> div:nth-of-type(5) > input"),
      targetPage.locator("::-p-text(2024-01-27)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 359,
          y: 24.8125,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("div:nth-of-type(5) > input"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/article/form/div/div[5]/input)'
      ),
      targetPage.locator(":scope >>> div:nth-of-type(5) > input"),
      targetPage.locator("::-p-text(2024-01-27)"),
    ])
      .setTimeout(timeout)
      .fill("2024-01-28");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator(
        '::-p-aria([role=\\"article\\"]) >>>> ::-p-aria([role=\\"combobox\\"])'
      ),
      targetPage.locator("select"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/article/form/div/div[6]/select)'
      ),
      targetPage.locator(":scope >>> select"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 41,
          y: 18.8125,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator(
        '::-p-aria([role=\\"article\\"]) >>>> ::-p-aria([role=\\"combobox\\"])'
      ),
      targetPage.locator("select"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/article/form/div/div[6]/select)'
      ),
      targetPage.locator(":scope >>> select"),
    ])
      .setTimeout(timeout)
      .fill("1");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("form > div"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/article/form/div)'
      ),
      targetPage.locator(":scope >>> form > div"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 882,
          y: 226.8125,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Save)"),
      targetPage.locator("main button"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/article/form/button)'
      ),
      targetPage.locator(":scope >>> main button"),
      targetPage.locator("::-p-text(Save)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 30,
          y: 22.8125,
        },
      });
  }
  await lhFlow.endTimespan();
  const lhFlowReport = await lhFlow.generateReport();
  let reportPath = `./notDeployed/Blazor/${browserType}`;
  if (!fs.existsSync(reportPath)) {
    fs.mkdirSync(reportPath, { recursive: true });
  }
  const reportFilename = `blazorAdd${trails_num}ReportLight.html`;
  fs.writeFileSync(`${reportPath}/${reportFilename}`, lhFlowReport);
  await browser.close();
};
// trails
(async () => {
  for (let trialNumber = 1; trialNumber <= 2; trialNumber++) {
    console.log(`Starting trial ${trialNumber}...`);
    await performTasksAndGenerateReport(trialNumber).catch((err) => {
      console.error(`Error in trial ${trialNumber}:`, err);
    });
  }
})();
