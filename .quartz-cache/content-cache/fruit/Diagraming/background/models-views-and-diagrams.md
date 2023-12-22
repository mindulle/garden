




[[]{.cart-text} ](#checkout){.btn .cart .open-checkout} [
[]{.btn-text-span .d-none .d-sm-inline-block .d-lg-none
.d-hg-inline-block}](#checkout){.btn .btn-secondary .checkout
.open-checkout}








[](/){.home} / [UML](/uml){.type} / [Basic Principles and
Background](/uml/basic-principles){.type}


# Models, Views, and Diagrams {#models-views-and-diagrams .title}




## What is a Model?

Models are often built in the context of business and IT systems in
order to better understand existing or future systems. However, a model
never fully corresponds to reality. Modeling always means *emphasizing*
and *omitting*: emphasizing essential details and omitting irrelevant
ones. But what is essential and what is irrelevant? There is no
universal answer to this question. Rather, the answer depends on *what*
the goals of the model are and *who* is viewing or reading it.

> Think about what is emphasized or omitted in the following models:
>
> -   A wind tunnel model of a car
> -   A model of a building scaled at 1:50
> -   A route plan of the subway
> -   A map
> -   An organization chart

The more information a model is supposed to give, the more complex and
difficult it becomes. A map of Europe, for example, that simultaneously
contains political, geological, demographic, and transportation-related
information is hardly legible. The solution to this problem is to convey
the different types of information on individual maps. *Different views*
are formed of the objects under consideration. These views are
interconnected in many ways. Generally, if one view is changed, all
other views have to be adjusted as well. If, for instance, in the
Netherlands new land is reclaimed from the North Sea, all
views---meaning all maps---have to be updated.

<figure class="image">
<img src="/files/sm/images/uml/img_3.jpg" />
<figcaption>Figure 2.3 Different views of an object</figcaption>
</figure>

The same is true for the model of a building. If a new wing is added to
an existing building various views are affected, including the floor
plan, the different exterior views, and the 3D-model made from wood.
Figure 2.3 illustrates this in a schematic manner. In *[The Models of
our Case
Study](/uml/basic-principles-and-background/the-models-of-our-case-study)*,
we specifically address the relationships between the models we use in
this book. The different views within each model are described in more
detail in *[Modeling Business Systems](/uml/modeling-business-systems)*,
*[Modeling IT Systems](/uml/modeling-it-systems)* and *[Modeling for
System Integration](/uml/modeling-for-system-integration)*.

## Why do we Need Models?

As a general rule, a model of a system has to perform the following
tasks:

-   **Communication** between all involved parties: In order to build
    the right system, it is essential that all involved parties think
    along the same lines. It is particularly important that everyone
    understands the terminology used, that customers agree upon the same
    requirements, that developers understand these requirements, and
    that the decisions made can still be understood months later.
-   **Visualization** of all facts for customers, experts, and users:
    All accumulated facts relevant to the system need to be presented in
    such a way that everyone concerned can understand them. However,
    according to our real-life experience, we often hit a wall of
    resistance when we want to communicate with diagrams instead of
    text. It is necessary to overcome this resistance. Behind it is
    often a fear of the unknown; and the diagrams might look a bit
    complicated at first. Therefore, this book contains directions on
    how to read each diagram.
-   **Verification** of facts in terms of completeness, consistency, and
    correctness: A (more or less) formal model makes it possible to
    verify the facts obtained for completeness, consistency, and
    correctness. In particular, the clear depiction of
    interrelationships makes it possible to ask specific questions, and
    to answer them. We will list these questions with each diagram.

> Answer the following questions for yourself:
>
> -   When was the last time you felt that you were at cross-purposes
>     when you discussed a system?
> -   When was the last time you felt that you were discussing the same
>     issue over and over again?
> -   When was the last time you wished that the consensus you reached
>     during a discussion had been recorded?

## Purpose and Target Group of a Model

In real life we often observe that the results of cumbersome, tedious,
and expensive modeling simply disappear in a stack of paper on someone's
desk. We might ask why this is so. Two factors greatly influence the
result of modeling: **for whom** do we create the model and **for what
purpose** is it supposed to be used. If we don't discuss and define
these aspects sufficiently, we run the risk of creating models that
don't contain what is important to the user. In other words, if details
are not emphasized and omitted appropriately, the model is rendered
worthless.

To define the purpose and target group the following questions should be
answered:

-   **How much business expertise can we expect?** Can we assume basic
    knowledge of the subject, or do we have to explain the fundamentals
    of the model's events and processes?
-   **What amount of detail does the target group need?** What level of
    complexity does the model permit? If processes and systems are
    subject to constant changes, a highly detailed model might be
    unrealistic. This is because, most of the time, it is not possible
    to maintain those models in a satisfactory manner. A less detailed
    model requires less effort to develop and update, but it is also
    less precise.
-   **How much time does the target group have** to read and interpret
    the model? Prevent your model from disappearing in a stack of paper
    on someone's desk by choosing the appropriate level of detail and
    complexity; otherwise, nobody might have enough time to read it.
-   **What language can be used in the model?** Does the target group
    understand technical business terms? Do they understand IT
    terminology? Let's clarify with an easy example: If a bottle filled
    with water is labeled 'water\', virtually anyone who can read will
    understand the bottle's content. However, if the bottle is labeled
    \'H~2~O\'---even though this is correct---we reach a much smaller
    group of people, for example, the workers of a chemistry lab. Yet,
    the additional benefit is that it shows the composition of the
    content: hydrogen and oxygen. In either case, you will have to
    decide what \'label' is most appropriate for your target group.
-   **What level of abstraction should you choose?** The less abstract a
    model, the more comprehensible, and clear it is for the user. This
    is because a less abstract model is closer to the user's actual use
    and language. On the other hand, models with a high level of
    abstraction are more reusable and they are more easily converted
    into IT systems. We can also prove more accurately that they are
    correct. IT specialists probably manage highly abstract models best.
    Users, on the other hand, might pull their hair out if asked to deal
    with a model like that.

### Practical Tips

**Compromises** have to be made between the level of abstraction,
clarity, and the amount of detail used for a model. It is possible to
develop several model components, differing in degree of formality and
detail, in order to satisfy different target groups. In this way
communication between model builders, customers, users, and developers
can be facilitated much more easily. It is important not to 'overdo' it,
but to adjust the model to its target groups and their uses.

**Analysis** or [**design patterns**](/design_patterns) are example
models that describe common design and modeling methods.

## Process of Analysis

Figure 2.4 shows the process of analysis, which consists of *obtaining*,
*representing*, and *verifying facts*:

<figure class="image">
<img src="/files/sm/images/uml/img_4.jpg" />
<figcaption>Figure 2.4 Process of Analysis</figcaption>
</figure>

This is the job of the analyst. The process of analysis produces a
specification that comes from the model and other representations. The
analyst works with knowledge carriers, such as customers, users, and
domain experts:

-   Facts are **obtained** by collaboration between analysts and domain
    experts in which knowledge carriers contribute domain knowledge and
    analysts contribute methodological knowledge.
-   Facts are **represented** in diagrams and documents, which are
    usually prepared by the analyst.
-   Facts are **verified** only by knowledge carriers, since they alone
    can decide if the presented facts are correct. Verification is
    absolutely essential. Without it we might have pretty diagrams, but
    the probability is high that the facts represented are faulty. In
    simple terms: development of a model without verification is
    absolutely worthless!

### Practical Tips

It is impossible to develop and verify a usable model without mastering
the technical foundations of a topic. Where do we find these knowledge
carriers who know something about the systems that we want to model? We
have had good experiences with the following groups of people:

-   People who are involved in performing, operating, and controlling
    business processes
-   Users of similar or related IT systems
-   Customers, who are often critical and creative knowledge carriers
-   Business Partners
-   Domain Experts
-   Management
-   External Observers

Several helpful techniques have proven to be useful for the analysis and
understanding of business processes:

-   Observing employees at work
-   Participating in the investigated business processes
-   Taking the role of an outsider (e.g. of a customer)
-   Carrying out surveys
-   Conducting interviews
-   Brainstorming with everyone involved
-   Discussing with domain experts
-   Reviewing existing forms, documentation, specifications, handbooks,
    and work tools
-   Describing the organizational structure and workflow management
    (organization charts, etc.)

## Diagrams as Views

Each particular UML diagram corresponds to one **view** of a model of a
system. Depending on the type of diagram used, different aspects are
either emphasized or omitted. All the different views combined result in
a good model of a system. Most of the UML diagrams are *graphs* (as
shown in Figure 2.5), implying that they consist of elements that are
connected through lines:

<figure class="image">
<img src="/files/sm/images/uml/img_5.jpg" />
<figcaption>Figure 2.5 Diagram as graphs</figcaption>
</figure>

To read diagrams, you have to know what types of elements and lines are
allowed and what they mean. We'll explain this for the diagrams we use
in the following chapters.

Even *computer-aided software engineering* (CASE) tools treat UML
diagrams as views. They use a **database** in which the information
about the model is stored. Each diagram shows---as a view---a part of
that information. In this way, the CASE tool helps to preserve the
consistency of each view. If, for example, the name of a class is
changed in a class diagram, the statechart diagram of that class is
automatically updated:

<figure class="image">
<img src="/files/sm/images/uml/img_6.jpg" />
<figcaption>Figure 2.6 CASE tool as database</figcaption>
</figure>

The model database is what fundamentally differentiates a CASE tool from
a graphical program (Figure 2.6). Any UML diagram can be generated
easily with paper and pencil or a graphical program. In this case,
however, the various diagrams are nothing more than drawings. Only the
use of a CASE tool with a database, according to UML specifications,
permits consistent collection, management, and modification of model
information.

UML provides its own database model: the UML meta-model, a component of
the UML specifications ("*OMG: Unified Modeling Language:
Infrastructure, Version 2.0, Final Adopted Specification, September
2003*, and *OMG: Unified Modeling Language: Superstructure, Version 2.0,
Revised Final Adopted Specification, October 2004*":
<http://www.omg.org>). All elements found in UML diagrams, as well as
the descriptions of these elements, are contained in the UML meta-model.
It states, for example, that a class can have attributes and methods.
This "data model" of UML as a language, is the foundation of the model
databases of all UML CASE tools. Unfortunately, many CASE tools are
hungry for resources, expensive, poorly developed, cumbersome, and
require extensive training. Despite this, except for very small
projects, their use is worthwhile.







#### Read next

[Information Systems and IT Systems []{.fa
.fa-arrow-right}](/uml/basic-principles-and-background/information-systems-and-it-systems){.btn
.btn-primary rel="next"}



#### Return

[[]{.fa .fa-arrow-left} Introduction to the Case
Study](/uml/basic-principles-and-background/introduction-to-the-case-study){.btn
.btn-default rel="prev"}








[![](/images/csd/computer-science-distilled.png?id=a7b07d54e199c5add8b9d48a08321803)](/computer-science-distilled)





[ Computer Science Distilled](/computer-science-distilled){.btn
.btn-landing-ref .btn-hg .btn-block .btn-secondary
style="font-size: 16px; position: relative"}


Do you remember anything at all from your computer science class?
Quicksort, Graph traversal, Big\'O and other stuff? Revise your memories
with our new [book on Computer Science](/computer-science-distilled).

Psst! Did I mention that we\'re offering **sexy discounts** right now?










[![SourceMaking](/images/content-public/logos/logo.png?id=55f0872eb5fd4505a39679db5f702b58){width="250"
height="312"
srcset="/images/content-public/logos/logo-2x.png?id=fee3b4b0a14ba60dc0fe368695d78be9 2x"}](/){.menu-brand}


-   [ Premium Stuff](/store)
    -   [ Dive Into Design Patterns](/design-patterns-ebook)
    -   [ Dive Into Refactoring](/refactoring-course)
    -   [ Computer Science Distilled](/computer-science-distilled)
-   [ Design Patterns](/design_patterns)
    -   [Creational patterns](/design_patterns/creational_patterns)
        -   [Abstract Factory Design
            Pattern](/design_patterns/abstract_factory)
        -   [Builder Design Pattern](/design_patterns/builder)
        -   [Factory Method Design
            Pattern](/design_patterns/factory_method)
        -   [Object Pool Design Pattern](/design_patterns/object_pool)
        -   [Prototype Design Pattern](/design_patterns/prototype)
        -   [Singleton Design Pattern](/design_patterns/singleton)
    -   [Structural patterns](/design_patterns/structural_patterns)
        -   [Adapter Design Pattern](/design_patterns/adapter)
        -   [Bridge Design Pattern](/design_patterns/bridge)
        -   [Composite Design Pattern](/design_patterns/composite)
        -   [Decorator Design Pattern](/design_patterns/decorator)
        -   [Facade Design Pattern](/design_patterns/facade)
        -   [Flyweight Design Pattern](/design_patterns/flyweight)
        -   [Private Class Data](/design_patterns/private_class_data)
        -   [Proxy Design Pattern](/design_patterns/proxy)
    -   [Behavioral patterns](/design_patterns/behavioral_patterns)
        -   [Chain of
            Responsibility](/design_patterns/chain_of_responsibility)
        -   [Command Design Pattern](/design_patterns/command)
        -   [Interpreter Design Pattern](/design_patterns/interpreter)
        -   [Iterator Design Pattern](/design_patterns/iterator)
        -   [Mediator Design Pattern](/design_patterns/mediator)
        -   [Memento Design Pattern](/design_patterns/memento)
        -   [Null Object Design Pattern](/design_patterns/null_object)
        -   [Observer Design Pattern](/design_patterns/observer)
        -   [State Design Pattern](/design_patterns/state)
        -   [Strategy Design Pattern](/design_patterns/strategy)
        -   [Template Method Design
            Pattern](/design_patterns/template_method)
        -   [Visitor Design Pattern](/design_patterns/visitor)
-   [ AntiPatterns](/antipatterns)
    -   [Software Development
        AntiPatterns](/antipatterns/software-development-antipatterns)
        -   [The Blob](/antipatterns/the-blob)
        -   [Continuous
            Obsolescence](/antipatterns/continuous-obsolescence)
        -   [Lava Flow](/antipatterns/lava-flow)
        -   [Ambiguous Viewpoint](/antipatterns/ambiguous-viewpoint)
        -   [Functional
            Decomposition](/antipatterns/functional-decomposition)
        -   [Poltergeists](/antipatterns/poltergeists)
        -   [Boat Anchor](/antipatterns/boat-anchor)
        -   [Golden Hammer](/antipatterns/golden-hammer)
        -   [Dead End](/antipatterns/dead-end)
        -   [Spaghetti Code](/antipatterns/spaghetti-code)
        -   [Input Kludge](/antipatterns/input-kludge)
        -   [Walking through a
            Minefield](/antipatterns/walking-through-minefield)
        -   [Cut-And-Paste
            Programming](/antipatterns/cut-and-paste-programming)
        -   [Mushroom Management](/antipatterns/mushroom-management)
    -   [Software Architecture
        AntiPatterns](/antipatterns/software-architecture-antipatterns)
        -   [Autogenerated
            Stovepipe](/antipatterns/autogenerated-stovepipe)
        -   [Stovepipe Enterprise](/antipatterns/stovepipe-enterprise)
        -   [Jumble](/antipatterns/jumble)
        -   [Stovepipe System](/antipatterns/stovepipe-system)
        -   [Cover Your Assets](/antipatterns/cover-your-assets)
        -   [Vendor Lock-In](/antipatterns/vendor-lock-in)
        -   [Wolf Ticket](/antipatterns/wolf-ticket)
        -   [Architecture By
            Implication](/antipatterns/architecture-by-implication)
        -   [Warm Bodies](/antipatterns/warm-bodies)
        -   [Design By Committee](/antipatterns/design-by-committee)
        -   [Swiss Army Knife](/antipatterns/swiss-army-knife)
        -   [Reinvent The Wheel](/antipatterns/reinvent-the-wheel)
        -   [The Grand Old Duke of
            York](/antipatterns/the-grand-old-duke-of-york)
    -   [Project Management
        AntiPatterns](/antipatterns/software-project-management-antipatterns)
        -   [Blowhard Jamboree](/antipatterns/blowhard-jamboree)
        -   [Analysis Paralysis](/antipatterns/analysis-paralysis)
        -   [Viewgraph Engineering](/antipatterns/viewgraph-engineering)
        -   [Death By Planning](/antipatterns/death-by-planning)
        -   [Fear of Success](/antipatterns/fear-of-success)
        -   [Corncob](/antipatterns/corncob)
        -   [Intellectual Violence](/antipatterns/intellectual-violence)
        -   [Irrational Management](/antipatterns/irrational-management)
        -   [Smoke and Mirrors](/antipatterns/smoke-and-mirrors)
        -   [Project Mismanagement](/antipatterns/project-mismanagement)
        -   [Throw It over the
            Wall](/antipatterns/throw-it-over-the-wall)
        -   [Fire Drill](/antipatterns/fire-drill)
        -   [The Feud](/antipatterns/the-feud)
        -   [E-mail Is Dangerous](/antipatterns/e-mail-is-dangerous)
-   [ Refactoring](/refactoring)
    -   [Code Smells](/refactoring/smells)
        -   [Bloaters](/refactoring/smells/bloaters)
            -   [Long Method](/refactoring/smells/long-method)
            -   [Large Class](/refactoring/smells/large-class)
            -   [Primitive
                Obsession](/refactoring/smells/primitive-obsession)
            -   [Long Parameter
                List](/refactoring/smells/long-parameter-list)
            -   [Data Clumps](/refactoring/smells/data-clumps)
        -   [Object-Orientation Abusers](/refactoring/smells/oo-abusers)
            -   [Switch
                Statements](/refactoring/smells/switch-statements)
            -   [Temporary Field](/refactoring/smells/temporary-field)
            -   [Refused Bequest](/refactoring/smells/refused-bequest)
            -   [Alternative Classes with Different
                Interfaces](/refactoring/smells/alternative-classes-with-different-interfaces)
        -   [Change Preventers](/refactoring/smells/change-preventers)
            -   [Divergent Change](/refactoring/smells/divergent-change)
            -   [Shotgun Surgery](/refactoring/smells/shotgun-surgery)
            -   [Parallel Inheritance
                Hierarchies](/refactoring/smells/parallel-inheritance-hierarchies)
        -   [Dispensables](/refactoring/smells/dispensables)
            -   [Comments](/refactoring/smells/comments)
            -   [Duplicate Code](/refactoring/smells/duplicate-code)
            -   [Lazy Class](/refactoring/smells/lazy-class)
            -   [Data Class](/refactoring/smells/data-class)
            -   [Dead Code](/refactoring/smells/dead-code)
            -   [Speculative
                Generality](/refactoring/smells/speculative-generality)
        -   [Couplers](/refactoring/smells/couplers)
            -   [Feature Envy](/refactoring/smells/feature-envy)
            -   [Inappropriate
                Intimacy](/refactoring/smells/inappropriate-intimacy)
            -   [Message Chains](/refactoring/smells/message-chains)
            -   [Middle Man](/refactoring/smells/middle-man)
        -   [Other Smells](/refactoring/smells/other)
            -   [Incomplete Library
                Class](/refactoring/smells/incomplete-library-class)
    -   [Refactoring techniques](/refactoring/refactorings)
        -   [Composing Methods](/refactoring/composing-methods)
            -   [Extract Method](/refactoring/extract-method)
            -   [Inline Method](/refactoring/inline-method)
            -   [Extract Variable](/refactoring/extract-variable)
            -   [Inline Temp](/refactoring/inline-temp)
            -   [Replace Temp with
                Query](/refactoring/replace-temp-with-query)
            -   [Split Temporary
                Variable](/refactoring/split-temporary-variable)
            -   [Remove Assignments to
                Parameters](/refactoring/remove-assignments-to-parameters)
            -   [Replace Method with Method
                Object](/refactoring/replace-method-with-method-object)
            -   [Substitute
                Algorithm](/refactoring/substitute-algorithm)
        -   [Moving Features between
            Objects](/refactoring/moving-features-between-objects)
            -   [Move Method](/refactoring/move-method)
            -   [Move Field](/refactoring/move-field)
            -   [Extract Class](/refactoring/extract-class)
            -   [Inline Class](/refactoring/inline-class)
            -   [Hide Delegate](/refactoring/hide-delegate)
            -   [Remove Middle Man](/refactoring/remove-middle-man)
            -   [Introduce Foreign
                Method](/refactoring/introduce-foreign-method)
            -   [Introduce Local
                Extension](/refactoring/introduce-local-extension)
        -   [Organizing Data](/refactoring/organizing-data)
            -   [Self Encapsulate
                Field](/refactoring/self-encapsulate-field)
            -   [Replace Data Value with
                Object](/refactoring/replace-data-value-with-object)
            -   [Change Value to
                Reference](/refactoring/change-value-to-reference)
            -   [Change Reference to
                Value](/refactoring/change-reference-to-value)
            -   [Replace Array with
                Object](/refactoring/replace-array-with-object)
            -   [Duplicate Observed
                Data](/refactoring/duplicate-observed-data)
            -   [Change Unidirectional Association to
                Bidirectional](/refactoring/change-unidirectional-association-to-bidirectional)
            -   [Change Bidirectional Association to
                Unidirectional](/refactoring/change-bidirectional-association-to-unidirectional)
            -   [Replace Magic Number with Symbolic
                Constant](/refactoring/replace-magic-number-with-symbolic-constant)
            -   [Encapsulate Field](/refactoring/encapsulate-field)
            -   [Encapsulate
                Collection](/refactoring/encapsulate-collection)
            -   [Replace Type Code with
                Class](/refactoring/replace-type-code-with-class)
            -   [Replace Type Code with
                Subclasses](/refactoring/replace-type-code-with-subclasses)
            -   [Replace Type Code with
                State/Strategy](/refactoring/replace-type-code-with-state-strategy)
            -   [Replace Subclass with
                Fields](/refactoring/replace-subclass-with-fields)
        -   [Simplifying Conditional
            Expressions](/refactoring/simplifying-conditional-expressions)
            -   [Decompose
                Conditional](/refactoring/decompose-conditional)
            -   [Consolidate Conditional
                Expression](/refactoring/consolidate-conditional-expression)
            -   [Consolidate Duplicate Conditional
                Fragments](/refactoring/consolidate-duplicate-conditional-fragments)
            -   [Remove Control Flag](/refactoring/remove-control-flag)
            -   [Replace Nested Conditional with Guard
                Clauses](/refactoring/replace-nested-conditional-with-guard-clauses)
            -   [Replace Conditional with
                Polymorphism](/refactoring/replace-conditional-with-polymorphism)
            -   [Introduce Null
                Object](/refactoring/introduce-null-object)
            -   [Introduce Assertion](/refactoring/introduce-assertion)
        -   [Simplifying Method
            Calls](/refactoring/simplifying-method-calls)
            -   [Rename Method](/refactoring/rename-method)
            -   [Add Parameter](/refactoring/add-parameter)
            -   [Remove Parameter](/refactoring/remove-parameter)
            -   [Separate Query from
                Modifier](/refactoring/separate-query-from-modifier)
            -   [Parameterize Method](/refactoring/parameterize-method)
            -   [Replace Parameter with Explicit
                Methods](/refactoring/replace-parameter-with-explicit-methods)
            -   [Preserve Whole
                Object](/refactoring/preserve-whole-object)
            -   [Replace Parameter with Method
                Call](/refactoring/replace-parameter-with-method-call)
            -   [Introduce Parameter
                Object](/refactoring/introduce-parameter-object)
            -   [Remove Setting
                Method](/refactoring/remove-setting-method)
            -   [Hide Method](/refactoring/hide-method)
            -   [Replace Constructor with Factory
                Method](/refactoring/replace-constructor-with-factory-method)
            -   [Replace Error Code with
                Exception](/refactoring/replace-error-code-with-exception)
            -   [Replace Exception with
                Test](/refactoring/replace-exception-with-test)
        -   [Dealing with
            Generalisation](/refactoring/dealing-with-generalisation)
            -   [Pull Up Field](/refactoring/pull-up-field)
            -   [Pull Up Method](/refactoring/pull-up-method)
            -   [Pull Up Constructor
                Body](/refactoring/pull-up-constructor-body)
            -   [Push Down Method](/refactoring/push-down-method)
            -   [Push Down Field](/refactoring/push-down-field)
            -   [Extract Subclass](/refactoring/extract-subclass)
            -   [Extract Superclass](/refactoring/extract-superclass)
            -   [Extract Interface](/refactoring/extract-interface)
            -   [Collapse Hierarchy](/refactoring/collapse-hierarchy)
            -   [Form Template
                Method](/refactoring/form-template-method)
            -   [Replace Inheritance with
                Delegation](/refactoring/replace-inheritance-with-delegation)
            -   [Replace Delegation with
                Inheritance](/refactoring/replace-delegation-with-inheritance)
-   [ UML](/uml)
    -   [Introduction](/uml/introduction)
    -   [Basic Principles and Background](/uml/basic-principles)
        -   [Introduction to the Case
            Study](/uml/basic-principles-and-background/introduction-to-the-case-study)
        -   [Models, Views, and
            Diagrams](/uml/basic-principles-and-background/models-views-and-diagrams)
        -   [Information Systems and IT
            Systems](/uml/basic-principles-and-background/information-systems-and-it-systems)
        -   [The Models of our Case
            Study](/uml/basic-principles-and-background/the-models-of-our-case-study)
        -   [History of UML: Methods and
            Notations](/uml/basic-principles-and-background/history-of-uml-methods-and-notations)
        -   [Requirement
            Specification](/uml/basic-principles-and-background/requirement-specification)
        -   [UML 2.0](/uml/basic-principles-and-background/uml2)
    -   [Modeling Business Systems](/uml/modeling-business-systems)
        -   [Business Processes and Business
            Systems](/uml/modeling-business-systems/business-processes-and-business-systems)
        -   [One Model---Two
            Views](/uml/modeling-business-systems/one-model-two-views)
        -   [External
            View](/uml/modeling-business-systems/external-view)
        -   [The Elements of a
            View](/uml/modeling-business-systems/the-elements-of-view)
        -   [Use Case
            Diagrams](/uml/modeling-business-systems/external-view/use-case-diagrams)
        -   [Constructing Use Case
            Diagrams](/uml/modeling-business-systems/external-view/constructing-use-case-diagrams)
        -   [Activity
            Diagrams](/uml/modeling-business-systems/external-view/activity-diagrams)
        -   [Constructing Activity
            Diagrams](/uml/modeling-business-systems/external-view/constructing-activity-diagrams)
        -   [Sequence
            Diagrams](/uml/modeling-business-systems/external-view/sequence-diagrams)
        -   [Constructing Sequence
            Diagrams](/uml/modeling-business-systems/external-view/constructing-sequence-diagrams)
        -   [High-Level Sequence
            Diagrams](/uml/modeling-business-systems/external-view/high-level-sequence-diagrams)
        -   [Sequence Diagrams for Scenarios of Business Use
            Cases](/uml/modeling-business-systems/external-view/sequence-diagrams-for-scenarios-of-business-use-cases)
        -   [Internal
            View](/uml/modeling-business-systems/the-internal-view)
        -   [Package
            Diagram](/uml/modeling-business-systems/internal-view/package-diagram)
        -   [Constructing Package
            Diagrams](/uml/modeling-business-systems/internal-view/constructing-package-diagrams)
        -   [Class
            Diagram](/uml/modeling-business-systems/internal-view/class-diagram)
        -   [Constructing Class
            Diagrams](/uml/modeling-business-systems/internal-view/constructing-class-diagrams)
        -   [Activity
            Diagram](/uml/modeling-business-systems/internal-view/activity-diagram)
    -   [Modeling IT Systems](/uml/modeling-it-systems)
        -   [External View](/uml/modeling-it-systems/external-view)
        -   [The User View or \"I don\'t care how it works, as long as
            it
            works.\"](/uml/modeling-it-systems/external-view/the-user-view-or-i-dont-care-how-it-works-as-long-as-it-works)
        -   [The Elements of a
            View](/uml/modeling-it-systems/external-view/the-elements-of-view)
        -   [Use Case
            Diagram](/uml/modeling-it-systems/external-view/the-elements-of-view/use-case-diagram)
        -   [Query Events and Mutation
            Events](/uml/modeling-it-systems/external-view/query-events-and-mutation-events)
        -   [Use Case Sequence
            Diagram](/uml/modeling-it-systems/external-view/use-case-sequence-diagram)
        -   [Constructing the External
            View](/uml/modeling-it-systems/external-view/constructing-the-external-view)
        -   [Structural View](/uml/modeling-it-systems/structural-view)
        -   [Objects and
            Classes](/uml/modeling-it-systems/structural-view/objects-and-classes)
        -   [Generalization, Specialization, and
            Inheritance](/uml/modeling-it-systems/structural-view/generalization-specialization-and-inheritance)
        -   [Static and Dynamic Business
            Rules](/uml/modeling-it-systems/structural-view/static-and-dynamic-business-rules)
        -   [Elements of the
            View](/uml/modeling-it-systems/structural-view/elements-of-the-view)
        -   [Class
            Diagram](/uml/modeling-it-systems/structural-view/class-diagram)
        -   [Constructing Class
            Diagrams](/uml/modeling-it-systems/structural-view/constructing-class-diagrams)
        -   [The Behavioral
            View](/uml/modeling-it-systems/the-behavioral-view)
        -   [The Life of an
            Object](/uml/modeling-it-systems/the-behavioral-view/the-life-of-an-object)
        -   [The Elements of the
            View](/uml/modeling-it-systems/the-behavioral-view/the-elements-of-the-view)
        -   [Statechart
            Diagram](/uml/modeling-it-systems/the-behavioral-view/statechart-diagram)
        -   [Constructing Statechart
            Diagrams](/uml/modeling-it-systems/the-behavioral-view/constructing-statechart-diagrams)
        -   [Interaction
            View](/uml/modeling-it-systems/interaction-view)
        -   [Seeing What Happens Inside the IT
            System](/uml/modeling-it-systems/interaction-view/seeing-what-happens-inside-the-it-system)
        -   [Elements of the
            View](/uml/modeling-it-systems/interaction-view/elements-of-the-view)
        -   [Communication
            Diagram](/uml/modeling-it-systems/interaction-view/communication-diagram)
        -   [Sequence
            Diagram](/uml/modeling-it-systems/interaction-view/sequence-diagram)
        -   [Constructing Communication
            Diagrams](/uml/modeling-it-systems/interaction-view/constructing-communication-diagrams)
        -   [Constructing Sequence
            Diagrams](/uml/modeling-it-systems/interaction-view/constructing-sequence-diagrams)
    -   [Modeling for System
        Integration](/uml/modeling-for-system-integration)
        -   [Terminology of System
            Integration](/uml/modeling-for-system-integration/terminology-of-system-integration)
        -   [Messages in
            UML](/uml/modeling-for-system-integration/messages-in-uml)
        -   [One Model---Two
            Views](/uml/modeling-for-system-integration/one-model-two-views)
        -   [Process
            View](/uml/modeling-for-system-integration/process-view)
        -   [The Business System Model as
            Foundation](/uml/modeling-for-system-integration/process-view/the-business-system-model-as-foundation)
        -   [Elements of the
            View](/uml/modeling-for-system-integration/process-view/elements-of-the-view)
        -   [Activity
            Diagrams](/uml/modeling-for-system-integration/process-view/activity-diagrams)
        -   [Sequence
            Diagram](/uml/modeling-for-system-integration/process-view/sequence-diagram)
        -   [Constructing Diagrams in the Process
            View](/uml/modeling-for-system-integration/process-view/constructing-diagrams-in-the-process-view)
        -   [The Static
            View](/uml/modeling-for-system-integration/the-static-view)
        -   [Elements of the
            View](/uml/modeling-for-system-integration/the-static-view/elements-of-the-view)
        -   [Class
            Diagram](/uml/modeling-for-system-integration/the-static-view/class-diagram)
        -   [Constructing Class
            Diagrams](/uml/modeling-for-system-integration/the-static-view/constructing-class-diagrams)
        -   [Transforming Data from the IT System to the Message
            \"passenger
            list\"](/uml/modeling-for-system-integration/the-static-view/transforming-data-from-the-it-system-to-the-mess)
        -   [Transformation of UML Messages into Various Standard
            Formats](/uml/modeling-for-system-integration/the-static-view/transformation-of-uml-messages-into-various-stan)



[ Log in](https://sourcemaking.com/login "Log in") [ Contact
us](https://feedback.sourcemaking.com/ "Contact us"){.userecho-public
rel="nofollow"}





[![SourceMaking](/images/content-public/logos/logo-min-xs.png?id=f4a48661fc32a3f349b76a075f28594c){srcset="/images/content-public/logos/logo-min-xs-2x.png?id=34fc05750336c33b7815e231a0f227df 2x"}](/){.navigation-brand}


[![](data:image/svg+xml;base64,PHN2ZyBzdHlsZT0id2lkdGg6IDI4cHg7IGhlaWdodDogMjhweDsgZmlsbDogY3VycmVudENvbG9yOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IG1hcmdpbi10b3A6IC0xNHB4OyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Ym94PSIwIDAgNTEyIDUxMiI+PCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjMuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTM1NiA2MGw2MCAyMC02MCAyMC0yMCA2MC0yMC02MEwyNTYgODBsNjAtMjBMMzM2IDBsMjAgNjB6TTQ2NCAyMDhsNDggMTYtNDggMTYtMTYgNDgtMTYtNDgtNDgtMTYgNDgtMTYgMTYtNDggMTYgNDh6bS0yNDMuOC05LjhsMzMgNjYuOSA3My44IDEwLjcgNTkuOCA4LjctNDMuMyA0Mi4yLTUzLjQgNTIuMSAxMi42IDczLjVMMzEzIDUxMmwtNTMuNS0yOC4xLTY2LTM0LjctNjYgMzQuN0w3My45IDUxMmwxMC4yLTU5LjYgMTIuNi03My41TDQzLjMgMzI2LjggMCAyODQuNmw1OS44LTguNyA3My44LTEwLjcgMzMtNjYuOUwxOTMuNSAxNDRsMjYuOCA1NC4yem0yNi4xIDExNC40bC0yNS0zLjYtMTEuMi0yMi42LTE2LjctMzMuOS0xNi43IDMzLjlMMTY1LjYgMzA5bC0yNSAzLjYtMzcuNCA1LjQgMjcuMSAyNi40IDE4LjEgMTcuNkwxNDQgMzg3bC02LjQgMzcuMyAzMy41LTE3LjYgMjIuMy0xMS43IDIyLjMgMTEuNyAzMy41IDE3LjZMMjQyLjkgMzg3bC00LjMtMjQuOSAxOC4xLTE3LjYgMjcuMS0yNi40LTM3LjQtNS40eiI+PC9wYXRoPjwvc3ZnPg==)
Shop Now!](/store){.btn .btn-md .btn-primary .btn-featured}


-   [ [Contact us]{.caption .d-none
    .d-xl-inline-block}](https://feedback.sourcemaking.com/?show_feedback_form_private=true "Contact us"){.userecho-private
    rel="nofollow"}
-   [ [Log in]{.caption .d-none
    .d-xl-inline-block}](https://sourcemaking.com/login "Log in")
-   






-   [Design Patterns](/design_patterns)
-   [AntiPatterns](/antipatterns)
-   [Refactoring](/refactoring)
-   [UML](/uml)



-   [My account](/home)
-   [Forum](https://sourcemaking.userecho.com/){.userecho-public
    rel="nofollow"}
-   [Contact
    us](https://sourcemaking.userecho.com/?show_feedback_form_private=true){.userecho-private
    rel="nofollow"}
-   [About us](/about-us)










© 2007-2023 [SourceMaking.com](/)[ / ]{.d-none .d-md-inline}\
All rights reserved.



[Terms](/terms) / [Privacy policy](/privacy-policy)











[[]{.cart-text} ](#checkout){.btn .cart .open-checkout} [
[]{.btn-text-span .d-none .d-sm-inline-block .d-lg-none
.d-hg-inline-block}](#checkout){.btn .btn-secondary .checkout
.open-checkout}








[](/){.home} / [UML](/uml){.type} / [Basic Principles and
Background](/uml/basic-principles){.type}


# Models, Views, and Diagrams {#models-views-and-diagrams-1 .title}




## What is a Model?

Models are often built in the context of business and IT systems in
order to better understand existing or future systems. However, a model
never fully corresponds to reality. Modeling always means *emphasizing*
and *omitting*: emphasizing essential details and omitting irrelevant
ones. But what is essential and what is irrelevant? There is no
universal answer to this question. Rather, the answer depends on *what*
the goals of the model are and *who* is viewing or reading it.

> Think about what is emphasized or omitted in the following models:
>
> -   A wind tunnel model of a car
> -   A model of a building scaled at 1:50
> -   A route plan of the subway
> -   A map
> -   An organization chart

The more information a model is supposed to give, the more complex and
difficult it becomes. A map of Europe, for example, that simultaneously
contains political, geological, demographic, and transportation-related
information is hardly legible. The solution to this problem is to convey
the different types of information on individual maps. *Different views*
are formed of the objects under consideration. These views are
interconnected in many ways. Generally, if one view is changed, all
other views have to be adjusted as well. If, for instance, in the
Netherlands new land is reclaimed from the North Sea, all
views---meaning all maps---have to be updated.

<figure class="image">
<img src="/files/sm/images/uml/img_3.jpg" />
<figcaption>Figure 2.3 Different views of an object</figcaption>
</figure>

The same is true for the model of a building. If a new wing is added to
an existing building various views are affected, including the floor
plan, the different exterior views, and the 3D-model made from wood.
Figure 2.3 illustrates this in a schematic manner. In *[The Models of
our Case
Study](/uml/basic-principles-and-background/the-models-of-our-case-study)*,
we specifically address the relationships between the models we use in
this book. The different views within each model are described in more
detail in *[Modeling Business Systems](/uml/modeling-business-systems)*,
*[Modeling IT Systems](/uml/modeling-it-systems)* and *[Modeling for
System Integration](/uml/modeling-for-system-integration)*.

## Why do we Need Models?

As a general rule, a model of a system has to perform the following
tasks:

-   **Communication** between all involved parties: In order to build
    the right system, it is essential that all involved parties think
    along the same lines. It is particularly important that everyone
    understands the terminology used, that customers agree upon the same
    requirements, that developers understand these requirements, and
    that the decisions made can still be understood months later.
-   **Visualization** of all facts for customers, experts, and users:
    All accumulated facts relevant to the system need to be presented in
    such a way that everyone concerned can understand them. However,
    according to our real-life experience, we often hit a wall of
    resistance when we want to communicate with diagrams instead of
    text. It is necessary to overcome this resistance. Behind it is
    often a fear of the unknown; and the diagrams might look a bit
    complicated at first. Therefore, this book contains directions on
    how to read each diagram.
-   **Verification** of facts in terms of completeness, consistency, and
    correctness: A (more or less) formal model makes it possible to
    verify the facts obtained for completeness, consistency, and
    correctness. In particular, the clear depiction of
    interrelationships makes it possible to ask specific questions, and
    to answer them. We will list these questions with each diagram.

> Answer the following questions for yourself:
>
> -   When was the last time you felt that you were at cross-purposes
>     when you discussed a system?
> -   When was the last time you felt that you were discussing the same
>     issue over and over again?
> -   When was the last time you wished that the consensus you reached
>     during a discussion had been recorded?

## Purpose and Target Group of a Model

In real life we often observe that the results of cumbersome, tedious,
and expensive modeling simply disappear in a stack of paper on someone's
desk. We might ask why this is so. Two factors greatly influence the
result of modeling: **for whom** do we create the model and **for what
purpose** is it supposed to be used. If we don't discuss and define
these aspects sufficiently, we run the risk of creating models that
don't contain what is important to the user. In other words, if details
are not emphasized and omitted appropriately, the model is rendered
worthless.

To define the purpose and target group the following questions should be
answered:

-   **How much business expertise can we expect?** Can we assume basic
    knowledge of the subject, or do we have to explain the fundamentals
    of the model's events and processes?
-   **What amount of detail does the target group need?** What level of
    complexity does the model permit? If processes and systems are
    subject to constant changes, a highly detailed model might be
    unrealistic. This is because, most of the time, it is not possible
    to maintain those models in a satisfactory manner. A less detailed
    model requires less effort to develop and update, but it is also
    less precise.
-   **How much time does the target group have** to read and interpret
    the model? Prevent your model from disappearing in a stack of paper
    on someone's desk by choosing the appropriate level of detail and
    complexity; otherwise, nobody might have enough time to read it.
-   **What language can be used in the model?** Does the target group
    understand technical business terms? Do they understand IT
    terminology? Let's clarify with an easy example: If a bottle filled
    with water is labeled 'water\', virtually anyone who can read will
    understand the bottle's content. However, if the bottle is labeled
    \'H~2~O\'---even though this is correct---we reach a much smaller
    group of people, for example, the workers of a chemistry lab. Yet,
    the additional benefit is that it shows the composition of the
    content: hydrogen and oxygen. In either case, you will have to
    decide what \'label' is most appropriate for your target group.
-   **What level of abstraction should you choose?** The less abstract a
    model, the more comprehensible, and clear it is for the user. This
    is because a less abstract model is closer to the user's actual use
    and language. On the other hand, models with a high level of
    abstraction are more reusable and they are more easily converted
    into IT systems. We can also prove more accurately that they are
    correct. IT specialists probably manage highly abstract models best.
    Users, on the other hand, might pull their hair out if asked to deal
    with a model like that.

### Practical Tips

**Compromises** have to be made between the level of abstraction,
clarity, and the amount of detail used for a model. It is possible to
develop several model components, differing in degree of formality and
detail, in order to satisfy different target groups. In this way
communication between model builders, customers, users, and developers
can be facilitated much more easily. It is important not to 'overdo' it,
but to adjust the model to its target groups and their uses.

**Analysis** or [**design patterns**](/design_patterns) are example
models that describe common design and modeling methods.

## Process of Analysis

Figure 2.4 shows the process of analysis, which consists of *obtaining*,
*representing*, and *verifying facts*:

<figure class="image">
<img src="/files/sm/images/uml/img_4.jpg" />
<figcaption>Figure 2.4 Process of Analysis</figcaption>
</figure>

This is the job of the analyst. The process of analysis produces a
specification that comes from the model and other representations. The
analyst works with knowledge carriers, such as customers, users, and
domain experts:

-   Facts are **obtained** by collaboration between analysts and domain
    experts in which knowledge carriers contribute domain knowledge and
    analysts contribute methodological knowledge.
-   Facts are **represented** in diagrams and documents, which are
    usually prepared by the analyst.
-   Facts are **verified** only by knowledge carriers, since they alone
    can decide if the presented facts are correct. Verification is
    absolutely essential. Without it we might have pretty diagrams, but
    the probability is high that the facts represented are faulty. In
    simple terms: development of a model without verification is
    absolutely worthless!

### Practical Tips

It is impossible to develop and verify a usable model without mastering
the technical foundations of a topic. Where do we find these knowledge
carriers who know something about the systems that we want to model? We
have had good experiences with the following groups of people:

-   People who are involved in performing, operating, and controlling
    business processes
-   Users of similar or related IT systems
-   Customers, who are often critical and creative knowledge carriers
-   Business Partners
-   Domain Experts
-   Management
-   External Observers

Several helpful techniques have proven to be useful for the analysis and
understanding of business processes:

-   Observing employees at work
-   Participating in the investigated business processes
-   Taking the role of an outsider (e.g. of a customer)
-   Carrying out surveys
-   Conducting interviews
-   Brainstorming with everyone involved
-   Discussing with domain experts
-   Reviewing existing forms, documentation, specifications, handbooks,
    and work tools
-   Describing the organizational structure and workflow management
    (organization charts, etc.)

## Diagrams as Views

Each particular UML diagram corresponds to one **view** of a model of a
system. Depending on the type of diagram used, different aspects are
either emphasized or omitted. All the different views combined result in
a good model of a system. Most of the UML diagrams are *graphs* (as
shown in Figure 2.5), implying that they consist of elements that are
connected through lines:

<figure class="image">
<img src="/files/sm/images/uml/img_5.jpg" />
<figcaption>Figure 2.5 Diagram as graphs</figcaption>
</figure>

To read diagrams, you have to know what types of elements and lines are
allowed and what they mean. We'll explain this for the diagrams we use
in the following chapters.

Even *computer-aided software engineering* (CASE) tools treat UML
diagrams as views. They use a **database** in which the information
about the model is stored. Each diagram shows---as a view---a part of
that information. In this way, the CASE tool helps to preserve the
consistency of each view. If, for example, the name of a class is
changed in a class diagram, the statechart diagram of that class is
automatically updated:

<figure class="image">
<img src="/files/sm/images/uml/img_6.jpg" />
<figcaption>Figure 2.6 CASE tool as database</figcaption>
</figure>

The model database is what fundamentally differentiates a CASE tool from
a graphical program (Figure 2.6). Any UML diagram can be generated
easily with paper and pencil or a graphical program. In this case,
however, the various diagrams are nothing more than drawings. Only the
use of a CASE tool with a database, according to UML specifications,
permits consistent collection, management, and modification of model
information.

UML provides its own database model: the UML meta-model, a component of
the UML specifications ("*OMG: Unified Modeling Language:
Infrastructure, Version 2.0, Final Adopted Specification, September
2003*, and *OMG: Unified Modeling Language: Superstructure, Version 2.0,
Revised Final Adopted Specification, October 2004*":
<http://www.omg.org>). All elements found in UML diagrams, as well as
the descriptions of these elements, are contained in the UML meta-model.
It states, for example, that a class can have attributes and methods.
This "data model" of UML as a language, is the foundation of the model
databases of all UML CASE tools. Unfortunately, many CASE tools are
hungry for resources, expensive, poorly developed, cumbersome, and
require extensive training. Despite this, except for very small
projects, their use is worthwhile.







#### Read next

[Information Systems and IT Systems []{.fa
.fa-arrow-right}](/uml/basic-principles-and-background/information-systems-and-it-systems){.btn
.btn-primary rel="next"}



#### Return

[[]{.fa .fa-arrow-left} Introduction to the Case
Study](/uml/basic-principles-and-background/introduction-to-the-case-study){.btn
.btn-default rel="prev"}








[![](/images/csd/computer-science-distilled.png?id=a7b07d54e199c5add8b9d48a08321803)](/computer-science-distilled)





[ Computer Science Distilled](/computer-science-distilled){.btn
.btn-landing-ref .btn-hg .btn-block .btn-secondary
style="font-size: 16px; position: relative"}


Do you remember anything at all from your computer science class?
Quicksort, Graph traversal, Big\'O and other stuff? Revise your memories
with our new [book on Computer Science](/computer-science-distilled).

Psst! Did I mention that we\'re offering **sexy discounts** right now?










[![SourceMaking](/images/content-public/logos/logo.png?id=55f0872eb5fd4505a39679db5f702b58){width="250"
height="312"
srcset="/images/content-public/logos/logo-2x.png?id=fee3b4b0a14ba60dc0fe368695d78be9 2x"}](/){.menu-brand}


-   [ Premium Stuff](/store)
    -   [ Dive Into Design Patterns](/design-patterns-ebook)
    -   [ Dive Into Refactoring](/refactoring-course)
    -   [ Computer Science Distilled](/computer-science-distilled)
-   [ Design Patterns](/design_patterns)
    -   [Creational patterns](/design_patterns/creational_patterns)
        -   [Abstract Factory Design
            Pattern](/design_patterns/abstract_factory)
        -   [Builder Design Pattern](/design_patterns/builder)
        -   [Factory Method Design
            Pattern](/design_patterns/factory_method)
        -   [Object Pool Design Pattern](/design_patterns/object_pool)
        -   [Prototype Design Pattern](/design_patterns/prototype)
        -   [Singleton Design Pattern](/design_patterns/singleton)
    -   [Structural patterns](/design_patterns/structural_patterns)
        -   [Adapter Design Pattern](/design_patterns/adapter)
        -   [Bridge Design Pattern](/design_patterns/bridge)
        -   [Composite Design Pattern](/design_patterns/composite)
        -   [Decorator Design Pattern](/design_patterns/decorator)
        -   [Facade Design Pattern](/design_patterns/facade)
        -   [Flyweight Design Pattern](/design_patterns/flyweight)
        -   [Private Class Data](/design_patterns/private_class_data)
        -   [Proxy Design Pattern](/design_patterns/proxy)
    -   [Behavioral patterns](/design_patterns/behavioral_patterns)
        -   [Chain of
            Responsibility](/design_patterns/chain_of_responsibility)
        -   [Command Design Pattern](/design_patterns/command)
        -   [Interpreter Design Pattern](/design_patterns/interpreter)
        -   [Iterator Design Pattern](/design_patterns/iterator)
        -   [Mediator Design Pattern](/design_patterns/mediator)
        -   [Memento Design Pattern](/design_patterns/memento)
        -   [Null Object Design Pattern](/design_patterns/null_object)
        -   [Observer Design Pattern](/design_patterns/observer)
        -   [State Design Pattern](/design_patterns/state)
        -   [Strategy Design Pattern](/design_patterns/strategy)
        -   [Template Method Design
            Pattern](/design_patterns/template_method)
        -   [Visitor Design Pattern](/design_patterns/visitor)
-   [ AntiPatterns](/antipatterns)
    -   [Software Development
        AntiPatterns](/antipatterns/software-development-antipatterns)
        -   [The Blob](/antipatterns/the-blob)
        -   [Continuous
            Obsolescence](/antipatterns/continuous-obsolescence)
        -   [Lava Flow](/antipatterns/lava-flow)
        -   [Ambiguous Viewpoint](/antipatterns/ambiguous-viewpoint)
        -   [Functional
            Decomposition](/antipatterns/functional-decomposition)
        -   [Poltergeists](/antipatterns/poltergeists)
        -   [Boat Anchor](/antipatterns/boat-anchor)
        -   [Golden Hammer](/antipatterns/golden-hammer)
        -   [Dead End](/antipatterns/dead-end)
        -   [Spaghetti Code](/antipatterns/spaghetti-code)
        -   [Input Kludge](/antipatterns/input-kludge)
        -   [Walking through a
            Minefield](/antipatterns/walking-through-minefield)
        -   [Cut-And-Paste
            Programming](/antipatterns/cut-and-paste-programming)
        -   [Mushroom Management](/antipatterns/mushroom-management)
    -   [Software Architecture
        AntiPatterns](/antipatterns/software-architecture-antipatterns)
        -   [Autogenerated
            Stovepipe](/antipatterns/autogenerated-stovepipe)
        -   [Stovepipe Enterprise](/antipatterns/stovepipe-enterprise)
        -   [Jumble](/antipatterns/jumble)
        -   [Stovepipe System](/antipatterns/stovepipe-system)
        -   [Cover Your Assets](/antipatterns/cover-your-assets)
        -   [Vendor Lock-In](/antipatterns/vendor-lock-in)
        -   [Wolf Ticket](/antipatterns/wolf-ticket)
        -   [Architecture By
            Implication](/antipatterns/architecture-by-implication)
        -   [Warm Bodies](/antipatterns/warm-bodies)
        -   [Design By Committee](/antipatterns/design-by-committee)
        -   [Swiss Army Knife](/antipatterns/swiss-army-knife)
        -   [Reinvent The Wheel](/antipatterns/reinvent-the-wheel)
        -   [The Grand Old Duke of
            York](/antipatterns/the-grand-old-duke-of-york)
    -   [Project Management
        AntiPatterns](/antipatterns/software-project-management-antipatterns)
        -   [Blowhard Jamboree](/antipatterns/blowhard-jamboree)
        -   [Analysis Paralysis](/antipatterns/analysis-paralysis)
        -   [Viewgraph Engineering](/antipatterns/viewgraph-engineering)
        -   [Death By Planning](/antipatterns/death-by-planning)
        -   [Fear of Success](/antipatterns/fear-of-success)
        -   [Corncob](/antipatterns/corncob)
        -   [Intellectual Violence](/antipatterns/intellectual-violence)
        -   [Irrational Management](/antipatterns/irrational-management)
        -   [Smoke and Mirrors](/antipatterns/smoke-and-mirrors)
        -   [Project Mismanagement](/antipatterns/project-mismanagement)
        -   [Throw It over the
            Wall](/antipatterns/throw-it-over-the-wall)
        -   [Fire Drill](/antipatterns/fire-drill)
        -   [The Feud](/antipatterns/the-feud)
        -   [E-mail Is Dangerous](/antipatterns/e-mail-is-dangerous)
-   [ Refactoring](/refactoring)
    -   [Code Smells](/refactoring/smells)
        -   [Bloaters](/refactoring/smells/bloaters)
            -   [Long Method](/refactoring/smells/long-method)
            -   [Large Class](/refactoring/smells/large-class)
            -   [Primitive
                Obsession](/refactoring/smells/primitive-obsession)
            -   [Long Parameter
                List](/refactoring/smells/long-parameter-list)
            -   [Data Clumps](/refactoring/smells/data-clumps)
        -   [Object-Orientation Abusers](/refactoring/smells/oo-abusers)
            -   [Switch
                Statements](/refactoring/smells/switch-statements)
            -   [Temporary Field](/refactoring/smells/temporary-field)
            -   [Refused Bequest](/refactoring/smells/refused-bequest)
            -   [Alternative Classes with Different
                Interfaces](/refactoring/smells/alternative-classes-with-different-interfaces)
        -   [Change Preventers](/refactoring/smells/change-preventers)
            -   [Divergent Change](/refactoring/smells/divergent-change)
            -   [Shotgun Surgery](/refactoring/smells/shotgun-surgery)
            -   [Parallel Inheritance
                Hierarchies](/refactoring/smells/parallel-inheritance-hierarchies)
        -   [Dispensables](/refactoring/smells/dispensables)
            -   [Comments](/refactoring/smells/comments)
            -   [Duplicate Code](/refactoring/smells/duplicate-code)
            -   [Lazy Class](/refactoring/smells/lazy-class)
            -   [Data Class](/refactoring/smells/data-class)
            -   [Dead Code](/refactoring/smells/dead-code)
            -   [Speculative
                Generality](/refactoring/smells/speculative-generality)
        -   [Couplers](/refactoring/smells/couplers)
            -   [Feature Envy](/refactoring/smells/feature-envy)
            -   [Inappropriate
                Intimacy](/refactoring/smells/inappropriate-intimacy)
            -   [Message Chains](/refactoring/smells/message-chains)
            -   [Middle Man](/refactoring/smells/middle-man)
        -   [Other Smells](/refactoring/smells/other)
            -   [Incomplete Library
                Class](/refactoring/smells/incomplete-library-class)
    -   [Refactoring techniques](/refactoring/refactorings)
        -   [Composing Methods](/refactoring/composing-methods)
            -   [Extract Method](/refactoring/extract-method)
            -   [Inline Method](/refactoring/inline-method)
            -   [Extract Variable](/refactoring/extract-variable)
            -   [Inline Temp](/refactoring/inline-temp)
            -   [Replace Temp with
                Query](/refactoring/replace-temp-with-query)
            -   [Split Temporary
                Variable](/refactoring/split-temporary-variable)
            -   [Remove Assignments to
                Parameters](/refactoring/remove-assignments-to-parameters)
            -   [Replace Method with Method
                Object](/refactoring/replace-method-with-method-object)
            -   [Substitute
                Algorithm](/refactoring/substitute-algorithm)
        -   [Moving Features between
            Objects](/refactoring/moving-features-between-objects)
            -   [Move Method](/refactoring/move-method)
            -   [Move Field](/refactoring/move-field)
            -   [Extract Class](/refactoring/extract-class)
            -   [Inline Class](/refactoring/inline-class)
            -   [Hide Delegate](/refactoring/hide-delegate)
            -   [Remove Middle Man](/refactoring/remove-middle-man)
            -   [Introduce Foreign
                Method](/refactoring/introduce-foreign-method)
            -   [Introduce Local
                Extension](/refactoring/introduce-local-extension)
        -   [Organizing Data](/refactoring/organizing-data)
            -   [Self Encapsulate
                Field](/refactoring/self-encapsulate-field)
            -   [Replace Data Value with
                Object](/refactoring/replace-data-value-with-object)
            -   [Change Value to
                Reference](/refactoring/change-value-to-reference)
            -   [Change Reference to
                Value](/refactoring/change-reference-to-value)
            -   [Replace Array with
                Object](/refactoring/replace-array-with-object)
            -   [Duplicate Observed
                Data](/refactoring/duplicate-observed-data)
            -   [Change Unidirectional Association to
                Bidirectional](/refactoring/change-unidirectional-association-to-bidirectional)
            -   [Change Bidirectional Association to
                Unidirectional](/refactoring/change-bidirectional-association-to-unidirectional)
            -   [Replace Magic Number with Symbolic
                Constant](/refactoring/replace-magic-number-with-symbolic-constant)
            -   [Encapsulate Field](/refactoring/encapsulate-field)
            -   [Encapsulate
                Collection](/refactoring/encapsulate-collection)
            -   [Replace Type Code with
                Class](/refactoring/replace-type-code-with-class)
            -   [Replace Type Code with
                Subclasses](/refactoring/replace-type-code-with-subclasses)
            -   [Replace Type Code with
                State/Strategy](/refactoring/replace-type-code-with-state-strategy)
            -   [Replace Subclass with
                Fields](/refactoring/replace-subclass-with-fields)
        -   [Simplifying Conditional
            Expressions](/refactoring/simplifying-conditional-expressions)
            -   [Decompose
                Conditional](/refactoring/decompose-conditional)
            -   [Consolidate Conditional
                Expression](/refactoring/consolidate-conditional-expression)
            -   [Consolidate Duplicate Conditional
                Fragments](/refactoring/consolidate-duplicate-conditional-fragments)
            -   [Remove Control Flag](/refactoring/remove-control-flag)
            -   [Replace Nested Conditional with Guard
                Clauses](/refactoring/replace-nested-conditional-with-guard-clauses)
            -   [Replace Conditional with
                Polymorphism](/refactoring/replace-conditional-with-polymorphism)
            -   [Introduce Null
                Object](/refactoring/introduce-null-object)
            -   [Introduce Assertion](/refactoring/introduce-assertion)
        -   [Simplifying Method
            Calls](/refactoring/simplifying-method-calls)
            -   [Rename Method](/refactoring/rename-method)
            -   [Add Parameter](/refactoring/add-parameter)
            -   [Remove Parameter](/refactoring/remove-parameter)
            -   [Separate Query from
                Modifier](/refactoring/separate-query-from-modifier)
            -   [Parameterize Method](/refactoring/parameterize-method)
            -   [Replace Parameter with Explicit
                Methods](/refactoring/replace-parameter-with-explicit-methods)
            -   [Preserve Whole
                Object](/refactoring/preserve-whole-object)
            -   [Replace Parameter with Method
                Call](/refactoring/replace-parameter-with-method-call)
            -   [Introduce Parameter
                Object](/refactoring/introduce-parameter-object)
            -   [Remove Setting
                Method](/refactoring/remove-setting-method)
            -   [Hide Method](/refactoring/hide-method)
            -   [Replace Constructor with Factory
                Method](/refactoring/replace-constructor-with-factory-method)
            -   [Replace Error Code with
                Exception](/refactoring/replace-error-code-with-exception)
            -   [Replace Exception with
                Test](/refactoring/replace-exception-with-test)
        -   [Dealing with
            Generalisation](/refactoring/dealing-with-generalisation)
            -   [Pull Up Field](/refactoring/pull-up-field)
            -   [Pull Up Method](/refactoring/pull-up-method)
            -   [Pull Up Constructor
                Body](/refactoring/pull-up-constructor-body)
            -   [Push Down Method](/refactoring/push-down-method)
            -   [Push Down Field](/refactoring/push-down-field)
            -   [Extract Subclass](/refactoring/extract-subclass)
            -   [Extract Superclass](/refactoring/extract-superclass)
            -   [Extract Interface](/refactoring/extract-interface)
            -   [Collapse Hierarchy](/refactoring/collapse-hierarchy)
            -   [Form Template
                Method](/refactoring/form-template-method)
            -   [Replace Inheritance with
                Delegation](/refactoring/replace-inheritance-with-delegation)
            -   [Replace Delegation with
                Inheritance](/refactoring/replace-delegation-with-inheritance)
-   [ UML](/uml)
    -   [Introduction](/uml/introduction)
    -   [Basic Principles and Background](/uml/basic-principles)
        -   [Introduction to the Case
            Study](/uml/basic-principles-and-background/introduction-to-the-case-study)
        -   [Models, Views, and
            Diagrams](/uml/basic-principles-and-background/models-views-and-diagrams)
        -   [Information Systems and IT
            Systems](/uml/basic-principles-and-background/information-systems-and-it-systems)
        -   [The Models of our Case
            Study](/uml/basic-principles-and-background/the-models-of-our-case-study)
        -   [History of UML: Methods and
            Notations](/uml/basic-principles-and-background/history-of-uml-methods-and-notations)
        -   [Requirement
            Specification](/uml/basic-principles-and-background/requirement-specification)
        -   [UML 2.0](/uml/basic-principles-and-background/uml2)
    -   [Modeling Business Systems](/uml/modeling-business-systems)
        -   [Business Processes and Business
            Systems](/uml/modeling-business-systems/business-processes-and-business-systems)
        -   [One Model---Two
            Views](/uml/modeling-business-systems/one-model-two-views)
        -   [External
            View](/uml/modeling-business-systems/external-view)
        -   [The Elements of a
            View](/uml/modeling-business-systems/the-elements-of-view)
        -   [Use Case
            Diagrams](/uml/modeling-business-systems/external-view/use-case-diagrams)
        -   [Constructing Use Case
            Diagrams](/uml/modeling-business-systems/external-view/constructing-use-case-diagrams)
        -   [Activity
            Diagrams](/uml/modeling-business-systems/external-view/activity-diagrams)
        -   [Constructing Activity
            Diagrams](/uml/modeling-business-systems/external-view/constructing-activity-diagrams)
        -   [Sequence
            Diagrams](/uml/modeling-business-systems/external-view/sequence-diagrams)
        -   [Constructing Sequence
            Diagrams](/uml/modeling-business-systems/external-view/constructing-sequence-diagrams)
        -   [High-Level Sequence
            Diagrams](/uml/modeling-business-systems/external-view/high-level-sequence-diagrams)
        -   [Sequence Diagrams for Scenarios of Business Use
            Cases](/uml/modeling-business-systems/external-view/sequence-diagrams-for-scenarios-of-business-use-cases)
        -   [Internal
            View](/uml/modeling-business-systems/the-internal-view)
        -   [Package
            Diagram](/uml/modeling-business-systems/internal-view/package-diagram)
        -   [Constructing Package
            Diagrams](/uml/modeling-business-systems/internal-view/constructing-package-diagrams)
        -   [Class
            Diagram](/uml/modeling-business-systems/internal-view/class-diagram)
        -   [Constructing Class
            Diagrams](/uml/modeling-business-systems/internal-view/constructing-class-diagrams)
        -   [Activity
            Diagram](/uml/modeling-business-systems/internal-view/activity-diagram)
    -   [Modeling IT Systems](/uml/modeling-it-systems)
        -   [External View](/uml/modeling-it-systems/external-view)
        -   [The User View or \"I don\'t care how it works, as long as
            it
            works.\"](/uml/modeling-it-systems/external-view/the-user-view-or-i-dont-care-how-it-works-as-long-as-it-works)
        -   [The Elements of a
            View](/uml/modeling-it-systems/external-view/the-elements-of-view)
        -   [Use Case
            Diagram](/uml/modeling-it-systems/external-view/the-elements-of-view/use-case-diagram)
        -   [Query Events and Mutation
            Events](/uml/modeling-it-systems/external-view/query-events-and-mutation-events)
        -   [Use Case Sequence
            Diagram](/uml/modeling-it-systems/external-view/use-case-sequence-diagram)
        -   [Constructing the External
            View](/uml/modeling-it-systems/external-view/constructing-the-external-view)
        -   [Structural View](/uml/modeling-it-systems/structural-view)
        -   [Objects and
            Classes](/uml/modeling-it-systems/structural-view/objects-and-classes)
        -   [Generalization, Specialization, and
            Inheritance](/uml/modeling-it-systems/structural-view/generalization-specialization-and-inheritance)
        -   [Static and Dynamic Business
            Rules](/uml/modeling-it-systems/structural-view/static-and-dynamic-business-rules)
        -   [Elements of the
            View](/uml/modeling-it-systems/structural-view/elements-of-the-view)
        -   [Class
            Diagram](/uml/modeling-it-systems/structural-view/class-diagram)
        -   [Constructing Class
            Diagrams](/uml/modeling-it-systems/structural-view/constructing-class-diagrams)
        -   [The Behavioral
            View](/uml/modeling-it-systems/the-behavioral-view)
        -   [The Life of an
            Object](/uml/modeling-it-systems/the-behavioral-view/the-life-of-an-object)
        -   [The Elements of the
            View](/uml/modeling-it-systems/the-behavioral-view/the-elements-of-the-view)
        -   [Statechart
            Diagram](/uml/modeling-it-systems/the-behavioral-view/statechart-diagram)
        -   [Constructing Statechart
            Diagrams](/uml/modeling-it-systems/the-behavioral-view/constructing-statechart-diagrams)
        -   [Interaction
            View](/uml/modeling-it-systems/interaction-view)
        -   [Seeing What Happens Inside the IT
            System](/uml/modeling-it-systems/interaction-view/seeing-what-happens-inside-the-it-system)
        -   [Elements of the
            View](/uml/modeling-it-systems/interaction-view/elements-of-the-view)
        -   [Communication
            Diagram](/uml/modeling-it-systems/interaction-view/communication-diagram)
        -   [Sequence
            Diagram](/uml/modeling-it-systems/interaction-view/sequence-diagram)
        -   [Constructing Communication
            Diagrams](/uml/modeling-it-systems/interaction-view/constructing-communication-diagrams)
        -   [Constructing Sequence
            Diagrams](/uml/modeling-it-systems/interaction-view/constructing-sequence-diagrams)
    -   [Modeling for System
        Integration](/uml/modeling-for-system-integration)
        -   [Terminology of System
            Integration](/uml/modeling-for-system-integration/terminology-of-system-integration)
        -   [Messages in
            UML](/uml/modeling-for-system-integration/messages-in-uml)
        -   [One Model---Two
            Views](/uml/modeling-for-system-integration/one-model-two-views)
        -   [Process
            View](/uml/modeling-for-system-integration/process-view)
        -   [The Business System Model as
            Foundation](/uml/modeling-for-system-integration/process-view/the-business-system-model-as-foundation)
        -   [Elements of the
            View](/uml/modeling-for-system-integration/process-view/elements-of-the-view)
        -   [Activity
            Diagrams](/uml/modeling-for-system-integration/process-view/activity-diagrams)
        -   [Sequence
            Diagram](/uml/modeling-for-system-integration/process-view/sequence-diagram)
        -   [Constructing Diagrams in the Process
            View](/uml/modeling-for-system-integration/process-view/constructing-diagrams-in-the-process-view)
        -   [The Static
            View](/uml/modeling-for-system-integration/the-static-view)
        -   [Elements of the
            View](/uml/modeling-for-system-integration/the-static-view/elements-of-the-view)
        -   [Class
            Diagram](/uml/modeling-for-system-integration/the-static-view/class-diagram)
        -   [Constructing Class
            Diagrams](/uml/modeling-for-system-integration/the-static-view/constructing-class-diagrams)
        -   [Transforming Data from the IT System to the Message
            \"passenger
            list\"](/uml/modeling-for-system-integration/the-static-view/transforming-data-from-the-it-system-to-the-mess)
        -   [Transformation of UML Messages into Various Standard
            Formats](/uml/modeling-for-system-integration/the-static-view/transformation-of-uml-messages-into-various-stan)



[ Log in](https://sourcemaking.com/login "Log in") [ Contact
us](https://feedback.sourcemaking.com/ "Contact us"){.userecho-public
rel="nofollow"}





[![SourceMaking](/images/content-public/logos/logo-min-xs.png?id=f4a48661fc32a3f349b76a075f28594c){srcset="/images/content-public/logos/logo-min-xs-2x.png?id=34fc05750336c33b7815e231a0f227df 2x"}](/){.navigation-brand}


[![](data:image/svg+xml;base64,PHN2ZyBzdHlsZT0id2lkdGg6IDI4cHg7IGhlaWdodDogMjhweDsgZmlsbDogY3VycmVudENvbG9yOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IG1hcmdpbi10b3A6IC0xNHB4OyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Ym94PSIwIDAgNTEyIDUxMiI+PCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjMuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTM1NiA2MGw2MCAyMC02MCAyMC0yMCA2MC0yMC02MEwyNTYgODBsNjAtMjBMMzM2IDBsMjAgNjB6TTQ2NCAyMDhsNDggMTYtNDggMTYtMTYgNDgtMTYtNDgtNDgtMTYgNDgtMTYgMTYtNDggMTYgNDh6bS0yNDMuOC05LjhsMzMgNjYuOSA3My44IDEwLjcgNTkuOCA4LjctNDMuMyA0Mi4yLTUzLjQgNTIuMSAxMi42IDczLjVMMzEzIDUxMmwtNTMuNS0yOC4xLTY2LTM0LjctNjYgMzQuN0w3My45IDUxMmwxMC4yLTU5LjYgMTIuNi03My41TDQzLjMgMzI2LjggMCAyODQuNmw1OS44LTguNyA3My44LTEwLjcgMzMtNjYuOUwxOTMuNSAxNDRsMjYuOCA1NC4yem0yNi4xIDExNC40bC0yNS0zLjYtMTEuMi0yMi42LTE2LjctMzMuOS0xNi43IDMzLjlMMTY1LjYgMzA5bC0yNSAzLjYtMzcuNCA1LjQgMjcuMSAyNi40IDE4LjEgMTcuNkwxNDQgMzg3bC02LjQgMzcuMyAzMy41LTE3LjYgMjIuMy0xMS43IDIyLjMgMTEuNyAzMy41IDE3LjZMMjQyLjkgMzg3bC00LjMtMjQuOSAxOC4xLTE3LjYgMjcuMS0yNi40LTM3LjQtNS40eiI+PC9wYXRoPjwvc3ZnPg==)
Shop Now!](/store){.btn .btn-md .btn-primary .btn-featured}


-   [ [Contact us]{.caption .d-none
    .d-xl-inline-block}](https://feedback.sourcemaking.com/?show_feedback_form_private=true "Contact us"){.userecho-private
    rel="nofollow"}
-   [ [Log in]{.caption .d-none
    .d-xl-inline-block}](https://sourcemaking.com/login "Log in")
-   






-   [Design Patterns](/design_patterns)
-   [AntiPatterns](/antipatterns)
-   [Refactoring](/refactoring)
-   [UML](/uml)



-   [My account](/home)
-   [Forum](https://sourcemaking.userecho.com/){.userecho-public
    rel="nofollow"}
-   [Contact
    us](https://sourcemaking.userecho.com/?show_feedback_form_private=true){.userecho-private
    rel="nofollow"}
-   [About us](/about-us)










© 2007-2023 [SourceMaking.com](/)[ / ]{.d-none .d-md-inline}\
All rights reserved.



[Terms](/terms) / [Privacy policy](/privacy-policy)






