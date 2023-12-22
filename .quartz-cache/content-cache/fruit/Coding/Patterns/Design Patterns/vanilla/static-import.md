---
description: Import code that has been exported by another module
lang: en
---
# Static Import

The `import` keyword allows us to import code that has been exported by another module. By default, all modules we're *statically importing* get added to the initial bundle. A module that is imported by using the default ES2015 import syntax, `import module from 'module'`, is statically imported.

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609244287/patterns.dev/saticimport1_cgh9h6.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609244287/patterns.dev/saticimport1_cgh9h6.jpg" draggable="true"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609244287/patterns.dev/saticimport1_cgh9h6.mp4" type="video/mp4"></video>

Let's look at an example! A simple chat app contains a `Chat` component, in which we're statically importing and rendering three components: `UserProfile`, a `ChatList`, and a `ChatInput` to type and send messages! Within the `ChatInput` module, we're statically importing an `EmojiPicker` component to show be able to show the user the emoji picker when the user toggles the emoji.

<iframe src="https://codesandbox.io/p/devbox/staticimport-b0cgl?embed=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="staticimport"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

The modules get executed as soon as the engine reaches the line on which we import them. When you open the console, you can see the order in which the modules have been loaded!

<iframe src="https://codesandbox.io/embed/bv7cj?view=Editor+%2B+Preview"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="pedantic-keldysh-bv7cj"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Since the components were statically imported, Webpack bundled the modules into the initial bundle. We can see the bundle that Webpack creates after building the application:

```js
Asset           Size      Chunks            Chunk Names
main.bundle.js  1.5 MiB    main  [emitted]  main
```

Our chat application's source code gets bundled into one bundle:
`main.bundle.js`. A large bundle size can affect the loading time of our application significantly depending on the user's device and network connection. Before the `App` component is able to render its contents to the user's screen, it first has to load and parse all modules.

Luckily, there are many ways to speed up the loading time! We don't always have to import all modules at once: maybe there are some modules that should only get rendered based on user interaction, like the `EmojiPicker` in this case, or rendered further down the page. Instead of importing all component statically, we can *dynamically* import the modules after the `App` component has rendered its contents and the user is able to interact with our application.
