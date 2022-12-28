---
# configs for document itself.
title: "Accessibility tests"
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
# Accessibility tests
Accessibility is the practice of making websites inclusive to all. That means supporting requirements such as: keyboard navigation, screen reader support, touch-friendly, usable color contrast, reduced motion, and zoom support.

Accessibility tests audit the rendered DOM against a set of heuristics based on [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) rules and other industry-accepted best practices. They act as the first line of QA to catch blatant accessibility violations.

![Accessibility testing](https://storybook.js.org/ade100f41e01de571f19c95c1f6be50a/accessibility-testing-storybook.gif)

## Accessibility checks with a11y addo

Storybook provides an official [a11y addon](https://storybook.js.org/addons/@storybook/addon-a11y). Powered by Deque's [axe-core](https://github.com/dequelabs/axe-core), which automatically catches up to [57% of WCAG issues](https://www.deque.com/blog/automated-testing-study-identifies-57-percent-of-digital-accessibility-issues/).

### Set up the a11y addon

If you want to check accessibility for your stories using the [addon](https://storybook.js.org/addons/@storybook/addon-a11y/), you'll need to install it and add it to your Storybook.

Run the following command to install the addon.

```shell
yarn add --dev @storybook/addon-a11y
```

```shell
npm install @storybook/addon-a11y --save-dev
```

Update your Storybook configuration (in `.storybook/main.js|ts`) to include the accessibility addon.

```js
// .storybook/main.js

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    // Other Storybook addons
    '@storybook/addon-a11y', //👈 The a11y addon goes here
  ],
};
```

```ts
// .storybook/main.ts

// Imports Storybook's configuration API
import type { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    // Other Storybook addons
    '@storybook/addon-a11y', //👈 The a11y addon goes here
  ],
};

module.exports = config;
```

Start your Storybook, and you will see some noticeable differences in the UI. A new toolbar icon and the accessibility panel where you can inspect the results of the tests.

<video autoplay="" muted="" playsinline="" loop="" draggable="true"><source src="https://storybook.js.org//7497babe284db69b8d227bd2210145f5/storybook-a11y-starter-setup-optimized.mp4" type="video/mp4"></video>

### How it works

Storybook's a11y addon runs [Axe](https://github.com/dequelabs/axe-core) on the selected story. Allowing you to catch and fix accessibility issues during development. For example, if you’re working on a button component and included the following set of stories:

```js
// Button.stories.js|jsx

import React from 'react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading to learn how to generate automatic titles
  */
  title: 'Accessibility testing',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

// This is an accessible story
export const Accessible = Template.bind({});
Accessible.args = {
  primary: false,
  label: 'Button',
};

// This is not
export const Inaccessible = Template.bind({});
Inaccessible.args = {
  ...Accessible.args,
  backgroundColor: 'red',
};
```

```ts
// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading to learn how to generate automatic titles
  */
  title: 'Accessibility testing',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// This is an accessible story
export const Accessible = Template.bind({});
Accessible.args = {
  primary: false,
  label: 'Button',
};

// This is not
export const Inaccessible = Template.bind({});
Inaccessible.args = {
  ...Accessible.args,
  backgroundColor: 'red',
};
```

```md
<!-- Button.stories.mdx -->

import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './Button';

<Meta 
  title="Accessibility testing" 
  component={Button} 
  argTypes={{
    backgroundColor: {
      control: {
        type: 'color',
      }
    }
  }} />

export const Template = (args) => <Button {...args} />;

## This is an accessible story

<Story
  name="Accessible"
  args={{ 
    primary: false,
    label: 'Button'
  }}>
  {Template.bind({})}
</Story>

## This is not

<Story
  name="Inaccessible"
  args={{
    primary: false, 
    label: 'Button',
    backgroundColor: 'red'
  }}>
  {Template.bind({})}
</Story>
```

Cycling through both stories, you will see that the `Inaccessible` story contains some issues that need fixing. Opening the violations tab in the accessibility panel provides a clear description of the accessibility issue and guidelines for solving it.

![Storybook accessibility addon running](https://storybook.js.org/c2c341786a1c2007bccfcbe1d989cd05/storybook-a11y-addon-unoptimized.png)

### Configure

Out of the box, Storybook's accessibility addon includes a set of accessibility rules that cover most issues. You can also fine-tune the [addon configuration](https://github.com/storybookjs/storybook/tree/next/addons/a11y#parameters) or override [Axe's ruleset](https://github.com/storybookjs/storybook/tree/next/addons/a11y#handling-failing-rules) to best suit your needs.

#### Global a11y configuration

If you need to dismiss an accessibility rule or modify its settings across all stories, you can add the following to your [storybook/preview.js](https://storybook.js.org/docs/react/configure/overview#configure-story-rendering):

```js
// .storybook/preview.js

export const parameters = {
  a11y: {
    // Optional selector to inspect
    element: '#root',
    config: {
      rules: [
        {
          // The autocomplete rule will not run based on the CSS selector provided
          id: 'autocomplete-valid',
          selector: '*:not([autocomplete="nope"])',
        },
        {
          // Setting the enabled option to false will disable checks for this particular rule on all stories.
          id: 'image-alt',
          enabled: false,
        },
      ],
    },
    // Axe's options parameter
    options: {},
    // Optional flag to prevent the automatic check
    manual: true,
  },
};
```

#### Component-level a11y configuration

You can also customize your own set of rules for all stories of a component. Update your story's default export and add a parameter with the required configuration:

```js
// MyComponent.stories.js|jsx|ts|tsx

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading 
  * to learn how to generate automatic titles
  */
  title: 'Configure a11y addon',
  component: MyComponent,
  parameters: {
    a11y: {
      // Optional selector to inspect
      element: '#root',
      config: {
        rules: [
          {
            // The autocomplete rule will not run based on the CSS selector provided
            id: 'autocomplete-valid',
            selector: '*:not([autocomplete="nope"])',
          },
          {
            // Setting the enabled option to false will disable checks for this particular rule on all stories.
            id: 'image-alt',
            enabled: false,
          },
        ],
      },
      options: {},
      manual: true,
    },
  },
};
```

```md
<!-- MyComponent.stories.mdx -->

import { Meta } from '@storybook/addon-docs';

import { MyComponent } from './MyComponent';

<Meta
  title="Configure a11y addon"
  component={MyComponent}
  parameters={{
    a11y: {
      // Optional selector to inspect
      element: '#root',
      config: {
        rules: [
          {
            // The autocomplete rule will not run based on the CSS selector provided
            id: 'autocomplete-valid',
            selector: '*:not([autocomplete="nope"])',
          },
          {
            // Setting the enabled option to false will disable checks for this particular rule on all stories.
            id: 'image-alt',
            enabled: false,
          },
        ],
      },
      options: {},
      manual: true,
    },
  }} />
```

#### Story-level a11y configuration

Customize the a11y ruleset at the story level by updating your story to include a new parameter:

```js
// MyComponent.stories.js|jsx

import React from 'react';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading 
  * to learn how to generate automatic titles
  */
  title: 'Configure a11y addon',
  component: MyComponent,
};

const Template = () => <MyComponent />;

export const ExampleStory = Template.bind({});
ExampleStory.parameters = {
  a11y: {
    element: '#root',
    config: {
      rules: [
        {
          // The autocomplete rule will not run based on the CSS selector provided
          id: 'autocomplete-valid',
          selector: '*:not([autocomplete="nope"])',
        },
        {
          // Setting the enabled option to false will disable checks for this particular rule on all stories.
          id: 'image-alt',
          enabled: false,
        },
      ],
    },
    options: {},
    manual: true,
  },
};
```

```ts
// MyComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading 
  * to learn how to generate automatic titles
  */
  title: 'Configure a11y addon',
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

const Template: ComponentStory<typeof MyComponent> = () => <MyComponent />;

export const ExampleStory = Template.bind({});
ExampleStory.parameters = {
  a11y: {
    element: '#root',
    config: {
      rules: [
        {
          // The autocomplete rule will not run based on the CSS selector provided
          id: 'autocomplete-valid',
          selector: '*:not([autocomplete="nope"])',
        },
        {
          // Setting the enabled option to false will disable checks for this particular rule on all stories.
          id: 'image-alt',
          enabled: false,
        },
      ],
    },
    options: {},
    manual: true,
  },
};
```

```md
<!-- MyComponent.stories.mdx -->

import { Meta, Story } from '@storybook/addon-docs';

import { MyComponent } from './MyComponent';

<Meta 
  title="Configure A11y addon" 
  component={MyComponent} />

export const Template = () => <MyComponent />;

<Story
  name="ExampleStory"
  parameters={{
    a11y: {
      element: '#root',
      config: {
        rules: [
          {
            // The autocomplete rule will not run based on the CSS selector provided
            id: 'autocomplete-valid',
            selector: '*:not([autocomplete="nope"])',
          },
          {
            // Setting the enabled option to false will disable checks for this particular rule on all stories.
            id: 'image-alt',
            enabled: false,
          },
        ],
      },
      options: {},
      manual: true,
    },
  }}>
  {Template.bind({})}
</Story>
```

#### How to disable a11y tests

Disable accessibility testing for stories or components by adding the following parameter to your story’s export or component’s default export respectively:

```js
// MyComponent.stories.js|jsx

import React from 'react';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading 
  * to learn how to generate automatic titles
  */
  title: 'Disable a11y addon',
  component: MyComponent,
};

const Template = () => <MyComponent />;

export const NonA11yStory = Template.bind({});
NonA11yStory.parameters = {
  a11y: {
    // This option disables all a11y checks on this story
    disable: true,
  },
};
```

```ts
// MyComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading 
  * to learn how to generate automatic titles
  */
  title: 'Disable a11y addon',
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

const Template: ComponentStory<typeof MyComponent> = () => <MyComponent />;

export const NonA11yStory = Template.bind({});
NonA11yStory.parameters = {
  a11y: {
    // This option disables all a11y checks on this story
    disable: true,
  },
};
```

```md
<!-- MyComponent.stories.mdx -->

import { Meta, Story } from '@storybook/addon-docs';

import { MyComponent } from './MyComponent';

<Meta 
  title="Disable a11y addon" 
  component={MyComponent} />

export const Template = () => <MyComponent />;

<Story
  name="NonA11yStory"
  parameters={{
    a11y: {
      // This option disables all a11y checks on this story
      disable: true,
    },
  }}>
  {Template.bind({})}
</Story>
```

## Automate accessibility tests with test runner

The most accurate way to check accessibility is manually on real devices. However, you can use automated tools to catch common accessibility issues. For example, [Axe](https://www.deque.com/axe/), on average, catches upwards to [57% of WCAG issues](https://www.deque.com/blog/automated-testing-study-identifies-57-percent-of-digital-accessibility-issues/) automatically.

These tools work by auditing the rendered DOM against heuristics based on [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) rules and other industry-accepted best practices. You can then integrate these tools into your test automation pipeline using the Storybook [test runner](https://storybook.js.org/docs/react/writing-tests/test-runner#test-hook-api-experimental) and [axe-playwright](https://github.com/abhinaba-ghosh/axe-playwright).

### Setup

To enable accessibility testing with the test runner, you will need to take additional steps to set it up properly. We recommend you go through the [test runner documentation](https://storybook.js.org/docs/react/writing-tests/test-runner) before proceeding with the rest of the required configuration.

Run the following command to install the required dependencies.

```shell
yarn add --dev axe-playwright
```

```shell
npm install axe-playwright --save-dev
```

Add a new [configuration file](https://storybook.js.org/docs/react/writing-tests/test-runner#test-hook-api-experimental) inside your Storybook directory with the following inside:

```js
// .storybook/test-runner.js

const { injectAxe, checkA11y } = require('axe-playwright');

/*
* See https://storybook.js.org/docs/react/writing-tests/test-runner#test-hook-api-experimental
* to learn more about the test-runner hooks API.
*/
module.exports = {
  async preRender(page) {
    await injectAxe(page);
  },
  async postRender(page) {
    await checkA11y(page, '#root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
};
```

```ts
// .storybook/test-runner.ts

import { injectAxe, checkA11y } from 'axe-playwright';

import type { TestRunnerConfig } from '@storybook/test-runner';

/*
* See https://storybook.js.org/docs/react/writing-tests/test-runner#test-hook-api-experimental
* to learn more about the test-runner hooks API.
*/
const a11yConfig: TestRunnerConfig = {
  async preRender(page) {
    await injectAxe(page);
  },
  async postRender(page) {
    await checkA11y(page, '#root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
};

module.exports = a11yConfig;
```

> 💡 `preRender` and `postRender` are convenient hooks that allow you to extend the test runner's default configuration. They are **experimental** and subject to changes. Read more about them [here](https://storybook.js.org/docs/react/writing-tests/test-runner#test-hook-api-experimental).

When you execute the test runner (for example, with `yarn test-storybook`), it will run the accessibility audit and any [interaction tests](https://storybook.js.org/docs/react/writing-tests/interaction-testing) you might have configured for each component story.

It starts checking for issues by traversing the DOM tree starting from the story's root element and generates a detailed report based on the issues it encountered.

![Accessibility testing with the test runner](https://storybook.js.org/327b68c3eaa998dd879ec675988697bf/test-runner-a11y-optimized.png)

---

#### What’s the difference between browser-based and linter-based accessibility tests?

Browser-based accessibility tests, like those found in Storybook, evaluate the rendered DOM because that gives you the highest accuracy. Auditing code that hasn't been compiled yet is one step removed from the real thing, so you won't catch everything the user might experience.

#### Learn about other UI tests

-   [Test runner](https://storybook.js.org/docs/react/writing-tests/test-runner) to automate test execution
-   [Visual tests](https://storybook.js.org/docs/react/writing-tests/visual-testing) for appearance
-   Accessibility tests for accessibility
-   [Interaction tests](https://storybook.js.org/docs/react/writing-tests/interaction-testing) for user behavior simulation
-   [Snapshot tests](https://storybook.js.org/docs/react/writing-tests/snapshot-testing) for rendering errors and warnings
-   [Import stories in other tests](https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests) for other tools

<a href="https://github.com/storybookjs/storybook/tree/next/docs/writing-tests/accessibility-testing.md" target="_blank" rel="noopener" class="e1soj9vu1 e1ja7avb2 css-1ii1tfm e1ja7avb1"><span class="css-1xdhyk6 e1ja7avb3"><span role="img" aria-label="write">✍️</span> <!-- -->Edit on GitHub – PRs welcome!</span></a>
