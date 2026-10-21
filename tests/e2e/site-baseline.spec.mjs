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

  const emailLink = page.locator('.main-footer .email-addr a');

  await expect(emailLink).toHaveCSS('color', 'rgb(43, 166, 203)');
  await emailLink.hover();
  await expect(emailLink).toHaveCSS('color', 'rgb(255, 255, 255)');

  await expect(page.locator('.recent-donations')).toHaveCSS(
    'background-color',
    'rgb(0, 107, 143)',
  );
});

test('homepage donor recognition is semantic and responsive', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  const donations = page.getByRole('region', { name: 'Recent Donations - Thank You!' });
  const donorList = donations.getByRole('list');
  const donors = donations.getByRole('listitem');

  await expect(donations).toBeVisible();
  await expect(donorList).toBeVisible();
  expect(await donors.count()).toBeGreaterThan(0);
  expect(await donors.evaluateAll((items) => items.every((item) => item.textContent?.trim()))).toBe(true);

  const columnCount = () => donorList.evaluate((list) => (
    Number.parseInt(getComputedStyle(list).columnCount, 10)
  ));

  expect(await columnCount()).toBe(1);

  await page.setViewportSize({ width: 1440, height: 900 });
  expect(await columnCount()).toBe(3);
});

test('homepage presents a clear adoption-first action hierarchy', async ({ page }) => {
  await page.goto('/');

  const actions = page.getByRole('region', { name: 'How You Can Help' });

  await expect(actions.getByRole('heading', { name: 'How You Can Help' })).toBeVisible();
  await expect(actions.getByRole('heading', { name: 'Adopt a Sheltie' })).toBeVisible();
  await expect(actions.getByRole('link', { name: 'View Adoptable Dogs' })).toHaveAttribute(
    'href',
    '/adoptable-dogs/',
  );
  await expect(actions.getByRole('link', { name: 'Review Adoption Requirements' })).toHaveAttribute(
    'href',
    '/adoption-requirements/',
  );
  await expect(actions.getByRole('link', { name: /Apply to Adopt/ })).toHaveAttribute(
    'target',
    '_blank',
  );
  await expect(actions.getByRole('link', { name: 'Learn About Fostering' })).toHaveAttribute(
    'href',
    '/help/articles/fostering/',
  );
  await expect(actions.getByRole('link', { name: 'Get Surrender Information' })).toHaveAttribute(
    'href',
    '/surrender/',
  );
  await expect(actions.getByRole('link', { name: 'View Donation Options' })).toHaveAttribute(
    'href',
    '#donate',
  );
});

test('homepage explains donation impact and preserves every donation method', async ({ page }) => {
  await page.goto('/');

  const donations = page.getByRole('region', { name: 'Support Shelties in Foster Care' });

  await expect(donations).toContainText('does not operate a physical shelter');
  await expect(donations).toContainText('veterinary evaluations');

  const paypalForm = donations.locator('form[action="https://www.paypal.com/cgi-bin/webscr"]');

  await expect(paypalForm).toHaveAttribute('method', 'post');
  await expect(paypalForm.locator('input[name="cmd"]')).toHaveValue('_s-xclick');
  await expect(donations).toContainText('P.O. Box 11224');
  await expect(donations.getByRole('link', { name: /Shop the Amazon Wishlist/ })).toHaveAttribute(
    'href',
    'https://www.amazon.com/hz/wishlist/ls/1HXQOHF67S4CQ',
  );
});

test('adoptable dogs remain reachable when the Petfinder widget is unavailable', async ({ page }) => {
  await page.route('https://www.petfinder.com/pet-scroller.bundle.js', (route) => route.abort());
  await page.goto('/adoptable-dogs/');

  const fallbackLink = page.getByRole('link', { name: /View Available Dogs on Petfinder/ });

  await expect(fallbackLink).toBeVisible();
  await expect(fallbackLink).toHaveAttribute(
    'href',
    'https://www.petfinder.com/search/pets-for-adoption/?shelterRescue=d6f7beda-4e29-45df-b0da-93522ec89617',
  );
  await expect(fallbackLink).toHaveAttribute('target', '_blank');
});

test('events empty state provides useful next actions', async ({ page }) => {
  await page.goto('/events/');

  const emptyState = page.getByRole('region', { name: 'No Events Currently Scheduled' });

  await expect(emptyState).toContainText('Future SC Sheltie Rescue events will be posted here');
  await expect(emptyState.getByRole('link', { name: 'View Adoptable Dogs' })).toHaveAttribute(
    'href',
    '/adoptable-dogs/',
  );
  await expect(emptyState.getByRole('link', { name: /Follow on Facebook/ })).toHaveAttribute(
    'href',
    'https://www.facebook.com/SouthCarolinaSheltieRescue',
  );
  await expect(emptyState.getByRole('link', { name: /Follow on Instagram/ })).toHaveAttribute(
    'href',
    'https://www.instagram.com/scsheltierescue/',
  );
});

test('help page presents complete article cards with valid internal links', async ({ page }) => {
  await page.goto('/help/');

  const articles = page.getByRole('region', { name: 'Articles' });
  const articleLinks = articles.getByRole('link');

  await expect(articles).toBeVisible();
  expect(await articleLinks.count()).toBeGreaterThan(0);
  expect(await articleLinks.evaluateAll((links) => links.every((link) => {
    const href = link.getAttribute('href');
    const heading = link.querySelector('h3')?.textContent?.trim();
    const description = link.querySelector('p')?.textContent?.trim();

    return href?.startsWith('/help/articles/') && heading && description;
  }))).toBe(true);
});

test('surrender page exposes contact methods and a structured process', async ({ page }) => {
  await page.goto('/surrender/');

  const contact = page.getByRole('region', { name: 'Contact SC Sheltie Rescue' });

  await expect(contact.getByRole('link', { name: /Call/ })).toHaveAttribute(
    'href',
    'tel:+18883992220',
  );
  await expect(contact.getByRole('link', { name: /Email/ })).toHaveAttribute(
    'href',
    'mailto:adopt@scsheltierescue.com',
  );

  const process = page.getByRole('region', { name: 'What happens when you surrender your Sheltie?' });
  const steps = process.getByRole('listitem');

  await expect(process).toBeVisible();
  expect(await steps.count()).toBeGreaterThan(0);
  expect(await steps.evaluateAll((items) => items.every((item) => Boolean(
    item.querySelector('h3')?.textContent?.trim() && item.querySelector('p')?.textContent?.trim(),
  )))).toBe(true);
});
