const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { clickElement } = require("../../lib/booking.commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on {string} page", async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client/index.php${string}`, {
    setTimeout: 20000,
  });
});

When("user chooses date {string}", async function(string) {
  return await clickElement(this.page, '[href="#"]:nth-child(2)');
});
When("user chooses time {string}", async function(string) {
  return await clickElement(this.page, '.movie-seances__time-block > [href="#"]');
});

Then("the {string} page should be visible", {timeout: 20000}, async function (string) {
    return await this.page.waitForSelector('.buying-scheme');
});

When("user chooses seat {string}", async function(string) {
  return await clickElement(this.page, '.buying-scheme__row:nth-child(5) > .buying-scheme__chair:nth-child(6)');
});

Then("user click on {string}", async function (string) {
  return await this.page.click('.acceptin-button');
});





  
    








  
