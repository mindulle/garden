---
# configs for document itself.
title: "Parameters"
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
# Parameters

Parameters are a set of static, named metadata about a story, typically used to control the behavior of Storybook features and addons.

For example, let’s customize the backgrounds addon via a parameter. We’ll use `parameters.backgrounds` to define which backgrounds appear in the backgrounds toolbar when a story is selected.

## Story parameters

We can set a parameter for a single story with the `parameters` key on a CSF export:

```js
// Button.stories.js|ts|jsx|tsx

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

const Template = (args) => ({
  // 👈 Your template goes here
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
Primary.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
      { name: 'blue', value: '#00f' },
    ],
  },
};
```

```md
<!-- Button.stories.mdx -->

import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './Button';

<Meta title="Button" component={Button} />

export const Template = (args) =>({
  // 👈 Your template goes here
});

<Story
  name="Primary"
  parameters={{
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  }}
  args={{
    primary: true,
    label: 'Button',
  }}>
  {Template.bind({})}
</Story>
```
## Component parameters

We can set the parameters for all stories of a component using the `parameters` key on the default CSF export:

```js
// Button.stories.js|jsx

import React from 'react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  //👇 Creates specific parameters for the story
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
};
```

```ts
// Button.stories.ts|tsx

import React from 'react';

import { ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  //👇 Creates specific parameters for the story
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
} as ComponentMeta<typeof Button>;
```

```md
<!-- Button.stories.mdx -->

import { Meta } from '@storybook/addon-docs';

import { Button } from './Button';

<!-- 👇 Creates specific parameters for the story -->
<Meta
  title="Button"
  component={Button}
  parameters={{
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  }}
/>

<!-- Your story implementation -->
```

## Global parameters

We can also set the parameters for **all stories** via the `parameters` export of your [`.storybook/preview.js`](https://storybook.js.org/docs/react/configure/overview#configure-story-rendering) file (this is the file where you configure all stories):

```js
// .storybook/preview.js

export const parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
    ],
  },
};
```

Setting a global parameter is a common way to configure addons. With backgrounds, you configure the list of backgrounds that every story can render in.

## Rules of parameter inheritance

The way the global, component and story parameters are combined is:

-   More specific parameters take precedence (so a story parameter overwrites a component parameter which overwrites a global parameter).
-   Parameters are **merged** so keys are only ever overwritten, never dropped.

The merging of parameters is important. It means it is possible to override a single specific sub-parameter on a per-story basis but still retain the majority of the parameters defined globally.

If you are defining an API that relies on parameters (e.g. an [**addon**](https://storybook.js.org/docs/react/addons/introduction)) it is a good idea to take this behavior into account.

<a href="https://github.com/storybookjs/storybook/tree/next/docs/writing-stories/parameters.md" target="_blank" rel="noopener" class="e1soj9vu1 e1ja7avb2 css-1ii1tfm e1ja7avb1"><span class="css-1xdhyk6 e1ja7avb3"><span role="img" aria-label="write">✍️</span> Edit on GitHub – PRs welcome!</span></a>
