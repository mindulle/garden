---
# configs for document itself.
title: "Write"
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
# Write an addon
One of Storybook's main features is its robust addon ecosystem. Use addons to enhance and extend your development workflow. This page shows you how to create your own addon.

## What we're building

For this example, we're going to build a bare-bones addon which:

-   Adds a new panel in Storybook.
-   Retrieves a custom parameter from the stories.
-   Displays the parameter data in the panel.

### Addon kit

This guide shows you how to setup an addon from scratch. Alternatively, you can jumpstart your addon development with the [`addon-kit`](https://github.com/storybookjs/addon-kit).

### Addon directory structure

We recommend a common addon file and directory structure for consistency.

| Files/Directorie | Description                        |
| ---------------- | ---------------------------------- |
| dist             | Transpiled directory for the addon |
| src              | Source code for the addon          |
| .babelrc.js      | Babel configuration                |
| preset.js        | Addon entry point                  |
| package.json     | Addon metadata information         |
| README.md        | General information for the addon                                   |

### Get started

Open a new terminal and create a new directory called `my-addon`. Inside it, run `npm init` to initialize a new node project. For your project's name, choose `my-addon` and for entry point `dist/preset.js`.

Once you've gone through the prompts, your `package.json` should look like:

```
{
  "name": "my-addon",
  "version": "1.0.0",
  "description": "A barebones Storybook addon",
  "main": "dist/preset.js",
  "files": ["dist/**/*", "README.md", "*.js"],
  "keywords": ["storybook", "addons"],
  "author": "YourUsername",
  "license": "MIT"
}
```

### Build system

We'll need to add the necessary dependencies and make some adjustments. Run the following command to install the required dependencies:

```yarn
yarn add react react-dom @babel/cli
```

```npm
npm install react react-dom @babel/cli
```

Initialize a local Storybook instance to allow you to test your addon.
```shell
npx storybook init
```

> 💡 Initializing Storybook adds the building blocks for our addon. If you're building a standalone Storybook addon, set the React and Storybook packages as peer dependencies. It prevents the addon from breaking Storybook when there are different versions available.

Next, create a `.babelrc.js` file in the root directory with the following:

```js
// /my-addon/.babelrc.js

module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
};
```

> Babel configuration is required because our addon uses ES6 and JSX.

Change your `package.json` and add the following script to build the addon:

```json
{
  "scripts": {
    "build": "babel ./src --out-dir ./dist"
  }
}
```

> 💡 Running `yarn build` at this stage will output the code into the `dist` directory, transpiled into a ES5 module ready to be installed into any Storybook.

Finally, create a new directory called `src` and inside a new file called `preset.js` with the following:

```js
// /my-addon/src/preset.js

function managerEntries(entry = []) {
  return [...entry, require.resolve("./register")]; //👈 Addon implementation
}

module.exports = { managerEntries }
```

Presets are the way addons hook into Storybook. Among other tasks they allow you to:

-   Add to [Storybook's UI](https://storybook.js.org/docs/react/addons/writing-addons#add-a-panel)
-   Add to the [preview iframe](https://storybook.js.org/docs/react/addons/writing-presets#preview-entries)
-   Modify [babel](https://storybook.js.org/docs/react/addons/writing-presets#babel) and [webpack settings](https://storybook.js.org/docs/react/addons/writing-presets#webpack)

For this example, we'll modify Storybook's UI.

### Add a panel

Now let’s add a panel to Storybook. Inside the `src` directory, create a new file called `register.js` and add the following:

```js
// /my-addon/src/manager.js

import React from 'react';

import { addons, types } from '@storybook/addons';

import { AddonPanel } from '@storybook/components';

const ADDON_ID = 'myaddon';
const PANEL_ID = `${ADDON_ID}/panel`;

// give a unique name for the panel
const MyPanel = () => <div>MyAddon</div>;

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'My Addon',
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <MyPanel />
      </AddonPanel>
    ),
  });
});
```

> 💡 Make sure to include the `key` when you register the addon. It will prevent any issues when the addon renders.

Going over the code snippet in more detail. When Storybook starts up:

1.  It [registers](https://storybook.js.org/docs/react/addons/addons-api#addonsregister) the addon
2.  [Adds](https://storybook.js.org/docs/react/addons/addons-api#addonsadd) a new `panel` titled `My Addon` to the UI
3.  When selected, the `panel` renders the static `div` content

### Register the addon

Finally, let’s hook it all up. Change `.storybook/main.js` to the following:

```js
// /my-addon/.storybook/main.js

module.exports = {
  stories: [],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "../src/preset.js" //👈 Our addon registered here
  ]
}
```

💡 When you register a Storybook addon, it will look for either `register.js` or `preset.js` as the entry points.

Run `yarn storybook` and you should see something similar to:

![Storybook addon initial state](https://storybook.js.org/8a84ad965e96ef91ab0feb62f03b48b9/addon-initial-state.png)

### Display story parameter

Next, let’s replace the `MyPanel` component from above to show the parameter.

```js
// /my-addon/src/manager.js

import { useParameter } from '@storybook/api';

const PARAM_KEY = 'myAddon';

const MyPanel = () => {
  const value = useParameter(PARAM_KEY, null);
  const item = value ? value.data : 'No story parameter defined';
  return <div>{item}</div>;
};
```

The new version is made smarter by [`useParameter`](https://storybook.js.org/docs/react/addons/addons-api#useparameter), which is a [React hook](https://reactjs.org/docs/hooks-intro.html) that updates the parameter value and re-renders the panel every time the story changes.

The [addon API](https://storybook.js.org/docs/react/addons/addons-api) provides hooks like this, so all of that communication can happen behind the scenes. That means you can focus on your addon's functionality.

### Using the addon with a story

When Storybook was initialized, it provided a small set of example stories. Change your `Button.stories.js` to the following:

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
    myAddon: {
      data: 'this data is passed to the addon',
    },
  },
};

export const Basic = () => <Button>hello</Button>;
```

```ts
// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

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
    myAddon: {
      data: 'this data is passed to the addon',
    },
  },
} as ComponentMeta<typeof Button>;

const Basic: ComponentStory<typeof Button> = () => <Button>hello</Button>;
```

After applying the changes to the story, the Storybook UI will show the following:

<video autoplay="" muted="" playsinline="" loop="" draggable="true"><source src="https://storybook.js.org/812658cbb04480314165b27f79511fcd/addon-final-stage-optimized.mp4" type="video/mp4"></video>

### Root level preset.js

Before publishing the addon, we'll need to make one last change. In the root directory of the addon, create a new file called `preset.js` and add the following:

```js
// /my-addon/preset.js

module.exports = require('./dist/preset.js');
```

This auto-registers the addon without any additional configuration from the user. Storybook looks for either a `preset.js` or a `register.js` file located at the root level.

### Packaging and publishing

Now that you've seen how to create a bare-bones addon let's see how to share it with the community. Before we begin, make sure your addon meets the following requirements:

-   `package.json` file with metadata about the addon
-   Peer dependencies of `react` and `@storybook/addons`
-   `preset.js` file at the root level written as an ES5 module
-   `src` directory containing the ES6 addon code
-   `dist` directory containing transpiled ES5 code on publish
-   [GitHub](https://github.com/) account to host your code
-   [NPM](https://www.npmjs.com/) account to publish the addon

Reference the [storybook-addon-outline](https://www.npmjs.com/package/storybook-addon-outline) to see a project that meets these requirements.

Learn how to [add to the addon catalog](https://storybook.js.org/docs/react/addons/addon-catalog).

### More guides and tutorials

In the previous example, we introduced the structure of an addon but barely scratched the surface of what addons can do.

To dive deeper, we recommend Storybook's [creating an addon](https://storybook.js.org/tutorials/create-an-addon/) tutorial. It’s an excellent walkthrough covering the same ground as the above introduction but goes further and leads you through the entire process of creating a realistic addon.

### Addon kit

To help you jumpstart the addon development, the Storybook maintainers created an [`addon-kit`](https://github.com/storybookjs/addon-kit), use it to bootstrap your next addon.

<a href="https://github.com/storybookjs/storybook/tree/next/docs/addons/writing-addons.md" target="_blank" rel="noopener" class="e1soj9vu1 e1ja7avb2 css-1ii1tfm e1ja7avb1"><span class="css-1xdhyk6 e1ja7avb3"><span role="img" aria-label="write">✍️</span> <!-- -->Edit on GitHub – PRs welcome!</span></a>
