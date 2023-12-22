---
description: Two code fragments look almost identical.
lang: en
title: Duplicate Code
---
> [!NOTE] Duplicated code
> Duplicated code is the most pervasive and pungent smell in software. It tends to be either explicit or subtle. Explicit duplication exists in identical code, while subtle duplication exists in structures or processing steps that are outwardly different, yet essentially the same

# Duplicate Code

### Signs and Symptoms

Two code fragments look almost identical.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/duplicate-code-01.png?id=16fe591195fa50073551852b3d44844e"
srcset="https://refactoring.guru/images/refactoring/content/smells/duplicate-code-01-2x.png?id=9e462bc4bd52927cf45cfc7dbc5907af 2x"
width="500" height="300" />
</figure>

### Reasons for the Problem

Duplication usually occurs when multiple programmers are working on different parts of the same program at the same time. Since they're working on different tasks, they may be unaware their colleague has already written similar code that could be repurposed for their own needs.

There's also more subtle duplication, when specific parts of code look different but actually perform the same job. This kind of duplication can be hard to find and fix.

Sometimes duplication is purposeful. When rushing to meet deadlines and the existing code is "almost right" for the job, novice programmers may not be able to resist the temptation of copying and pasting the relevant code. And in some cases, the programmer is simply too lazy to de-clutter.

### Treatment

-   If the same code is found in two or more methods in the same class: use [[fruit/Coding/Refactoring/composing-methods/extract-method|Extract Method]] and place calls for the new method in both places.

    <figure class="image">
    <img
    src="https://refactoring.guru/images/refactoring/content/smells/duplicate-code-02.png?id=50d92af3defe2c2688f66cde102c9c09"
    srcset="https://refactoring.guru/images/refactoring/content/smells/duplicate-code-02-2x.png?id=5b9325ca1b0369ec3423808380fa9022 2x"
    loading="lazy" width="500" height="300" />
    </figure>

-   If the same code is found in two subclasses of the same level:

    -   Use [Extract Method](/extract-method) for both classes, followed
        by [Pull Up Field](/pull-up-field) for the fields used in the
        method that you're pulling up.

    -   If the duplicate code is inside a constructor, use [Pull Up
        Constructor Body](/pull-up-constructor-body).

    -   If the duplicate code is similar but not completely identical,
        use [Form Template Method](/form-template-method).

    -   If two methods do the same thing but use different algorithms,
        select the best algorithm and apply [Substitute
        Algorithm](/substitute-algorithm).

-   If duplicate code is found in two different classes:

    -   If the classes aren't part of a hierarchy, use [Extract
        Superclass](/extract-superclass) in order to create a single
        superclass for these classes that maintains all the previous
        functionality.

    -   If it's difficult or impossible to create a superclass, use
        [Extract Class](/extract-class) in one class and use the new
        component in the other.

-   If a large number of conditional expressions are present and perform
    the same code (differing only in their conditions), merge these
    operators into a single condition using [Consolidate Conditional
    Expression](/consolidate-conditional-expression) and use [Extract
    Method](/extract-method) to place the condition in a separate method
    with an easy-to-understand name.

-   If the same code is performed in all branches of a conditional
    expression: place the identical code outside of the condition tree
    by using [Consolidate Duplicate Conditional
    Fragments](/consolidate-duplicate-conditional-fragments).

### Payoff

-   Merging duplicate code simplifies the structure of your code and
    makes it shorter.

-   Simplification + shortness = code that's easier to simplify and
    cheaper to support.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/duplicate-code-03.png?id=bd88b98ff5e5e1b5a4019cb0a50df9f5"
srcset="https://refactoring.guru/images/refactoring/content/smells/duplicate-code-03-2x.png?id=33df6a84eddb7c888f6757d4d80d5e20 2x"
loading="lazy" width="500" height="300" />
</figure>

### When to Ignore

-   In very rare cases, merging two identical fragments of code can make
    the code less intuitive and obvious.
