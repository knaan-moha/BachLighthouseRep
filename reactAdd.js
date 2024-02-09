const fs = require("fs");
const puppeteer = require("puppeteer"); // v20.7.4 or later

(async () => {
  const browser = await puppeteer.launch({ headless: false });
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
    name: "reactAdd",
    config,
    flags,
  });
  {
    const targetPage = page;
    await targetPage.setViewport({
      width: 1512,
      height: 285,
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
      targetPage.locator("::-p-aria(New Student)"),
      targetPage.locator("div > a"),
      targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/a)'),
      targetPage.locator(":scope >>> div > a"),
      targetPage.locator("::-p-text(New Student)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 52,
          y: 18.40625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("div:nth-of-type(1) > div:nth-of-type(1) > input"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"root\\"]/div/form/div[1]/div[1]/input)'
      ),
      targetPage.locator(
        ":scope >>> div:nth-of-type(1) > div:nth-of-type(1) > input"
      ),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 140,
          y: 10.40625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("div:nth-of-type(1) > div:nth-of-type(1) > input"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"root\\"]/div/form/div[1]/div[1]/input)'
      ),
      targetPage.locator(
        ":scope >>> div:nth-of-type(1) > div:nth-of-type(1) > input"
      ),
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
      targetPage.locator("div:nth-of-type(1) > div:nth-of-type(2) > input"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"root\\"]/div/form/div[1]/div[2]/input)'
      ),
      targetPage.locator(
        ":scope >>> div:nth-of-type(1) > div:nth-of-type(2) > input"
      ),
    ])
      .setTimeout(timeout)
      .fill("mohamed");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("form > div:nth-of-type(2) input"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"root\\"]/div/form/div[2]/div/input)'
      ),
      targetPage.locator(":scope >>> form > div:nth-of-type(2) input"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 98,
          y: 12.40625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("form > div:nth-of-type(2) input"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"root\\"]/div/form/div[2]/div/input)'
      ),
      targetPage.locator(":scope >>> form > div:nth-of-type(2) input"),
    ])
      .setTimeout(timeout)
      .fill("mohaed@uia.no");
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
      targetPage.locator("div:nth-of-type(3) > div:nth-of-type(1) > input"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"root\\"]/div/form/div[3]/div[1]/input)'
      ),
      targetPage.locator(
        ":scope >>> div:nth-of-type(3) > div:nth-of-type(1) > input"
      ),
    ])
      .setTimeout(timeout)
      .fill("23");
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
      targetPage.locator("div:nth-of-type(3) > div:nth-of-type(2) > input"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"root\\"]/div/form/div[3]/div[2]/input)'
      ),
      targetPage.locator(
        ":scope >>> div:nth-of-type(3) > div:nth-of-type(2) > input"
      ),
    ])
      .setTimeout(timeout)
      .fill("747474");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("div:nth-of-type(4) input"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"root\\"]/div/form/div[4]/div[1]/input)'
      ),
      targetPage.locator(":scope >>> div:nth-of-type(4) input"),
      targetPage.locator("::-p-text(2024-01-28)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 398,
          y: 20.90625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("div:nth-of-type(4) input"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"root\\"]/div/form/div[4]/div[1]/input)'
      ),
      targetPage.locator(":scope >>> div:nth-of-type(4) input"),
      targetPage.locator("::-p-text(2024-01-28)"),
    ])
      .setTimeout(timeout)
      .fill("2024-01-29");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("select"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"root\\"]/div/form/div[4]/div[2]/select)'
      ),
      targetPage.locator(":scope >>> select"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 80,
          y: 14.90625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("select"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"root\\"]/div/form/div[4]/div[2]/select)'
      ),
      targetPage.locator(":scope >>> select"),
    ])
      .setTimeout(timeout)
      .fill("2");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Save)"),
      targetPage.locator("#root button"),
      targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/form/button)'),
      targetPage.locator(":scope >>> #root button"),
      targetPage.locator("::-p-text(Save)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 38,
          y: 17.90625,
        },
      });
  }
  await lhFlow.endTimespan();
  const lhFlowReport = await lhFlow.generateReport();
  fs.writeFileSync(__dirname + "/reactU.html", lhFlowReport);

  await browser.close();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
