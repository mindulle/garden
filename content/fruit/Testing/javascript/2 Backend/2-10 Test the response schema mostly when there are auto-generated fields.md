## ⚪ ️2.10 Test the response schema, mostly when there are auto-generated fields

:white_check_mark: **Do:** When it is impossible to assert for specific data, check for mandatory field existence and types. Sometimes, the response contains important fields with dynamic data that can't be predicted when writing the test, like dates and incrementing numbers. If the API contract promises that these fields won't be null and hold the right types, it's imperative to test it. Most assertion libraries support checking types. If the response is small, check the return data and type together within the same assertion (see code example). One more option is to verify the entire response against an OpenAPI doc (Swagger). Most test runners have community extensions that validate API responses against their documentation.


<br/>

❌ **Otherwise:** Although the code/API caller relies on some field with dynamic data (e.g., ID, date), it will not come in return and break the contract

<br/>

<details><summary>✏ <b>Code Examples</b></summary>

<br/>

### :clap: Asserting that fields with dynamic value exist and have the right type

```javascript
  test('When adding a new valid order, Then should get back approval with 200 response', async () => {
  // ...
  //Assert
  expect(receivedAPIResponse).toMatchObject({
    status: 200,
    data: {
      id: expect.any(Number), // Any number satisfies this test
      mode: 'approved',
    },
  });
});
```

</details>

<br/>

