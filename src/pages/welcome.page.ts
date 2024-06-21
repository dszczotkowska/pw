import { BasePage } from "./base.page";
import { Page } from "playwright/types/test";

export class WelcomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  welcomeTextField = this.page.getByTestId("hello");
}
