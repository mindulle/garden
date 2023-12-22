---
description: You have a complex switch operator or sequence of if statements.
lang: en
title: Switch Statements
---
# Switch Statements

### Signs and Symptoms

You have a complex `switch` operator or sequence of `if` statements.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/switch-statements-01.png?id=1c5a538d451c3d2b2e43d0d4f53b994b"
srcset="https://refactoring.guru/images/refactoring/content/smells/switch-statements-01-2x.png?id=da7f9cad4c4bb8bf5d6910aba08680be 2x"
width="500" height="300" />
</figure>

### Reasons for the Problem

Relatively rare use of `switch` and `case` operators is one of the
hallmarks of object-oriented code. Often code for a single `switch` can be scattered in different places in the program. When a new condition is added, you have to find all the `switch` code and modify it.

As a rule of thumb, when you see `switch` you should think of
polymorphism.

### Treatment

- To isolate `switch` and put it in the right class, you may need [[fruit/Coding/Refactoring/composing-methods/extract-method|Extract Method]] and then [[fruit/Coding/Refactoring/moving-features-between-objects/move-method|Move Method]].

- If a `switch` is based on type code, such as when the program's runtime mode is switched, use [[fruit/Coding/Refactoring/organizing-data/replace-type-code-with-subclasses|Replace Type Code With Subclasses]] or [[fruit/Coding/Refactoring/organizing-data/replace-type-code-with-state-strategy|Replace Type Code With State/Strategy]].

-   After specifying the inheritance structure, use [[fruit/Coding/Refactoring/simplifying-conditional-expressions/replace-conditional-with-polymorphism|Replace Conditional with Polymorphism]].

- If there aren't too many conditions in the operator and they all call same method with different parameters, polymorphism will be superfluous. If this case, you can break that method into multiple smaller methods with [[fruit/Coding/Refactoring/simplifying-method-calls/replace-parameter-with-explicit-methods|Replace Parameter With Explicit Methods]] and change the `switch` accordingly.

- If one of the conditional options is `null`, use [[fruit/Coding/Refactoring/simplifying-conditional-expressions/introduce-null-object|Introduce Null Object]].

### Payoff

-   Improved code organization.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/switch-statements-02.png?id=29ec9ad9c6d760d2b940a68a1d23c4be"
srcset="https://refactoring.guru/images/refactoring/content/smells/switch-statements-02-2x.png?id=b7c9163ebe366c956f1aa64c4b3312e4 2x"
loading="lazy" width="500" height="300" />
</figure>

### When to Ignore

- When a `switch` operator performs simple actions, there's no reason to make code changes.

- Often `switch` operators are used by factory design patterns ([[fruit/Coding/Patterns/Design Patterns/catalog/creational/factory-method|Factory Method]] or [[fruit/Coding/Patterns/Design Patterns/catalog/creational/abstract-factory|Abstract Factory]]) to select a created class.
