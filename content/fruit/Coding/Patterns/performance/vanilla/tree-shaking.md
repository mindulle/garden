# Tree Shaking

It can happen that we add code to our bundle that isn't used anywhere in our application. This piece of dead code can be eliminated in order to reduce the size of the bundle, and prevent unnecessarily loading more data! The process of eliminating dead code before adding it to our bundle, is called tree-shaking.

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609244309/patterns.dev/treeshakey_o2glkx.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609244309/patterns.dev/treeshakey_o2glkx.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609244309/patterns.dev/treeshakey_o2glkx.mp4" type="video/mp4"></video>

Although tree-shaking works for simple modules like the `math` module, there are some cases in which tree-shaking can be tricky.

## Concepts

Tree shaking is aimed at removing code that will never be used from a final JavaScript bundle. When done right, it can reduce the size of your JavaScript bundles and lower download, parse and (in some cases) execution time. For most modern JavaScript apps that use a module bundler (like webpack or Rollup), your bundler is what you would expect to automatically remove dead code. ⁣⁣ ⁣⁣

Consider your application and its dependencies as an abstract syntax tree (we want to "shake" the syntax tree to optimize it). Each node in the tree is a dependency that gives your app functionality. In Tree shaking, input files are treated as a graph. Each node in the graph is a top level statement which is called a "part" in the code. Tree shaking is a graph traversal which starts from the entry point and marks any traversed paths for inclusion.⁣⁣ ⁣⁣

Every component can declare symbols, reference symbols, and rely on other files. Even the "parts" are marked as having side effects or not. For example, the statement `let firstName = 'Jane'` has no side effects because the statement can be removed without any observed difference if nothing needs firstName. But the statement `let firstName = getName()` has side effects, because the call to `getName()` can not be removed without changing the meaning of the code, even if nothing needs firstName. ⁣⁣

## Imports

Only modules defined with the ES2015 module syntax (`import` and `export`) can be tree-shaken. The way you import modules specifies whether the module can be tree-shaken or not.

Tree shaking starts by visiting all parts of the entry point file with
side effects, and proceeds to traverse the edges of the graph until new sections are reached. Once the traversal is completed, the JavaScript bundle includes only the parts that were reached during the traversal. The other pieces are left out. ⁣ ⁣⁣ Let's say we define the following `utilities.js` file:⁣⁣ ⁣⁣

```js
export function read(props) {⁣⁣
    return props.book⁣⁣
}⁣⁣
⁣⁣
export function nap(props) {⁣⁣
   return props.winks⁣⁣
}⁣⁣
```

⁣⁣ Then we have the following index.js file:⁣⁣ ⁣⁣

```js
import { read } from 'utilities';⁣⁣
⁣⁣
eventHandler = (e) => {⁣⁣
  read({ book: e.target.value })⁣⁣
}⁣⁣
```

⁣⁣ In this example, `nap()` isn't important and therefore won't be
included in the bundle.

## Side Effects

When we're importing an ES6 module, this module gets executed instantly. It could happen that although we're not referencing the module's exports anywhere in our code, the module itself affects the global scope while it's being executed (polyfills or global stylesheets, for example). This is called a **side effect**. Although we're not referencing the exports of the module itself, *if* the module has exported values to begin with,
the module cannot be tree-shaken due to the special behavior when it's being imported!

The Webpack documentation gives a [clear explanation on
tree-shaking](https://webpack.js.org/guides/tree-shaking/#clarifying-tree-shaking-and-sideeffects) and how to avoid breaking it.
