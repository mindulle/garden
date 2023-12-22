---
description: Generate HTML to be rendered on the server in response to a user request
lang: en
---
# Server-side Rendering

Server-side rendering (SSR) is one of the oldest methods of rendering web content. SSR generates the full HTML for the page content to be rendered in response to a user request. The content may include data from a datastore or external API.

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1617495417/patterns.dev/serverside-rendering-1.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1617495417/patterns.dev/serverside-rendering-1.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1617495417/patterns.dev/serverside-rendering-1.mp4" type="video/mp4"></video>

The connect and fetch operations are handled on the server. HTML
required to format the content is also generated on the server. Thus, with SSR we can avoid making additional round trips for data fetching and templating. As such, rendering code is not required on the client and the JavaScript corresponding to this need not be sent to the client.

With SSR every request is treated independently and will be processed as a new request by the server. Even if the output of two consecutive requests is not very different, the server will process and generate it from scratch. Since the server is common to multiple users, the processing capability is shared by all active users at a given time.

---
## Classic SSR Implementation

Let us see how you would create a page for displaying the current time using classic SSR and JavaScript.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Time</title>
  </head>
  <body>
    <div>
    <h1>Hello, world!</h1>
    <b> It is <div id=currentTime></div></b>
    </div>
  </body>
</html>
```

```jsx
// index.js
function tick() {
  var d = new Date();
  var n = d.toLocaleTimeString();  
  document.getElementById("currentTime").innerHTML = n;
}

setInterval(tick, 1000);
```

Note how this is different from the CSR code that provides the same output. Also note that, while the HTML is rendered by the server, the time displayed here is the local time on the client as populated by the JavaScript function `tick()`. If you want to display any other data that is server specific, e.g., server time, you will need to embed it in the HTML before it is rendered. This means it will not get refreshed automatically without a round trip to the server.

---
## Pros and Cons

Executing the rendering code on the server and reducing JavaScript
offers the following advantages.

### Lesser JavaScript leads to quicker FCP and TTI

In cases where there are multiple UI elements and application logic on the page, SSR has considerably less JavaScript when compared to CSR. The time required to load and process the script is thus lesser. FP, FCP and TTI are shorter and FCP = TTI. With SSR, users will not be left waiting for all the screen elements to appear and for it to become interactive.

![](https://res.cloudinary.com/ddxwdqwkr/image/upload/f_auto/v1616882714/patterns.dev/renderingwebap--5jmlc7uh2lk.png)

Image Source: <https://developers.google.com/web/updates/2019/02/rendering-on-the-web>

### Provides additional budget for client-side JavaScript

Development teams are required to work with a JS budget that limits the amount of JS on the page to achieve the desired performance. With SSR, since you are directly eliminating the JS required to render the page, it creates additional space for any third party JS that may be required by the application.

### SEO enabled

Search engine crawlers are easily able to crawl the content of an SSR application thus ensuring higher search engine optimization on the page.

SSR works great for static content due to the above advantages. However, it does have a few disadvantages because of which it is not perfect for all scenarios.

### Slow TTFB

Since all processing takes place on the server, the response from the server may be delayed in case of one or more of the following scenarios
- Multiple simultaneous users causing excess load on the server.
- Slow network
- Server code not optimized.

### Full page reloads required for some interactions

Since all code is not available on the client, frequent round trips to
the server are required for all key operations causing full page reloads. This could increase the time between interactions as users are required to wait longer between operations. A single-page application is thus not possible with SSR.

To address these drawbacks, modern frameworks and libraries allow
rendering on both server and client for the same application. We will go into details of these in the following sections. First, let's look at a simpler form of SSR with Next.js.

------------------------------------------------------------------------

### SSR with Next.js

The Next.js framework also supports SSR. This pre-renders a page on the server on every request. It can be accomplished by exporting an async function called [`getServerSideProps()`](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering) from a page as follows.

```jsx
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
```

The context object contains keys for HTTP request and response objects, routing parameters, querystring, locale, etc.

The following implementation shows the use of `getServerSideProps()` for rendering data on a page formatted using React. The full implementation can be found [here](https://medium.com/swlh/fetching-and-hydrating-a-next-js-app-using-getserversideprops-and-getstaticprops-65bfe42afed8).

```jsx
// users/page.jsx

// data fetched from an external data source using `getServerSideProps`

const Users = ({ users, error }) => {
 return (
   <section>
     <header>
       <h1>List of users</h1>
     </header>
     {error && <div>There was an error.</div>}
     {!error && users && (
       <table>
         <thead>
           <tr>
             <th>Username</th>
             <th>Email</th>
             <th>Name</th>
           </tr>
         </thead>
         <tbody>
           {users.map((user, key) => (
             <tr key={key}>
               <td>{user.username}</td>
               <td>{user.email}</td>
               <td>{user.name}</td>
             </tr>
           ))}
         </tbody>
       </table>
     )}
   </section>
 );
};

export async function getServerSideProps() {
// Fetch data from external API
const res = await fetch("https://jsonplaceholder.typicode.com/users")
const data = await res.json();
  // Pass data to the page via props
  return { props: { data } }
}

export default Users;
```


---
## React for the Server

React can be rendered isomorphically, which means that it can function both on the browser as well as other platforms like the server. Thus, UI elements may be rendered on the server using React.

React can also be used with universal code which will allow the same code to run in multiple environments. This is made possible by using Node.js on the server or what is known as a Node server. Thus, universal JavaScript may be used to fetch data on the server and then render it using isomorphic React.

Let us take a look at the react functions that make this possible.

```jsx
ReactDOMServer.renderToString(element);
```

This function returns an HTML string corresponding to the React element. The HTML can then be rendered to the client for a faster page load.

The [`renderToString()`](https://reactjs.org/docs/react-dom-server.html#rendertostring) function may be used with
[`ReactDOM.hydrate()`](https://reactjs.org/docs/react-dom.html#hydrate). This will ensure that the rendered HTML is preserved as-is on the client and only the event handlers attached after load.

To implement this, we use a `.js` file on both client and server
corresponding to every page. The `.js` file on the server will render
the HTML content, and the `.js` file on the client will hydrate it.

Assume you have a React element called `App` which contains the HTML to be rendered defined in the universal `app.js` file. Both the server and client-side React can recognize the `App` element.

The `ipage.js` file on the server can have the code:

```jsx
app.get("/", (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);
});
```

The constant `App` can now be used to generate the HTML to be rendered.
The ipage.js on the client side will have the following to ensure that
the element `App` is hydrated.

```jsx
ReactDOM.hydrate(<App />, document.getElementById("root"));
```

A complete example of SSR with React can be found [here](https://www.digitalocean.com/community/tutorials/react-server-side-rendering).
