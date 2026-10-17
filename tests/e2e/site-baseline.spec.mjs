import { expect, test } from '@playwright/test';

const pages = [
  ['/', 'South Carolina Sheltie Rescue'],
  ['/adoptable-dogs/', 'Available Dogs | South Carolina Sheltie Rescue'],
  ['/adoption-requirements/', 'Adoption Requirements | South Carolina Sheltie Rescue'],
  ['/events/', 'Events | South Carolina Sheltie Rescue'],
  ['/help/', 'Help | South Carolina Sheltie Rescue'],
  ['/help/articles/barking/', 'My Sheltie Barks | South Carolina Sheltie Rescue'],
  ['/help/articles/bringing-your-sheltie-home/', 'Bringing Your Sheltie Home | South Carolina Sheltie Rescue'],
  ['/help/articles/communicating/', 'Communicating With Your Sheltie | South Carolina Sheltie Rescue'],
  ['/help/articles/fostering/', 'Fostering a Sheltie | South Carolina Sheltie Rescue'],
  ['/help/articles/grooming/', 'Grooming Your Sheltie | South Carolina Sheltie Rescue'],
  ['/help/articles/housetraining/', 'Housetraining Tips | South Carolina Sheltie Rescue'],
  ['/surrender/', 'Surrendering a Sheltie | South Carolina Sheltie Rescue'],
];

for (const [path, title] of pages) {
  test(`${path} has a clear document structure`, async ({ page }) => {
    await page.goto(path, { waitUntil: 'domcontentloaded' });

    await expect(page).toHaveTitle(title);
    await expect(page.locator('main')).toHaveCount(1);
    await expect(page.locator('#main-content')).toHaveCount(1);
    await expect(page.locator('h1')).toHaveCount(1);
  });
}

test('homepage exposes complete sharing and canonical metadata', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://scsheltierescue.com/',
  );
  await expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
    'content',
    /South Carolina Sheltie Rescue/,
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    'content',
    'https://scsheltierescue.com/favicon-512x512.png',
  );
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
    'content',
    'summary',
  );
  const structuredData = await page
    .locator('script[type="application/ld+json"]')
    .evaluate((element) => JSON.parse(element.textContent ?? '{}'));

  expect(structuredData).toMatchObject(
    {
      '@type': 'Organization',
      name: 'South Carolina Sheltie Rescue',
    },
  );
});

test('skip link and mobile navigation expose their state', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  const skipLink = page.getByRole('link', { name: 'Skip to main content' });

  await skipLink.focus();
  await expect(skipLink).toBeVisible();
  await expect(skipLink).toHaveAttribute('href', '#main-content');

  const menuButton = page.locator('#menu-button');

  await expect(menuButton).toHaveAccessibleName('Open navigation menu');
  await expect(menuButton).toHaveAttribute('aria-controls', 'site-navigation');
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false');

  await menuButton.click();
  await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  await expect(menuButton).toHaveAccessibleName('Close navigation menu');
});

test('desktop navigation brand fits within the navigation bar', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');

  const brand = page.locator('.name .show-for-large-up');

  await expect(brand).toBeVisible();

  const brandFits = await brand.evaluate((element) => {
    const container = element.closest('.name');

    if (!container) {
      return false;
    }

    const brandBounds = element.getBoundingClientRect();
    const containerBounds = container.getBoundingClientRect();

    return brandBounds.height <= containerBounds.height &&
      brandBounds.bottom <= containerBounds.bottom;
  });

  expect(brandFits).toBe(true);
});

test('brand and accessible functional colors remain distinct', async ({ page }) => {
  await page.goto('/');

  const colors = await page.evaluate(() => {
    const styles = getComputedStyle(document.documentElement);

    return {
      brand: styles.getPropertyValue('--scsr-logo-c').trim(),
      primary: styles.getPropertyValue('--scsr-primary-c').trim(),
      primaryDarker: styles.getPropertyValue('--scsr-primary-c-darker').trim(),
    };
  });

  expect(colors).toEqual({
    brand: '#2ba6cb',
    primary: '#006b8f',
    primaryDarker: '#00536f',
  });

  await expect(page.locator('.main-footer .social-media svg').first()).toHaveCSS(
    'color',
    'rgb(43, 166, 203)',
  );
  await expect(page.locator('.main-content > ul').first()).toHaveCSS(
    'background-color',
    'rgb(0, 107, 143)',
  );
});
