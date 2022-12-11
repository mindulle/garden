---
# configs for document itself.
title: "Args"
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
# Args
A story is a component with a set of arguments that define how the component should render. “Args” are Storybook’s mechanism for defining those arguments in a single JavaScript object. Args can be used to dynamically change props, slots, styles, inputs, etc. It allows Storybook and its addons to live edit components. You _do not_ need to modify your underlying component code to use args.

When an arg’s value changes, the component re-renders, allowing you to interact with components in Storybook’s UI via addons that affect args.

Learn how and why to write stories in [the introduction](https://storybook.js.org/docs/react/writing-stories/introduction#using-args). For details on how args work, read on.

## Args object

The `args` object can be defined at the [story](https://storybook.js.org/docs/react/writing-stories/introduction#story-args), [component](https://storybook.js.org/docs/react/writing-stories/introduction#component-args) and [global level](https://storybook.js.org/docs/react/writing-stories/introduction#global-args). It is a JSON serializable object composed of string keys with matching valid value types that can be passed into a component for your framework.

## Story args
To define the args of a single story, use the `args` CSF story key:

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

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
   primary: true,
   label: 'Button',
};
```

```ts
// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Button',
};
```

```md
<!-- Button.stories.mdx-->

import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './Button';

<Meta title="Button" component={Button} />

<!-- 👇 We create a “template” of how args map to rendering -->

export const Template = (args) => <Button {...args} />;

<!-- 👇 Each story then reuses that template -->
<Story
  name="Primary"
  args={{
    primary: true,
    label: 'Button',
  }}>
  {Template.bind({})}
</Story>
```

These args will only apply to the story for which they are attached, although you can [reuse](https://storybook.js.org/docs/react/writing-stories/build-pages-with-storybook#args-composition-for-presentational-screens) them via JavaScript object reuse:

```
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

const Template = () => ({
  //👇 Your template goes here
})

export const PrimaryLongName = Template.bind({});

PrimaryLongName.args = {
  ...Primary.args,
  label: 'Primary with a really long name',
};
```

In the above example, we use the [object spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) feature of ES 2015.

## Component args
You can also define args at the component level; they will apply to all the component's stories unless you overwrite them. To do so, use the `args` key on the `default` CSF export:

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
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    //👇 Now all Button stories will be primary.
    primary: true,
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
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    //👇 Now all Button stories will be primary.
    primary: true,
  },
} as ComponentMeta<typeof Button>;
```

```md
<!-- Button.stories.mdx -->

import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './Button';

<!-- 👇 Creates specific argTypes and turns all stories into primary -->

<Meta 
  title="Button"
  component={Button}
  argTypes={{
    backgroundColor: { 
      control: 'color', 
    },
  }},
  args={{
    primary: true,
  }}/>

<!-- Remainder story implementation -->
```
## Global args
You can also define args at the global level; they will apply to every component's stories unless you overwrite them. To do so, export the `args` key in your `preview.js`:

```js
// preview.js

// All stories expect a theme arg
export const argTypes = { theme: { control: 'select', options: ['light', 'dark'] } };

// The default value of the theme arg to all stories
export const args = { theme: 'light' };
```

## Args composition
You can separate the arguments to a story to compose in other stories. Here's how you can combine args for multiple stories of the same component.

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

const Template = (args) => ({
  // 👈 Your template goes here
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  primary: false,
};
```

💡 If you find yourself re-using the same args for most of a component's stories, you should consider using [component-level args](https://storybook.js.org/docs/react/writing-stories/introduction#component-args).

Args are useful when writing stories for composite components that are assembled from other components. Composite components often pass their arguments unchanged to their child components, and similarly, their stories can be compositions of their child components stories. With args, you can directly compose the arguments:

```js
// Page.stories.js|jsx

import React from 'react';

import { Page } from './Page';

//👇 Imports all Header stories
import * as HeaderStories from './Header.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Page',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};
```

```ts
// Page.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Page } from './Page';

//👇 Imports all Header stories
import * as HeaderStories from './Header.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Page',
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};
```
## Args can modify any aspect of your component

You can use args in your stories to configure the component's appearance, similar to what you would do in an application. For example, here's how you could use a `footer` arg to populate a child component:

```js
// Page.stories.js|jsx

import React from 'react';

import { Page } from './Page';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Page',
  component: Page,
};

const Template = (args) => (
  <Page {...args}>
    <footer>{args.footer}</footer>
  </Page>
);

export const CustomFooter= Template.bind({});
CustomFooter.args = {
  footer: 'Built with Storybook',
};
```

```ts
// Page.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Page } from './Page';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Page',
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
  <Page {...args}>
    <footer>{args.footer}</footer>
  </Page>
);

export const CustomFooter = Template.bind({});
CustomFooter.args = {
  footer: 'Built with Storybook',
};
```

```md
<!-- Page.stories.mdx -->

import { Meta, Story } from '@storybook/addon-docs';

import { Page } from './Page';

<Meta title="Page" component={Page} />


export const Template = (args) => (
  <Page {...args}>
    <footer>{args.footer}</footer>
  </Page>
);

<Story
  name="CustomFooter"
  args={{
    footer: 'Built with Storybook',
  }}>
  {Template.bind({})}
</Story>
```

## Setting args through the URL

You can also override the set of initial args for the active story by adding an `args` query parameter to the URL. Typically you would use the [Controls addon](https://storybook.js.org/docs/react/essentials/controls) to handle this. For example, here's how you could set a `size` and `style` arg in the Storybook's URL:

```shell
?path=/story/avatar--default&args=style:rounded;size:100
```

As a safeguard against [XSS](https://owasp.org/www-community/attacks/xss/) attacks, the arg's keys and values provided in the URL are limited to alphanumeric characters, spaces, underscores, and dashes. Any other types will be ignored and removed from the URL, but you can still use them with the Controls addon and [within your story](https://storybook.js.org/docs/react/writing-stories/introduction#mapping-to-complex-arg-values).

The `args` param is always a set of `key: value` pairs delimited with a semicolon `;`. Values will be coerced (cast) to their respective `argTypes` (which may have been automatically inferred). Objects and arrays are supported. Special values `null` and `undefined` can be set by prefixing with a bang `!`. For example, `args=obj.key:val;arr[0]:one;arr[1]:two;nil:!null` will be interpreted as:

```
{
  obj: { key: 'val' },
  arr: ['one', 'two'],
  nil: null
}
```

Similarly, special formats are available for dates and colors. Date objects will be encoded as `!date(value)` with value represented as an ISO date string. Colors are encoded as `!hex(value)`, `!rgba(value)` or `!hsla(value)`. Note that rgb(a) and hsl(a) should not contain spaces or percentage signs in the URL.

Args specified through the URL will extend and override any default values of args set on the story.

## Mapping to complex arg values

Complex values such as JSX elements cannot be serialized to the manager (e.g., the Controls addon) or synced with the URL. Arg values can be "mapped" from a simple string to a complex type using the `mapping` property in `argTypes` to work around this limitation. It works in any arg but makes the most sense when used with the `select` control type.

```js
// MyComponent.stories.js|jsx|ts|tsx

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent',
  component: MyComponent,
  argTypes: {
    label:{
      options: ['Normal', 'Bold', 'Italic'],
      mapping: {
        Bold: <b>Bold</b>,
        Italic: <i>Italic</i>,
      },
    },
  },
};
```

Note that `mapping` does not have to be exhaustive. If the arg value is not a property of `mapping`, the value will be used directly. Keys in `mapping` always correspond to arg _values_, not their index in the `options` array.

<details open=""><summary>Using args in addons</summary><p>If you are <a href="/docs/react/addons/writing-addons">writing an addon</a> that wants to read or update args, use the <code>useArgs</code> hook exported by <code>@storybook/api</code>:</p><div class="frontpage-code-snippets css-0 e7d06zb5"></div>
</details>

```js
// your-addon/manager.js

import { useArgs } from '@storybook/api';

const [args, updateArgs, resetArgs] = useArgs();

// To update one or more args:
updateArgs({ key: 'value' });

// To reset one (or more) args:
resetArgs((argNames: ['key']));

// To reset all args
resetArgs();
```

<details open=""><summary>parameters.passArgsFirst</summary><p>In Storybook 6+, we pass the args as the first argument to the story function. The second argument is the “context”, which includes story parameters, globals, argTypes, and other information.</p><p>In Storybook 5 and before we passed the context as the first argument. If you’d like to revert to that functionality set the <code>parameters.passArgsFirst</code> parameter in <a href="/docs/react/configure/overview#configure-story-rendering"><code>.storybook/preview.js</code></a>:</p></details>

```js
// .storybook/preview.js

export const parameter = { passArgsFirst : false }.
```

<a href="https://github.com/storybookjs/storybook/tree/next/docs/writing-stories/args.md" target="_blank" rel="noopener" class="e1soj9vu1 e1ja7avb2 css-1ii1tfm e1ja7avb1"><span class="css-1xdhyk6 e1ja7avb3"><span role="img" aria-label="write">✍️</span> Edit on GitHub – PRs welcome!</span></a>
