import { assert, expect, test, describe } from "vitest";

describe("fetch tests", () => {

  test("request", async () => {
    const response = await fetch('https://api.github.com/users/github');
    const data = await response.json();
    expect(data).toMatchInlineSnapshot(`
      {
        "avatar_url": "https://avatars.githubusercontent.com/u/9919?v=4",
        "bio": "How people build software.",
        "blog": "https://github.com/about",
        "company": null,
        "created_at": "2008-05-11T04:37:31Z",
        "email": null,
        "events_url": "https://api.github.com/users/github/events{/privacy}",
        "followers": 36954,
        "followers_url": "https://api.github.com/users/github/followers",
        "following": 0,
        "following_url": "https://api.github.com/users/github/following{/other_user}",
        "gists_url": "https://api.github.com/users/github/gists{/gist_id}",
        "gravatar_id": "",
        "hireable": null,
        "html_url": "https://github.com/github",
        "id": 9919,
        "location": "San Francisco, CA",
        "login": "github",
        "name": "GitHub",
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjk5MTk=",
        "organizations_url": "https://api.github.com/users/github/orgs",
        "public_gists": 0,
        "public_repos": 490,
        "received_events_url": "https://api.github.com/users/github/received_events",
        "repos_url": "https://api.github.com/users/github/repos",
        "site_admin": false,
        "starred_url": "https://api.github.com/users/github/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/github/subscriptions",
        "twitter_username": null,
        "type": "Organization",
        "updated_at": "2022-11-29T19:44:55Z",
        "url": "https://api.github.com/users/github",
      }
    `)
  })

})
