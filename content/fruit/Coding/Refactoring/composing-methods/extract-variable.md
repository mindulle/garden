---
description: "Problem: You have an expression that's hard to understand. Solution: Place the result of the expression or its parts in separate variables that are self-explanatory."
lang: en
title: Extract Variable
---
# Extract Variable

### Problem

You have an expression that's hard to understand.

```ts
renderBanner(): void {
  if ((platform.toUpperCase().indexOf("MAC") > -1) &&
       (browser.toUpperCase().indexOf("IE") > -1) &&
        wasInitialized() && resize > 0 )
  {
    // do something
  }
}
```

### Solution

Place the result of the expression or its parts in separate variables
that are self-explanatory.

```ts
renderBanner(): void {
  const isMacOs = platform.toUpperCase().indexOf("MAC") > -1;
  const isIE = browser.toUpperCase().indexOf("IE") > -1;
  const wasResized = resize > 0;

  if (isMacOs && isIE && wasInitialized() && wasResized) {
    // do something
  }
}
```

### Why Refactor

The main reason for extracting variables is to make a complex expression more understandable, by dividing it into its intermediate parts. These could be:

-   Condition of the `if()` operator or a part of the `?:` operator in
    C-based languages

-   A long arithmetic expression without intermediate results

-   Long multipart lines

Extracting a variable may be the first step towards performing [[fruit/Coding/Refactoring/composing-methods/extract-method|Extract Method]] if you see that the extracted expression is
used in other places in your code.

### Benefits

- More readable code! Try to give the extracted variables good names that announce the variable's purpose loud and clear. More readability, fewer long-winded comments. Go for names like `customerTaxValue`, `cityUnemploymentRate`, `clientSalutationString`, etc.

### Drawbacks

- More variables are present in your code. But this is counterbalanced by the ease of reading your code.

- When refactoring conditional expressions, remember that the compiler will most likely optimize it to minimize the amount of calculations needed to establish the resulting value. Say you have a following expression `if (a() || b()) ...`. The program won't call the method `b` if the method `a` returns `true` because the resulting value will still be `true`, no matter what value returns `b`.

    However, if you extract parts of this expression into variables,
    both methods will always be called, which might hurt performance of the program, especially if these methods do some heavyweight work.

### How to Refactor

1.  Insert a new line before the relevant expression and declare a new variable there. Assign part of the complex expression to this variable.

2.  Replace that part of the expression with the new variable.

3.  Repeat the process for all complex parts of the expression.
