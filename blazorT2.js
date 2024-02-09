const fs = require("fs");
const puppeteer = require("puppeteer"); // v20.7.4 or later

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const timeout = 70000;
  page.setDefaultTimeout(timeout);

  const lhApi = await import("lighthouse"); // v10.0.0 or later
  const flags = {
    screenEmulation: {
      disabled: true,
    },
  };
  const config = lhApi.desktopConfig;
  const lhFlow = await lhApi.startFlow(page, {
    name: "blazorT2",
    config,
    flags,
  });
  {
    const targetPage = page;
    await targetPage.setViewport({
      width: 1512,
      height: 486,
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
    await targetPage.goto("http://localhost:5160/students");
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
          x: 47,
          y: 13.0078125,
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
          x: 92,
          y: 3.8125,
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
      .fill("mohamed");
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
      .fill("moh@uia.no");
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
      .fill("34");
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
      targetPage.locator("div:nth-of-type(4) > div:nth-of-type(2) > input"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/article/form/div/div[4]/div[2]/input)'
      ),
      targetPage.locator(
        ":scope >>> div:nth-of-type(4) > div:nth-of-type(2) > input"
      ),
    ])
      .setTimeout(timeout)
      .fill("737373");
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
      targetPage.locator("div:nth-of-type(5) > input"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/article/form/div/div[5]/input)'
      ),
      targetPage.locator(":scope >>> div:nth-of-type(5) > input"),
      targetPage.locator("::-p-text(2024-02-01)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 359,
          y: 10.8125,
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
      .click({
        offset: {
          x: 161,
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
          x: 33,
          y: 20.8125,
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
          x: 44,
          y: 16.0078125,
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
          x: 150,
          y: 21.8125,
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
      .fill("zeka");
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
      .click({
        offset: {
          x: 106,
          y: 19.8125,
        },
      });
  }
  {
    const targetPage = page;
    await waitForElement(
      {
        type: "waitForElement",
        selectors: ["body"],
      },
      targetPage,
      timeout
    );
  }
  {
    const targetPage = page;
    await waitForElement(
      {
        type: "waitForElement",
        selectors: ["body"],
      },
      targetPage,
      timeout
    );
  }
  await lhFlow.endTimespan();
  await lhFlow.startNavigation();
  {
    const targetPage = page;
    const promises = [];
    const startWaitingForEvents = () => {
      promises.push(targetPage.waitForNavigation());
    };
    await puppeteer.Locator.race([
      targetPage.locator("form > div > div:nth-of-type(2) > input"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/article/form/div/div[2]/input)'
      ),
      targetPage.locator(":scope >>> form > div > div:nth-of-type(2) > input"),
    ])
      .setTimeout(timeout)
      .on("action", () => startWaitingForEvents())
      .fill("mohamed");
    await Promise.all(promises);
  }
  await lhFlow.endNavigation();
  await lhFlow.startTimespan();
  {
    const targetPage = page;
    await waitForElement(
      {
        type: "waitForElement",
        selectors: ["body"],
      },
      targetPage,
      timeout
    );
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
      .fill("mohamed ");
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
      .fill("34");
  }
  {
    const targetPage = page;
    await waitForElement(
      {
        type: "waitForElement",
        selectors: ["body"],
      },
      targetPage,
      timeout
    );
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
      targetPage.locator("div:nth-of-type(4) > div:nth-of-type(2) > input"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/article/form/div/div[4]/div[2]/input)'
      ),
      targetPage.locator(
        ":scope >>> div:nth-of-type(4) > div:nth-of-type(2) > input"
      ),
    ])
      .setTimeout(timeout)
      .fill("727272");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("div:nth-of-type(5) > input"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/article/form/div/div[5]/input)'
      ),
      targetPage.locator(":scope >>> div:nth-of-type(5) > input"),
      targetPage.locator("::-p-text(2024-02-01)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 367,
          y: 15.8125,
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
      targetPage.locator("::-p-text(2024-02-01)"),
    ])
      .setTimeout(timeout)
      .fill("2024-02-02");
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
          x: 47,
          y: 12.8125,
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
          x: 31,
          y: 19.8125,
        },
      });
  }
  await lhFlow.endTimespan();
  const lhFlowReport = await lhFlow.generateReport();
  fs.writeFileSync(__dirname + "/flow.report.html", lhFlowReport);

  await browser.close();

  async function waitForElement(step, frame, timeout) {
    const {
      count = 1,
      operator = ">=",
      visible = true,
      properties,
      attributes,
    } = step;
    const compFn = {
      "==": (a, b) => a === b,
      ">=": (a, b) => a >= b,
      "<=": (a, b) => a <= b,
    }[operator];
    await waitForFunction(async () => {
      const elements = await querySelectorsAll(step.selectors, frame);
      let result = compFn(elements.length, count);
      const elementsHandle = await frame.evaluateHandle((...elements) => {
        return elements;
      }, ...elements);
      await Promise.all(elements.map((element) => element.dispose()));
      if (result && (properties || attributes)) {
        result = await elementsHandle.evaluate(
          (elements, properties, attributes) => {
            for (const element of elements) {
              if (attributes) {
                for (const [name, value] of Object.entries(attributes)) {
                  if (element.getAttribute(name) !== value) {
                    return false;
                  }
                }
              }
              if (properties) {
                if (!isDeepMatch(properties, element)) {
                  return false;
                }
              }
            }
            return true;

            function isDeepMatch(a, b) {
              if (a === b) {
                return true;
              }
              if ((a && !b) || (!a && b)) {
                return false;
              }
              if (!(a instanceof Object) || !(b instanceof Object)) {
                return false;
              }
              for (const [key, value] of Object.entries(a)) {
                if (!isDeepMatch(value, b[key])) {
                  return false;
                }
              }
              return true;
            }
          },
          properties,
          attributes
        );
      }
      await elementsHandle.dispose();
      return result === visible;
    }, timeout);
  }

  async function querySelectorsAll(selectors, frame) {
    for (const selector of selectors) {
      const result = await querySelectorAll(selector, frame);
      if (result.length) {
        return result;
      }
    }
    return [];
  }

  async function querySelectorAll(selector, frame) {
    if (!Array.isArray(selector)) {
      selector = [selector];
    }
    if (!selector.length) {
      throw new Error("Empty selector provided to querySelectorAll");
    }
    let elements = [];
    for (let i = 0; i < selector.length; i++) {
      const part = selector[i];
      if (i === 0) {
        elements = await frame.$$(part);
      } else {
        const tmpElements = elements;
        elements = [];
        for (const el of tmpElements) {
          elements.push(...(await el.$$(part)));
        }
      }
      if (elements.length === 0) {
        return [];
      }
      if (i < selector.length - 1) {
        const tmpElements = [];
        for (const el of elements) {
          const newEl = (
            await el.evaluateHandle((el) =>
              el.shadowRoot ? el.shadowRoot : el
            )
          ).asElement();
          if (newEl) {
            tmpElements.push(newEl);
          }
        }
        elements = tmpElements;
      }
    }
    return elements;
  }

  async function waitForFunction(fn, timeout) {
    let isActive = true;
    const timeoutId = setTimeout(() => {
      isActive = false;
    }, timeout);
    while (isActive) {
      const result = await fn();
      if (result) {
        clearTimeout(timeoutId);
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    throw new Error("Timed out");
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
