---
description: "Problem: You have a group of nested conditionals and it's hard to determine the normal flow of code execution. Solution: Isolate all special checks and edge cases into separate clauses and place them before the main checks. Ideally, you should have a \"flat\" list of conditionals, one after the other."
lang: en
title: Replace Nested Conditional with Guard Clauses
---
# Replace Nested Conditional with Guard Clauses 

### Problem

You have a group of nested conditionals and it's hard to determine the normal flow of code execution.

```ts
getPayAmount(): number {
  let result: number;
  if (isDead){
    result = deadAmount();
  }
  else {
    if (isSeparated){
      result = separatedAmount();
    }
    else {
      if (isRetired){
        result = retiredAmount();
      }
      else{
        result = normalPayAmount();
      }
    }
  }
  return result;
}
```

### Solution

Isolate all special checks and edge cases into separate clauses and place them before the main checks. Ideally, you should have a "flat" list of conditionals, one after the other.

```ts
getPayAmount(): number {
  if (isDead){
    return deadAmount();
  }
  if (isSeparated){
    return separatedAmount();
  }
  if (isRetired){
    return retiredAmount();
  }
  return normalPayAmount();
}
```

### Why Refactor

Spotting the "conditional from hell" is fairly easy. The indentations of each level of nestedness form an arrow, pointing to the right in the direction of pain and woe:

``` code
if () {
    if () {
        do {
            if () {
                if () {
                    if () {
                        ...
                    }
                }
                ...
            }
            ...
        }
        while ();
        ...
    }
    else {
        ...
    }
}
```

It's difficult to figure out what each conditional does and how, since the "normal" flow of code execution isn't immediately obvious. These conditionals indicate helter-skelter evolution, with each condition added as a stopgap measure without any thought paid to optimizing the overall structure.

To simplify the situation, isolate the special cases into separate
conditions that immediately end execution and return a null value if the guard clauses are true. In effect, your mission here is to make the structure flat.

### How to Refactor

Try to rid the code of side effects---[[fruit/Coding/Refactoring/simplifying-method-calls/separate-query-from-modifier|Separate Query From Modifier]] may be helpful for the purpose. This solution will be necessary for the reshuffling described below.

1.  Isolate all guard clauses that lead to calling an exception or
    immediate return of a value from the method. Place these conditions at the beginning of the method.

2.  After rearrangement is complete and all tests are successfully completed, see whether you can use [[fruit/Coding/Refactoring/simplifying-conditional-expressions/consolidate-conditional-expression|Consolidate Conditional Expression]] for guard clauses that lead to the same exceptions or returned values.
