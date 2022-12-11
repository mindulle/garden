---
# configs for document itself.
title: "Browse stories"
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
# Browse Stories
Last chapter, we learned that stories correspond with discrete component states. This chapter demonstrates how to use Storybook as a workshop for building components.

## Sidebar and Canvas
A `*.stories.js` file defines all the stories for a component. Each story has a corresponding sidebar item. When you click on a story, it renders in the Canvas an isolated preview iframe.

<video autoplay="" playsinline="" loop="" draggable="true"><source src="https://storybook.js.org//f818682edbbcdf2c04093f633aa36761/example-browse-all-stories-optimized.mp4" type="video/mp4"></video>

Navigate between stories by clicking on them in the sidebar. Try the sidebar search to find a story by name.

Or use keyboard shortcuts. Click on the Storybook's menu to see the list of shortcuts available.

<video autoplay="" playsinline="" loop="" draggable="true"><source src="https://storybook.js.org/b398f68ed8889feed0a52f077510efcf/storybook-keyboard-shortcuts-optimized.mp4" type="video/mp4"></video>

## Toolbar

Storybook ships with time-saving tools built-in. The toolbar contains tools that allow you to adjust how the story renders in the Canvas:

![Storybook toolbar](https://storybook.js.org/d65c247156e3ed2262e63a3a5ec02b82/toolbar.png)

-   🔍 Zooming visually scales the component so you can check the details.
-   🖼 Background changes the rendered background behind your component so you can verify how your component renders in different visual contexts.
-   📱 Viewport renders the component in a variety of dimensions and orientations. It’s ideal for checking the responsiveness of components.

<video autoplay="" playsinline="" loop="" draggable="true"><source src="https://storybook.js.org//8b083907d74e7f2b9a298e5f324cc751/toolbar-walkthrough-optimized.mp4" type="video/mp4"></video>

The [“Docs”](https://storybook.js.org/docs/react/writing-docs/introduction) tab shows auto-generated documentation about components (inferred from the source code). Usage docs are helpful when sharing reusable components with your team, for example, in a design system or component library.

<video autoplay="" playsinline="" loop="" draggable="true"><source src="https://storybook.js.org/07234fedf00ba418879c443de0764c1c/toolbar-docs-tab-optimized.mp4" type="video/mp4"></video>

The toolbar is customizable. You can use [globals](https://storybook.js.org/docs/react/essentials/toolbars-and-globals) to quickly toggle themes and languages. Or install Storybook toolbar [addons](https://storybook.js.org/docs/react/configure/storybook-addons) from the community to enable advanced workflows.

## Addons

Addons are plugins that extend Storybook's core functionality. You can find them in the addons panel, a reserved place in the Storybook UI below the Canvas. Each tab shows the generated metadata, logs, or static analysis for the selected story by the addon.

![Storybook addon examples](https://storybook.js.org/2b879453b03dfe3bf69e7adf6059961a/addons.png)

-   **Controls** allows you to interact with a component’s args (inputs) dynamically. Experiment with alternate configurations of the component to discover edge cases.
-   **Actions** help you verify interactions produce the correct outputs via callbacks. For instance, if you view the “Logged In” story of the Header component, we can verify that clicking the “Log out” button triggers the `onLogout` callback, which would be provided by the component that made use of the Header.

<video autoplay="" playsinline="" loop="" draggable="true"><source src="https://storybook.js.org/946b2f4bdb006e8475d21202d68b9eec/addons-walkthrough-optimized.mp4" type="video/mp4"></video>

Storybook is extensible. Our rich ecosystem of addons helps you test, document, and optimize your stories. You can also create an addon to satisfy your workflow requirements. Read more in the [addons section](https://storybook.js.org/docs/react/addons/introduction).

In the next chapter, we'll get your components rendering in Storybook so you can use it to supercharge component development.

## Use stories to build UIs

When building apps, one of the biggest challenges is to figure out if a piece of UI already exists in your codebase and how to use it for the new feature you're building.

Storybook catalogues all your components and their use cases. Therefore, you can quickly browse it to find what you're looking for.

Here's what the workflow looks like:

-   🗃 Use the sidebar to find a suitable component
-   👀 Review its stories to pick a variant that suits your needs
-   📝 Copy/paste the story definition into your app code and wire it up to data

You can access the story definition from the stories file or make it available in your published Storybook using the [Storysource addon](https://storybook.js.org/addons/@storybook/addon-storysource/) or the [Docs addon](https://storybook.js.org/docs/react/writing-docs/doc-block-source).

![Docs blocks with source](https://storybook.js.org/04a2bd3445a62d187f85df4073468535/docblock-source.png)