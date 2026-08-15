import { expect, test } from '@playwright/test';

test('foundation smoke test is configured', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/ReplyMate/i);
  await expect(page.getByRole('heading', { name: /replymate/i })).toBeVisible();
});
