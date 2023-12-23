# Replace Temp with Query

### Problem

You place the result of an expression in a local variable for later use in your code.

```ts
 calculateTotal(): number {
  let basePrice = quantity * itemPrice;
  if (basePrice > 1000) {
    return basePrice * 0.95;
  }
  else {
    return basePrice * 0.98;
  }
}
```

### Solution

Move the entire expression to a separate method and return the result from it. Query the method instead of using a variable. Incorporate the new method in other methods, if necessary.

```ts
calculateTotal(): number {
  if (basePrice() > 1000) {
    return basePrice() * 0.95;
  }
  else {
    return basePrice() * 0.98;
  }
}
basePrice(): number {
  return quantity * itemPrice;
}
```

### Why Refactor

This refactoring can lay the groundwork for applying [[fruit/Coding/Refactoring/techniques/composing-methods/extract-method|Extract Method]] for a portion of a very long method.

The same expression may sometimes be found in other methods as well, which is one reason to consider creating a common method.

### Benefits

- Code readability. It's much easier to understand the purpose of the method `getTax()` than the line `orderPrice() * 0.2`.

- Slimmer code via deduplication, if the line being replaced is used in multiple methods.

### Good to Know

#### Performance

This refactoring may prompt the question of whether this approach is liable to cause a performance hit. The honest answer is: yes, it is, since the resulting code may be burdened by querying a new method. But with today's fast CPUs and excellent compilers, the burden will almost always be minimal. By contrast, readable code and the ability to reuse this method in other places in program code---thanks to this refactoring
approach---are very noticeable benefits.

Nonetheless, if your temp variable is used to cache the result of a truly time-consuming expression, you may want to stop this refactoring after extracting the expression to a new method.

### How to Refactor

1. Make sure that a value is assigned to the variable once and only once within the method. If not, use [[fruit/Coding/Refactoring/techniques/composing-methods/split-temporary-variable|Split Temporary Variable]] to ensure that the variable will be used only to store the result of your expression.

2. Use [[fruit/Coding/Refactoring/techniques/composing-methods/extract-method|Extract Method]] to place the expression of interest in a new method. Make sure that this method only returns a value and doesn't change the state of the object. If the method affects the visible state of the object, use [[fruit/Coding/Refactoring/techniques/simplifying-method-calls/separate-query-from-modifier|Separate Query from Modifier]].

3. Replace the variable with a query to your new method.
