---
# configs for document itself.
title: "Write a preset"
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
# Write a preset

[Storybook preset addons](https://storybook.js.org/docs/react/addons/addon-types#preset-addons) are grouped collections of `babel`, `webpack`, and `addons` configurations that support specific use cases in Storybook, such as TypeScript or MDX support.

This doc covers the [presets API](https://storybook.js.org/docs/react/addons/writing-presets#presets-api) and how to use the presets mechanism for [advanced configuration](https://storybook.js.org/docs/react/addons/writing-presets#advanced-configuration).

## Presets API

A preset is a set of hooks that is called by Storybook on initialization and can override configurations for `babel`, `webpack`, `addons`, and `entries`.

Each configuration has a similar signature, accepting a base configuration object and options, as in this Webpack example:

```js
// .storybook/main.js

export async function webpack(baseConfig, options) {
  // Modify or replace config. 
  // Mutating the original reference object can cause unexpected bugs,
  // so in this example we replace.
  const { module = {} } = baseConfig;

  return {
    ...baseConfig,
    module: {
      ...module,
      rules: [
        ...(module.rules || []),
        {
          /* some new loader */
        },
      ],
    },
  };
}
```

### Babel

The babel functions `babel`, `babelDefault`, and `managerBabel` all configure babel in different ways.

All functions take a [Babel configuration object](https://babeljs.io/docs/en/configuration) as their argument and can modify it or return a new object.

For example, Storybook's Mihtril support uses plugins internally and here's how it configures babel:

```ts
// app/mithril/src/server/framework-preset-mithril.ts

import { TransformOptions } from '@babel/core';

export function babelDefault(config: TransformOptions) {
  return {
    ...config,
    plugins: [
      ...config.plugins,
      [require.resolve('@babel/plugin-transform-react-jsx'), {}, 'preset'],
    ],
  };
}
```

-   `babel` is applied to the preview config, after it has been initialized by storybook
-   `babelDefault` is applied to the preview config before any user presets have been applied
-   `managerBabel` is applied to the manager.

### Webpack

The Webpack functions `webpack`, `webpackFinal`, and `managerWebpack` configure Webpack.

All functions take a [webpack4 configuration object](https://webpack.js.org/configuration/).

For example, here is how Storybook automatically adopts `create-react-app`'s configuration if it's installed, where `applyCRAWebpackConfig` is a set of smart heuristics for modifying the input config.

```js
// .storybook/main.js

export function webpackFinal(config, { configDir }) {
  if (!isReactScriptsInstalled()) {
    logger.info('=> Using base config because react-scripts is not installed.');
    return config;
  }

  logger.info('=> Loading create-react-app config.');
  return applyCRAWebpackConfig(config, configDir);
}
```

-   `webpack` is applied to the preview config after it has been initialized by Storybook
-   `webpackFinal` is applied to the preview config after all user presets have been applied
-   `managerWebpack` is applied to the manager config

As of Storybook 6.3, Storybook can run with either `webpack4` or `webpack5` builder. If your addon needs to know which version of Webpack it's running inside, the version and the actual Webpack instance itself are both available inside your preset:

```js
// .storybook/main.js

export function webpackFinal(config, { presets }) {
  const version = await presets.apply('webpackVersion');
  const instance = (await presets.apply('webpackInstance'))?.default;

  logger.info(`=> Running in webpack ${version}: ${instance}`);
  return config;
}
```

### Manager entries

The addon config `managerEntries` allows you to add addons to Storybook from within a preset. For addons that require custom Webpack/Babel configuration, it is easier to install the preset, and it will take care of everything.

For example, the Storysource preset contains the following code:

```js
// storysource/preset.js

/* nothing needed */
```

This is equivalent to [registering the addon manually](https://storybook.js.org/docs/react/get-started/browse-stories#addons) in [`main.js`](https://storybook.js.org/docs/react/configure/overview#configure-story-rendering):

```js
// .storybook/main.js

module.exports = {
  managerEntries: ['some-storybook-addon/entry-point.js'],
};
```

### Preview entries

The addon `config` function allows you to add extra preview configuration from within a preset, for example to add parameters or decorators from an addon.

For example, the Backgrounds preset contains the following code:

```js
// preset.js

export function config(entry = []) {
  return [...entry, require.resolve('./defaultParameters')];
}
```

Which in turn invokes:

```tsx
// addons/backgrounds/src/preset/addParameter.tsx

export const parameters = {
  backgrounds: {
    values: [
      { name: 'light', value: '#F8F8F8' },
      { name: 'dark', value: '#333333' },
    ],
  },
};
```

This is equivalent to exporting the `backgrounds` parameter manually in `main.js`.

### Addons

For users, the name `managerEntries` might be a bit too technical, so instead both users and preset-authors can simply use the `addons` property:

```js
// .storybook/main.js

module.exports = {
  addons: ['@storybook/addon-storysource'],
};
```

The array of values can support both references to other presets and addons that should be included into the manager.

Storybook will automatically detect whether a reference to an addon is a preset or a manager entry by checking if the package contains a `./preset.js` or `./register.js` (manager entry), falling back to preset if it is unsure.

If this heuristic is incorrect for an addon you are using, you can explicitly opt in to an entry being an a manager entry using the `managerEntries` key.

Here's what it looks when combining presets and manager entries in the `addons` property:

```js
// .storybook/main.js

module.exports = {
  addons: [
    '@storybook/addon-docs/preset', // A preset registered here, in this case from the addon-docs addon.
  ],
};
```

### Entries

Entries are the place to register entry points for the preview. For example it could be used to make a basic configure-storybook preset that loads all the `*.stories.js` files into SB, instead of forcing people to copy-paste the same thing everywhere.

## Advanced Configuration

The presets API is also more powerful than the [standard configuration options](https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config) available in Storybook, so it's also possible to use presets for more advanced configuration without actually publishing a preset yourself.

For example, some users want to configure the Webpack for Storybook's UI and addons ([issue](https://github.com/storybookjs/storybook/issues/4995)), but this is not possible using [standard Webpack configuration](https://storybook.js.org/docs/react/builders/webpack#default-configuration) (it used to be possible before SB4.1). However, you can achieve this with a private preset.

If it doesn't exist yet, create a file `.storybook/main.js`:

```js
// .storybook/main.js

module.exports = {
  managerWebpack: async (config, options) => {
    // update config here
    return config;
  },
  managerBabel: async (config, options) => {
    // update config here
    return config;
  },
  webpackFinal: async (config, options) => {
    // change webpack config
    return config;
  },
  babel: async (config, options) => {
    return config;
  },
};
```

### Preview/Manager templates

It's also possible to programmatically modify the preview head/body HTML using a preset, similar to the way `preview-head.html`/`preview-body.html` can be used to [configure story rendering](https://storybook.js.org/docs/react/configure/story-rendering). The `previewHead` and `previewBody` functions accept a string, which is the existing head/body, and return a modified string.

For example, the following snippet adds a style tag to the preview head programmatically:

```js
// .storybook/main.js

module.exports = {
  previewHead: (head) => (`
    ${head}
    <style>
      #main {
        background-color: yellow;
      }
    </style>
  `);
};
```

Similarly, the `managerHead` can be used to modify the surrounding "manager" UI, analogous to `manager-head.html`.

Finally, the preview's main page *template* can also be overridden using the `previewMainTemplate`, which should return a reference to a file containing an `.ejs` template that gets interpolated with some environment variables. For an example, see the [Storybook's default template](https://github.com/storybookjs/storybook/blob/next/lib/core-common/templates/index.ejs).

## Sharing advanced configuration

Change your `main.js` file to:

```js
// .storybook/main.js

const path = require('path');

module.exports = {
  addons: [path.resolve('./.storybook/my-preset')],
};
```

and extract the configuration to a new file `./storybook/my-preset.js`:

```js
// .storybook/my-preset.js

module.exports = {
  managerWebpack: async (config, options) => {
    // Update config here
    return config;
  },
  managerBabel: async (config, options) => {
    // Update config here
    return config;
  },
  webpackFinal: async (config, options) => {
    return config;
  },
  babel: async (config, options) => {
    return config;
  },
};
```

Place your `my-preset.js` file wherever you want, if you want to share it far and wide you'll want to make it its own package.

<a href="https://github.com/storybookjs/storybook/tree/next/docs/addons/writing-presets.md" target="_blank" rel="noopener" class="e1soj9vu1 e1ja7avb2 css-1ii1tfm e1ja7avb1"><span class="css-1xdhyk6 e1ja7avb3"><span role="img" aria-label="write">✍️</span> <!-- -->Edit on GitHub – PRs welcome!</span></a>
