---
description: Generate HTML to be rendered on the server in response to a user request
lang: en
---
# Streaming Server-Side Rendering

We can reduce the Time To Interactive while still server rendering our application by *streaming server rendering* the contents of our
application. Instead of generating one large HTML file containing the necessary markup for the current navigation, we can split it up into smaller chunks! Node streams allow us to stream data into the response object, which means that we can continuously send data down to the client. The moment the client receives the chunks of data, it can start rendering the contents.

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056525/patterns.dev/ssr-1.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056525/patterns.dev/ssr-1.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056525/patterns.dev/ssr-1.mp4" type="video/mp4"></video>

React's built-in `renderToNodeStream` makes it possible for us to send
our application in smaller chunks. As the client can start painting the UI when it's still receiving data, we can create a very performant
first-load experience. Calling the `hydrate` method on the received DOM nodes will attach the corresponding event handlers, which makes the UI interactive!

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056525/patterns.dev/ssr-2.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056525/patterns.dev/ssr-2.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056525/patterns.dev/ssr-2.mp4" type="video/mp4"></video>

Let's say we have an app that shows the user thousands of cat facts in the `App` component!

<iframe src="https://codesandbox.io/p/devbox/serverstream-fc8op?embed=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="serverstream"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

The `App` component gets stream rendered using the built-in
`renderToNodeStream` method. The initial HTML gets sent to the response object alongside the chunks of data from the App component,

<iframe src="https://codesandbox.io/p/devbox/serverstream-fc8op?embed=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="serverstream"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

This data contains useful information that our app has to use in order to render the contents correctly, such as the title of the document and a stylesheet. If we were to server render the `App` component using the `renderToString` method, we would have had to wait until the application has received all data before it can start loading and processing this metadata. To speed this up, `renderToNodeStream` makes it possible for the app to start loading and processing this information as it's still receiving the chunks of data from the App component!

> To see more examples on how to implement Progressive Hydration and Server Rendering, visit [this GitHub repo](https://github.com/GoogleChromeLabs/progressive-rendering-frameworks-samples).

> [See how styled-components use streaming rendering to optimize the delivery of stylesheets](https://medium.com/styled-components/v3-1-0-such-perf-wow-many-streams-c45c434dbd03)

---
## Concepts

Like progressive hydration, streaming is another rendering mechanism that can be used to improve SSR performance. As the name suggests, streaming implies chunks of HTML are streamed from the node server to the client as they are generated. As the client starts receiving "bytes" of HTML earlier even for large pages, the TTFB is reduced and relatively constant. All major browsers start parsing and rendering streamed content or the partial response earlier. As the rendering is progressive, it results in a fast FP and FCP.

Streaming responds well to network backpressure. If the network is
clogged and not able to transfer any more bytes, the renderer gets a signal and stops streaming till the network is cleared up. Thus, the
server uses less memory and is more responsive to I/O conditions. This enables your Node.js server to render multiple requests at the same time and prevents heavier requests from blocking lighter requests for a long time. As a result, the site stays responsive even in challenging conditions.

---
## React for Streaming

React introduced support for streaming in React 16 released in 2016. The following API's were included in the ReactDOMServer to support streaming.

1.  **[`ReactDOMServer.renderToNodeStream(element)`](https://reactjs.org/docs/react-dom-server.html#rendertonodestream)**: The output HTML from this function is the same as [`ReactDOMServer.renderToString(element)`](https://reactjs.org/docs/react-dom-server.html#rendertostring) but is in a Node.js [readablestream](https://nodejs.org/api/stream.html#stream_readable_streams)format instead of a string. The function will only work on the server to render HTML as a stream. The client receiving this stream can subsequently call [ReactDOM.hydrate()](https://reactjs.org/docs/react-dom.html#hydrate) to hydrate the page and make it interactive.

2. **[`ReactDOMServer.renderToStaticNodeStream(element)`](https://reactjs.org/docs/react-dom-server.html#rendertostaticnodestream)**: This corresponds to [`ReactDOMServer.renderToStaticMarkup(element)`](https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup). The HTML output is the same but in a stream format. It can be used for rendering static, non-interactive pages on the server and then streaming them to the client.

The readable stream output by both functions can emit bytes once you start reading from it. This can be achieved by piping the readable stream to a writable stream such as the response object. The response object progressively sends chunks of data to the client while waiting for new chunks to be rendered.

Putting it all together, let us now look at the code skeleton for this
as published [here](https://mxstbr.com/thoughts/streaming-ssr/).

<iframe src="https://codesandbox.io/p/devbox/serverstream-fc8op?embed=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="serverstream"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

A comparison between TTFB and First Meaningful Paint for normal SSR Vs Streaming is available in the following image.

![](https://res.cloudinary.com/ddxwdqwkr/image/upload/f_auto/v1616883053/patterns.dev/renderingwebap--03wnu5khnrzr.png)

Image Source: <https://mxstbr.com/thoughts/streaming-ssr/>

---
## Streaming SSR - Pros and Cons

Streaming aims to improve the speed of SSR with React and provides the following benefits

1.  **Performance Improvement:** As the first byte reaches the client soon after rendering starts on the server, the TTFB is better than that for SSR. it is also more consistent irrespective of the page size. Since the client can start parsing HTML as soon as it receives it, the FP and FCP are also lower.

2.  **Handling of Backpressure**: Streaming responds well to network backpressure or congestion and can result in responsive websites even under challenging conditions.

3.  **Supports SEO**: The streamed response can be read by search engine crawlers, thus allowing for SEO on the website.

It is important to note that streaming implementation is not a simple find-replace from `renderToString` to `renderToNodeStream()`. There are cases where the code that works with SSR may not work as-is with streaming. Following are some examples where migration may not be easy.

1.  Frameworks that use the server-render-pass to generate markup that needs to be added to the document before the SSR-ed chunk. Examples are frameworks that dynamically determine which CSS to add to the page in a preceding `<style>` tag, or frameworks that add elements to the document `<head>` while rendering. A workaround for this has been discussed [here](https://medium.com/styled-components/v3-1-0-such-perf-wow-many-streams-c45c434dbd03#:~:text=Streaming%20server%2Dside%20rendering%20was,handle%20back%2Dpressure%20more%20easily.).
2. Code, where renderToStaticMarkup is used to generate the page template and renderToString calls are embedded to generate dynamic content. Since the string corresponding to the component is expected in these cases, it cannot be replaced by a stream. An example of such code provided
    [here](https://hackernoon.com/whats-new-with-server-side-rendering-in-react-16-9b0d78585d67) is as follows.

```jsx
res.write("<!DOCTYPE html>");

res.write(renderToStaticMarkup(
 <html>
   <head>
     <title>My Page</title>
   </head>
   <body>
     <div id="content">
       { renderToString(<MyPage/>) }
     </div>
   </body>
 </html>);
```

Both Streaming and Progressive Hydration can help to bridge the gap between a pure SSR and a CSR experience. Let us now compare all the patterns that we have explored and try to understand their suitability for different situations.
