---
description: Temporary fields get their values (and thus are needed by objects) only under certain circumstances. Outside of these circumstances, they're empty.
lang: en
title: Temporary Field
---
# Temporary Field

### Signs and Symptoms

Temporary fields get their values (and thus are needed by objects) only under certain circumstances. Outside of these circumstances, they're empty.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/temporary-field-01.png?id=5e30a8144171693ee4894091762b9742"
srcset="https://refactoring.guru/images/refactoring/content/smells/temporary-field-01-2x.png?id=1cf05ea67f1e3bd1c1f634af7408f67c 2x"
width="500" height="300" />
</figure>

### Reasons for the Problem

Oftentimes, temporary fields are created for use in an algorithm that requires a large amount of inputs. So instead of creating a large number of parameters in the method, the programmer decides to create fields for this data in the class. These fields are used only in the algorithm and go unused the rest of the time.

This kind of code is tough to understand. You expect to see data in
object fields but for some reason they're almost always empty.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/temporary-field-02.png?id=2cf98e02ffb0c1d36a98d48ba7bc5c45"
srcset="https://refactoring.guru/images/refactoring/content/smells/temporary-field-02-2x.png?id=6c8e4384d9029cd3ec84cd330d5871eb 2x"
loading="lazy" width="500" height="300" />
</figure>

### Treatment

- Temporary fields and all code operating on them can be put in a separate class via [[fruit/Coding/Refactoring/moving-features-between-objects/extract-class|Extract Class]]. In other words, you're creating a method object, achieving the same result as if you would perform [[fruit/Coding/Refactoring/composing-methods/replace-method-with-method-object|Replace Method With Method Object]].

- [[fruit/Coding/Refactoring/simplifying-conditional-expressions/introduce-null-object|Introduce Null Object]] and integrate it in place of the conditional code which was used to check the temporary field values for existence.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/temporary-field-03.png?id=cf0e1c1e2a19745d23ca9e1d917d45cc"
srcset="https://refactoring.guru/images/refactoring/content/smells/temporary-field-03-2x.png?id=c633fd664958307bf296b09de72959dd 2x"
loading="lazy" width="500" height="300" />
</figure>

### Payoff

- Better code clarity and organization.
