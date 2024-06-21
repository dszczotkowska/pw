import { LoginPage } from "../../src/pages/login.page";
import { WelcomePage } from "../../src/pages/welcome.page";
import { expect, test } from "@playwright/test";

let loginPage: LoginPage;
let welcomePage: WelcomePage;

const correctLogin = "Moses.Armstrong@Feest.ca";
const correctPassword = "test1";

test.describe("Verify logins", () => {
  test.only("correct login to system", async ({ page }) => {
    loginPage = new LoginPage(page);
    welcomePage = new WelcomePage(page);

    await loginPage.loginToSystem(correctLogin, correctPassword);

    const welcomeText = await welcomePage.welcomeTextField.textContent();
    const welcomePageTitle = await welcomePage.title();

    expect(welcomeText).toEqual(`Hi ${correctLogin}!`);
    expect(welcomePageTitle).toContain("Welcome");
  });
});
