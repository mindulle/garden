---
description: Whenever you create a subclass for a class, you find yourself needing to create a subclass for another class.
lang: en
title: Parallel Inheritance Hierarchies
---
# Parallel Inheritance Hierarchies
### Signs and Symptoms

Whenever you create a subclass for a class, you find yourself needing to create a subclass for another class.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/parallel-inheritance-hierarchies-01.png?id=9167875f5f0e80256edcc8fcaaed3563"
srcset="https://refactoring.guru/images/refactoring/content/smells/parallel-inheritance-hierarchies-01-2x.png?id=975e6a0589795c59b47ed3aa122beead 2x"
width="500" height="300" />
</figure>

### Reasons for the Problem

All was well as long as the hierarchy stayed small. But with new classes being added, making changes has become harder and harder.

### Treatment

- You may de-duplicate parallel class hierarchies in two steps. First, make instances of one hierarchy refer to instances of another hierarchy. Then, remove the hierarchy in the referred class, by using [[fruit/Coding/Refactoring/moving-features-between-objects/move-method|Move Method]] and [[fruit/Coding/Refactoring/moving-features-between-objects/move-field|Move Field]].

### Payoff

-   Reduces code duplication.

-   Can improve organization of code.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/parallel-inheritance-hierarchies-02.png?id=4dca6795d3d087b23ad1027298d6f1dd"
srcset="https://refactoring.guru/images/refactoring/content/smells/parallel-inheritance-hierarchies-02-2x.png?id=b45e8dde4f4abbe2f0d329964c921960 2x"
loading="lazy" width="500" height="300" />
</figure>

### When to Ignore

-   Sometimes having parallel class hierarchies is just a way to avoid even bigger mess with program architecture. If you find that your attempts to de-duplicate hierarchies produce even uglier code, just step out, revert all of your changes and get used to that code.
