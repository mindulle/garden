---
description: There's an unused class, method, field or parameter.
lang: en
title: Speculative Generality
---
# Speculative Generality

### Signs and Symptoms

There's an unused class, method, field or parameter.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/speculative-generality-01.png?id=c804fce5c6c5c34b4d9389fcb2aa60aa"
srcset="https://refactoring.guru/images/refactoring/content/smells/speculative-generality-01-2x.png?id=7875dde405dfa433685fa9040da39b5e 2x"
width="500" height="300" />
</figure>

### Reasons for the Problem

Sometimes code is created "just in case" to support anticipated future features that never get implemented. As a result, code becomes hard to understand and support.

### Treatment

- For removing unused abstract classes, try [[fruit/Coding/Refactoring/dealing-with-generalization/collapse-hierarchy|Collapse Hierarchy]]. 

- Unnecessary delegation of functionality to another class can be
  eliminated via [[fruit/Coding/Refactoring/moving-features-between-objects/inline-class|Inline Class]].

- Unused methods? Use [[fruit/Coding/Refactoring/composing-methods/inline-method|Inline Method]] to get rid of them.

-   Methods with unused parameters should be given a look with the help
    of [Remove Parameter](/remove-parameter).

-   Unused fields can be simply deleted.

<figure class="image">
<img
src="/images/refactoring/content/smells/speculative-generality-02.png?id=e9d0e8a6170b6d0d0be9cca44175fe44"
srcset="/images/refactoring/content/smells/speculative-generality-02-2x.png?id=017235ad164cb220c99f21f201872d29 2x"
loading="lazy" width="500" height="300" />
</figure>

### Payoff

-   Slimmer code.

-   Easier support.

### When to Ignore

-   If you're working on a framework, it's eminently reasonable to
    create functionality not used in the framework itself, as long as
    the functionality is needed by the frameworks's users.

-   Before deleting elements, make sure that they aren't used in unit
    tests. This happens if tests need a way to get certain internal
    information from a class or perform special testing-related actions.
