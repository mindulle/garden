## ⚪ ️ 1.9 Copy code, but only what's neccessary

:white_check_mark: **Do:** Include all the necessary details that affect the test result, but nothing more. As an example, consider a test that should factor 100 lines of input JSON - Pasting this in every test is tedious. Extracting it outside to transferFactory.getJSON() will leave the test vague - Without data, it's hard to correlate the test result with the cause ("why is it supposed to return 400 status?"). The classic book x-unit patterns named this pattern 'the mystery guest' - Something unseen affected our test results, we don't know what exactly. We can do better by extracting repeatable long parts outside AND mentioning explicitly which specific details matter to the test. Going with the example above, the test can pass parameters that highlight what is important: transferFactory.getJSON({sender: undefined}). In this example, the reader should immediately infer that the empty sender field is the reason why the test should expect a validation error or any other similar adequate outcome.
<br/>

❌ **Otherwise:** Copying 500 JSON lines in will leave your tests unmaintainable and unreadable. Moving everything outside will end with vague tests that are hard to understand

<br/>

<details><summary>✏ <b>Code Examples</b></summary>

<br/>

### :thumbsdown: Anti-Pattern Example: The test failure is unclear because all the cause is external and hides within huge JSON

![](https://img.shields.io/badge/🔧%20Example%20using%20Mocha-blue.svg "Examples with Mocha")

```javascript
test("When no credit, then the transfer is declined", async() => {
      // Arrange
      const transferRequest = testHelpers.factorMoneyTransfer() //get back 200 lines of JSON;
      const transferServiceUnderTest = new TransferService();

      // Act
      const transferResponse = await transferServiceUnderTest.transfer(transferRequest);

      // Assert
      expect(transferResponse.status).toBe(409);// But why do we expect failure: All seems perfectly valid in the test 🤔
    });
```

<br/>

### :clap: Doing It Right Example: The test highlights what is the cause of the test result

```javascript

test("When no credit, then the transfer is declined ", async() => {
      // Arrange
      const transferRequest = testHelpers.factorMoneyTransfer({userCredit:100, transferAmount:200}) //obviously there is lack of credit
      const transferServiceUnderTest = new TransferService({disallowOvercharge:true});

      // Act
      const transferResponse = await transferServiceUnderTest.transfer(transferRequest);

      // Assert
      expect(transferResponse.status).toBe(409); // Obviously if the user has no credit it should fail
    });
  ```

</details>

<br/><br/>
