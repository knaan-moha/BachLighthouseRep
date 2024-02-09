const puppeteer = require("puppeteer");
const fs = require("fs");
const lighthouse = require("lighthouse");
const open = require("open");
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const flow = await lighthouse.startFlow(page, { name: "My User Flow" });

  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  {
    const targetPage = page;
    await targetPage.setViewport({
      width: 1512,
      height: 447,
    });
  }
  {
    const targetPage = page;
    const promises = [];
    const startWaitingForEvents = () => {
      promises.push(targetPage.waitForNavigation());
    };
    startWaitingForEvents();
    await targetPage.goto("http://localhost:5160/students");
    await Promise.all(promises);
  }
  {
    const targetPage = page;
    await flow.navigate("https://coffee-cart.netlify.app/", {
      stepName: "Cold navigation",
    });
  }

  // Warm navigation report
  {
    const targetPage = page;
    await flow.navigate("https://coffee-cart.netlify.app/", {
      stepName: "Warm navigation",
      configContext: {
        settingsOverrides: { disableStorageReset: true },
      },
    });
  }

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
    await flow.snapshot({ stepName: "Checkout modal opened" });
  }
  {
    await flow.startTimespan({ stepName: "Checkout flow" });
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
  {
    await flow.endTimespan();
  }
  const reportPath = __dirname + "/user-flow.report.html";
  const report = flow.generateReport();
  fs.writeFileSync(reportPath, report);
  open(reportPath, { wait: false });

  await browser.close();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
