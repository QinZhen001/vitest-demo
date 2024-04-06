import { assert, expect, test, describe } from "vitest";


describe("service worker tests", () => { 
  test("use MSW",async ()=>{
    const response = await fetch('https://example.com/mirror?category=all&count=2',{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      },
    });
    const data = await response.json();
    expect(data).toMatchInlineSnapshot(`
      {
        "ok": true,
      }
    `)
  })
})
