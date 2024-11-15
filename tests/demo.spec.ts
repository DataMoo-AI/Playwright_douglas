import { test, expect } from '@playwright/test';

test.describe('Douglas.de Tests', () => {
    
    test('navigate to url',async ({ page }) => {

        test.setTimeout(60000);

        // URL to navigate to
        const url = 'https://www.douglas.de/de';

        // Go to the URL
        await page.goto(url);

    });

    test('Allow cookies on Douglas.de', async ({ page }) => {
         test.setTimeout(70000);
        // Navigate to the URL
        await page.goto('https://www.douglas.de/de');

        // Wait for the "ALLOW ALL" button to be visible and click it
        const allowAllButton = page.locator('button[data-testid="uc-accept-all-button"]');
        await allowAllButton.waitFor();  // Wait for the button to appear
        await allowAllButton.click();    // Click the button to allow cookies

        // Optional: Verify cookies were accepted by checking for element visibility or absence of cookie prompt
        await expect(allowAllButton).not.toBeVisible(); // Ensures the button is no longer visible after clicking
  
    });

    test('Click on PARFUM tab and print page title', async ({ page }) => {
        test.setTimeout(70000);
        // Navigate to the page
        await page.goto('https://www.douglas.de/de');
      
        // Click on the 'PARFUM' tab using the normalized XPath
        await page.locator("//a[normalize-space()='PARFUM']").click();
      
        // Optionally, you can add an assertion to ensure the click was successful
        await expect(page).toHaveURL('https://www.douglas.de/de/c/parfum/01'); 

         // Print the page title
        console.log("Page Title:", await page.title());

        // allow cookies
        const allowAllButton = page.locator('button[data-testid="uc-accept-all-button"]');
        await allowAllButton.waitFor();  // Wait for the button to appear
        await allowAllButton.click();    // Click the button to allow cookies
        //ensures the button is no longer visible after clicking
        await expect(allowAllButton).not.toBeVisible();

        // Wait for the "Highlights" dropdown to be visible
        const highlightsDropdown = page.locator("div[data-testid='flags']");
        await highlightsDropdown.waitFor();
        test.setTimeout(90000);

        // Click on the "Highlights" dropdown
        await highlightsDropdown.click();

        // Wait for the dropdown to expand and items to become clickable
        const saleCheckbox = page.locator("(//input[@type='checkbox'])[1]");
        // Click the "SALE" checkbox
        await saleCheckbox.click();
        await page.waitForTimeout(5000);

        // Click on the "Highlights" dropdown
        await highlightsDropdown.click();
        const neuCheckbox = page.locator("(//input[@type='checkbox'])[2]");
        await neuCheckbox.click();
        await page.waitForTimeout(5000);

        // Click on the "Highlights" dropdown
        await highlightsDropdown.click();
        // Click highlights dropdown and click "LIMITIERT" checkbox
        const limitiertCheckbox = page.locator("(//input[@type='checkbox'])[3]");
        await limitiertCheckbox.click();
        await page.waitForTimeout(5000);
    });
      
});

