# Replace Constructor with Factory Method

### Problem

You have a complex constructor that does something more than just setting parameter values in object fields.

```ts
class Employee {
  constructor(type: number) {
    this.type = type;
  }
  // ...
}
```

### Solution

Create a factory method and use it to replace constructor calls.

```ts
class Employee {
  static create(type: number): Employee {
    let employee = new Employee(type);
    // Do some heavy lifting.
    return employee;
  }
  // ...
}
```

### Why Refactor

The most obvious reason for using this refactoring technique is related to [[fruit/Coding/Refactoring/techniques/organizing-data/replace-type-code-with-subclasses|Replace Type Code with Subclasses]] You have code in which a object was previously created and the value of the coded type was passed to it. After use of the refactoring method, several subclasses have appeared and from them you need to create objects depending on the value of the coded type. Changing the original constructor to make it return subclass objects is impossible, so instead we create a static factory method that will return objects of the necessary classes, after which it replaces all calls to the original constructor.

Factory methods can be used in other situations as well, when
constructors aren't up to the task. They can be important when
attempting to [[fruit/Coding/Refactoring/techniques/organizing-data/change-value-to-reference|Change Value to Reference]] They can also be used to set various creation modes that go beyond the number and types of parameters.

### Benefits

- A factory method doesn't necessarily return an object of the class in which it was called. Often these could be its subclasses, selected based on the arguments given to the method.

- A factory method can have a better name that describes what and how it returns what it does, for example `Troops::GetCrew(myTank)`.

- A factory method can return an already created object, unlike a constructor, which always creates a new instance.

### How to Refactor

1. Create a factory method. Place a call to the current constructor in it.

2. Replace all constructor calls with calls to the factory method.

3. Declare the constructor private.

4. Investigate the constructor code and try to isolate the code not directly related to constructing an object of the current class, moving such code to the factory method.
