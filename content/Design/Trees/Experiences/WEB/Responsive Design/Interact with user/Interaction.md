---
# configs for document itself.
title: "Interaction"
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

> [!tldr] Interaction
> Prepare your pages for different input mechanism; mouse, keyboard, and touch.
```toc
style: bullet
```

Small screen devices like mobile phones often have touchscreens. Large screen devices like laptops and desktop computers often come with hardware like a mouse or a trackpad. It’s tempting to equate small screens with touch and large screens with pointers.

But the reality is more ==nuanced==[^1]. Some laptops have touch screen capabilities. Users can interact with either a touchscreen or a trackpad or both. Likewise it’s possible to use an external keyboard or mouse with a touchscreen device like a tablet.

Instead of trying to infer the input mechanism from screen size, use media features in CSS.

## Pointer

You can test for three possible values with the `pointer` media feature: `none`, `coarse`, and `fine`.

If a browser reports a `pointer` value of __`none`__ the user might be using ==a keyboard== to interact with your website.

If a browser reports a `pointer` value of __`coarse`__ it means the primary input mechanism isn’t very accurate. A ==__finger== on a touchscreen__ is a ==__coarse__ pointer==.

If a browser reports a `pointer` value of __`fine`__ it means the primary input mechanism is capable of fine-grained control. ==A mouse or stylus is a fine pointer.==

You can adjust the size of your interface elements to suit the `pointer` value. Try visiting [this website](https://gui-challenges.web.app/settings/dist/) in different kinds of devices to see how the interface adapts.

In this example, buttons are made larger for coarse pointers:

```css
button {
  padding: 0.5em 1em;
}

@media (pointer: coarse) {
  button {
    padding: 1em 2em;  
  }
}
```

It’s possible to also make elements smaller for fine pointers but be careful about doing this:

<span style="color:red">Don't</span>

```css
@media (pointer: fine) {
  button {
    padding: 0.25em 0.5em;  
  }
}
```

Even if someone has a primary input mechanism capable of fine-grained control, __think twice__ before __reducing the size of ==interactive elements.__== [Fitts’s Law](https://ko.wikipedia.org/wiki/%ED%94%BC%EC%B8%A0%EC%9D%98_%EB%B2%95%EC%B9%99) still applies. A __smaller target__ requires __more concentration even with a fine pointer.__ A larger target area benefits everyone regardless of pointing device.

- fine pointer 대상이라도 버튼을 너무 작게 만들지 말 것

## Any pointer

The `pointer` media feature reports the fineness of the *primary* input mechanism. But many devices have more than one input mechanism. It’s possible that someone is interacting with your website using both a touchscreen and a mouse at the same time.

The `any-pointer` differs from the `pointer` media feature in that it reports if any pointing device passes the test.

An `any-pointer` value of `none` means that no pointing device is available.

An `any-pointer` value of `coarse` means that at least one pointing device is not very accurate. But that might not be the primary input mechanism.

An `any-pointer` value of `fine` means that at least one pointing device is capable of fine-grained control. But again, this might not be the primary input mechanism.

Because the `any-pointer` media query will report a positive result if *any* of the input mechanisms pass the test, it’s possible for a browser to report a result for `any-pointer: fine` and also report a result for `any-pointer: coarse`. In that case __the order of your media queries__ matters. The __last one will take precedence.__

__In this example, if the device has both a fine and a coarse input mechanism, the coarse styles are applied.__

```css
@media (any-pointer: fine) {
  button {
    padding: 0.5em 1em;  
  }
}

@media (any-pointer: coarse) {
  button {
    padding: 1em 2em;  
  }
}
```

- any 포인터는 여러개가 존재 할 수 있고 브라우저가 그 포인터를 두가지 다 지원하는 상황 일 수 있습니다.
- 이럴땐 개발자가 미디어 쿼리를 짠 순서가 우선순위가 높아집니다. __마지막에__ 짠 애니 포인터 미디어 기능이 적용됩니다.

## Hover

The `hover` media feature reports on whether the primary input mechanism __can hover over elements.__ This usually means there’s some kind of cursor on the screen being controlled by __a mouse or a trackpad__.

- 마우스나 트랙패드에선 포인터의 위치가 실제 엘리먼트 영역 밖까지 튀어나갈 수 있습니다.(그러면서 호버됨)

Unlike the `pointer` media feature which differentiates between fine and coarse pointers, the `hover` media feature is binary. If the primary input device is capable of hovering over elements it will report a value of `hover`. Otherwise the value is `none`.

- 입력장치가 호버를 감지 할 수 있으면(마우스나 트랙패드면) hover를 넘겨줄 것이고
- 그렇지 않으면 none을 넘겨줄 것입니다.

In this example, some supplementary icon is available on hover but only if the primary input device is capable of hovering over an element.

```css
button .extra {
  visibility: visible;
}

@media (hover: hover) {
  button .extra {
    visibility: hidden;  
  }
  button:hover .extra {
    visibility: visible;  
  }
}
```

<div style="height: 200px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/VwMrYav?height=200&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen VwMrYav by web-dot-dev on Codepen" loading="lazy"></iframe></div>

If you use your mouse to hover over that button, the icon will appear. But if you use your keyboard to tab to the button, the icon remains invisible. When you use the keyboard, you’re focusing rather than hovering. A desktop device with a mouse attached will report that the primary input mechanism is capable of hovering, which is true. But anyone using a keyboard while a mouse is attached won’t get the benefit of the `:hover` styles. So it’s a good idea to __combine `:hover` and `:focus` styles to cover both interactions.__

```css
button .extra {
  visibility: visible;
}
@media (hover: hover) {
  button .extra {
    visibility: hidden;  
  }
  button:is(:hover, :focus) .extra {
    visibility: visible;  
  }
}
```

<div style="height: 200px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/VwMrYav?height=200&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen VwMrYav by web-dot-dev on Codepen" loading="lazy"></iframe></div>

Even if the primary input device is capable of hovering over elements, __be careful about hiding information behind a hover interaction.__ The information becomes less discoverable. Don’t use hover to hide important information or an important interface element.

- pseudo-class : 이벤트 변화를 css에서 다루기 위한 개념
- pseudo-element : 시각적 변화를 css에서 다루기 위한 개념
- 메인 개념 자체는 이미 css에 class, element 개념이 다 있는데. 그 친구들이 js, 브라우저와 상호작용을 반복하므로 상대방이 그 class와 element에 무언가 요구를 하는 상황이 있다.
- 그러니까 class와 element개념이 개발단에서. 만들어 질 때(개발 할 때)에 css를 다루기 위함이었다면
- pseudo class, pseudo element는 만들어 지고 나서 개발단 외의 다른 곳(유저나 브라우저)에서 만들어둔 element나 class에 변화를 주고 싶어 할 때를 대응하기 위한 개념이라는 것. 
- 위 코드 예시는 해석해보자면
	- (유저가 호버하거나 포커싱 한) 버튼 에 .extra 클래스를 다음과 같이 적용하시오.
	- 라는 말
## Any hover

The `hover` media query only reports on the *primary* input mechanism. Some devices have multiple input mechanisms: touchscreen, mouse, keyboard, trackpad.

Just as `any-pointer` reports on any of the input mechanisms, `any-hover` will be true if any of the available input mechanisms are capable of hovering over elements.

If you decided to reverse the logic in the previous example, you could make the hover styles the default and then remove them if `any-hover` has a value of `none`.

```css
button .extra {
  visibility: hidden;
}
button:hover .extra,
button:focus .extra {
  visibility: visible;
}
@media (any-hover: none) {
  button .extra {
    visibility: visible;  
  }
}
```

<div style="height: 200px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/Bawmyzd?height=200&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen Bawmyzd by web-dot-dev on Codepen" loading="lazy"></iframe></div>

On a device that has no input mechanism capable of hovering, the extra icon is always visible.

## Virtual keyboards

People use cursors and fingers to explore interfaces but when it comes time to enter information, they need a keyboard. That’s fine if there’s a physical keyboard attached to their device, but if they’re using a touchscreen device it’s a little more complicated. These devices provide on-screen virtual keyboards.

### Input types

Unlike a physical keyboard, virtual keyboards can be tailored to match the expected input. If you provide information about the expected input, devices can serve up the most appropriate virtual keyboard.

[HTML5 input types](https://developer.mozilla.org/docs/Learn/Forms/HTML5_input_types) are a great way of describing your `input` elements. The `type` attribute accepts values such as `email`, `number`, `tel`, `url`, and more.

```html
  <label for="email">Email</label>  
  <input type="email" id="email">
```

```html
  <label for="number">Number</label>  
  <input type="number" id="number">
```

```html
  <label for="tel">Tel</label>  
  <input type="tel" id="tel">
```

```html
  <label for="url">URL</label>  
  <input type="url" id="url">
```

<div style="height: 400px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/zYEPxBX?height=400&amp;theme-id=dark&amp;default-tab=html%2C%20result&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen zYEPxBX by web-dot-dev on Codepen" loading="lazy"></iframe></div>

<p><video controls="" loop="" draggable="true"><source src="https://storage.googleapis.com/web-dev-uploads/video/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/xdbqHZ1fp2O8FpwXWQAH.mp4" type="video/mp4"></video></p>

### Input modes
- 생각보다 사소한 부분이지만 모바일 대응에서 UX에 큰 영향을 준다. 기억해 둘 것.

[The `inputmode` attribute](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/inputmode) gives you fine-grained control over virtual keyboards. For example, whereas there’s one `input` `type` with a value of `number`, you can use the `inputmode` attribute to differentiate between whole numbers and decimals.

If you’re asking for a whole number, like somebody’s age, use `inputmode="numeric"`.

```html
<label for="age">Age</label>
<input type="number" id="age" inputmode="numeric">
```

If you’re asking for a number that includes decimal places, like a price, use `inputmode="decimal"`.

```html
<label for="price">Price</label>
<input type="number" id="price" inputmode="decimal">
```

<div style="height: 300px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/mdBqyrO?height=300&amp;theme-id=dark&amp;default-tab=html%2C%20result&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen mdBqyrO by web-dot-dev on Codepen" loading="lazy"></iframe></div>
<p><video controls="" loop="" draggable="true"><source src="https://storage.googleapis.com/web-dev-uploads/video/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/gr0tQXIZDgRNFcExwN8W.mp4" type="video/mp4"></video></p>

### Autocomplete

Nobody likes filling in forms. As a designer, you can improve the experience for your users by enabling them to automatically fill in form fields. [The `autocomplete` attribute](https://developer.mozilla.org/docs/Web/HTML/Attributes/autocomplete) provides you with a host of options for improving contact forms, __log-in forms__, and __checkout forms.__

```html
<label for="name">Name</label><input type="text" id="name" autocomplete="name">
```

```html
<label for="country">Country</label><input type="text" id="country" autocomplete="country">
```

```html
<label for="email">Email</label><input type="email" id="email" autocomplete="email">
```

These HTML attributes—`type`, `inputmode`, and `autocomplete`—are small additions to your form fields, but they can make a big difference to the user experience. By anticipating and responding to your user’s device capabilities, you are empowering your users. For more in-depth information, there’s a course dedicated to helping you [learn forms](https://web.dev/learn/forms/).

Next up in this course, it’s time to examine some [common interface patterns](https://web.dev/learn/design/ui-patterns/).

## Check your understanding

---
유저의 스크린 사이즈를 알아내기 위한 좋은 방법은 무엇입니까?
- CSS media feature를 사용하십시오.
	- @media (pointer: coarse) 혹은
	- @media (-any-pointer: coarse)를 사용하십시오.
애니 포인터 미디어 쿼리와 그냥 포인터 미디어 쿼리의 차이점은?
- 애니 포인터는 프라이머리 인풋이 아닐 때에도(스타일러스[^2] 환경이나 테스트 제어 상황일 때) true를 반환한다는 것입니다.
버추얼 키보드는 아래 모든 input 태그의 타입에 대응이 가능합니다.
- type="url"
- type="tel"
- type="number"
- type="email"
그러니 __인풋태그의 타입을__ 잘 지정해 주십시오. 스무스한 ux를 제공합니다.
---

[^1]: 미묘한
[^2]: stylus, 첨필, 필기 정도로 이해하면 좋을듯