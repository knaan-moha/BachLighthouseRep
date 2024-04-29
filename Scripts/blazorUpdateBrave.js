const fs = require("fs");
const puppeteer = require("puppeteer"); // v20.7.4 or later
const path = require("path");

const browserPaths = {
  // edge: "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  //chrome: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  brave: "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
};
let globalCounter = 1;

const performTasksAndGenerateReport = async (browserType) => {
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
    name: "blazorUpadate",
    config,
    flags,
  });
  {
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
    await targetPage.goto("http://localhost:5092/");
    await Promise.all(promises);
  }
  await lhFlow.endNavigation();
  await lhFlow.startTimespan();
  {
    const targetPage = page;
    console.log(`Updating record number ${globalCounter}`);
    await puppeteer.Locator.race([
      targetPage.locator(`tr:nth-of-type(${globalCounter}) a`),
      targetPage.locator(
        `::-p-xpath(//*[@id="app"]/div/main/article/div/table/tbody/tr[${globalCounter}]/td[6]/a)`
      ),

      targetPage.locator(`:scope >>> tr:nth-of-type(${globalCounter}) a`),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 4.140625,
          y: 11.40625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("#firstName"),
      targetPage.locator('::-p-xpath(//*[@id=\\"firstName\\"])'),
      targetPage.locator(":scope >>> #firstName"),
      targetPage.locator("::-p-text(zekaria)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 212,
          y: 23.8125,
        },
      });
  }
  {
    const targetPage = page;
    await targetPage.keyboard.down("Meta");
  }
  {
    const targetPage = page;
    await targetPage.keyboard.down("a");
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up("Meta");
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up("a");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("#firstName"),
      targetPage.locator('::-p-xpath(//*[@id=\\"firstName\\"])'),
      targetPage.locator(":scope >>> #firstName"),
      targetPage.locator("::-p-text(zekaria)"),
    ])
      .setTimeout(timeout)
      .fill("UpdatedFirstName");
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
      targetPage.locator("::-p-text(mohamed)"),
    ])
      .setTimeout(timeout)
      .fill("UpdatedLastName");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("#email"),
      targetPage.locator('::-p-xpath(//*[@id=\\"email\\"])'),
      targetPage.locator(":scope >>> #email"),
      targetPage.locator("::-p-text(teste@uia.no)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 142,
          y: 11.8125,
        },
      });
  }

  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("#email"),
      targetPage.locator('::-p-xpath(//*[@id=\\"email\\"])'),
      targetPage.locator(":scope >>> #email"),
      targetPage.locator("::-p-text(teste@uia.no)"),
    ])
      .setTimeout(timeout)
      .fill("UpdatedEmail@uia.no");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator(
        '::-p-aria([role=\\"article\\"]) >>>> ::-p-aria([role=\\"spinbutton\\"])'
      ),
      targetPage.locator("#age"),
      targetPage.locator('::-p-xpath(//*[@id=\\"age\\"])'),
      targetPage.locator(":scope >>> #age"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 243,
          y: 20.8125,
        },
      });
  }

  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator(
        '::-p-aria([role=\\"article\\"]) >>>> ::-p-aria([role=\\"spinbutton\\"])'
      ),
      targetPage.locator("#age"),
      targetPage.locator('::-p-xpath(//*[@id=\\"age\\"])'),
      targetPage.locator(":scope >>> #age"),
    ])
      .setTimeout(timeout)
      .fill("20");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("#phoneNumber"),
      targetPage.locator('::-p-xpath(//*[@id=\\"phoneNumber\\"])'),
      targetPage.locator(":scope >>> #phoneNumber"),
      targetPage.locator("::-p-text(48679768)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 126,
          y: 20.8125,
        },
      });
  }

  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("#phoneNumber"),
      targetPage.locator('::-p-xpath(//*[@id=\\"phoneNumber\\"])'),
      targetPage.locator(":scope >>> #phoneNumber"),
      targetPage.locator("::-p-text(48679768)"),
    ])
      .setTimeout(timeout)
      .fill("456997733");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("#Register"),
      targetPage.locator('::-p-xpath(//*[@id=\\"Register\\"])'),
      targetPage.locator(":scope >>> #Register"),
      targetPage.locator("::-p-text(2024-04-02)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 400,
          y: 14.8125,
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
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/article/div/form/div[4]/div[2]/select)'
      ),
      targetPage.locator(":scope >>> select"),
      targetPage.locator("::-p-text(1)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 70,
          y: 26.8125,
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
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/article/div/form/div[4]/div[2]/select)'
      ),
      targetPage.locator(":scope >>> select"),
      targetPage.locator("::-p-text(1)"),
    ])
      .setTimeout(timeout)
      .fill("2");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Update)"),
      targetPage.locator("button"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/article/div/form/button)'
      ),
      targetPage.locator(":scope >>> button"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 48,
          y: 15.8125,
        },
      });
  }
  await lhFlow.endTimespan();
  const lhFlowReport = await lhFlow.generateReport();
  let reportPath = `../UserFlows/notDeployed/Blazor/Update/${browserType}`;
  fs.mkdirSync(reportPath, { recursive: true });
  const reportFilename = `blazorUpdate${globalCounter}ReportLight.html`;
  try {
    fs.writeFileSync(path.join(reportPath, reportFilename), lhFlowReport);
    //console.log("Report saved successfully!");
  } catch (error) {
    console.error("Error saving the report:", error);
  }
  await browser.close();
  globalCounter++;
};

(async () => {
  //? we make iterative over the browser as key
  for (const browserType of Object.keys(browserPaths)) {
    console.log(`Performance Measuring with browser  ${browserType}...`);

    //? trails
    for (let trailNumber = 1; trailNumber <= 20; trailNumber++) {
      console.log(`Starting trial ${trailNumber}...`);

      await performTasksAndGenerateReport(browserType).catch((err) => {
        console.error(
          `Error in trail ${trailNumber} with ${browserType}:`,
          err
        );
      });
    }
  }

  process.exit();
})();
