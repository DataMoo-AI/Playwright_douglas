import { test, expect } from '@playwright/test';
import { DouglasPage } from '../PageObject/DouglasPage';
import { douglasTestData } from '../pageobjectdata/douglasTestData';


test.describe('Douglas.de Tests', () => {
    
  test('navigate to url', async ({ page }) => {
    test.setTimeout(60000);

    // Create an instance of the page object
    const douglasPage = new DouglasPage(page);

    // Navigate to the URL
    await douglasPage.goToHomePage();
  });

  test('Allow cookies on Douglas.de', async ({ page }) => {
    test.setTimeout(70000);

    // Create an instance of the page object
    const douglasPage = new DouglasPage(page);

    // Navigate to the URL and allow cookies
    await douglasPage.goToHomePage();
    await douglasPage.allowCookies();
  });

  test('Click on PARFUM tab and print page title', async ({ page }) => {
    test.setTimeout(70000);

    // Create an instance of the page object
    const douglasPage = new DouglasPage(page);

    // Navigate to the home page and allow cookies
    await douglasPage.goToHomePage();

    // Click on the 'PARFUM' tab and check if the URL matches
    await douglasPage.clickParfumTab(); // if needed allow cookies
    await expect(page).toHaveURL(douglasTestData.parfumPageUrl);

    // Print the page title
    console.log("Page Title:", await page.title());

    // Perform actions on the "Highlights" dropdown
    await douglasPage.toggleHighlights();
  });

});
