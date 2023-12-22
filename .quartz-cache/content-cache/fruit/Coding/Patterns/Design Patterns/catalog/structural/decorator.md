##  Real-World Analogy

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/content/decorator/decorator-comic-1.png?id=80d95baacbfb91f5bcdbdc7814b0c64d"
srcset="https://refactoring.guru/images/patterns/content/decorator/decorator-comic-1-2x.png?id=ba869f621b6e0ea173fdc2b535fc7eed 2x"
loading="lazy" width="600" alt="Example of the Decorator pattern" />
<figcaption><p>You get a combined effect from wearing multiple pieces
of clothing.</p></figcaption>
</figure>

Wearing clothes is an example of using decorators. When you're cold, you wrap yourself in a sweater. If you're still cold with a sweater, you can wear a jacket on top. If it's raining, you can put on a raincoat. All of these garments "extend" your basic behavior but aren't part of you, and you can easily take off any piece of clothing whenever you don't need it.

##  Structure
<figure class="image">
<img
src="https://refactoring.guru/images/patterns/diagrams/decorator/structure.png?id=8c95d894aecce5315cc1b12093a7ea0c"
class="structure-img-non-indexed d-none d-xl-block"
srcset="https://refactoring.guru/images/patterns/diagrams/decorator/structure-2x.png?id=3cfa1f10417a4ef0c12580bc4a63b80d 2x"
loading="lazy" width="480"
alt="Structure of the Decorator design pattern" /><img
src="https://refactoring.guru/images/patterns/diagrams/decorator/structure-indexed.png?id=09401b230a58f2249e4c9a1195d485a0"
class="structure-img-indexed d-xl-none"
srcset="https://refactoring.guru/images/patterns/diagrams/decorator/structure-indexed-2x.png?id=2733e7d0e322bfb2f150ccf8a878dbf6 2x"
loading="lazy" width="500"
alt="Structure of the Decorator design pattern" />
</figure>


1.  The **Component** declares the common interface for both wrappers and wrapped objects.

2.  **Concrete Component** is a class of objects being wrapped. It defines the basic behavior, which can be altered by decorators.

3.  The **Base Decorator** class has a field for referencing a wrapped object. The field's type should be declared as the component interface so it can contain both concrete components and decorators. The base decorator delegates all operations to the wrapped object.

4.  **Concrete Decorators** define extra behaviors that can be added to components dynamically. Concrete decorators override methods of the base decorator and execute their behavior either before or after calling the parent method.

5.  The **Client** can wrap components in multiple layers of decorators,  as long as it works with all objects via the component interface.




## Pseudocode

In this example, the **Decorator** pattern lets you compress and encrypt sensitive data independently from the code that actually uses this data.

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/diagrams/decorator/example.png?id=eec9dc488f00c85f50e764323baa723e"
srcset="https://refactoring.guru/images/patterns/diagrams/decorator/example-2x.png?id=4891323a27d5601a174eec366187d833 2x"
loading="lazy" width="540"
alt="Structure of the Decorator pattern example" />
<figcaption><p>The encryption and compression
decorators example.</p></figcaption>
</figure>

The application wraps the data source object with a pair of decorators. Both wrappers change the way the data is written to and read from the disk:

- Just before the data is **written to disk**, the decorators encrypt and compress it. The original class writes the encrypted and protected data to the file without knowing about the change.

- Right after the data is **read from disk**, it goes through the same decorators, which decompress and decode it.

The decorators and the data source class implement the same interface, which makes them all interchangeable in the client code.

```ts
// The component interface defines operations that can be
// altered by decorators.
interface DataSource is
    method writeData(data)
    method readData():data

// Concrete components provide default implementations for the
// operations. There might be several variations of these
// classes in a program.
class FileDataSource implements DataSource is
    constructor FileDataSource(filename) { ... }

    method writeData(data) is
        // Write data to file.

    method readData():data is
        // Read data from file.

// The base decorator class follows the same interface as the
// other components. The primary purpose of this class is to
// define the wrapping interface for all concrete decorators.
// The default implementation of the wrapping code might include
// a field for storing a wrapped component and the means to
// initialize it.
class DataSourceDecorator implements DataSource is
    protected field wrappee: DataSource

    constructor DataSourceDecorator(source: DataSource) is
        wrappee = source

    // The base decorator simply delegates all work to the
    // wrapped component. Extra behaviors can be added in
    // concrete decorators.
    method writeData(data) is
        wrappee.writeData(data)

    // Concrete decorators may call the parent implementation of
    // the operation instead of calling the wrapped object
    // directly. This approach simplifies extension of decorator
    // classes.
    method readData():data is
        return wrappee.readData()

// Concrete decorators must call methods on the wrapped object,
// but may add something of their own to the result. Decorators
// can execute the added behavior either before or after the
// call to a wrapped object.
class EncryptionDecorator extends DataSourceDecorator is
    method writeData(data) is
        // 1. Encrypt passed data.
        // 2. Pass encrypted data to the wrappee&#39;s writeData
        // method.

    method readData():data is
        // 1. Get data from the wrappee&#39;s readData method.
        // 2. Try to decrypt it if it&#39;s encrypted.
        // 3. Return the result.

// You can wrap objects in several layers of decorators.
class CompressionDecorator extends DataSourceDecorator is
    method writeData(data) is
        // 1. Compress passed data.
        // 2. Pass compressed data to the wrappee&#39;s writeData
        // method.

    method readData():data is
        // 1. Get data from the wrappee&#39;s readData method.
        // 2. Try to decompress it if it&#39;s compressed.
        // 3. Return the result.


// Option 1. A simple example of a decorator assembly.
class Application is
    method dumbUsageExample() is
        source = new FileDataSource(&quot;somefile.dat&quot;)
        source.writeData(salaryRecords)
        // The target file has been written with plain data.

        source = new CompressionDecorator(source)
        source.writeData(salaryRecords)
        // The target file has been written with compressed
        // data.

        source = new EncryptionDecorator(source)
        // The source variable now contains this:
        // Encryption &gt; Compression &gt; FileDataSource
        source.writeData(salaryRecords)
        // The file has been written with compressed and
        // encrypted data.


// Option 2. Client code that uses an external data source.
// SalaryManager objects neither know nor care about data
// storage specifics. They work with a pre-configured data
// source received from the app configurator.
class SalaryManager is
    field source: DataSource

    constructor SalaryManager(source: DataSource) { ... }

    method load() is
        return source.readData()

    method save() is
        source.writeData(salaryRecords)
    // ...Other useful methods...


// The app can assemble different stacks of decorators at
// runtime, depending on the configuration or environment.
class ApplicationConfigurator is
    method configurationExample() is
        source = new FileDataSource(&quot;salary.dat&quot;)
        if (enabledEncryption)
            source = new EncryptionDecorator(source)
        if (enabledCompression)
            source = new CompressionDecorator(source)

        logger = new SalaryManager(source)
        salary = logger.load()
    // ...
```

##  Applicability

Use the Decorator pattern when you need to be able to assign extra behaviors to objects at runtime without breaking the code that uses these objects.

The Decorator lets you structure your business logic into layers, create a decorator for each layer and compose objects with various combinations of this logic at runtime. The client code can treat all these objects in the same way, since they all follow a common interface.

Use the pattern when it's awkward or not possible to extend an object's behavior using inheritance.

Many programming languages have the `final` keyword that can be used to prevent further extension of a class. For a final class, the only way to reuse the existing behavior would be to wrap the class with your own wrapper, using the Decorator pattern.

##  How to Implement

1.  Make sure your business domain can be represented as a primary component with multiple optional layers over it.

2.  Figure out what methods are common to both the primary component and the optional layers. Create a component interface and declare those methods there.

3.  Create a concrete component class and define the base behavior in it.

4. Create a base decorator class. It should have a field for storing a reference to a wrapped object. The field should be declared with the component interface type to allow linking to concrete components as well as decorators. The base decorator must delegate all work to the wrapped object.

5.  Make sure all classes implement the component interface.

6.  Create concrete decorators by extending them from the base decorator. A concrete decorator must execute its behavior before or after the call to the parent method (which always delegates to the wrapped object).

7. The client code must be responsible for creating decorators and composing them in the way the client needs.

##  Pros and Cons
### Pros
- You can extend an object's behavior without making a new subclass.
- You can add or remove responsibilities from an object at 
- runtime.
- You can combine several behaviors by wrapping an object into multiple decorators.
- *Single Responsibility Principle*. You can divide a monolithic class that implements many possible variants of behavior into several smaller classes.

### Cons
- It's hard to remove a specific wrapper from the wrappers stack.
- It's hard to implement a decorator in such a way that its behavior doesn't depend on the order in the decorators stack.
- The initial configuration code of layers might look pretty ugly.

##  Relations with Other Patterns
- [[fruit/Coding/Patterns/Design Patterns/catalog/structural/adapter|Adapter]] provides a completely different interface for accessing an existing object. On the other hand, with the [[fruit/Coding/Patterns/Design Patterns/catalog/structural/decorator|Decorator]] pattern the interface either stays the same or gets extended. In addition, *Decorator* supports recursive composition, which isn't possible when you use *Adapter*.

- With [[fruit/Coding/Patterns/Design Patterns/catalog/structural/adapter|Adapter]] you access an existing object via different interface. With [[fruit/Coding/Patterns/Design Patterns/catalog/structural/proxy|Proxy]], the interface stays the same. With [[fruit/Coding/Patterns/Design Patterns/catalog/structural/decorator|Decorator]] you access the object via an enhanced interface.

- [[fruit/Coding/Patterns/Design Patterns/catalog/behavioral/chain-of-responsibility|Chain Of Responsibility]] and [[fruit/Coding/Patterns/Design Patterns/catalog/structural/decorator|Decorator]] have very similar class structures. Both patterns rely on recursive composition to pass the execution through a series of objects. However, there are several crucial differences.

   The *CoR* handlers can execute arbitrary operations independently of each other. They can also stop passing the request further at any point. On the other hand, various *Decorators* can extend the object's behavior while keeping it consistent with the base interface. In addition, decorators aren't allowed to break the flow of the request.

- [[fruit/Coding/Patterns/Design Patterns/catalog/structural/composite|Composite]] and [[fruit/Coding/Patterns/Design Patterns/catalog/structural/decorator|Decorator]] have similar structure diagrams since both rely on recursive composition to organize an open-ended number of objects.

    A *Decorator* is like a *Composite* but only has one child    component. There's another significant difference: *Decorator* adds additional responsibilities to the wrapped object, while *Composite* just "sums up" its children's results.

    However, the patterns can also cooperate: you can use *Decorator* to extend the behavior of a specific object in the *Composite* tree.

- Designs that make heavy use of [[fruit/Coding/Patterns/Design Patterns/catalog/structural/composite|Composite]] and [[fruit/Coding/Patterns/Design Patterns/catalog/structural/decorator|Decorator]] can often benefit from using [[fruit/Coding/Patterns/Design Patterns/catalog/creational/prototype|Prototype]]. Applying the pattern lets you clone complex structures instead of re-constructing them from scratch.

- [[fruit/Coding/Patterns/Design Patterns/catalog/structural/decorator|Decorator]] lets you change the skin of an object, while [[fruit/Coding/Patterns/Design Patterns/catalog/behavioral/strategy|Strategy]] lets you change the guts.

- [[fruit/Coding/Patterns/Design Patterns/catalog/structural/decorator|Decorator]] and [[fruit/Coding/Patterns/Design Patterns/catalog/structural/proxy|Proxy]] have similar structures, but very different intents. Both patterns are built on the composition principle, where one object is supposed to delegate some of the work to another. The difference is that a *Proxy* usually manages the life cycle of its service object on its own, whereas the composition of *Decorators* is always controlled by the client.
