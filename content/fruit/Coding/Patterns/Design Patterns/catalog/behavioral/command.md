# Command
**Also known as**: Action, Transaction

##  Intent
**Command** is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request's execution, and support undoable operations.

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/content/command/command-en.png?id=80fbadc666cf3b9b1958c546d2746ca4"
srcset="https://refactoring.guru/images/patterns/content/command/command-en-2x.png?id=6149af804cbbbd5cb18595c30b856d89 2x"
width="640" alt="Command design pattern" />
</figure>
## Problem

Imagine that you're working on a new text-editor app. Your current task is to create a toolbar with a bunch of buttons for various operations of the editor. You created a very neat `Button` class that can be used for buttons on the toolbar, as well as for generic buttons in various dialogs.

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/diagrams/command/problem1.png?id=84189315a0e8d91da262792979005ab4"
srcset="https://refactoring.guru/images/patterns/diagrams/command/problem1-2x.png?id=af4c4e9c1d1b4fa2c4104c5f6bb18719 2x"
loading="lazy" width="230"
alt="Problem solved by the Command pattern" />
<figcaption><p>All buttons of the app are derived from the
same class.</p></figcaption>
</figure>

While all of these buttons look similar, they're all supposed to do
different things. Where would you put the code for the various click handlers of these buttons? The simplest solution is to create tons of subclasses for each place where the button is used. These subclasses would contain the code that would have to be executed on a button click.

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/diagrams/command/problem2.png?id=f0e33da1842b3a3ee3b4857de0b6ec93"
srcset="https://refactoring.guru/images/patterns/diagrams/command/problem2-2x.png?id=5eea7d0f6247da011150bb63e423f405 2x"
loading="lazy" width="400" alt="Lots of button subclasses" />
<figcaption><p>Lots of button subclasses. What can
go wrong?</p></figcaption>
</figure>

Before long, you realize that this approach is deeply flawed. First, you have an enormous number of subclasses, and that would be okay if you weren't risking breaking the code in these subclasses each time you modify the base `Button` class. Put simply, your GUI code has become awkwardly dependent on the volatile code of the business logic.

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/diagrams/command/problem3-en.png?id=1fbd56ae7ba3e3dfac45cfa2de6db450"
srcset="https://refactoring.guru/images/patterns/diagrams/command/problem3-en-2x.png?id=e06878f7cfbe4131980c68db2904878e 2x"
loading="lazy" width="480"
alt="Several classes implement the same functionality" />
<figcaption><p>Several classes implement the
same functionality.</p></figcaption>
</figure>

And here's the ugliest part. Some operations, such as copying/pasting text, would need to be invoked from multiple places. For example, a user could click a small "Copy" button on the toolbar, or copy something via the context menu, or just hit `Ctrl+C` on the keyboard.

Initially, when our app only had the toolbar, it was okay to place the implementation of various operations into the button subclasses. In other words, having the code for copying text inside the `CopyButton` subclass was fine. But then, when you implement context menus, shortcuts, and other stuff, you have to either duplicate the operation's code in many classes or make menus dependent on buttons, which is an even worse option.

## Solution

Good software design is often based on the *principle of separation of concerns*, which usually results in breaking an app into layers. The most common example: a layer for the graphical user interface and another layer for the business logic. The GUI layer is responsible for rendering a beautiful picture on the screen, capturing any input and showing results of what the user and the app are doing. However, when it comes to doing something important, like calculating the trajectory of the moon or composing an annual report, the GUI layer delegates the work
to the underlying layer of business logic.

In the code it might look like this: a GUI object calls a method of a
business logic object, passing it some arguments. This process is
usually described as one object sending another a *request*.

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/diagrams/command/solution1-en.png?id=ec37db1713fe2c1a9318886590667cfb"
srcset="https://refactoring.guru/images/patterns/diagrams/command/solution1-en-2x.png?id=d66717631fdebf5fae4d28c6c942e5d4 2x"
loading="lazy" width="470"
alt="The GUI layer may access the business logic layer directly" />
<figcaption><p>The GUI objects may access the business logic
objects directly.</p></figcaption>
</figure>

The Command pattern suggests that GUI objects shouldn't send these requests directly. Instead, you should extract all of the request details, such as the object being called, the name of the method and the list of arguments into a separate *command* class with a single method that triggers this request.

Command objects serve as links between various GUI and business logic objects. From now on, the GUI object doesn't need to know what business logic object will receive the request and how it'll be processed. The GUI object just triggers the command, which handles all the details.

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/diagrams/command/solution2-en.png?id=63bcac5cde2ec536c3329eff4c385839"
srcset="https://refactoring.guru/images/patterns/diagrams/command/solution2-en-2x.png?id=b530f7b00b40ed7d3445b91c08009b10 2x"
loading="lazy" width="550"
alt="Accessing the business logic layer via a command." />
<figcaption><p>Accessing the business logic layer via
a command.</p></figcaption>
</figure>

The next step is to make your commands implement the same interface. Usually it has just a single execution method that takes no parameters. This interface lets you use various commands with the same request sender, without coupling it to concrete classes of commands. As a bonus, now you can switch command objects linked to the sender, effectively changing the sender's behavior at runtime.

You might have noticed one missing piece of the puzzle, which is the request parameters. A GUI object might have supplied the business-layer object with some parameters. Since the command execution method doesn't have any parameters, how would we pass the request details to the receiver? It turns out the command should be either pre-configured with this data, or capable of getting it on its own.

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/diagrams/command/solution3-en.png?id=c92f6874b95de46b041499d41234b00b"
srcset="https://refactoring.guru/images/patterns/diagrams/command/solution3-en-2x.png?id=c12bb9971d1ba4f8a3d3717bbced2859 2x"
loading="lazy" width="440"
alt="The GUI objects delegate the work to commands" />
<figcaption><p>The GUI objects delegate the work
to commands.</p></figcaption>
</figure>

Let's get back to our text editor. After we apply the Command pattern, we no longer need all those button subclasses to implement various click behaviors. It's enough to put a single field into the base `Button` class that stores a reference to a command object and make the button execute that command on a click.

You'll implement a bunch of command classes for every possible operation and link them with particular buttons, depending on the buttons' intended behavior.

Other GUI elements, such as menus, shortcuts or entire dialogs, can be implemented in the same way. They'll be linked to a command which gets executed when a user interacts with the GUI element. As you've probably guessed by now, the elements related to the same operations will be linked to the same commands, preventing any code duplication.

As a result, commands become a convenient middle layer that reduces coupling between the GUI and business logic layers. And that's only a fraction of the benefits that the Command pattern can offer!

##  Real-World Analogy
<figure class="image">
<img
src="https://refactoring.guru/images/patterns/content/command/command-comic-1.png?id=551df832f445080976f3116e0dc120c9"
srcset="https://refactoring.guru/images/patterns/content/command/command-comic-1-2x.png?id=47b3c00b2cfbda7157a1ed9da6ce2948 2x"
loading="lazy" width="600" alt="Making an order in a restaurant" />
<figcaption><p>Making an order in a restaurant.</p></figcaption>
</figure>

After a long walk through the city, you get to a nice restaurant and sit at the table by the window. A friendly waiter approaches you and quickly takes your order, writing it down on a piece of paper. The waiter goes to the kitchen and sticks the order on the wall. After a while, the order gets to the chef, who reads it and cooks the meal accordingly. The cook places the meal on a tray along with the order. The waiter discovers the tray, checks the order to make sure everything is as you wanted it, and brings everything to your table.

The paper order serves as a command. It remains in a queue until the chef is ready to serve it. The order contains all the relevant
information required to cook the meal. It allows the chef to start
cooking right away instead of running around clarifying the order
details from you directly.



##  Structure



<figure class="image">
<img
src="https://refactoring.guru/images/patterns/diagrams/command/structure.png?id=1cd7833638f4c43630f4a84017d31195"
class="structure-img-non-indexed d-none d-xl-block"
srcset="https://refactoring.guru/images/patterns/diagrams/command/structure-2x.png?id=1dfaa84354ffe49ef7ad46ce069482d2 2x"
loading="lazy" width="630"
alt="Structure of the Command design pattern" /><img
src="https://refactoring.guru/images/patterns/diagrams/command/structure-indexed.png?id=95529d7282dc7bc1c5bc443423b1cf4f"
class="structure-img-indexed d-xl-none"
srcset="https://refactoring.guru/images/patterns/diagrams/command/structure-indexed-2x.png?id=e4cc286a44768c7d060af33497da7df6 2x"
loading="lazy" width="640"
alt="Structure of the Command design pattern" />
</figure>
1.  The **Sender** class (aka *invoker*) is responsible for initiating
    requests. This class must have a field for storing a reference to a command object. The sender triggers that command instead of sending the request directly to the receiver. Note that the sender isn't responsible for creating the command object. Usually, it gets a pre-created command from the client via the constructor.

2.  The **Command** interface usually declares just a single method for executing the command.

3.  **Concrete Commands** implement various kinds of requests. A
    concrete command isn't supposed to perform the work on its own, but rather to pass the call to one of the business logic objects. However, for the sake of simplifying the code, these classes can be merged.

    Parameters required to execute a method on a receiving object can be declared as fields in the concrete command. You can make command objects immutable by only allowing the initialization of these fields via the constructor.

4.  The **Receiver** class contains some business logic. Almost any
    object may act as a receiver. Most commands only handle the details of how a request is passed to the receiver, while the receiver itself does the actual work.

5.  The **Client** creates and configures concrete command objects. The client must pass all of the request parameters, including a receiver instance, into the command's constructor. After that, the resulting command may be associated with one or multiple senders.




##  Pseudocode

In this example, the **Command** pattern helps to track the history of executed operations and makes it possible to revert an operation if needed.

<figure class="image">
<img
src="https://refactoring.guru/images/patterns/diagrams/command/example.png?id=1f42c8395fe54d0e409026b91881e2a0"
srcset="https://refactoring.guru/images/patterns/diagrams/command/example-2x.png?id=ed44dfd9b02eccf1ae7e2714d018ed36 2x"
loading="lazy" width="640"
alt="Structure of the Command pattern example" />
<figcaption><p>Undoable operations in a text editor.</p></figcaption>
</figure>

Commands which result in changing the state of the editor (e.g., cutting and pasting) make a backup copy of the editor's state before executing an operation associated with the command. After a command is executed, it's placed into the command history (a stack of command objects) along with the backup copy of the editor's state at that point. Later, if the user needs to revert an operation, the app can take the most recent command from the history, read the associated backup of the editor's state, and restore it.

The client code (GUI elements, command history, etc.) isn't coupled to concrete command classes because it works with commands via the command interface. This approach lets you introduce new commands into the app without breaking any existing code.

```ts
// The base command class defines the common interface for all
// concrete commands.
abstract class Command is
    protected field app: Application
    protected field editor: Editor
    protected field backup: text

    constructor Command(app: Application, editor: Editor) is
        this.app = app
        this.editor = editor

    // Make a backup of the editor&#39;s state.
    method saveBackup() is
        backup = editor.text

    // Restore the editor&#39;s state.
    method undo() is
        editor.text = backup

    // The execution method is declared abstract to force all
    // concrete commands to provide their own implementations.
    // The method must return true or false depending on whether
    // the command changes the editor&#39;s state.
    abstract method execute()


// The concrete commands go here.
class CopyCommand extends Command is
    // The copy command isn&#39;t saved to the history since it
    // doesn&#39;t change the editor&#39;s state.
    method execute() is
        app.clipboard = editor.getSelection()
        return false

class CutCommand extends Command is
    // The cut command does change the editor&#39;s state, therefore
    // it must be saved to the history. And it&#39;ll be saved as
    // long as the method returns true.
    method execute() is
        saveBackup()
        app.clipboard = editor.getSelection()
        editor.deleteSelection()
        return true

class PasteCommand extends Command is
    method execute() is
        saveBackup()
        editor.replaceSelection(app.clipboard)
        return true

// The undo operation is also a command.
class UndoCommand extends Command is
    method execute() is
        app.undo()
        return false


// The global command history is just a stack.
class CommandHistory is
    private field history: array of Command

    // Last in...
    method push(c: Command) is
        // Push the command to the end of the history array.

    // ...first out
    method pop():Command is
        // Get the most recent command from the history.


// The editor class has actual text editing operations. It plays
// the role of a receiver: all commands end up delegating
// execution to the editor&#39;s methods.
class Editor is
    field text: string

    method getSelection() is
        // Return selected text.

    method deleteSelection() is
        // Delete selected text.

    method replaceSelection(text) is
        // Insert the clipboard&#39;s contents at the current
        // position.


// The application class sets up object relations. It acts as a
// sender: when something needs to be done, it creates a command
// object and executes it.
class Application is
    field clipboard: string
    field editors: array of Editors
    field activeEditor: Editor
    field history: CommandHistory

    // The code which assigns commands to UI objects may look
    // like this.
    method createUI() is
        // ...
        copy = function() { executeCommand(
            new CopyCommand(this, activeEditor)) }
        copyButton.setCommand(copy)
        shortcuts.onKeyPress("Ctrl+C", copy)

        cut = function() { executeCommand(
            new CutCommand(this, activeEditor)) }
        cutButton.setCommand(cut)
        shortcuts.onKeyPress("Ctrl+X", cut)

        paste = function() { executeCommand(
            new PasteCommand(this, activeEditor)) }
        pasteButton.setCommand(paste)
        shortcuts.onKeyPress("Ctrl+V", paste)

        undo = function() { executeCommand(
            new UndoCommand(this, activeEditor)) }
        undoButton.setCommand(undo)
        shortcuts.onKeyPress("Ctrl+Z", undo)

    // Execute a command and check whether it has to be added to
    // the history.
    method executeCommand(command) is
        if (command.execute())
            history.push(command)

    // Take the most recent command from the history and run its
    // undo method. Note that we don&#39;t know the class of that
    // command. But we don&#39;t have to, since the command knows
    // how to undo its own action.
    method undo() is
        command = history.pop()
        if (command != null)
            command.undo()</code></pre>
```

##  Applicability

🐞 Use the Command pattern when you want to parametrize objects with operations.

⚡ The Command pattern can turn a specific method call into a stand-alone object. This change opens up a lot of interesting uses: you can pass commands as method arguments, store them inside other objects, switch linked commands at runtime, etc.

Here's an example: you're developing a GUI component such as a context menu, and you want your users to be able to configure menu items that trigger operations when an end user clicks an item.

🐞 Use the Command pattern when you want to queue operations, schedule their execution, or execute them remotely.

⚡ As with any other object, a command can be serialized, which means converting it to a string that can be easily written to a file or a database. Later, the string can be restored as the initial command object. Thus, you can delay and schedule command execution. But there's even more! In the same way, you can queue, log or send commands over the network.



🐞 Use the Command pattern when you want to implement reversible operations.



⚡ Although there are many ways to implement undo/redo, the Command pattern is perhaps the most popular of all.

To be able to revert operations, you need to implement the history of performed operations. The command history is a stack that contains all executed command objects along with related backups of the application's state.

This method has two drawbacks. First, it isn't that easy to save an
application's state because some of it can be private. This problem can be mitigated with the [[fruit/Coding/Patterns/Design Patterns/catalog/behavioral/memento|Memento]] pattern.

Second, the state backups may consume quite a lot of RAM. Therefore, sometimes you can resort to an alternative implementation: instead of restoring the past state, the command performs the inverse operation. The reverse operation also has a price: it may turn out to be hard or even impossible to implement.

##  How to Implement

1.  Declare the command interface with a single execution method.

2.  Start extracting requests into concrete command classes that
    implement the command interface. Each class must have a set of fields for storing the request arguments along with a reference to the actual receiver object. All these values must be initialized via the command's constructor.

3.  Identify classes that will act as *senders*. Add the fields for
    storing commands into these classes. Senders should communicate with their commands only via the command interface. Senders usually don't create command objects on their own, but rather get them from the client code.

4.  Change the senders so they execute the command instead of sending a request to the receiver directly.

5.  The client should initialize objects in the following order:

    - Create receivers.
    - Create commands, and associate them with receivers if needed.
    - Create senders, and associate them with specific commands.



##  Pros and Cons
### Pros
- *Single Responsibility Principle*. You can decouple classes that invoke operations from classes that perform these operations.
- *Open/Closed Principle*. You can introduce new commands into the app without breaking existing client code.
- You can implement undo/redo.
- You can implement deferred execution of operations.
- You can assemble a set of simple commands into a complex one.

### Cons
- The code may become more complicated since you're introducing a whole new layer between senders and receivers.

##  Relations with Other Patterns

- [[fruit/Coding/Patterns/Design Patterns/catalog/behavioral/chain-of-responsibility|Chain Of Responsibility]], [[fruit/Coding/Patterns/Design Patterns/catalog/behavioral/command|Command]], [[fruit/Coding/Patterns/Design Patterns/catalog/behavioral/mediator|Mediator]] and, [[fruit/Coding/Patterns/Design Patterns/catalog/behavioral/observer|Observer]] address various ways of connecting senders and receivers of requests:
    - *Chain of Responsibility* passes a request sequentially along a dynamic chain of potential receivers until one of them handles it. 
    - *Command* establishes unidirectional connections between senders and receivers. 
    - *Mediator* eliminates direct connections between senders and receivers, forcing them to communicate indirectly via a mediator object.
    - *Observer* lets receivers dynamically subscribe to and        unsubscribe from receiving requests.

- Handlers in [[fruit/Coding/Patterns/Design Patterns/catalog/behavioral/chain-of-responsibility|Chain Of Responsibility]] can be implemented as [[fruit/Coding/Patterns/Design Patterns/catalog/behavioral/command|Commands]]. In this case, you can execute a lot of different operations over the same context object, represented by a request.

	However, there's another approach, where the request itself is a *Command* object. In this case, you can execute the same operation in a series of different contexts linked into a chain.

- You can use [Command](/design-patterns/command) and [Memento](/design-patterns/memento) together when implementing "undo". In this case, commands are responsible for performing various operations over a target object, while mementos save the state of that object just before a command gets executed.

- [[fruit/Coding/Patterns/Design Patterns/catalog/behavioral/command|Command]] and [[fruit/Coding/Patterns/Design Patterns/catalog/behavioral/strategy|Strategy]] may look similar because you can use both to parameterize an object with some action. However, they have very different intents.
	- You can use *Command* to convert any operation into an object. The operation's parameters become fields of that object. The conversion lets you defer execution of the operation, queue it, store the history of commands, send commands to remote services, etc.

	- On the other hand, *Strategy* usually describes different ways of doing the same thing, letting you swap these algorithms within a single context class.

- [[fruit/Coding/Patterns/Design Patterns/catalog/creational/prototype|Prototype]] can help when you need to save copies of [[fruit/Coding/Patterns/Design Patterns/catalog/behavioral/command|Commands]] into history.

- You can treat [[fruit/Coding/Patterns/Design Patterns/catalog/behavioral/visitor|Visitor]] as a powerful version of the [[fruit/Coding/Patterns/Design Patterns/catalog/behavioral/command|Command]] pattern. Its objects can execute operations over various objects of different classes.
