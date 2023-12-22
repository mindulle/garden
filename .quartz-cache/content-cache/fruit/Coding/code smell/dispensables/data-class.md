---
description: A data class refers to a class that contains only fields and crude methods for accessing them (getters and setters). These are simply containers for data used by other classes. These classes don't contain any additional functionality and can't independently operate on the data that they own.
lang: en
title: Data Class
---
> [!NOTE] Data Class
> Classes that have fields, getting and setting methods for the fields, and nothing else. Such classes are dumb data holders and are almost certainly being manipulated in far too much detail by other classes.

# Data Class

### Signs and Symptoms

A data class refers to a class that contains only fields and crude
methods for accessing them (getters and setters). These are simply
containers for data used by other classes. These classes don't contain any additional functionality and can't independently operate on the data that they own.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/data-class-01.png?id=2ea1583b05a194a056d27ac559545318"
srcset="https://refactoring.guru/images/refactoring/content/smells/data-class-01-2x.png?id=2beb8150d4ba31ca37d6515495ceff2d 2x"
width="500" height="300" />
</figure>

### Reasons for the Problem

It's a normal thing when a newly created class contains only a few
public fields (and maybe even a handful of getters/setters). But the
true power of objects is that they can contain behavior types or
operations on their data.

### Treatment

-   If a class contains public fields, use [[fruit/Coding/Refactoring/organizing-data/encapsulate-field|Encapsulate Field]] to hide them from direct access and require that access be performed via getters and setters only.

- Use [[fruit/Coding/Refactoring/organizing-data/encapsulate-collection|Encapsulate Collection]] for data stored in collections (such as arrays).

- Review the client code that uses the class. In it, you may find
  functionality that would be better located in the data class itself. If this is the case, use [[fruit/Coding/Refactoring/moving-features-between-objects/move-method|Move Method]] and [[fruit/Coding/Refactoring/composing-methods/extract-method|Extract Method]] to migrate this functionality to the data class.

- After the class has been filled with well thought-out methods, you may want to get rid of old methods for data access that give overly broad access to the class data. For this, [[fruit/Coding/Refactoring/simplifying-method-calls/remove-setting-method|Remove Setting Method]] and [[fruit/Coding/Refactoring/simplifying-method-calls/hide-method|Hide Method]] may be helpful.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/data-class-02.png?id=db0eb15f9f229bafd8423b2cfd09f910"
srcset="https://refactoring.guru/images/refactoring/content/smells/data-class-02-2x.png?id=fb9b6d670232d6effe790980e6b388ec 2x"
loading="lazy" width="500" height="300" />
</figure>

### Payoff

- Improves understanding and organization of code. Operations on particular data are now gathered in a single place, instead of haphazardly throughout the code.

- Helps you to spot duplication of client code.
