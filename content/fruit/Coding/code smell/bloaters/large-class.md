---
description: A class contains many fields/methods/lines of code.
lang: en
title: Large Class
---
> [!NOTE] Large Class
> Fowler and Beck note that the presence of too many instance variables usually indicates that a class is trying to do too much. In general, large classes typically contain too many responsibilities

# Large Class

### Signs and Symptoms

A class contains many fields/methods/lines of code.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/large-class-01.png?id=acac82f25cc90aaa413c2daefebf0e4b"
srcset="https://refactoring.guru/images/refactoring/content/smells/large-class-01-2x.png?id=44aea94399b8bd6398a01b46b5bc7f29 2x"
width="500" height="300" />
</figure>

### Reasons for the Problem

Classes usually start small. But over time, they get bloated as the
program grows.

As is the case with long methods as well, programmers usually find it mentally less taxing to place a new feature in an existing class than to create a new class for the feature.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/large-class-02.png?id=973b37334ae57489945a88b9327f81e3"
srcset="https://refactoring.guru/images/refactoring/content/smells/large-class-02-2x.png?id=f51627abdfb96fad29cb114d00795fec 2x"
loading="lazy" width="500" height="300" />
</figure>

### Treatment

When a class is wearing too many (functional) hats, think about
splitting it up:

- [[fruit/Coding/Refactoring/moving-features-between-objects/extract-class|Extract Class]] helps if part of the behavior of the large class can be spun off into a separate component.

- [[fruit/Coding/Refactoring/dealing-with-generalization/extract-subclass|Extract Subclass]] helps if part of the behavior of the large class can be implemented in different ways or is used in rare cases.

- [[fruit/Coding/Refactoring/dealing-with-generalization/extract-interface|Extract Interface]] helps if it's necessary to have a list of the operations and behaviors that the client can use.

-  If a large class is responsible for the graphical interface, you may
    try to move some of its data and behavior to a separate domain
    object. In doing so, it may be necessary to store copies of some
    data in two places and keep the data consistent. [[fruit/Coding/Refactoring/organizing-data/duplicate-observed-data|Duplicate Observed Data]] offers a way to do this.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/large-class-03.png?id=f0a0109f731dbc420ffe385cb658f0de"
srcset="https://refactoring.guru/images/refactoring/content/smells/large-class-03-2x.png?id=2e497ff65fc035f0d51f908361daee78 2x"
loading="lazy" width="500" height="300" />
</figure>

### Payoff

-   Refactoring of these classes spares developers from needing to
    remember a large number of attributes for a class.

-   In many cases, splitting large classes into parts avoids duplication of code and functionality.
