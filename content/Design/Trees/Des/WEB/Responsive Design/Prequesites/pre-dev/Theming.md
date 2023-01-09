---
# configs for document itself.
title: "Theming"
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

> [!tldr] Theming
> Adapt your design to match user preferences such as a dark mode.

```toc
style: bullet
```
Even branding can be responsive. You can adjust the presentation of your website to match the user's preference. But first, here's how to extend your website's branding to include the browser itself.

## Customize the browser interface

Some browsers allow you to suggest a theme color based on your website's palette. The browser's interface adapts to your suggested color. Add the color in a `meta` element named `theme-color` in the `head` of your pages.

```html
<meta name="theme-color" content="#00D494">
```
---
<aside class="aside flow bg-state-info-bg color-state-info-text"><div class="flow">It feels a little strange to put styling information like this in HTML rather than CSS, <b>but this allows the browser to update its interface as soon as the page is loading rather than waiting for the CSS.</b></div></aside>

---
![Clearleft dot com.](https://web-dev.imgix.net/image/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/bM78eiZbOqwZ5doqKyaQ.png?auto=format)![Resilient Web Design dot com.](https://web-dev.imgix.net/image/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/kN9Un2PoYIKdVzH9I2Ac.png?auto=format)![The Session dot org.](https://web-dev.imgix.net/image/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/b8AUE0DLJX5uLhJH9kaE.png?auto=format)
> Three websites are viewed in the Safari browser. Each one has its own theme color that extends into the browser interface.

You can update the value of `theme-color` using JavaScript. But use this power wisely. It can be overwhelming for users if their browser's color scheme changes too often. Think about subtle ways to adjust the theme color. If the changes are too jarring, users will leave in annoyance.

You can also specify a theme color in a [web app manifest](https://developer.mozilla.org/docs/Web/Manifest) file. This is a JSON file with metadata about your website.

Link to the manifest file from the `head` of your documents. Use a `link` element with a `rel` value of `manifest`.

```html
<link rel="manifest" href="/manifest.json">
```

In the manifest file, list your metadata using key/value pairs.

```json
{  
  "short_name": "Clearleft",
  "name": "Clearleft design agency", 
  "start_url": "/",
  "background_color": "#00D494",
  "theme_color": "#00D494",  
  "display": "standalone"
}
```

If a visitor decides to add your website to their home screen, the browser will use the information in your manifest file to display an appropriate shortcut.

---
<aside class="aside flow bg-state-info-bg color-state-info-text"><div class="flow">Find out more about how to <a href="/add-manifest/"><b>add a web app manifest</b></a>.</div></aside>

---
## Provide a dark mode

Many operating systems allow users to specify a preference for a light or a dark color palette, which is a good idea to optimize your site to your user's theme preferences. You can access this preference in a media feature called `prefers-color-scheme`.

```css
@media (prefers-color-scheme: dark) {
  // Styles for a dark theme.
}
```

<div style="height: 400px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/wvrwLgN?height=400&amp;theme-id=dark&amp;default-tab=css%2C%20result&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen wvrwLgN by web-dot-dev on Codepen" loading="lazy"></iframe></div>
<p><video controls="" loop="" draggable="true"><source src="https://storage.googleapis.com/web-dev-uploads/video/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/hpMyDvtHUyLPz0ltO6SS.mp4" type="video/mp4"></video></p>

Specify theme colors with the `prefers-color-scheme` media feature within the `meta` element.

```html
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)">
```

You can also use the `prefers-color-scheme` media feature inside SVG. If you use an SVG file for your favicon, it can be adjusted for dark mode. [Thomas Steiner](https://web.dev/authors/thomassteiner/) wrote about __[`prefers-color-scheme` in SVG favicons for dark mode icons](https://blog.tomayac.com/2019/09/21/prefers-color-scheme-in-svg-favicons-for-dark-mode-icons/).__

## Theming with custom properties

If you use the same color values in multiple places throughout your CSS, it could be quite tedious to repeat all your selectors within a `prefers-color-scheme` media query.

```css
body {
  background-color: white;
  color: black;
}
input {
  background-color: white;
  color: black;
  border-color: black;
}
button {
  background-color: black;
  color: white;
}
@media (prefers-color-scheme: dark) {
  body {
    background-color: black;
    color: white;  
  }  
  input {
    background-color: black;
    color: white;    
    border-color: white;  
  }  
  button {
    background-color: white;
    color: black;  
  }
}
```

Use CSS custom properties to store your color values. **Custom properties** work like **variables in a programming language.** You can update the value of a variable without updating its name.

If you update the values of your custom properties within a `prefers-color-scheme` media query, you won't have to write all your selectors twice.

```css
html {
  --page-color: white;
  --ink-color: black;
}
@media (prefers-color-scheme: dark) {
  html {
    --page-color: black;
    --ink-color: white;
  }
}
body {
  background-color: var(--page-color);
  color: var(--ink-color);
}
input {
  background-color: var(--page-color);  
  color: var(--ink-color);  
  border-color: var(--ink-color);
}
button {
  background-color: var(--ink-color);
  color: var(--page-color);
}
```

<div style="height: 440px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/qBPWzrj?height=440&amp;theme-id=dark&amp;default-tab=css%2Cresult&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen qBPWzrj by web-dot-dev on Codepen" loading="lazy"></iframe></div>

See [building a color scheme](https://web.dev/building-a-color-scheme/) for more advanced examples of theming with custom properties.

## Images

If you are using SVGs in your HTML, you can apply custom properties there too.

```css
svg {
  stroke: var(--ink-color);
  fill: var(--page-color);
}
```

Now your icons will change their colors along with the other elements on your page.

If you want to tone down the brightness of your photographic images when displayed in dark mode, you can apply a filter in CSS.

```css
@media (prefers-color-scheme: dark) {
  img {
    filter: brightness(.8) contrast(1.2);
  }
}
```

![Three photographs at normal brightness.](https://web-dev.imgix.net/image/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/j4Hkz0lwHv1HOr3Qd6Wc.png?auto=format)![Three photographs with slightly less brightness.](https://web-dev.imgix.net/image/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/ChcCHA1JLRX4F2IaLOXR.png?auto=format)
> The effect is subtle, but you can tone down the brightness of images in dark mode.

For some images, you might want to swap them out completely in dark mode. For example, you might want to show a map with a darker color scheme. Use the `<picture>` element containing a `<source>` element with the `prefers-color-scheme` media query.

```html
<picture>
  <source srcset="darkimage.png" media="(prefers-color-scheme: dark)">  
  <img src="lightimage.png" alt="A description of the image.">
</picture>
```

<div style="height: 600px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/MWEgMmw?height=600&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen MWEgMmw by web-dot-dev on Codepen" loading="lazy"></iframe></div>

<p><video controls="" loop="" draggable="true"><source src="https://storage.googleapis.com/web-dev-uploads/video/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/8Sz0XmotUrwnbprrHtoZ.mp4" type="video/mp4"></video></p>

![Two maps of Broolyn, one using light colors and the other using dark colors.](https://web-dev.imgix.net/image/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/aX6PmKj8pQudiWgt4x31.png?auto=format)

Two versions of the same map, one for light mode and one for dark mode.

## Forms

Browsers provide a default color palette for form fields. Let the browser know that your site offers both a dark and a light mode. That way, the browser can provide the appropriate default styling for forms.

Add this to your CSS:

```css
html {
  color-scheme: light;
}
@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;  
  }
}
```

You can also use HTML. Add this in the `head` of your documents:

```html
<meta name="supported-color-schemes" content="light dark">
```

<div style="height: 400px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/dyVbBWZ?height=400&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen dyVbBWZ by web-dot-dev on Codepen" loading="lazy"></iframe></div>
<p><video controls="" loop="" draggable="true"><source src="https://storage.googleapis.com/web-dev-uploads/video/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/6YuAM0ZCNhGNAjpI8fyT.mp4" type="video/mp4"></video></p>
Use the [`accent-color`](https://web.dev/accent-color/) property in CSS to style checkboxes, radio buttons, and some other form fields.

```css
html {
  accent-color: red;
}
```

It's common for dark themes to have subdued brand colors. You can update the `accent-color` value for dark mode.

```css
html {
  accent-color: red;
}
@media (prefers-color-scheme: dark) {
  html {
    accent-color: pink;  
  }
}
```

It makes sense to use a custom property for this so you can keep all your color declarations in one place.

```css
html {
  color-scheme: light;
  --page-color: white;  
  --ink-color: black;  
  --highlight-color: red;
}
@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
    --page-color: black;    
    --ink-color: white;    
    --highlight-color: pink;  
  }
}
html {  accent-color: var(--highlight-color);}body {  background-color: var(--page-color);  color: var(--ink-color);}
```
<div style="height: 400px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/WNZeqjB?height=400&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen WNZeqjB by web-dot-dev on Codepen" loading="lazy"></iframe></div>
<p><video controls="" loop="" draggable="true"><source src="https://storage.googleapis.com/web-dev-uploads/video/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/Dl00EnG4mwTbSQIkYBF9.mp4" type="video/mp4"></video></p>

---
<aside class="aside flow bg-state-info-bg color-state-info-text"><div class="flow">For more on tinting elements with theme colors, see the section on <a href="https://web.dev/accent-color/#extra-more-tinting"><b>more tinting</b></a>.</div></aside>

---

Providing a dark mode is just one example of adapting your site to suit your user's preferences. Next you'll learn how to make your adaptable to all sorts of [accessibility](https://web.dev/learn/design/accessibility/) considerations.

## Check your understanding
---
웹 페이지 외부에서 브라우저에게 테마 컬러를 넘겨주고 싶다면 아래 목록에 있는 것들을 사용하세요.
- 웹 앱 매니페스트 파일
	- manifest.json 파일은 모바일 홈스크린 화면에서부터 앱이 열렸을 때 어떤 테마 색상으로 보일 지에 대한 값을 지정하고 제공할 수 있는 필드를 포함하고 있습니다.
	- manifest.json 파일에서 모바일 테마 색상 지정도 가능하다는 얘기.
- 'theme-color' `<meta>` 태그
	- 원치않는 눈뽕이나 시각적 테러 없이 OS에서 제공되는 테마 값을 브라우저가 읽어 브라우저에서도 스무스하게 동일한 테마를 미리 적용시킬 수 있다는 얘기

유저의 시스템에서 테마 정보를 읽어오고 싶다면
- css에서 prefer-color-scheme 미디어 쿼리를 사용하거나
	- 라이트든 다크든 가져온 뒤 원하는 식으로 미디어 쿼리를 적용시키세요
- 자바스크립트로 가져오세요.
	- 가져온 뒤 css에서 미디어 쿼리 문법을 적용해서 현재 선택된 테마가 무엇인지 알아내세요.

테마는 가져왔는데 form태그가 다 여전히 
새하얗거나 테마가 적용이 안되었을 수 있어요. 그럴땐 당황하지 말고
- html { color-scheme: light dark; } 구문을 css에 추가하세요.
	- 이 css를 적용하면 css를 이용해 테마를 적용해 줄 수 있습니다.
- `<meta name="supported-color-schemes" content="light dark">` 를 html 헤드 태그에 추가하세요.
	- 이 태그를 추가해주면 html이 알아서 테마에 맞게 input 태그를 수정해 줄 것입니다.
- 아니면 수동으로 input 태그에 css를 다 따로 작성 할 수도 있습니다.
	- 가능이야 하지만. 공수가 많이 들 것입니다.
---