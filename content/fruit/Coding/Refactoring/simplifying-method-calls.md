---
lang: en
title: Simplifying Method Calls
---
# Simplifying Method Calls

These techniques make method calls simpler and easier to understand. This, in turn, simplifies the interfaces for interaction between classes.

---
[[fruit/Coding/Refactoring/simplifying-method-calls/rename-method|Rename Method]]
- **Problem:** The name of a method doesn’t explain what the method does.

- **Solution:** Rename the method.

[[fruit/Coding/Refactoring/simplifying-method-calls/add-parameter|Add Parameter]]

- **Problem:** A method doesn’t have enough data to perform certain actions.

- **Solution:** Create a new parameter to pass the necessary data.

[[fruit/Coding/Refactoring/simplifying-method-calls/remove-parameter|Remove Parameter]]
- **Problem:** A parameter isn’t used in the body of a method.

- **Solution:** Remove the unused parameter.

[[fruit/Coding/Refactoring/simplifying-method-calls/separate-query-from-modifier|Separate Query From Modifier]]
- **Problem:** Do you have a method that returns a value but also changes something inside an object?

- **Solution:** Split the method into two separate methods. As you would expect, one of them should return the value and the other one modifies the object.

[[fruit/Coding/Refactoring/simplifying-method-calls/parameterize-method|Parameterize Method]]
- **Problem:** Multiple methods perform similar actions that are different only in their internal values, numbers or operations.

- **Solution:** Combine these methods by using a parameter that will pass the necessary special value.

[[fruit/Coding/Refactoring/simplifying-method-calls/replace-parameter-with-explicit-methods|Replace Parameter With Explicit Methods]]
- **Problem:** A method is split into parts, each of which is run depending on the value of a parameter.

- **Solution:** Extract the individual parts of the method into their own methods and call them instead of the original method.

[[fruit/Coding/Refactoring/simplifying-method-calls/preserve-whole-object|Preserve Whole Object]]

- **Problem:** You get several values from an object and then pass them as parameters to a method.

- **Solution:** Instead, try passing the whole object.

[[fruit/Coding/Refactoring/simplifying-method-calls/replace-parameter-with-method-call|Replace Parameter With Method Call]]

- **Problem:** Calling a query method and passing its results as the parameters of another method, while that method could call the query directly.

- **Solution:** Instead of passing the value through a parameter, try placing a query call inside the method body.

[[fruit/Coding/Refactoring/simplifying-method-calls/introduce-parameter-object|Introduce Parameter Object]]

- **Problem:** Your methods contain a repeating group of parameters.

- **Solution:** Replace these parameters with an object.

[[fruit/Coding/Refactoring/simplifying-method-calls/remove-setting-method|Remove Setting Method]]

- **Problem:** The value of a field should be set only when it’s created, and not change at any time after that.

- **Solution:** So remove methods that set the field’s value.

[[fruit/Coding/Refactoring/simplifying-method-calls/hide-method|Hide Method]]

- **Problem:** A method isn’t used by other classes or is used only inside its own class hierarchy.

- **Solution:** Make the method private or protected.

[[fruit/Coding/Refactoring/simplifying-method-calls/replace-constructor-with-factory-method|Replace Constructor With Factory Method]]

- **Problem:** You have a complex constructor that does something more than just setting parameter values in object fields.

- **Solution:** Create a factory method and use it to replace constructor calls.

[[fruit/Coding/Refactoring/simplifying-method-calls/replace-error-code-with-exception|Replace Error Code With Exception]]

- **Problem:** A method returns a special value that indicates an error?

- **Solution:** Throw an exception instead.

[[fruit/Coding/Refactoring/simplifying-method-calls/replace-exception-with-test|Replace Exception With Test]]

- **Problem:** You throw an exception in a place where a simple test would do the job?

- **Solution:** Replace the exception with a condition test.