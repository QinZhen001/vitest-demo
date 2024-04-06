import { assert, expect, test, describe } from "vitest";
import Test from "../src/index";

describe("class tests", () => {

  test("get data", () => {
    let t = new Test();
    t.setData({ aaa: "bbb", bbb: 222 });
    let data = t.getData();
    expect(data).toMatchInlineSnapshot(`
      {
        "aaa": "bbb",
        "bbb": 222,
      }
    `);
  })

});
