---
description: A method is filled with explanatory comments.
lang: en
title: Comments
---
> [!NOTE] Comments (a.k.a. Deodorant)
> When you feel like writing a comment, first try "to refactor so that the comment becomes superfluous" 

# Comments

### Signs and Symptoms

A method is filled with explanatory comments.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/comments-01.png?id=584958123f3b902e0ad0895d879509b9"
srcset="/images/refactoring/content/smells/comments-01-2x.png?id=15fe22a84b974b19a752ad169ae999ae 2x"
width="500" height="300" />
</figure>

### Reasons for the Problem

Comments are usually created with the best of intentions, when the
author realizes that his or her code isn't intuitive or obvious. In such
cases, comments are like a deodorant masking the smell of fishy code that could be improved.

> The best comment is a good name for a method or class.

If you feel that a code fragment can't be understood without comments,
try to change the code structure in a way that makes comments
unnecessary.

### Treatment

- If a comment is intended to explain a complex expression, the
  expression should be split into understandable subexpressions using [[fruit/Coding/Refactoring/composing-methods/extract-variable|Extract Variable]].

- If a comment explains a section of code, this section can be turned into a separate method via [[fruit/Coding/Refactoring/composing-methods/extract-method|Extract Method]]. The name of the new method can be taken from the comment text itself, most likely.

- If a method has already been extracted, but comments are still
  necessary to explain what the method does, give the method a
  self-explanatory name. Use [[fruit/Coding/Refactoring/simplifying-method-calls/rename-method|Rename Method]] for this.

- If you need to assert rules about a state that's necessary for the
  system to work, use [[fruit/Coding/Refactoring/simplifying-conditional-expressions/introduce-assertion|Introduce Assertion]].

### Payoff

-   Code becomes more intuitive and obvious.

<figure class="image">
<img
src="https://refactoring.guru//images/refactoring/content/smells/comments-02.png?id=266f82bb7081957d409ae690c2c66483"
srcset="/images/refactoring/content/smells/comments-02-2x.png?id=57a83d2b705347aa0d0a6d197a1f9d3c 2x"
loading="lazy" width="500" height="300" />
</figure>

### When to Ignore

Comments can sometimes be useful:

- When explaining **why** something is being implemented in a
  particular way.

- When explaining complex algorithms (when all other methods for simplifying the algorithm have been tried and come up short).
