import { generateUID } from "../utils/_DATA";

test("generateUID", () => {
  const result = generateUID();
  expect(typeof result).toBe("string");
});
