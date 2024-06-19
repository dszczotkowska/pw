import { ArticlesPage } from "../../src/pages/articles.page";
import { CommentsPage } from "../../src/pages/comments.pages";
import { HomePage } from "../../src/pages/home.page";
import { expect, test } from "@playwright/test";

let homePage: HomePage;
let articlesPage: ArticlesPage;
let commentsPage: CommentsPage;

test.describe("Verify service main pages", () => {
  test("home page title", { tag: "@GAD-R01-01" }, async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();

    const title = await homePage.title();
    expect(title).toContain("GAD");
  });

  test("articles page title", { tag: "@GAD-R01-02" }, async ({ page }) => {
    articlesPage = new ArticlesPage(page);
    await articlesPage.goTo();

    const title = await articlesPage.title();
    expect(title).toContain("Articles");
  });

  test("comments page title", { tag: "@GAD-R01-03" }, async ({ page }) => {
    commentsPage = new CommentsPage(page);
    await commentsPage.goTo();

    const title = await commentsPage.title();
    expect(title).toContain("Comments");
  });
});
