---
description: Sooner or later, libraries stop meeting user needs. The only solution to the problem---changing the library---is often impossible since the library is read-only.
lang: en
title: Incomplete Library Class
---
> [!NOTE] Incomplete Library Class
> Occurs when responsibilities emerge in our code that clearly should be moved to a library class, but we are unable or unwilling to modify the library class to accept these new responsibilities

# Incomplete Library Class

### Signs and Symptoms

Sooner or later, [libraries](https://en.wikipedia.org/wiki/Library_(computing)) stop meeting user needs. The only solution to the problem---changing the library---is often impossible since the library is read-only.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/incomplete-library-class-01.png?id=ca51f740f7fd39b7de1430b64cae9f8c"
srcset="https://refactoring.guru/images/refactoring/content/smells/incomplete-library-class-01-2x.png?id=25c39ccf56423153b7c977c57943af54 2x"
width="500" height="300" />
</figure>

### Reasons for the Problem

The author of the library hasn't provided the features you need or has
refused to implement them.

### Treatment

- To introduce a few methods to a library class, use [[fruit/Coding/Refactoring/moving-features-between-objects/introduce-foreign-method|Introduce Foreign Method]].

- For big changes in a class library, use [[fruit/Coding/Refactoring/moving-features-between-objects/introduce-local-extension|Introduce Local Extension]].

### Payoff

- Reduces code duplication (instead of creating your own library from scratch, you can still piggy-back off an existing one).

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/incomplete-library-class-02.png?id=05a8d9c631d43a3fb256196f366fd089"
srcset="https://refactoring.guru/images/refactoring/content/smells/incomplete-library-class-02-2x.png?id=cb204d62084939b3d9e6f97d5d3662ee 2x"
loading="lazy" width="500" height="300" />
</figure>

### When to Ignore

- Extending a library can generate additional work if the changes to the library involve changes in code.
