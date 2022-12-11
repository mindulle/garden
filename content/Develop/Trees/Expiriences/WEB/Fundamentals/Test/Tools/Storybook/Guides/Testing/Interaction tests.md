---
# configs for document itself.
title: "Interaction tests"
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
# Interaction tests
As you build more complex UIs like pages, components become responsible for more than just rendering the UI. They fetch data and manage state. Interaction tests allow you to verify these functional aspects of UIs.

In a nutshell, you start by supplying the appropriate props for the initial state of a component. Then simulate user behavior such as clicks and form entries. Finally, check whether the UI and component state update correctly.

In Storybook, this familiar workflow happens in your browser. That makes it easier to debug failures because you're running tests in the same environment as you develop components: the browser.

![Storybook interaction testing](https://storybook.js.org/93ce56c30c3e719cfa58c97f198768b0/storybook-interaction-tests.gif)

## How does component testing in Storybook work?

You start by writing a [**story**](https://storybook.js.org/docs/react/writing-stories/introduction) to set up the component's initial state. Then simulate user behavior using the **play** function. Finally, use the **test-runner** to confirm that the component renders correctly and that your interaction tests with the **play** function pass. Additionally, you can automate test execution via the [command line](https://storybook.js.org/docs/react/writing-tests/test-runner#cli-options) or in your [CI environment](https://storybook.js.org/docs/react/writing-tests/test-runner#set-up-ci-to-run-tests).

-   The [`play`](https://storybook.js.org/docs/react/writing-stories/play-function) function is a small snippet of code that runs after a story finishes rendering. You can use this to test user workflows.
-   The test is written using Storybook-instrumented versions of [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/).
-   [`@storybook/addon-interactions`](https://storybook.js.org/addons/@storybook/addon-interactions/) visualizes the test in Storybook and provides a playback interface for convenient browser-based debugging.
-   [`@storybook/test-runner`](https://github.com/storybookjs/test-runner) is a standalone utility—powered by [Jest](https://jestjs.io/) and [Playwright](https://playwright.dev/)—that executes all of your interactions tests and catches broken stories.

## Set up the interactions addon

To enable interaction testing with Storybook, you'll need to take additional steps to set it up properly. We recommend you go through the [test runner documentation](https://storybook.js.org/docs/react/writing-tests/test-runner) before proceeding with the rest of the required configuration.

Run the following command to install the interactions addon and related dependencies.

```shell
yarn add --dev @storybook/testing-library @storybook/jest @storybook/addon-interactions
```

```shell
npm install @storybook/testing-library @storybook/jest @storybook/addon-interactions --save-dev
```

Update your Storybook configuration (in `.storybook/main.js|ts`) to include the interactions addon and enable playback controls for debugging.

```js
// .storybook/main.js|ts

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    // Other Storybook addons
    '@storybook/addon-interactions', // 👈 Addon is registered here
  ],
  features: {
    interactionsDebugger: true, // 👈 Enable playback controls
  },
};
```

## Write an interaction test

The test itself is defined inside a `play` function connected to a story. Here's an example of how to set up an interaction test with Storybook and the `play` function:

```js
// LoginForm.stories.js|jsx

import React from 'react';

import { within, userEvent } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import { LoginForm } from './LoginForm';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form',
  component: LoginForm,
};

const Template = (args) => <LoginForm {...args} />;

export const EmptyForm = Template.bind({});

export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);

  // 👇 Simulate interactions with the component
  await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');
  
  await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button'));

  // 👇 Assert DOM structure
  await expect(
    canvas.getByText(
      'Everything is perfect. Your account is ready and we should probably get you started!'
    )
  ).toBeInTheDocument();
};
```

```ts
// LoginForm.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { within, userEvent } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import { LoginForm } from './LoginForm';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const EmptyForm = Template.bind({});

export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);

  // 👇 Simulate interactions with the component
  await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');
  
  await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button'));

  // 👇 Assert DOM structure
  await expect(
    canvas.getByText(
      'Everything is perfect. Your account is ready and we should probably get you started!'
    )
  ).toBeInTheDocument();
};
```

```md
<!-- LoginForm.stories.mdx -->

import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { within, userEvent } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import { LoginForm } from './LoginForm';

<Meta title="Form" component={LoginForm} />

export const Template = (args) => <LoginForm {...args} />;

<Canvas>
  <Story name="Empty Form">
    {Template.bind({})}
  </Story>

  <Story
    name="Filled Form"
    play={async ({ canvasElement }) => {
      // Starts querying the component from its root element
      const canvas = within(canvasElement);

      // 👇 Simulate interactions with the component
      await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');

      await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

      // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
      await userEvent.click(canvas.getByRole('button'));

      // 👇 Assert DOM structure
      await expect(
        canvas.getByText(
          'Everything is perfect. Your account is ready and we should probably get you started!'
        )
      ).toBeInTheDocument();
    }}>
    {Template.bind({})}
  </Story>
</Canvas>
```

Once the story loads in the UI, it simulates the user's behavior and verifies the underlying logic.

<video autoplay="" muted="" playsinline="" loop="" draggable="true"><source src="https://storybook.js.org//65219e11fb3ff805395ff2c5f447fe4f/addon-interaction-example-optimized.mp4" type="video/mp4"></video>

## API for user-events

Under the hood, Storybook’s interaction addon mirrors Testing Library’s [`user-events`](https://testing-library.com/docs/user-event/intro/) API. If you’re familiar with [Testing Library](https://testing-library.com/), you should be at home in Storybook.

Below is an abridged API for user-event. For more, check out the [official user-event docs](https://testing-library.com/docs/ecosystem-user-event/).

| User events       | Description                                                                                                                                               |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `clear`           | Selects the text inside inputs, or textareas and deletes it <br/> `userEvent.clear(await within(canvasElement).getByRole('myinput'));`                    |
| `click`           | Clicks the element, calling a click() function <br/>`userEvent.click(await within(canvasElement).getByText('mycheckbox'));`                               |
| `dblClick`        | Clicks the element twice <br/>`userEvent.dblClick(await within(canvasElement).getByText('mycheckbox'));`                                                  |
| `deselectOptions` | Removes the selection from a specific option of a select element <br/>`userEvent.deselectOptions(await within(canvasElement).getByRole('listbox','1'));`  |
| `hover`           | Hovers an element <br/>`userEvent.hover(await within(canvasElement).getByTestId('example-test'));`                                                        |
| `keyboard`        | Simulates the keyboard events <br/>`userEvent.keyboard(‘foo’);`                                                                                           |
| `selectOptions`   | Selects the specified option, or options of a select element <br/> `userEvent.selectOptions(await within(canvasElement).getByRole('listbox'),['1','2']);` |
| `type`            | Writes text inside inputs, or textareas <br/>`userEvent.type(await within(canvasElement).getByRole('my-input'),'Some text');`                             |
| `unhover`         | Unhovers out of element <br/> `userEvent.unhover(await within(canvasElement).getByLabelText(/Example/i));`
### Interactive debugger

If you check your interactions panel, you'll see the step-by-step flow. It also offers a handy set of UI controls to pause, resume, rewind, and step through each interaction.

<video autoplay="" muted="" playsinline="" loop="" draggable="true"><source src="https://storybook.js.org/d56e717531f8ee4989d11411118b0d50/addon-interactions-playback-controls-optimized.mp4" type="video/mp4"></video>

### Permalinks for reproductions

The `play` function is executed after the story is rendered. If there’s an error, it’ll be shown in the interaction addon panel to help with debugging.

Since Storybook is a webapp, anyone with the URL can reproduce the error with the same detailed information without any additional environment configuration or tooling required.

![Interaction testing with a component](https://storybook.js.org/05ec43caad2308ac3f76aee709bfcb5a/storybook-addon-interactions-error-optimized.png)

Streamline interaction testing further by automatically [publishing Storybook](https://storybook.js.org/docs/react/sharing/publish-storybook) in pull requests. That gives teams a universal reference point to test and debug stories.

## Execute tests with the test-runner

Storybook only runs the interaction test when you're viewing a story. Therefore, you'd have to go through each story to run all your checks. As your Storybook grows, it becomes unrealistic to review each change manually. Storybook [test-runner](https://github.com/storybookjs/test-runner) automates the process by running all tests for you. To execute the test-runner, open a new terminal window and run the following command:

```shell
yarn test-storybook
```

```shell
npm run test-storybook
```

![Interaction test with test runner](https://storybook.js.org/0562852c646507ec6fffe04b298eac79/storybook-interaction-test-runner-loginform-optimized.png)

> 💡 If you need, you can provide additional flags to the test-runner. Read the [documentation](https://storybook.js.org/docs/react/writing-tests/test-runner#cli-options) to learn more.

## Automate

Once you're ready to push your code into a pull request, you'll want to automatically run all your checks using a Continuous Integration (CI) service before merging it. Read our [documentation](https://storybook.js.org/docs/react/writing-tests/test-runner#set-up-ci-to-run-tests) for a detailed guide on setting up a CI environment to run tests.

---

#### What’s the difference between interaction tests and visual tests?

Interaction tests can be expensive to maintain when applied wholesale to every component. We recommend combining them with other methods like visual testing for comprehensive coverage with less maintenance work.

#### Learn about other UI tests

-   [Test runner](https://storybook.js.org/docs/react/writing-tests/test-runner) to automate test execution
-   [Visual tests](https://storybook.js.org/docs/react/writing-tests/visual-testing) for appearance
-   [Accessibility tests](https://storybook.js.org/docs/react/writing-tests/accessibility-testing) for accessibility
-   Interaction tests for user behavior simulation
-   [Snapshot tests](https://storybook.js.org/docs/react/writing-tests/snapshot-testing) for rendering errors and warnings
-   [Import stories in other tests](https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests) for other tools

<a href="https://github.com/storybookjs/storybook/tree/next/docs/writing-tests/interaction-testing.md" target="_blank" rel="noopener" class="e1soj9vu1 e1ja7avb2 css-1ii1tfm e1ja7avb1"><span class="css-1xdhyk6 e1ja7avb3"><span role="img" aria-label="write">✍️</span> <!-- -->Edit on GitHub – PRs welcome!</span></a>
