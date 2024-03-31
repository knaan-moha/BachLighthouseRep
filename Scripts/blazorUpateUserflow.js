const fs = require("fs");
const puppeteer = require("puppeteer"); // v20.7.4 or later
const path = require("path");

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
    name: "blazorUpadate",
    config,
    flags,
  });
  {
    const targetPage = page;
    await targetPage.setViewport({
      width: 1512,
      height: 774,
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
      targetPage.locator("tr:nth-of-type(1) a > i"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/article/div/table/tbody/tr[1]/td[6]/a/i)'
      ),
      targetPage.locator(":scope >>> tr:nth-of-type(1) a > i"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 3.9140625,
          y: 10.40625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("#firstName"),
      targetPage.locator('::-p-xpath(//*[@id=\\"firstName\\"])'),
      targetPage.locator(":scope >>> #firstName"),
      targetPage.locator("::-p-text(Kate)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 307,
          y: 15.8125,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("#firstName"),
      targetPage.locator('::-p-xpath(//*[@id=\\"firstName\\"])'),
      targetPage.locator(":scope >>> #firstName"),
      targetPage.locator("::-p-text(Kate)"),
    ])
      .setTimeout(timeout)
      .fill("");
  }
  {
    const targetPage = page;
    await targetPage.keyboard.down("Backspace");
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up("Backspace");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("#firstName"),
      targetPage.locator('::-p-xpath(//*[@id=\\"firstName\\"])'),
      targetPage.locator(":scope >>> #firstName"),
      targetPage.locator("::-p-text(Kate)"),
    ])
      .setTimeout(timeout)
      .fill("Kate");
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
      .fill("Lobkovskaya");
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
      targetPage.locator("#email"),
      targetPage.locator('::-p-xpath(//*[@id=\\"email\\"])'),
      targetPage.locator(":scope >>> #email"),
      targetPage.locator("::-p-text(test@uia.no)"),
    ])
      .setTimeout(timeout)
      .fill("kate@uia.no");
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
          x: 262,
          y: 10.8125,
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
      .fill("");
  }
  {
    const targetPage = page;
    await targetPage.keyboard.down("Backspace");
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up("Backspace");
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
      .fill("23");
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
          x: 137,
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
      .fill("486797689");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("#Register"),
      targetPage.locator('::-p-xpath(//*[@id=\\"Register\\"])'),
      targetPage.locator(":scope >>> #Register"),
      targetPage.locator("::-p-text(2024-03-30)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 259,
          y: 26.8125,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("#Register"),
      targetPage.locator('::-p-xpath(//*[@id=\\"Register\\"])'),
      targetPage.locator(":scope >>> #Register"),
      targetPage.locator("::-p-text(2024-03-30)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 249,
          y: 30.8125,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("#Register"),
      targetPage.locator('::-p-xpath(//*[@id=\\"Register\\"])'),
      targetPage.locator(":scope >>> #Register"),
      targetPage.locator("::-p-text(2024-03-30)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 384,
          y: 22.8125,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("#Register"),
      targetPage.locator('::-p-xpath(//*[@id=\\"Register\\"])'),
      targetPage.locator(":scope >>> #Register"),
      targetPage.locator("::-p-text(2024-03-30)"),
    ])
      .setTimeout(timeout)
      .fill("2024-03-31");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator(
        '::-p-aria([role=\\"article\\"]) >>>> ::-p-aria([role=\\"combobox\\"])'
      ),
      targetPage.locator("select"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/article/div/form/div/div[6]/select)'
      ),
      targetPage.locator(":scope >>> select"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 58,
          y: 12.8125,
        },
      });
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
          x: 36,
          y: 22.8125,
        },
      });
  }
  await lhFlow.endTimespan();
  const lhFlowReport = await lhFlow.generateReport();
  let reportPath = `../UserFlows/notDeployed/Blazor/Update/${browserType}`;
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

//* trails
(async () => {
  for (let trialNumber = 1; trialNumber <= 2; trialNumber++) {
    console.log(`Starting trial ${trialNumber}...`);
    await performTasksAndGenerateReport(trialNumber).catch((err) => {
      console.error(`Error in trial ${trialNumber}:`, err);
    });
  }
})();
