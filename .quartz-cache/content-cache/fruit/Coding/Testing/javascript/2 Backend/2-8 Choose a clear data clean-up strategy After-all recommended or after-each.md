## ⚪ ️2.8 Choose a clear data clean-up strategy: After-all (recommended) or after-each

:white_check_mark: **Do:** The timing when the tests clean the database determines the way the tests are being written. The two most viable options are cleaning after all the tests vs cleaning after every single test. Choosing the latter option, cleaning after every single test guarantees clean tables and builds convenient testing perks for the developer. No other records exist when the test starts, one can have certainty which data is being queried and even might be tempted to count rows during assertions. This comes with severe downsides: When running in a multi-process mode, tests are likely to interfere with each other. While process-1 purges tables, at the very moment process-2 queries for data and fail (because the DB was suddenly deleted by process-1). On top of this, It's harder to troubleshoot failing tests - Visiting the DB will show no records.

The second option is to clean up after all the test files have finished (or even daily!). This approach means that the same DB with existing records serves all the tests and processes. To avoid stepping on each other's toes, the tests must add and act on specific records that they have added. Need to check that some record was added? Assume that there are other thousands of records and query for records that were added explicitly. Need to check that a record was deleted? Can't assume an empty table, check that this specific record is not there. This technique brings few powerful gains: It works natively in multi-process mode, when a developer wishes to understand what happened - the data is there and not deleted. It also increases the chance of finding bugs because the DB is full of records and not artificially empty. [See the full comparison table here](https://github.com/testjavascript/nodejs-integration-tests-best-practices/blob/master/graphics/db-clean-options.png).
<br/>

❌ **Otherwise:** Without a strategy to separate records or clean - Tests will step on each other toes; Using transactions will work only for relational DB and likely to get complicated once there are inner transactions

<br/>

<details><summary>✏ <b>Code Examples</b></summary>

<br/>

### :clap: Cleaning after ALL the tests. Not neccesserily after every run. The more data we have while the tests are running - The more it resembles the production perks

```javascript
  // After-all clean up (recommended)
// global-teardown.js
module.exports = async () => {
  // ...
  if (Math.ceil(Math.random() * 10) === 10) {
    await new OrderRepository().cleanup();
  }
};
```

</details>

<br/>

