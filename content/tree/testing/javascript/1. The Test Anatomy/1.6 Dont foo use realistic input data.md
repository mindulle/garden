## ⚪ ️1.6 Don’t “foo”, use realistic input data

:white_check_mark: **Do:** Often production bugs are revealed under some very specific and surprising input — the more realistic the test input is, the greater the chances are to catch bugs early. Use dedicated libraries like [Chance](https://github.com/chancejs/chancejs) or [Faker](https://www.npmjs.com/package/faker) to generate pseudo-real data that resembles the variety and form of production data. For example, such libraries can generate realistic phone numbers, usernames, credit cards, company names, and even ‘lorem ipsum’ text. You may also create some tests (on top of unit tests, not as a replacement) that randomize fakers' data to stretch your unit under test or even import real data from your production environment. Want to take it to the next level? See the next bullet (property-based testing).
<br/>

❌ **Otherwise:** All your development testing will falsely show green when you use synthetic inputs like “Foo”, but then production might turn red when a hacker passes-in a nasty string like “@3e2ddsf . ##’ 1 fdsfds . fds432 AAAA”

<br/>

<details><summary>✏ <b>Code Examples</b></summary>

<br/>

### :thumbsdown: Anti-Pattern Example: A test suite that passes due to non-realistic data

![](https://img.shields.io/badge/🔧%20Example%20using%20Jest-blue.svg "Examples with Jest")

```javascript
const addProduct = (name, price) => {
  const productNameRegexNoSpace = /^\S*$/; //no white-space allowed

  if (!productNameRegexNoSpace.test(name)) return false; //this path never reached due to dull input

  //some logic here
  return true;
};

test("Wrong: When adding new product with valid properties, get successful confirmation", async () => {
  //The string "Foo" which is used in all tests never triggers a false result
  const addProductResult = addProduct("Foo", 5);
  expect(addProductResult).toBe(true);
  //Positive-false: the operation succeeded because we never tried with long
  //product name including spaces
});
```

<br/>

### :clap:Doing It Right Example: Randomizing realistic input

```javascript
it("Better: When adding new valid product, get successful confirmation", async () => {
  const addProductResult = addProduct(faker.commerce.productName(), faker.random.number());
  //Generated random input: {'Sleek Cotton Computer',  85481}
  expect(addProductResult).to.be.true;
  //Test failed, the random input triggered some path we never planned for.
  //We discovered a bug early!
});
```

</details>

<br/><br/>

