---
description: Deliver pre-rendered HTML content that was generated when the site was built
lang: en
---
# Static Rendering

Based on our discussion on SSR, we know that a high request processing time on the server negatively affects the TTFB. Similarly, with CSR, a large JavaScript bundle can be detrimental to the FCP, LCP and TTI of the application due to the time taken to download and process the script.

Static rendering or static generation (SSG) attempts to resolve these
issues by delivering pre-rendered HTML content to the client that was generated when the site was built.

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1617429548/patterns.dev/static-generation-1.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1617429548/patterns.dev/static-generation-1.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1617429548/patterns.dev/static-generation-1.mp4" type="video/mp4"></video>

A static HTML file is generated ahead of time corresponding to each route that the user can access. These static HTML files may be available on a server or a CDN and fetched as and when requested by the client.

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1617496085/patterns.dev/static-generation-2.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1617496085/patterns.dev/static-generation-2.jpg"><source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1617496085/patterns.dev/static-generation-2.mp4" type="video/mp4"></video>

Static files may also be cached thereby providing greater resiliency.
Since the HTML response is generated in advance, the processing time on the server is negligible thereby resulting in a faster TTFB and better performance. In an ideal scenario, client-side JS should be minimal and static pages should become interactive soon after the response is received by the client. As a result, SSG helps to achieve a faster FCP/TTI.

![](https://res.cloudinary.com/ddxwdqwkr/image/upload/f_auto/v1617497570/patterns.dev/Screen_Shot_2021-04-03_at_5.52.41_PM.png)

---

## Basic Structure
As the name suggests, static rendering is ideal for static content,
where the page need not be customized based on the logged-in user (e.g personalized recommendations). Thus static pages like the '*About us*', '*Contact us*', *Blog* pages for websites or product pages for e-commerce apps, are ideal candidates for static rendering. Frameworks like Next.js, Gatsby, and VuePress support static generation. Let us start with this simple [Next.js example](https://vercel.com/blog/nextjs-server-side-rendering-vs-static-generation#about-us-page-static-generation-without-data)
of static content rendering without any data.

**Next.js:**

```js
// pages/about.js

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      {/* ... */}
    </div>
  );
}
```

When the site is built (using `next build`), this page will be pre-rendered into an HTML file `about.html` accessible at the route `/about`.

---
## SSG with Data

Static content like that in 'About us' or 'Contact us' pages may be
rendered as-is without getting data from a data-store. However, for
content like individual blog pages or product pages, the data from a data-store has to be merged with a specific template and then rendered to HTML at build time.

The number of HTML pages generated will depend on the number of blog posts or the number of products respectively. To get to these pages, you may also have listing pages which will be HTML pages that contain a categorized and formatted list of data items. These scenarios can be addressed using Next.js static rendering. We can generate listing pages or individual item pages based on the available items. Let us see how.

### Listing Page - All Items

Generation of a listing page is a scenario where the content to be
displayed on the page depends on external data. This data will be
fetched from the database at build time to construct the page. In
Next.js this can be achieved by exporting the function `getStaticProps()` in the page component. The function is called at
build time on the build server to fetch the data. The data can then be passed to the page's `props` to pre-render the page component. Let us look at the code for generating a product listing page which was originally shared as part of [this post](https://vercel.com/blog/nextjs-server-side-rendering-vs-static-generation#all-products-page-static-generation-with-data).

```jsx
// This function runs at build time on the build server
export async function getStaticProps() {
  return {
    props: {
      products: await getProductsFromDatabase(),
    },
  };
}

// The page component receives products prop from getStaticProps at build time
export default function Products({ products }) {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
}
```

The function will not be included in the client-side JS bundle and hence can even be used to fetch the data directly from a database.

### Individual Details Page - Per Item

In the above example, we could have an individual detailed page for each of the products listed on the listing page. These pages could be accessed by clicking on the corresponding items on the listing page or directly through some other route.

Assume we have products with product ids `101`, `102`, `103`, and so on. We need their information to be available at routes `/products/101`, `/products/102`, `/products/103` etc. To achieve this at build time in Next.js we can use the function` getStaticPaths()` in combination with [dynamic routes](https://nextjs.org/docs/routing/dynamic-routes).

We need to create a common page component `products/[id].js` for this and export the function `getStaticPaths()` in it. The function will return all possible product ids which can be used to pre-render
individual product pages at build time. The following Next.js skeleton available [here](https://vercel.com/blog/nextjs-server-side-rendering-vs-static-generation#individual-product-page-static-generation-with-data)
shows how to structure the code for this.

```jsx
// pages/products/[id].js

// In getStaticPaths(), you need to return the list of
// ids of product pages (/products/[id]) that you'd
// like to pre-render at build time. To do so,
// you can fetch all products from a database.
export async function getStaticPaths() {
  const products = await getProductsFromDatabase();

  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  // fallback: false means pages that don't have the correct id will 404.
  return { paths, fallback: false };
}

// params will contain the id for each generated page.
export async function getStaticProps({ params }) {
  return {
    props: {
      product: await getProductFromDatabase(params.id),
    },
  };
}

export default function Product({ product }) {
  // Render product
}
```

The details on the product page may be populated at build time by using the function `getStaticProps` for the specific product id. Note the use of the fallback: false indicator here. It means that if a page is not available corresponding to a specific route or product Id, the 404 error page will be shown.

Thus we can use SSG to pre-render many different types of pages.

---
## SSG - Key Considerations

As discussed, SSG results in a great performance for websites as it cuts down the processing required both on the client and the server. The sites are also SEO friendly as the content is already there and can be rendered by web-crawlers with no extra effort. While performance and SEO make SSG a great rendering pattern, the following factors need to be considered when assessing the suitability of SSG for specific
applications.

1. **A large number of HTML files:** Individual HTML files need to be generated for every possible route that the user may access. For example, when using it for a blog, an HTML file will be generated for every blog post available in the data store. Subsequently, edits to any of the posts will require a rebuild for the update to be reflected in the static HTML files. Maintaining a large number of HTML files can be challenging.

2. **Hosting Dependency:** For an SSG site to be super-fast and respond quickly, the hosting platform used to store and serve the HTML files should also be good. Superlative performance is possible if a well-tuned SSG website is hosted right on multiple CDNs to take advantage of edge-caching.

3. **Dynamic Content:** An SSG site needs to be built and re-deployed every time the content changes. The content displayed may be stale if the site has not been built + deployed after any content change. This makes SSG unsuitable for highly dynamic content.

---