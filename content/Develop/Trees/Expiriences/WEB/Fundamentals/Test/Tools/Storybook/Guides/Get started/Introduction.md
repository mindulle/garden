---
# configs for document itself.
title: "Introduction"
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
# Introduction to Storybook for React

Storybook is a tool for UI development. It makes development faster and easier by isolating components. This allows you to work on one component at a time. You can develop entire UIs without needing to start up a complex dev stack, force certain data into your database, or navigate around your application.

<video autoplay="" playsinline="" loop="" draggable="true"><source src="https://storybook.js.org/cdb19b23da5e96c112ff3b8fded28a82/storybook-hero-video-optimized-lg.mp4" type="video/mp4"></video>

Use Storybook to build small atomic components and complex pages in your web application. If it's a UI, you can build it with Storybook.

![Storybook relationship](https://storybook.js.org/3b2d67d88d14b230ce1a1e7eebbf4028/storybook-relationship.png)

Storybook helps you **document** components for reuse and automatically **visually test** your components to prevent bugs. Extend Storybook with an ecosystem of **addons** that help you do things like fine-tune responsive layouts or verify accessibility.

Storybook integrates with most popular JavaScript UI frameworks and (experimentally) supports server-rendered component frameworks such as [Ruby on Rails](https://rubyonrails.org/).

## Learning resources

If you want to learn more about the component-driven approach that Storybook enables, this [site](http://componentdriven.org/) is a good place to start.

If you want a guided tutorial through building a simple application with Storybook in your framework and language, our [tutorials](https://storybook.js.org/tutorials/) have your back.

Read on to learn Storybook basics and API!