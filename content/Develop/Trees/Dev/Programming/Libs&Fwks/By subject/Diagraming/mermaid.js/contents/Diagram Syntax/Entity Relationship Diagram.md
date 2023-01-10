---
# configs for document itself.
title: "Entity Relationship Diagram"
lastModified: "2022-12-21"
visibility: "public"

# configs for annotating data to obsidian dataview plugin.
noteImportance: ⭐⭐⭐⭐⭐
noteStatus: "finished"
noteCertanity: "certain"
noteField:
  - "develop"
  - "devsigner"
notePurpose:
  - "background"
  - "individual"
  - "business"
noteTimeliness:
  - "lts"

# configs for selecting tree type.
treeType:
  - "learn"
treePurpose:
  - "webClipping"

# configs to decide whether external contents are appropriate to me or not.
contentLevel:
  - "intermediate"
  - "professional"
contentRepresentation:
  - "text"
  - "img"
contentPurpose:
  - "howto"
  - "reference"
  - "realworld"
contentOrigin:
  - "technicalDocument"

# configs for querying particular datas to specify notes which have been noted expirences related to particular subject.
# e.g. performance optimization using lighthouse in web development environments:
# tags=[#tree, #web, #lighthouse, #perfOpt]
tags:
  - "tree"
  - "mermaidjs"
---
```toc
max_depth: 3
```
## Entity Relationship Diagrams 🌱

> An entity–relationship model (or ER model) describes interrelated things of interest in a specific domain of knowledge. A basic ER model is composed of entity types (which classify the things of interest) and specifies relationships that can exist between entities (instances of those entity types). Wikipedia.

Note that practitioners[^practitioners] of ER modelling almost always refer to *entity types* simply as *entities*. For example the `CUSTOMER` entity *type* would be referred to simply as the `CUSTOMER` entity. This is so common it would be inadvisable[^inadvisable] to do anything else, but technically __an entity is an ==abstract *instance*==__ of an entity type, and __*this is what an ER diagram shows*__ - abstract instances, and the relationships between them. This is why __entities are always named using ==singular nouns.==__

[^practitioners]: 실무자
[^inadvisable]:  권할 수 없는

Mermaid can render ER diagrams

##### Code:
```
---
title: Order example
---
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```
```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```
__Entity__ names are often __capitalised__, although __there is no accepted standard__ on this, and it is not required in Mermaid.

Relationships between entities are represented by lines with end markers representing __cardinality.__[^cardinality] Mermaid uses the most popular [crow's foot notation.](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model#Crow's_foot_notation) The crow's foot intuitively __conveys__ the possibility of many instances of the entity that it connects to.

ER diagrams can be used for various purposes, ranging from abstract logical models devoid[^devoid] of any implementation details, through to physical models of relational database tables. It can be useful to include attribute definitions on ER diagrams to aid comprehension of the purpose and meaning of entities. These do not necessarily need to be exhaustive; often a small subset of attributes is enough. Mermaid allows them to be defined in terms of their *type* and *name*.

[^cardinality]: 특정 데이터 집합의 고유한 값의 종류의 수. 성별이면 여성 타입 남성 타입으로 2. [cf](https://soft.plusblog.co.kr/87). selectivity. 
[^devoid]: 결여된

##### Code:
```
erDiagram
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER {
        string name
        string custNumber
        string sector
    }
    ORDER ||--|{ LINE-ITEM : contains
    ORDER {
        int orderNumber
        string deliveryAddress
    }
    LINE-ITEM {
        string productCode
        int quantity
        float pricePerUnit
    }
```
```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER {
        string name
        string custNumber
        string sector
    }
    ORDER ||--|{ LINE-ITEM : contains
    ORDER {
        int orderNumber
        string deliveryAddress
    }
    LINE-ITEM {
        string productCode
        int quantity
        float pricePerUnit
    }
```

When including attributes on ER diagrams, you must decide whether to include foreign keys as attributes. This probably depends on how closely you are trying to represent relational table structures. If your diagram is a *logical* model which is not meant to imply a relational implementation, then __it is better to leave these out__ because the associative relationships already convey the way that entities are associated. ==For example==, a __JSON data__ structure can __implement a one-to-many relationship__ *without the need for foreign key* properties, using arrays. Similarly an object-oriented programming language may use pointers or references to collections. Even for models that are intended for relational implementation, you might decide that inclusion of foreign key attributes duplicates information __already portrayed[^portray] by the relationships__, and does not add meaning to entities. Ultimately, it's your choice.

> [!NOTE] 외래 키를 속성으로 넣을 지 말지는 네 자유인데
> JSON이나 배열처럼 프로그래밍 요소에 자연스레 Entity나 Relation에 관한 정보가 포함되어 있을 수 있으니 굳이 한번 더 다이어그램으로 표시를 할 지 말지는 개발자의 선택에 달렸단 얘기 같음. 물론 난 귀찮으니 웬만해선 가장 쉽고 단순한 표기를 사용 할 것 같음.

[^portray]: 묘사하다.

## Syntax

### Entities and Relationships

Mermaid syntax for ER diagrams is compatible with PlantUML, with an extension to label the relationship. Each statement consists of the following parts:

```
    <first-entity> [<relationship> <second-entity> : <relationship-label>]
```

Where:
-   `first-entity` is the name of an entity. Names must begin with an alphabetic character and may also contain digits, hyphens, and underscores.
-   `relationship` describes the way that both entities inter-relate. See below.
-   `second-entity` is the name of the other entity.
-   `relationship-label` describes the relationship from the perspective of the first entity.

For example:

```
    PROPERTY ||--|{ ROOM : contains
```

This statement can be read as *a property contains one or more rooms, and a room is part of one and only one property*. You can see that the label here is from the first entity's perspective: a property contains a room, but a room does not contain a property. When considered from the perspective of the second entity, the equivalent label is usually very easy to infer. (Some ER diagrams label relationships from both perspectives, but this is not supported here, and is usually superfluous).

Only the `first-entity` part of a statement is mandatory. This makes it possible to show an entity with no relationships, which can be useful during iterative construction of diagrams. If any other parts of a statement are specified, then all parts are mandatory.

### Relationship Syntax 🌱

The `relationship` part of each statement can be broken down into three sub-components:

-   the cardinality of the first entity with respect to the second,
-   whether the relationship confers identity on a 'child' entity
-   the cardinality of the second entity with respect to the first

__Cardinality__ is a property that describes __how many elements of another entity can be related to the entity in question.__ In the above example a `PROPERTY` can have one or more `ROOM` instances associated to it, whereas a `ROOM` can only be associated with one `PROPERTY`. In each cardinality marker there are two characters. The outermost character represents a maximum value, and the innermost character represents a minimum value. __The table below summarises ==possible cardinalities.__==

| Value (left) | Value (right) | Meaning (cardinality)         |
| ------------ | ------------- | ----------------------------- |
| \|o          | o\|           | Zero or one                   |
| \|\|         | \|\|          | Excatly one                   |
| }o           | o{            | Zero or more (no upper limit) |
| }\|          | \|{           | One or more (no upper limit)                              |

**Aliases**

| Value (left) | Value (right) | Alias for    |
| ------------ | ------------- | ------------ |
| one or zero  | one or zero   | Zero or one  |
| zero or one  | zero or one   | Zero or one  |
| one or more  | one or more   | One or more  |
| one or many  | one or many   | One or more  |
| many(1)      | many(1)       | One or more  |
| 1+           | 1+            | One or more  |
| zero or more | zero or more  | Zero or more |
| zero or many | zero or many  | Zero or more |
| many(0)      | many(1)       | Zero or more |
| 0+           | 0+            | Zero or more |
| only one     | only one      | Excatly one  |
| 1            | 1             | Exactly one             |
### Identification

Relationships may be classified as either *identifying* or *non-identifying* and these are rendered with either solid or dashed lines respectively. This is relevant when one of the entities in question can not have independent existence without the other. For example a firm that insures people to drive cars might need to store data on `NAMED-DRIVER`s. In modelling this we might start out by observing that a `CAR` can be driven by many `PERSON` instances, and a `PERSON` can drive many `CAR`s - both entities can exist without the other, so this is a non-identifying relationship that we might specify in Mermaid as: `PERSON }|..|{ CAR : "driver"`. Note the two dots in the middle of the relationship that will result in a dashed line being drawn between the two entities. But when this many-to-many relationship is resolved into two one-to-many relationships, we observe that a `NAMED-DRIVER` cannot exist without both a `PERSON` and a `CAR` - the relationships become identifying and would be specified using hyphens, which translate to a solid line:

**Aliases**

| Value         | Alias for   |
| ------------- | ----------- |
| to            | identifying |
| optionally to | non-identifying            |

##### Code:
```
erDiagram
    CAR ||--o{ NAMED-DRIVER : allows
    PERSON ||--o{ NAMED-DRIVER : is
```
```mermaid
erDiagram
    CAR ||--o{ NAMED-DRIVER : allows
    PERSON ||--o{ NAMED-DRIVER : is
```

### Attributes 🎯⭐

Attributes can be defined for entities by specifying the entity name followed by a block containing multiple `type name` pairs, where a block is delimited by an opening `{` and a closing `}`. For example:

##### Code:
```
erDiagram
    CAR ||--o{ NAMED-DRIVER : allows
    CAR {
        string registrationNumber
        string make
        string model
    }
    PERSON ||--o{ NAMED-DRIVER : is
    PERSON {
        string firstName
        string lastName
        int age
    }
```
```mermaid
erDiagram
    CAR ||--o{ NAMED-DRIVER : allows
    CAR {
        string registrationNumber
        string make
        string model
    }
    PERSON ||--o{ NAMED-DRIVER : is
    PERSON {
        string firstName
        string lastName
        int age
    }
```
The attributes are rendered inside the entity boxes:

##### Code:
```
erDiagram
    CAR ||--o{ NAMED-DRIVER : allows
    CAR {
        string registrationNumber
        string make
        string model
    }
    PERSON ||--o{ NAMED-DRIVER : is
    PERSON {
        string firstName
        string lastName
        int age
    }
```
```mermaid
erDiagram
    CAR ||--o{ NAMED-DRIVER : allows
    CAR {
        string registrationNumber
        string make
        string model
    }
    PERSON ||--o{ NAMED-DRIVER : is
    PERSON {
        string firstName
        string lastName
        int age
    }
```

The `type` and `name` values must begin with an alphabetic character and may contain digits, hyphens or underscores. Other than that, there are no restrictions, and there is no implicit set of valid data types.

#### Attribute Keys and Comments

Attributes may also have a `key` or comment defined. Keys can be "PK" or "FK", for Primary Key or Foreign Key. And a `comment` is defined by double quotes at the end of an attribute. Comments themselves cannot have double-quote characters in them.

##### Code:
```
erDiagram
    CAR ||--o{ NAMED-DRIVER : allows
    CAR {
        string allowedDriver FK "The license of the allowed driver"
        string registrationNumber
        string make
        string model
    }
    PERSON ||--o{ NAMED-DRIVER : is
    PERSON {
        string driversLicense PK "The license #"
        string firstName
        string lastName
        int age
    }
    MANUFACTURER only one to zero or more CAR
```
```mermaid
erDiagram
    CAR ||--o{ NAMED-DRIVER : allows
    CAR {
        string allowedDriver FK "The license of the allowed driver"
        string registrationNumber
        string make
        string model
    }
    PERSON ||--o{ NAMED-DRIVER : is
    PERSON {
        string driversLicense PK "The license #"
        string firstName
        string lastName
        int age
    }
    %%MANUFACTURER only one to zero or more CAR
```

### Other Things
-   If you want the relationship label to be more than one word, you must use double quotes around the phrase
-   If you don't want a label at all on a relationship, you must use an empty double-quoted string

---
## Styling 🏁⭐

### Config options

For simple color customization:

| Name     | Used as                                    |
| -------- | ------------------------------------------ |
| `fill`   | Background color of an entity or attribute |
| `stroke` | Border color of an entity or attribute, line color of a relationship                                           |

### Classes used

The following CSS class selectors are available for richer styling:

| Selector                   | Description                                         |
| -------------------------- | --------------------------------------------------- |
| `.er.attributeBoxEven`     | The box containing attributes on even-numbered rows |
| `.er.attributeBoxOdd`      | The box containing attributes on odd-numbered rows  |
| `.er.entityBox`            | The box representing an entity                      |
| `.er.entityLabel`          | The label for an entity                             |
| `.er.relationshipLabel`    | The label for a relationship                        |
| `.er.relationshipLabelBox` | The box surrounding a relationship label            |
| `.er.relationshipLine`     | The line representing a relationship between entities                                                    |
