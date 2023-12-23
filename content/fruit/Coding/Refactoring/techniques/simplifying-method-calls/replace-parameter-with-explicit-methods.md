# Replace Parameter with Explicit Methods

### Problem

A method is split into parts, each of which is run depending on the value of a parameter.

```ts
 setValue(name: string, value: number): void {
  if (name.equals("height")) {
    height = value;
    return;
  }
  if (name.equals("width")) {
    width = value;
    return;
  }
  
}
```

### Solution

Extract the individual parts of the method into their own methods and call them instead of the original method.

```ts
setHeight(arg: number): void {
  height = arg;
}
setWidth(arg: number): number {
  width = arg;
}
```

### Why Refactor

A method containing parameter-dependent variants has grown massive. Non-trivial code is run in each branch and new variants are added very rarely.

### Benefits

- Improves code readability. It's much easier to understand the purpose of `startEngine()` than `setValue("engineEnabled", true)`.

### When Not to Use

- Don't replace a parameter with explicit methods if a method is rarely changed and new variants aren't added inside it.

### How to Refactor

1. For each variant of the method, create a separate method. Run these methods based on the value of a parameter in the main method.

2. Find all places where the original method is called. In these places, place a call for one of the new parameter-dependent variants.

3. When no calls to the original method remain, delete it.
