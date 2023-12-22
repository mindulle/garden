---
description: In code you see a series of calls resembling \$a-\>b()-\>c()-\>d()
lang: en
title: Message Chains
---
# Message Chains

### Signs and Symptoms

In code you see a series of calls resembling `$a->b()->c()->d()`

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/message-chains-01.png?id=c290ab1d348b3e6ab500c0b949f3d3f8"
srcset="https://refactoring.guru/images/refactoring/content/smells/message-chains-01-2x.png?id=63332ad44f028e0d60f42d3a56e0280a 2x"
width="500" height="300" />
</figure>

### Reasons for the Problem

A message chain occurs when a client requests another object, that
object requests yet another one, and so on. These chains mean that the client is dependent on navigation along the class structure. Any changes in these relationships require modifying the client.

### Treatment

- To delete a message chain, use [[fruit/Coding/Refactoring/moving-features-between-objects/hide-delegate|Hide Delegate]].

-   Sometimes it's better to think of why the end object is being used. Perhaps it would make sense to use [[fruit/Coding/Refactoring/composing-methods/extract-method|Extract  Method]]. for this functionality and move it to the beginning of the chain, byusing [[fruit/Coding/Refactoring/moving-features-between-objects/move-method|Move Method]].

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/message-chains-02.png?id=d348325f450e592900b1a4a2ed960b53"
srcset="https://refactoring.guru/images/refactoring/content/smells/message-chains-02-2x.png?id=07214cc9363ca16dcbaab4bb6e1edeef 2x"
loading="lazy" width="500" height="300" />
</figure>

### Payoff

-   Reduces dependencies between classes of a chain.

-   Reduces the amount of bloated code.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/message-chains-03.png?id=e651ac11f057e3e2e7c7786fc4051a66"
srcset="https://refactoring.guru/images/refactoring/content/smells/message-chains-03-2x.png?id=2e0e5bdf1e249a09f9c8e67f01de6bd1 2x"
loading="lazy" width="500" height="300" />
</figure>

### When to Ignore

- Overly aggressive delegate hiding can cause code in which it's hard to see where the functionality is actually occurring. Which is
  another way of saying, avoid the [[fruit/Coding/code smell/couplers/middle-man|Middle Man]] smell as well.
