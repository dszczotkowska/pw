import { ArticlesPage } from "../../src/pages/articles.page";
import { CommentsPage } from "../../src/pages/comments.pages";
import { HomePage } from "../../src/pages/home.page";
import { expect, test } from "@playwright/test";

let articlesPage: ArticlesPage;
let commentsPage: CommentsPage;
let homePage: HomePage;

test.describe("Verify service main buttons", () => {
  test.beforeEach(async ({ page }) => {
    articlesPage = new ArticlesPage(page);
    commentsPage = new CommentsPage(page);
    homePage = new HomePage(page);
  });

  test.only("comments button navigate to comments page", { tag: ["@GAD-R01-03"] }, async ({ page }) => {
    await articlesPage.goTo();
    await articlesPage.mainMenu.commentsButton.click();

    const title = await commentsPage.title();
    expect(title).toContain("Comments");
  });

  test.only("articles button navigate to articles page", { tag: ["@GAD-R01-03"] }, async ({ page }) => {
    await commentsPage.goTo();
    await articlesPage.mainMenu.articlesButton.click();

    const title = await articlesPage.title();
    expect(title).toContain("Articles");
  });

  test.only("home button navigate to home page", { tag: ["@GAD-R01-03"] }, async ({ page }) => {
    await commentsPage.goTo();
    await articlesPage.mainMenu.homeButton.click();

    const title = await homePage.title();
    expect(title).toContain("GAD");
  });
});
