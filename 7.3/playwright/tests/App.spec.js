const { test, expect } = require("@playwright/test");
const user = require("./user.js");

test("Successful authorization", async ({ page }) => {
  
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.screenshot({path: "screenshots/login-page.png"/*, fullPage: true*/});
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(user.email);
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill(user.password);
  await page.getByTestId("login-submit-btn").click();
  
  const titleText = await page.textContent("h2");
  // await expect(page).toHaveURL("https://netology.ru/profile");
  await expect(page.getByRole("heading", { name: "Мои курсы и профессии" })).toHaveText(titleText);
  await page.screenshot({ path: "screenshots/my-courses-page2.png" /*, fullPage: true*/ });
});

test("Unsuccessful authorization", async ({ page }) => {

  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("invalidEmail@gmail.com");
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill("invalidPassword");
  await page.getByTestId("login-submit-btn").click();
  await expect (page.getByTestId("login-error-hint")).toHaveText("Вы ввели неправильно логин или пароль");

});
