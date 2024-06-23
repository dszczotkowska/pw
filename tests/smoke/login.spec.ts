import { LoginPage } from "../../src/pages/login.page";
import { WelcomePage } from "../../src/pages/welcome.page";
import { testUser1 } from "../../src/test data/user.data";
import { expect, test } from "@playwright/test";

let loginPage: LoginPage;
let welcomePage: WelcomePage;

const correctLogin = testUser1.userEmail;
const correctPassword = testUser1.userPassword;

test.describe("Verify logins", () => {
  test("correct login to system", async ({ page }) => {
    loginPage = new LoginPage(page);
    welcomePage = new WelcomePage(page);

    await loginPage.loginToSystem(correctLogin, correctPassword);

    const welcomeText = await welcomePage.welcomeTextField.textContent();
    const welcomePageTitle = await welcomePage.title();

    expect(welcomeText).toEqual(`Hi ${correctLogin}!`);
    expect(welcomePageTitle).toContain("Welcome");
  });

  test("reject login with incorrect password", async ({ page }) => {
    loginPage = new LoginPage(page);
    const expectedErrorMessage = "Invalid username or password";

    await loginPage.loginToSystem(correctLogin, "incorrect password");

    const title = await loginPage.title();
    const actualErrorMessage = await loginPage.getErrorMessage();

    expect(title).toContain("Login");
    expect(actualErrorMessage).toContain(expectedErrorMessage);
  });
});
