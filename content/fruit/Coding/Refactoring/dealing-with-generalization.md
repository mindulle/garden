---
lang: en
title: Dealing with Generalization
---
# Dealing with Generalization

Abstraction has its own group of refactoring techniques, primarily
associated with moving functionality along the class inheritance
hierarchy, creating new classes and interfaces, and replacing
inheritance with delegation and vice versa.

---
[[fruit/Coding/Refactoring/dealing-with-generalization/pull-up-field|Pull Up Field]]

- **Problem:** Two classes have the same field.

- **Solution:** Remove the field from subclasses and move it to the superclass.

[[fruit/Coding/Refactoring/dealing-with-generalization/pull-up-method|Pull Up Method]]

- **Problem:** Your subclasses have methods that perform similar work.

- **Solution:** Make the methods identical and then move them to the relevant superclass.

[[fruit/Coding/Refactoring/dealing-with-generalization/pull-up-constructor-body|Pull Up Constructor Body]]

- **Problem:** Your subclasses have constructors with code that’s mostly identical.

- **Solution:** Create a superclass constructor and move the code that’s the same in the subclasses to it. Call the superclass constructor in the subclass constructors.

[[fruit/Coding/Refactoring/dealing-with-generalization/push-down-method|Push Down Method]]

- **Problem:** Is behavior implemented in a superclass used by only one (or a few) subclasses?

- **Solution:** Move this behavior to the subclasses.

[[fruit/Coding/Refactoring/dealing-with-generalization/push-down-field|Push Down Field]]

- **Problem:** Is a field used only in a few subclasses?

- **Solution:** Move the field to these subclasses.

[[fruit/Coding/Refactoring/dealing-with-generalization/extract-subclass|Extract Subclass]]

- **Problem:** A class has features that are used only in certain cases.

- **Solution:** Create a subclass and use it in these cases.

[[fruit/Coding/Refactoring/dealing-with-generalization/extract-superclass|Extract Superclass]]

- **Problem:** You have two classes with common fields and methods.

- **Solution:** Create a shared superclass for them and move all the identical fields and methods to it.

[[fruit/Coding/Refactoring/dealing-with-generalization/extract-interface|Extract Interface]]

- **Problem:** Multiple clients are using the same part of a class interface. Another case: part of the interface in two classes is the same.

- **Solution:** Move this identical portion to its own interface.

[[fruit/Coding/Refactoring/dealing-with-generalization/collapse-hierarchy|Collapse Hierarchy]]

- **Problem:** You have a class hierarchy in which a subclass is practically the same as its superclass.

- **Solution:** Merge the subclass and superclass.

[[fruit/Coding/Refactoring/dealing-with-generalization/form-template-method|Form Template Method]]

- **Problem:** Your subclasses implement algorithms that contain similar steps in the same order.

- **Solution:** Move the algorithm structure and identical steps to a superclass, and leave implementation of the different steps in the subclasses.

[[fruit/Coding/Refactoring/dealing-with-generalization/replace-inheritance-with-delegation|Replace Inheritance With Delegation]]

- **Problem:** You have a subclass that uses only a portion of the methods of its superclass (or it’s not possible to inherit superclass data).

- **Solution:** Create a field and put a superclass object in it, delegate methods to the superclass object, and get rid of inheritance.

[[fruit/Coding/Refactoring/dealing-with-generalization/replace-delegation-with-inheritance|Replace Delegation With Inheritance]]
- **Problem:** A class contains many simple methods that delegate to all methods of another class.

- **Solution:** Make the class a delegate inheritor, which makes the delegating methods unnecessary.

