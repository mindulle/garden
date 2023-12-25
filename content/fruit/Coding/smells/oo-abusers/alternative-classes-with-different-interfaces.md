# Alternative Classes with Different Interfaces
### Signs and Symptoms

Two classes perform identical functions but have different method names.
<figure class="image">

<img
src="https://refactoring.guru/images/refactoring/content/smells/alternative-classes-with-different-interfaces-01.png?id=e5fccb2e5390e0a62b5c9f56029bd361"
srcset="https://refactoring.guru/images/refactoring/content/smells/alternative-classes-with-different-interfaces-01-2x.png?id=00f0e52d679514e0c16e836e7cee5c24 2x"
width="500" height="300" />
</figure>
### Reasons for the Problem
The programmer who created one of the classes probably didn't know that a functionally equivalent class already existed.
### Treatment
Try to put the interface of classes in terms of a common denominator:
- [[fruit/Coding/Refactoring/techniques/simplifying-method-calls/rename-method|Rename Method]]s to make them identical in all alternative classes.
- [[fruit/Coding/Refactoring/techniques/moving-features-between-objects/move-method|Move Method]], [[fruit/Coding/Refactoring/techniques/simplifying-method-calls/add-parameter|Add Parameter]] and [[fruit/Coding/Refactoring/techniques/simplifying-method-calls/parameterize-method|Parameterize Method]] to make the signature and implementation of methods the same.
- If only part of the functionality of the classes is duplicated, try using [[fruit/Coding/Refactoring/techniques/dealing-with-generalization/extract-superclass|Extract Superclass]]. In this case, the existing classes will become subclasses.
- After you have determined which treatment method to use and implemented it, you may be able to delete one of the classes.

### Payoff
- You get rid of unnecessary duplicated code, making the resulting code less bulky.
- Code becomes more readable and understandable (you no longer have to guess the reason for creation of a second class performing the exact same functions as the first one).

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/alternative-classes-with-different-interfaces-02.png?id=669874e082965799a70076a120288c6a"
srcset="https://refactoring.guru/images/refactoring/content/smells/alternative-classes-with-different-interfaces-02-2x.png?id=db011d16b1dcea2e68d252eb435e63ef 2x"
loading="lazy" width="500" height="300" />
</figure>
### When to Ignore
- Sometimes merging classes is impossible or so difficult as to be pointless. One example is when the alternative classes are in different libraries that each have their own version of the class.