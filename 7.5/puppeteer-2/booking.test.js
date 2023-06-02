const { clickElement } = require("./lib/booking.commands.js");

let page;

beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
  });
  
  afterEach(() => {
    page.close();
  });

  describe("Booking tests", () => {
    test("User successfully booked a ticket", async () => {
    // Click on <a> "Ср 31"
    await clickElement(page, '[href="#"]:nth-child(2)');

    // Click on <a> "10:00"
    await page.waitForSelector('.movie-seances__time-block > [href="#"]');
    await Promise.all([
    page.click('.movie-seances__time-block > [href="#"]'),
    page.waitForNavigation()
    ]);

    // Click on <span> .buying-scheme__row:nth-child(5) > .buying-scheme__chair:nth-child(6)
    await clickElement(page, '.buying-scheme__row:nth-child(5) > .buying-scheme__chair:nth-child(6)');

    await page.waitForSelector('.acceptin-button');
    await Promise.all([
    page.click('.acceptin-button'),
    page.waitForNavigation()
    ]);

    });

    test("User successfully booked a few tickets", async () => {
    // Click on <a> "Ср 31"
    await clickElement(page, '[href="#"]:nth-child(2)');

    // Click on <a> "10:00"
    await page.waitForSelector('.movie-seances__time-block > [href="#"]');
    await Promise.all([
    page.click('.movie-seances__time-block > [href="#"]'),
    page.waitForNavigation()
    ]);

    // Click on <span> .buying-scheme__row:nth-child(5) > .buying-scheme__chair:nth-child(6)
    await clickElement(page, '.buying-scheme__row:nth-child(6) > .buying-scheme__chair:nth-child(7)');
    await clickElement(page, '.buying-scheme__row:nth-child(6) > .buying-scheme__chair:nth-child(8)');

    await page.waitForSelector('.acceptin-button');
    await Promise.all([
    page.click('.acceptin-button'),
    page.waitForNavigation()
    ]);

    });

    test("User unsuccessfully booked a ticket", async () => {
    // Click on <a> "Ср 31"
    await clickElement(page, '[href="#"]:nth-child(2)');

    // Click on <a> "10:00"
    await page.waitForSelector('.movie-seances__time-block > [href="#"]');
    await Promise.all([
    page.click('.movie-seances__time-block > [href="#"]'),
    page.waitForNavigation()
    ]);

    // Click on <span> .buying-scheme__row:nth-child(5) > .buying-scheme__chair:nth-child(6)
    await clickElement(page, '.buying-scheme__row:nth-child(5) > .buying-scheme__chair:nth-child(6)');

    await page.waitForSelector('.acceptin-button');
    await Promise.all([
    page.click('.acceptin-button'),
    page.waitForNavigation()
    ]);

    const isDisabled = await page.$eval('.acceptin-button', (button) => {
        return button.disabled;
      });

    });
});
    

