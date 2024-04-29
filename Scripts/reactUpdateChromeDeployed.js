const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer"); // v20.7.4 or later

const browserPaths = {
  // edge: "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  chrome: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  //brave: "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
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
    name: "ReactUpdate",
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
    await targetPage.goto("https://bach-react-client.azurewebsites.net/");
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
          x: 5.296875,
          y: 9,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(First Name)"),
      targetPage.locator("#firstName"),
      targetPage.locator('::-p-xpath(//*[@id=\\"firstName\\"])'),
      targetPage.locator(":scope >>> #firstName"),
      targetPage.locator("::-p-text(mohamed)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 347,
          y: 25.40625,
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
      targetPage.locator("::-p-aria(First Name)"),
      targetPage.locator("#firstName"),
      targetPage.locator('::-p-xpath(//*[@id=\\"firstName\\"])'),
      targetPage.locator(":scope >>> #firstName"),
      targetPage.locator("::-p-text(mohamed)"),
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
      targetPage.locator("::-p-aria(Last Name)"),
      targetPage.locator("#lastName"),
      targetPage.locator('::-p-xpath(//*[@id=\\"lastName\\"])'),
      targetPage.locator(":scope >>> #lastName"),
      targetPage.locator("::-p-text(teset)"),
    ])
      .setTimeout(timeout)
      .fill("UpdatedLastName");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Email)"),
      targetPage.locator("#email"),
      targetPage.locator('::-p-xpath(//*[@id=\\"email\\"])'),
      targetPage.locator(":scope >>> #email"),
      targetPage.locator("::-p-text(kate@uia.no)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 259,
          y: 20.40625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("div:nth-of-type(2) > div"),
      targetPage.locator(
        '::-p-xpath(//*[@data-testid=\\"add-student-form\\"]/div[2]/div)'
      ),
      targetPage.locator(":scope >>> div:nth-of-type(2) > div"),
      targetPage.locator("::-p-text(Emailtest@uia.no)"),
    ])
      .setTimeout(timeout)
      .click({
        delay: 783.2000000476837,
        offset: {
          x: 10,
          y: 49.40625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Email)"),
      targetPage.locator("#email"),
      targetPage.locator('::-p-xpath(//*[@id=\\"email\\"])'),
      targetPage.locator(":scope >>> #email"),
      targetPage.locator("::-p-text(test@uia.no)"),
    ])
      .setTimeout(timeout)
      .fill("UpdatedEmail@uia.no");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Age)"),
      targetPage.locator("#age"),
      targetPage.locator('::-p-xpath(//*[@id=\\"age\\"])'),
      targetPage.locator(":scope >>> #age"),
      targetPage.locator("::-p-text(23)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 63,
          y: 22.40625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Age)"),
      targetPage.locator("#age"),
      targetPage.locator('::-p-xpath(//*[@id=\\"age\\"])'),
      targetPage.locator(":scope >>> #age"),
      targetPage.locator("::-p-text(23)"),
    ])
      .setTimeout(timeout)
      .fill("20");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Phone Number)"),
      targetPage.locator("#phoneNumber"),
      targetPage.locator('::-p-xpath(//*[@id=\\"phoneNumber\\"])'),
      targetPage.locator(":scope >>> #phoneNumber"),
      targetPage.locator("::-p-text(544584)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 100,
          y: 21.40625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Phone Number)"),
      targetPage.locator("#phoneNumber"),
      targetPage.locator('::-p-xpath(//*[@id=\\"phoneNumber\\"])'),
      targetPage.locator(":scope >>> #phoneNumber"),
      targetPage.locator("::-p-text(544584)"),
    ])
      .setTimeout(timeout)
      .fill("456997733");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Register Date)"),
      targetPage.locator("#register"),
      targetPage.locator('::-p-xpath(//*[@id=\\"register\\"])'),
      targetPage.locator(":scope >>> #register"),
      targetPage.locator("::-p-text(2024-03-28)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 393,
          y: 16.40625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Register Date)"),
      targetPage.locator("#register"),
      targetPage.locator('::-p-xpath(//*[@id=\\"register\\"])'),
      targetPage.locator(":scope >>> #register"),
      targetPage.locator("::-p-text(2024-03-28)"),
    ])
      .setTimeout(timeout)
      .fill("2024-03-29");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Course)"),
      targetPage.locator("select"),
      targetPage.locator(
        '::-p-xpath(//*[@data-testid=\\"add-student-form\\"]/div[4]/div[2]/select)'
      ),
      targetPage.locator(":scope >>> select"),
      targetPage.locator("::-p-text(1)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 102,
          y: 16.40625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Course)"),
      targetPage.locator("select"),
      targetPage.locator(
        '::-p-xpath(//*[@data-testid=\\"add-student-form\\"]/div[4]/div[2]/select)'
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
        '::-p-xpath(//*[@data-testid=\\"add-student-form\\"]/button)'
      ),
      targetPage.locator(":scope >>> button"),
      targetPage.locator("::-p-text(Update)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 46,
          y: 19.40625,
        },
      });
  }
  await lhFlow.endTimespan();
  const lhFlowReport = await lhFlow.generateReport();
  let reportPath = `../UserFlows/Deployed/React/Update/${browserType}`;

  fs.mkdirSync(reportPath, { recursive: true });

  const reportFilename = `reactUpdate${globalCounter}ReportLight.html`;
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
  // we make iterative over the browser as key
  for (const browserType of Object.keys(browserPaths)) {
    console.log(`Performance Measuring with browser  ${browserType}...`);

    // trails
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
