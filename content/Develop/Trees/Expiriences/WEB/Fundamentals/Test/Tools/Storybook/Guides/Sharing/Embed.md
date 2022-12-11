---
# configs for document itself.
title: "Embed"
lastModified: "2022-12-10"
visibility: "public"

# configs for annotating data to obsidian dataview plugin.
noteImportance: ⭐⭐⭐⭐⭐
noteStatus: "in progress"
noteCertanity: "certain"
noteField:
  - "develop"
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
  - "ecosystem"

# configs to decide whether external contents are appropriate to me or not.
contentLevel:
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
  - "reference"
  - "realworld"

# configs for querying particular datas to specify notes which have been noted expirences related to particular subject.
# e.g. performance optimization using lighthouse in web development environments:
# tags=[#tree, #web, #lighthouse, #perfOpt]
tags:
  - "tree"
  - "storybook"
  - "test"
  - "web"
---
```toc
style: bullet
```
# Embed stories

Embed stories to showcase your work to teammates and the developer community at large. In order to use embeds, your Storybook must be published and publicly accessible.

Storybook supports `<iframe>` embeds out of the box. If you use Chromatic to [publish Storybook](https://storybook.js.org/docs/react/sharing/publish-storybook#publish-storybook-with-chromatic), you can also embed stories in Notion, Medium, and countless other platforms that support the oEmbed standard.

## Embed a story with the toolbar

Embed a story with the toolbar, paste the published story URL. For example:

```html
// oEmbed
https://5ccbc373887ca40020446347-bysekhynzd.chromatic.com/?path=/story/shadowboxcta--default

// iframe embed
<iframe
  src="https://5ccbc373887ca40020446347-bysekhynzd.chromatic.com/?path=/story/shadowboxcta--default&full=1&shortcuts=false&singleStory=true"
  width="800"
  height="260"
></iframe>
```

<iframe src="https://5ccbc373887ca40020446347-bysekhynzd.chromatic.com/?path=/story/shadowboxcta--default&amp;full=1&amp;shortcuts=false&amp;singleStory=true" width="800" height="260"></iframe>

## Embed a story without the toolbar

To embed a plain story without Storybook's toolbar, click the "open canvas in new tab" icon in the top-right corner of Storybook to get the canvas URL. For example:

```html
// oEmbed
https://5ccbc373887ca40020446347-bysekhynzd.chromatic.com/iframe.html?id=/story/shadowboxcta--default&viewMode=story

// iframe embed
 <iframe
  src="https://5ccbc373887ca40020446347-bysekhynzd.chromatic.com/iframe.html?id=shadowboxcta--default&viewMode=story&shortcuts=false&singleStory=true"
  width="800"
  height="200"
></iframe>
```

<iframe src="https://5ccbc373887ca40020446347-bysekhynzd.chromatic.com/iframe.html?id=shadowboxcta--default&amp;viewMode=story&amp;shortcuts=false&amp;singleStory=true" width="800" height="200"></iframe>
## Embed a docs page

Embed a component's docs page by replacing the viewMode=story with viewMode=docs in the story URL.

```js
// oEmbed
https://5ccbc373887ca40020446347-bysekhynzd.chromatic.com/iframe.html?id=/story/shadowboxcta--default&viewMode=docs

// iframe embed
 <iframe
  src="https://5ccbc373887ca40020446347-bysekhynzd.chromatic.com/iframe.html?id=shadowboxcta--default&viewMode=docs&shortcuts=false&singleStory=true"
  width="800"
  height="400"
></iframe>
```
<iframe src="https://5ccbc373887ca40020446347-bysekhynzd.chromatic.com/iframe.html?id=shadowboxcta--default&amp;viewMode=docs&amp;shortcuts=false&amp;singleStory=true" width="800" height="400"></iframe>
## Embed stories on other platforms

Every platform has different levels of embed support. Check the documentation of your service to see how they recommend embedding external content.

<details open=""><summary>How to embed in Medium</summary><p>Paste the Storybook URL into your Medium article, then press Enter. The embed will automatically resize to fit the story's height.</p><p>While editing an article, Medium renders all embeds non-interactive. Once your article is published, it will become interactive. <a href="https://medium.com/@ghengeveld/embedding-storybook-on-medium-ce8a280c03ad">Preview a demo on Medium</a>.</p><video autoplay="" muted="" playsinline="" loop=""><source src="https://storybook.js.org/e8ee2a6d4c61b1ba7e47ea0af91d3485/embed-medium-optimized.mp4" type="video/mp4"></video></details>

<details><summary>How to embed in Notion</summary><p>In your Notion document, type /embed, press Enter, and paste the story URL as the embed link. You can resize the embed as necessary.</p><p><img src="https://storybook.js.org/bd0a8fe3251447325805812be0bd1052/embed-notion.png" alt="Embed Notion"></p></details>

<details><summary>How to embed in Ghost</summary><p>Type <code>/html</code> in your Ghost post, press Enter and paste the iframe URL. You can resize the embed via the width and height properties as required.</p><p><img src="https://storybook.js.org/4f47c6a4ec9fddfe1e77e8e48ba23d15/embed-ghost.png" alt="Embed Ghost"></p></details>

<a href="https://github.com/storybookjs/storybook/tree/next/docs/sharing/embed.md" target="_blank" rel="noopener" class="e1soj9vu1 e1ja7avb2 css-1ii1tfm e1ja7avb1"><span class="css-1xdhyk6 e1ja7avb3"><span role="img" aria-label="write">✍️</span> <!-- -->Edit on GitHub – PRs welcome!</span></a>
