# Dynamic Import

In our chat application, we have four key components: `UserInfo`,
`ChatList`, `ChatInput` and `EmojiPicker`. However, only *three* of
these components are used instantly on the initial page load:
`UserInfo`, `ChatList` and `ChatInput`. The `EmojiPicker` isn't directly
visible, and may not even be rendered at all if the user won't even click on the `Emoji` in order to toggle the `EmojiPicker`. This would mean that we unnecessarily added the `EmojiPicker` module to our initial bundle, which potentially increased the loading time!

In order to solve this, we can *dynamically import* the `EmojiPicker`
component. Instead of statically importing it, we'll only import it when we want to show the `EmojiPicker`. An easy way to dynamically import components in React is by using [**React Suspense**](https://reactjs.org/docs/concurrent-mode-suspense.html). The `React.Suspense` component receives the component that should be dynamically loaded, which makes it possible for the `App` component can render its contents faster by suspending the import of the `EmojiPicker` module! When the user clicks on the emoji, the `EmojiPicker` component gets rendered for the first time. The `EmojiPicker` component renders a `Suspense` component, which receives the lazily imported module: the `EmojiPicker` in this case. The `Suspense` component accepts a `fallback` prop, which receives the component that should get rendered while the suspended component is still loading!

Instead of unnecessarily adding `EmojiPicker` to the initial bundle, we can split it up into its own bundle and reduce the size of the initial bundle!

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609244202/patterns.dev/heheh_shqtb6.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609244202/patterns.dev/heheh_shqtb6.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609244202/patterns.dev/heheh_shqtb6.mp4" type="video/mp4"></video>

A smaller initial bundle size means a faster initial load: the user
doesn't have to stare at a blank loading screen for as long. The
`fallback` component lets the user know that our application hasn't frozen: they simply need to wait a little while for the module to be processed and executed.

```js
Asset                             Size         Chunks            Chunk Names
emoji-picker.bundle.js           1.48 KiB      1    [emitted]    emoji-picker
main.bundle.js                   1.33 MiB      main [emitted]    main
vendors~emoji-picker.bundle.js   171 KiB       2    [emitted]    vendors~emoji-picker
```

Whereas previously the initial bundle was `1.5MiB`, we've been able to reduce it to `1.33 MiB` by suspending the import of the `EmojiPicker`!

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056514/patterns.dev/bundle-splitting-2.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056514/patterns.dev/bundle-splitting-2.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056514/patterns.dev/bundle-splitting-2.mp4" type="video/mp4"></video>

In the console, you can see that the `EmojiPicker` doesn't get executed until we've toggled the `EmojiPicker`!

<iframe src="https://codesandbox.io/p/devbox/dynamicimport-rjcmc?embed=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="dynamicimport"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

When building the application, we can see the different bundles that Webpack created.

By dynamically importing the `EmojiPicker` component, we managed to reduce the initial bundle size from `1.5MiB` to `1.33 MiB`! Although the user may still have to wait a while until the `EmojiPicker` has been fully loaded, we have improved the user experience by making sure the application is rendered and 
interactive while the user waits for the component to load.

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056515/patterns.dev/dynamic-import.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056515/patterns.dev/dynamic-import.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056515/patterns.dev/dynamic-import.mp4" type="video/mp4"></video>

---
## Loadable Components

Server-side rendering doesn't support React Suspense (yet). A good alternative to React Suspense is the [`loadable-components`](https://loadable-components.com/docs/getting-started/) library, which can be used in SSR applications.

<iframe src="https://codesandbox.io/p/devbox/confident-pond-5bil0?embed=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="confident-pond-5bil0"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Similar to React Suspense, we can pass the lazily imported module to the `loadable`, which will only import the module once the `EmojiPicker` module is being requested! While the module is being loaded, we can render a `fallback` component.

Although loadable components are a great alternative to React Suspense for SSR applications, they're also useful in CSR applications in order to suspend the import of modules.

<iframe src="https://codesandbox.io/p/devbox/loadablecomponents-qr6md?embed=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="loadablecomponents"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>