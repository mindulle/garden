---
description: "Problem: For a portion of code to work correctly, certain conditions or values must be true. Solution: Replace these assumptions with specific assertion checks."
lang: en
title: Introduce Assertion
---
# Introduce Assertion
### Problem

For a portion of code to work correctly, certain conditions or values
must be true.
```ts
getExpenseLimit(): number {
  // Should have either expense limit or
  // a primary project.
  return (expenseLimit != NULL_EXPENSE) ?
    expenseLimit:
    primaryProject.getMemberExpenseLimit();
}
```
### Solution

Replace these assumptions with specific assertion checks.
```ts
getExpenseLimit(): number {
  // TypeScript and JS doesn't have built-in assertions, so we'll use
  // good-old console.error(). You can always extract this into a
  // designated assertion function.
  if (!(expenseLimit != NULL_EXPENSE ||
       (typeof primaryProject !== 'undefined' && primaryProject))) {
      console.error("Assertion failed: getExpenseLimit()");
  }

  return (expenseLimit != NULL_EXPENSE) ?
    expenseLimit:
    primaryProject.getMemberExpenseLimit();
}
```

### Why Refactor

Say that a portion of code assumes something about, for example, the
current condition of an object or value of a parameter or local
variable. Usually this assumption will always hold true except in the
event of an error.

Make these assumptions obvious by adding corresponding assertions. As
with type hinting in method parameters, these assertions can act as live
documentation for your code.

As a guideline to see where your code needs assertions, check for
comments that describe the conditions under which a particular method
will work.

### Benefits

-   If an assumption isn't true and the code therefore gives the wrong
    result, it's better to stop execution before this causes fatal
    consequences and data corruption. This also means that you neglected
    to write a necessary test when devising ways to perform testing of
    the program.

### Drawbacks

-   Sometimes an exception is more appropriate than a simple assertion.
    You can select the necessary class of the exception and let the
    remaining code handle it correctly.

-   When is an exception better than a simple assertion? If the
    exception can be caused by actions of the user or system and you can
    handle the exception. On the other hand, ordinary unnamed and
    unhandled exceptions are basically equivalent to simple
    assertions---you don't handle them and they're caused exclusively as
    the result of a program bug that never should have occurred.

### How to Refactor

When you see that a condition is assumed, add an assertion for this
condition in order to make sure.

Adding the assertion shouldn't change the program's behavior.

Don't overdo it with use of assertions for **everything** in your code.
Check for only the conditions that are necessary for correct functioning
of the code. If your code is working normally even when a particular
assertion is false, you can safely remove the assertion.
