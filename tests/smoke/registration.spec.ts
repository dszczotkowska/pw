import { LoginPage } from "../../src/pages/login.page";
import { RegisterPage } from "../../src/pages/register.page";
import { WelcomePage } from "../../src/pages/welcome.page";
import test, { expect } from "@playwright/test";

test.describe("Verify register", () => {
  let registerPage: RegisterPage;
  let loginPage: LoginPage;
  let welcomePage: WelcomePage;

  test.only("register with correct credintials", { tag: ["@GAD-R01-03"] }, async ({ page }) => {
    registerPage = new RegisterPage(page);
    loginPage = new LoginPage(page);
    welcomePage = new WelcomePage(page);

    let firstName = "Janina";
    let lastName = "Nowak";
    let password = "test123";
    let email = `email${new Date().getTime()}@test.com`;

    await registerPage.goTo();
    await registerPage.register(firstName, lastName, email, password);
    await expect(registerPage.registerPopUp).toHaveText("User created");

    await loginPage.waitForLoadUrl();

    const title = await loginPage.title();
    expect(title).toContain("Login");

    await loginPage.loginToSystem(email, password);

    const welcomeText = await welcomePage.welcomeTextField.textContent();
    const welcomePageTitle = await welcomePage.title();

    expect(welcomeText).toEqual(`Hi ${email}!`);
    expect(welcomePageTitle).toContain("Welcome");
  });
});
