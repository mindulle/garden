---
lang: en
title: Dispensables
---
# Dispensables

A dispensable is something pointless and unneeded whose absence would
make the code cleaner, more efficient and easier to understand.

---
[[fruit/Coding/code smell/dispensables/comments|comments]]

- A method is filled with explanatory comments.

[[fruit/Coding/code smell/dispensables/duplicate-code|Duplicate Code]]

- Two code fragments look almost identical.

[[fruit/Coding/code smell/dispensables/lazy-class|Lazy Class]]

- Understanding and maintaining classes always costs time and money. So if a class doesn’t do enough to earn your attention, it should be deleted.

[[fruit/Coding/code smell/dispensables/data-class|Data Class]]

- A data class refers to a class that contains only fields and crude methods for accessing them (getters and setters). These are simply containers for data used by other classes. These classes don’t contain any additional functionality and can’t independently operate on the data that they own.

[[fruit/Coding/code smell/dispensables/dead-code|Dead Code]]
- A variable, parameter, field, method or class is no longer used (usually because it’s obsolete).

[[fruit/Coding/code smell/dispensables/speculative-generality|Speculative Generality]]
- There’s an unused class, method, field or parameter.