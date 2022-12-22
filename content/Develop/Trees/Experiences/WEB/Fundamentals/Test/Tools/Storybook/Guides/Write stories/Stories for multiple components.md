---
# configs for document itself.
title: "Stories for multiple components"
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
# Stories for multiple components

It's useful to write stories that [render two or more components](https://storybook.js.org/docs/react/writing-stories/introduction#stories-for-two-or-more-components) at once if those components are designed to work together. For example, `ButtonGroups`, `Lists`, and `Page` components. Here's an example with `List` and `ListItem` components:

```js
// List.stories.js|jsx

import React from 'react';

import { List } from './List';
import { ListItem } from './ListItem';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
  subcomponents: { ListItem }, //👈 Adds the ListItem component as a subcomponent
};

export const Empty = (args) => <List {...args} />;

export const OneItem = (args) => (
  <List {...args}>
    <ListItem />
  </List>
);
```

```ts
// List.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { List } from './List';
import { ListItem } from './ListItem';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
  subcomponents: { ListItem }, //👈 Adds the ListItem component as a subcomponent
} as ComponentMeta<typeof List>;

const Empty: ComponentStory<typeof List> = (args) => <List {...args} />;

const OneItem: ComponentStory<typeof List> = (args) =>(
  <List {...args}>
    <ListItem />
  </List>
);
```

Note that by adding `subcomponents` to the default export, we get an extra pane on the ArgsTable, listing the props of `ListItem`:

![Storybook story with subcomponent argstable](https://storybook.js.org/bb4c1c055c7a322a7e3637d4a5a59690/argstable-subcomponents.png)

The downside of the approach used above, where each story creates its own combination of components, is that it does not take advantage of Storybook [Args](https://storybook.js.org/docs/react/writing-stories/args) meaning:

1.  You cannot change the stories via the controls panel
2.  There is no [args reuse](https://storybook.js.org/docs/react/writing-stories/introduction#using-args) possible, which makes the stories harder to maintain.

Let's talk about some techniques you can use to mitigate the above, which are especially useful in more complicated situations.

## Reusing subcomponent stories

The simplest change we can make to the above is to reuse the stories of the `ListItem` in the `List`:

```js
// List.stories.js|jsx

import React from 'react';

import { List } from './List';

//👇 Instead of importing ListItem, we import the stories
import { Unchecked } from './ListItem.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
};

export const OneItem = (args) => (
  <List {...args}>
    <Unchecked {...Unchecked.args} />
  </List>
);
```

```ts
// List.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { List } from './List';

//👇 Instead of importing ListItem, we import the stories
import { Unchecked } from './ListItem.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
} as ComponentMeta<typeof List>;

const OneItem: ComponentStory<typeof List> = (args) => (
  <List {...args}>
    <Unchecked {...Unchecked.args} />
  </List>
);
```

By rendering the `Unchecked` story with its args, we are able to reuse the input data from the `ListItem` stories in the `List`.

However, we still aren’t using args to control the `ListItem` stories, which means we cannot change them with controls and we cannot reuse them in other, more complex component stories.

## Using children as an arg

One way we improve that situation is by pulling the rendered subcomponent out into a `children` arg:

```js
// List.stories.js|jsx

import React from 'react';

import { List } from './List';

//👇 Instead of importing ListItem, we import the stories
import { Unchecked } from './ListItem.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
};

const Template = (args) => <List {...args} />;

export const OneItem = Template.bind({});
OneItem.args = {
  children: <Unchecked {...Unchecked.args} />,
};
```

```ts
// List.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { List } from './List';

//👇 Instead of importing ListItem, we import the stories
import { Unchecked } from './ListItem.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const OneItem = Template.bind({});
OneItem.args = {
  children: <Unchecked {...Unchecked.args} />,
};
```

Now that `children` is an arg, we can potentially reuse it in another story.

However, there are some caveats when using this approach that you should be aware of.

The `children` `args` as any other arg needs to be JSON serializable. It means that you should:

-   Avoid using empty values
-   Use caution with components that include third party libraries

As they could lead into errors with your Storybook.

> We're currently working on improving the overall experience for the children arg and allow you to edit children arg in a control and allow you to use other types of components in the near future. But for now you need to factor in this caveat when you're implementing your stories.

## Creating a Template Component

Another option that is more “data”-based is to create a special “story-generating” template component:

```js
// List.stories.js|jsx

import React from 'react';

import { List } from './List';
import { ListItem } from './ListItem';

//👇 Imports a specific story from ListItem stories
import { Unchecked } from './ListItem.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
};

const ListTemplate = ({ items, ...args }) => (
  <List>
    {items.map((item) => (
      <ListItem {...item} />
    ))}
  </List>
);

export const Empty = ListTemplate.bind({});
Empty.args = { items: [] };

export const OneItem = ListTemplate.bind({});
OneItem.args = {
  items: [
    {
      ...Unchecked.args,
    },
  ],
};
```

```js
// List.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { List } from './List';
import { ListItem } from './ListItem';

//👇 Imports a specific story from ListItem stories
import { Unchecked } from './ListItem.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
} as ComponentMeta<typeof List>;

const ListTemplate: ComponentStory<typeof ButtonGroup> = (args) => {
  const { items } = args;
  return (
    <List>
      {items.map((item) => (
        <ListItem {...item} />
      ))}
  </List>
)};

export const Empty = ListTemplate.bind({});
Empty.args = { items: [] };

export const OneItem = ListTemplate.bind({});
OneItem.args = {
  items: [
    {
      ...Unchecked.args,
    },
  ],
};
```

This approach is a little more complex to setup, but it means you can more easily reuse the `args` to each story in a composite component. It also means that you can alter the args to the component with the Controls addon:

<a href="https://github.com/storybookjs/storybook/tree/next/docs/writing-stories/stories-for-multiple-components.md" target="_blank" rel="noopener" class="e1soj9vu1 e1ja7avb2 css-1ii1tfm e1ja7avb1"><span class="css-1xdhyk6 e1ja7avb3"><span role="img" aria-label="write">✍️</span> Edit on GitHub – PRs welcome!</span></a>

