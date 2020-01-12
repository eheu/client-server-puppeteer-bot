import puppeteer from "../../../puppeteer";
import turndownService from "turndown";

const bot = {
  getMarkdown: async (browserWSEndpoint: string, url: string) => {
    // fetch our running browser
    const browser = await puppeteer.connect({
      browserWSEndpoint
    });

    // start the actual automation
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    await page.goto(url);
    const response = await page.goto(
      "https://www.ug.dk/uddannelser/artikleromuddannelser/nye-uddannelser-i-2020",
      { waitUntil: "domcontentloaded" }
    );
    const contentSelector = ".region-content";
    const content = await page.$eval(contentSelector, res => res.innerHTML);
    console.log(content);

    // cleanup
    await page.close();
    await browser.close();

    return new turndownService().turndown(content);
  },

  hentOverskriftPaaDR: async (browserWSEndpoint: string) => {
    // fetch our running browser
    const browser = await puppeteer.connect({
      browserWSEndpoint
    });

    // start the actual automation
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();

    await page.goto("https://www.dr.dk/");
    await page.evaluate(() =>
      (document.querySelector(
        "#CybotCookiebotDialogBodyButtonAccept"
      ) as HTMLAnchorElement).click()
    );
    const content = await page.evaluate(
      () => document.querySelector(".dredition-item-header strong")?.innerHTML
    );

    // cleanup
    await browser.close();

    return content;
  }
};

export { bot };
