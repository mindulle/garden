---
# configs for document itself.
title: "Micro layouts"
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

> [!tldr] Micro layouts
> Build flexible components that can be placed anywhere
```toc
style: bullet
```
When we think of layouts, we often think of page-level designs. But smaller components within the page can have their own self-contained layouts.

Ideally, these component-level layouts will adjust themselves automatically, regardless of their position on the page. There may be situations where you don't know if a component will be placed into the main content column or the sidebar or both. Without knowing for sure where a component will end up, you need to make sure that the component can adjust itself to its container.

![A two column layout, one wide and one narrow. The media objects are laid out differently depending on whether they're in the wide or narrow column.](https://web-dev.imgix.net/image/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/hAz94zpnzIQYHjamxtYK.png?auto=format)

<aside class="aside flow bg-state-info-bg color-state-info-text"><div class="flow">In the future, creating components that can adapt to their container will become much easier with the implementation of <a href="https://developer.mozilla.org/docs/Web/CSS/CSS_Container_Queries">Container Queries</a>. For now, however, you need to consider the existing ways to create reusable and responsive micro-layouts. You can find a preview of how Container Queries fit into existing responsive design methods at the end of this module.</div></aside>

## Grid
[CSS grid](https://web.dev/learn/css/grid/) isn't just for page-level layouts. It also works well for the components that live within them.

In this example, the `::before` and `::after` [pseudo-elements](https://web.dev/learn/design/micro-layouts/%E2%80%8B%E2%80%8B/learn/css/pseudo-elements/) create decorative lines on either side of a heading. The heading itself is a grid container. The individual elements are laid out so that the lines always fill the available space.

```css
h1 {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1em;
}
h1::before,
h1::after {
  content: "";
  border-top: 0.1em double black;
  align-self: center;
}
```

<div style="height: 200px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/rNzYvxm?height=200&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen rNzYvxm by web-dot-dev on Codepen" loading="lazy"></iframe></div>

![Developer tools in Firefox showing a grid overlay.](https://web-dev.imgix.net/image/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/mNjoV2ri3HmsPeRoTpTh.png?auto=format)![Developer tools in Chrome showing a grid overlay.](https://web-dev.imgix.net/image/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/7A1UYerc4KNuuWmp3IMJ.png?auto=format)
> Desktop browsers like Firefox and Chrome have developer tools that can show you grid lines and areas overlaid on your design.

Learn how to [inspect grid layouts](https://developer.chrome.com/docs/devtools/css/grid/) in Chrome DevTools.

## Flexbox

As the name suggests, [flexbox](https://web.dev/learn/css/flexbox/) allows you to make your components flexible. You can declare which elements in your component should have a minimum or maximum size and let the other elements flex to fit accordingly.

In this example, the image takes up one quarter of the available space and the text takes up the other three quarters. But the image never gets larger than 200 pixels.

```css
.media {
  display: flex;
  align-items: center;
  gap: 1em;
}
.media-illustration {
  flex: 1;
  max-inline-size: 200px;
}
.media-content {
  flex: 3;
}
```

<div style="height: 300px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/qBXVYZo?height=300&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen qBXVYZo by web-dot-dev on Codepen" loading="lazy"></iframe></div>

![Developer tools in Firefox showing a flexbox overlay.](https://web-dev.imgix.net/image/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/9xyxPbFU4EUtnPGsKdQI.png?auto=format)![Developer tools in Chrome showing a flexbox overlay.](https://web-dev.imgix.net/image/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/R7Ucm4OvYLbXGD0I3rw2.png?auto=format)
> The developer tools in Firefox and Chrome can help you visualize the shape of your flexbox components.

Learn how to [inspect flexbox layouts](https://developer.chrome.com/docs/devtools/css/flexbox/) in Chrome DevTools.

## Container queries
Flexbox allows you to design from the content out. You can specify the parameters of your elements (how narrow they should get, how wide they should get) and let the browser figure out the final implementation.

But the component itself has no awareness of its context. It doesn't know if it's being used in the main content or in a sidebar. This can make component layouts trickier than page layouts. To be able to apply contextually relevant styles, your components need to know more than the size of the viewport they are inside.

With page layouts, you *do* know the width of the container because the container is the browser viewport; media queries report the dimensions of the page-level container.

Now there's an upcoming CSS technology that reports the dimensions of any parent container: [container queries](https://developer.mozilla.org/docs/Web/CSS/CSS_Container_Queries).

---
<aside class="aside flow bg-state-bad-bg color-state-bad-text"><p class="cluster color-state-bad-text"><span class="aside__icon box-block"><svg aria-label="Error sign" viewBox="0 0 24 24" fill="currentColor" height="24" role="img" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2h-2zm0-10v6h2V7h-2z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></span><strong>Caution</strong></p><div class="flow">Container queries are a new experimental technology that isn't widely available in browsers. To test the code below, and see the example working, enable container queries in Chrome. Go to <code>chrome://flags/</code>, search for <strong>Container Queries</strong>, and enable the <code>#enable-container-queries</code> flag. With the flag enabled, you can <a href="https://developer.chrome.com/docs/devtools/css/container-queries/">inspect and debug container queries</a> in Chrome DevTools.</div></aside>

---

To start, define which elements will act as containers.

```css
main,aside {
  container-type: inline-size;
}
```

This means that you want to be able to query the inline dimension. For English-language documents, that's the horizontal axis. You're going to change styles based on the width of the container.

If a component is inside one of those containers, you can apply styles in a way that's quite similar to media queries.

```css
.media-illustration {
  max-width: 200px;
  margin: auto;
}

@container (min-width: 25em) {
  .media {
    display: flex;
    align-items: center;    
    gap: 1em;  
  }
  
  .media-illustration {
    flex: 1;  
  }
  
  .media-content {
    flex: 3;
  }
}
```

If a media object is inside a container that's narrower than `25em`, the flexbox styles aren't applied. The image and text appear are ordered vertically.

But if the containing element is wider than `25em`, the image and text appear side by side.

Container queries allow you to style components in an independent way. The width of the viewport is no longer what matters. You can write rules based on the width of the containing element.

![Two containers of different sizes.](https://web-dev.imgix.net/image/HodOHWjMnbNw56hvNASHWSgZyAf2/819QcTZ9zW0uVk8tTdGi.png?auto=format)

## Combining queries

You can use media queries for the page layout, and container queries for the components within the page.

Here the overall structure of the page has a `main` element and an `aside` element. There are media objects within both elements.

```html
<body>  
  <main>
    <div class="media">…</div>
    <div class="media">…</div>
  </main>
  <aside>
    <div class="media">…</div>
  </aside>
</body>
```

A media query applies a grid layout to the `main` and `aside` elements when the viewport is wider than `45em`.

```css
@media (min-width: 45em) {
  body {
    display: grid;
    grid-template-columns: 3fr 1fr;  
  }
}
```

The container query rule for the media objects remains the same: only apply a horizontal flexbox layout if the containing element is wider than `25em`.

![A two column layout, one wide and one narrow.  The media objects are laid out differently depending on whether they're in the wide or narrow column.](https://web-dev.imgix.net/image/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/hAz94zpnzIQYHjamxtYK.png?auto=format)

---
<aside class="aside flow bg-state-bad-bg color-state-bad-text"><p class="cluster color-state-bad-text"><span class="aside__icon box-block"><svg aria-label="Error sign" viewBox="0 0 24 24" fill="currentColor" height="24" role="img" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2h-2zm0-10v6h2V7h-2z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></span><strong>Caution</strong></p><div class="flow">This demo won't work in every browser. In Google Chrome you can find the <code>#enable-container-queries</code> flag at <code>chrome://flags</code>.</div></aside>

---

<div style="height: 500px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/RwZjyRv?height=500&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen RwZjyRv by web-dot-dev on Codepen" loading="lazy"></iframe></div>

Container queries are a game-changer for micro layouts. Your components can be self-contained, independent of the browser viewport.

## Check your understanding

---

- 마이크로 레이아웃은 그리드와 플렉스박스에 모두 유용하게 적용 될 수 있습니다.

🎉 Grid and flexbox are both very useful, even for the 'tiniest' of layouts.

---

Previously, you learned about page-level macro layouts. Now you know about component-level micro layouts. Next, you'll dive deeper into the very building blocks of your content. You'll learn how to make your images responsive. But now let's explore responsive typography.