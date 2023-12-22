---
lang: en
title: Couplers
---
# Couplers

All the smells in this group contribute to excessive coupling between
classes or show what happens if coupling is replaced by excessive
delegation.

---
[[fruit/Coding/code smell/couplers/feature-envy|Feature Envy]]
- A method accesses the data of another object more than its own data.


[[fruit/Coding/code smell/couplers/inappropriate-intimacy|Inappropriate Intimacy]]

- One class uses the internal fields and methods of another class.

[[fruit/Coding/code smell/couplers/message-chains|Message Chains]]
- In code you see a series of calls resembling `$a->b()->c()->d()`

[[fruit/Coding/code smell/couplers/middle-man|Middle Man]]
- If a class performs only one action, delegating work to another class, why does it exist at all?