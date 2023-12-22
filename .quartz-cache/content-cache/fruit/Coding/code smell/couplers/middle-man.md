---
description: If a class performs only one action, delegating work to another class, why does it exist at all?
lang: en
title: Middle Man
---
# Middle Man

### Signs and Symptoms

If a class performs only one action, delegating work to another class, why does it exist at all?

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/middle-man-01.png?id=14c65845c4e0cf03e7e9e48108090c98"
srcset="https://refactoring.guru/images/refactoring/content/smells/middle-man-01-2x.png?id=a1a99f8b475b719d9f894aa613515761 2x"
width="500" height="300" />
</figure>

### Reasons for the Problem

This smell can be the result of overzealous elimination of [[fruit/Coding/code smell/couplers/message-chains|Message Chains]].

In other cases, it can be the result of the useful work of a class being gradually moved to other classes. The class remains as an empty shell that doesn't do anything other than delegate.

### Treatment

-   If most of a method's classes delegate to another class, [[fruit/Coding/Refactoring/moving-features-between-objects/remove-middle-man|Remove Middle Man]] is in order.

### Payoff

-   Less bulky code.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/middle-man-02.png?id=f507c0fd9a7bde8df8c22b9027d0a404"
srcset="https://refactoring.guru/images/refactoring/content/smells/middle-man-02-2x.png?id=41869f090e8263d46e708778fe64059c 2x"
loading="lazy" width="500" height="300" />
</figure>

### When to Ignore

Don't delete middle man that have been created for a reason:

-   A middle man may have been added to avoid interclass dependencies.

- Some design patterns create middle man on purpose (such as
  [[fruit/Coding/Patterns/Design Patterns/catalog/structural/proxy|Proxy]] or [[fruit/Coding/Patterns/Design Patterns/catalog/structural/decorator|Decorator]]).
