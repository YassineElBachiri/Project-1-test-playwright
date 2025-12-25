import { test, expect } from '@playwright/test';

test('test to-do app @sanity', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('go for ');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('buy rto');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('bieo');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'buy rto' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('listitem').filter({ hasText: 'go for' }).getByTestId('todo-item-toggle').check();
  await page.goto('https://todomvc.com/examples/react/dist/#/');
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await page.getByTestId('todo-item-toggle').check();
  await page.getByTestId('todo-item-toggle').uncheck();
});