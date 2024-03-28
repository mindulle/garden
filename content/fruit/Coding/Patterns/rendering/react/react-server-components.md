---
description: Server Components compliment SSR, rendering to an intermediate abstraction without needing to add to the JavaScript bundle
lang: en
---
# React Server Components

The React team are working on [zero-bundle-size React Server
Components](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html), which aim to enable **modern UX with a server-driven mental model**. This is quite different to Server-side Rendering (SSR) of components and could result in significantly
[smaller](https://twitter.com/sophiebits/status/1341098388062756867) client-side JavaScript bundles.

The direction of this work is exciting, and while it isn't yet
production ready, is worth keeping on your radar. The following
resources may be of interest:

- The [RFC](https://github.com/reactjs/rfcs/blob/bf51f8755ddb38d92e23ad415fc4e3c02b95b331/text/0000-server-components.md) is worth reading as is [Dan and Lauren's talk](https://www.youtube.com/watch?v=TQQPAU21ZUw&feature=emb_title) worth watching.
- [React 18 status for Next.js](https://nextjs.org/docs/advanced-features/react-18) and the [Server Components roadmap for Next.js](https://github.com/vercel/next.js/discussions/31263)
- [React 18 beta status](https://twitter.com/reactjs/status/1460380211262930948)
- [Shopify Hydrogen and Server Components](https://shopify.dev/custom-storefronts/hydrogen/framework/react-server-components)

---
## Server-side rendering limitations

Today's Server-side rendering of client-side JavaScript can be
suboptimal. JavaScript for your components is rendered on the server into an HTML string. This HTML is delivered to the browser, which can appear to result in a fast First Contentful Paint or Largest Contentful Paint.

However, JavaScript still needs to be fetched for interactivity which is often achieved via a hydration step. Server-side rendering is generally used for the initial page load, so post-hydration you're unlikely to see it used again.

**Note:**

While it's true that one could build a server-only React app leveraging SSR and avoiding hydrating on the client at all, heavy interactivity in the model often involves stepping outside of React. The hybrid model that Server Components enable will allow deciding this on a per-component basis.

With React Server Components, our components can be refetched regularly. An application with components which rerender when there is new data can be run on the server, limiting how much code needs to be sent to the client.

> \[RFC\]: Developers constantly have to make choices about using  third-party packages. Using a package to render some markdown or format a date is convenient for us as developers, but it increases code size and hurts performance for our users

```jsx
// NoteWithMarkdown.js
// *Before* Server Components
import marked from "marked"; // 35.9K (11.2K gzipped)
import sanitizeHtml from "sanitize-html";

function NoteWithMarkdown({text}) {
  const html = sanitizeHtml(marked(text));
  return (/* render */);
}
```


---
## Server Components

React's new Server Components compliment Server-side rendering, enabling rendering into an intermediate abstraction format without needing to add to the JavaScript bundle. This both allows merging the server-tree with the client-side tree without a loss of state and enables scaling up to more components.

Server Components are not a replacement for SSR. When paired together, they support quickly rendering in an intermediate format, then having Server-side rendering infrastructure rendering this into HTML enabling early paints to still be fast. We SSR the Client components which the Server components emit, similar to how SSR is used with other data-fetching mechanisms.

This time however, the JavaScript bundle will be significantly smaller. Early explorations have shown that bundle size wins could be significant (-18-29%), but the React team will have a clearer idea of wins in the wild once further infrastructure work is complete.

> \[RFC\]: If we migrate the above example to a Server Component we can use the exact same code for our feature but avoid sending it to the client - a code savings of over 240K (uncompressed):

```jsx
// NoteWithMarkdown.server.js
import marked from "marked"; // zero bundle size
import sanitizeHtml from "sanitize-html"; //zero bundle size

function NoteWithMarkdown({text}) {
  // same as before
}
```

---
## Automatic Code-Splitting

It's been considered a best-practice to only serve code users need as they need it by using code-splitting. This allows you to break your app down into smaller bundles requiring less code to be sent to the client. Prior to Server Components, one would manually use `React.lazy()` to define "split-points" or rely on a heuristic set by a meta-framework, such as routes/pages to create new chunks.

```jsx
// PhotoRenderer.js
// *Before* Server Components

import React from "react";

// one of these will start loading *when rendered on the client*:
const OldPhotoRenderer = React.lazy(() => import("./OldPhotoRenderer.js"));

const NewPhotoRenderer = React.lazy(() => import("./NewPhotoRenderer.js"));

function Photo(props) {
  // Switch on feature flags, logged in/out, type of content, etc:
  if (FeatureFlags.useNewPhotoRenderer) {
    return <NewPhotoRenderer {...props} />;
  } else {
    return <PhotoRenderer {...props} />;
  }
}
```

**Some of the challenges with code-splitting are:**

- Outside of a meta-framework (like Next.js), you often have to tackle this optimization manually, replacing `import` statements with dynamic imports.
- It might delay when the application begins loading the component impacting the user-experience.

Server Components introduce automatic code-splitting treating all normal imports in Client components as possible code-split points. They also allow developers to select which component to use much earlier (on the server), allowing the client to fetch it earlier in the rendering process.

```jsx
// PhotoRenderer.server.js
import React from "react";

// one of these will start loading *once rendered and streamed to the client*:
import OldPhotoRenderer from "./OldPhotoRenderer.client.js";
import NewPhotoRenderer from "./NewPhotoRenderer.client.js";

function Photo(props) {
  // Switch on feature flags, logged in/out, type of content, etc:
  if (FeatureFlags.useNewPhotoRenderer) {
  	return <NewPhotoRenderer {...props} />;
  } else {
    return <PhotoRenderer {...props} />;
  }
}
```

---
## Will Server Components replace Next.js SSR?

No. They are quite different. Initial adoption of Server Components will actually be experimented with via meta-frameworks such as Next.js as research and experimentation continue.

To summarize a [good explanation](https://news.ycombinator.com/item?id=25499171) of the differences between Next.js SSR and Server Components from Dan Abramov:

-  **Code for Server Components is never delivered to the client.** In many implementations of SSR using React, component code gets sent to the client via JavaScript bundles anyway. This can delay interactivity.
-  **Server components enable access to the back-end from anywhere in the tree.** When using Next.js, you're used to accessing the back-end via getServerProps() which has the limitation of only working at the top-level page. Random npm components are unable to do this.
- **Server Components may be refetched while maintaining Client-side state inside of the tree.** This is because the main transport mechanism is much richer than just HTML, allowing the refetching of a server-rendered part (e.g such as a search result list) without blowing away state inside (e.g search input text, focus, text selection)

Some of the early integration work for Server Components will be done via a webpack plugin which:
- Locates all Client components
- Creates a mapping between IDs =\> chunk URLs
- A Node.js loader replaces imports to Client components with references to this map.
- Some of this work will require deeper integrations (e.g with pieces such as Routing) which is why getting this to work with a framework like Next.js will be valuable.

As Dan notes, one of the goals of this work is to enable meta-frameworks to get much better.

---
## Learn more and share feedback with the React team

To learn more about this work, [watch the talk from Dan and
Lauren](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html), read the [RFC](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html) and do check out the [Server Components
demo](http://github.com/reactjs/server-components-demo) to play around with this work. With thanks to Sebastian Markbåge, Lauren Tan, Joseph Savona and Dan Abramov for their work on Server Components.

**Interesting relevant threads:**

-  [Lauren Tan on Server Components](https://twitter.com/sugarpirate_/status/1341141198258524163)
-  [Sophie Alpert explaining them](https://twitter.com/sophiebits/status/1341098388062756867)
-  [Sebastian Markbåge with a discussion on hydration](https://twitter.com/sebmarkbage/status/1341102430147276803)
-   [HN discussion thread](https://news.ycombinator.com/item?id=25497065)
