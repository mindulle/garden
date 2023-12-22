---
description: Split up your code into smaller, reusable pieces
lang: en
---
# Module Pattern

As your application and codebase grow, it becomes increasingly important to keep your code maintainable and separated. The module pattern allows you to split up your code into smaller, reusable pieces.

Besides being able to split your code into smaller reusable pieces,
modules allow you to keep certain values within your file *private*.
Declarations within a module are scoped (*encapsulated*) to that module, by default. If we don't explicitly export a certain value, that value is not available outside that module. This reduces the risk of name collisions for values declared in other parts of your codebase, since the values are not available on the global scope.

------------------------------------------------------------------------

## ES2015 Modules

ES2015 introduced built-in JavaScript modules. A module is a file
containing JavaScript code, with some difference in behavior compared to a normal script.

Let's look at an example of a module called **`math.js`**, containing
mathematical functions.

```js
// main.js
function add(x, y) {
  return x + y;
}

function multiply(x) {
  return x * 2;
}

function subtract(x, y) {
  return x - y;
}

function square(x) {
  return x * x;
}
```

```js
// index.js
console.log(add(2, 3));
console.log(multiply(2));
console.log(subtract(2, 3));
console.log(square(2));
```

We have a **`math.js`** file containing some simple mathematical logic. We have functions that allow users to add, multiply, subtract, and get the square of values that they pass.

However, we don't just want to use these functions in the **`math.js`**
file, we want to be able to reference them in the **`index.js`** file!
Currently, an error gets thrown inside the **`index.js`** file: there
are no functions within the **`index.js`** file called **`add`**, **`subtract`**, **`multiply`** or **`square`**. We are trying to reference functions that are not available in the **`index.js`** file.

In order to make the functions from **`math.js`** available to other
files, we first have to *export* them. In order to export code from a
module, we can use the **`export`** keyword. One way of exporting the functions, is by using *named exports*: we can simply add the **`export`** keyword in front of the parts that we want to publicly expose. In this case, we'll want to add the **`export`** keyword in front of every function, since **`index.js`** should have access to all four functions.

```js
// main.js
export function add(x, y) {
  return x + y;
}

export function multiply(x) {
  return x * 2;
}

export function subtract(x, y) {
  return x - y;
}

export function square(x) {
  return x * x;
}
```

We just made the **`add`**, **`multiply`**, **`subtract`**, and **`square`** functions exportable! However, just exporting the values from a module is not enough to make them publicly available to all files. In order to be able to use the exported values from a module, you have to explicitly *import* them in the file that needs to reference them.

We have to import the values on top of the **`index.js`** file, by using
the **`import`** keyword. To let javascript know from which module we want to import these functions, we need to add a **`from`** value and the relative path to the module.

```js
import { add, multiply, subtract, square } from "./math.js";
```

```js
// math.js
export function add(x, y) {
  return x + y;
}

export function multiply(x) {
  return x * 2;
}

export function subtract(x, y) {
  return x - y;
}

export function square(x) {
  return x * x;
}
```

We just imported the four functions from the **`math.js`** module in the **`index.js`** file! Let's try and see if we can use the functions now!

<iframe src="https://codesandbox.io/embed/7t2cp?view=Editor+%2B+Preview"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="module-pattern-2"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

The reference error is gone, we can now use the exported values from the module!

A great benefit of having modules, is that we *only have access to the values that we explicitly exported* using the **`export`** keyword. Values that we didn't explicitly export using the **`export`** keyword, are only available within that module.

Let's create a value that should only be referencable within the
**`math.js`** file, called **`privateValue`**.

```js
// main.js
const privateValue = "This is a value private to the module!";

export function add(x, y) {
  return x + y;
}

export function multiply(x) {
  return x * 2;
}

export function subtract(x, y) {
  return x - y;
}

export function square(x) {
  return x * x;
}
```

```js
// index.js
import { add, multiply, subtract, square } from "./math.js";
```

Notice how we didn't add the **`export`** keyword in front of
**`privateValue`**. Since we didn't export the **`privateValue`**
variable, we don't have access to this value outside of the
**`math.js`** module!

```js
// index.js
import { add, multiply, subtract, square } from "./math.js";

console.log(privateValue);

/* Error: privateValue is not defined */
```

```js
// main.js
const privateValue = "This is a value private to the module!";

export function add(x, y) {
  return x + y;
}

export function multiply(x) {
  return x * 2;
}

export function subtract(x, y) {
  return x - y;
}

export function square(x) {
  return x * x;
}
```

By keeping the value private to the module, there is a reduced risk of accidentally polluting the global scope. You don't have to fear that you will accidentally overwrite values created by developers using your module, that may have had the same name as your private value: it prevents naming collisions.

------------------------------------------------------------------------

Sometimes, the names of the exports could collide with local values.

```js
// main.js
import { add, multiply, subtract, square } from "./math.js";

function add(...args) {
  return args.reduce((acc, cur) => cur + acc);
} /* Error: add has  already been declared */

function multiply(...args) {
  return args.reduce((acc, cur) => cur * acc);
}

/* Error: multiply has already been declared */
```

```js
// math.js
const privateValue = "This is a value private to the module!";

export function add(x, y) {
  return x + y;
}

export function multiply(x) {
  return x * 2;
}

export function subtract(x, y) {
  return x - y;
}

export function square(x) {
  return x * x;
}
```

In this case, we have functions called **`add`** and **`multiply`** in **`index.js`**. If we would import values with the same name, it would end up in a naming collision: **`add`** and **`multiply`** have already been declared! Luckily, we can *rename* the imported values, by using the **`as`** keyword.

Let's rename the imported **`add`** and **`multiply`** functions to **`addValues`** and **`multiplyValues`**.

```js
// index.js
import {
  add as addValues,
  multiply as multiplyValues,
  subtract,
  square
} from "./math.js";

function add(...args) {
  return args.reduce((acc, cur) => cur + acc);
}

function multiply(...args) {
  return args.reduce((acc, cur) => cur * acc);
}

/* From math.js module */
addValues(7, 8);
multiplyValues(8, 9);
subtract(10, 3);
square(3);

/* From index.js file */
add(8, 9, 2, 10);
multiply(8, 9, 2, 10);
```

```js
// math.js
const privateValue = "This is a value private to the module!";

export function add(x, y) {
  return x + y;
}

export function multiply(x) {
  return x * 2;
}

export function subtract(x, y) {
  return x - y;
}

export function square(x) {
  return x * x;
}
```

Besides named exports, which are exports defined with just the
**`export`** keyword, you can also use a *default export*. You can only
have **one** default export per module.

Let's make the **`add`** function our default export, and keep the other functions as named exports. We can export a default value, by adding **`export default`** in front of the value.

```js
// math.js
export default function add(x, y) {
  return x + y;
}

export function multiply(x) {
  return x * 2;
}

export function subtract(x, y) {
  return x - y;
}

export function square(x) {
  return x * x;
}
```

The difference between named exports and default exports, is the way the value is exported from the module, effectively changing the way we have to import the value.

Previously, we had to use the brackets for our named exports:
**`import { module } from 'module'`**. With a default export, we can
import the value *without* the brackets: **`import module from 'module'`**.

```js
// idnex.js
import add, { multiply, subtract, square } from "./math.js";

add(7, 8);
multiply(8, 9);
subtract(10, 3);
square(3);
```

```js
// math.js
export default function add(x, y) {
  return x + y;
}

export function multiply(x) {
  return x * 2;
}

export function subtract(x, y) {
  return x - y;
}

export function square(x) {
  return x * x;
}
```

The value that's been imported from a module without the brackets, is always the value of the default export, if there is a default export available.

Since JavaScript knows that this value is always the value that was
exported by default, we can give the imported default value another name than the name we exported it with. Instead of importing the **`add`** function using the name **`add`**, we can call it **`addValues`**, for example.

```js
// index.js
import addValues, { multiply, subtract, square } from "./math.js";

addValues(7, 8);
multiply(8, 9);
subtract(10, 3);
square(3);
```

```js
// math.js
export default function add(x, y) {
  return x + y;
}

export function multiply(x) {
  return x * 2;
}

export function subtract(x, y) {
  return x - y;
}

export function square(x) {
  return x * x;
}
```

Even though we exported the function called `add`, we can import it calling it anything we like, since JavaScript knows you are importing the default export.

We can also import all exports from a module, meaning all named exports *and* the default export, by using an asterisk **`*`** and giving the name we want to import the module as. The value of the import is equal to an object containing all the imported values. Say that I want to import the entire module as **`math`**.

The imported values are properties on the **`math`** object.

```js
// index.js
import * as math from "./math.js";

math.default(7, 8);
math.multiply(8, 9);
math.subtract(10, 3);
math.square(3);
```

```js
// math.js
export default function add(x, y) {
  return x + y;
}

export function multiply(x) {
  return x * 2;
}

export function subtract(x, y) {
  return x - y;
}

export function square(x) {
  return x * x;
}
```

In this case, we're importing *all* exports from a module. Be careful
when doing this, since you may end up unnecessarily importing values.

Using the **`*`** only imports all exported values. Values private to
the module are still not available in the file that imports the module, unless you explicitly exported them.

------------------------------------------------------------------------

## React

When building applications with React, you often have to deal with a large amount of components. Instead of writing all of these components in one file, we can separate the components in their own files, essentially creating a module for each component.

We have a basic todo-list, containing a *list*, *list items*, an *input
field*, and a *button*.

<iframe src="https://codesandbox.io/embed/ipcyb?view=Editor+%2B+Preview"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="module-pattern-3"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

We just split our components in their separate files:
-  `TodoList.js` for the **`List`** component
-  `Button.js` for the *customized* **`Button`** component
-  `Input.js` for the *customized* **`Input`** component.

Throughout the app, we don't want to use the default **`Button`** and
**`Input`** component, imported from the [**`material-ui`**](https://material-ui.com/) library. Instead, we want to use our custom version of the components, by adding custom styles to it defined in the **`styles`** object in their files. Rather than importing the default **`Button`** and **`Input`** component each time in our application and adding custom styles to it over and over, we can now simply import the default **`Button`** and **`Input`** component once, add styles, and export our custom component.

<iframe src="https://codesandbox.io/embed/ipcyb?view=Editor+%2B+Preview"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="module-pattern-3"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Notice how we have an object called **`style`** in both **`Button.js`**
and **`Input.js`**. Since this value is *module-scoped*, we can reuse
the variable name without risking a name collision.

------------------------------------------------------------------------

## Dynamic import

When importing all modules on the top of a file, all modules get loaded before the rest of the file. In some cases, we only need to import a module based on a certain condition. With a **dynamic import**, we can import modules on demand.

```js
import("module").then((module) => {
  module.default();
  module.namedExport();
});

// Or with async/await
(async () => {
  const module = await import("module");
  module.default();
  module.namedExport();
})();
```

Let's dynamically import the **`math.js`** example used in the previous paragraphs.

The module only gets loaded, if the user clicks on the button.

<iframe src="https://codesandbox.io/embed/j60fl?view=Editor+%2B+Preview"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="module-pattern-4"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

By dynamically importing modules, we can reduce the page load time. We only have to load, parse, and compile the code that the user really needs, *when* the user needs it.

Besides being able to import modules on-demand, the **`import()`**
function can receive an expression. It allows us to pass template
literals, in order to dynamically load modules based on a given value.

<iframe src="https://codesandbox.io/embed/otztc?view=Editor+%2B+Preview"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="module-pattern-5"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

In the above example, the **`date.js`** module only gets imported if the user clicks on the **Click to load dates** button. The **`date.js`** module imports the third-party **`moment`** module, which only gets imported when the **`date.js`** module gets loaded. If the user didn't need to show the dates, we can avoid loading this third-party library altogether.

Each image gets loaded after the user clicks on the **Click to load
image** button. The images are local **`.png`** files, which get loaded
based on the value of **`num`** that we pass to the string.

```js
const res = await import(`../assets/dog${num}.png`);
```

This way, we're not dependent on hard-coded module paths. It adds flexibility to the way you can import modules based on user input, data received from an external source, the result of a function, and so on.

------------------------------------------------------------------------

With the module pattern, we can encapsulate parts of our code that should not be publicly exposed. This prevents accidental name collision and global scope pollution, which makes working with multiple dependencies and namespaces less risky. In order to be able to use ES2015 modules in all JavaScript runtimes, a transpiler such as [Babel](https://babeljs.io/) is needed.
