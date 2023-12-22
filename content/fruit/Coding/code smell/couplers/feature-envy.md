---
description: A method accesses the data of another object more than its own data.
lang: en
title: Feature Envy
---
> [!NOTE] Feature Envy
> Data and behavior that acts on that data belong together. When a method makes too many calls to other classes to obtain data or functionality, Feature Envy is in the air

# Feature Envy

### Signs and Symptoms

A method accesses the data of another object more than its own data.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/feature-envy-01.png?id=f520a24562e3f4b7848eca94792c329f"
srcset="https://refactoring.guru/images/refactoring/content/smells/feature-envy-01-2x.png?id=4329322703e5af5b3ef7faefd17c4750 2x"
width="500" height="300" />
</figure>

### Reasons for the Problem

This smell may occur after fields are moved to a data class. If this is
the case, you may want to move the operations on data to this class as well.

### Treatment

As a basic rule, if things change at the same time, you should keep them in the same place. Usually data and functions that use this data are changed together (although exceptions are possible).

- If a method clearly should be moved to another place, use [[fruit/Coding/Refactoring/moving-features-between-objects/move-method|Move Method]].

- If only part of a method accesses the data of another object, use [[fruit/Coding/Refactoring/composing-methods/extract-method|Extract Method]] to move the part in question.

- If a method uses functions from several other classes, first
  determine which class contains most of the data used. Then place the method in this class along with the other data. Alternatively, use [[fruit/Coding/Refactoring/composing-methods/extract-method|Extract Method]] to split the method into several parts that can be placed in different places in different classes.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/feature-envy-02.png?id=a90a3545498c7c22e605ceeb1f23d005"
srcset="https://refactoring.guru/images/refactoring/content/smells/feature-envy-02-2x.png?id=641faecaeb0d422232c0bcc6346352c5 2x"
loading="lazy" width="500" height="300" />
</figure>

### Payoff

-   Less code duplication (if the data handling code is put in a central place).

-   Better code organization (methods for handling data are next to the actual data).

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/feature-envy-03.png?id=ea63eeab9eda1910348d0930c8592780"
srcset="https://refactoring.guru/images/refactoring/content/smells/feature-envy-03-2x.png?id=d8d24af45285db63e68560788e6240bc 2x"
loading="lazy" width="500" height="300" />
</figure>

### When to Ignore

- Sometimes behavior is purposefully kept separate from the class that holds the data. The usual advantage of this is the ability to dynamically change the behavior (see [[fruit/Coding/Patterns/Design Patterns/catalog/behavioral/strategy|Strategy]], [[fruit/Coding/Patterns/Design Patterns/catalog/behavioral/visitor|Visitor]] and other patterns).