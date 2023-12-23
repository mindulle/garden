# Import On Visibility

Besides user interaction, we often have components that aren't visible
on the initial page. A good example of this is lazy loading images that
aren't directly visible in the viewport, but only get loaded once the
user scrolls down.

As we're not requesting all images instantly, we can reduce the initial
loading time. We can do the same with components! In order to know
whether components are currently in our viewport, we can use the
[`IntersectionObserver`
API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API),
or use libraries such as `react-lazyload` or `react-loadable-visibility`
to quickly add import on visibility to our application.

<div>

::: {#showPreview-true .grid-cp .false style="grid-template-columns:repeat(2, 50%)"}
::: {#grid-top-left}
::: {.tab .file-titles}
::: {.file-title .active-true}
JavaScript icon

ChatInput.js
:::

::: {.file-title .active-false}
JavaScript icon

ChatList.js
:::

::: {.file-title .active-false}
icon-square-big

webpack.config.js
:::
:::
:::

::: {#grid-bottom-left}
::: {.codeblock}

``` {.prism-code .language-jsx style="color:#F8F8F2;background-color:#24292F !important;padding:1rem;border-radius:0;height:100%"}
1import React from "react";2import Send from "./icons/Send";3import Emoji from "./icons/Emoji";4import LoadableVisibility from "react-loadable-visibility/react-loadable";5
6const EmojiPicker = LoadableVisibility({7  loader: () => import("./EmojiPicker"),8  loading: <p id="loading">Loading</p>9});10
11const ChatInput = () => {12  const [pickerOpen, togglePicker] = React.useReducer(state => !state, false);13
14  return (15    <div className="chat-input-container">16      <input type="text" placeholder="Type a message..." />17      <Emoji onClick={togglePicker} />18      {pickerOpen && <EmojiPicker />}19      <Send />20    </div>21  );22};23
24console.log("ChatInput loading", Date.now());25
26export default ChatInput;
```

:::
:::

::: {#grid-top-right}
::: {#preview-tab .tab .file-preview}
[Open CodeSandbox](https://codesandbox.io/embed/onvisibility-4ew4f)
:::
:::

::: {#grid-bottom-right}
::: {.code-preview}
:::
:::
:::

</div>

Whenever the `EmojiPicker` is rendered to the screen, after the user
clicks on the Gif button, `react-loadable-visibility` detects that the
`EmojiPicker` element should be visible on the screen. Only then, it
will start importing the module while the user sees a loading component
being rendered.

This fallback component to let the user know that our application hasn't
frozen: they simply need to wait a short while for the module to be
loaded, parsed, compiled, and executed!
:::
:::
