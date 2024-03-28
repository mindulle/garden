# PRPL Pattern

Making our applications globally accessible can be a challenge! We have to make sure the application is performant on low-end devices and in regions with a poor internet connectivity. In order to make sure our application can load as efficiently as possible in difficult conditions, we can use the PRPL pattern.

The PRPL pattern focuses on four main performance considerations:

- Pushing critical resources efficiently, which minimizes the amount of roundtrips to the server and reducing the loading time.
- Rendering the initial route soon as possible to improve the user experience
- Pre-caching assets in the background for frequently visited routes to minimize the amount of requests to the server and enable a better offline experience
- Lazily loading routes or assets that aren't requested as frequently

---

When we want to visit a website, we first have to make a request to the server in order to get those resources. The file that the entrypoint points to gets returned from the server, which is usually our application's initial HTML file! The browser's HTML parser starts to parse this data as soon as it starts receiving it from the server. If the parser discovers that more resources are needed, such as stylesheets or scripts, another HTTP request is sent to the server in order to get those resources!

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056522/patterns.dev/prpl-1.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056522/patterns.dev/prpl-1.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056522/patterns.dev/prpl-1.mp4" type="video/mp4"></video>

Having to repeatedly request the resources isn't optimal, as we're trying to minimize the amount of round trips between the client and the server!

---

For a long time, we used HTTP/1.1 in order to communicate between the client and the server. Although HTTP/1.1 introduced many improvement compared to HTTP/1.0, such as being able to keep the TCP connection between the client and the server alive before a new HTTP requests gets sent with the `keep-alive` header, there were still some issues that had
to be solved!

HTTP/2 introduced some significant changes compared to HTTP/1.1, which make it easier for us to optimize the message exchange between the client and the server.

Whereas HTTP/1.1 used a newline delimited plaintext protocol in the requests and responses, HTTP/2 splits the requests and responses up in smaller pieces called frames. An HTTP request that contains headers and a body field gets split into at least two frames: a headers frame, and a data frame!

HTTP/1.1 had a maximum amount of 6 TCP connections between the client and the server. Before a new request can get sent over the same TCP connection, the previous request has to be resolved! If the previous request is taking a long time to resolve, this request is blocking the other requests from being sent. This common issue is called head of line blocking, and can increase the loading time of certain resources!

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056523/patterns.dev/prpl-2.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056523/patterns.dev/prpl-2.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056523/patterns.dev/prpl-2.mp4" type="video/mp4"></video>

HTTP/2 makes use of bidirectional streams, which makes it possible to have one single TCP connection that includes multiple bidirectional streams, which can carry multiple request and response frames between the client and the server!

Once the server has received all request frames for that specific
request, it reassembles them and generates response frames. These response frames are sent back to the client, which reassembles them. Since the stream is bidirectional, we can send both request and response frames over the same stream.

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056517/patterns.dev/jspat-33_jplbsx.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056517/patterns.dev/jspat-33_jplbsx.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056517/patterns.dev/jspat-33_jplbsx.mp4" type="video/mp4"></video>

HTTP/2 solves head of line blocking by allowing multiple requests to get sent on the same TCP connection before the previous request resolves!

---

HTTP/2 also introduced a more optimized way of fetching data, called server push. Instead of having to explicitly ask for resources each time by sending an HTTP request, the server can send the additional resources automatically, by "pushing" these resources.

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056516/patterns.dev/jspat-35_c4gbkp.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056516/patterns.dev/jspat-35_c4gbkp.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056516/patterns.dev/jspat-35_c4gbkp.mp4" type="video/mp4"></video>

After the client has received the additional resources, the resources will get stored in browser cache. When the resources get discovered while parsing the entry file, the browser can quickly get the resources from cache instead of having to make an HTTP request to the server!

Although pushing resources reduces the amount of time to receive additional resources, server push is not HTTP cache aware! The pushed resources won't be available to us the next time we visit the website, and will have to be requested again. In order to solve this, the PRPL pattern uses [service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) after the initial load to cache those resources in order to make sure
the client isn't making unnecessary requests.

---

As the authors of a site, we usually know what resources are critical to fetch early on, while browsers do their best to guess this. Luckily, we can help the browser by adding a `preload` resource hint to the critical resources!

By telling the browser that you'd like to preload a certain resource, you're telling the browser that you would like to fetch it sooner than the browser would otherwise discover it! Preloading is a great way to optimize the time it takes to load resources that are critical for the current route.

Although preloading resources are a great way to reduce the amount of roundtrips and optimize loading time, pushing too many files can be harmful. The browser's cache is limited, and you may be unnecessarily using bandwidth by requesting resources that weren't actually needed by the client.

---

The PRPL pattern focuses on optimizing the initial load. No other
resources get loaded before the initial route has loaded and rendered completely!

We can achieve this by code-splitting our application into small,
performant bundles. Those bundles should make it possible for the users to only load the resources they need, when they need it, while also maximizing cachability!

Caching larger bundles can be an issue. It can happen that multiple bundles share the same resources.

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609244265/patterns.dev/prpl3_g4o2u7.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609244265/patterns.dev/prpl3_g4o2u7.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609244265/patterns.dev/prpl3_g4o2u7.mp4" type="video/mp4"></video>

A browser has a hard time identifying which parts of the bundle are shared between multiple routes, and can therefore not cache these resources. Caching resources is important to reduce the number of roundtrips to the server, and to make our application offline-friendly!

When working with the PRPL pattern, we need to make sure that the bundles we're requesting contain the minimal amount of resources we need at that time, and are cachable by the browser. In some cases, this could mean that having no bundles at all would be more performant, and we could simply work with unbundled modules!

The benefit of being able to dynamically request minimal resources by bundling an application can easily be mocked by configuring the browser and server to support HTTP/2 push, and caching the resources efficiently. For browsers that don't support HTTP/2 server push, we can create a build that is optimized to minimize the amount of roundtrips. The client doesn't have to know whether it's receiving a bundled or unbundled resource: the server delivers the appropriate build for each browser.

---
The PRPL pattern often uses an app shell as its main entry point, which is a minimal file that contains most of the application's logic and is shared between routes! It also contains the application's router, which can dynamically request the necessary resources.

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056517/patterns.dev/jspat-37_rtrlqd.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056517/patterns.dev/jspat-37_rtrlqd.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056517/patterns.dev/jspat-37_rtrlqd.mp4" type="video/mp4"></video>

The PRPL pattern makes sure that no other resources get requested or rendered before the initial route is visible on the user's device. Once the initial route has been loaded successfully, a server worker can get installed in order to fetch the resources for the other frequently visited routes in the background!

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056518/patterns.dev/jspat-38_pmsq5u.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056518/patterns.dev/jspat-38_pmsq5u.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056518/patterns.dev/jspat-38_pmsq5u.mp4" type="video/mp4"></video>

Since this data is being fetched in the background, the user won't experience any delays. If a user wants to navigate to a frequently visited route that's been cached by the service worker, the service worker can quickly get the required resources from cache instead of having to send a request to the server.

Resources for routes that aren't as frequently visited can be
dynamically imported.

