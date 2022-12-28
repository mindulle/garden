---
# configs for document itself.
title: "Naming components and hierarchy"
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
# Naming components and hierachy
The title of the component you export in the `default` export controls the name shown in the sidebar.

```js
// Button.stories.js|jsx|ts|tsx

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};
```

Yields this:

![Stories hierarchy without paths](https://storybook.js.org/d1811f799db5809f55731946b915167a/naming-hierarchy-no-path.png)

## Grouping

It is also possible to group related components in an expandable interface in order to help with Storybook organization. To do so, use the `/` as a separator:

```
// Button.stories.js|jsx|ts|tsx

import { Button } from './Button';

export default {
   /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Design System/Atoms/Button',
  component: Button,
};
```

```
// Checkbox.stories.js|jsx|ts|tsx

import { CheckBox } from './Checkbox';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Design System/Atoms/Checkbox',
  component: CheckBox,
};
```

Yields this:

![Stories hierarchy with paths](https://storybook.js.org/ec15553b8edeb2cecc0a5d38a8fdadcf/naming-hierarchy-with-path.png)

## Roots

By default the top-level grouping will be displayed as a “root” in the UI (the all-caps, non expandable grouping in the screenshot above). If you prefer, you can [configure Storybook](https://storybook.js.org/docs/react/configure/sidebar-and-urls#roots) to not show roots.

We recommend naming components according to the file hierarchy.

## Single story hoisting

Stories which have **no siblings** (i.e. the component has only one story) and which **display name** exactly matches the component name (last part of `title`) will be hoisted up to replace their parent component in the sidebar. This means you can have stories files like this:

```js
// Button.stories.js|jsx|ts|tsx

import { Button as ButtonComponent } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Design System/Atoms/Button',
  component: ButtonComponent,
};

// This is the only named export in the file, and it matches the component name
export const Button = (args) =>({
  //👇  Your story implementation goes here
});
```

This will then be visually presented in the sidebar like this:

![Stories hierarchy with single story hoisting](https://storybook.js.org/228f28750bdafc727a1c170971476c45/naming-hierarchy-single-story-hoisting.png)

Because story exports are automatically "start cased" (`myStory` becomes `"My Story"`), your component name should match that. Alternatively you can override the story name using `myStory.storyName = '...'` to match the component name.

## Sorting stories

By default, stories are sorted in the order in which they were imported. This can be overridden by adding `storySort` to the `options` parameters in your `preview.js` file.

The most powerful method of sorting is to provide a function to `storySort`. Any custom sorting can be achieved with this method.

```js
// .storybook/preview.js

export const parameters = {
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};
```

The `storySort` can also accept a configuration object.

```js
// .storybook/preview.js

export const parameters = {
  options: {
    storySort: {
      method: '',
      order: [], 
      locales: '', 
    },
  },
};
```

| Field | Type | Description | Required | Default Value | Example |
| --- | --- | --- | --- | --- | --- |
| **method** | String | Tells Storybook in which order the stories are displayed | No | Storybook configuration | `'alphabetical'` |
| **order** | Array | The stories to be shown, ordered by supplied name | No | Empty Array `[]` | `['Intro', 'Components']` |
| **includeName** | Boolean | Include story name in sort calculation | No | `false` | `true` |
| **locales** | String | The locale required to be displayed | No | System locale | `en-US` |

To sort your stories alphabetically, set `method` to `'alphabetical'` and optionally set the `locales` string. To sort your stories using a custom list, use the `order` array; stories that don't match an item in the `order` list will appear after the items in the list.

The `order` array can accept a nested array in order to sort 2nd-level story kinds. For example:

```js
// .storybook/preview.js

export const parameters = {
  options: {
    storySort: {
      order: ['Intro', 'Pages', ['Home', 'Login', 'Admin'], 'Components'],
    },
  },
};
```

Which would result in this story ordering:

1.  `Intro` and then `Intro/*` stories
2.  `Pages` story
3.  `Pages/Home` and `Pages/Home/*` stories
4.  `Pages/Login` and `Pages/Login/*` stories
5.  `Pages/Admin` and `Pages/Admin/*` stories
6.  `Pages/*` stories
7.  `Components` and `Components/*` stories
8.  All other stories

If you want certain categories to sort to the end of the list, you can insert a `*` into your `order` array to indicate where "all other stories" should go:

```js
// .storybook/preview.js

export const parameters = {
  options: {
    storySort: {
      order: ['Intro', 'Pages', ['Home', 'Login', 'Admin'], 'Components', '*', 'WIP'],
    },
  },
};
```

In this example, the `WIP` category would be displayed at the end of the list.

Note that the `order` option is independent of the `method` option; stories are sorted first by the `order` array and then by either the `method: 'alphabetical'` or the default `configure()` import order.

<a href="https://github.com/storybookjs/storybook/tree/next/docs/writing-stories/naming-components-and-hierarchy.md" target="_blank" rel="noopener" class="e1soj9vu1 e1ja7avb2 css-1ii1tfm e1ja7avb1"><span class="css-1xdhyk6 e1ja7avb3"><span role="img" aria-label="write">✍️</span> Edit on GitHub – PRs welcome!</span></a>
