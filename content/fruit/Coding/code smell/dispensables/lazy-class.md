---
description: Understanding and maintaining classes always costs time and money. So if a class doesn't do enough to earn your attention, it should be deleted.
lang: en
title: Lazy Class
---
> [!NOTE] Freeloader (a.k.a. Lazy Class)
> A class that isn’t doing enough to pay for itself should be eliminated.

# Lazy Class

### Signs and Symptoms

Understanding and maintaining classes always costs time and money. So if a class doesn't do enough to earn your attention, it should be deleted.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/lazy-class-01.png?id=efec5911dfaaa3ba69d3eb4dab03fd3c"
srcset="https://refactoring.guru/images/refactoring/content/smells/lazy-class-01-2x.png?id=3b5b07bc60eb98c883fc68c5e1a05aed 2x"
width="500" height="300" />
</figure>

### Reasons for the Problem

Perhaps a class was designed to be fully functional but after some of the refactoring it has become ridiculously small.

Or perhaps it was designed to support future development work that never got done.

### Treatment

- Components that are near-useless should be given the [[fruit/Coding/Refactoring/moving-features-between-objects/inline-class|Inline Class]] treatment.

- For subclasses with few functions, try [[fruit/Coding/Refactoring/dealing-with-generalization/collapse-hierarchy|Collapse Hierarchy]].

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/lazy-class-02.png?id=393302f2bd27ba0197660caea274ae23"
srcset="https://refactoring.guru/images/refactoring/content/smells/lazy-class-02-2x.png?id=d46dd63f159b40aa266ccbdbefb319bd 2x"
loading="lazy" width="500" height="300" />
</figure>

### Payoff

- Reduced code size.

- Easier maintenance.

### When to Ignore

- Sometimes a *Lazy Class* is created in order to delineate intentions for future development, In this case, try to maintain a balance between clarity and simplicity in your code.
