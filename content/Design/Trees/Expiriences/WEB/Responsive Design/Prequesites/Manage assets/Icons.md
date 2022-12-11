---
# configs for document itself.
title: "Icons"
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

> [!tldr] Icons
> Use SVG for scalable responsive iconography.

```toc
style: bullet
```

Most images are part of your content, but icons are part of your user interface. They should scale and adapt in the same way that the text of your UI scales and adapts.

## Scalable Vector Graphics

When it comes to photographic imagery, there are lots of choices for the image format: JPG, WebP, and AVIF. For non-photographic imagery, you have a choice between the Portable Network Graphics (PNG) format and the Scalable Vector Graphics (SVG) format.

Both PNGs and SVGs are good at dealing with areas of flat color, and they both allow your images to have transparent backgrounds. If you use a PNG you'll probably need to make multiple versions of your image in different sizes and use the `srcset` attribute on your `img` element to [make the image responsive](https://web.dev/learn/design/responsive-images/). If you use an SVG, it's responsive by default.

PNGs (and JPGs, WebP, and AVIF) are bitmap images. Bitmap images store information as pixels. In an SVG, information is stored as drawing instructions. When the browser reads the SVG file the instructions are converted into pixels. Best of all, these instructions are relative. Regardless of the dimensions you use to describe lines and shapes, everything renders at just the right crispness. Instead of creating multiple SVGs of different sizes you can make one SVG that will work at all sizes. There's no need to use the `srcset` attribute.

```html
<img src="image.svg" alt="A description of the image." width="25" height="25">
<img src="image.svg" alt="A description of the image." width="250" height="250">
```

<div style="height: 360px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/YzrKoWY?height=360&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen YzrKoWY by web-dot-dev on Codepen" loading="lazy"></iframe></div>

XML is used to write the instructions in an SVG file. This is a markup language, like HTML.

```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE svg>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-21 -21 42 42" width="100" height="100">
  <title>Smiling face</title>
  <circle r="20" fill="yellow" stroke="black"/> 
  <ellipse rx="2.5" ry="4" cx="-6" cy="-7" fill="black"/>
  <ellipse rx="2.5" ry="4" cx="6" cy="-7" fill="black"/>
  <path stroke="black" d="M -12,5 A 13.5,13.5,0 0,0 12,5 A 13,13,0 0,1 -12,5"/>
</svg>
```

![Smiley face.](https://web-dev.imgix.net/image/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/3F9ZFc3oOqhrPN6YU0Bd.svg)

You can even put SVG inside HTML.

```html
<figure>  
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-21 -21 42 42" width="100" height="100">   
    <title>Smiling face</title>
    <circle r="20" fill="yellow" stroke="black"/>   
    <ellipse rx="2.5" ry="4" cx="-6" cy="-7" fill="black"/>
    <ellipse rx="2.5" ry="4" cx="6" cy="-7" fill="black"/>    
  <path stroke="black" d="M -12,5 A 13.5,13.5,0 0,0 12,5 A 13,13,0 0,1 -12,5"/>  
  </svg>  
  <figcaption>  A description of the image. 
  </figcaption>
</figure>
```

If you embed an SVG like that, that's one less request that the browser needs to make. There'll be no wait for the image to download because it arrives with the HTML …*in* the HTML! Also, as you'll soon find out, embedding SVGs like this gives you more control over styling them too.

## Icons and text

Icon images often feature simple shapes on a transparent background. SVG is ideal for icons.

If you have a button or a link with text and an icon inside it, the icon is presentational. It's the text that matters. When using an `img` element, an empty `alt` attribute indicates that the image is presentational.

---
<aside class="aside flow bg-state-info-bg color-state-info-text"><div class="flow">An empty <code>alt</code> attribute is not the same as a missing <code>alt</code> attribute. Always provide an <code>alt</code> attribute even if an image is presentational and the <code>alt</code> attribute has no content.</div></aside>

---

```html
<button>
<img src="hamburger.svg" alt="" width="16" height="16">
Menu
</button>
```
<div style="height: 200px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/qBPWzam?height=200&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen qBPWzam by web-dot-dev on Codepen" loading="lazy"></iframe></div>

Because CSS is for presentation, you could put the icon in your CSS as a background image.

```html
<button class="menu">
Menu
</button>
```

```css
.menu {
  background-image: url(hamburger.svg); 
  background-position: 0.5em;  background
  repeat: no-repeat;  
  background-size: 1em;  
  padding-inline-start: 2em;
}
```

<div style="height: 200px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/gOGYNwj?height=200&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen gOGYNwj by web-dot-dev on Codepen" loading="lazy"></iframe></div>

If you put the SVG inside your HTML, use the `aria-hidden` attribute to hide it from assistive technology.

```html
<button class="menu">
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" width="16" height="16">
    <rect width="100" height="20" />
    <rect y="30" width="100" height="20"/>
    <rect y="60" width="100" height="20"/>
  </svg>
  Menu
</button>
```

<div style="height: 200px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/bGobPwz?height=200&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen bGobPwz by web-dot-dev on Codepen" loading="lazy"></iframe></div>

---
<aside class="aside flow bg-state-info-bg color-state-info-text"><div class="flow">If you use the same icon multiple times in one page, it would be inefficient to repeat the entire SVG markup each time. There's an element in SVG called <a href="https://developer.mozilla.org/docs/Web/SVG/Element/use"><code>use</code></a> which allows you to “clone” part of an SVG, even from a different SVG element.</div></aside>

---

## Standalone icons
Use text inside your buttons and links if you want their purpose to be clear. You can use an icon without any text but don't assume that everyone understands the meaning of a particular icon. When in doubt, test with real users.

If you decide to use an icon without any accompanying text, the icon is no longer presentational. A background image in CSS is not an appropriate way to display the icon. The icon needs to be given an accessible name in HTML.

If you use an `img` element, the icon gets its accessible name from the `alt` attribute.

---
<aside class="aside flow bg-state-info-bg color-state-info-text"><div class="flow">Usually the <code>alt</code> attribute describes the contents of the image (“Three horizontal lines.”) but with standalone icons, the <code>alt</code> attribute describes the meaning of the image (“Menu”).</div></aside>

---

```html
<button>
<img src="hamburger.svg" alt="Menu"" width="16" height="16">												</button>
```

<div style="height: 200px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/MWEgMbY?height=200&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen MWEgMbY by web-dot-dev on Codepen" loading="lazy"></iframe></div>

Another option is to put the accessible name on the link or button itself and declare that the image is presentational. Use the `aria-label` attribute to provide the accessible name.

```html
<button aria-label="Menu">
<img src="hamburger.svg" alt="" width="16" height="16">
</button>
```

<div style="height: 200px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/VwMZJmr?height=200&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen VwMZJmr by web-dot-dev on Codepen" loading="lazy"></iframe></div>

If you put the SVG inside your HTML, use the `aria-label` attribute on the link or button to give it an accessible name and use the `aria-hidden` attribute on the icon.

```html
<button aria-label="Menu">  
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" width="16" height="16">
    <rect width="100" height="20" />
    <rect y="30" width="100" height="20"/>   
    <rect y="60" width="100" height="20"/> 
  </svg>
</button>
```

<div style="height: 200px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/OJxLebB?height=200&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen OJxLebB by web-dot-dev on Codepen" loading="lazy"></iframe></div>

## Styling icons

If you embed your SVG icons directly in your HTML you can style parts of them just like any other element in your page. You can't do that if you use an `img` element to display your icons.

In the following example, the `rect` elements inside the SVG have a `fill` value of `blue` to match the styles for the button's text.

```css
button {
  color: blue;
}
button rect {
  fill: blue;
}
```

You can apply `hover` and `focus` styles too.

```css
button:hover,
button:focus {
  color: red;
}
button:hover rect,
button:focus rect {
  fill: red;
}
```

<div style="height: 200px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/rNGBEje?height=200&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen rNGBEje by web-dot-dev on Codepen" loading="lazy"></iframe></div>

## Resources

-   If you need to style SVGs that are background images in your CSS, read Una's article on [colorizing SVG backgrounds](https://css-tricks.com/solved-with-css-colorizing-svg-backgrounds/).
-   Sara Soueidan has written about [accessible icon buttons](https://www.sarasoueidan.com/blog/accessible-icon-buttons/).
-   Scott O'Hara has written about [contextually marking up accessible images and SVGs](https://www.scottohara.me/blog/2019/05/22/contextual-images-svgs-and-a11y.html).
-   If you're using a graphic design tool to export SVGs, use [SVGOMG](https://jakearchibald.github.io/svgomg/) to optimize the output.

Icons are an important part of your site's branding. Next you'll find out how to make other aspects of your branding responsive through the power of [theming](https://web.dev/learn/design/theming).

## Check your understanding
---
SVG 코드를 직접 HTML에 넣음으로서 얻는 이점은 아래와 같습니다.
- CSS를 통해 스타일을 변경 할 수 있습니다
	- SVG 아이콘을 버튼에 매치시키고 브랜드 컬러를 적용하세요.
- 다운로드가 필요치 않아집니다
	- 필요한건 코드에 다 들어있습니다.
- 새로운 에셋의 추가가 없이 간편하게 라이트 테마나 다크 테마를 적용 할 수 있습니다.
	- 미디어 쿼리를 적용해 인라인에서 SVG 스타일을 변경 할 수 있습니다.
---