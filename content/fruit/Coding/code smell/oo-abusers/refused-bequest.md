---
description: If a subclass uses only some of the methods and properties inherited from its parents, the hierarchy is off-kilter. The unneeded methods may simply go unused or be redefined and give off exceptions.
lang: en
title: Refused Bequest
---
# Refused Bequest

### Signs and Symptoms

If a subclass uses only some of the methods and properties inherited from its parents, the hierarchy is off-kilter. The unneeded methods may simply go unused or be redefined and give off exceptions.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/refused-bequest-01.png?id=7a1d79e75a3836c22ec865d72c98664e"
srcset="https://refactoring.guru/images/refactoring/content/smells/refused-bequest-01-2x.png?id=d2e31b7b9fa3326118817b8e0c65e435 2x"
width="500" height="300" />
</figure>

### Reasons for the Problem

Someone was motivated to create inheritance between classes only by the desire to reuse the code in a superclass. But the superclass and subclass are completely different.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/refused-bequest-02.png?id=f9b0affd4bbf6fec22c05783fc75562e"
srcset="https://refactoring.guru/images/refactoring/content/smells/refused-bequest-02-2x.png?id=33b42b7d51bca13f27e4933d24f82751 2x"
loading="lazy" width="500" height="300" />
</figure>

### Treatment

- If inheritance makes no sense and the subclass really does have nothing in common with the superclass, eliminate inheritance in favor of [[fruit/Coding/Refactoring/dealing-with-generalization/replace-inheritance-with-delegation|Replace Inheritance With Delegation]].

- If inheritance is appropriate, get rid of unneeded fields and methods in the subclass. Extract all fields and methods needed by the subclass from the parent class, put them in a new superclass, and set both classes to inherit from it ([[fruit/Coding/Refactoring/dealing-with-generalization/extract-superclass|Extract Superclass]]).

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/refused-bequest-03.png?id=2a84293620fa1caf4329fca1f4a44e08"
srcset="https://refactoring.guru/images/refactoring/content/smells/refused-bequest-03-2x.png?id=6990ba0083e3de07881bd551928e3a79 2x"
loading="lazy" width="500" height="300" />
</figure>

### Payoff

- Improves code clarity and organization. You will no longer have to wonder why the `Dog` class is inherited from the `Chair` class (even though they both have 4 legs).
