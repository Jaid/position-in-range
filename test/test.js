import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
 * @type { import("../src") }
 */
const {default: positionInRange} = indexModule

it("should run", () => {
  expect(positionInRange(2, 5, 3.5)).toBe(0.5)
  expect(positionInRange(2, 5, 2)).toBe(0)
  expect(positionInRange(2, 5, 5)).toBe(1)
  expect(positionInRange(2, 5, 8)).toBe(2)
  expect(positionInRange(2, 5, -4)).toBe(-2)
})