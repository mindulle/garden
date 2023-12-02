---
description: "Problem: So you want to replace an existing algorithm with
  a new one? Solution: Replace the body of the method that implements
  the algorithm with a new algorithm."
lang: en
theme-color: "#95f3fc"
title: Substitute Algorithm
viewport: width=device-width, initial-scale=1, shrink-to-fit=no
---
# Substitute Algorithm

### Problem

So you want to replace an existing algorithm with a new one?
```ts
foundPerson(people: string[]): string{
  for (let person of people) {
    if (person.equals("Don")){
      return "Don";
    }
    if (person.equals("John")){
      return "John";
    }
    if (person.equals("Kent")){
      return "Kent";
    }
  }
  return "";
}
```

### Solution

Replace the body of the method that implements the algorithm with a new algorithm.
```ts
foundPerson(people: string[]): string{
  let candidates = ["Don", "John", "Kent"];
  for (let person of people) {
    if (candidates.includes(person)) {
      return person;
    }
  }
  return "";
}
```

### Why Refactor

1.  Gradual refactoring isn't the only method for improving a program.
    Sometimes a method is so cluttered with issues that it's easier to
    tear down the method and start fresh. And perhaps you have found an
    algorithm that's much simpler and more efficient. If this is the
    case, you should simply replace the old algorithm with the new one.

2.  As time goes on, your algorithm may be incorporated into a
    well-known library or framework and you want to get rid of your
    independent implementation, in order to simplify maintenance.

3.  The requirements for your program may change so heavily that your
    existing algorithm can't be salvaged for the task.

### How to Refactor

1.  Make sure that you have simplified the existing algorithm as much as
    possible. Move unimportant code to other methods using [Extract
    Method](/extract-method). The fewer moving parts in your algorithm,
    the easier it's to replace.

2.  Create your new algorithm in a new method. Replace the old algorithm
    with the new one and start testing the program.

3.  If the results don't match, return to the old implementation and
    compare the results. Identify the causes of the discrepancy. While
    the cause is often an error in the old algorithm, it's more likely
    due to something not working in the new one.

4.  When all tests are successfully completed, delete the old algorithm
    for good!
