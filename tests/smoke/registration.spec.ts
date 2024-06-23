import { LoginPage } from "../../src/pages/login.page";
import { RegisterPage } from "../../src/pages/register.page";
import test, { expect } from "@playwright/test";

test.describe("Verify register", () => {
  let registerPage: RegisterPage;
  let loginPage: LoginPage;

  test("register with correct credintials", { tag: ["@GAD-R01-03"] }, async ({ page }) => {
    registerPage = new RegisterPage(page);
    loginPage = new LoginPage(page);

    let firstName = "Janina";
    let lastName = "Nowak";
    let password = "test123";
    let email = `email${new Date().getTime()}@test.com`;

    await registerPage.goTo();
    await registerPage.register(firstName, lastName, email, password);
    await loginPage.waitForLoadUrl();

    const title = await loginPage.title();
    expect(title).toContain("Login");
  });
});
