# Adapter

**Also known as**: Wrapper

##  Intent
**Adapter** is a structural design pattern that allows objects with
incompatible interfaces to collaborate.

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/content/adapter/adapter-en.png?id=11ef6ae6177291834323e3f918c47cd2"
srcset="https://refactoring.guru/images/patterns/content/adapter/adapter-en-2x.png?id=e0ab0f6103b0b7b0648a8fda592ffab8 2x"
width="640" alt="Adapter design pattern" />
</figure>
## Problem

Imagine that you're creating a stock market monitoring app. The app downloads the stock data from multiple sources in XML format and then displays nice-looking charts and diagrams for the user.

At some point, you decide to improve the app by integrating a smart 3rd-party analytics library. But there's a catch: the analytics library only works with data in JSON format.

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/diagrams/adapter/problem-en.png?id=60d01f6c72ba85030cd52d5955caa3d8"
srcset="https://refactoring.guru/images/patterns/diagrams/adapter/problem-en-2x.png?id=f6f4bfbd2d6136a5ae4fb8c899e9854e 2x"
loading="lazy" width="530"
alt="The structure of the app before integration with the analytics library" />
<figcaption><p>You can’t use the analytics library “as is” because it
expects the data in a format that’s incompatible with
your app.</p></figcaption>
</figure>
You could change the library to work with XML. However, this might break some existing code that relies on the library. And worse, you might not have access to the library's source code in the first place, making this approach impossible.

## Solution

You can create an *adapter*. This is a special object that converts the interface of one object so that another object can understand it.

An adapter wraps one of the objects to hide the complexity of conversion happening behind the scenes. The wrapped object isn't even aware of the adapter. For example, you can wrap an object that operates in meters and kilometers with an adapter that converts all of the data to imperial units such as feet and miles.

Adapters can not only convert data into various formats but can also help objects with different interfaces collaborate. Here's how it works:

1. The adapter gets an interface, compatible with one of the existing objects.
2.  Using this interface, the existing object can safely call the
    adapter's methods.
3.  Upon receiving a call, the adapter passes the request to the second object, but in a format and order that the second object expects.

Sometimes it's even possible to create a two-way adapter that can convert the calls in both directions.

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/diagrams/adapter/solution-en.png?id=5f4f1b4575236a3853f274b690bd6656"
srcset="https://refactoring.guru/images/patterns/diagrams/adapter/solution-en-2x.png?id=5846ed9b88cad0220993f79bdfe817a8 2x"
loading="lazy" width="530" alt="Adapter&#39;s solution" />
</figure>

Let's get back to our stock market app. To solve the dilemma of
incompatible formats, you can create XML-to-JSON adapters for every class of the analytics library that your code works with directly. Then you adjust your code to communicate with the library only via these adapters. When an adapter receives a call, it translates the incoming XML data into a JSON structure and passes the call to the appropriate methods of a wrapped analytics object.

##  Real-World Analogy

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/content/adapter/adapter-comic-1-en.png?id=c3842e3fff878a5b93e3186606998fc6"
srcset="https://refactoring.guru/images/patterns/content/adapter/adapter-comic-1-en-2x.png?id=9bc31312da9412ed2ea8ae8d5d83984f 2x"
loading="lazy" width="533" alt="The Adapter pattern example" />
<figcaption><p>A suitcase before and after a
trip abroad.</p></figcaption>
</figure>

When you travel from the US to Europe for the first time, you may get a surprise when trying to charge your laptop. The power plug and sockets standards are different in different countries. That's why your US plug won't fit a German socket. The problem can be solved by using a power plug adapter that has the American-style socket and the European-style plug.

## Structure

#### Object adapter
This implementation uses the object composition principle: the adapter implements the interface of one object and wraps the other one. It can be implemented in all popular programming languages.

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/diagrams/adapter/structure-object-adapter.png?id=33dffbe3aece294162440c7ddd3d5d4f"
class="structure-img-non-indexed d-none d-xl-block"
srcset="https://refactoring.guru/images/patterns/diagrams/adapter/structure-object-adapter-2x.png?id=03e8052e168c962d6bc369bbb13b0945 2x"
loading="lazy" width="580"
alt="Structure of the Adapter design pattern (the object adapter)" /><img
src="https://refactoring.guru/images/patterns/diagrams/adapter/structure-object-adapter-indexed.png?id=a20b311948b361a058097e5bcdbf067a"
class="structure-img-indexed d-xl-none"
srcset="https://refactoring.guru/images/patterns/diagrams/adapter/structure-object-adapter-indexed-2x.png?id=759771515f08d74d53cf4fe500f814a3 2x"
loading="lazy" width="600"
alt="Structure of the Adapter design pattern (the object adapter)" />
</figure>
1. The **Client** is a class that contains the existing business logic
    of the program.

2.  The **Client Interface** describes a protocol that other classes
    must follow to be able to collaborate with the client code.

3.  The **Service** is some useful class (usually 3rd-party or legacy).
    The client can't use this class directly because it has an incompatible interface.

4. The **Adapter** is a class that's able to work with both the client
    and the service: it implements the client interface, while wrapping the service object. The adapter receives calls from the client via the client interface and translates them into calls to the wrapped service object in a format it can understand.

5.  The client code doesn't get coupled to the concrete adapter class as long as it works with the adapter via the client interface. Thanks to this, you can introduce new types of adapters into the program without breaking the existing client code. This can be useful when the interface of the service class gets changed or replaced: you can just create a new adapter class without changing the client code.

#### Class adapter

This implementation uses inheritance: the adapter inherits interfaces from both objects at the same time. Note that this approach can only be implemented in programming languages that support multiple inheritance, such as C++.

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/diagrams/adapter/structure-class-adapter.png?id=e1c60240508146ed3b98ac562cc8e510"
class="structure-img-non-indexed d-none d-xl-block"
srcset="https://refactoring.guru/images/patterns/diagrams/adapter/structure-class-adapter-2x.png?id=ddca3e3e4d972b7c58207daba8d24866 2x"
loading="lazy" width="550"
alt="Adapter design pattern (class adapter)" /><img
src="https://refactoring.guru/images/patterns/diagrams/adapter/structure-class-adapter-indexed.png?id=250b5c485a7dfba7c16b89a9201538fb"
class="structure-img-indexed d-xl-none"
srcset="https://refactoring.guru/images/patterns/diagrams/adapter/structure-class-adapter-indexed-2x.png?id=9ae1182ef2a34d2ea65f4b4f94a4019e 2x"
loading="lazy" width="550"
alt="Adapter design pattern (class adapter)" />
</figure>

1.  The **Class Adapter** doesn't need to wrap any objects because it inherits behaviors from both the client and the service. The adaptation happens within the overridden methods. The resulting adapter can be used in place of an existing client class.


## Pseudocode

This example of the **Adapter** pattern is based on the classic conflict between square pegs and round holes.

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/diagrams/adapter/example.png?id=9d2b6857ce256f2c669383ce4df3d0aa"
srcset="https://refactoring.guru/images/patterns/diagrams/adapter/example-2x.png?id=0ac62d1bc151e8ce6abad8e8502756cf 2x"
loading="lazy" width="640"
alt="Structure of the Adapter pattern example" />
<figcaption><p>Adapting square pegs to round holes.</p></figcaption>
</figure>
The Adapter pretends to be a round peg, with a radius equal to a half of the square's diameter (in other words, the radius of the smallest circle that can accommodate the square peg).

```ts
// Say you have two classes with compatible interfaces:
// RoundHole and RoundPeg.
class RoundHole is
    constructor RoundHole(radius) { ... }

    method getRadius() is
        // Return the radius of the hole.

    method fits(peg: RoundPeg) is
        return this.getRadius() &gt;= peg.getRadius()

class RoundPeg is
    constructor RoundPeg(radius) { ... }

    method getRadius() is
        // Return the radius of the peg.


// But there&#39;s an incompatible class: SquarePeg.
class SquarePeg is
    constructor SquarePeg(width) { ... }

    method getWidth() is
        // Return the square peg width.


// An adapter class lets you fit square pegs into round holes.
// It extends the RoundPeg class to let the adapter objects act
// as round pegs.
class SquarePegAdapter extends RoundPeg is
    // In reality, the adapter contains an instance of the
    // SquarePeg class.
    private field peg: SquarePeg

    constructor SquarePegAdapter(peg: SquarePeg) is
        this.peg = peg

    method getRadius() is
        // The adapter pretends that it&#39;s a round peg with a
        // radius that could fit the square peg that the adapter
        // actually wraps.
        return peg.getWidth() * Math.sqrt(2) / 2


// Somewhere in client code.
hole = new RoundHole(5)
rpeg = new RoundPeg(5)
hole.fits(rpeg) // true

small_sqpeg = new SquarePeg(5)
large_sqpeg = new SquarePeg(10)
hole.fits(small_sqpeg) // this won&#39;t compile (incompatible types)

small_sqpeg_adapter = new SquarePegAdapter(small_sqpeg)
large_sqpeg_adapter = new SquarePegAdapter(large_sqpeg)
hole.fits(small_sqpeg_adapter) // true
hole.fits(large_sqpeg_adapter) // false
```

##  Applicability
Use the Adapter class when you want to use some existing class, but its interface isn't compatible with the rest of your code.

The Adapter pattern lets you create a middle-layer class that serves as a translator between your code and a legacy class, a 3rd-party class or any other class with a weird interface.

Use the pattern when you want to reuse several existing subclasses that lack some common functionality that can't be added to the superclass.

You could extend each subclass and put the missing functionality into new child classes. However, you'll need to duplicate the code across all of these new classes, which [[fruit/Coding/code smell/dispensables/duplicate-code|smells really bad]].

The much more elegant solution would be to put the missing functionality into an adapter class. Then you would wrap objects with missing features inside the adapter, gaining needed features dynamically. For this to work, the target classes must have a common interface, and the adapter's field should follow that interface. This approach looks very similar to the [[fruit/Coding/Patterns/Design Patterns/catalog/structural/decorator|Decorator]] pattern.

##  How to Implement

1. Make sure that you have at least two classes with incompatible interfaces:
    - A useful *service* class, which you can't change (often 3rd-party, legacy or with lots of existing dependencies).
    - One or several *client* classes that would benefit from using the service class.

2. Declare the client interface and describe how clients communicate with the service.

3. Create the adapter class and make it follow the client interface. Leave all the methods empty for now.

4. Add a field to the adapter class to store a reference to the service object. The common practice is to initialize this field via the constructor, but sometimes it's more convenient to pass it to the adapter when calling its methods.

5. One by one, implement all methods of the client interface in the adapter class. The adapter should delegate most of the real work to the service object, handling only the interface or data format conversion.

6. Clients should use the adapter via the client interface. This will
    let you change or extend the adapters without affecting the client code.

##  Pros and Cons
## Pros
- *Single Responsibility Principle*. You can separate the interface or data conversion code from the primary business logic of the program.
- *Open/Closed Principle*. You can introduce new types of adapters into the program without breaking the existing client code, as long as they work with the adapters through the client interface.

### Cons
- The overall complexity of the code increases because you need to introduce a set of new interfaces and classes. Sometimes it's simpler just to change the service class so that it matches the rest of your code.

##  Relations with Other Patterns
- [[fruit/Coding/Patterns/Design Patterns/catalog/structural/bridge|Bridge]] is usually designed up-front, letting you develop parts of an application independently of each other. On the other hand, [[fruit/Coding/Patterns/Design Patterns/catalog/structural/adapter|Adapter]] is commonly used with an existing app to make some otherwise-incompatible classes work together nicely.

- [[fruit/Coding/Patterns/Design Patterns/catalog/structural/adapter|Adapter]] provides a completely different interface for accessing an existing object. On the other hand, with the [[fruit/Coding/Patterns/Design Patterns/catalog/structural/decorator|Decorator]] pattern the interface either stays the same or gets extended. In addition, *Decorator* supports recursive composition, which isn't possible when you use *Adapter*.

- With [[fruit/Coding/Patterns/Design Patterns/catalog/structural/adapter|Adapter]] you access an existing object via different interface. With [[fruit/Coding/Patterns/Design Patterns/catalog/structural/proxy|Proxy]], the interface stays the same. With [[fruit/Coding/Patterns/Design Patterns/catalog/structural/decorator|Decorator]] you access the object via an enhanced interface.

- [[fruit/Coding/Patterns/Design Patterns/catalog/structural/facade|Facade]] defines a new interface for existing objects, whereas [[fruit/Coding/Patterns/Design Patterns/catalog/structural/adapter|Adapter]] tries to make the existing interface usable. *Adapter* usually wraps just one object, while *Facade* works with an entire subsystem of objects.

- [[fruit/Coding/Patterns/Design Patterns/catalog/structural/bridge|Bridge]], [[fruit/Coding/Patterns/Design Patterns/catalog/behavioral/state|State]], [[fruit/Coding/Patterns/Design Patterns/catalog/behavioral/strategy|Strategy]] (and to some degree [Adapter](/design-patterns/adapter)) have very similar structures. Indeed, all of these patterns are based on composition, which is delegating work to other objects. However, they all solve different problems. A pattern isn't just a recipe for structuring your code in a specific way. It can also communicate to other developers the problem the pattern solves.
