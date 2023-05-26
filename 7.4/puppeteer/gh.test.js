let page;
const timeout = 6000;

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
  });
  afterEach(() => {
    pageList.close();
  });
  test("The title is 'Extend ...'", async () => {
    const actual = await pageList.title();
    expect(actual).toEqual('GitHub Marketplace · to improve your workflow · GitHub');
  });

  test("The link leads on 'Contact Sales' page", async () => {
    const btnSelector = ".btn btn-large ml-2"
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    await pageList.click(btnSelector);
    const actual = await pageList.title();
    expect(actual).toEqual('Talk to our sales team');
  });

  test("Screenshot of page", async () => {
    const actual = await pageList.title();
    await expect(pageList.getByRole("heading", { name: "Extend GitHub"})).toHaveText(actual);
    await pageList.screenshot({path: "screenshots/Extend-GitHub-page.png", fullPage: true});
});

});


