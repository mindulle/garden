# Prototype

**Also known as**: Clone

##  Intent
**Prototype** is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/content/prototype/prototype.png?id=e912b1ada20bbf7b2ffc09e93b9fab20"
srcset="https://refactoring.guru/images/patterns/content/prototype/prototype-2x.png?id=670789c80c8a114e25838ede2da4a881 2x"
width="640" alt="Prototype Design Pattern" />
</figure>
##  Problem

Say you have an object, and you want to create an exact copy of it. How would you do it? First, you have to create a new object of the same class. Then you have to go through all the fields of the original object and copy their values over to the new object.

Nice! But there's a catch. Not all objects can be copied that way
because some of the object's fields may be private and not visible from outside of the object itself.
<figure class="image">
<img src="https://refactoring.guru/images/patterns/content/prototype/prototype-comic-1-en.png?id=4cc45ae42e26cc9533a6ac540713d1fa"
data-600"="" srcset="https://refactoring.guru/images/patterns/content/prototype/prototype-comic-1-en-2x.png?id=1f5b9eeb00df663f4630ca6d38c4804d 2x"
loading="lazy" alt="What can go wrong when copying things “from the outside&quot;?” width="" />
<figcaption><p>Copying an object “from the outside” <a
href="https://vimeo.com/120816425">isn’t</a> always possible.</p></figcaption>
</figure>

There's one more problem with the direct approach. Since you have to know the object's class to create a duplicate, your code becomes dependent on that class. If the extra dependency doesn't scare you, there's another catch. Sometimes you only know the interface that the object follows, but not its concrete class, when, for example, a parameter in a method accepts any objects that follow some interface.

##  Solution

The Prototype pattern delegates the cloning process to the actual
objects that are being cloned. The pattern declares a common interface for all objects that support cloning. This interface lets you clone an object without coupling your code to the class of that object. Usually, such an interface contains just a single `clone` method.

The implementation of the `clone` method is very similar in all classes. The method creates an object of the current class and carries over all of the field values of the old object into the new one. You can even copy private fields because most programming languages let objects access private fields of other objects that belong to the same class.

An object that supports cloning is called a *prototype*. When your
objects have dozens of fields and hundreds of possible configurations, cloning them might serve as an alternative to subclassing.

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/content/prototype/prototype-comic-2-en.png?id=e1df2dc39404c5eb2d485b7ae7c9914f"
srcset="https://refactoring.guru/images/patterns/content/prototype/prototype-comic-2-en-2x.png?id=dda1589983832b69aee763037293beab 2x"
loading="lazy" width="343" alt="Pre-built prototypes" />
<figcaption><p>Pre-built prototypes can be an alternative
to subclassing.</p></figcaption>
</figure>

Here's how it works: you create a set of objects, configured in various ways. When you need an object like the one you've configured, you just clone a prototype instead of constructing a new object from scratch.

##  Real-World Analogy

In real life, prototypes are used for performing various tests before starting mass production of a product. However, in this case, prototypes don't participate in any actual production, playing a passive role instead.

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/content/prototype/prototype-comic-3-en.png?id=ff16dedbd0c10944d27bf87d2adcf8a6"
srcset="https://refactoring.guru/images/patterns/content/prototype/prototype-comic-3-en-2x.png?id=63dd16812865486d174b646882effd9a 2x"
loading="lazy" width="600" alt="The cell division" />
<figcaption><p>The division of a cell.</p></figcaption>
</figure>

Since industrial prototypes don't really copy themselves, a much closer analogy to the pattern is the process of mitotic cell division (biology, remember?). After mitotic division, a pair of identical cells is formed. The original cell acts as a prototype and takes an active role in creating the copy.

## Structure

#### Basic implementation



<figure class="image">
<img
src="https://refactoring.guru/images/patterns/diagrams/prototype/structure.png?id=088102c5e9785ff45debbbce86f4df81"
class="structure-img-non-indexed d-none d-xl-block"
srcset="https://refactoring.guru/images/patterns/diagrams/prototype/structure-2x.png?id=ba75079f42f08028ae4cdbda0cfecc26 2x"
loading="lazy" width="500"
alt="The structure of the Prototype design pattern" /><img
src="https://refactoring.guru/images/patterns/diagrams/prototype/structure-indexed.png?id=0e1c809842f5c43aca0541a2eba1f844"
class="structure-img-indexed d-xl-none"
srcset="https://refactoring.guru/images/patterns/diagrams/prototype/structure-indexed-2x.png?id=74584ac729c0f6b49d2a97a53cc266ff 2x"
loading="lazy" width="520"
alt="The structure of the Prototype design pattern" />
</figure>
1. The **Prototype** interface declares the cloning methods. In most cases, it's a single `clone` method.

2.  The **Concrete Prototype** class implements the cloning method. In addition to copying the original object's data to the clone, this method may also handle some edge cases of the cloning process related to cloning linked objects, untangling recursive dependencies, etc.

3.  The **Client** can produce a copy of any object that follows the prototype interface.

#### Prototype registry implementation
<figure class="image">
<img
src="https://refactoring.guru/images/patterns/diagrams/prototype/structure-prototype-cache.png?id=609c2af5d14ed55dcbb218a00f98e7d5"
class="structure-img-non-indexed d-none d-xl-block"
srcset="https://refactoring.guru/images/patterns/diagrams/prototype/structure-prototype-cache-2x.png?id=a1e4514bbcc9b10968b856f19b407105 2x"
loading="lazy" width="550" alt="The prototype registry" /><img
src="https://refactoring.guru/images/patterns/diagrams/prototype/structure-prototype-cache-indexed.png?id=10a4a84a1a318f59dbc2b806fc936d04"
class="structure-img-indexed d-xl-none"
srcset="https://refactoring.guru/images/patterns/diagrams/prototype/structure-prototype-cache-indexed-2x.png?id=47b99eb7ae51158bdbb31deea4f5e98f 2x"
loading="lazy" width="550" alt="The prototype registry" />
</figure>
1.  The **Prototype Registry** provides an easy way to access frequently-used prototypes. It stores a set of pre-built objects
    that are ready to be copied. The simplest prototype registry is a `name → prototype` hash map. However, if you need better search criteria than a simple name, you can build a much more robust version of the registry.

##  Pseudocode

In this example, the **Prototype** pattern lets you produce exact copies of geometric objects, without coupling the code to their classes.

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/diagrams/prototype/example.png?id=47bc6c1058cb100b81e675b5ca6bda6c"
srcset="https://refactoring.guru/images/patterns/diagrams/prototype/example-2x.png?id=80393e0df17ae8130e5ada832d494949 2x"
loading="lazy" width="470"
alt="The structure of the Prototype pattern example" />
<figcaption><p>Cloning a set of objects that belong to a
class hierarchy.</p></figcaption>
</figure>

All shape classes follow the same interface, which provides a cloning method. A subclass may call the parent's cloning method before copying its own field values to the resulting object.

```ts
// Base prototype.
abstract class Shape is
    field X: int
    field Y: int
    field color: string

    // A regular constructor.
    constructor Shape() is
        // ...

    // The prototype constructor. A fresh object is initialized
    // with values from the existing object.
    constructor Shape(source: Shape) is
        this()
        this.X = source.X
        this.Y = source.Y
        this.color = source.color

    // The clone operation returns one of the Shape subclasses.
    abstract method clone():Shape


// Concrete prototype. The cloning method creates a new object
// in one go by calling the constructor of the current class and
// passing the current object as the constructor&#39;s argument.
// Performing all the actual copying in the constructor helps to
// keep the result consistent: the constructor will not return a
// result until the new object is fully built; thus, no object
// can have a reference to a partially-built clone.
class Rectangle extends Shape is
    field width: int
    field height: int

    constructor Rectangle(source: Rectangle) is
        // A parent constructor call is needed to copy private
        // fields defined in the parent class.
        super(source)
        this.width = source.width
        this.height = source.height

    method clone():Shape is
        return new Rectangle(this)


class Circle extends Shape is
    field radius: int

    constructor Circle(source: Circle) is
        super(source)
        this.radius = source.radius

    method clone():Shape is
        return new Circle(this)


// Somewhere in the client code.
class Application is
    field shapes: array of Shape

    constructor Application() is
        Circle circle = new Circle()
        circle.X = 10
        circle.Y = 10
        circle.radius = 20
        shapes.add(circle)

        Circle anotherCircle = circle.clone()
        shapes.add(anotherCircle)
        // The `anotherCircle` variable contains an exact copy
        // of the `circle` object.

        Rectangle rectangle = new Rectangle()
        rectangle.width = 10
        rectangle.height = 20
        shapes.add(rectangle)

    method businessLogic() is
        // Prototype rocks because it lets you produce a copy of
        // an object without knowing anything about its type.
        Array shapesCopy = new Array of Shapes.

        // For instance, we don&#39;t know the exact elements in the
        // shapes array. All we know is that they are all
        // shapes. But thanks to polymorphism, when we call the
        // `clone` method on a shape the program checks its real
        // class and runs the appropriate clone method defined
        // in that class. That&#39;s why we get proper clones
        // instead of a set of simple Shape objects.
        foreach (s in shapes) do
            shapesCopy.add(s.clone())

        // The `shapesCopy` array contains exact copies of the
        // `shape` array&#39;s children.
```

##  Applicability

Use the Prototype pattern when your code shouldn't depend on the concrete classes of objects that you need to copy.

This happens a lot when your code works with objects passed to you from 3rd-party code via some interface. The concrete classes of these objects are unknown, and you couldn't depend on them even if you wanted to.

The Prototype pattern provides the client code with a general interface for working with all objects that support cloning. This interface makes the client code independent from the concrete classes of objects that it clones.

Use the pattern when you want to reduce the number of subclasses that only differ in the way they initialize their respective objects.

Suppose you have a complex class that requires a laborious configuration before it can be used. There are several common ways to configure this class, and this code is scattered through your app. To reduce the duplication, you create several subclasses and put every common configuration code into their constructors. You solved the duplication problem, but now you have lots of dummy subclasses.

The Prototype pattern lets you use a set of pre-built objects configured in various ways as prototypes. Instead of instantiating a subclass that matches some configuration, the client can simply look for an appropriate prototype and clone it.

##  How to Implement

1.  Create the prototype interface and declare the `clone` method in it. Or just add the method to all classes of an existing class hierarchy, if you have one.

2.  A prototype class must define the alternative constructor that
    accepts an object of that class as an argument. The constructor must copy the values of all fields defined in the class from the passed object into the newly created instance. If you're changing a subclass, you must call the parent constructor to let the superclass handle the cloning of its private fields.

    If your programming language doesn't support method overloading, you won't be able to create a separate "prototype" constructor. Thus, copying the object's data into the newly created clone will have to be performed within the `clone` method. Still, having this code in a regular constructor is safer because the resulting object is returned fully configured right after you call the `new` operator.

3.  The cloning method usually consists of just one line: running a
    `new` operator with the prototypical version of the constructor.
    Note, that every class must explicitly override the cloning method and use its own class name along with the `new` operator. Otherwise, the cloning method may produce an object of a parent class.

4.  Optionally, create a centralized prototype registry to store a
    catalog of frequently used prototypes.

    You can implement the registry as a new factory class or put it in the base prototype class with a static method for fetching the prototype. This method should search for a prototype based on search criteria that the client code passes to the method. The criteria might either be a simple string tag or a complex set of search parameters. After the appropriate prototype is found, the registry should clone it and return the copy to the client.

    Finally, replace the direct calls to the subclasses' constructors
    with calls to the factory method of the prototype registry.

##  Pros and Cons
### Pros
- You can clone objects without coupling to their concrete classes.
- You can get rid of repeated initialization code in favor of cloning pre-built prototypes.
- You can produce complex objects more conveniently.
- You get an alternative to inheritance when dealing with configuration presets for complex objects.

### Cons
- Cloning complex objects that have circular references might be very tricky.

##  Relations with Other Patterns

- Many designs start by using [[fruit/Coding/Patterns/Design Patterns/catalog/creational/factory-method|Factory Method]] (less complicated and more customizable via subclasses) and evolve toward [[fruit/Coding/Patterns/Design Patterns/catalog/creational/abstract-factory|Abstract Factory]], [[fruit/Coding/Patterns/Design Patterns/catalog/creational/prototype|Prototype]], or [[fruit/Coding/Patterns/Design Patterns/catalog/creational/builder|Builder]] (more flexible, but more complicated).

- [[fruit/Coding/Patterns/Design Patterns/catalog/creational/abstract-factory|Abstract Factory]] classes are often based on a set of [[fruit/Coding/Patterns/Design Patterns/catalog/creational/factory-method|Factory Method]], but you can also use [[fruit/Coding/Patterns/Design Patterns/catalog/creational/prototype|Prototype]] to compose the methods on these classes.

- [[fruit/Coding/Patterns/Design Patterns/catalog/creational/prototype|Prototype]] can help when you need to save copies of [[fruit/Coding/Patterns/Design Patterns/catalog/behavioral/command|Command]] into history.

-   Designs that make heavy use of
    [Composite](/design-patterns/composite) and [Decorator](/design-patterns/decorator) can often benefit from using [Prototype](/design-patterns/prototype). Applying the pattern lets you clone complex structures instead of re-constructing them from scratch.

- [[fruit/Coding/Patterns/Design Patterns/catalog/creational/prototype|Prototype]] isn't based on inheritance, so it doesn't have its drawbacks. On the other hand, *Prototype* requires a complicated initialization of the cloned object. [[fruit/Coding/Patterns/Design Patterns/catalog/creational/factory-method|Factory Method]] is based on inheritance but doesn't require an initialization step.

- Sometimes [[fruit/Coding/Patterns/Design Patterns/catalog/creational/prototype|Prototype]] can be a simpler alternative to [[fruit/Coding/Patterns/Design Patterns/catalog/behavioral/memento|Memento]]. This works if the object, the state of which you want to store in the history, is fairly straightforward and doesn't have links to external resources, or the links are easy to re-establish.

- [[fruit/Coding/Patterns/Design Patterns/catalog/creational/abstract-factory|Abstract Factories]], [[fruit/Coding/Patterns/Design Patterns/catalog/creational/builder|Builders]] and [[fruit/Coding/Patterns/Design Patterns/catalog/creational/prototype|Prototype]] can all be implemented as [[fruit/Coding/Patterns/Design Patterns/catalog/creational/singleton|Singletons]].

