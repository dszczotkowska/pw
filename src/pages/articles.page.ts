import { BasePage } from "./base.page";
import { MainMenuComponent } from "./components/mainMenu.component";
import { Page } from "playwright/test";

export class ArticlesPage extends BasePage {
  url = "/articles.html";
  constructor(page: Page) {
    super(page);
  }

  mainMenu = new MainMenuComponent(this.page);
}
