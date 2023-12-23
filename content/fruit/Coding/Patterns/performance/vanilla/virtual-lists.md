# List Virtualization

In this guide, we will discuss list virtualization (also known as
windowing). This is the idea of rendering only visible rows of content in a dynamic list instead of the entire list. The rows rendered are only a small subset of the full list with what is visible (the window) moving as the user scrolls. This can improve rendering performance.

If you use React and need to **display large lists of data
efficiently**, you may be familiar with [react-virtualized](https://bvaughn.github.io/react-virtualized/). It's
a windowing library by [Brian Vaughn](https://twitter.com/brian_d_vaughn) that renders only the items currently visible in a list (within a scrolling "viewport"). This means you don't need to pay the cost of thousands of rows of data being rendered at once. A [video](https://www.youtube.com/embed/QhPn6hLGljU) walkthrough of list virtualization with react-window accompanies this write-up.

## How does list virtualization work?

<svg height="304" width="300" viewBox="0 0 300 304" preserveAspectRatio="xMinYMax meet"><g class="HowWorksGroup HowWorksGroupSkewed"><g class="HowWorksHidden HowWorksVisible"><line x1="25" y1="2" x2="125" y2="2" class="HowWorksInnerLine HowWorksHidden HowWorksInnerLineAnimated"></line><line x1="25" y1="32" x2="125" y2="32" class="HowWorksInnerLine HowWorksHidden HowWorksInnerLineAnimated"></line><line x1="25" y1="62" x2="125" y2="62" class="HowWorksInnerLine HowWorksHidden HowWorksInnerLineAnimated"></line><line x1="25" y1="92" x2="125" y2="92" class="HowWorksInnerLine HowWorksHidden HowWorksInnerLineAnimated"></line><line x1="25" y1="122" x2="125" y2="122" class="HowWorksInnerLine HowWorksHidden HowWorksInnerLineAnimated"></line><line x1="25" y1="152" x2="125" y2="152" class="HowWorksInnerLine HowWorksHidden HowWorksInnerLineAnimated"></line><line x1="25" y1="182" x2="125" y2="182" class="HowWorksInnerLine HowWorksHidden HowWorksInnerLineAnimated"></line><line x1="25" y1="212" x2="125" y2="212" class="HowWorksInnerLine HowWorksHidden HowWorksInnerLineAnimated"></line><line x1="25" y1="242" x2="125" y2="242" class="HowWorksInnerLine HowWorksHidden HowWorksInnerLineAnimated"></line><line x1="25" y1="272" x2="125" y2="272" class="HowWorksInnerLine HowWorksHidden HowWorksInnerLineAnimated"></line><rect x="25" y="2" width="100" height="300" class="HowWorksInnerRect HowWorksHidden"></rect></g><g class="HowWorksRowGroup HowWorksHidden HowWorksVisible HowWorksScrollingLoop"><g><rect x="25" y="2" width="100" height="30" class="HowWorksRowNotRendered"></rect><text x="75" y="17" text-anchor="middle" alignment-baseline="central" class="LabeledSvgText HowWorksHidden"></text></g></g></g></svg>

Not Rendered

Not Rendered

Rendered

Rendered

Rendered

Rendered

Not Rendered

Not Rendered

Not Rendered

Not Rendered

\<ul\>

"Virtualizing" a list of items involves **maintaining a window** and
**moving that window around your list**. Windowing in react-virtualized works by:

- Having a small container DOM element (e.g `<ul>`) with relative positioning (window)
- Having a big DOM element for scrolling
- Absolutely positioning children inside the container, setting their styles for top, left, width and height.

Rather than rendering 1000s of elements from a list at once (which can cause slower initial rendering or impact scroll performance), **virtualization focuses on rendering just items visible to the user**. 

![Impact of virtualization leading to a faster frame-rate vs rendering all at once](https://res.cloudinary.com/ddxwdqwkr/image/upload/v1620539548/patterns.dev/frame-rate-10k_2x.png)

This can help keep list rendering fast on mid to low-end devices. You can fetch/display more items as the user scrolls, unloading previous entries and replacing them with new ones.

## A smaller alternative to react-virtualized

[react-window](https://react-window.now.sh/) is a rewrite of react-virtualized by the same author aiming to be **smaller**, faster and more [tree-shakeable](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/).

![Bundlephobia showing a 34KB gzipped size for react-virtualized vs 5KB for react-window](https://res.cloudinary.com/ddxwdqwkr/image/upload/v1620539651/patterns.dev/bundlephobia_2x.png)

In a tree-shakeable library, size is a function of which API surfaces you choose to use. I've seen \~20-30KB (gzipped) savings using it in place of react-virtualized:

![Webpack bundle analyzer showing a \~20KB size difference](https://res.cloudinary.com/ddxwdqwkr/image/upload/v1620539693/patterns.dev/wbpa_2x.png)

The APIs for both packages are similar and where they differ,
react-window tends to be simpler. react-window's components include:

### List

Lists render a **windowed list (row) of elements** meaning that only the visible rows are displayed to users (e.g [FixedSizeList](https://react-window.now.sh/#/examples/list/fixed-size),
[VariableSizeList](https://react-window.now.sh/#/examples/list/variable-size)). Lists use a Grid (internally) to render rows, relaying props to that inner Grid.

<svg class="BuildingBlocksSvgWrapper" height="405" width="280" viewBox="0 0 280 405" preserveAspectRatio="xMinYMax meet"><g><g><rect x="10" y="10" width="260" height="45" class="svgListRow"></rect><text x="140" y="32.5" text-anchor="middle" alignment-baseline="central" class="LabeledSvgText"></text></g></g></svg>

Row

Row

Row

Row

Row

Row

Not Rendered

Not Rendered

#### **Rendering a list of data using React**

Here's an example of rendering a list of simple data (`itemsArray`)
using React:

```jsx
import React from "react";
import ReactDOM from "react-dom";

const itemsArray = [
  { name: "Drake" },
  { name: "Halsey" },
  { name: "Camillo Cabello" },
  { name: "Travis Scott" },
  { name: "Bazzi" },
  { name: "Flume" },
  { name: "Nicki Minaj" },
  { name: "Kodak Black" },
  { name: "Tyga" },
  { name: "Buno Mars" },
  { name: "Lil Wayne" }, ...
]; // our data

const Row = ({ index, style }) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    {itemsArray[index].name}
  </div>
);

const Example = () => (
  <div
    style={{
      height: 150,
      width: 300
    }}
    class="List"
  >
    {itemsArray.map((item, index) => Row({ index }))}
  </div>
);

ReactDOM.render(<Example />, document.getElementById("root"));
```

#### **Rendering a list using react-window**

...and here's the same example using react-window's `FixedSizeList`, which takes a few props (`width`, `height`, `itemCount`, `itemSize`) and a row rendering function passed as a child:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { FixedSizeList as List } from "react-window";

const itemsArray = [...]; // our data

const Row = ({ index, style }) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    {itemsArray[index].name}
  </div>
);

const Example = () => (
  <List
    className="List"
    height={150}
    itemCount={itemsArray.length}
    itemSize={35}
    width={300}
  >
    {Row}
  </List>
);

ReactDOM.render(<Example />, document.getElementById("root"));
```

You can try out `FixedSizeList` on [CodeSandbox](https://codesandbox.io/s/github/bvaughn/react-window/tree/master/website/sandboxes/fixed-size-list-vertical).

### Grid

Grid renders **tabular data** with virtualization along the vertical and horizontal axes (e.g [FizedSizeGrid](https://react-window.now.sh/#/examples/grid/fixed-size), [VariableSizeGid](https://react-window.now.sh/#/examples/grid/variable-size)).
It only renders the Grid cells needed to fill itself based on current
horizontal/vertical scroll positions.

<svg class="BuildingBlocksSvgWrapper" height="385" width="385" viewBox="0 0 385 385" preserveAspectRatio="xMinYMax meet"><g><g><rect x="10" y="10" width="90" height="90" class="svgGridBox"></rect><text x="55" y="55" text-anchor="middle" alignment-baseline="central" class="LabeledSvgText"></text></g></g></svg>

Cell

Cell

Cell

Cell

Cell

Cell

Cell

Cell

Cell

Not Rendered

Not Rendered

Not Rendered

Not Rendered

Not Rendered

Not Rendered

Not Rendered

If we wanted to render the same list as earlier with a grid layout,
assuming our input is a multi-dimensional array, we could accomplish this using `FixedSizeGrid` as follows:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { FixedSizeGrid as Grid } from 'react-window';

const itemsArray = [
  [{},{},{},...],
  [{},{},{},...],
  [{},{},{},...],
  [{},{},{},...],
];

const Cell = ({ columnIndex, rowIndex, style }) => (
  <div
    className={
      columnIndex % 2
        ? rowIndex % 2 === 0
          ? 'GridItemOdd'
          : 'GridItemEven'
        : rowIndex % 2
          ? 'GridItemOdd'
          : 'GridItemEven'
    }
    style={style}
  >
    {itemsArray[rowIndex][columnIndex].name}
  </div>
);

const Example = () => (
  <Grid
    className="Grid"
    columnCount={5}
    columnWidth={100}
    height={150}
    rowCount={5}
    rowHeight={35}
    width={300}
  >
    {Cell}
  </Grid>
);

ReactDOM.render(<Example />, document.getElementById('root'));
```

You can also try out `FixedSizeGrid` on [CodeSandbox](https://codesandbox.io/s/github/bvaughn/react-window/tree/master/website/sandboxes/fixed-size-grid).

## More in-depth react-window examples
---
[Scott Taylor](https://github.com/staylor) implemented an open-source [Pitchfork music reviews scraper](http://pitchfork.highforthis.com/) [(src)](https://github.com/staylor/pitchfork-scraper) using `react-window` and `FixedSizeGrid`. Here's a video of the app in action:

<iframe loading="lazy" width="100%" height="400" src="https://www.youtube.com/embed/jLtr4tpFKQE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

Pitchfork scraper uses [react-window-infinite-loader](https://github.com/bvaughn/react-window-infinite-loader) ([demo](https://codesandbox.io/s/5wqo7z2np4)) which helps break large data sets down into chunks that can be loaded as they are scrolled into view.

Here's a snippet of how react-window-infinite-loader is incorporated in
this app:

```jsx
import React, { Component } from 'react';
import { FixedSizeGrid as Grid } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
...
  render() {
    return (
      <InfiniteLoader
        isItemLoaded={this.isItemLoaded}
        loadMoreItems={this.loadMoreItems}
        itemCount={this.state.count + 1}
      >
        {({ onItemsRendered, ref }) => (
          <Grid
            onItemsRendered={this.onItemsRendered(onItemsRendered)}
            columnCount={COLUMN_SIZE}
            columnWidth={180}
            height={800}
            rowCount={Math.max(this.state.count / COLUMN_SIZE)}
            rowHeight={220}
            width={1024}
            ref={ref}
          >
            {this.renderCell}
          </Grid>
        )}
      </InfiniteLoader>
    );
  }
}
```

You might find the [commit](https://github.com/staylor/pitchfork-scraper/commit/d9bff69e332ad9de8351c67f4848fc7968209eff) porting the app over from `react-virtualized` useful.

An implementation of Pitchfork scraper using `FixedSizeList` is also available ([demo](https://node-ntdprbnulc.now.sh), [demo on Pixel](https://youtu.be/CImWBbBeQXU)):

<iframe loading="lazy" width="100%" height="400" src="https://www.youtube.com/embed/joYOccsf6_k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

And here's a snippet of the implementation:

```jsx
return (
  <InfiniteLoader
    isItemLoaded={this.isItemLoaded}
    loadMoreItems={this.loadMoreItems}
    itemCount={this.state.count}
  >
    {({ onItemsRendered, ref }) => (
      <section>
        <FixedSizeList
          itemCount={this.state.count}
          itemSize={ROW_HEIGHT}
          onItemsRendered={onItemsRendered}
          height={this.state.height}
          width={this.state.width}
          ref={ref}
        >
          {this.renderCell}
        </FixedSizeList>
      </section>
    )}
  </InfiniteLoader>
);
```

What if we have even more complex needs for a grid virtualization solution? We found a [The Movie Database](https://www.themoviedb.org/)
[demo app](https://tmdb-viewer.surge.sh/) that used react-virtualized and Infinite Loader under the hood.

[Porting](https://github.com/addyosmani/tmdb-viewer/blob/master/src/components/InfiniteMoviesList.js) it over to react-window and react-window-infinite-loader didn't take long, but we did discover a few components were not yet supported. Regardless, the final functionality is [pretty close](https://tmdb-viewer.firebaseapp.com/).

[![TMDB Viewer](https://res.cloudinary.com/ddxwdqwkr/image/upload/v1620539888/patterns.dev/tmdb_2x.jpg)](https://tmdb-viewer.firebaseapp.com/)

The missing components were WindowScroller and AutoSizer...which we'll look at next.

```jsx
...
    return (
      <section>
        <AutoSizer disableHeight>
          {({width}) => {
            const {movies, hasMore} = this.props;
            const rowCount = getRowsAmount(width, movies.length, hasMore);
            ...
            return (
              <InfiniteLoader
                ref={this.infiniteLoaderRef}
                ...
                {({onRowsRendered, registerChild}) => (
                  <WindowScroller>
                    {({height, scrollTop}) => (
```

## What's missing from react-window?

react-window does not yet have the complete API surface of
react-virtualized, so do check the [comparison docs](https://github.com/bvaughn/react-window#how-is-react-window-different-from-react-virtualized)
if considering it. What's missing?

- [WindowScroller](https://github.com/bvaughn/react-virtualized/blob/master/docs/WindowScroller.md) - This is a `react-virtualized` component that enables Lists to be scrolled based on the window's scroll positions. There are currently [no plans](https://github.com/bvaughn/react-window/issues/30) to implement this for react-window so you'll need to solve this in userland.
- [AutoSizer](https://github.com/bvaughn/react-virtualized/blob/master/docs/AutoSizer.md) - HOC that grows to fit all of the available space, automatically adjusting the width and height of a single child. Brian implemented this as a [standalone](https://www.npmjs.com/package/react-virtualized-auto-sizer)package. Follow [this issue](https://github.com/bvaughn/react-window/issues/5) for the latest.
- [CellMeasurer](https://github.com/bvaughn/react-virtualized/blob/master/docs/CellMeasurer.md) - HOC automatically measuring a cell's content by rendering it in a way that is not visible to the user. Follow [here](https://github.com/bvaughn/react-window/issues/6) for discussion on support.

That said, we found react-window sufficient for most of our needs with what it includes out of the box.

## Improvements in the web platform

Some modern browsers now support [CSS content-visibility](https://web.dev/content-visibility/).
`content-visibility:auto` allows you to skip rendering & painting
offscreen content until needed. If you have a long HTML document with costly rendering, consider trying the property out.

For rendering lists of dynamic content, I still recommend using a
library like react-window. It would be hard to have a `content-visbility:hidden` version of such a library that beats a version aggressively using `display:none` or removing DOM nodes when
offscreen like many list virtualization libraries may do today.

## Further reading
---------------

For further reading about react-window and react-virtualized, check out:

- [Rendering performant lists withreact-window](https://alligator.io/react/lists-with-react-window/)
- [Creating More Efficient React Views with Windowing](https://www.youtube.com/watch?v=t4tuhg7b50I)
- [Rendering lists with react-virtualized](https://css-tricks.com/rendering-lists-using-react-virtualized/)
- [Rendering large lists with react-virtualized](https://blog.logrocket.com/rendering-large-lists-with-react-virtualized-82741907a6b3)

