let page;
const timeout = 12000;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  }, timeout);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, timeout);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  }, timeout);
});

let pageList;

describe("Github check headers on other pages of the application", () => {
  beforeEach(async () => {
    pageList = await browser.newPage();
    await pageList.goto("https://github.com/marketplace");
  }, 120000);

  afterEach(() => {
    pageList.close();
  });

  test("The title is 'Extend ...'", async () => {
    const actual = await pageList.title();
    expect(actual).toEqual('GitHub Marketplace · to improve your workflow · GitHub');
  });

  test("The link leads on 'Contact Sales' page", async () => {
    await pageList.click('.btn.btn-large.ml-2');
    const actual = await pageList.title();
    expect(actual).toEqual('GitHub Marketplace · to improve your workflow · GitHub');
  }, 120000);

  test("Screenshot of page", async () => {
    await pageList.screenshot({path: "Extend-GitHub-page.png", fullPage: true});
    
});
});



