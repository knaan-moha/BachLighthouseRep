const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer"); // v20.7.4 or later

const browserPaths = {
  //edge: "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  chrome: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  // brave: "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
};

const browserType = "chrome";
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
    name: "blazorAddUserFlow",
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
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(New Student)"),
      targetPage.locator("#Add"),
      targetPage.locator('::-p-xpath(//*[@id=\\"Add\\"])'),
      targetPage.locator(":scope >>> #Add"),
      targetPage.locator("::-p-text(New Student)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 48,
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
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 160,
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
    ])
      .setTimeout(timeout)
      .fill("OriginalFirstName");
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
      .fill("OriginalLastName");
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
    ])
      .setTimeout(timeout)
      .fill("OriginalEmail@uia.no");
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
          x: 159,
          y: 12.8125,
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
      .click({
        count: 2,
        offset: {
          x: 159,
          y: 12.8125,
        },
      });
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
      .fill("27");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("#phoneNumber"),
      targetPage.locator('::-p-xpath(//*[@id=\\"phoneNumber\\"])'),
      targetPage.locator(":scope >>> #phoneNumber"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 42,
          y: 8.8125,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("#phoneNumber"),
      targetPage.locator('::-p-xpath(//*[@id=\\"phoneNumber\\"])'),
      targetPage.locator(":scope >>> #phoneNumber"),
    ])
      .setTimeout(timeout)
      .fill("4867976844");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("#Register"),
      targetPage.locator('::-p-xpath(//*[@id=\\"Register\\"])'),
      targetPage.locator(":scope >>> #Register"),
      targetPage.locator("::-p-text(2024-03-28)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 332,
          y: 8.8125,
        },
      });
  }

  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("#Register"),
      targetPage.locator('::-p-xpath(//*[@id=\\"Register\\"])'),
      targetPage.locator(":scope >>> #Register"),
      targetPage.locator("::-p-text(dateString)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 391,
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
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/article/div/form/div/div[6]/select)'
      ),
      targetPage.locator(":scope >>> select"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 78,
          y: 25.8125,
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
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/article/div/form/div/div[6]/select)'
      ),
      targetPage.locator(":scope >>> select"),
    ])
      .setTimeout(timeout)
      .fill("1");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Save)"),
      targetPage.locator("button"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/article/div/form/button)'
      ),
      targetPage.locator(":scope >>> button"),
      targetPage.locator("::-p-text(Save)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 26,
          y: 15.8125,
        },
      });
  }
  await lhFlow.endTimespan();

  const lhFlowReport = await lhFlow.generateReport();
  let reportPath = `../UserFlows/NotDeployed/Blazor/Add/${browserType}`;
  fs.mkdirSync(reportPath, { recursive: true });

  const reportFilename = `blazorAdd${trails_num}ReportLight.html`;
  try {
    fs.writeFileSync(path.join(reportPath, reportFilename), lhFlowReport);
    //console.log("Report saved successfully!");
  } catch (error) {
    console.error("Error saving the report:", error);
  }

  await browser.close();
};
//? trails
(async () => {
  for (let trialNumber = 1; trialNumber <= 20; trialNumber++) {
    console.log(`Starting trial ${trialNumber}...`);
    await performTasksAndGenerateReport(trialNumber).catch((err) => {
      console.error(`Error in trial ${trialNumber}:`, err);
    });
  }
  process.exit();
})();
