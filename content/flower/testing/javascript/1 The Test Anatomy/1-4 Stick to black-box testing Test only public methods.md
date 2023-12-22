## ⚪ ️ 1.4 Stick to black-box testing: Test only public methods

:white_check_mark: **Do:** Testing the internals brings huge overhead for almost nothing. If your code/API delivers the right results, should you really invest your next 3 hours in testing HOW it worked internally and then maintain these fragile tests? Whenever a public behavior is checked, the private implementation is also implicitly tested and your tests will break only if there is a certain problem (e.g. wrong output). This approach is also referred to as `behavioral testing`. On the other side, should you test the internals (white box approach) — your focus shifts from planning the component outcome to nitty-gritty details and your test might break because of minor code refactors although the results are fine - this dramatically increases the maintenance burden
<br/>

❌ **Otherwise:** Your tests behave like the [boy who cried wolf](https://en.wikipedia.org/wiki/The_Boy_Who_Cried_Wolf): shouting false-positive cries (e.g., A test fails because a private variable name was changed). Unsurprisingly, people will soon start to ignore the CI notifications until someday, a real bug gets ignored…

<br/>
<details><summary>✏ <b>Code Examples</b></summary>

<br/>

### :thumbsdown: Anti-Pattern Example: A test case is testing the internals for no good reason

![](https://img.shields.io/badge/🔧%20Example%20using%20Mocha-blue.svg "Examples with Mocha & Chai")

```javascript
class ProductService {
  //this method is only used internally
  //Change this name will make the tests fail
  calculateVATAdd(priceWithoutVAT) {
    return { finalPrice: priceWithoutVAT * 1.2 };
    //Change the result format or key name above will make the tests fail
  }
  //public method
  getPrice(productId) {
    const desiredProduct = DB.getProduct(productId);
    const finalPrice = this.calculateVATAdd(desiredProduct.price).finalPrice;
    return finalPrice;
  }
}

it("White-box test: When the internal methods get 0 vat, it return 0 response", async () => {
  //There's no requirement to allow users to calculate the VAT, only show the final price. Nevertheless we falsely insist here to test the class internals
  expect(new ProductService().calculateVATAdd(0).finalPrice).to.equal(0);
});
```

</details>

<br/><br/>

