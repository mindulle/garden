---
description: "Problem: Do you have a method that returns a value but
  also changes something inside an object? Solution: Split the method
  into two separate methods. As you would expect, one of them should
  return the value and the other one modifies the object."
lang: en
theme-color: "#95f3fc"
title: Separate Query from Modifier
viewport: width=device-width, initial-scale=1, shrink-to-fit=no
---

::: body-holder
::: {.announcement-block .announcement-block-autumn .prom data-id="DIDP-announcement" creative-id="en" position="top"}
[![](/images/content-public/ann/autumn/read.svg?id=0d119719d4d53f2e62fc6535cb544b74){loading="lazy"
style="width: 32px; height:32px;vertical-align: middle;"}
![](/images/content-public/ann/autumn/tea-cup.svg?id=f95aba0fef52083e2dd0a8a64068e37f){loading="lazy"
style="width: 32px; height:32px;vertical-align: middle;"} [Autumn
SALE]{.announcement-link-text}
![](/images/content-public/ann/autumn/mulled-wine.svg?id=ad4bec48a83ede3e72766d40a6a837ed){loading="lazy"
style="width: 32px; height:32px;vertical-align: middle;"}
![](/images/content-public/ann/autumn/maple-leaf.svg?id=63cdc79ea962a2657a57f44a22d092b9){loading="lazy"
style="width: 32px; height:32px;vertical-align: middle;"}](/store)
:::

::: cart-placeholder
::: {.cart-block-container style="display:none"}
::: {.cart-block .btn-group}
[[]{.cart-text} ](#checkout){.btn .cart .open-checkout} [
[]{.btn-text-span .d-none .d-sm-inline-block .d-lg-none
.d-hg-inline-block}](#checkout){.btn .btn-secondary .checkout
.open-checkout}
:::
:::
:::

::: {.main-content .top-content .center-content role="main" page_class=""}
::: {.main-content-container .center-content-container}
::: {.refactoring .page .text}
::: breadcrumb
[](/){.home} / [Refactoring](/refactoring){.type} /
[Techniques](/refactoring/techniques){.type} / [Simplifying Method
Calls](/refactoring/techniques/simplifying-method-calls){.type}
:::

# Separate Query from Modifier {#separate-query-from-modifier .title}

::: before-after-container
::: before
### Problem

Do you have a method that returns a value but also changes something
inside an object?
:::

::: after
### Solution

Split the method into two separate methods. As you would expect, one of
them should return the value and the other one modifies the object.
:::
:::

::: examples
::: {.before-after .before-after-container}
::: before
::: ba
Before
:::

::: ba-container
![Separate Query from Modifier -
Before](/images/refactoring/diagrams/Separate%20Query%20from%20Modifier%20-%20Before.png?id=b28976c01f67d02e8b4574b1c825d10d){width="415"}
:::
:::

::: after
::: ba
After
:::

::: ba-container
![Separate Query from Modifier -
After](/images/refactoring/diagrams/Separate%20Query%20from%20Modifier%20-%20After.png?id=c2b8e0722c1c8500302326ab60db80e5){width="227"}
:::
:::
:::
:::

### Why Refactor

This factoring technique implements *Command and Query Responsibility
Segregation*. This principle tells us to separate code responsible for
getting data from code that changes something inside an object.

Code for getting data is named a *query*. Code for changing things in
the *visible state* of an object is named a *modifier*. When a *query*
and *modifier* are combined, you don't have a way to get data without
making changes to its condition. In other words, you ask a question and
can change the answer even as it's being received. This problem becomes
even more severe when the person calling the query may not know about
the method's "side effects", which often leads to runtime errors.

But remember that side effects are dangerous only in the case of
*modifiers* that change the **visible** state of an object. These could
be, for example, fields accessible from an object's public interface,
entry in a database, in files, etc. If a *modifier* only caches a
complex operation and saves it within the private field of a class, it
can hardly cause any side effects.

### Benefits

-   If you have a *query* that doesn't change the state of your program,
    you can call it as many times as you like without having to worry
    about unintended changes in the result caused by the mere fact of
    you calling the method.

### Drawbacks

-   In some cases it's convenient to get data after performing a
    command. For example, when deleting something from a database you
    want to know how many rows were deleted.

### How to Refactor

1.  Create a new *query method* to return what the original method did.

2.  Change the original method so that it returns only the result of
    calling the new *query method*.

3.  Replace all references to the original method with a call to the
    *query method*. Immediately before this line, place a call to the
    *modifier method*. This will save you from side effects in case if
    the original method was used in a condition of a conditional
    operator or loop.

4.  Get rid of the value-returning code in the original method, which
    now has become a proper *modifier method*.

::: {.prom .banner-content .banner .banner-striped .banner-with-image data-id="Ref: Part of the ebook" creative-id="animated-en" position="content_bottom"}
::: banner-image
Your browser does not support HTML video.
:::

::: banner-text
### Tired of reading? {#tired-of-reading .title}

No wonder, it takes [7 hours]{.blue} to read all of the text we have
here.

Try our interactive course on refactoring. It offers a less tedious
approach to learning new stuff.

[ Let\'s see...](/refactoring/course){.btn .btn-secondary}
:::
:::

::: row
::: {.col-xs-12 .col-sm-6 .col-lg-12}
### Helps other refactorings

::: dl
::: dt
[Replace Temp with Query](/replace-temp-with-query)
:::
:::
:::
:::

::: next
#### Read next

[Parameterize Method []{.fa .fa-arrow-right}](/parameterize-method){.btn
.btn-primary rel="next"}
:::

::: prev
#### Return

[[]{.fa .fa-arrow-left} Remove Parameter](/remove-parameter){.btn
.btn-default rel="prev"}
:::
:::

::: {.prom .banner-sidebar .banner-removable .banner-removable-refactoring data-id="Ref: Sidebar" creative-id="standard-sidebar-en" position="sidebar"}
::: ban
::: {.image .product-image}
[Sale!]{.banner-discount}
[![](/images/refactoring/course/course-cover-en.jpg?id=ac6ad836a27c4a8d579244f15c48a8b4){width="300"
height="300" loading="lazy"}](/refactoring/course)
:::

::: {.banner-text .banner-text-en}
This refactoring is part of the much bigger **Refactoring Course**.

[ Learn more...](/refactoring/course){.btn .btn-secondary .btn-block}
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
    [English](https://refactoring.guru/separate-query-from-modifier "English"){.dropdown-item
    .locale-link .active locale="en"}
    [Español](https://refactoring.guru/es/separate-query-from-modifier "Español"){.dropdown-item
    .locale-link locale="es"}
    [Français](https://refactoring.guru/fr/separate-query-from-modifier "Français"){.dropdown-item
    .locale-link locale="fr"}
    [日本語](https://refactoring.guru/ja/separate-query-from-modifier "日本語"){.dropdown-item
    .locale-link locale="ja"}
    [한국어](https://refactoring.guru/ko/separate-query-from-modifier "한국어"){.dropdown-item
    .locale-link locale="ko"}
    [Polski](https://refactoring.guru/pl/separate-query-from-modifier "Polski"){.dropdown-item
    .locale-link locale="pl"} [Português
    Brasileiro](https://refactoring.guru/pt-br/separate-query-from-modifier "Português Brasileiro"){.dropdown-item
    .locale-link locale="pt-br"}
    [Русский](https://refactoring.guru/ru/separate-query-from-modifier "Русский"){.dropdown-item
    .locale-link locale="ru"}
    [Українська](https://refactoring.guru/uk/separate-query-from-modifier "Українська"){.dropdown-item
    .locale-link locale="uk"}
    [中文](https://refactoringguru.cn/separate-query-from-modifier "中文"){.dropdown-item
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
