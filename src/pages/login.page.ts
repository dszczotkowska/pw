import { BasePage } from "./base.page";
import { Page } from "playwright/types/test";

export class LoginPage extends BasePage {
  url = "/login";
  constructor(page: Page) {
    super(page);
  }
  private loginInput = this.page.locator("input[name='username']");
  private passwordInput = this.page.locator("#password");
  private loginButton = this.page.getByRole("button", { name: "LogIn" });

  private errorMessage = this.page.getByTestId("login-error");

  async loginToSystem(login: string, password: string): Promise<void> {
    await this.goTo();
    await this.loginInput.fill(login);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage(): Promise<string | null> {
    return this.errorMessage.textContent();
  }
}
