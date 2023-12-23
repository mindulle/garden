# Bundle Splitting

When building a modern web application, bundlers such as
[Webpack](https://webpack.js.org/) or [Rollup](https://rollupjs.org/guide/en/) take an application's source code, and bundle this together into one or more bundles. When a user
visits a website, the bundle is requested and loaded in order to display the data to the user's screen.

JavaScript engines such as [V8](https://v8.dev/docs) are able to parse and compile data that's been requested by the user as it's being loaded.
Although modern browsers have evolved to parse and compile the code as quickly and performantely as possible, the developer is still in charge of optimizing two steps in the process: the loading time and execution time of the requested data. We want to make sure we're keeping the execution time as short as possible to prevent blocking the main thread.

Even though modern browsers are able to stream the bundle as it arrives, it can still take a significant time before the first pixel is painted on the user's device. The bigger the bundle, the longer it can take before the engine reaches the line on which the first rendering call has been made. Until that time, the user has to stare at a blank screen for quite some time, which can be.. highly frustrating!

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056514/patterns.dev/bundle-splitting-1.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056514/patterns.dev/bundle-splitting-1.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056514/patterns.dev/bundle-splitting-1.mp4" type="video/mp4"></video>

We want to display data to the user as quickly as possible. A larger bundle leads to an increased amount of loading time, processing time, and execution time. It would be great if we could reduce the size of this bundle, in order to speed things up.

Instead of requesting one giant bundle that contains unnecessary code, we can split the bundle into multiple smaller bundles!

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056516/patterns.dev/bundle-splitting-7.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056516/patterns.dev/bundle-splitting-7.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056516/patterns.dev/bundle-splitting-7.mp4" type="video/mp4"></video>

By bundle-splitting the application, we can reduce the time it takes to load, process and execute a bundle! By reducing the loading and execution time, we can reduce the time it takes before the first content has been painted on the user's screen, the First Contentful Paint, and the time it takes before the largest component has been rendered to the screen, the Largest Contentful Paint.

Although being able to see data on our screen is great, we don't just want to *see* the content. In order to have a fully functioning
application, we want users to be able to *interact* with it as well! The UI only becomes interactive after the bundle has been loaded and executed. The time it takes before all content has been painted to the screen and has been made interactive, is called the Time To Interactive.

A bigger bundle doesn't necessarily mean a longer execution time. It could happen that we loaded a ton of code that the user won't even use! Maybe some parts of the bundle will only get executed on a certain user interaction, which the user may or may not do!

The engine still has to load, parse and compile code that's not even used on the initial render before the user is able to see anything on their screen. Although the parsing and compilation costs can be practically ignored due to the browser's performant way of handling these two steps, fetching a larger bundle than necessary can hurt the performance of your application. Users on low-end devices or slower networks will see a significant increase in loading time before the bundle has been fetched.

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056515/patterns.dev/bundle-splitting-3.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056515/patterns.dev/bundle-splitting-3.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056515/patterns.dev/bundle-splitting-3.mp4" type="video/mp4"></video>

The first part still had to be loaded and processed, even though the engine only used the last part of the file in order to . Instead of intially requesting parts of the code that don't have a high priority in the current navigation, we can separate this code from the code that's needed in order to render the initial page.

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609244173/patterns.dev/bundlesplits_hp5st4.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609244173/patterns.dev/bundlesplits_hp5st4.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609244173/patterns.dev/bundlesplits_hp5st4.mp4" type="video/mp4"></video>

By bundle-splitting the large bundle into two smaller bundles,
`main.bundle.js` and `emoji-picker.bundle.js`, we reduce the initial
loading time by fetching a smaller amount of data.

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056514/patterns.dev/bundle-splitting-4.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056514/patterns.dev/bundle-splitting-4.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056514/patterns.dev/bundle-splitting-4.mp4" type="video/mp4"></video>

In this project, we'll cover some methods that allow us to bundle-split our application into multiple smaller bundles, and load the resources in the most efficient and performant ways.
