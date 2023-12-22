---
description: Two classes perform identical functions but have different method names.
lang: en
title: Alternative Classes with Different Interfaces
---
> [!NOTE] Alternative Classes with Different Interfaces
> occurs when the interfaces of two classes are different and yet the classes are quite similar. If you can find the similarities between the two classes, you can often refactor the classes to make them share a common interface [F 85, K 43]
# Alternative Classes with Different Interfaces

### Signs and Symptoms

Two classes perform identical functions but have different method names.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/alternative-classes-with-different-interfaces-01.png?id=e5fccb2e5390e0a62b5c9f56029bd361"
srcset="https://refactoring.guru/images/refactoring/content/smells/alternative-classes-with-different-interfaces-01-2x.png?id=00f0e52d679514e0c16e836e7cee5c24 2x"
width="500" height="300" />
</figure>

### Reasons for the Problem

The programmer who created one of the classes probably didn't know that
a functionally equivalent class already existed.

### Treatment

Try to put the interface of classes in terms of a common denominator:

-   [Rename Method](/rename-method)s to make them identical in all
    alternative classes.

-   [Move Method](/move-method), [Add Parameter](/add-parameter) and
    [Parameterize Method](/parameterize-method) to make the signature
    and implementation of methods the same.

-   If only part of the functionality of the classes is duplicated, try
    using [Extract Superclass](/extract-superclass). In this case, the
    existing classes will become subclasses.

-   After you have determined which treatment method to use and
    implemented it, you may be able to delete one of the classes.

### Payoff

-   You get rid of unnecessary duplicated code, making the resulting
    code less bulky.

-   Code becomes more readable and understandable (you no longer have to
    guess the reason for creation of a second class performing the exact
    same functions as the first one).

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/alternative-classes-with-different-interfaces-02.png?id=669874e082965799a70076a120288c6a"
srcset="https://refactoring.guru/images/refactoring/content/smells/alternative-classes-with-different-interfaces-02-2x.png?id=db011d16b1dcea2e68d252eb435e63ef 2x"
loading="lazy" width="500" height="300" />
</figure>

### When to Ignore

-   Sometimes merging classes is impossible or so difficult as to be pointless. One example is when the alternative classes are in different libraries that each have their own version of the class.
