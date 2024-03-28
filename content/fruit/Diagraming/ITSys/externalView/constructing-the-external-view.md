


[[]{.cart-text} ](#checkout){.btn .cart .open-checkout} [
[]{.btn-text-span .d-none .d-sm-inline-block .d-lg-none
.d-hg-inline-block}](#checkout){.btn .btn-secondary .checkout
.open-checkout}








[](/){.home} / [UML](/uml){.type} / [Modeling IT
Systems](/uml/modeling-it-systems){.type}


# Constructing the External View {#constructing-the-external-view .title}




The following checklist shows the steps necessary to construct the
external view. Subsequently, we will explain the individual steps
further.

> #### Checklist 4.1 Constructing Diagrams in the External View
>
> -   Collect information sources---How am I supposed to know that?
> -   Identify potential actors---Who works with the IT system?
> -   Identify potential business use cases---What can be done with the
>     IT system?
> -   Connect business use cases---Who can do what with the IT system?
> -   Describe actors---Who or what do the actors represent?
> -   Search for more business use cases---Which other functionalities
>     does the IT system have to provide?
> -   Edit business use cases---What actually has to be included in a
>     business use case?
> -   Document business use cases---What happens in a business use case?
> -   Model relationships between business use cases---What can be
>     reused?
> -   Verify the view---Is everything correct?

The order in which these steps are given makes sense. However, this
order is not mandatory, since in practice, the individual steps often
overlap heavily.

Normally, these steps will be carried out by an analyst, who needs to
have a general understanding of the IT system as well as of the business
system as it was modeled in *[Modeling Business
Systems](/uml/modeling-business-systems)*. However, it is indispensable
to consult additional knowledge carriers, such as users of the system.
The result of these work steps is the external view, which has to be
read and understood by domain experts.

### Collect Information Sources---How Am I Supposed to Know That?

Generally, there are quite a number of information sources that can be
used for the formulation of the external view:

-   Certainly, the business system model is the first source that should
    be drawn upon. The business system's actors, workers, and use cases
    are a good starting point from which it is possible to derive actors
    and use cases of the IT system (see *[Modeling Business
    Systems](/uml/modeling-business-systems)*).
-   Technical specifications, project specifications, and similar
    documents.
-   Future users are a very important source for this user-oriented
    external view.
-   Technical experts in the IT system's area of application.
-   Organization charts, organizational structure, and job descriptions.

Taking up the users' standpoint is very helpful. Talk with users or
observe them performing their jobs.

### Identify Potential Actors---Who Works with the IT System?

This step is about identifying a first selection of actors. This
selection does not yet have to be complete or correct. The rule applies:
the more, the better. You can continue working with these actors in
subsequent steps.

Answering the following questions (for instance, with users of the
system) will help identify potential actors. While doing this, you
should try to abstain from using persons mentioned by name. Instead, try
to form groups of people or actors:

-   Which actors and employees of the business system deal directly with
    the IT system?
-   Which groups of people need support from the IT system in order to
    complete their daily work?
-   Which groups of people perform the most important main functions of
    the IT system?
-   Which groups of people are needed to carry out secondary system
    functions, such as maintenance and administration?
-   Which groups of people from the organization model (see organization
    chart) of the company or division work with the IT system?

Here, it is important to picture concrete and direct interactions with
the IT system under consideration.

At a check-in counter it is the check-in employee who is in direct
interaction with the IT system. At the check-in machine, where
passengers without luggage can check in with their machine-readable
tickets, it is the passenger who directly interacts with the IT system,
inserting the ticket and choosing one of the empty seats.

A passenger is also an actor in the business system; check-in employees
and boarding employees, on the other hand, are not. They are employees,
and because of that, they are part of the business system, as shown in
Figure 4.15:

<figure class="image">
<img src="/files/sm/images/uml/img_109.jpg" />
<figcaption>Figure 4.15 Potential actors</figcaption>
</figure>

### Identify Potential Use Cases---What Can be Done With the IT System?

This step is about finding a first selection of use cases. Here too, the
rule applies: the more, the better. Answering the following questions
will help identify potential use cases:

-   Which business use cases of the business system are supported by the
    IT system?
-   Which business activities of the business system should be supported
    by the IT system?
-   Depending on the degree of detail of the business activities, in
    this step a use case can be constructed for each business activity.
-   What are the goal and purpose of the IT system?
-   What are the main functions of the IT system?
-   For what do actors need the IT system?
-   Which secondary system functions, such as maintenance and
    administration, does the IT system require?
-   What functions does the interface prototype have?

<figure class="image">
<img src="/files/sm/images/uml/img_110.jpg" />
<figcaption>Figure 4.16 Potential use cases</figcaption>
</figure>

### Connect Actors and Use Cases---Who Can Do What with the IT System?

Assigning business use cases to actors generates a first draft of the
use case diagram, as shown in Figure 4.16. Here, the following question
should be answered:

-   Which actor can carry out which use cases?

<figure class="image">
<img src="/files/sm/images/uml/img_111.jpg" />
<figcaption>Figure 4.17 First draft of a use case diagram</figcaption>
</figure>

This first draft constitutes a foundation from which the use case
diagram can be edited and refined, as shown in Figure 4.17.

### Describe Actors---Who or What do the Actors Represent?

An actor in a diagram has to be named (or renamed) in a way that
clarifies the role that is represented. The question is:

-   How can an actor be accurately described? Here it is extremely
    important that the terminology of the domain is used. Users of the
    IT system have to recognize themselves in the actors; otherwise they
    will not understand the use case diagram! If required, the actor can
    be defined with a comment in addition to an accurate name. Such a
    comment can include the field of responsibility of the actor, the
    requirements of the IT system from the actor's perspective, or a
    formal definition of the role that the actor plays.

### Search for More Use Cases---What Functionalities does the IT System have to Provide?

Once you have identified a first selection of use cases, these can be
used as the starting point for the completion of the use case diagram.
Use cases that were overlooked before can be identified by asking the
following questions, based on a particular use case:

-   Is there anything that has to be done with the IT system at some
    point before a particular use case can be executed??
-   Is there anything that has to be done with the IT system at some
    point after a particular use case is executed?
-   Is there anything that has to be done with the IT system if it does
    not execute a particular use case?

It is very important not to lose sight of the real IT system. There is a
risk of modeling use cases that lie outside the IT system under
consideration. For example, purchasing the plane ticket, which has to
occur before check-in, does not belong to the considered IT system
passenger services.

In our case study, the answers for the use case check-in could be as
follows:

-   Information about ticket and flight has to be obtained before
    check-in.
-   Boarding has to take place after check-in.
-   The plane ticket has to be invalidated if the passenger does not
    appear at check-in.

### Edit Use Cases---What Actually Has to be Included in a Use Case?

The most difficult part of modeling use cases probably is finding the
appropriate degree of detail for these use cases. Here, the range is
between the two extremes shown in Figure 4.18:

<figure class="image">
<img src="/files/sm/images/uml/img_112.jpg" />
<figcaption>Figure 4.18 Extreme degrees of detail in the IT system
“Passenger Services”</figcaption>
</figure>

Neither approach makes sense. If the entire IT system is crammed into
one use case, a practically meaningless use case diagram is constructed.
Nothing useful can be learned from it. If on the other hand, use cases
are itemized too strongly, the use case diagram gets too complex and
contains too many use cases with interrelationships that are hard to
recognize.

Fortunately, there are some criteria that will help you find the optimal
scope of a use case. To prevent use cases from becoming too large, we
can ask the following questions for each use case:

-   Does the use case consist of a behaviorally related sequence of
    interactions that belong together (an interaction sequence)? Items
    that are included in a business use case have to be directly
    related. Issuing a boarding pass and searching for lost luggage are
    not related at all. Use cases that violate this criterion have to be
    divided.
-   Can a single actor carry out the use case? Even though UML allows
    more than one actor to be involved in the execution of a use case,
    in most cases, it is better to abstain from this option. If a use
    case describes the interaction of a person with a computer, it
    implies that not more than one person should be involved in the
    interaction. Use cases that violate this criterion have to be
    divided.

To avoid the creation of use cases that are too small, we can ask the
following questions for each use case:

-   Does the use case deliver a tangible and relevant result? A use case
    cannot describe an incomplete sub-step by itself, such as *choose
    customer*. Rather, a use case has to produce a result that makes
    sense from a domain point of view. Use cases that violate this
    criterion have to be combined with other use cases.
-   Is the use case never performed alone, but always in a sequence in
    combination with other business use cases? Use cases are not
    supposed to describe sub-steps that are only executed in combination
    with other sub-steps. Use cases that violate this criterion have to
    be combined with other use cases.

Verifying existing use cases with these questions can help finding a
meaningful degree of detail by dividing or combining use cases.

### Document Use Cases---What Happens in a Use Case?

The information from the use case diagram is not sufficient to
understand use cases. The flow of interaction that stands behind a use
case has to be described. In addition to purely verbal description,
description in a use case sequence diagram has proven to be especially
valuable. We can ask the following questions when developing a use case
sequence diagram for the use case:

-   What steps are involved in working with the IT system? To answer
    this question we have to observe the actor's work with the IT
    system. What does the actor do with the IT system? What does he or
    she enter? What does the IT system display? What does the
    interaction look like? Here, it is important to find the appropriate
    level of detail. Not every key pressed makes up a work step. The
    next two questions will help you find the appropriate level of
    detail.
-   Which information is the use case meant to provide to the actor? If
    information should be displayed, a query event is sent to the IT
    system.
-   Which information is meant to be stored, modified, or deleted in the
    IT system? If information should be changed, a mutation event is
    sent to the IT system.

The description of the flow is, therefore, a succession of steps in
which information is entered or queried, in other words, an interaction.
During the description of the flow, the IT system is always viewed as a
black box.Because, in reality, a use case does not always take place in
the same manner, it has proven valuable to use simple control structures
in descriptions to show alternatives and branches, as illustrated in
Figure 4.19:

<figure class="image">
<img src="/files/sm/images/uml/img_113.jpg" />
<figcaption>Figure 4.19 Use case sequence diagram for the use case
“Boarding”</figcaption>
</figure>

The documentation of use cases should also include a description of the
user interface utilized. An example of this is the dialogue window
labeled \[B27\] above, shown in Figure 4.20:

<figure class="image">
<img src="/files/sm/images/uml/img_114.jpg" />
<figcaption>Figure 4.20: Dialog window [B 27] from the use case
“Boarding”</figcaption>
</figure>

### Model Relationships between Use Cases---What can be Reused?

If you notice that certain parts of the interaction are the same in
several use cases, these commonalities can be included into their own
use case. With an include relationship this new use case can be utilized
in other use cases. The question for this is:

-   Are there parts or sections that exist in several use case sequence
    diagrams (and always remain the same)?

### Verify the View---Is Everything Correct?

Use case diagrams, as well as use case sequence diagrams, have to be
verified with the aid of knowledge carriers. Ideally, knowledge carriers
can read and understand the diagrams themselves (which is not that
difficult, since our book has reading instructions for every view).
Then, the knowledge carriers are in a position to answer the question
about completeness and correctness themselves. If this is not possible,
the diagrams have to be read to the knowledge carriers. Then, the
diagrams have to be verified for correctness and completeness jointly.
Only with this last step is the circle complete and a verified view that
reflects a current shared understanding of the IT system created.

The completed use case diagram can be verified with the following
checklist:

> #### Checklist 4.2 Verifying Use Case Diagrams in the External View
>
> -   Is the use case diagram complete? The use case diagram is complete
>     if there are no further use cases. Anything that users have to do
>     with the IT system is depicted in the form of use cases (if
>     necessary, use cases can be spread out into several diagrams).
> -   Are all use cases correct? Use cases are correct if they describe
>     a use case of the IT system and comply with the definition of a
>     use case.
> -   Is the degree of detail appropriate? The degree of detail of the
>     business use cases should meet the following requirements: A use
>     case represents a behaviorally coherent interaction sequence. A
>     use case is carried out by a single actor. A use case represents a
>     functionality that is tangible and that yields a relevant result.
> -   Generally, a use case is carried out completely.
> -   Are the use cases named appropriately? The name of each use case
>     should describe the activity that is executed in the IT system.
> -   Are the actors correct? The actors in the use case diagram
>     represent roles that someone (e.g., a person) or something (e.g.,
>     another system) takes up in an interaction with the IT system.

Completed use case sequence diagrams can be verified with the following
checklist:

> #### Checklist 4.3 Verifying Use Case Sequence Diagrams in the External View
>
> -   Are the use case sequence diagrams completely present? Every use
>     case should have a sequence diagram that describes the possible
>     flows of the use case.
> -   Are the use case sequence diagrams correct? Each use case sequence
>     diagram should contain only one object that represents the IT
>     system and be made up exclusively of query events and mutation
>     events.







#### Read next

[Structural View []{.fa
.fa-arrow-right}](/uml/modeling-it-systems/structural-view){.btn
.btn-primary rel="next"}



#### Return

[[]{.fa .fa-arrow-left} Use Case Sequence
Diagram](/uml/modeling-it-systems/external-view/use-case-sequence-diagram){.btn
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






