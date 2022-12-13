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
style:bullet
```
# Introduction to addons
Addons extend Storybook with features and integrations that are not built into the core. Most Storybook features are implemented as addons. For instance: [documentation](https://storybook.js.org/docs/react/writing-docs/introduction), [accessibility testing](https://github.com/storybookjs/storybook/tree/master/addons/a11y), [interactive controls](https://storybook.js.org/docs/react/essentials/controls), among others. The [addon API](https://storybook.js.org/docs/react/addons/addons-api) makes it easy for you to configure and customize Storybook in new ways. There are countless addons made by the community that unlock time-saving workflows.

Browse our [addon catalog](https://storybook.js.org/addons) to install an existing addon or as inspiration for your own addon.

## Storybook basics

Before writing your first [addon](https://storybook.js.org/addons), let’s take a look at the basics of Storybook’s architecture. While Storybook presents a unified user interface, under the hood it’s divided down the middle into **Manager** and **Preview**.

The **Manager** is the UI responsible for rendering the:

-   🔍 Search
-   🧭 Navigation
-   🔗 Toolbars
-   📦 Addons

The **Preview** area is an `iframe` where your stories are rendered.

![Storybook detailed window](https://storybook.js.org/f1d5213d42bc4321123f8a3d5f4b5076/manager-preview.jpg)

Because both elements run in their own separate `iframes`, they use a communication channel to keep in sync. For example when you select a story in the Manager an event is dispatched across the channel notifying the Preview to render the story.

## Anatomy of an addon

Storybook addons allow you to extend what's already possible with Storybook, everything from the [user interface](https://storybook.js.org/docs/react/addons/addon-types) to the [API](https://storybook.js.org/docs/react/addons/addons-api). Each one classified into two broader categories.

### UI-based addons

[UI-based addons](https://storybook.js.org/docs/react/addons/addon-types#ui-based-addons) focus on customizing Storybook's user interface to extend your development workflow. Examples of UI-based addons include: [Controls](https://storybook.js.org/docs/react/essentials/controls), [Docs](https://storybook.js.org/docs/react/writing-docs/introduction) and [Accessibility](https://github.com/storybookjs/storybook/tree/master/addons/a11y).

[[Develop/Trees/Expiriences/WEB/Fundamentals/Test/Tools/Storybook/Guides/Addons/Write|Learn how to write an addon]]

### Preset addons

[Preset addons](https://storybook.js.org/docs/react/addons/addon-types#preset-addons) help you integrate Storybook with other technologies and libraries. Examples of preset addons are: [preset-scss](https://github.com/storybookjs/presets/tree/master/packages/preset-scss) and [preset-create-react-app](https://github.com/storybookjs/presets/tree/master/packages/preset-create-react-app).

[[Develop/Trees/Expiriences/WEB/Fundamentals/Test/Tools/Storybook/Guides/Addons/Write a preset|Learn how to write a preset addon]]

<a href="https://github.com/storybookjs/storybook/tree/next/docs/addons/introduction.md" target="_blank" rel="noopener" class="e1soj9vu1 e1ja7avb2 css-1ii1tfm e1ja7avb1"><span class="css-1xdhyk6 e1ja7avb3"><span role="img" aria-label="write">✍️</span> <!-- -->Edit on GitHub – PRs welcome!</span></a>
