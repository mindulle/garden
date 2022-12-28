---
# configs for document itself.
title: "Setup"
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
# Setup Storybook

Now that you’ve learned what stories are and how to browse them, let’s demo working on one of your components.

Pick a simple component from your project, like a Button, and write a `.stories.js`, or a `.stories.mdx` file to go along with it. It might look something like this:

```js
// YourComponent.stories.js|jsx

import { YourComponent } from './YourComponent';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <YourComponent {...args} />;

export const FirstStory = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
```

```ts
// YourComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { YourComponent } from './YourComponent';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
} as ComponentMeta<typeof YourComponent>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof YourComponent> = (args) => <YourComponent {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
```

```md
<!-- YourComponent.stories.mdx -->

import { Meta, Story } from '@storybook/addon-docs';

import { YourComponent } from './YourComponent';

<!--👇 The title prop determines where your story goes in the story list -->
<Meta title="YourComponent" component={YourComponent} />

<!--👇 We create a “template” of how args map to rendering -->
export const Template = (args) => <YourComponent {...args} />;

<!-- 👇 The args you need here will depend on your component -->
<Story
  name="FirstStory"
  args={{}}>
  {Template.bind({})}
</Story>
```

Go to your Storybook to view the rendered component. It’s OK if it looks a bit unusual right now.

Depending on your technology stack, you also might need to configure the Storybook environment further.

## Configure Storybook for your stack

Storybook comes with a permissive [default configuration](https://storybook.js.org/docs/react/configure/overview). It attempts to customize itself to fit your setup. But it’s not foolproof.

Your project may have additional requirements before components can be rendered in isolation. This warrants customizing configuration further. There are three broad categories of configuration you might need.

<details><summary>Build configuration like Webpack and Babel</summary><p>If you see errors on the CLI when you run the <code>yarn storybook</code> command, you likely need to make changes to Storybook’s build configuration. Here are some things to try:</p><ul><li><a href="/docs/react/addons/addon-types">Presets</a> bundle common configurations for various technologies into Storybook. In particular, presets exist for Create React App, SCSS and Ant Design.</li><li>Specify a custom <a href="/docs/react/configure/babel#custom-babel-config">Babel configuration</a> for Storybook. Storybook automatically tries to use your project’s config if it can.</li><li>Adjust the <a href="/docs/react/builders/webpack">Webpack configuration</a> that Storybook uses. Try patching in your own configuration if needed.</li></ul></details>
<details><summary>Runtime configuration</summary><p>If Storybook builds but you see an error immediately when connecting to it in the browser, in that case, chances are one of your input files is not compiling/transpiling correctly to be interpreted by the browser. Storybook supports modern browsers and IE11, but you may need to check the Babel and Webpack settings (see above) to ensure your component code works correctly.</p></details>
<details id="component-context" name="component-context"><summary>Component context</summary><p>If a particular story has a problem rendering, often it means your component expects a specific environment is available to the component.</p><p>A common frontend pattern is for components to assume that they render in a specific “context” with parent components higher up the rendering hierarchy (for instance, theme providers).</p><p>Use <a href="/docs/react/writing-stories/decorators">decorators</a> to “wrap” every story in the necessary context providers. The <a href="/docs/react/configure/overview#configure-story-rendering"><code>.storybook/preview.js</code></a> file allows you to customize how components render in Canvas, the preview iframe. See how you can wrap every component rendered in Storybook with <a href="https://styled-components.com/">Styled Components</a> <code>ThemeProvider</code>, <a href="https://github.com/FortAwesome/vue-fontawesome">Vue's Fortawesome</a>, or with an Angular theme provider component in the example below.</p></div>
```js
// .storybook/preview.js : STORY-FUNCTION

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

## Render component styles

Storybook isn’t opinionated about how you generate or load CSS. It renders whatever DOM elements you provide. But sometimes, things won’t “look right” out of the box.

You may have to configure your CSS tooling for Storybook’s rendering environment. Here are some tips on what could help:

<details><summary>CSS-in-JS like styled-components and Emotion</summary><p>If you are using CSS-in-JS, chances are your styles are working because they’re generated in JavaScript and served alongside each component. Theme users may need to add a decorator to <code>.storybook/preview.js</code>, <a href="#component-context">see above</a>.</p></details>
<details><summary>@import CSS into components</summary><p>Storybook allows you to import CSS files in your components directly. But in some cases you may need to <a href="/docs/react/builders/webpack#extendingstorybooks-webpack-config">tweak its Webpack configuration</a>. Angular components require <a href="/docs/react/configure/styling-and-css#importing-css-files">a special import</a>.</p></details>
<details><summary>Global imported styles</summary><p>If you have global imported styles, create a file called <a href="/docs/react/configure/overview#configure-story-rendering"><code>.storybook/preview.js</code></a> and import the styles there. They will be added by Storybook automatically for all stories.</p></details>
<details><summary>Add external CSS or webfonts in the &lt;head&gt;</summary><p>Alternatively, if you want to inject a CSS link tag to the <code>&lt;head&gt;</code> directly (or some other resource like a webfont link), you can use <a href="/docs/react/configure/story-rendering#adding-to-&amp;#60head&amp;#62"><code>.storybook/preview-head.html</code></a> to add arbitrary HTML.</p></details>
<details><summary>Load fonts or images from a local directory</summary><p>If you're referencing fonts or images from a local directory, you'll need to configure the Storybook script to <a href="/docs/react/configure/images-and-assets">serve the static files</a>.</p></details>

## Load assets and resources

If you want to [link to static files](https://storybook.js.org/docs/react/configure/images-and-assets) in your project or stories (e.g., `/fonts/XYZ.woff`), use the `-s path/to/folder` flag to specify a static folder to serve from when you start up Storybook. To do so, edit the `storybook` and `build-storybook` scripts in `package.json`.

We recommend serving external resources and assets requested in your components statically with Storybook. It ensures that assets are always available to your stories.