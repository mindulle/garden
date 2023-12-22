---
description: More than three or four parameters for a method.
lang: en
title: Long Parameter List
---
# Long Parameter List

### Signs and Symptoms

More than three or four parameters for a method.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/long-parameter-list-01.png?id=06fad4adaf485cfaa569e66c20f268eb"
srcset="https://refactoring.guru/images/refactoring/content/smells/long-parameter-list-01-2x.png?id=d964f68180e89b6312726c7a5719e35d 2x"
width="500" height="300" />
</figure>

### Reasons for the Problem

A long list of parameters might happen after several types of algorithms are merged in a single method. A long list may have been created to control which algorithm will be run and how.

Long parameter lists may also be the byproduct of efforts to make
classes more independent of each other. For example, the code for
creating specific objects needed in a method was moved from the method to the code for calling the method, but the created objects are passed to the method as parameters. Thus the original class no longer knows about the relationships between objects, and dependency has decreased. But if several of these objects are created, each of them will require its own parameter, which means a longer parameter list.

It's hard to understand such lists, which become contradictory and hard to use as they grow longer. Instead of a long list of parameters, a method can use the data of its own object. If the current object doesn't contain all necessary data, another object (which will get the necessary data) can be passed as a method parameter.

### Treatment

- Check what values are passed to parameters. If some of the arguments are just results of method calls of another object, use [[fruit/Coding/Refactoring/simplifying-method-calls/replace-parameter-with-method-call|Replace Parameter With Method Call]]. This object can be placed in the field of its own class or passed as a method parameter.

-  Instead of passing a group of data received from another object as parameters, pass the object itself to the method, by using [[fruit/Coding/Refactoring/simplifying-method-calls/preserve-whole-object|Preserve Whole Object]].

- But if these parameters are coming from different sources, you can pass them as a single parameter object via [[fruit/Coding/Refactoring/simplifying-method-calls/introduce-parameter-object|Introduce Parameter Object]].

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/long-parameter-list-02.png?id=7571291fcaea939ed137400cbe0f3c02"
srcset="https://refactoring.guru/images/refactoring/content/smells/long-parameter-list-02-2x.png?id=90514c8d76f4eae7b76439778b82c778 2x"
loading="lazy" width="500" height="300" />
</figure>

### Payoff

-   More readable, shorter code.

-   Refactoring may reveal previously unnoticed duplicate code.

### When to Ignore

- Don't get rid of parameters if doing so would cause unwanted
  dependency between classes.
