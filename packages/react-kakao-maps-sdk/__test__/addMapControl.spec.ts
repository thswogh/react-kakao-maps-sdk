import { test, expect } from "@playwright/test"

const getUrl = (id: string, isUpdateSanpShots: boolean = false) =>
  isUpdateSanpShots
    ? `http://127.0.0.1:5252/samples/${id}.html`
    : `/samples/${id}`

test("ScreenShot 렌더링 결과 비교", async ({ page }, testInfo) => {
  const url = getUrl("addMapControl", testInfo.config.updateSnapshots === "all")
  await page.goto(url, { waitUntil: "networkidle" })
  await expect(page.getByRole("button", { name: "확대" })).toBeAttached()
  await expect(page.getByRole("button", { name: "축소" })).toBeAttached()
  await expect(page.getByRole("button", { name: "지도" })).toBeAttached()
  await expect(page.getByRole("button", { name: "스카이뷰" })).toBeAttached()
  await expect(page).toHaveScreenshot()
})
