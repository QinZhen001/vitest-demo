import { assert, expect, test } from "vitest";
import Test from "../src/index";

test("calc cursor", async () => {
  let t = new Test();
  t.setData({ aaa: "bbb", bbb: 222 });
  let data = t.getData();
  expect(data).toMatchInlineSnapshot("");
});
