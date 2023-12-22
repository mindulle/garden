---
lang: en
title: Organizing Data
---
# Organizing Data

These refactoring techniques help with data handling, replacing
primitives with rich class functionality.

Another important result is untangling of class associations, which
makes classes more portable and reusable.

---
[[fruit/Coding/Refactoring/organizing-data/self-encapsulate-field|Self Encapsulate Field]]

- **Problem:** You use direct access to private fields inside a class.

- **Solution:** Create a getter and setter for the field, and use only them for accessing the field.

[[fruit/Coding/Refactoring/organizing-data/replace-data-value-with-object|Replace Data Value With Object]]

- **Problem:** A class (or group of classes) contains a data field. The field has its own behavior and associated data.

- **Solution:** Create a new class, place the old field and its behavior in the class, and store the object of the class in the original class.

[[fruit/Coding/Refactoring/organizing-data/change-value-to-reference|Change Value To Reference]]

- **Problem:** So you have many identical instances of a single class that you need to replace with a single object.

- **Solution:** Convert the identical objects to a single reference object.

[[fruit/Coding/Refactoring/organizing-data/change-reference-to-value|Change Reference To Value]]
- **Problem:** You have a reference object that’s too small and infrequently changed to justify managing its life cycle.

- **Solution:** Turn it into a value object.

[[fruit/Coding/Refactoring/organizing-data/replace-array-with-object|Replace Array With Object]]

- **Problem:** You have an array that contains various types of data.

- **Solution:** Replace the array with an object that will have separate fields for each element.

[[fruit/Coding/Refactoring/organizing-data/duplicate-observed-data|Duplicate Observed Data]]

- **Problem:** Is domain data stored in classes responsible for the GUI?

- **Solution:** Then it’s a good idea to separate the data into separate classes, ensuring connection and synchronization between the domain class and the GUI.

[[fruit/Coding/Refactoring/organizing-data/change-unidirectional-association-to-bidirectional|Change Unidirectional Association To Bidirectional]]
- **Problem:** You have two classes that each need to use the features of the other, but the association between them is only unidirectional.

- **Solution:** Add the missing association to the class that needs it.

[[fruit/Coding/Refactoring/organizing-data/change-bidirectional-association-to-unidirectional|Change Bidirectional Association To Unidirectional]]

- **Problem:** You have a bidirectional association between classes, but one of the classes doesn’t use the other’s features.

- **Solution:** Remove the unused association.

[[fruit/Coding/Refactoring/organizing-data/replace-magic-number-with-symbolic-constant|Replace Magic Number With Symbolic Constant]]
- **Problem:** Your code uses a number that has a certain meaning to it.

- **Solution:** Replace this number with a constant that has a human-readable name explaining the meaning of the number.

[[fruit/Coding/Refactoring/organizing-data/encapsulate-field|Encapsulate Field]]

- **Problem:** You have a public field.

- **Solution:** Make the field private and create access methods for it.

[[fruit/Coding/Refactoring/organizing-data/encapsulate-collection|Encapsulate Collection]]

- **Problem:** A class contains a collection field and a simple getter and setter for working with the collection.

- **Solution:** Make the getter-returned value read-only and create methods for adding/deleting elements of the collection.

[[fruit/Coding/Refactoring/organizing-data/replace-type-code-with-class|Replace Type Code With Class]]

- **Problem:** A class has a field that contains type code. The values of this type aren’t used in operator conditions and don’t affect the behavior of the program.

- **Solution:** Create a new class and use its objects instead of the type code values.

[[fruit/Coding/Refactoring/organizing-data/replace-type-code-with-subclasses|Replace Type Code With Subclasses]]
- **Problem:** You have a coded type that directly affects program behavior (values of this field trigger various code in conditionals).

- **Solution:** Create subclasses for each value of the coded type. Then extract the relevant behaviors from the original class to these subclasses. Replace the control flow code with polymorphism.

[[fruit/Coding/Refactoring/organizing-data/replace-type-code-with-state-strategy|Replace Type Code With State/Strategy]]
- **Problem:** You have a coded type that affects behavior but you can’t use subclasses to get rid of it.

- **Solution:** Replace type code with a state object. If it’s necessary to replace a field value with type code, another state object is “plugged in”.

[[fruit/Coding/Refactoring/organizing-data/replace-subclass-with-fields|Replace Subclass With Fields]]

- **Problem:** You have subclasses differing only in their (constant-returning) methods.

- **Solution:** Replace the methods with fields in the parent class and delete the subclasses.