## 1.11 Tag your tests

:white_check_mark: **Do:** Different tests must run on different scenarios: quick smoke, IO-less, tests should run when a developer saves or commits a file, full end-to-end tests usually run when a new pull request is submitted, etc. This can be achieved by tagging tests with keywords like #cold #api #sanity so you can grep with your testing harness and invoke the desired subset. For example, this is how you would invoke only the sanity test group with Mocha: mocha — grep ‘sanity’
<br/>

❌ **Otherwise:** Running all the tests, including tests that perform dozens of DB queries, any time a developer makes a small change can be extremely slow and keeps developers away from running tests

<br/>

<details><summary>✏ <b>Code Examples</b></summary>

<br/>

### :clap: Doing It Right Example: Tagging tests as ‘#cold-test’ allows the test runner to execute only fast tests (Cold===quick tests that are doing no IO and can be executed frequently even as the developer is typing)

![](https://img.shields.io/badge/🔧%20Example%20using%20Jest-blue.svg "Examples with Jest")

```javascript
//this test is fast (no DB) and we're tagging it correspondigly
//now the user/CI can run it frequently
describe("Order service", function() {
  describe("Add new order #cold-test #sanity", function() {
    test("Scenario - no currency was supplied. Expectation - Use the default currency #sanity", function() {
      //code logic here
    });
  });
});
```

</details>

<br/><br/>

