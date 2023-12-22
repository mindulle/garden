---
description: "Problem: You get several values from an object and then pass them as parameters to a method. Solution: Instead, try passing the whole object."
lang: en
title: Preserve Whole Object
---
# Preserve Whole Object

### Problem

You get several values from an object and then pass them as parameters
to a method.
```ts
let low = daysTempRange.getLow();
let high = daysTempRange.getHigh();
let withinPlan = plan.withinRange(low, high);
```
### Solution

Instead, try passing the whole object.
```ts
let withinPlan = plan.withinRange(daysTempRange);
```

### Why Refactor

The problem is that each time before your method is called, the methods
of the future parameter object must be called. If these methods or the
quantity of data obtained for the method are changed, you will need to
carefully find a dozen such places in the program and implement these
changes in each of them.

After you apply this refactoring technique, the code for getting all
necessary data will be stored in one place---the method itself.

### Benefits

-   Instead of a hodgepodge of parameters, you see a single object with
    a comprehensible name.

-   If the method needs more data from an object, you won't need to
    rewrite all the places where the method is used---merely inside the
    method itself.

### Drawbacks

-   Sometimes this transformation causes a method to become less
    flexible: previously the method could get data from many different
    sources but now, because of refactoring, we're limiting its use to
    only objects with a particular interface.

### How to Refactor

1.  Create a parameter in the method for the object from which you can
    get the necessary values.

2.  Now start removing the old parameters from the method one by one,
    replacing them with calls to the relevant methods of the parameter
    object. Test the program after each replacement of a parameter.

3.  Delete the getter code from the parameter object that had preceded
    the method call.
