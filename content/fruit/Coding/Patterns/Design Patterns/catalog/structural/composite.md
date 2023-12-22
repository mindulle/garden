# Composite
**Also known as**: Object Tree

##  Intent

**Composite** is a structural design pattern that lets you compose
objects into tree structures and then work with these structures as if they were individual objects.

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/content/composite/composite.png?id=73bcf0d94db360b636cd745f710d19db"
srcset="https://refactoring.guru/images/patterns/content/composite/composite-2x.png?id=8847e6f8e2cb892ed2229faba83bd1b7 2x"
width="640" alt="Composite design pattern" />
</figure>



## Problem

Using the Composite pattern makes sense only when the core model of your app can be represented as a tree.

For example, imagine that you have two types of objects:  `Products` and `Boxes`. A `Box` can contain several `Products` as well as a number of smaller `Boxes`. These little `Boxes` can also hold some `Products` or even smaller `Boxes`, and so on.

Say you decide to create an ordering system that uses these classes. Orders could contain simple products without any wrapping, as well as boxes stuffed with products\...and other boxes. How would you determine the total price of such an order?

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/diagrams/composite/problem-en.png?id=3320d7ddc5bdc3e43752bb4393710794"
srcset="https://refactoring.guru/images/patterns/diagrams/composite/problem-en-2x.png?id=5c7d443ccce3e46c4308d43fd1e51cca 2x"
loading="lazy" width="370" alt="Structure of a complex order" />
<figcaption><p>An order might comprise various products, packaged in
boxes, which are packaged in bigger boxes and so on. The whole structure
looks like an upside down tree.</p></figcaption>
</figure>

You could try the direct approach: unwrap all the boxes, go over all the products and then calculate the total. That would be doable in the real world; but in a program, it's not as simple as running a loop. You have to know the classes of `Products` and `Boxes` you're going through, the nesting level of the boxes and other nasty details beforehand. All of this makes the direct approach either too awkward or even impossible.

## Solution

The Composite pattern suggests that you work with `Products` and `Boxes` through a common interface which declares a method for calculating the total price.

How would this method work? For a product, it'd simply return the product's price. For a box, it'd go over each item the box contains, ask its price and then return a total for this box. If one of these items were a smaller box, that box would also start going over its contents and so on, until the prices of all inner components were calculated. A box could even add some extra cost to the final price, such as packaging cost.

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/content/composite/composite-comic-1-en.png?id=5510969e5584e7c0cb65d533901bb8f6"
srcset="https://refactoring.guru/images/patterns/content/composite/composite-comic-1-en-2x.png?id=e2f3fb69d636c211520c2528be94f251 2x"
loading="lazy" width="600"
alt="Solution suggested by the Composite pattern" />
<figcaption><p>The Composite pattern lets you run a behavior recursively
over all components of an object tree.</p></figcaption>
</figure>

The greatest benefit of this approach is that you don't need to care about the concrete classes of objects that compose the tree. You don't need to know whether an object is a simple product or a sophisticated box. You can treat them all the same via the common interface. When you call a method, the objects themselves pass the request dhown the tree.

##  Real-World Analogy

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/diagrams/composite/live-example.png?id=548a7cec45b493af66e8bfe524a137d3"
srcset="https://refactoring.guru/images/patterns/diagrams/composite/live-example-2x.png?id=b555458f20fc30425ae6dada5da492af 2x"
loading="lazy" width="280" alt="An example of a military structure" />
<figcaption><p>An example of a military structure.</p></figcaption>
</figure>

Armies of most countries are structured as hierarchies. An army consists of several divisions; a division is a set of brigades, and a brigade consists of platoons, which can be broken down into squads. Finally, a squad is a small group of real soldiers. Orders are given at the top of the hierarchy and passed down onto each level until every soldier knows what needs to be done.

## Structure

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/diagrams/composite/structure-en.png?id=b7f114558b594dfb220d225398b2b744"
class="structure-img-non-indexed d-none d-xl-block"
srcset="https://refactoring.guru/images/patterns/diagrams/composite/structure-en-2x.png?id=fc41be8ae17c7250ea6d29632a239ba4 2x"
loading="lazy" width="360"
alt="Structure of the Composite design pattern" /><img
src="https://refactoring.guru/images/patterns/diagrams/composite/structure-en-indexed.png?id=9fbce571969f4bc9bb57ee4a7d786852"
class="structure-img-indexed d-xl-none"
srcset="https://refactoring.guru/images/patterns/diagrams/composite/structure-en-indexed-2x.png?id=a5bbb62b1bc218bc52615bacf3fb3b73 2x"
loading="lazy" width="400"
alt="Structure of the Composite design pattern" />
</figure>
1. The **Component** interface describes operations that are common to both simple and complex elements of the tree.

2. The **Leaf** is a basic element of a tree that doesn't have sub-elements.

    Usually, leaf components end up doing most of the real work, since they don't have anyone to delegate the work to.

3.  The **Container** (aka *composite*) is an element that has sub-elements: leaves or other containers. A container doesn't know
    the concrete classes of its children. It works with all sub-elements only via the component interface.

    Upon receiving a request, a container delegates the work to its
    sub-elements, processes intermediate results and then returns the final result to the client.

4.  The **Client** works with all elements through the component
    interface. As a result, the client can work in the same way with
    both simple or complex elements of the tree.

## Pseudocode
In this example, the **Composite** pattern lets you implement stacking of geometric shapes in a graphical editor.

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/diagrams/composite/example.png?id=98ba81d07c979038dd2ebf3c83a2e19f"
srcset="https://refactoring.guru/images/patterns/diagrams/composite/example-2x.png?id=d21edef39d3792e8a4c6736727ac7305 2x"
loading="lazy" width="370" alt="Structure of the Composite example" />
<figcaption><p>The geometric shapes editor example.</p></figcaption>
</figure>

The `CompoundGraphic` class is a container that can comprise any number of sub-shapes, including other compound shapes. A compound shape has the same methods as a simple shape. However, instead of doing something on its own, a compound shape passes the request recursively to all its children and "sums up" the result.

The client code works with all shapes through the single interface
common to all shape classes. Thus, the client doesn't know whether it's working with a simple shape or a compound one. The client can work with very complex object structures without being coupled to concrete classes that form that structure.

```ts
// The component interface declares common operations for both
// simple and complex objects of a composition.
interface Graphic is
    method move(x, y)
    method draw()

// The leaf class represents end objects of a composition. A
// leaf object can&#39;t have any sub-objects. Usually, it&#39;s leaf
// objects that do the actual work, while composite objects only
// delegate to their sub-components.
class Dot implements Graphic is
    field x, y

    constructor Dot(x, y) { ... }

    method move(x, y) is
        this.x += x, this.y += y

    method draw() is
        // Draw a dot at X and Y.

// All component classes can extend other components.
class Circle extends Dot is
    field radius

    constructor Circle(x, y, radius) { ... }

    method draw() is
        // Draw a circle at X and Y with radius R.

// The composite class represents complex components that may
// have children. Composite objects usually delegate the actual
// work to their children and then &quot;sum up&quot; the result.
class CompoundGraphic implements Graphic is
    field children: array of Graphic

    // A composite object can add or remove other components
    // (both simple or complex) to or from its child list.
    method add(child: Graphic) is
        // Add a child to the array of children.

    method remove(child: Graphic) is
        // Remove a child from the array of children.

    method move(x, y) is
        foreach (child in children) do
            child.move(x, y)

    // A composite executes its primary logic in a particular
    // way. It traverses recursively through all its children,
    // collecting and summing up their results. Since the
    // composite&#39;s children pass these calls to their own
    // children and so forth, the whole object tree is traversed
    // as a result.
    method draw() is
        // 1. For each child component:
        //     - Draw the component.
        //     - Update the bounding rectangle.
        // 2. Draw a dashed rectangle using the bounding
        // coordinates.


// The client code works with all the components via their base
// interface. This way the client code can support simple leaf
// components as well as complex composites.
class ImageEditor is
    field all: CompoundGraphic

    method load() is
        all = new CompoundGraphic()
        all.add(new Dot(1, 2))
        all.add(new Circle(5, 3, 10))
        // ...

    // Combine selected components into one complex composite
    // component.
    method groupSelected(components: array of Graphic) is
        group = new CompoundGraphic()
        foreach (component in components) do
            group.add(component)
            all.remove(component)
        all.add(group)
        // All components will be drawn.
        all.draw()
```

##  Applicability

Use the Composite pattern when you have to implement a tree-like object structure.

The Composite pattern provides you with two basic element types that share a common interface: simple leaves and complex containers. A container can be composed of both leaves and other containers. This lets you construct a nested recursive object structure that resembles a tree.

Use the pattern when you want the client code to treat both simple and complex elements uniformly.

All elements defined by the Composite pattern share a common interface. Using this interface, the client doesn't have to worry about the concrete class of the objects it works with.

##  How to Implement

1. Make sure that the core model of your app can be represented as a tree structure. Try to break it down into simple elements and containers. Remember that containers must be able to contain both simple elements and other containers.

2. Declare the component interface with a list of methods that make sense for both simple and complex components.

3. Create a leaf class to represent simple elements. A program may have multiple different leaf classes.

4. Create a container class to represent complex elements. In this class, provide an array field for storing references to sub-elements. The array must be able to store both leaves and containers, so make sure it's declared with the component interface type.

    While implementing the methods of the component interface, remember that a container is supposed to be delegating most of the work to sub-elements.

5.  Finally, define the methods for adding and removal of child elements in the container.

    Keep in mind that these operations can be declared in the component interface. This would violate the *Interface Segregation Principle* because the methods will be empty in the leaf class. However, the client will be able to treat all the elements equally, even when composing the tree.

##  Pros and Cons
### Pros
- You can work with complex tree structures more conveniently: use polymorphism and recursion to your advantage.
- *Open/Closed Principle*. You can introduce new element types into the app without breaking the existing code, which now works with the object tree.

### Cons
- It might be difficult to provide a common interface for classes whose functionality differs too much. In certain scenarios, you'd need to overgeneralize the component interface, making it harder to comprehend.

##  Relations with Other Patterns
- You can use [[fruit/Coding/Patterns/Design Patterns/catalog/creational/builder|Builder]] when creating complex [[fruit/Coding/Patterns/Design Patterns/catalog/structural/composite|Composite]] trees because you can program its construction steps to work recursively.

- [[fruit/Coding/Patterns/Design Patterns/catalog/behavioral/chain-of-responsibility|Chain Of Responsibility]] is often used in conjunction with [[fruit/Coding/Patterns/Design Patterns/catalog/structural/composite|Composite]]. In this case, when a leaf component gets a request, it may pass it through the chain of all of the parent components down to the root of the object tree.

- You can use [[fruit/Coding/Patterns/Design Patterns/catalog/behavioral/iterator|Iterators]] to traverse [[fruit/Coding/Patterns/Design Patterns/catalog/structural/composite|Composite]] trees.

- You can use [[fruit/Coding/Patterns/Design Patterns/catalog/behavioral/visitor|Visitor]] to execute an operation over an entire [[fruit/Coding/Patterns/Design Patterns/catalog/structural/composite|Composite]] tree.

- You can implement shared leaf nodes of the [[fruit/Coding/Patterns/Design Patterns/catalog/structural/composite|Composite]] tree as [[fruit/Coding/Patterns/Design Patterns/catalog/structural/flyweight|Flyweight]] to save some RAM.

- [[fruit/Coding/Patterns/Design Patterns/catalog/structural/composite|Composite]] and [[fruit/Coding/Patterns/Design Patterns/catalog/structural/decorator|Decorator]] have similar structure diagrams since both rely on recursive composition to organize an open-ended number of objects.

    A *Decorator* is like a *Composite* but only has one child
    component. There's another significant difference: *Decorator* adds additional responsibilities to the wrapped object, while *Composite* just "sums up" its children's results.

    However, the patterns can also cooperate: you can use *Decorator* to extend the behavior of a specific object in the *Composite* tree.

- Designs that make heavy use of [[fruit/Coding/Patterns/Design Patterns/catalog/structural/composite|Composite]] and [[fruit/Coding/Patterns/Design Patterns/catalog/structural/decorator|Decorator]] can often benefit from using [[fruit/Coding/Patterns/Design Patterns/catalog/creational/prototype|Prototype]]. Applying the pattern lets you clone complex structures instead of re-constructing them from scratch.
