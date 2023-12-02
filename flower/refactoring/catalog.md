---
description: Full list of refactoring techniques and code smells. It\'s better to understand what\'s wrong with the code before trying to improve it. Once problem is determined, just pick a refactoring and follow it\'s instruction.
lang: en
title: Catalog of Refactoring
---
# Catalog of Refactoring

## Code Smells

- What? How can code \"smell\"??\
- Well it doesn\'t have a nose\... but it definitely can stink!

::: {.section-bordered .link-list}
::: cell-flex
::: cell-image
![](/images/refactoring/content/catalog/bloaters.png?id=32a44a371122874ebd1e8a2cbb9202b9){width="160"
height="280"
srcset="/images/refactoring/content/catalog/bloaters-2x.png?id=21e2800a3c877cc37b95103bcf6ec5df 2x"}
:::

::: cell-text
### [Bloaters](/refactoring/smells/bloaters)

::: annotation
Bloaters are code, methods and classes that have increased to such
gargantuan proportions that they are hard to work with. Usually these
smells do not crop up right away, rather they accumulate over time as
the program evolves (and especially when nobody makes an effort to
eradicate them).
:::

::: catalog-list
-   [Long Method](/smells/long-method)
-   [Large Class](/smells/large-class)

```{=html}
<!-- -->
```
-   [Primitive Obsession](/smells/primitive-obsession)
-   [Long Parameter List](/smells/long-parameter-list)

```{=html}
<!-- -->
```
-   [Data Clumps](/smells/data-clumps)
:::
:::
:::
:::

::: {.section-bordered .link-list}
::: cell-flex
::: cell-image
![](/images/refactoring/content/catalog/oo-abusers.png?id=dee31050499d8d6b5a2d5b2e84e68cc8){width="160"
height="280"
srcset="/images/refactoring/content/catalog/oo-abusers-2x.png?id=d42468d27ca548c870a47b2ed08c0a16 2x"}
:::

::: cell-text
### [Object-Orientation Abusers](/refactoring/smells/oo-abusers) {#oo-abusers}

::: annotation
All these smells are incomplete or incorrect application of
object-oriented programming principles.
:::

::: catalog-list
-   [Alternative Classes with Different
    Interfaces](/smells/alternative-classes-with-different-interfaces)

```{=html}
<!-- -->
```
-   [Refused Bequest](/smells/refused-bequest)
-   [Switch Statements](/smells/switch-statements)

```{=html}
<!-- -->
```
-   [Temporary Field](/smells/temporary-field)
:::
:::
:::
:::

::: {.section-bordered .link-list}
::: cell-flex
::: cell-image
![](/images/refactoring/content/catalog/change-preventers.png?id=db5f332e55fd4b993e15c419baf1db41){width="160"
height="280"
srcset="/images/refactoring/content/catalog/change-preventers-2x.png?id=94d4444b1a3414ac3704f4ab53062f08 2x"}
:::

::: cell-text
### [Change Preventers](/refactoring/smells/change-preventers)

::: annotation
These smells mean that if you need to change something in one place in
your code, you have to make many changes in other places too. Program
development becomes much more complicated and expensive as a result.
:::

::: catalog-list
-   [Divergent Change](/smells/divergent-change)

```{=html}
<!-- -->
```
-   [Parallel Inheritance
    Hierarchies](/smells/parallel-inheritance-hierarchies)

```{=html}
<!-- -->
```
-   [Shotgun Surgery](/smells/shotgun-surgery)
:::
:::
:::
:::

::: {.section-bordered .link-list}
::: cell-flex
::: cell-image
![](/images/refactoring/content/catalog/dispensables.png?id=b1072dc9efcf8c0374ddbd7e0b8d496f){width="160"
height="280"
srcset="/images/refactoring/content/catalog/dispensables-2x.png?id=a316a726f68f8778cdfd38e850d00b8b 2x"}
:::

::: cell-text
### [Dispensables](/refactoring/smells/dispensables)

::: annotation
A dispensable is something pointless and unneeded whose absence would
make the code cleaner, more efficient and easier to understand.
:::

::: catalog-list
-   [Comments](/smells/comments)
-   [Duplicate Code](/smells/duplicate-code)

```{=html}
<!-- -->
```
-   [Data Class](/smells/data-class)
-   [Dead Code](/smells/dead-code)

```{=html}
<!-- -->
```
-   [Lazy Class](/smells/lazy-class)
-   [Speculative Generality](/smells/speculative-generality)
:::
:::
:::
:::

::: {.section-bordered .link-list style="border-bottom: none;"}
::: cell-flex
::: cell-image
![](/images/refactoring/content/catalog/couplers.png?id=1a0e96c005372053d5823ccb5282ae7d){width="160"
height="280"
srcset="/images/refactoring/content/catalog/couplers-2x.png?id=86e33d80273d564bd4d48a554167a7c9 2x"}
:::

::: cell-text
### [Couplers](/refactoring/smells/couplers)

::: annotation
All the smells in this group contribute to excessive coupling between
classes or show what happens if coupling is replaced by excessive
delegation.
:::

::: catalog-list
-   [Feature Envy](/smells/feature-envy)
-   [Inappropriate Intimacy](/smells/inappropriate-intimacy)

```{=html}
<!-- -->
```
-   [Incomplete Library Class](/smells/incomplete-library-class)
-   [Message Chains](/smells/message-chains)

```{=html}
<!-- -->
```
-   [Middle Man](/smells/middle-man)
:::
:::
:::
:::

## Refactoring Techniques {#refactoring .h1}

::: {.section-bordered .link-list style="border-top: none;"}
::: cell-flex
::: cell-image
![](/images/refactoring/content/catalog/composing-methods.png?id=953854e802753495812cb9b2686765f7){width="160"
height="280"
srcset="/images/refactoring/content/catalog/composing-methods-2x.png?id=75620eee35ec53ff9e21955cba2c70c9 2x"}
:::

::: cell-text
### [Composing Methods](/refactoring/techniques/composing-methods)

::: annotation
Much of refactoring is devoted to correctly composing methods. In most
cases, excessively long methods are the root of all evil. The vagaries
of code inside these methods conceal the execution logic and make the
method extremely hard to understand---and even harder to change.

The refactoring techniques in this group streamline methods, remove code
duplication, and pave the way for future improvements.
:::

::: catalog-list
-   [Extract Method](/extract-method)
-   [Inline Method](/inline-method)
-   [Extract Variable](/extract-variable)
-   [Inline Temp](/inline-temp)

```{=html}
<!-- -->
```
-   [Replace Temp with Query](/replace-temp-with-query)
-   [Split Temporary Variable](/split-temporary-variable)
-   [Remove Assignments to
    Parameters](/remove-assignments-to-parameters)

```{=html}
<!-- -->
```
-   [Replace Method with Method
    Object](/replace-method-with-method-object)
-   [Substitute Algorithm](/substitute-algorithm)
:::
:::
:::
:::

::: {.section-bordered .link-list style="border-top: none;"}
::: cell-flex
::: cell-image
![](/images/refactoring/content/catalog/moving-features-between-objects.png?id=8ba49e26381112792e32172edf220524){width="160"
height="280"
srcset="/images/refactoring/content/catalog/moving-features-between-objects-2x.png?id=5503a838a78b344754e92cd116207d96 2x"}
:::

::: cell-text
### [Moving Features between Objects](/refactoring/techniques/moving-features-between-objects)

::: annotation
Even if you have distributed functionality among different classes in a
less-than-perfect way, there is still hope.

These refactoring techniques show how to safely move functionality
between classes, create new classes, and hide implementation details
from public access.
:::

::: catalog-list
-   [Move Method](/move-method)
-   [Move Field](/move-field)
-   [Extract Class](/extract-class)
-   [Inline Class](/inline-class)

```{=html}
<!-- -->
```
-   [Hide Delegate](/hide-delegate)
-   [Remove Middle Man](/remove-middle-man)

```{=html}
<!-- -->
```
-   [Introduce Foreign Method](/introduce-foreign-method)
-   [Introduce Local Extension](/introduce-local-extension)
:::
:::
:::
:::

::: {.section-bordered .link-list style="border-top: none;"}
::: cell-flex
::: cell-image
![](/images/refactoring/content/catalog/organizing-data.png?id=0be19b5980545dccb976d377ec731d30){width="160"
height="280"
srcset="/images/refactoring/content/catalog/organizing-data-2x.png?id=881db3197ef8ea87bd55320073462caa 2x"}
:::

::: cell-text
### [Organizing Data](/refactoring/techniques/organizing-data)

::: annotation
These refactoring techniques help with data handling, replacing
primitives with rich class functionality. Another important result is
untangling of class associations, which makes classes more portable and
reusable.
:::

::: catalog-list
-   [Change Value to Reference](/change-value-to-reference)
-   [Change Reference to Value](/change-reference-to-value)
-   [Duplicate Observed Data](/duplicate-observed-data)
-   [Self Encapsulate Field](/self-encapsulate-field)
-   [Replace Data Value with Object](/replace-data-value-with-object)
-   [Replace Array with Object](/replace-array-with-object)

```{=html}
<!-- -->
```
-   [Change Unidirectional Association to
    Bidirectional](/change-unidirectional-association-to-bidirectional)
-   [Change Bidirectional Association to
    Unidirectional](/change-bidirectional-association-to-unidirectional)
-   [Encapsulate Field](/encapsulate-field)
-   [Encapsulate Collection](/encapsulate-collection)
-   [Replace Magic Number with Symbolic
    Constant](/replace-magic-number-with-symbolic-constant)

```{=html}
<!-- -->
```
-   [Replace Type Code with Class](/replace-type-code-with-class)
-   [Replace Type Code with
    Subclasses](/replace-type-code-with-subclasses)
-   [Replace Type Code with
    State/Strategy](/replace-type-code-with-state-strategy)
-   [Replace Subclass with Fields](/replace-subclass-with-fields)
:::
:::
:::
:::

::: {.section-bordered .link-list style="border-top: none;"}
::: cell-flex
::: cell-image
![](/images/refactoring/content/catalog/simplifying-conditional-expressions.png?id=a551572d527946cd03b647098b67776d){width="160"
height="280"
srcset="/images/refactoring/content/catalog/simplifying-conditional-expressions-2x.png?id=a6ffc35feb77eac6108ee31655ae92d1 2x"}
:::

::: cell-text
### [Simplifying Conditional Expressions](/refactoring/techniques/simplifying-conditional-expressions)

::: annotation
Conditionals tend to get more and more complicated in their logic over
time, and there are yet more techniques to combat this as well.
:::

::: catalog-list
-   [Consolidate Conditional
    Expression](/consolidate-conditional-expression)
-   [Consolidate Duplicate Conditional
    Fragments](/consolidate-duplicate-conditional-fragments)
-   [Decompose Conditional](/decompose-conditional)

```{=html}
<!-- -->
```
-   [Replace Conditional with
    Polymorphism](/replace-conditional-with-polymorphism)
-   [Remove Control Flag](/remove-control-flag)
-   [Replace Nested Conditional with Guard
    Clauses](/replace-nested-conditional-with-guard-clauses)

```{=html}
<!-- -->
```
-   [Introduce Null Object](/introduce-null-object)
-   [Introduce Assertion](/introduce-assertion)
:::
:::
:::
:::

::: {.section-bordered .link-list style="border-top: none;"}
::: cell-flex
::: cell-image
![](/images/refactoring/content/catalog/simplifying-method-calls.png?id=0af0ac74a5d0d7f8ac33a58b4a479ee6){width="160"
height="280"
srcset="/images/refactoring/content/catalog/simplifying-method-calls-2x.png?id=075a4082f9a85d01391184efa3c8f1a1 2x"}
:::

::: cell-text
### [Simplifying Method Calls](/refactoring/techniques/simplifying-method-calls)

::: annotation
These techniques make method calls simpler and easier to understand.
This, in turn, simplifies the interfaces for interaction between
classes.
:::

::: catalog-list
-   [Add Parameter](/add-parameter)
-   [Remove Parameter](/remove-parameter)
-   [Rename Method](/rename-method)
-   [Separate Query from Modifier](/separate-query-from-modifier)
-   [Parameterize Method](/parameterize-method)

```{=html}
<!-- -->
```
-   [Introduce Parameter Object](/introduce-parameter-object)
-   [Preserve Whole Object](/preserve-whole-object)
-   [Remove Setting Method](/remove-setting-method)
-   [Replace Parameter with Explicit
    Methods](/replace-parameter-with-explicit-methods)
-   [Replace Parameter with Method
    Call](/replace-parameter-with-method-call)

```{=html}
<!-- -->
```
-   [Hide Method](/hide-method)
-   [Replace Constructor with Factory
    Method](/replace-constructor-with-factory-method)
-   [Replace Error Code with
    Exception](/replace-error-code-with-exception)
-   [Replace Exception with Test](/replace-exception-with-test)
:::
:::
:::
:::

::: {.section-bordered .link-list style="border-top: none;"}
::: cell-flex
::: cell-image
![](/images/refactoring/content/catalog/dealing-with-generalization.png?id=56357b115153175b2eb40563d936087c){width="160"
height="280"
srcset="/images/refactoring/content/catalog/dealing-with-generalization-2x.png?id=5187a4b8d010877a25761926c2f24a3c 2x"}
:::

::: cell-text
### [Dealing with Generalization](/refactoring/techniques/dealing-with-generalization)

::: annotation
Abstraction has its own group of refactoring techniques, primarily
associated with moving functionality along the class inheritance
hierarchy, creating new classes and interfaces, and replacing
inheritance with delegation and vice versa.
:::

::: catalog-list
-   [Pull Up Field](/pull-up-field)
-   [Pull Up Method](/pull-up-method)
-   [Pull Up Constructor Body](/pull-up-constructor-body)
-   [Push Down Field](/push-down-field)
-   [Push Down Method](/push-down-method)

```{=html}
<!-- -->
```
-   [Extract Subclass](/extract-subclass)
-   [Extract Superclass](/extract-superclass)
-   [Extract Interface](/extract-interface)
-   [Collapse Hierarchy](/collapse-hierarchy)

```{=html}
<!-- -->
```
-   [Form Template Method](/form-template-method)
-   [Replace Inheritance with
    Delegation](/replace-inheritance-with-delegation)
-   [Replace Delegation with
    Inheritance](/replace-delegation-with-inheritance)
:::
:::
:::
:::
:::
:::
:::

::: main-menu-controls
:::

::: {.main-menu-list-wrapper .nano}
::: {.main-menu-list .nano-content}
[![Refactoring.Guru](/images/content-public/logos/logo-new.png?id=97d554614702483f31e38b32e82d8e34){width="200"
height="241" loading="lazy"
srcset="/images/content-public/logos/logo-new-2x.png?id=3bc33294e095bab1d6fe9ae421d07837 2x"}](/){.menu-brand}

::: {.menu-container style="position: relative"}
-   [ Premium Content](/store)
    -   [ Design Patterns eBook](/design-patterns/book)
    -   [ Refactoring Course](/refactoring/course)
-   [ Refactoring](/refactoring)
    -   [What is Refactoring](/refactoring/what-is-refactoring)
        -   [Clean code](/refactoring/what-is-refactoring)
        -   [Technical debt](/refactoring/technical-debt)
        -   [When to refactor](/refactoring/when)
        -   [How to refactor](/refactoring/how-to)
    -   [Catalog](/refactoring/catalog)
    -   [Code Smells](/refactoring/smells)
        -   [Bloaters](/refactoring/smells/bloaters)
            -   [Long Method](/smells/long-method)
            -   [Large Class](/smells/large-class)
            -   [Primitive Obsession](/smells/primitive-obsession)
            -   [Long Parameter List](/smells/long-parameter-list)
            -   [Data Clumps](/smells/data-clumps)
        -   [Object-Orientation Abusers](/refactoring/smells/oo-abusers)
            -   [Switch Statements](/smells/switch-statements)
            -   [Temporary Field](/smells/temporary-field)
            -   [Refused Bequest](/smells/refused-bequest)
            -   [Alternative Classes with Different
                Interfaces](/smells/alternative-classes-with-different-interfaces)
        -   [Change Preventers](/refactoring/smells/change-preventers)
            -   [Divergent Change](/smells/divergent-change)
            -   [Shotgun Surgery](/smells/shotgun-surgery)
            -   [Parallel Inheritance
                Hierarchies](/smells/parallel-inheritance-hierarchies)
        -   [Dispensables](/refactoring/smells/dispensables)
            -   [Comments](/smells/comments)
            -   [Duplicate Code](/smells/duplicate-code)
            -   [Lazy Class](/smells/lazy-class)
            -   [Data Class](/smells/data-class)
            -   [Dead Code](/smells/dead-code)
            -   [Speculative Generality](/smells/speculative-generality)
        -   [Couplers](/refactoring/smells/couplers)
            -   [Feature Envy](/smells/feature-envy)
            -   [Inappropriate Intimacy](/smells/inappropriate-intimacy)
            -   [Message Chains](/smells/message-chains)
            -   [Middle Man](/smells/middle-man)
        -   [Other Smells](/refactoring/smells/other)
            -   [Incomplete Library
                Class](/smells/incomplete-library-class)
    -   [Refactorings](/refactoring/techniques)
        -   [Composing
            Methods](/refactoring/techniques/composing-methods)
            -   [Extract Method](/extract-method)
            -   [Inline Method](/inline-method)
            -   [Extract Variable](/extract-variable)
            -   [Inline Temp](/inline-temp)
            -   [Replace Temp with Query](/replace-temp-with-query)
            -   [Split Temporary Variable](/split-temporary-variable)
            -   [Remove Assignments to
                Parameters](/remove-assignments-to-parameters)
            -   [Replace Method with Method
                Object](/replace-method-with-method-object)
            -   [Substitute Algorithm](/substitute-algorithm)
        -   [Moving Features between
            Objects](/refactoring/techniques/moving-features-between-objects)
            -   [Move Method](/move-method)
            -   [Move Field](/move-field)
            -   [Extract Class](/extract-class)
            -   [Inline Class](/inline-class)
            -   [Hide Delegate](/hide-delegate)
            -   [Remove Middle Man](/remove-middle-man)
            -   [Introduce Foreign Method](/introduce-foreign-method)
            -   [Introduce Local Extension](/introduce-local-extension)
        -   [Organizing Data](/refactoring/techniques/organizing-data)
            -   [Self Encapsulate Field](/self-encapsulate-field)
            -   [Replace Data Value with
                Object](/replace-data-value-with-object)
            -   [Change Value to Reference](/change-value-to-reference)
            -   [Change Reference to Value](/change-reference-to-value)
            -   [Replace Array with Object](/replace-array-with-object)
            -   [Duplicate Observed Data](/duplicate-observed-data)
            -   [Change Unidirectional Association to
                Bidirectional](/change-unidirectional-association-to-bidirectional)
            -   [Change Bidirectional Association to
                Unidirectional](/change-bidirectional-association-to-unidirectional)
            -   [Replace Magic Number with Symbolic
                Constant](/replace-magic-number-with-symbolic-constant)
            -   [Encapsulate Field](/encapsulate-field)
            -   [Encapsulate Collection](/encapsulate-collection)
            -   [Replace Type Code with
                Class](/replace-type-code-with-class)
            -   [Replace Type Code with
                Subclasses](/replace-type-code-with-subclasses)
            -   [Replace Type Code with
                State/Strategy](/replace-type-code-with-state-strategy)
            -   [Replace Subclass with
                Fields](/replace-subclass-with-fields)
        -   [Simplifying Conditional
            Expressions](/refactoring/techniques/simplifying-conditional-expressions)
            -   [Decompose Conditional](/decompose-conditional)
            -   [Consolidate Conditional
                Expression](/consolidate-conditional-expression)
            -   [Consolidate Duplicate Conditional
                Fragments](/consolidate-duplicate-conditional-fragments)
            -   [Remove Control Flag](/remove-control-flag)
            -   [Replace Nested Conditional with Guard
                Clauses](/replace-nested-conditional-with-guard-clauses)
            -   [Replace Conditional with
                Polymorphism](/replace-conditional-with-polymorphism)
            -   [Introduce Null Object](/introduce-null-object)
            -   [Introduce Assertion](/introduce-assertion)
        -   [Simplifying Method
            Calls](/refactoring/techniques/simplifying-method-calls)
            -   [Rename Method](/rename-method)
            -   [Add Parameter](/add-parameter)
            -   [Remove Parameter](/remove-parameter)
            -   [Separate Query from
                Modifier](/separate-query-from-modifier)
            -   [Parameterize Method](/parameterize-method)
            -   [Replace Parameter with Explicit
                Methods](/replace-parameter-with-explicit-methods)
            -   [Preserve Whole Object](/preserve-whole-object)
            -   [Replace Parameter with Method
                Call](/replace-parameter-with-method-call)
            -   [Introduce Parameter
                Object](/introduce-parameter-object)
            -   [Remove Setting Method](/remove-setting-method)
            -   [Hide Method](/hide-method)
            -   [Replace Constructor with Factory
                Method](/replace-constructor-with-factory-method)
            -   [Replace Error Code with
                Exception](/replace-error-code-with-exception)
            -   [Replace Exception with
                Test](/replace-exception-with-test)
        -   [Dealing with
            Generalization](/refactoring/techniques/dealing-with-generalization)
            -   [Pull Up Field](/pull-up-field)
            -   [Pull Up Method](/pull-up-method)
            -   [Pull Up Constructor Body](/pull-up-constructor-body)
            -   [Push Down Method](/push-down-method)
            -   [Push Down Field](/push-down-field)
            -   [Extract Subclass](/extract-subclass)
            -   [Extract Superclass](/extract-superclass)
            -   [Extract Interface](/extract-interface)
            -   [Collapse Hierarchy](/collapse-hierarchy)
            -   [Form Template Method](/form-template-method)
            -   [Replace Inheritance with
                Delegation](/replace-inheritance-with-delegation)
            -   [Replace Delegation with
                Inheritance](/replace-delegation-with-inheritance)
-   [ Design Patterns](/design-patterns)
    -   [What is a Pattern](/design-patterns/what-is-pattern)
        -   [What\'s a design
            pattern?](/design-patterns/what-is-pattern)
        -   [History of patterns](/design-patterns/history)
        -   [Why should I learn
            patterns?](/design-patterns/why-learn-patterns)
        -   [Criticism of patterns](/design-patterns/criticism)
        -   [Classification of
            patterns](/design-patterns/classification)
    -   [Catalog](/design-patterns/catalog)
    -   [Creational Patterns](/design-patterns/creational-patterns)
        -   [Factory Method](/design-patterns/factory-method)
        -   [Abstract Factory](/design-patterns/abstract-factory)
        -   [Builder](/design-patterns/builder)
        -   [Prototype](/design-patterns/prototype)
        -   [Singleton](/design-patterns/singleton)
    -   [Structural Patterns](/design-patterns/structural-patterns)
        -   [Adapter](/design-patterns/adapter)
        -   [Bridge](/design-patterns/bridge)
        -   [Composite](/design-patterns/composite)
        -   [Decorator](/design-patterns/decorator)
        -   [Facade](/design-patterns/facade)
        -   [Flyweight](/design-patterns/flyweight)
        -   [Proxy](/design-patterns/proxy)
    -   [Behavioral Patterns](/design-patterns/behavioral-patterns)
        -   [Chain of
            Responsibility](/design-patterns/chain-of-responsibility)
        -   [Command](/design-patterns/command)
        -   [Iterator](/design-patterns/iterator)
        -   [Mediator](/design-patterns/mediator)
        -   [Memento](/design-patterns/memento)
        -   [Observer](/design-patterns/observer)
        -   [State](/design-patterns/state)
        -   [Strategy](/design-patterns/strategy)
        -   [Template Method](/design-patterns/template-method)
        -   [Visitor](/design-patterns/visitor)
    -   [Code Examples](/design-patterns/examples)
        -   [C#](/design-patterns/csharp)
        -   [C++](/design-patterns/cpp)
        -   [Go](/design-patterns/go)
        -   [Java](/design-patterns/java)
        -   [PHP](/design-patterns/php)
        -   [Python](/design-patterns/python)
        -   [Ruby](/design-patterns/ruby)
        -   [Rust](/design-patterns/rust)
        -   [Swift](/design-patterns/swift)
        -   [TypeScript](/design-patterns/typescript)
:::

::: main-menu-aux-controls
[ Log in](https://refactoring.guru/login "Log in") [ Contact
us](https://feedback.refactoring.guru/ "Contact us"){.userecho-public
rel="nofollow"}
:::
:::
:::

::: navigation-container
[![Refactoring.Guru](/images/content-public/logos/logo-new-mobile.png?id=ea18aa9b032eaa92835ed6d472b03b4a){srcset="/images/content-public/logos/logo-new-mobile-2x.png?id=7ad5648bfd86ae2e8524147a72877c64 2x"}](/){.navigation-brand}

::: {.shop-link .d-none .d-lg-block style="display: none !important;"}
[![](data:image/svg+xml;base64,PHN2ZyBzdHlsZT0id2lkdGg6IDI4cHg7IGhlaWdodDogMjhweDsgZmlsbDogY3VycmVudENvbG9yOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IG1hcmdpbi10b3A6IC0xNHB4OyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Ym94PSIwIDAgNTEyIDUxMiI+PCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjMuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTM1NiA2MGw2MCAyMC02MCAyMC0yMCA2MC0yMC02MEwyNTYgODBsNjAtMjBMMzM2IDBsMjAgNjB6TTQ2NCAyMDhsNDggMTYtNDggMTYtMTYgNDgtMTYtNDgtNDgtMTYgNDgtMTYgMTYtNDggMTYgNDh6bS0yNDMuOC05LjhsMzMgNjYuOSA3My44IDEwLjcgNTkuOCA4LjctNDMuMyA0Mi4yLTUzLjQgNTIuMSAxMi42IDczLjVMMzEzIDUxMmwtNTMuNS0yOC4xLTY2LTM0LjctNjYgMzQuN0w3My45IDUxMmwxMC4yLTU5LjYgMTIuNi03My41TDQzLjMgMzI2LjggMCAyODQuNmw1OS44LTguNyA3My44LTEwLjcgMzMtNjYuOUwxOTMuNSAxNDRsMjYuOCA1NC4yem0yNi4xIDExNC40bC0yNS0zLjYtMTEuMi0yMi42LTE2LjctMzMuOS0xNi43IDMzLjlMMTY1LjYgMzA5bC0yNSAzLjYtMzcuNCA1LjQgMjcuMSAyNi40IDE4LjEgMTcuNkwxNDQgMzg3bC02LjQgMzcuMyAzMy41LTE3LjYgMjIuMy0xMS43IDIyLjMgMTEuNyAzMy41IDE3LjZMMjQyLjkgMzg3bC00LjMtMjQuOSAxOC4xLTE3LjYgMjcuMS0yNi40LTM3LjQtNS40eiI+PC9wYXRoPjwvc3ZnPg==)
Shop Now!](/store){.btn .btn-md .btn-primary .btn-featured}
:::

-    [English]{.caption .d-none .d-lg-inline-block}

    ::: {.dropdown-menu .dropdown-menu-right aria-labelledby="dropdownLanguage"}
    [English](https://refactoring.guru/refactoring/catalog "English"){.dropdown-item
    .locale-link .active locale="en"}
    [Español](https://refactoring.guru/es/refactoring/catalog "Español"){.dropdown-item
    .locale-link locale="es"}
    [Français](https://refactoring.guru/fr/refactoring/catalog "Français"){.dropdown-item
    .locale-link locale="fr"}
    [日本語](https://refactoring.guru/ja/refactoring/catalog "日本語"){.dropdown-item
    .locale-link locale="ja"}
    [한국어](https://refactoring.guru/ko/refactoring/catalog "한국어"){.dropdown-item
    .locale-link locale="ko"}
    [Polski](https://refactoring.guru/pl/refactoring/catalog "Polski"){.dropdown-item
    .locale-link locale="pl"} [Português
    Brasileiro](https://refactoring.guru/pt-br/refactoring/catalog "Português Brasileiro"){.dropdown-item
    .locale-link locale="pt-br"}
    [Русский](https://refactoring.guru/ru/refactoring/catalog "Русский"){.dropdown-item
    .locale-link locale="ru"}
    [Українська](https://refactoring.guru/uk/refactoring/catalog "Українська"){.dropdown-item
    .locale-link locale="uk"}
    [中文](https://refactoringguru.cn/refactoring/catalog "中文"){.dropdown-item
    .locale-link locale="zh"}
    :::
-   [ [Contact us]{.caption .d-none
    .d-xl-inline-block}](https://feedback.refactoring.guru/?show_feedback_form_private=true "Contact us"){.userecho-private
    rel="nofollow"}
-   [ [Log in]{.caption .d-none
    .d-xl-inline-block}](https://refactoring.guru/login "Log in")
-   
:::

::: {.footer-container .center-content-container}
::: {.footer-inner .container-fluid}
::: row
::: {.col-8 .col-md-10}
-   [Home](/)
-   [Refactoring](/refactoring)
-   [Design Patterns](/design-patterns)
-   [Premium Content](/store)
-   [Forum](https://refactoring.userecho.com/){.userecho-public
    rel="nofollow"}
-   [Contact us](https://refactoring.userecho.com/){.userecho-private
    rel="nofollow"}
:::

::: {.col-4 .col-md-2}
-   [](https://www.facebook.com/refactoring.guru)
-   [](/sendy/form){rel="nofollow"}
-   [](https://github.com/RefactoringGuru)
:::
:::
:::
:::

::: footer-second
::: {.footer-container .center-content-container}
::: {.footer-inner .container-fluid}
::: row
::: {.col-12 .col-sm-6}
2014-2023 [Refactoring.Guru](/). [All rights
reserved.]{style="white-space: nowrap"}\
Illustrations by [[Dmitry
Zhart]{style="white-space: nowrap"}](http://zhart.us/){rel="nofollow"}
:::

::: {.footer-links-right .col-12 .col-sm-6 .mt-4 .mt-sm-0}
-   [Terms & Conditions](/terms)
-   [Privacy Policy](/privacy-policy)
-   [Content Usage Policy](/content-usage-policy)
-   [About us](/site-about)
:::
:::
:::
:::
:::
:::
