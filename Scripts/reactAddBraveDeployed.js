const fs = require("fs");
const puppeteer = require("puppeteer"); // v20.7.4 or later
const path = require("path");

const browserPaths = {
  // edge: "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
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
    name: "ReactAddUserFlow",
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
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(New Student)"),
      targetPage.locator("div > a"),
      targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/a)'),
      targetPage.locator(":scope >>> div > a"),
      targetPage.locator("::-p-text(New Student)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 57,
          y: 23,
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
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 88,
          y: 23.40625,
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
      targetPage.locator("::-p-aria(Last Name)"),
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
      targetPage.locator("::-p-aria(Email)"),
      targetPage.locator("#email"),
      targetPage.locator('::-p-xpath(//*[@id=\\"email\\"])'),
      targetPage.locator(":scope >>> #email"),
    ])
      .setTimeout(timeout)
      .fill("OriginalEmail@uia.no");
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
      targetPage.locator("::-p-aria(Age)"),
      targetPage.locator("#age"),
      targetPage.locator('::-p-xpath(//*[@id=\\"age\\"])'),
      targetPage.locator(":scope >>> #age"),
    ])
      .setTimeout(timeout)
      .fill("27");
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
      targetPage.locator("::-p-aria(Phone Number)"),
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
      targetPage.locator("::-p-aria(Register Date)"),
      targetPage.locator("#register"),
      targetPage.locator('::-p-xpath(//*[@id=\\"register\\"])'),
      targetPage.locator(":scope >>> #register"),
      targetPage.locator("::-p-text(2024-03-28)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 184,
          y: 18.40625,
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
      .click({
        offset: {
          x: 395,
          y: 11.40625,
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
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 112,
          y: 10.40625,
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
        '::-p-xpath(//*[@data-testid=\\"add-student-form\\"]/button)'
      ),
      targetPage.locator(":scope >>> button"),
      targetPage.locator("::-p-text(Save)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 37,
          y: 22.40625,
        },
      });
  }
  await lhFlow.endTimespan();
  const lhFlowReport = await lhFlow.generateReport();

  let reportPath = `../UserFlows/Deployed/React/Add/${browserType}`;

  fs.mkdirSync(reportPath, { recursive: true });

  const reportFilename = `reactAdd${trails_num}ReportLight.html`;
  try {
    fs.writeFileSync(path.join(reportPath, reportFilename), lhFlowReport);
    //console.log("Report saved successfully!");
  } catch (error) {
    console.error("Error saving the report:", error);
  }
  await browser.close();
};
(async () => {
  for (let trialNumber = 1; trialNumber <= 20; trialNumber++) {
    console.log(`Starting trial ${trialNumber}...`);
    await performTasksAndGenerateReport(trialNumber).catch((err) => {
      console.error(`Error in trial ${trialNumber}:`, err);
    });
  }
})();
