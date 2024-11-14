import { Page } from '@playwright/test';
import { douglasTestData } from '../pageobjectdata/douglasTestData';

export class DouglasPage {
  readonly page: Page;

  // Constructor
  constructor(page: Page) {
    this.page = page;
  }

  // Navigate to the home page
  async goToHomePage() {
    await this.page.goto(douglasTestData.homePageUrl);
  }

  // Allow cookies by clicking the "ALLOW ALL" button
  async allowCookies() {
    const allowAllButton = this.page.locator(douglasTestData.allowAllButtonSelector);
    await allowAllButton.waitFor({ timeout: 95000 });
    await allowAllButton.click();
    }

  // Click on the PARFUM tab
  async clickParfumTab() {
    await this.page.locator(douglasTestData.parfumTabSelector).click();
    await this.allowCookies();

  }

  // Click on the "Highlights" dropdown and toggle checkboxes
  async toggleHighlights() {
    const highlightsDropdown = this.page.locator(douglasTestData.highlightsDropdownSelector);
    await highlightsDropdown.waitFor({timeout: 60000});
    await highlightsDropdown.click();

    // Click the "SALE" checkbox
    const saleCheckbox = this.page.locator(douglasTestData.saleCheckboxSelector);
    await saleCheckbox.click();
    
    // Click the "NEU" checkbox
    await highlightsDropdown.waitFor({ state: 'visible', timeout: 50000 });
    await highlightsDropdown.click();
    const neuCheckbox = this.page.locator(douglasTestData.neuCheckboxSelector);
    await neuCheckbox.click();

    // Click the "LIMITIERT" checkbox
    await highlightsDropdown.waitFor({ state: 'visible', timeout: 50000 });
    await highlightsDropdown.click();
    const limitiertCheckbox = this.page.locator(douglasTestData.limitiertCheckboxSelector);
    await limitiertCheckbox.click();
  }
}
