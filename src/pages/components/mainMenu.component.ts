import { Page } from "@playwright/test";

export class MainMenuComponent {
  constructor(private page: Page) {}

  commentsButton = this.page.getByTestId("open-comments");
  articlesButton = this.page.getByTestId("open-articles");
  homeButton = this.page.getByRole("link", { name: "🦎 GAD" });
}
