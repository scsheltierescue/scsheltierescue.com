import { expect, test } from '@playwright/test';

test('homepage carousel loads, autoplays, pauses, and advances manually', async ({ page }) => {
  const pageErrors = [];

  page.on('pageerror', (error) => {
    pageErrors.push(error.message);
  });

  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');

  const carousel = page.locator('.main-header-picture-slider [data-carousel]');

  await expect(carousel).toBeVisible();
  const currentSlide = carousel.locator('[data-carousel-slide].is-active');

  await expect(currentSlide).toHaveCount(1);

  const currentImage = currentSlide.locator('img');

  await expect(currentImage).toBeVisible();
  await expect.poll(
    () => currentImage.evaluate(
      (image) => image.complete && image.naturalWidth > 0,
    ),
  ).toBe(true);

  const initialIndex = await currentSlide.getAttribute('data-index');

  await expect(carousel.locator('[data-carousel-slide]').first()).toHaveCSS('transition-duration', '0.5s');
  await expect.poll(
    () => currentSlide.getAttribute('data-index'),
    { timeout: 5000 },
  ).not.toBe(initialIndex);

  await carousel.hover();

  const pausedIndex = await currentSlide.getAttribute('data-index');

  await page.waitForTimeout(3500);
  await expect.poll(
    () => currentSlide.getAttribute('data-index'),
  ).toBe(pausedIndex);

  await carousel.getByRole('button', { name: 'Next slide' }).click();
  await expect.poll(
    () => currentSlide.getAttribute('data-index'),
  ).not.toBe(pausedIndex);

  const beforeSwipeIndex = await currentSlide.getAttribute('data-index');
  const viewport = carousel.locator('[data-carousel-viewport]');

  await viewport.dispatchEvent('pointerdown', {
    pointerId: 1,
    pointerType: 'touch',
    clientX: 300,
    clientY: 100,
  });
  await viewport.dispatchEvent('pointerup', {
    pointerId: 1,
    pointerType: 'touch',
    clientX: 200,
    clientY: 105,
  });
  await expect.poll(
    () => currentSlide.getAttribute('data-index'),
  ).not.toBe(beforeSwipeIndex);

  await expect(carousel.locator('[data-carousel-dot][aria-current="true"]')).toHaveCount(1);

  expect(pageErrors).toEqual([]);
});

test('homepage carousel spacing changes only below the medium breakpoint', async ({ page }) => {
  await page.setViewportSize({ width: 940, height: 900 });
  await page.goto('/');

  const carouselColumn = page.locator('.main-header-picture-slider').locator('..');

  await expect(carouselColumn).toHaveCSS('margin-top', '0px');
  await expect(carouselColumn).toHaveCSS('padding-left', '15px');
  await expect(carouselColumn).toHaveCSS('padding-right', '0px');

  await page.setViewportSize({ width: 768, height: 900 });

  await expect(carouselColumn).toHaveCSS('margin-top', '20px');
  await expect(carouselColumn).toHaveCSS('padding-left', '0px');
  await expect(carouselColumn).toHaveCSS('padding-right', '0px');
});
