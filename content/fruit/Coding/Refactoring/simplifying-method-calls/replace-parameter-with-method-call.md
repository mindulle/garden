---
description: "Problem: Calling a query method and passing its results as the parameters of another method, while that method could call the query directly. Solution: Instead of passing the value through a parameter, try placing a query call inside the method body."
lang: en
title: Replace Parameter with Method Call
---
# Replace Parameter with Method Call

### Problem

Calling a query method and passing its results as the parameters of another method, while that method could call the query directly.

```ts
let basePrice = quantity * itemPrice;
const seasonDiscount = this.getSeasonalDiscount();
const fees = this.getFees();
const finalPrice = discountedPrice(basePrice, seasonDiscount, fees);
```

### Solution

Instead of passing the value through a parameter, try placing a query call inside the method body.

```ts
let basePrice = quantity * itemPrice;
let finalPrice = discountedPrice(basePrice);
```

### Why Refactor

A long list of parameters is hard to understand. In addition, calls to such methods often resemble a series of cascades, with winding and exhilarating value calculations that are hard to navigate yet have to be passed to the method. So if a parameter value can be calculated with the help of a method, do this inside the method itself and get rid of the parameter.

### Benefits

-   We get rid of unneeded parameters and simplify method calls. Such parameters are often created not for the project as it's now, but with an eye for future needs that may never come.

### Drawbacks

-   You may need the parameter tomorrow for other needs\... making you rewrite the method.

### How to Refactor

1.  Make sure that the value-getting code doesn't use parameters from the current method, since they'll be unavailable from inside another method. If so, moving the code isn't possible.

2.  If the relevant code is more complicated than a single method or function call, use [[fruit/Coding/Refactoring/composing-methods/extract-method|Extract Method]] to isolate this
    code in a new method and make the call simple.

3.  In the code of the main method, replace all references to the parameter being replaced with calls to the method that gets the value.

4.  Use [[fruit/Coding/Refactoring/simplifying-method-calls/remove-parameter|Remove Parameter]] to eliminate the
    now-unused parameter.
