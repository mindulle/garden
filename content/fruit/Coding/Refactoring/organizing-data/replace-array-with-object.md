---
description: "Problem: You have an array that contains various types of data. Solution: Replace the array with an object that will have separate fields for each element."
lang: en
title: Replace Array with Object
---
# Replace Array with Object

> This refactoring technique is a special case of [[fruit/Coding/Refactoring/organizing-data/replace-data-value-with-object|Replace Data Value with Object]].

### Problem

You have an array that contains various types of data.

### Solution

Replace the array with an object that will have separate fields for each element.

```ts
let row = new Array(2);
row[0] = "Liverpool";
row[1] = "15";
```

```ts
let row = new Performance();
row.setName("Liverpool");
row.setWins("15");
```

### Why Refactor

Arrays are an excellent tool for storing data and collections of a
single type. But if you use an array like post office boxes, storing the
username in box 1 and the user's address in box 14, you will someday be
very unhappy that you did. This approach leads to catastrophic failures
when somebody puts something in the wrong "box" and also requires your
time for figuring out which data is stored where.

### Benefits

-   In the resulting class, you can place all associated behaviors that
    had been previously stored in the main class or elsewhere.

-   The fields of a class are much easier to document than the elements
    of an array.

### How to Refactor

1.  Create the new class that will contain the data from the array.
    Place the array itself in the class as a public field.

2.  Create a field for storing the object of this class in the original
    class. Don't forget to also create the object itself in the place
    where you initiated the data array.

3.  In the new class, create access methods one by one for each of the
    array elements. Give them self-explanatory names that indicate what
    they do. At the same time, replace each use of an array element in
    the main code with the corresponding access method.

4.  When access methods have been created for all elements, make the
    array private.

5.  For each element of the array, create a private field in the class
    and then change the access methods so that they use this field
    instead of the array.

6.  When all data has been moved, delete the array.
