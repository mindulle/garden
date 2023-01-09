---
# configs for document itself.
title: "Screen configurations"
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

> [!tldr] Screen configurations
> Prepaare your content for devices with multiple screens.

```toc
style: bullet
```

Responsive web design was in many ways a reaction to mobile phones. Before smartphones appeared, very few people seriously considered how websites should look and feel on handheld devices. That changed with the meteoric rise of mobile phones featuring built-in web browsers.

Responsive web design encouraged a mindset that questioned assumptions. Whereas previously it was common to assume that a website would only be viewed on a desktop computer, now it's standard practice to design that same website for phones and tablets as well. In fact, [mobile usage has now eclipsed desktop usage](https://www.statista.com/statistics/277125/share-of-website-traffic-coming-from-mobile-devices/) on the web.

This responsive mindset will serve you well for the future. It's entirely possible that your websites will be viewed on devices and screens that we can't even imagine today. And this mindset extends beyond screens. Even now people are using devices with no screens to access your content. Voice assistants can use your websites if you are using a strong foundation of semantic HTML.

There's experimentation in the world of screens too. There are devices on the market today with foldable screens. That introduces some challenges for your designs.

![A montage of foldable phones in different configurations.](https://web-dev.imgix.net/image/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/f4vIlX35hgoM8l0cWE9a.jpg?auto=format)

## Dual screens

Users of foldable devices can choose whether they want their web browser to occupy just one of the screens or span across both screens. If the browser spans both screens, then the website on display will be broken up by the hinge between the two screens. It doesn't look great.

![A website spanning across two screens. The horizontal flow of text is interrupted by the hinge between the screens.](https://web-dev.imgix.net/image/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/gRdTgrPMARsnUl1iLmie.png?auto=format)

## Viewport segments

There's an experimental media feature designed to detect if your website is being displayed on a dual-screen device. The proposed name of the media feature is `viewport-segments`. There are two varieties: `horizontal-viewport-segments` and `vertical-viewport-segments`.

---
<aside class="aside flow bg-state-bad-bg color-state-bad-text"><p class="cluster color-state-bad-text"><span class="aside__icon box-block"><svg aria-label="Error sign" viewBox="0 0 24 24" fill="currentColor" height="24" role="img" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2h-2zm0-10v6h2V7h-2z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></span><strong>Caution</strong></p><div class="flow">The <code>viewport-segments</code> feature is an experimental proposal and the syntax may change. The syntax has already changed from its initial proposal of a <code>spanning</code> media feature.</div></aside>

---

If the `horizontal-viewport-segments` media feature reports a value of `2` and `vertical-viewport-segments` reports a value of `1` that means the hinge on the device runs from top to bottom, splitting your content into two side-by-side panels.

```css
@media (horizontal-viewport-segments: 2) and (vertical-viewport-segments: 1) {
  // Styles for side-by-side screens.
}
```

If the `vertical-viewport-segments` media feature reports a value of `2` and `horizontal-viewport-segments` reports a value of `1` then the hinge runs from side to side, dividing your content into two panels, one on top of the other.

```css
@media (vertical-viewport-segments: 2) and (horizontal-viewport-segments: 1) {
  // Styles for stacked screens.
}
```

![Diagram demonstrating viewport segments.](https://web-dev.imgix.net/image/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/TAs3gDDzcdq6Gsys3fXQ.svg)
> Diagram from [Microsoft Edge Explainers](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/Foldables/explainer.md).

If both `vertical-viewport-segments` and `horizontal-viewport-segments` report a value of `1` this means the website is being displayed on just one screen, even if the device has more than one screen. This is equivalent to not using any media query.

## Environment variables

The `viewport-segments` __media feature by itself won't help you design around that annoying hinge.__ You need a way of knowing the size of the hinge. That's where [environment](https://developer.mozilla.org/docs/Web/CSS/env()) variables can help.


Environment variables in CSS allow you to factor awkward device intrusions into your styles. For example, you can design around the "notch" on the iPhone X using the environment values `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom` and `safe-area-inset-left`. These keywords are wrapped in an `env()` function.

```css
body {
  padding-top: env(safe-area-inset-top); 
  padding-right: env(safe-area-inset-right); 
  padding-bottom: env(safe-area-inset-bottom); 
  padding-left: env(safe-area-inset-left);
}
```

Environment variables work like custom properties. This means you can pass in a fallback option in case the environment variable doesn't exist.

```css
body {
  padding-top: env(safe-area-inset-top, 1em);
  padding-right: env(safe-area-inset-right, 1em);  
  padding-bottom: env(safe-area-inset-bottom, 1em);  
  padding-left: env(safe-area-inset-left, 1em);
}
```

For those environment variables to work on the iPhone X, update the `meta` element that specifies `viewport` information:

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

Now your page layout will take up the entire viewport and safely pad the document with device-provided inset values.

For foldable screens, six new environment variables are being proposed: `viewport-segment-width`, `viewport-segment-height`, `viewport-segment-top`, `viewport-segment-left`, `viewport-segment-bottom`, `viewport-segment-right`.

---
<aside class="aside flow bg-state-bad-bg color-state-bad-text"><p class="cluster color-state-bad-text"><span class="aside__icon box-block"><svg aria-label="Error sign" viewBox="0 0 24 24" fill="currentColor" height="24" role="img" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2h-2zm0-10v6h2V7h-2z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></span><strong>Caution</strong></p><div class="flow">Remember, this is just at the proposal stage right now. The specific syntax for the environment variables may well change.</div></aside>

---
![Diagram showing environment variables for dual screens.](https://web-dev.imgix.net/image/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/Ok2IFh9xJWHSGedPx9Xe.svg)
> Diagram from [Microsoft Edge Explainers](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/Foldables/explainer.md).

---
<aside class="aside flow bg-state-info-bg color-state-info-text"><div class="flow">It might seem a little strange to see names proposed with <code>left</code>, <code>right</code>, <code>top</code>, and <code>bottom</code>. If you're using logical properties you would expect terms like <code>inline-start</code>, <code>inline-end</code>, <code>block-start</code>, and <code>block-end</code>. In this instance though, the names refer to the hardware's physical properties, regardless of the writing mode used by the website being displayed.</div></aside>

---
Here's an example of a layout with two columns, one wider than the other.

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

![The layout is split across two screens with the hinge interrupting the wider column.](https://web-dev.imgix.net/image/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/VYjqUCss2sJ6MT8b7BHe.png?auto=format)

For dual screens with a vertical hinge, set the first column to be the width of the first screen and the second column to be the width of the second screen.

```css
@media (horizontal-viewport-segments: 2) and (vertical-viewport-segments: 1) {
  main article {
    flex: 1 1 env(viewport-segment-width 0 0);  
  }  
  main aside {
    flex: 1;  
  }
}
```

![The layout is split evenly across two screens with no visible interruption.](https://web-dev.imgix.net/image/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/BUXrXQRSkvXz7TTzWFLx.png?auto=format)

Treat dual screens as an opportunity. Perhaps one screen could be used to display scrollable text content while the other displays a fixed element like an image or a map.

![Diagram illustrating a location service split over two screens, with the map on one screen and directions on the other.](https://web-dev.imgix.net/image/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/F08tJySy3ZeePoCzzw1Z.svg)
> Diagram from [Microsoft Edge Explainers](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/Foldables/explainer.md).

## The future

Will foldable displays become the next big thing? Who knows. No one could've predicted how popular mobile devices would become so it's worth having an open mind about future form factors.

Above all, it's worth ensuring that your websites can respond to whatever the future may bring. That's what responsive design gives you: not just a set of practical techniques, but a mindset that will serve you well as you build the web of tomorrow.

## Check your understanding

---
css에서 환경변수란 무엇입니까?
- 특정 브라우저나 디바이스에 맞추기 위한 브라우저 한정 속성입니다.
	- It's a way for the browser and an author to collaborate on unique viewport contexts or browser impacting attributes.
---