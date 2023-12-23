# Replace Exception with Test

### Problem

You throw an exception in a place where a simple test would do the job?

```ts
getValueForPeriod(periodNumber: number): number {
  try {
    return values[periodNumber];
  } catch (ArrayIndexOutOfBoundsException e) {
    return 0;
  }
}
```

### Solution

Replace the exception with a condition test.

```ts
getValueForPeriod(periodNumber: number): number {
  if (periodNumber >= values.length) {
    return 0;
  }
  return values[periodNumber];
}
```

### Why Refactor

Exceptions should be used to handle irregular behavior related to an unexpected error. They shouldn't serve as a replacement for testing. If an exception can be avoided by simply verifying a condition before running, then do so. Exceptions should be reserved for real errors.

For instance, you entered a minefield and triggered a mine there,
resulting in an exception; the exception was successfully handled and you were lifted through the air to safety beyond the mine field. But you could have avoided this all by simply reading the warning sign in front of the minefield to begin with.

### Benefits

- A simple conditional can sometimes be more obvious than exception handling code.

### How to Refactor

1. Create a conditional for an edge case and move it before the try/catch block.

2. Move code from the `catch` section inside this conditional.

3. In the `catch` section, place the code for throwing a usual unnamed exception and run all the tests.

4. If no exceptions were thrown during the tests, get rid of the `try`/`catch` operator.
