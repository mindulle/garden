---
# configs for document itself.
title: "Loaders"
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
# Loaders (experimental)
Loaders (experimental) are asynchronous functions that load data for a story and its [decorators](https://storybook.js.org/docs/react/writing-stories/decorators). A story's loaders run before the story renders, and the loaded data injected into the story via its render context.

Loaders can be used to load any asset, lazy load components, or fetch data from a remote API. This feature was designed as a performance optimization to handle large story imports. However, [args](https://storybook.js.org/docs/react/writing-stories/args) is the recommended way to manage story data. We're building up an ecosystem of tools and techniques around Args that might not be compatible with loaded data.

They are an advanced feature (i.e., escape hatch), and we only recommend using them if you have a specific need that other means can't fulfill. They are experimental in Storybook 6.1, and the APIs are subject to change outside of the normal semver cycle.

## Fetching API data

Stories are isolated component examples that render internal data defined as part of the story or alongside the story as [args](https://storybook.js.org/docs/react/writing-stories/args).

Loaders are helpful when you need to load story data externally (e.g., from a remote API). Consider the following example that fetches a todo item to display in a todo list:

```js
// TodoItem.stories.js|jsx|ts|tsx

import React from 'react';

import fetch from 'node-fetch';

import { TodoItem } from './TodoItem';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Examples/Loader'
  component: TodoItem,
};

export const Primary = (args, { loaded: { todo } }) => <TodoItem {...args} {...todo} />;
Primary.loaders = [
    async () => ({
      todo: await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json(),
    }),
];
```

```md
<!-- TodoItem.stories.mdx -->

import { Meta, Story } from '@storybook/addon-docs';

import fetch from 'node-fetch';

import { TodoItem } from './TodoItem';

<Meta title="Examples/Loader" component={TodoItem} />

<Story
  name="Primary"
  loaders={[
    async () => ({
      todo: await (
        await fetch('https://jsonplaceholder.typicode.com/todos/1')
      ).json(),
    }),
  ]}>
  {(args, { loaded: { todo } }) => (
    <TodoItem {...args} todo={todo} />
  )}
</Story>
```

The response obtained from the remote API call is combined into a `loaded` field on the story context, which is the second argument to a story function. For example, in React, the story's args were spread first to prioritize them over the static data provided by the loader. With other frameworks (e.g., Angular), you can write your stories as you'd usually do.

## Global loaders

We can also set a loader for **all stories** via the `loaders` export of your [`.storybook/preview.js`](https://storybook.js.org/docs/react/configure/overview#configure-story-rendering) file (this is the file where you configure all stories):

```js
// .storybook/preview.js

import fetch from 'node-fetch';

export const loaders = [
  async () => ({
    currentUser: await (await fetch('https://jsonplaceholder.typicode.com/users/1')).json(),
  }),
];
```

In this example, we load a "current user" available as `loaded.currentUser` for all stories.

## Loader inheritance

Like [parameters](https://storybook.js.org/docs/react/writing-stories/parameters), loaders can be defined globally, at the component level, and for a single story (as we’ve seen).

All loaders, defined at all levels that apply to a story, run before the story renders in Storybook's canvas.

-   All loaders run in parallel
-   All results are the `loaded` field in the story context
-   If there are keys that overlap, "later" loaders take precedence (from lowest to highest):
    -   Global loaders, in the order they are defined
    -   Component loaders, in the order they are defined
    -   Story loaders, in the order they are defined

## Known limitations

Loaders have the following known limitations:

-   They are not yet compatible with the storyshots addon ([#12703](https://github.com/storybookjs/storybook/issues/12703)).
-   They are not yet compatible with inline-rendered stories in Storybook Docs ([#12726](https://github.com/storybookjs/storybook/issues/12726)).

If you're interested in contributing to this feature, read our [contribution guide](https://storybook.js.org/docs/react/contribute/how-to-contribute) and submit a pull request with your work.

<a href="https://github.com/storybookjs/storybook/tree/next/docs/writing-stories/loaders.md" target="_blank" rel="noopener" class="e1soj9vu1 e1ja7avb2 css-1ii1tfm e1ja7avb1"><span class="css-1xdhyk6 e1ja7avb3"><span role="img" aria-label="write">✍️</span> Edit on GitHub – PRs welcome!</span></a>
