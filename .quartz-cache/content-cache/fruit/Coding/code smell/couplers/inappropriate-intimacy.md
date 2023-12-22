---
description: One class uses the internal fields and methods of another class.
lang: en
title: Inappropriate Intimacy
---
> [!NOTE] Inappropriate Intimacy
> Sometimes classes become far too intimate and spend too much time delving into each others’ private parts. We may not be prudes when it comes to people, but we think our classes should follow strict, puritan rules. Over-intimate classes need to be broken up as lovers were in ancient days.
# Inappropriate Intimacy

### Signs and Symptoms

One class uses the internal fields and methods of another class.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/inappropriate-intimacy-01.png?id=31bf185f4ff946f13e28d27d377a4b6c"
srcset="https://refactoring.guru/images/refactoring/content/smells/inappropriate-intimacy-01-2x.png?id=1857242bb9cf7b2ca50327897d256711 2x"
width="500" height="300" />
</figure>

### Reasons for the Problem

Keep a close eye on classes that spend too much time together. Good
classes should know as little about each other as possible. Such classes
are easier to maintain and reuse.

### Treatment

-   The simplest solution is to use [Move Method](/move-method) and
    [Move Field](/move-field) to move parts of one class to the class in
    which those parts are used. But this works only if the first class
    truly doesn't need these parts.

    <figure class="image">
    <img
    src="https://refactoring.guru/images/refactoring/content/smells/inappropriate-intimacy-02.png?id=3f23c8df6eb8cf91b46e39fa912ff85c"
    srcset="https://refactoring.guru/images/refactoring/content/smells/inappropriate-intimacy-02-2x.png?id=f3ac66384b14f074ed36b6d9c3720b20 2x"
    loading="lazy" width="500" height="300" />
    </figure>

-   Another solution is to use [Extract Class](/extract-class) and [Hide
    Delegate](/hide-delegate) on the class to make the code relations
    "official".

-   If the classes are mutually interdependent, you should use [Change
    Bidirectional Association to
    Unidirectional](/change-bidirectional-association-to-unidirectional).

-   If this "intimacy" is between a subclass and the superclass,
    consider [Replace Delegation with
    Inheritance](/replace-delegation-with-inheritance).

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/inappropriate-intimacy-03.png?id=de33e2285073feaabd1a81cffdcd386c"
srcset="https://refactoring.guru/images/refactoring/content/smells/inappropriate-intimacy-03-2x.png?id=51bfcec36fb123f146857099555dc478 2x"
loading="lazy" width="500" height="300" />
</figure>

### Payoff

-   Improves code organization.

-   Simplifies support and code reuse.
