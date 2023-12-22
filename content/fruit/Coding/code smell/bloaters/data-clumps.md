---
description: Sometimes different parts of the code contain identical groups of variables (such as parameters for connecting to a database). These clumps should be turned into their own classes.
lang: en
title: Data Clumps
---
> [!NOTE] Data Clumps
> Bunches of data that that hang around together really ought to be made into their own object. A good test is to consider deleting one of the data values: if you did this, would the others make any sense? If they don't, it's a sure sign that you have an object that's dying to be born
# Data Clumps

### Signs and Symptoms

Sometimes different parts of the code contain identical groups of variables (such as parameters for connecting to a database). These clumps should be turned into their own classes.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/data-clumps-01.png?id=9d8a38ce942720cee728797eba695a2f"
srcset="https://refactoring.guru/images/refactoring/content/smells/data-clumps-01-2x.png?id=64c7f4113e3c06f10dbec825833fa190 2x"
width="500" height="300" />
</figure>

### Reasons for the Problem

Often these data groups are due to poor program structure or \"copypasta programming".

If you want to make sure whether or not some data is a data clump, just delete one of the data values and see whether the other values still make sense. If this isn't the case, this is a good sign that this group of variables should be combined into an object.

### Treatment

-  If repeating data comprises the fields of a class, use [[fruit/Coding/Refactoring/moving-features-between-objects/extract-class|Extract Class]] to move the fields to their own class.

-  If the same data clumps are passed in the parameters of methods, use [[fruit/Coding/Refactoring/simplifying-method-calls/introduce-parameter-object|Introduce Parameter Object]] to set them off as a class.

-   If some of the data is passed to other methods, think about passing the entire data object to the method instead of just individual fields. [[fruit/Coding/Refactoring/simplifying-method-calls/preserve-whole-object|Preserve Whole Object]] will help with this.

-   Look at the code used by these fields. It may be a good idea to move this code to a data class.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/data-clumps-02.png?id=cfb0a8fa64a983473dd31527e28ae158"
srcset="https://refactoring.guru/images/refactoring/content/smells/data-clumps-02-2x.png?id=195f24da42dbd21508aa9ef46a57abba 2x"
loading="lazy" width="500" height="300" />
</figure>

### Payoff

-   Improves understanding and organization of code. Operations on particular data are now gathered in a single place, instead of
    haphazardly throughout the code.
-   Reduces code size.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/data-clumps-03.png?id=c170bbdea77b7d4a26947ef328b70adc"
srcset="https://refactoring.guru/images/refactoring/content/smells/data-clumps-03-2x.png?id=2b4a70e09a6236715a9bc4bd4663508b 2x"
loading="lazy" width="500" height="300" />
</figure>

### When to Ignore

-   Passing an entire object in the parameters of a method, instead of passing just its values (primitive types), may create an undesirable dependency between the two classes.
