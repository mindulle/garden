---
description: You find yourself having to change many unrelated methods when you make changes to a class. For example, when adding a new product type you have to change the methods for finding, displaying, and ordering products.
lang: en
title: Divergent Change
---
# Divergent Change

> [!NOTE] Divergent Change
> Occurs when one class is commonly changed in different ways for different reasons. Separating these divergent responsibilities decreases the chance that one change could affect another and lower maintenance costs.

> *Divergent Change* resembles [[fruit/Coding/code smell/change-preventers/shotgun-surgery|Shotgun Surgery]] but is actually the opposite smell. *Divergent Change* is when many changes are made to a single class. *Shotgun Surgery* refers to when a single change is made to multiple classes simultaneously.

### Signs and Symptoms

You find yourself having to change many unrelated methods when you make changes to a class. For example, when adding a new product type you have to change the methods for finding, displaying, and ordering products.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/divergent-change-01.png?id=d62e68e1778d67bf82ff74064c24de33"
srcset="https://refactoring.guru/images/refactoring/content/smells/divergent-change-01-2x.png?id=1c7d20737703941d1e3f7ad85e180578 2x"
width="500" height="300" />
</figure>

### Reasons for the Problem

Often these divergent modifications are due to poor program structure or \"copypasta programming".

### Treatment

- Split up the behavior of the class via [[fruit/Coding/Refactoring/moving-features-between-objects/extract-class|Extract Class]].

- If different classes have the same behavior, you may want to combine the classes through inheritance ([[fruit/Coding/Refactoring/dealing-with-generalization/extract-superclass|Extract Superclass]] and [[fruit/Coding/Refactoring/dealing-with-generalization/extract-subclass|Extract Subclass]]).

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/divergent-change-02.png?id=21b6fd7cba36f123c09497cb8f5a5625"
srcset="https://refactoring.guru/images/refactoring/content/smells/divergent-change-02-2x.png?id=581f6218d8a2393ece88419ad60831da 2x"
loading="lazy" width="500" height="300" />
</figure>

### Payoff

-   Improves code organization.

-   Reduces code duplication.

-   Simplifies support.
