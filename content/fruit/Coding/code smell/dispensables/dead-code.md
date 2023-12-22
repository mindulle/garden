---
description: A variable, parameter, field, method or class is no longer used (usually because it's obsolete).
lang: en
title: Dead Code
---
# Dead Code

### Signs and Symptoms

A variable, parameter, field, method or class is no longer used (usually because it's obsolete).

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/dead-code-01.png?id=418685bee5de933c472c48efcb5b67a0"
srcset="https://refactoring.guru/images/refactoring/content/smells/dead-code-01-2x.png?id=d9981d853e7e855cf0454fc32aab85a6 2x"
width="500" height="300" />
</figure>

### Reasons for the Problem

When requirements for the software have changed or corrections have been made, nobody had time to clean up the old code.

Such code could also be found in complex conditionals, when one of the branches becomes unreachable (due to error or other circumstances).

### Treatment

The quickest way to find dead code is to use a good [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment).

- Delete unused code and unneeded files.
- In the case of an unnecessary class, [[fruit/Coding/Refactoring/moving-features-between-objects/inline-class|Inline Class]] or [[fruit/Coding/Refactoring/dealing-with-generalization/collapse-hierarchy|Collapse Hierarchy]] can be applied if a subclass or superclass is used.

- To remove unneeded parameters, use [[fruit/Coding/Refactoring/simplifying-method-calls/remove-parameter|Remove Parameter]].

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/dead-code-02.png?id=b368f23b7cc88340933b761cf2ad1954"
srcset="https://refactoring.guru/images/refactoring/content/smells/dead-code-02-2x.png?id=bf78ebf643d890b41b60058d8e67d845 2x"
loading="lazy" width="500" height="300" />
</figure>

### Payoff

- Reduced code size.
- Simpler support.
