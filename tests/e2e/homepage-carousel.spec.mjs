import { expect, test } from '@playwright/test';

test('homepage carousel initializes, loads, and advances', async ({ page }) => {
  const pageErrors = [];

  page.on('pageerror', (error) => {
    pageErrors.push(error.message);
  });

  await page.goto('/');

  const carousel = page.locator(
    '.main-header-picture-slider .slick-slider',
  );

  await expect(carousel).toBeVisible();
  await expect(carousel).toHaveClass(/slick-initialized/);
  await carousel.hover();

  const currentSlide = carousel.locator('.slick-slide.slick-current');

  await expect(currentSlide).toHaveCount(1);

  const currentImage = currentSlide.locator('img');

  await expect(currentImage).toBeVisible();
  await expect.poll(
    () => currentImage.evaluate(
      (image) => image.complete && image.naturalWidth > 0,
    ),
  ).toBe(true);

  const initialIndex = await currentSlide.getAttribute('data-index');

  await carousel.locator('.slick-next').click();
  await expect.poll(
    () => carousel
      .locator('.slick-slide.slick-current')
      .getAttribute('data-index'),
  ).not.toBe(initialIndex);

  expect(pageErrors).toEqual([]);
});
