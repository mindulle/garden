---
# configs for document itself.
title: "Media features"
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

> [!tldr] Media features
> A round-up of all the ways that media features let you respond to devices and preferences.

```toc
style: bullet
```

__Responsive design wouldn't be possible without media queries.__ Before media queries there was no way of knowing what kind of device people were using to visit your website. Designers had to make assumptions. Those assumptions were encoded into fixed-width designs or liquid layouts.
- 미디어 쿼리 이전엔 유저가 어떤 화면을 보는 지 조차 알 수가 없었다네요.. 감사합니다 미디어 쿼리님

That all changed with the introduction of [media queries](https://web.dev/learn/design/media-queries/). For the first time designers could meet people halfway. Designers could adjust their layouts to respond to people's devices.

Remember, a media query comprises an ==optional media type== and a ==mandatory media feature.== 
- media query = media type + media feauture.
__There hasn't been much change in media types over the years.__ There are still just four possible values:

```css
@media all
@media screen
@media print
@media speech
```

[Media features](https://developer.mozilla.org/docs/Web/CSS/@media#media_features), on the other hand, have expanded greatly. Designers now can meet users beyond halfway, adapting designs to fit far more than just screen size.

## Viewport dimensions

By far the most popular media queries on the web are the ones dealing with viewport width. But even here, you're presented with a choice. You can use the `max-width` media feature to apply styles below a certain width, or you can use the `min-width` media feature to apply styles above a certain width.

```css
main {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
@media (max-width: 45em) {
  main {
    display: block;  
  }
}
```

```css
@media (min-width: 45em) {
  main {
    display: grid;    
    grid-template-columns: 2fr 1fr;  
  }
}
```

Personally, I like to use `min-width`. I apply layout styles in an additive way. I introduce new layout rules at each breakpoint instead of undoing previous rules.

This additive approach also works for height. Using `min-height` you can introduce more rules as more viewport height becomes available. For example, you might have a header element that you want to anchor to the top of the browser window if there's enough vertical space.

```css
@media (min-height: 30em) {
  header {
    position: fixed;  
  }
}
```

<div style="height: 500px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/PoJbdaN?height=500&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen PoJbdaN by web-dot-dev on Codepen" loading="lazy"></iframe></div>

But you can use the `max-height` media feature if you prefer. Here, the header is anchored by default, but the stickiness is removed if there isn't enough vertical space.

```css
header {
  position: fixed;
}
@media (max-height: 30em) {
  header {
    position: static;  
  }
}
```

Choosing between `min-` and `max-` prefixes doesn't just apply to [`width`](https://developer.mozilla.org/docs/Web/CSS/@media/width) and [`height`](https://developer.mozilla.org/docs/Web/CSS/@media/height). The [`aspect-ratio`](https://developer.mozilla.org/docs/Web/CSS/@media/aspect-ratio) media feature offers the same choice. It also offers an unprefixed version if you want to apply styles at an exact ratio of width to height.

```css
@media (min-aspect-ratio: 16/9) {
  // The ratio of width to height is at least 16 by 9.
}
@media (max-aspect-ratio: 16/9) {
  // The ratio of width to height is less than 16 by 9.
}
@media (aspect-ratio: 16/9) {
  // The ratio of width to height is exactly 16 by 9.
}
```

Providing different styles for different aspect ratios could quickly get out of hand. If you don't need that fine-grained level of control, the [`orientation`](https://developer.mozilla.org/docs/Web/CSS/@media/orientation) media feature might better suit your needs. It has two possible values: `portrait` or `landscape`.

```css
@media (orientation: portrait) {
  // The width is less than the height.
}
@media (orientation: landscape) {
  // The width is greater than the height.
}
```

<div style="height: 500px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/qBXVowV?height=500&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen qBXVowV by web-dot-dev on Codepen" loading="lazy"></iframe></div>

<p><video controls="" loop="" draggable="true"><source src="https://storage.googleapis.com/web-dev-uploads/video/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/gtBzPVsBu5mtnX8RuSqJ.mp4" type="video/mp4"></video></p>

Even though the terms "portrait" and "landscape" are most often used to refer to the orientation of mobile devices, the `orientation` media feature isn't device-specific. A full-screen browser window on a typical laptop will have an `orientation` value of `landscape`.

## Displays

- 해상도에 따라 다른 스타일을 지정 할 수 있다니; 맙소사

Different displays have different pixel densities, measured in `dpi`, dots per inch. You can adjust your styles for different pixel densities using the [`resolution`](https://developer.mozilla.org/docs/Web/CSS/@media/resolution) media feature. Like `aspect-ratio`, `resolution` comes in three varieties: __minimum__, __maximum__, and __exact__.

```css
@media (min-resolution: 300dpi) {
  // The display has a pixel density of at least 300 dots per inch.
}
@media (max-resolution: 300dpi) {
  // The display has a pixel density less than 300 dots per inch.
}
@media (resolution: 300dpi) {
  // The display has a pixel density of exactly 300 dots per inch.
}
```

You may ==__never== need to use any `resolution` media queries.__ Pixel density is usually only an issue for __images__, and [responsive images](https://web.dev/learn/design/responsive-images/) are a way of dealing with pixel density directly in HTML.

On the other hand, CSS is where you define your animations and transitions. You can adjust those animations and transitions to respond to different refresh rates using the [`update`](https://developer.mozilla.org/docs/Web/CSS/@media/update-frequency) media feature. This media feature reports one of three values: `none`, `slow`, and `fast`.

An __`update`__ value of __`none` means there's no refresh rate.__ A printed page, for example, can't be updated.

An __`update`__ value of __`slow` means the display can't refresh quickly.__ An e-ink display is one example of a screen with a slow refresh rate.

An __`update`__ value of __`fast` means the display refreshes fast enough to handle animations and transitions.__

```css
@media (update: fast) {
  a {
    transition-duration: 0.4s;
    transition-property: transform;
  }
  a:hover {
    transform: scale(150%);  
  }
}
```

Not all aspects of the display are related to hardware capabilities. In [the module on theming](https://web.dev/learn/design/theming/), you saw how to define properties in a [web app manifest](https://web.dev/add-manifest/) file. One of those properties is called `display`, and you can give it a value of `fullscreen`, `standalone`, `minimum-ui`, or `browser`. The corresponding [`display-mode`](https://developer.mozilla.org/docs/Web/CSS/@media/display-mode) media feature allows you to tailor your styles for these different options.

Let's say you've provided a `display` value of `standalone` in your web app manifest. If someone adds your site to their home screen, the site will launch without any browser interface. You might decide to display a back button for those users.

```css
button.back {
  display: none;
}

@media (display-mode: standalone) {
  button.back {
    display: inline;  
  }
}
```

## Color

There are numerous media features for querying the color capabilities of a device. If you want to adjust your styles for any display that only outputs shades of grey, you can use the [`monochrome`](https://developer.mozilla.org/docs/Web/CSS/@media/monochrome) media feature without any value.

- 아니 이럼 따로 짤필요가 없네? 미디어 피처를 모노크로매틱으로 그냥 넘겨주면 되는거네..

```css
@media (monochrome) {
  body {
    color: black;
    background-color: white;  
  }
}
```

There's a corresponding [`color`](https://developer.mozilla.org/docs/Web/CSS/@media/color) media feature.

```css
@media (color) {
  body {
    color: maroon;
    background-color: linen;  
  }
}
```

For color screens, you can write queries with the media features [`color-gamut`](https://developer.mozilla.org/docs/Web/CSS/@media/color-gamut), [`color-index`](https://developer.mozilla.org/docs/Web/CSS/@media/color-index), or [`dynamic-range`](https://www.w3.org/TR/mediaqueries-5/#dynamic-range). All of them report specific details about the color capabilities of the screen.

In this example, color values update in response to the `dynamic-range` media feature, which reports the combination of maximum brightness, color depth, and contrast ratio of the display. The possible values are `standard` or `high`. A high-definition screen that reports a `dynamic-range` value of `high` is given a different color space using the new CSS `color()` function.
- 포토샵이 필요가 없네요..? 그건 아니었고 ㅎㅎ. 에셋을 추가한 흔적이 있고..
```css
.neon-red {
  color: hsl(355 100% 95%);
}
@media (dynamic-range: high) {
  .neon-red {
    color: color(display-p3 1 0 0);  
  }
}
```

<div style="height: 400px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/BawQOPQ?height=400&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen BawQOPQ by web-dot-dev on Codepen" loading="lazy"></iframe></div>

## Interaction

Media features can also report the kind of input mechanism used to interact with your site: `hover`, `any-hover`, `pointer`, and `any-pointer`. See [the module on interaction](https://web.dev/learn/design/interaction/) for more details.

## Preferences

There are a range of media queries that allow you to respond to user preferences: `prefers-color-scheme`, `prefers-contrast`, and `prefers-reduced-motion`. See the modules on [theming](https://web.dev/learn/design/theming/) and [accessibility](https://web.dev/learn/design/accessibility/) for more details.

You can combine media features in one media query. You could scope your animation styles so that they're only applied if the device has a fast refresh rate and the user hasn't expressed a preference for reduced motion.

```css
@media (update: fast) and (prefers-reduced-motion: no-preference) {
  a {
    transition-duration: 0.4s;
    transition-property: transform;  
  }  
  a:hover {
    transform: scale(150%);  
  }
}
```

## More media features

There are more media features on the way.

The [`forced-colors`](https://developer.mozilla.org/docs/Web/CSS/@media/forced-colors) and [`inverted-colors`](https://developer.mozilla.org/docs/Web/CSS/@media/inverted-colors) media features will report whether a device is using a restricted or an inverted color palette.

A [`scripting`](https://developer.mozilla.org/docs/Web/CSS/@media/scripting) media feature will allow you to adjust your CSS based on the availability of JavaScript.

A media feature called [`prefers-reduced-data`](https://developer.mozilla.org/docs/Web/CSS/@media/prefers-reduced-data) will allow users to specify that they're on a metered connection so you can send smaller or fewer assets.

Other proposals __are still being formulated.__ In the next and final module, you'll learn about a proposal for a media feature that handles different screen configurations.

## Check your understanding

---
미디어 쿼리에서는
- min-width, max-width 피처는 사용가능하지만
- width: 이런건 피처는 사용이 안됩니다.
미디어 쿼리에서는 특정 aspect-ratio를 감지 할 수 있습니다.
- @media (aspect-ratio: 4/3) 이런식으로요.
미디어 쿼리에서 컬러는 아래와 같은것들을 다 할 수 있습니다.
- @media (color)
	- 모든 컬러 있는 디바이스에 적용됩니다
- @media (monochrome)
	- 컬러가 불가능한 디바이스에 적용됩니다.
- @media (color-gamut: srgb)
	- sRGB 컬러를 사용가능한 디바이스에 적용됩니다
- @media (min-color-index: 15000)
	- 최소 15k컬러 이상 사용이 가능한 디바이스에 적용됩니다.
- @media (dynamic-range: high)
	- HD 컬러 이상 사용 가능한 장치에 적용됩니다.
미디어 쿼리에서 유저 선호 옵션은 아래와 같은 것들을 사용 할 수 있습니다.
- @media (prefers-color-scheme: dark)
	- 유저가 자신의 OS에 다크모드를 적용 했을 때 적용됩니다.
- @media (prefers-reduced-motion: reduce)
	- 유저가 자신의 OS에 리듀스드 모션을 적용했을 때 적용됩니다.
-  @media (prefers-contrast: more)
	- 유저가 자신의 OS에 고대비 옵션을 적용 했을 때 적용됩니다.
---