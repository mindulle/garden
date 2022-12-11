---
# configs for document itself.
title: "What's a story"
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
# What's a story
A story captures the rendered state of a UI component. Developers write multiple stories per component that describe all the “interesting” states a component can support.

The CLI created example components that demonstrate the types of components you can build with Storybook: Button, Header, and Page.

Each example component has a set of stories that show the states it supports. You can browse the stories in the UI and see the code behind them in files that end with `.stories.js` or `.stories.ts`. The stories are written in Component Story Format (CSF)--an ES6 modules-based standard--for writing component examples.

Let’s start with the `Button` component. A story is a function that describes how to render the component in question. Here’s how to render `Button` in the “primary” state and export a story called `Primary`.

```javascript
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

export const Primary = () => <Button primary>Button</Button>;
```

```typescript
// Button.stories.ts|tsx 
import React from 'react'; 
import { ComponentStory, ComponentMeta } from '@storybook/react'; 
import { Button } from './Button'; 

	export default { /* 👇 The title prop is optional. * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading * to learn how to generate automatic titles */ 
	title: 'Button', 
	component: Button, 
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => <Button primary>Button</Button>;
```

```MDX
<!-- Button.stories.mdx -->

import { Meta, Story } from '@storybook/addon-docs'; 

import { Button } from './Button'; 

<Meta title="Button" component={Button} /> 

# Button 
<Story name="Primary"> 
	<Button primary>Button</Button> 
</Story>
```

![Initial button story](https://storybook.js.org/d1406df7f9ce817ae0e5b3eb5f1bf1f3/example-button-noargs.png)

View the rendered `Button` by clicking on it in the Storybook sidebar.

The above story definition can be further improved to take advantage of [Storybook’s “args”](https://storybook.js.org/docs/react/writing-stories/args) concept. Args describes the arguments to Button in a machine-readable way. It unlocks Storybook’s superpower of altering and composing arguments dynamically.

```javascript
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

```typescript
// Button.stories.ts|tsx import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'; 

import { Button, ButtonProps } from './Button';

export default {
	/* 👇 The title prop is optional. 
	* See https://storybook.js.org/docs/react/configure/overview#configure-story-loading 
	* to learn how to generate automatic titles */
	title: 'Button', 
	component: Button, 
} as ComponentMeta<typeof Button>; 
	
//👇 We create a “template” of how args map to rendering const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({}); 

Primary.args = {
	primary: true, 
	label: 'Button', 
};
```

![Button story with args](https://storybook.js.org/ff519d6518900d4be0ce86bbf3655913/example-button-args.png)

Both story examples render the same thing because Storybook feeds the given `args` property into the story during render. But you get timesaving conveniences with args:

-   `Button`s callbacks are logged into the Actions tab. Click to try it.
-   `Button`s arguments are dynamically editable in the Controls tab. Adjust the controls

### Edit a story

Storybook makes it easy to work on one component in one state (aka a story) at a time. When you edit the Button code or stories, Storybook will instantly re-render in the browser. No need to refresh manually.

Update the `label` of the `Primary` story, then see your change in Storybook.


<video autoplay="" playsinline="" loop="" draggable="true"><source src="https://storybook.js.org/db8564b68cb4c974dc1f7b8834cfb4ee/example-button-hot-module-reload-optimized.mp4" type="video/mp4"></video>

Stories are also helpful for checking that UI continues to look correct as you make changes. The `Button` component has four stories that show it in different use cases. View those stories now to confirm that your change to `Primary` didn’t introduce unintentional bugs in the other stories.

<video autoplay="" playsinline="" loop="" draggable="true"><source src="https://storybook.js.org/8642bd4715c07ea1fff7e19c9b0efbea/example-button-browse-stories-optimized.mp4" type="video/mp4"></video>

Checking component’s stories as you develop helps prevent accidental regressions. [Tools that integrate with Storybook can automate this](https://storybook.js.org/docs/react/writing-tests/introduction) for you.

Now that we’ve seen the basic anatomy of a story let’s see how we use Storybook’s UI to develop stories.