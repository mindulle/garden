---
description: "Problem: Is domain data stored in classes responsible for
  the GUI? Solution: Then it's a good idea to separate the data into
  separate classes, ensuring connection and synchronization between the
  domain class and the GUI."
lang: en
theme-color: "#95f3fc"
title: Duplicate Observed Data
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
[Techniques](/refactoring/techniques){.type} / [Organizing
Data](/refactoring/techniques/organizing-data){.type}
:::

# Duplicate Observed Data {#duplicate-observed-data .title}

::: before-after-container
::: before
### Problem

Is domain data stored in classes responsible for the GUI?
:::

::: after
### Solution

Then it's a good idea to separate the data into separate classes,
ensuring connection and synchronization between the domain class and the
GUI.
:::
:::

::: examples
::: {.before-after .before-after-container}
::: before
::: ba
Before
:::

::: ba-container
![Duplicate Observed Data -
Before](/images/refactoring/diagrams/Duplicate%20Observed%20Data%20-%20Before.png?id=bd26ed6d7d9921504165fd46b7f6124c){width="227"}
:::
:::

::: after
::: ba
After
:::

::: ba-container
![Duplicate Observed Data -
After](/images/refactoring/diagrams/Duplicate%20Observed%20Data%20-%20After.png?id=b86fa0ff2f9ff7c76d4a183607153458){width="227"}
:::
:::
:::
:::

### Why Refactor

You want to have multiple interface views for the same data (for
example, you have both a desktop app and a mobile app). If you fail to
separate the GUI from the domain, you will have a very hard time
avoiding code duplication and a large number of mistakes.

### Benefits

-   You split responsibility between business logic classes and
    presentation classes (cf. the *Single Responsibility Principle*),
    which makes your program more readable and understandable.

-   If you need to add a new interface view, create new presentation
    classes; you don't need to touch the code of the business logic (cf.
    the *Open/Closed Principle*).

-   Now different people can work on the business logic and the user
    interfaces.

### When Not to Use

-   This refactoring technique, which in its classic form is performed
    using the [Observer](/design-patterns/observer) template, isn't
    applicable for web apps, where all classes are recreated between
    queries to the web server.

-   All the same, the general principle of extracting business logic
    into separate classes can be justified for web apps as well. But
    this will be implemented using different refactoring techniques
    depending on how your system is designed.

### How to Refactor

1.  Hide direct access to domain data in the *GUI class*. For this, it's
    best to use [Self Encapsulate Field](/self-encapsulate-field). So
    you create the getters and setters for this data.

2.  In handlers for *GUI class* events, use setters to set new field
    values. This will let you pass these values to the associated
    *domain object*.

3.  Create a domain class and copy necessary fields from the *GUI class*
    to it. Create getters and seters for all these fields.

4.  Create an Observer pattern for these two classes:

    -   In the *domain class*, create an array for storing observer
        objects (*GUI objects*), as well as methods for registering,
        deleting and notifying them.

    -   In the *GUI class*, create a field for storing references to the
        *domain class* as well as the `update()` method, which will be
        reacting to changes in the object and update the values of
        fields in the *GUI class*. Note that value updates should be
        established directly in the method, in order to avoid recursion.

    -   In the *GUI class* constructor, create an instance of *domain
        class* and save it in the field you have created. Register the
        *GUI object* as an observer in the *domain object*.

    -   In the setters for *domain class* fields, call the method for
        notifying the observer (in other words, method for updating in
        the *GUI class*), in order to pass the new values to the GUI.

    -   Change the setters of the *GUI class* fields so that they set
        new values in the domain object directly. Watch out to make sure
        that values aren't set through a *domain class*
        setter---otherwise infinite recursion will result.

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
::: {.col-xs-12 .col-sm-6 .col-lg-6}
### Implements design pattern

::: dl
::: dt
[Observer](/design-patterns/observer)
:::
:::
:::

::: {.col-xs-12 .col-sm-6 .col-lg-6}
### Eliminates smell

::: dl
::: dt
[Large Class](/smells/large-class)
:::
:::
:::
:::

::: next
#### Read next

[Change Unidirectional Association to Bidirectional []{.fa
.fa-arrow-right}](/change-unidirectional-association-to-bidirectional){.btn
.btn-primary rel="next"}
:::

::: prev
#### Return

[[]{.fa .fa-arrow-left} Replace Array with
Object](/replace-array-with-object){.btn .btn-default rel="prev"}
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
    [English](https://refactoring.guru/duplicate-observed-data "English"){.dropdown-item
    .locale-link .active locale="en"}
    [Español](https://refactoring.guru/es/duplicate-observed-data "Español"){.dropdown-item
    .locale-link locale="es"}
    [Français](https://refactoring.guru/fr/duplicate-observed-data "Français"){.dropdown-item
    .locale-link locale="fr"}
    [日本語](https://refactoring.guru/ja/duplicate-observed-data "日本語"){.dropdown-item
    .locale-link locale="ja"}
    [한국어](https://refactoring.guru/ko/duplicate-observed-data "한국어"){.dropdown-item
    .locale-link locale="ko"}
    [Polski](https://refactoring.guru/pl/duplicate-observed-data "Polski"){.dropdown-item
    .locale-link locale="pl"} [Português
    Brasileiro](https://refactoring.guru/pt-br/duplicate-observed-data "Português Brasileiro"){.dropdown-item
    .locale-link locale="pt-br"}
    [Русский](https://refactoring.guru/ru/duplicate-observed-data "Русский"){.dropdown-item
    .locale-link locale="ru"}
    [Українська](https://refactoring.guru/uk/duplicate-observed-data "Українська"){.dropdown-item
    .locale-link locale="uk"}
    [中文](https://refactoringguru.cn/duplicate-observed-data "中文"){.dropdown-item
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
