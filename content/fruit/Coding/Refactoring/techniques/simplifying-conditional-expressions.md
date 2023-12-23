# Simplifying Conditional Expressions

Conditionals tend to get more and more complicated in their logic over time, and there are yet more techniques to combat this as well.

[[fruit/Coding/Refactoring/techniques/simplifying-conditional-expressions/decompose-conditional|Decompose Conditional]]

- **Problem:** You have a complex conditional (`if-then`/`else` or `switch`).

- **Solution:** Decompose the complicated parts of the conditional into separate methods: the condition, `then` and `else`.

[[fruit/Coding/Refactoring/techniques/simplifying-conditional-expressions/consolidate-conditional-expression|Consolidate Conditional Expression]]
- **Problem:** You have multiple conditionals that lead to the same result or action.

- **Solution:** Consolidate all these conditionals in a single expression.

[[fruit/Coding/Refactoring/techniques/simplifying-conditional-expressions/consolidate-duplicate-conditional-fragments|Consolidate Duplicate Conditional Fragments]]

- **Problem:** Identical code can be found in all branches of a conditional.

- **Solution:** Move the code outside of the conditional.

[[fruit/Coding/Refactoring/techniques/simplifying-conditional-expressions/remove-control-flag|Remove Control Flag]]

- **Problem:** You have a boolean variable that acts as a control flag for multiple boolean expressions.

- **Solution:** Instead of the variable, use `break`, `continue` and `return`.

[[fruit/Coding/Refactoring/techniques/simplifying-conditional-expressions/replace-nested-conditional-with-guard-clauses|Replace Nested Conditional with Guard Clauses]]
- **Problem:** You have a group of nested conditionals and it's hard to determine the normal flow of code execution.

- **Solution:** Isolate all special checks and edge cases into separate clauses and place them before the main checks. Ideally, you should have a "flat" list of conditionals, one after the other.

[[fruit/Coding/Refactoring/techniques/simplifying-conditional-expressions/replace-conditional-with-polymorphism|Replace Conditional with Polymorphism]]

- **Problem:** You have a conditional that performs various actions depending on object type or properties.

- **Solution:** Create subclasses matching the branches of the conditional. In them, create a shared method and move code from the corresponding branch of the conditional to it. Then replace the conditional with the relevant method call. The result is that the proper implementation will be attained via polymorphism depending on the object class.

[[fruit/Coding/Refactoring/techniques/simplifying-conditional-expressions/introduce-null-object|Introduce Null Object]]

- **Problem:** Since some methods return `null` instead of real objects, you have many checks for `null` in your code.

- **Solution:** Instead of `null`, return a null object that exhibits the default behavior.

[[fruit/Coding/Refactoring/techniques/simplifying-conditional-expressions/introduce-assertion|Introduce Assertion]]

- **Problem:** For a portion of code to work correctly, certain conditions or values must be true.

- **Solution:** Replace these assumptions with specific assertion checks.
