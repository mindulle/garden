---
# configs for document itself.
title: "The picture element"
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
> [!tldr] The picture element
> Exercise more creative control over your images.
```toc
style: bullet
```
[The previous module](https://web.dev/learn/design/responsive-images/) demonstrated how the `srcset` attribute allows you to provide different-sized versions of the same image. The browser can then decide which is the right version to use. If you want to change the image completely, you'll need the [`picture`](https://developer.mozilla.org/docs/Web/HTML/Element/picture) element.

In the same way that `srcset` builds upon the `src` attribute, the `picture` element builds upon the `img` element. The `picture` element wraps around an `img` element.

```css
<picture>
  <img src="image.jpg" alt="A description of the image.">
</picture>
```

If there is no `img` element nested inside the `picture` element, the `picture` element won't work.

Like the `srcset` attribute, the `picture` element will update the value of the `src` attribute in that `img` element. The difference is that where the `srcset` attribute gives suggestions to the browser, the `picture` element gives commands. This gives you control.

## `source`

You can specify multiple `source` elements inside a `picture` element, each one with its own `srcset` attribute. The browser then executes the first one that it can.

## Image formats

In this example, there are three different images in three different formats:

```html
<picture>  
  <source srcset="image.avif" type="image/avif"> 
  <source srcset="image.webp" type="image/webp"> 
  <img src="image.jpg" alt="A description of the image."     width="300" height="200" loading="lazy" decoding="async">
</picture>
```

The first `source` element points to an image in ==[the new AVIF format](https://web.dev/compress-images-avif/)==. If the browser is capable of rendering AVIF images, then that's the image file it chooses. Otherwise, it moves on to the next `source` element.

The second `source` element points to an image in [the WebP format](https://web.dev/serve-images-webp/). If the browser is capable of rendering WebP images, it will use that image file.

Otherwise the browser will fall back to the image file in the `src` attribute of the `img` element. That image is a JPEG.

This means you can start using new image formats without sacrificing backward compatibility.

In that example, the `type` attribute told the browser which kind of image format was specified.

## Image sizes

As well as switching between image formats, you can switch between image sizes. Use the `media` attribute to tell the browser how wide the image will be displayed. Put a media query inside the `media` attribute.

```html
<picture>
  <source srcset="large.png" media="(min-width: 75em)">  
  <source srcset="medium.png" media="(min-width: 40em)">  
  <img src="small.png" alt="A description of the image."     width="300" height="200" loading="lazy" decoding="async">
</picture>
```

Here you're telling the browser that if the viewport width is wider than `75em` it must use the large image. Between `40em` and `75em` the browser must use the medium image. Below `40em` the browser must use the small image.

<p><video controls="" loop="" draggable="true"><source src="https://storage.googleapis.com/web-dev-uploads/video/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/tXME65OZikEMwvPAEgX2.mp4" type="video/mp4"></video></p>

This is different to using the `srcset` and `sizes` attributes on the `img` element. In that case you're providing suggestions to the browser. The `source` element is more like a command than a suggestion.

You can also use the pixel density descriptor inside the `srcset` attribute of a `source` element.

```html
<picture>
  <source srcset="large.png 1x" media="(min-width: 75em)">  
  <source srcset="medium.png 1x, large.png 2x" media="(min-width: 40em)">  
  <img src="small.png" alt="A description of the image." width="300" height="200" loading="lazy" decoding="async"    srcset="small.png 1x, medium.png 2x, large.png 3x">
</picture>
```

In that example you're still telling the browser what to do at different breakpoints, but now the browser has the option to choose the most appropriate image for the device's pixel density.

<div style="height: 500px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/PoJYrNB?height=500&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen PoJYrNB by web-dot-dev on Codepen" loading="lazy"></iframe></div>

## Cropping

If you only need to serve differently sized versions of the same image, `srcset` is your best option. But if an image doesn't look good at smaller sizes, you can try making a cropped version of the image instead.

The different images might have different width and height ratios to suit their context better. For example, on a mobile browser you may want to serve a crop that's narrow and tall, whereas on a desktop browser, you might want to serve a crop that's wide and short.

Here's an example of a hero image that changes its contents and its shape based on the viewport width. Add `width` and `height` attributes to each `source` element.

```html
<picture>
  <source srcset="full.jpg" media="(min-width: 75em)" width="1200" height="500">  
  <source srcset="regular.jpg" media="(min-width: 50em)" width="800" height="400">  
  <img src="cropped.jpg" alt="A description of the image." width="400" height="400" loading="eager" decoding="sync">
</picture>
```

<div style="height: 500px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/eYGOwzp?height=500&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen eYGOwzp by web-dot-dev on Codepen" loading="lazy"></iframe></div>

<p><video controls="" loop="" draggable="true"><source src="https://storage.googleapis.com/web-dev-uploads/video/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/WZLJGIUHqlP1j9s9aJaj.mp4" type="video/mp4"></video></p>

Remember that you ==can't change== the `alt` attribute depending on the image source. You'll need to write an `alt` attribute that describes both the full size image and the cropped image.

You probably won't need to use the `picture` element for most of your responsive images—the `srcset` and `sizes` attributes on the `img` element cover a lot of use cases. But for those situations when you need more fine-grained control, the `picture` element is a powerful tool.

There's one kind of image where you might not need either solution: icons. [That's what's next](https://web.dev/learn/design/icons/).

## Check your understanding

`srcset` 이미지 속성은 브라우저에게 해당 리소스를 쓰라고 권장 할 수 있는 기능이고
`<picture>` 태그는 브라우저에게 명령 할 수 있는 기능입니다.

`<picture>` 엘리먼트는 아래와 같은 기능의 대안이 될 수 있습니다.
- 이미지 크롭
	- 예 : 뷰포트에 의존하는 랜드스케이프(가로형) 이미지나 초상화(세로형)이미지
- 이미지 포맷
	- 예 : 다운로드 받기 쉬운 avif 이미지나 webp 이미지를 쓰세요 웬만하면.
- 이미지 사이즈
	- 예 : 큰 모니터엔 큰 이미지를 쓰세요(2배수 3배수)
- 이미지 밀도
	- 예 : HD 스크린 사용자를 위해 고퀄 이미지를 사용하세요.

---

