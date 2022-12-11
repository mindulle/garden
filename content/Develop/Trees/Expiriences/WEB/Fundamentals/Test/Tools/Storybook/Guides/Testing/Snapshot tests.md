---
# configs for document itself.
title: "Snapshot tests"
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
style:bullet
```
# Snapshot tests
Snapshot tests compare the rendered markup of every story against known baselines. It’s a way to identify markup changes that trigger rendering errors and warnings.

Storybook is a helpful tool for snapshot testing because every story is essentially a test specification. Any time you write or update a story, you get a snapshot test for free.

![Example Snapshot test](https://storybook.js.org/5d599fe5fec3e868b09462dd39c63ff4/snapshot-test.png)

## Setup Storyshots

[Storyshots](https://storybook.js.org/addons/@storybook/addon-storyshots/) is the official Storybook addon that enables snapshot testing, powered by [Jest](https://jestjs.io/docs/getting-started).

Run the following command to install Storyshots:

```shell
yarn add --dev @storybook/addon-storyshots
```

```shell
npm install @storybook/addon-storyshots --save-dev
```

Add a test file to your environment with the following contents to configure Storyshots:

```js
// storybook.test.js

import initStoryshots from '@storybook/addon-storyshots';
initStoryshots();
```

> 💡 You can name the test file differently to suit your needs. Bear in mind that it requires to be picked up by Jest.

Run your first test. Storyshots will recognize your stories (based on [.storybook/main.js's setup](https://storybook.js.org/docs/react/configure/story-rendering)) and save them in the **snapshots** directory.

```js
npm test storybook.test.js
```

![Successful snapshot tests](https://storybook.js.org/9df22557ab29dc46ef29ff061f61c3df/storyshots-pass.png)

When you make changes to your components or stories, rerun the test to identify the changes to the rendered markup.

![Failing snapshots](https://storybook.js.org/555111e4efcf3bf2b0d6bd64046f3170/storyshots-fail.png)

If they're intentional, accept them as new baselines. If the changes are bugs, fix the underlying code, then rerun the snapshot tests.

### Configure the snapshot's directory

If your project has a custom setup for snapshot testing, you'll need to take additional steps to run Storyshots. You'll need to install both [@storybook/addon-storyshots-puppeteer](https://storybook.js.org/addons/@storybook/addon-storyshots-puppeteer) and [puppeteer](https://github.com/puppeteer/puppeteer):

```shell
# With npm
npm i -D @storybook/addon-storyshots-puppeteer puppeteer

# With yarn
yarn add @storybook/addon-storyshots-puppeteer puppeteer
```

Next, update your test file (for example, `storybook.test.js`) to the following:

```js
// storybook.test.js

import path from 'path';

import initStoryshots from '@storybook/addon-storyshots';

// The required import from the @storybook/addon-storyshots-puppeteer addon
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

// Function to customize the snapshot location
const getMatchOptions = ({ context: { fileName } }) => {
  // Generates a custom path based on the file name and the custom directory.
  const snapshotPath = path.join(path.dirname(fileName), 'your-custom-directory');
  return { customSnapshotsDir: snapshotPath };
};

initStoryshots({
  // your own configuration
  test: imageSnapshot({
    // invoke the function above here
    getMatchOptions,
  }),
});
```

> 💡 Don't forget to replace your-custom-directory with your own.

When you run your tests, the snapshots will be available in the directory you've specified.

### Framework configuration

By default, Storyshots detects your project's framework. If you run into a situation where this is not the case, you can adjust the configuration object and specify your framework. For example, if you wanted to configure the addon for a Vue 3 project:

```js
// storybook.test.js

import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({
  framework: 'vue3', //👈 Manually specify the project's framework
  configPath: path.join(__dirname, '.storybook'),
  integrityOptions: { cwd: path.join(__dirname, 'src', 'stories') },
  // Other configurations
});
```

These are the frameworks currently supported by Storyshots: `angular`, `html`, `preact`, `react`, `react-native`, `svelte`, `vue`, `vue3`, and `web-components`.

### Additional customization

Storyshots is highly customizable and includes options for various advanced use cases. You can read more in the [addon’s documentation](https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-core#options).

---

#### What’s the difference between snapshot tests and visual tests?

Visual tests capture images of stories and compare them against image baselines. Snapshot tests take DOM snapshots and compare them against DOM baselines. Visual tests are better suited for verifying appearance. Snapshot tests are useful for smoke testing and ensuring the DOM doesn’t change.

#### [](https://storybook.js.org/docs/react/writing-tests/snapshot-testing#learn-about-other-ui-tests)Learn about other UI tests

-   [Test runner](https://storybook.js.org/docs/react/writing-tests/test-runner) to automate test execution
-   [Visual tests](https://storybook.js.org/docs/react/writing-tests/visual-testing) for appearance
-   [Accessibility tests](https://storybook.js.org/docs/react/writing-tests/accessibility-testing) for accessibility
-   [Interaction tests](https://storybook.js.org/docs/react/writing-tests/interaction-testing) for user behavior simulation
-   Snapshot tests for rendering errors and warnings
-   [Import stories in other tests](https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests) for other tools

<a href="https://github.com/storybookjs/storybook/tree/next/docs/writing-tests/snapshot-testing.md" target="_blank" rel="noopener" class="e1soj9vu1 e1ja7avb2 css-1ii1tfm e1ja7avb1"><span class="css-1xdhyk6 e1ja7avb3"><span role="img" aria-label="write">✍️</span> <!-- -->Edit on GitHub – PRs welcome!</span></a>
