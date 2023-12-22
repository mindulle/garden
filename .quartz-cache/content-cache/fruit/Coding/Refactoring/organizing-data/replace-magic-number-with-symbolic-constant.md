---
description: "Problem: Your code uses a number that has a certain meaning to it. Solution: Replace this number with a constant that has a human-readable name explaining the meaning of the number."
lang: en
title: Replace Magic Number with Symbolic Constant
---
# Replace Magic Number with Symbolic Constant 

### Problem

Your code uses a number that has a certain meaning to it.

```ts
potentialEnergy(mass: number, height: number): number {
  return mass * height * 9.81;
}
```

### Solution

Replace this number with a constant that has a human-readable name explaining the meaning of the number.

```ts
static const GRAVITATIONAL_CONSTANT = 9.81;

potentialEnergy(mass: number, height: number): number {
  return mass * height * GRAVITATIONAL_CONSTANT;
}
```

### Why Refactor

A magic number is a numeric value that's encountered in the source but
has no obvious meaning. This "anti-pattern" makes it harder to
understand the program and refactor the code.

Yet more difficulties arise when you need to change this magic number.
Find and replace won't work for this: the same number may be used for
different purposes in different places, meaning that you will have to
verify every line of code that uses this number.

### Benefits

-   The symbolic constant can serve as live documentation of the meaning
    of its value.

-   It's much easier to change the value of a constant than to search
    for this number throughout the entire codebase, without the risk of
    accidentally changing the same number used elsewhere for a different
    purpose.

-   Reduce duplicate use of a number or string in the code. This is
    especially important when the value is complicated and long (such as
    `3.14159` or `0xCAFEBABE`).

### Good to Know

#### Not all numbers are magical.

If the purpose of a number is obvious, there's no need to replace it. A
classic example is:

```
for (i = 0; i < сount; i++) { ... }
```

#### Alternatives

1.  Sometimes a magic number can be replaced with method calls. For
    example, if you have a magic number that signifies the number of
    elements in a collection, you don't need to use it for checking the
    last element of the collection. Instead, use the standard method for
    getting the collection length.

2.  Magic numbers are sometimes used as type code. Say that you have two
    types of users and you use a number field in a class to specify
    which is which: administrators are `1` and ordinary users are `2`.

    In this case, you should use one of the refactoring methods to avoid
    type code:

    -   [Replace Type Code with Class](/replace-type-code-with-class)

    -   [Replace Type Code with
        Subclasses](/replace-type-code-with-subclasses)

    -   [Replace Type Code with
        State/Strategy](/replace-type-code-with-state-strategy)

### How to Refactor

1.  Declare a constant and assign the value of the magic number to it.

2.  Find all mentions of the magic number.

3.  For each of the numbers that you find, double-check that the magic
    number in this particular case corresponds to the purpose of the
    constant. If yes, replace the number with your constant. This is an
    important step, since the same number can mean absolutely different
    things (and replaced with different constants, as the case may be).
