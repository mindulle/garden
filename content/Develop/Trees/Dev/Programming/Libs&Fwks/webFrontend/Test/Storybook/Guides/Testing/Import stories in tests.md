---
# configs for document itself.
title: "Import stories in tests"
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
# Import stories in tests
Teams test a variety of UI characteristics using different tools. Each tool requires you to replicate the same component state over and over. That’s a maintenance headache. Ideally, you’d set up your tests in the same way and reuse that across tools.

Storybook enables you to isolate a component and capture all of its use cases in a `*.stories.js` file. Stories are standard JavaScript modules so they’re cross compatible with the whole JavaScript ecosystem. No API lock-in.

Stories are a practical starting point for UI testing. Import stories into tools like [Jest](https://jestjs.io/), [Testing Library](https://testing-library.com/), [Puppeteer](https://pptr.dev/), [Cypress](https://www.cypress.io/), and [Playwright](https://playwright.dev/) to save time and maintenance work.

## Setup the testing addon for your framework

Storybook has test addons for core frameworks React, Vue (2,3), and Angular. This allows you to reuse stories along with all of their mocks, dependencies, and context.

-   [@storybook/testing-react](https://storybook.js.org/addons/@storybook/testing-react)
-   [@storybook/testing-vue](https://storybook.js.org/addons/@storybook/testing-vue)
-   [@storybook/testing-vue3](https://storybook.js.org/addons/@storybook/testing-vue3)
-   [@storybook/testing-angular](https://storybook.js.org/addons/@storybook/testing-angular)

### Install the addon

Run the following command to add Storybook's testing addon into your environment:

```shell
yarn add --dev @storybook/testing-( react | vue | vue3 | angular )
```

> 💡 When running the command to install the addon, don't forget to select **only** your framework.

### Optional configuration

If you've set up global decorators or parameters and you need to use them in your tests, add the following to your test configuration file:

```js
// setupFile.js

import { setGlobalConfig } from '@storybook/testing-react';

// Storybook's preview file location
import * as globalStorybookConfig from './.storybook/preview';

setGlobalConfig(globalStorybookConfig);
```

Update your test script to include the configuration file:

```json
{
  "scripts": {
    "test": "react-scripts test --setupFiles ./setupFile.js"
  }
}
```

## Example with Testing Library

[Testing Library](https://testing-library.com/) is a suite of helper libraries for browser-based interaction tests. With [Component Story Format](https://storybook.js.org/docs/react/api/csf), your stories are reusable with Testing Library. Each named export (story) is renderable within your testing setup.

> 💡 You can use Testing Library out-of-the-box with [Storybook Interaction Testing](https://storybook.js.org/docs/react/writing-tests/interaction-testing).

For example, if you were working on a login component and wanted to test the invalid credentials scenario, here's how you could write your test:

```js
// Form.test.js

import { render, fireEvent } from '@testing-library/react';

import { InvalidForm } from './LoginForm.stories'; //👈 Our stories imported here.

it('Checks if the form is valid', () => {
  const { getByTestId, getByText } = render(<InvalidForm {...InvalidForm.args} />);

  fireEvent.click(getByText('Submit'));

  const isFormValid = getByTestId('invalid-form');
  expect(isFormValid).toBeInTheDocument();
});
```

Once the test runs, it loads the story and renders it. [Testing Library](https://testing-library.com/) then emulates the user's behavior and checks if the component state has updated.

## Example with Cypress

[Cypress](https://www.cypress.io/) is an end-to-end testing framework. It enables you to test a complete instance of your application by simulating user behavior. With Component Story Format, your stories are reusable with Cypress. Each named export (in other words, a story) is renderable within your testing setup.

An example of an end-to-end test with Cypress and Storybook is testing a login component for the correct inputs. For example, if you had the following story:

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

> 💡 The play function contains small snippets of code that run after the story renders. It allows you to sequence interactions in stories.

With Cypress, you could write the following test:

```js
// /cypress/integration/Login.spec.js

/// <reference types="cypress" />

describe('Login Form', () => {
  it('Should contain valid login information', () => {
    cy.visit('/iframe.html?id=components-login-form--example');
    cy.get('#login-form').within(() => {
      cy.log('**enter the email**');
      cy.get('#email').should('have.value', 'email@provider.com');
      cy.log('**enter password**');
      cy.get('#password').should('have.value', 'a-random-password');
    });
  });
});
```

When Cypress runs your test, it loads Storybook's isolated iframe and checks if the inputs match the test values.

![Cypress running successfully](https://storybook.js.org/9d32ec05c11cf4454f339810843a9a1f/cypress-success-run-tests-optimized.png)

## Example with Playwright

[Playwright](https://playwright.dev/) is a browser automation tool and end-to-end testing framework from Microsoft. It offers cross-browser automation, mobile testing with device emulation, and headless testing. With Component Story Format, your stories are reusable with Playwright. Each named export (in other words, a story) is renderable within your testing setup.

A real-life scenario of user flow testing with Playwright would be how to test a login form for validity. For example, if you had the following story already created:

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

> 💡 The play function contains small snippets of code that run after the story renders. It allows you to sequence interactions in stories.

With Playwright, you can write a test to check if the inputs are filled and match the story:

```js
// tests/login-form/login.spec.js

const { test, expect } = require('@playwright/test');

test('Login Form inputs', async ({ page }) => {
  await page.goto('http://localhost:6006/iframe.html?id=components-login-form--example');
  const email = await page.inputValue('#email');
  const password = await page.inputValue('#password');
  await expect(email).toBe('email@provider.com');
  await expect(password).toBe('a-random-password');
});
```

Once you execute Playwright, it opens a new browser window, loads Storybook's isolated iframe, asserts if the inputs contain the specified values, and displays the test results in the terminal.

---

#### Learn about other UI tests

-   [Test runner](https://storybook.js.org/docs/react/writing-tests/test-runner) to automate test execution
-   [Visual tests](https://storybook.js.org/docs/react/writing-tests/visual-testing) for appearance
-   [Accessibility tests](https://storybook.js.org/docs/react/writing-tests/accessibility-testing) for accessibility
-   [Interaction tests](https://storybook.js.org/docs/react/writing-tests/interaction-testing) for user behavior simulation
-   [Snapshot tests](https://storybook.js.org/docs/react/writing-tests/snapshot-testing) for rendering errors and warnings
-   Import stories in other tests for other tools

<a href="https://github.com/storybookjs/storybook/tree/next/docs/writing-tests/importing-stories-in-tests.md" target="_blank" rel="noopener" class="e1soj9vu1 e1ja7avb2 css-1ii1tfm e1ja7avb1"><span class="css-1xdhyk6 e1ja7avb3"><span role="img" aria-label="write">✍️</span> <!-- -->Edit on GitHub – PRs welcome!</span></a>
