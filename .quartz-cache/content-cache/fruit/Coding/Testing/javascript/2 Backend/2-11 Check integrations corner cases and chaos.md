## ⚪ ️2.11 Check integrations corner cases and chaos

:white_check_mark: **Do:** When checking integrations, go beyond the happy and sad paths. Check not only error responses (e.g. HTTP 500 error) but also network-level anomalies like slow and timed-out responses. This will prove that the code is resilient and can handle various network scenarios like taking the right path after a timeout, has no fragile race conditions, and contains a circuit breaker for retries. Reputable interceptor tools can easily simulate various network behaviors like hectic service that occasionally fail. It can even realize when the default HTTP client timeout value is longer than the simulated response time and throw a timeout exception right away without waiting


<br/>

❌ **Otherwise:** All your tests pass, it's only the production who will crash or won't report errors correctly when 3rd parties send exceptional responses

<br/>

<details><summary>✏ <b>Code Examples</b></summary>

<br/>

### :clap: Ensuring that on network failures, the circuit breaker can save the day

```javascript
  test('When users service replies with 503 once and retry mechanism is applied, then an order is added successfully', async () => {
  //Arrange
  nock.removeInterceptor(userServiceNock.interceptors[0])
  nock('http://localhost/user/')
    .get('/1')
    .reply(503, undefined, { 'Retry-After': 100 });
  nock('http://localhost/user/')
    .get('/1')
    .reply(200);
  const orderToAdd = {
    userId: 1,
    productId: 2,
    mode: 'approved',
  };

  //Act
  const response = await axiosAPIClient.post('/order', orderToAdd);

  //Assert
  expect(response.status).toBe(200);
});
```

</details>

<br/>


