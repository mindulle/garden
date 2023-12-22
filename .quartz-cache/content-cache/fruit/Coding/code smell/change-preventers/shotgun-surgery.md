---
description: Making any modifications requires that you make many small changes to many different classes.
lang: en
title: Shotgun Surgery
---
# Shotgun Surgery

> *Shotgun Surgery* resembles [[fruit/Coding/code smell/change-preventers/divergent-change|Divergent Change]] but is actually the opposite smell. *Divergent Change* is when many changes are made to a single class. *Shotgun Surgery* refers to when a single change is made to multiple classes simultaneously.

### Signs and Symptoms

Making any modifications requires that you make many small changes to many different classes.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/shotgun-surgery-01.png?id=9cc1117a6d787364788e152a3adb6a53"
srcset="https://refactoring.guru/images/refactoring/content/smells/shotgun-surgery-01-2x.png?id=01431b43fcaee83fade53530a3dd91ab 2x"
width="500" height="300" />
</figure>

### Reasons for the Problem

A single responsibility has been split up among a large number of
classes. This can happen after overzealous application of [[fruit/Coding/code smell/change-preventers/divergent-change|Divergent Change]].

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/shotgun-surgery-02.png?id=48f8a4a0f17d112e02ae73bacaed43fa"
srcset="https://refactoring.guru/images/refactoring/content/smells/shotgun-surgery-02-2x.png?id=a35426ca3f6e64857e66b2fdeb395870 2x"
loading="lazy" width="500" height="300" />
</figure>

### Treatment

-   Use [[fruit/Coding/Refactoring/moving-features-between-objects/move-method|Move Method]] and [[fruit/Coding/Refactoring/moving-features-between-objects/move-field|Move Field]] to move existing class behaviors into a single class. If there's no class appropriate for this, create a new one.

-   If moving code to the same class leaves the original classes almost empty, try to get rid of these now-redundant classes via [[fruit/Coding/Refactoring/moving-features-between-objects/inline-class|Inline Class]]

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/shotgun-surgery-03.png?id=cf013f14eb5cde98bd48595a1c9836a9"
srcset="https://refactoring.guru/images/refactoring/content/smells/shotgun-surgery-03-2x.png?id=259b00413f0f8be143ead703c74b7e38 2x"
loading="lazy" width="500" height="300" />
</figure>

### Payoff

-   Better organization.

-   Less code duplication.

-   Easier maintenance.
