import { Page } from "playwright/test";

export class BasePage {
  url = "";
  constructor(private page: Page) {}

  async goTo(): Promise<void> {
    await this.page.goto(this.url);
  }

  async title(): Promise<string> {
    await this.page.waitForLoadState();
    return await this.page.title();
  }
}