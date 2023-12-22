---
description: Use of primitives instead of small objects for simple tasks (such as currency, ranges, special strings for phone numbers, etc.)Use of constants for coding information (such as a constant USER_ADMIN_ROLE = 1 for referring to users with administrator rights.)Use of string constants as field names for use in data arrays.
lang: en
title: Primitive Obsession
---
# Primitive Obsession

### Signs and Symptoms

-   Use of primitives instead of small objects for simple tasks (such as currency, ranges, special strings for phone numbers, etc.)

-   Use of constants for coding information (such as a constant
    `USER_ADMIN_ROLE = 1` for referring to users with administrator
    rights.)

-   Use of string constants as field names for use in data arrays.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/primitive-obsession-01.png?id=73e1c5b08ea68a7ad7a66832644e6696"
srcset="https://refactoring.guru/images/refactoring/content/smells/primitive-obsession-01-2x.png?id=e13be298e4b8d9d4a987972dfc777f4b 2x"
width="500" height="300" />
</figure>

### Reasons for the Problem

Like most other smells, primitive obsessions are born in moments of
weakness. "Just a field for storing some data!" the programmer said.
Creating a primitive field is so much easier than making a whole new class, right? And so it was done. Then another field was needed and added in the same way. Lo and behold, the class became huge and unwieldy.

Primitives are often used to "simulate" types. So instead of a separate data type, you have a set of numbers or strings that form the list of allowable values for some entity. Easy-to-understand names are then given to these specific numbers and strings via constants, which is why they're spread wide and far.

Another example of poor primitive use is field simulation. The class
contains a large array of diverse data and string constants (which are specified in the class) are used as array indices for getting this data.

### Treatment

- If you have a large variety of primitive fields, it may be possible
  to logically group some of them into their own class. Even better, move the behavior associated with this data into the class too. Forthis task, try [[fruit/Coding/Refactoring/organizing-data/replace-data-value-with-object|Replace Data Value With Object]].

    <figure class="image">
    <img
    src="https://refactoring.guru/images/refactoring/content/smells/primitive-obsession-02.png?id=69dfd06eec8d6053e9d88c03ecc78044"
    srcset="https://refactoring.guru/images/refactoring/content/smells/primitive-obsession-02-2x.png?id=255bbb1e0b340ce3b62a5898e8edc75a 2x"
    loading="lazy" width="500" height="300" />
    </figure>

- If the values of primitive fields are used in method parameters, go with [[fruit/Coding/Refactoring/simplifying-method-calls/introduce-parameter-object|Introduce Parameter Object]] or [[fruit/Coding/Refactoring/simplifying-method-calls/preserve-whole-object|Preserve Whole Object]].


- When complicated data is coded in variables, use [[fruit/Coding/Refactoring/organizing-data/replace-type-code-with-class|Replace Type Code With Class]], [[fruit/Coding/Refactoring/organizing-data/replace-type-code-with-subclasses|Replace Type Code With Subclasses]] or [[fruit/Coding/Refactoring/organizing-data/replace-type-code-with-state-strategy|Replace Type Code With State/Strategy]].

- If there are arrays among the variables, use[[fruit/Coding/Refactoring/organizing-data/replace-array-with-object|Replace Array With Object]].

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/primitive-obsession-03.png?id=ab0a8c7b6188265bb9890424e679af2f"
srcset="https://refactoring.guru/images/refactoring/content/smells/primitive-obsession-03-2x.png?id=bec1080bcf2be14eeda69b0090d5d3fb 2x"
loading="lazy" width="500" height="300" />
</figure>

### Payoff

- Code becomes more flexible thanks to use of objects instead of primitives.

- Better understandability and organization of code. Operations on particular data are in the same place, instead of being scattered. No more guessing about the reason for all these strange constants and why they're in an array.

- Easier finding of duplicate code.
