---
description: Intercept and control interactions to target objects
lang: en
---
# Proxy Pattern

With a Proxy object, we get more control over the interactions with certain objects. A proxy object can determine the behavior whenever we're interacting with the object, for example when we're getting a value, or setting a value.

Generally speaking, a proxy means a stand-in for someone else. Instead of speaking to that person directly, you'll speak to the proxy person who will represent the person you were trying to reach. The same happens in JavaScript: instead of interacting with the target object directly, we'll interact with the Proxy object.

------------------------------------------------------------------------

Let's create a `person` object, that represents John Doe.

```js
const person = {
  name: "John Doe",
  age: 42,
  nationality: "American",
};
```

Instead of interacting with this object directly, we want to interact
with a proxy object. In JavaScript, we can easily create a new proxy by creating a new instance of `Proxy`.

```js
const person = {
  name: "John Doe",
  age: 42,
  nationality: "American",
};

const personProxy = new Proxy(person, {});
```

The second argument of `Proxy` is an object that represents the
*handler*. In the handler object, we can define specific behavior based on the type of interaction. Although there are [many
methods](https://developer.mozilla.org/en-US/docs/Web/JavaScrip /Reference/Global_Objects/Proxy)  that you can add to the Proxy handler, the two most common ones are `get` and `set`:

- `get`: Gets invoked when trying to **access** a property
- `set`: Gets invoked when trying to **modify** a property

Effectively, what will end up happening is the following:

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056520/patterns.dev/jspat-51_xvbob9.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056520/patterns.dev/jspat-51_xvbob9.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056520/patterns.dev/jspat-51_xvbob9.mp4" type="video/mp4"></video>

Instead of interacting with the `person` object directly, we'll be
interacting with the `personProxy`.

Let's add handlers to the `personProxy` Proxy. When trying to modify a property, thus invoking the `set` method on the `Proxy`, we want the proxy to log the previous value and the new value of the property. When trying to access a property, thus invoking the `get` method on the `Proxy`, we want the proxy to log a more readable sentence that contains the key and value of the property.

```js
const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${obj[prop]}`);
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    obj[prop] = value;
  },
});
```

Perfect! Let's see what happens when we're trying to modify or retrieve a property.

<iframe src="https://codesandbox.io/embed/rkgyo?view=Editor+%2B+Preview"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="proxy-1"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

When accessing the `name` property, the Proxy returned a better sounding sentence: `The value of name is John Doe`.

When modifying the `age` property, the Proxy returned the previous and new value of this property: `Changed age from 42 to 43`.

------------------------------------------------------------------------

A proxy can be useful to add **validation**. A user shouldn't be able to change `person`'s age to a string value, or give them an empty name. Or if the user is trying to access a property on the object that doesn't exist, we should let the user know.

```js
const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      console.log(
        `Hmm.. this property doesn't seem to exist on the target object`
      );
    } else {
      console.log(`The value of ${prop} is ${obj[prop]}`);
    }
  },
  set: (obj, prop, value) => {
    if (prop === "age" && typeof value !== "number") {
      console.log(`Sorry, you can only pass numeric values for age.`);
    } else if (prop === "name" && value.length < 2) {
      console.log(`You need to provide a valid name.`);
    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`);
      obj[prop] = value;
    }
  },
});
```

Let's see what happens when we're trying to pass faulty values!

<iframe src="https://codesandbox.io/embed/dgk2v?view=Editor+%2B+Preview"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="proxy-2"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

The proxy made sure that we weren't modifying the `person` object with faulty values, which helps us keep our data pure!

------------------------------------------------------------------------

## `Reflect`

JavaScript provides a built-in object called `Reflect`, which makes it easier for us to manipulate the target object when working with proxies.

Previously, we tried to modify and access properties on the target
object within the proxy through directly getting or setting the values with bracket notation. Instead, we can use the `Reflect` object. The methods on the `Reflect` object have the same name as the methods on the `handler` object.

Instead of accessing properties through `obj[prop]` or setting
properties through `obj[prop] = value`, we can access or modify
properties on the target object through `Reflect.get()` and
`Reflect.set()`. The methods receive the same arguments as the methods on the handler object.

```js
const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    Reflect.set(obj, prop, value);
  },
});
```

Perfect! We can access and modify the properties on the target object easily with the `Reflect` object.

<iframe src="https://codesandbox.io/embed/o1hjx?view=Editor+%2B+Preview"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="proxy-3"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

------------------------------------------------------------------------

## Tradeoffs

Proxies are a powerful way to add control over the behavior of an
object. A proxy can have various use-cases: it can help with validation, formatting, notifications, or debugging.

Overusing the `Proxy` object or performing heavy operations on each `handler` method invocation can easily affect the performance of your application negatively. It's best to not use proxies for performance-critical code.


## References
- [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) - MDN
- [JavaScript Proxy](https://davidwalsh.name/javascript-proxy) - David Walsh
- [Awesome ES2015 Proxy](https://github.com/mikaelbr/awesome-es2015-proxy) - GitHub @mikaelbr  
- [Thoughts on ES6 Proxies Performance](http://thecodebarbarian.com/thoughts-on-es6-proxies-performance) - Valeri Karpov
