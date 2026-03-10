import { expect, test } from "@playwright/test";

test("graph shell renders cluster-aware observatory controls", async ({ page }) => {
  await page.goto("/web/observatory/tests/fixtures/export/graph_knowledge_base.html");
  await expect(page.getByText("Live-first semantic graph and basin instrument")).toBeVisible();
  await expect(page.getByRole("button", { name: "Graph" })).toBeVisible();
  await expect(page.locator(".sidebar")).toBeVisible();
  await expect(page.getByText("Layout != evidence")).toBeVisible();
});

test("basin shell exposes sparse diagnostics and derived badges", async ({ page }) => {
  await page.goto("/web/observatory/tests/fixtures/export/behavioral_attractor_basin.html");
  await expect(page.getByText("Sparse basin data")).toBeVisible();
  await expect(page.getByText(/Projection: svd_on_turn_features/)).toBeVisible();
  await expect(page.getByText(/Lift: flat/)).toBeVisible();
});
