const { expect } = require("chai");
const { clickElement } = require("./lib/booking.commands.js");
const assert = require("assert");

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
    await clickElement(page, '.acceptin-button');
    const btnSelector = "body > main > section > div > button";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).contain("Получить код бронирования")
  });
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

    await clickElement(page, '.acceptin-button');
    const btnSelector = "body > main > section > div > button";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).contain("Получить код бронирования")
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
    await page.click('.buying-scheme__chair_disabled:nth-child(4)');
    const btnSelector = ".acceptin-button";
    await page.waitForSelector(btnSelector);
    const actual = await page.$eval(btnSelector, link => link.textContent);
    if (actual === "disabled")
    return true;
  });
   


  

