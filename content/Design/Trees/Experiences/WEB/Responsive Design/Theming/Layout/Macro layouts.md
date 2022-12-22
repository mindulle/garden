---
# configs for document itself.
title: "Macro layouts"
lastModified: "2022-12-10"
visibility: "public"

# configs for annotating data to obsidian dataview plugin.
noteImportance: ⭐⭐⭐⭐⭐
noteStatus: "in progress"
noteCertanity: "certain"
noteField:
  - "design"
  - "devsigner"
notePurpose:
  - "background"
  - "individual"
  - "business"
noteTimeliness:
  - "lts"

# configs for selecting tree type.
treeType:
  - "learn"
  - "expirence"

# configs to decide whether external contents are appropriate to me or not.
contentLevel:
  - "beginner"
  - "intermediate"
  - "professional"
contentType:
  - "text"
  - "img"
  - "video"
contentPurpose:
  - "tutorial"
  - "howto"
  - "explain"
  - "realworld"

# configs for querying particular datas to specify notes which have been noted expirences related to particular subject.
# e.g. performance optimization using lighthouse in web development environments:
# tags=[#tree, #web, #lighthouse, #perfOpt]
tags:
  - "tree"
  - "responsivedesign"
  - "web"
---


> [!tldr] Macro layouts
> Design page layouts using a choice of CSS techniques.
```toc
style:bullet
```
Macro layouts describe the larger, page-wide organization of your interface.

![A wireframe of a two column layout, next to the same layout as one column for a narrow view.](https://web-dev.imgix.net/image/HodOHWjMnbNw56hvNASHWSgZyAf2/HoOnH9yMrSY6MhQdRNRZ.jpeg?auto=format)

Before applying any layout, you should make sure that the flow of your content makes sense. This single column default ordering is what smaller screens will get.

```html
<body>
  <header>…</header>
  <main>
    <article>…</article>    
    <aside>…</aside>  
  </main>
  <footer>…</footer>
</body>
```

<div style="height: 500px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/oNeePOX?height=500&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen oNeePOX by web-dot-dev on Codepen" loading="lazy"></iframe></div>

When you arrange these individual page-level components, you're designing a macro layout: a high-level view of your page. Using media queries, you can supply rules in CSS describing how this view should adjust to different screen sizes.

<p><video autoplay="" controls="" loop="" muted="" draggable="true"><source src="https://storage.googleapis.com/web-dev-uploads/video/HodOHWjMnbNw56hvNASHWSgZyAf2/3KENjI9FiNARctTiKDak.mp4" type="video/mp4"></video></p>

## Grid 

[CSS grid](https://web.dev/learn/css/grid/) is an excellent tool for applying a layout to your page. In the example above, say you want a two-column layout once there's enough screen width available. To apply this two-column layout once the browser is wide enough, use a media query to define the grid styles above a specified breakpoint.

```css
@media (min-width: 45em) {
  main {
    display: grid;
    grid-template-columns: 2fr 1fr;  
  }
}
```
<aside class="aside flow bg-state-info-bg color-state-info-text"><div class="flow">While it would make more sense to specify <code>min-inline-size</code> instead of <code>min-width</code>, logical properties don't work in media queries yet.</div></aside>

<div style="height: 500px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/vYJJzMK?height=500&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen vYJJzMK by web-dot-dev on Codepen" loading="lazy"></iframe></div>

## Flexbox

For this specific layout, you could also use [flexbox](https://web.dev/learn/css/flexbox). The styles would look like this:

```css
@media (min-width: 45em) {
  main {
    display: flex;
    flex-direction: row;
  }
  
  main article {
    flex: 2;
  }
  
  main aside {
    flex: 1;
  }
}
```

<div style="height: 500px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/gOxxdym?height=500&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen gOxxdym by web-dot-dev on Codepen" loading="lazy"></iframe></div>

However, the flexbox version requires more CSS. Each column has a separate rule to describe how much space it should take up. In the grid example, that same information is encapsulated in one rule for the containing element.

# Do you need a media query?

You might not always need to use a media query. Media queries work fine when you're applying changes to a few elements, but if the layout needs to be updated a lot, your media queries could get out of hand with lots of breakpoints.

Say you've got a page full of card components. The cards are never wider than `15em`, and you want to put as many cards on one line as will fit. You could write media queries with breakpoints of `30em`, `45em`, `60em`, and so on, but that's quite tedious and difficult to maintain.

Instead, you can apply rules so that the cards themselves automatically take up the right amount of space.

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));  
  grid-gap: 1em;
}
```

<div style="height: 500px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/QWMMVPm?height=500&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen QWMMVPm by web-dot-dev on Codepen" loading="lazy"></iframe></div>

You can achieve a similar layout with flexbox. In this case, if there are not enough cards to fill the final row, the remaining cards will stretch to fill the available space rather than lining up in columns. If you want to line up rows and columns, then use grid.

```css
.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
}
.cards .card {
  flex-basis: 15em;
  flex-grow: 1;
}
```

<div style="height: 500px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/abyyaMg?height=500&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen abyyaMg by web-dot-dev on Codepen" loading="lazy"></iframe></div>

By applying some smart rules in flexbox or grid, it's possible to design dynamic macro layouts with minimal CSS and without any media queries. That's less work for you—you're making the browser do the calculations instead. To see some examples of modern CSS layouts that are fluid without requiring media queries, see [1linelayouts.com](https://1linelayouts.glitch.me/).

Now that you've got some ideas for page-level macro layouts, turn your attention to the components within the page. This is the realm of [micro layouts](https://web.dev/learn/design/micro-layouts).