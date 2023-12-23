---
description: How to use combine streaming server-side rendering with a new approach to hydration, selective hydration
lang: en
---
# Selective Hydration
In [[fruit/Coding/Patterns/rendering/react/server-side-rendering|previous articles]], we covered how SSR with hydration
can improve user experience. React is able to (quickly) generate a tree on the server using the `renderToString` method that the `react-dom/server` library provides, which gets sent to the client after the entire tree has been generated. The rendered HTML is non interactive, until the JavaScript bundle has been fetched and loaded, after which React walks down the tree to hydrate and attaches the handlers.

However, this approach can lead to some performance issues due to some limitations with the current implementation.

Before the server-rendered HTML tree is able to get sent to the client, all components need to be ready. This means that components that may rely on an external API call or any process that could cause some delays, might end up blocking smaller components from being rendered quickly.

Besides a slower tree generation, another issue is the fact that React
only hydrates the tree once. This means that before React is able to
hydrate any of the components, it needs to have fetched the JavaScript for all of the components before it's able to hydrate any of them. This means that smaller components (with smaller bundles) have to wait for the larger components's code to be fetched and loaded, until React is able to hydrate anything on your website. During this time, the website remained non-interactive.

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1631144761/patterns.dev/selective-hydration-before.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1631144761/patterns.dev/selective-hydration-before.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1631144761/patterns.dev/selective-hydration-before.mp4" type="video/mp4"></video>

React 18 solves these problems by allowing us to combine streaming server-side rendering with a new approach to hydration: Selective Hydration!

---

Instead of using the `renderToString` method that we covered earlier, we can now stream render HTML using the new `pipeToNodeStream` method on the server.

This method, in combination with the `createRoot` method and `Suspense`, makes it possible to start streaming HTML without having to wait for the larger components to be ready. This means that we can lazy-load components when using SSR, which wasn't (really) possible before!

```jsx
// server.js
import { pipeToNodeStream } from "react-dom/server";

export function render(res) {
  const data = createServerData();
  const { startWriting, abort } = pipeToNodeWritable(
	<DataProvider data={data}>
	  <App assets={assets} />
	</DataProvider>,
	res,
	{
	  onReadyToStream() {
	    res.setHeader('Content-type', 'text/html');
	    res.write('<!DOCTYPE html>');
	    startWriting();
	  }
	} 
  )
}
```

```jsx
// App.js
import { Suspense, lazy } from "react";
import Loader from "./Loader";

const Comments = lazy() => import("./Comments");

function App() {
  return (
    <main>
      <Header />
      <Suspense fallback={<Loader />}>
        <Comments />
      </Suspense>
      <Footer />
    </main>
  )
}
``` 

```jsx
// idnex.js
import { hydrateRoot } from "react-dom";
import App from './App';

hydrateRoot(document, <App />);
```

*This is a simplified example inspired by [this codesandbox](https://codesandbox.io/s/festive-star-9hfqt?file=/src/index.js:193-320)*

The `Comments` component, which earlier slowed down the tree generation and TTI, is now wrapped in `Suspense`. This tells React to not let this component slow down the rest of the tree generation. Instead, React inserts the fallback components as the initially rendered HTML, and continues to generate the rest of the tree before it's sent to the client.

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/eo_9/v1631144841/patterns.dev/selective-hydration-after.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/eo_9/v1631144841/patterns.dev/selective-hydration-after.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/eo_9/v1631144841/patterns.dev/selective-hydration-after.mp4" type="video/mp4"></video>

In the meantime, we're still fetching the external data that we need for the `Comments` component.

Selective hydration makes it possible to already hydrate the components that were sent to the client, even before the `Comments` component has been sent!

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/eo_12/v1631144841/patterns.dev/selective-hydration-after.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/eo_12/v1631144841/patterns.dev/selective-hydration-after.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/eo_12/v1631144841/patterns.dev/selective-hydration-after.mp4" type="video/mp4"></video>

Once the data for the `Comments` component is ready, React starts streaming the HTML for this component, as well as a small `<script>` to replace the fallback loader.

React starts the hydration after the new HTML has been injected.

---
<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1631147513/patterns.dev/selective-hydration-after-2.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1631147513/patterns.dev/selective-hydration-after-2.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1631147513/patterns.dev/selective-hydration-after-2.mp4" type="video/mp4"></video>
React 18 fixes some issues that people often encountered when using SSR with React.

Streaming rendering allows you to start streaming components as soon as they're ready, without risking a slower FCP and TTI due to components that might take longer to generate on the server.

Components can be hydrated as soon as they're streamed to the client, since we no longer have to wait for all JavaScript to load to start hydrating and can start interacting with the app before all components have been hydrated.

---
## References
-   [New Suspense SSR Architecture in React 18](https://github.com/reactwg/react-18/discussions/37)
