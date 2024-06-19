import { BasePage } from "./base.page";
import { Page } from "playwright/test";

export class CommentsPage extends BasePage {
  url = "/Comments.html";
  constructor(page: Page) {
    super(page);
  }
}
