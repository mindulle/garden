---
# configs for document itself.
title: "User interface patterns"
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

> [!tldr] User interface patterns
> Consider some scommon UI elements that adopt to differenet screen sizes.
```toc
style: bullet
```

A design viewed on a small screen shouldn't look like a shrunk-down version of a large-screen layout. Likewise, a design viewed on a large screen shouldn't look like a blown-up version of a small-screen layout. Instead, the design needs to be flexible enough to adapt to all screen sizes. A successful responsive design makes the most of every form factor.

This means that some interface elements may need to look quite different depending on the context they're viewed in. __You might need to apply very different CSS to the same HTML codebase to make the most of different screen sizes.__ That can be quite a design challenge!

Here are some common challenges that you might face.

## Navigation

Displaying a list of navigation links is quite straightforward on a large screen. There's plenty of space to accommodate those links.

On a small screen, space is at a premium. When you're designing for this situation, it's tempting to hide navigation behind a button. The problem with this solution is that users have to then take two steps to get anywhere: open the menu, then choose an option. Until the menu is opened, the user is left wondering "where can I go?”

Try to find a strategy that avoids hiding your navigation. If you have a relatively small number of items, you can style the navigation to look good on small screens.

![The same website with five navigation links viewed in a mobile browser and viewed in a tablet browser. The navigation is visible on both devices.](https://web-dev.imgix.net/image/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/s1fif52p8RcE758OkSvB.png?auto=format)

That pattern won't scale if your navigation has lots of links. The navigation will look cluttered if the links wrap onto two or three lines on a small screen.

One possible solution is to keep links on one line but truncate[^1] the list at the edge of the screen. Users can swipe horizontally to reveal the links that aren't immediately visible. __This is the ==overflow== pattern.__

<p><video controls="" draggable="true"><source src="https://storage.googleapis.com/web-dev-uploads/video/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/jNM3gZrkksJc6banrxcE.mp4" type="video/mp4"></video></p>

__The advantage__ of this technique is that __it scales to any device width and any number of links.__ __The disadvantage__ is that users might __miss links that aren't initially visible.__ If you use this technique for your main navigation, __make sure the first few links are the most important ones and visually indicate that there are more items in the list.__ The previous example uses a gradient for this indicator.
- 자세히 보면 유튜브 LNB 영역 양 끝에 그라디언트가 적용되어 있음
---
1. 오버플로우 패턴을 적용 할 땐 가장 중요한것을 앞에 배치하는것을 잊지 말 것. 처음 보이지 않는 것들은 잘 노출되지 않기 마련임
2. 유튜브 예시에서는 양 끝에 하얀 그라디언트를 적용해주어 중앙에 자연스럽게 시선이 머물 수 있게 해줬음
---
As a last resort you could choose to have your navigation hidden by default and provide a toggle mechanism for users to show and hide the contents. This is called __progressive disclosure.__

![The same website with five navigation links viewed in a mobile browser and viewed in a tablet browser. The navigation is visible on the tablet, but hidden on the mobile device.](https://web-dev.imgix.net/image/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/DiGHrNu300JMj8i9X01U.png?auto=format)

__Make sure__ the button that toggles the display of the navigation __is labeled.__ Don't rely on an icon to be understood.
- 이해를 시키기 위해 아이콘에 몰빵하지 마라
- 라벨링을 꼭 시켜줘라.
- 아이콘으로 디자인을 했더라도 라벨링에 상응하는 이펙트가 있어야 유저가 현재 위치를 알 수 있을듯.

![Three unlabelled icons: the first is three horizontal lines; the second is three by three grid; the third is three circles arranged vertically.](https://web-dev.imgix.net/image/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/cyuj5HvE6x9c8OBiM527.png?auto=format)

An __unlabelled icon is "mystery meat”__ navigation—users won't know what's in there until they bite into it. Provide a text label to let users know what the button will reveal.

<p><video controls="" loop="" draggable="true"><source src="https://storage.googleapis.com/web-dev-uploads/video/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/jzRDWQyKNcV1JNBU6mYS.mp4" type="video/mp4"></video></p>
## Carousels

What's true of navigation is also true of other content: try not to hide anything anyway. A carousel is a common method of hiding content away. __It(navigation) can look quite neat, but there's a good chance that your users will never discover the hidden content.__ 

__Carousels are better at solving organizational problems__—like what content should feature on the homepage(홈페이지 소개 등에서)—than at serving users.
- 캐러셀은 컨텐츠의 복잡한 구조 문제를 해결하는 데 유용한 방법입니다.
- 유저를 강제로 이동시키는 것(서빙) 보다요!

That said, when space is at a premium, carousels can prevent a page getting too long and cluttered. You could employ a hybrid approach: __show content in a ==carousel== for ==small screens==__, but __display the same content in a ==grid== for ==larger screens.==__
- 작은화면엔 캐러셀을
- 큰화면엔 그리드를
- (미디어 쿼리 적용)

For ==__narrow screens__==, display items in a row using flexbox. The row of items will extend beyond the edge of the screen. Use `overflow-x: auto` to allow horizontal swiping.

- 캐러셀 적용
```css
@media (max-width: 50em) {
  .cards {
    display: flex;
    flex-direction: row;    
    overflow-x: auto;    
    scroll-snap-type: inline mandatory;
    scroll-behavior: smooth;  
  }
  .cards .card {
    flex-shrink: 0;
    flex-basis: 15em;
    scroll-snap-align: start;  
  }
}
```

---
<aside class="aside flow bg-state-info-bg color-state-info-text"><div class="flow">The logical version of <code>overflow-x</code> is <a href="https://developer.mozilla.org/docs/Web/CSS/overflow-inline"><code><b>overflow-inline</b></code></a> which would better match with the value for <code>scroll-snap-type</code>. This example uses the physical version for better cross-browser support.</div></aside>

---

The [`scroll-snap`](https://web.dev/css-scroll-snap/) properties ensure that the items can be swiped in a way that feels smooth. Thanks to `scroll-snap-type: inline mandatory`, the items snap into place.

When the screen is large enough—wider than `50em` in this case—switch over to grid and display the items in rows and columns, without hiding anything.

- 그리드 적용
```css
@media (min-width: 50em) {
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));  
  }
}
```

<div style="height: 500px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/XWeNPzY?height=500&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen XWeNPzY by web-dot-dev on Codepen" loading="lazy"></iframe></div>

<p><video controls="" draggable="true"><source src="https://storage.googleapis.com/web-dev-uploads/video/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/jw00jziSxqLm3JBYRk5o.mp4" type="video/mp4"></video></p>
Crucially, an item in the carousel view doesn't take up the full width. If it did, there would be no indication that more content is available beyond the edge of the viewport.

Carousels are another example of the overflow pattern in action. If you have many items that people can browse through, you could keep using the overflow pattern even on large screens, including televisions. This [media scroller](https://gui-challenges.web.app/media-scroller/dist/) uses multiple carousels to manage a significant amount of options.

Again, the `scroll-snap` properties ensure that the interaction feels smooth. Also, notice that the images in the carousel have `loading="lazy"` applied to them. In this case, the images aren't below the fold, they're beyond the edge, but the same principle applies: if the user never swipes as far as that item, the image won't be downloaded, saving on bandwidth.

<div style="height: 500px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/argyleink/embed/bGgyOGP?height=500&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen bGgyOGP by argyleink on Codepen" loading="lazy"></iframe></div>

---
<aside class="aside flow bg-state-info-bg color-state-info-text"><div class="flow">The previous example shows a more complete demo, you can read more about it in the article <a href="/building-a-media-scroller-component/">building a media scroller component</a>.</div></aside>

---
With the addition of JavaScript, you can add interactive controls to a carousel. You could even make it automatically cycle through items. But think long and hard before doing that—autoplaying might work if the carousel is the only content on the page, but an autoplaying carousel is incredibly annoying if someone is trying to interact with other content (like reading text, for example). You can read more [carousel best practices](https://web.dev/carousel-best-practices/).

## Data tables
The `table` element is perfect for structuring tabular data; rows and columns of related information. But if the table gets too large, it could break your small-screen layout.

You can apply the overflow pattern to tables. In this example, the table is wrapped in a `div` with a class of `table-container`.

```css
.table-container {
  max-inline-size: 100%;
  overflow-x: auto;  
  scroll-snap-type: inline mandatory;
  scroll-behavior: smooth;
}
.table-container th,
.table-container td {
  scroll-snap-align: start;
  padding: var(--metric-box-spacing);
}
```

<div style="height: 500px; width: 100%"><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" src="https://codepen.io/web-dot-dev/embed/MWEbqQQ?height=500&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" style="height: 100%; width: 100%; border: 0;" title="Pen MWEbqQQ by web-dot-dev on Codepen" loading="lazy"></iframe></div>

## Guidelines

The overflow pattern is a good compromise for small screens but make sure it's clear that the off-screen content is reachable. Consider placing a shadow or a gradient over the edge where content is truncated.

Progressive disclosure is a useful way to save space, but be careful about using it for very important content. It's better suited to secondary actions. Ensure the interface element that triggers the disclosure is clearly labeled—don't rely on iconography alone.

Design for smaller screens first. It's easier to adapt small-screen designs to larger screens than the other way around. If you design for a large screen first, there's a danger that your small-screen design will feel like an afterthought.

For more layout and UI element patterns, explore the web.dev [Patterns](https://web.dev/patterns) section.

When you're adapting interface elements to different screen sizes, media queries are very useful for figuring out the dimensions of the device. But media features like `min-width`and `min-height` are just the beginning. Next, you'll discover a whole host of other media features.

- UI/레이아웃 패턴은 web.dev의 Patterns 섹션을 살펴봅시다.

[^1]: turncate. 끄트머리를 자르다