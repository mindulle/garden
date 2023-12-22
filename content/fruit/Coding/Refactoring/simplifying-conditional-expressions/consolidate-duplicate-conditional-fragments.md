---
description: "Problem: Identical code can be found in all branches of a conditional. Solution: Move the code outside of the conditional."
lang: en
title: Consolidate Duplicate Conditional Fragments
---
# Consolidate Duplicate Conditional Fragments 

### Problem

Identical code can be found in all branches of a conditional.

```ts
if (isSpecialDeal()) {
  total = price * 0.95;
  send();
}
else {
  total = price * 0.98;
  send();
}
```

### Solution

Move the code outside of the conditional.

```ts
if (isSpecialDeal()) {
  total = price * 0.95;
}
else {
  total = price * 0.98;
}
send();
```

### Why Refactor

Duplicate code is found inside all branches of a conditional, often as the result of evolution of the code within the conditional branches. Team development can be a contributing factor to this.

### Benefits

-   Code deduplication.

### How to Refactor

1.  If the duplicated code is at the beginning of the conditional
    branches, move the code to a place before the conditional.

2.  If the code is executed at the end of the branches, place it after the conditional.

3.  If the duplicate code is randomly situated inside the branches, first try to move the code to the beginning or end of the branch, depending on whether it changes the result of the subsequent code.

4.  If appropriate and the duplicate code is longer than one line, try using [[fruit/Coding/Refactoring/composing-methods/extract-method|Extract Method]].
