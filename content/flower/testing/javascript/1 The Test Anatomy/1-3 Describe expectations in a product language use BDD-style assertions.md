## ⚪ ️1.3 Describe expectations in a product language: use BDD-style assertions

:white_check_mark: **Do:** Coding your tests in a declarative-style allows the reader to get the grab instantly without spending even a single brain-CPU cycle. When you write imperative code that is packed with conditional logic, the reader is forced to exert more brain-CPU cycles. In that case, code the expectation in a human-like language, declarative BDD style using `expect` or `should` and not using custom code. If Chai & Jest doesn't include the desired assertion and it’s highly repeatable, consider [extending Jest matcher (Jest)](https://jestjs.io/docs/en/expect#expectextendmatchers) or writing a [custom Chai plugin](https://www.chaijs.com/guide/plugins/)
<br/>

❌ **Otherwise:** The team will write less tests and decorate the annoying ones with .skip()

<br/>

<details><summary>✏ <b>Code Examples</b></summary><br/>

![](https://img.shields.io/badge/🔧%20Example%20using%20Mocha-blue.svg "Examples with Mocha & Chai") ![](https://img.shields.io/badge/🔧%20Example%20using%20Jest-blue.svg "Examples with Jest")

### :thumbsdown: Anti-Pattern Example: The reader must skim through not so short, and imperative code just to get the test story

```javascript
test("When asking for an admin, ensure only ordered admins in results", () => {
  //assuming we've added here two admins "admin1", "admin2" and "user1"
  const allAdmins = getUsers({ adminOnly: true });

  let admin1Found,
    adming2Found = false;

  allAdmins.forEach(aSingleUser => {
    if (aSingleUser === "user1") {
      assert.notEqual(aSingleUser, "user1", "A user was found and not admin");
    }
    if (aSingleUser === "admin1") {
      admin1Found = true;
    }
    if (aSingleUser === "admin2") {
      admin2Found = true;
    }
  });

  if (!admin1Found || !admin2Found) {
    throw new Error("Not all admins were returned");
  }
});
```

<br/>

### :clap: Doing It Right Example: Skimming through the following declarative test is a breeze

```javascript
it("When asking for an admin, ensure only ordered admins in results", () => {
  //assuming we've added here two admins
  const allAdmins = getUsers({ adminOnly: true });

  expect(allAdmins)
    .to.include.ordered.members(["admin1", "admin2"])
    .but.not.include.ordered.members(["user1"]);
});
```

</details>

<br/><br/>

