---
lang: en
title: Composing Methods
---
# Composing Methods

Much of refactoring is devoted to correctly composing methods. In mostcases, excessively long methods are the root of all evil. The vagariesof code inside these methods conceal the execution logic and make the method extremely hard to understand---and even harder to change.

The refactoring techniques in this group streamline methods, remove code duplication, and pave the way for future improvements.

---
[[fruit/Coding/Refactoring/composing-methods/extract-method|Extract Method]]

- **Problem:** You have a code fragment that can be grouped together.

- **Solution:** Move this code to a separate new method (or function) and replace the old code with a call to the method.

[[fruit/Coding/Refactoring/composing-methods/inline-method|Inline Method]]

- **Problem:** When a method body is more obvious than the method itself, use this technique.

- **Solution:** Replace calls to the method with the method’s content and delete the method itself.

[[fruit/Coding/Refactoring/composing-methods/extract-variable|Extract Variable]]

- **Problem:** You have an expression that’s hard to understand.

- **Solution:** Place the result of the expression or its parts in separate variables that are self-explanatory.

[[fruit/Coding/Refactoring/composing-methods/inline-temp|Inline Temp]]

- **Problem:** You have a temporary variable that’s assigned the result of a simple expression and nothing more.

- **Solution:** Replace the references to the variable with the expression itself.

[[fruit/Coding/Refactoring/composing-methods/replace-temp-with-query|Replace Temp With Query]]

- **Problem:** You place the result of an expression in a local variable for later use in your code.

- **Solution:** Move the entire expression to a separate method and return the result from it. Query the method instead of using a variable. Incorporate the new method in other methods, if necessary.

[[fruit/Coding/Refactoring/composing-methods/split-temporary-variable|Split Temporary Variable]]

- **Problem:** You have a local variable that’s used to store various intermediate values inside a method (except for cycle variables).

- **Solution:** Use different variables for different values. Each variable should be responsible for only one particular thing.

[[fruit/Coding/Refactoring/composing-methods/remove-assignments-to-parameters|Remove Assignments To Parameters]]
- **Problem:** Some value is assigned to a parameter inside method’s body.

- **Solution:** Use a local variable instead of a parameter.

[[fruit/Coding/Refactoring/composing-methods/replace-method-with-method-object|Replace Method With Method Object]]

- **Problem:** You have a long method in which the local variables are so intertwined that you can’t apply _Extract Method_.

- **Solution:** Transform the method into a separate class so that the local variables become fields of the class. Then you can split the method into several methods within the same class.

[[fruit/Coding/Refactoring/composing-methods/substitute-algorithm|Substitute Algorithm]]

- **Problem:** So you want to replace an existing algorithm with a new one?

- **Solution:** Replace the body of the method that implements the algorithm with a new algorithm.