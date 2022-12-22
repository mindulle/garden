---
# configs for document itself.
title: "Decorators"
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
# Decorators
A decorator is a way to wrap a story in extra “rendering” functionality. Many addons define decorators to augment your stories with extra rendering or gather details about how your story renders.

When writing stories, decorators are typically used to wrap stories with extra markup or context mocking.

Some components require a “harness” to render in a useful way. For instance, if a component runs right up to its edges, you might want to space it inside Storybook. Use a decorator to add spacing for all stories of the component.

![Story without padding](https://storybook.js.org/a1a69f7f8d2b02f4784fdd3b026ce8b8/decorators-no-padding.png)

```js
// YourComponent.stories.js|jsx

import { YourComponent } from './YourComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
};
```

```js
// YourComponent.stories.js|jsx

import { YourComponent } from './YourComponent';

// Replacing the <Story/> element with a Story function is also a good way of writing decorators.
// Useful to prevent the full remount of the component's story.

export default {
   /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
  decorators: [(Story) => <div style={{ margin: '3em' }}>{Story()}</div>],
};
```

```ts
// YourComponent.stories.ts|tsx

import { ComponentMeta } from '@storybook/react';

import { YourComponent } from './YourComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story/>
      </div>
    ),
  ],
} as ComponentMeta<typeof YourComponent>;
```

```ts
// YourComponent.stories.ts|tsx

import { ComponentMeta } from '@storybook/react';

import { YourComponent } from './YourComponent';

// Replacing the <Story/> element with a Story function is also a good way of writing decorators.
// Useful to prevent the full remount of the component's story.
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        {Story()}
      </div>
    ),
  ],
} as ComponentMeta<typeof YourComponent>;
```

```md
<!-- YourComponent.stories.mdx -->

import { Meta } from '@storybook/addon-docs';

import { YourComponent } from './YourComponent';

<Meta
  title="YourComponent"
  component={YourComponent}
  decorators={[
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ]}
/>
```

![Story with padding](https://storybook.js.org/5b4a05cec634056cfd1ecc0b192b0881/decorators-padding.png)

## “Context” for mocking

Framework-specific libraries (e.g., [Styled Components](https://styled-components.com/), [Fontawesome](https://github.com/FortAwesome/vue-fontawesome) for Vue, Angular's [localize](https://angular.io/api/localize)) may require additional configuration to render correctly in Storybook.

For example, if you're working with React's Styled Components and your components use themes, add a single global decorator to [`.storybook/preview.js`](https://storybook.js.org/docs/react/configure/overview#configure-story-rendering) to enable them. With Vue, extend Storybook's application and register your library. Or with Angular, add the package into your `polyfills.ts` and import it:

```js
// .storybook/preview.js

import React from 'react';

import { ThemeProvider } from 'styled-components';

export const decorators = [
  (Story) => (
    <ThemeProvider theme="default">
      <Story />
    </ThemeProvider>
  ),
];
```

```js
// Story function
// .storybook/preview.js

import React from 'react';

import { ThemeProvider } from 'styled-components';

export const decorators = [
  (Story) => (
    <ThemeProvider theme="default">
      {Story()}
    </ThemeProvider>
  ),
];
```

In the example above, the values provided are hardcoded. Still, you may want to vary them, either per-story basis (i.e., if the values you're adding are relevant to a specific story) or in a user-controlled way (e.g., provide a theme switcher or a different set of icons).

The second argument to a decorator function is the **story context** which in particular contains the keys:

-   `args` - the story arguments. You can use some [`args`](https://storybook.js.org/docs/react/writing-stories/args) in your decorators and drop them in the story implementation itself.
-   `argTypes`\- Storybook's [argTypes](https://storybook.js.org/docs/react/api/argtypes) allow you to customize and fine-tune your stories [`args`](https://storybook.js.org/docs/react/writing-stories/args).
-   `globals` - Storybook-wide [globals](https://storybook.js.org/docs/react/essentials/toolbars-and-globals#globals). In particular you can use the [toolbars feature](https://storybook.js.org/docs/react/essentials/toolbars-and-globals#global-types-toolbar-annotations) to allow you to change these values using Storybook’s UI.
-   `hooks` - Storybook's API hooks (e.g., useArgs).
-   `parameters`\- the story's static metadata, most commonly used to control Storybook's behavior of features and addons.
-   `viewMode`\- Storybook's current active window (e.g., canvas, docs).

💡 This pattern can also be applied to your own stories. Some of Storybook's supported frameworks already use it (e.g., vue 2).

### Using decorators to provide data

If your components are “connected” and require side-loaded data to render, you can use decorators to provide that data in a mocked way without having to refactor your components to take that data as an arg. There are several techniques to achieve this. Depending on exactly how you are loading that data -- read more in the [building pages in Storybook](https://storybook.js.org/docs/react/writing-stories/build-pages-with-storybook) section.

## Story decorators

To define a decorator for a single story, use the `decorators` key on a named export:

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
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [
  (Story) => (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  ),
];
```

```js
// Button.stories.js|jsx

import React from 'react';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [(Story) => <div style={{ margin: '3em' }}>{Story()}</div>];
```

```md
<!-- Button.stories.mdx -->

import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './Button';

<Meta title="Button" component={Button} />

export const Template = (args) => <Button {...args} />;

<Story
  name="Primary"
  args={{}}
  decorators={[
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ]}>
  {Template.bind({})}
</Story>
```

It is useful to ensure that the story remains a “pure” rendering of the component under test, and any extra HTML or components don't pollute that. In particular the [Source](https://storybook.js.org/docs/react/writing-docs/doc-block-source) Doc Block works best when you do this.

## Component decorators

To define a decorator for all stories of a component, use the `decorators` key of the default CSF export:

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
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
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
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Button>;
```

```md
<!-- Button.stories.mdx -->

import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './Button';

<Meta
  title="Button"
  component={Button}
  decorators={[
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ]}
/>

<!-- Remainder story implementation -->
```

## Global decorators

We can also set a decorator for **all stories** via the `decorators` export of your [`.storybook/preview.js`](https://storybook.js.org/docs/react/configure/overview#configure-story-rendering) file (this is the file where you configure all stories):

```js
// .storybook/preview.js

import React from 'react';

export const decorators = [
  (Story) => (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  ),
];
```

```js
// .storybook/preview.js

import React from "react";

export const decorators = [
  (Story) => (
    <div style={{ margin: '3em' }}>
      {Story()}
    </div>
  ),
];
```

## Decorator inheritance

Like parameters, decorators can be defined globally, at the component level, and for a single story (as we’ve seen).

All decorators relevant to a story will run in the following order once the story renders:

-   Global decorators, in the order they are defined
-   Component decorators, in the order they are defined
-   Story decorators, in the order they are defined

<a href="https://github.com/storybookjs/storybook/tree/next/docs/writing-stories/decorators.md" target="_blank" rel="noopener" class="e1soj9vu1 e1ja7avb2 css-1ii1tfm e1ja7avb1"><span class="css-1xdhyk6 e1ja7avb3"><span role="img" aria-label="write">✍️</span> Edit on GitHub – PRs welcome!</span></a>
