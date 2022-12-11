---
# configs for document itself.
title: "Play function"
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
# Play function

`Play` functions are small snippets of code executed after the story renders. Enabling you to interact with your components and test scenarios that otherwise required user intervention.

## Setup the interactions addon

We recommend installing Storybook's [`addon-interactions`](https://storybook.js.org/addons/@storybook/addon-interactions) before you start writing stories with the `play` function. It's the perfect complement for it, including a handy set of UI controls to allow you command over the execution flow. At any time, you can pause, resume, rewind, and step through each interaction. Also providing you with an easy-to-use debugger for potential issues.

Run the following command to install the addon and the required dependencies.

```zsh
yarn add --dev @storybook/testing-library @storybook/jest @storybook/addon-interactions
```

Update your Storybook configuration (in `.storybook/main.js`) to include the interactions addon.

```js
// .storybook/main.js

module.exports = {
  stories:[],
  addons:[
    // Other Storybook addons
    '@storybook/addon-interactions', //👈 The addon registered here
};
```

## Writing stories with the play function

Storybook's `play` functions are small code snippets that run once the story finishes rendering. Aided by the `addon-interactions`, it allows you to build component interactions and test scenarios that were impossible without user intervention. For example, if you were working on a registration form and wanted to validate it, you could write the following story with the `play` function:

```js
// RegistrationForm.stories.js|jsx

import React from 'react';

import { screen, userEvent } from '@storybook/testing-library';

import { RegistrationForm } from './RegistrationForm';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'RegistrationForm',
  component: RegistrationForm,
};

const Template = (args) => <RegistrationForm {...args} />;

export const FilledForm = Template.bind({});
FilledForm.play = async () => {
  const emailInput = screen.getByLabelText('email', {
    selector: 'input',
  });

  await userEvent.type(emailInput, 'example-email@email.com', {
    delay: 100,
  });

  const passwordInput = screen.getByLabelText('password', {
    selector: 'input',
  });

  await userEvent.type(passwordInput, 'ExamplePassword', {
    delay: 100,
  });
  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  const submitButton = screen.getByRole('button');

  await userEvent.click(submitButton);
};
```

```ts
// RegistrationForm.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { screen, userEvent } from '@storybook/testing-library';

import { RegistrationForm } from './RegistrationForm';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'RegistrationForm',
  component: RegistrationForm,
} as ComponentMeta<typeof RegistrationForm>;

const Template: ComponentStory<typeof RegistrationForm> = (args) => <RegistrationForm {...args} />;

export const FilledForm = Template.bind({});
FilledForm.play = async () => {
  const emailInput = screen.getByLabelText('email', {
    selector: 'input',
  });

  await userEvent.type(emailInput, 'example-email@email.com', {
    delay: 100,
  });

  const passwordInput = screen.getByLabelText('password', {
    selector: 'input',
  });

  await userEvent.type(passwordInput, 'ExamplePassword', {
    delay: 100,
  });
  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  const submitButton = screen.getByRole('button');

  await userEvent.click(submitButton);
};
```

```md
<!-- RegistrationForm.stories.mdx -->

import { Meta, Story } from '@storybook/addon-docs';

import { screen, userEvent } from '@storybook/testing-library';

import { RegistrationForm } from './RegistrationForm';

<Meta title="RegistrationForm" component={RegistrationForm} />

export const Template = (args) => <RegistrationForm {...args} />;

<Story
  name="FilledForm"
  play={async () => {
    const emailInput = screen.getByLabelText('email', {
      selector: 'input',
    });

    await userEvent.type(emailInput, 'example-email@email.com', {
      delay: 100,
    });

    const passwordInput = screen.getByLabelText('password', {
      selector: 'input',
    });

    await userEvent.type(passwordInput, 'ExamplePassword', {
      delay: 100,
    });
    // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    const submitButton = screen.getByRole('button');

    await userEvent.click(submitButton);
  }}>
  {Template.bind({})}
</Story>
```

When Storybook finishes rendering the story, it executes the steps defined within the `play` function, interacting with the component and filling the form's information. All of this without the need for user intervention. If you check your `Interactions` panel, you'll see the step-by-step flow.

## Composing stories

Thanks to the [Component Story Format](https://storybook.js.org/docs/react/api/csf), an ES6 module based file format, you can also combine your `play` functions, similar to other existing Storybook features (e.g., [args](https://storybook.js.org/docs/react/writing-stories/args)). For example, if you wanted to verify a specific workflow for your component, you could write the following stories:

```js
// MyComponent.stories.js|jsx

import React from 'react';

import { screen, userEvent } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent',
  component: MyComponent,
};

const Template = (args) => <MyComponent {...args} />;

export const FirstStory = Template.bind({});
FirstStory.play = async () => {
  await userEvent.type(screen.getByTestId('an-element'), 'example-value');
};

export const SecondStory = Template.bind({});
SecondStory.play = async () => {
  await userEvent.type(screen.getByTestId('other-element'), 'another value');
};

export const CombinedStories = Template.bind({});
CombinedStories.play = async () => {
  // Runs the FirstStory and Second story play function before running this story's play function
  await FirstStory.play();
  await SecondStory.play();
  await userEvent.type(screen.getByTestId('another-element'), 'random value');
};
```

```ts
// MyComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { screen, userEvent } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/eact/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent',
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

const Template: ComponentStory<typeof MyComponent> = (args) => <MyComponent {...args} />;

export const FirstStory = Template.bind({});
FirstStory.play = async () => {
  await userEvent.type(screen.getByTestId('an-element'), 'example-value');
};

export const SecondStory = Template.bind({});
SecondStory.play = async () => {
  await userEvent.type(screen.getByTestId('other-element'), 'another value');
};

export const CombinedStories = Template.bind({});
CombinedStories.play = async () => {
  // Runs the FirstStory and Second story play function before running this story's play function
  await FirstStory.play();
  await SecondStory.play();
  await userEvent.type(screen.getByTestId('another-element'), 'random value');
};
```

By combining the stories, you're recreating the entire component workflow and can spot potential issues while reducing the boilerplate code you need to write.

## Working with events

Most modern UIs are built focusing on interaction (e.g., clicking a button, selecting options, ticking checkboxes), providing rich experiences to the end-user. With the `play` function, you can incorporate the same level of interaction into your stories.

A common type of component interaction is a button click. If you need to reproduce it in your story, you can define your story's `play` function as the following:

```js
// MyComponent.stories.js|jsx

import React from 'react';

import { fireEvent, screen, userEvent } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ClickExamples',
  component: MyComponent,
};

const Template = (args) => <MyComponent {...args} />;

export const ClickExample = Template.bind({});
ClickExample.play = async () => {
  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(screen.getByRole('button'));
};

export const FireEventExample = Template.bind({});
FireEventExample.play = async () => {
  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await fireEvent.click(screen.getByTestId('data-testid'));
};
```

```ts
// MyComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { fireEvent, screen, userEvent } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ClickExamples',
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

const Template: ComponentStory<typeof MyComponent> = (args) => <MyComponent {...args} />;

export const ClickExample = Template.bind({});
ClickExample.play = async () => {
  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(screen.getByRole('button'));
};

export const FireEventExample = Template.bind({});
FireEventExample.play = async () => {
  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await fireEvent.click(screen.getByTestId('data-testid'));
};
```

```md
<!-- MyComponent.stories.mdx -->

import { Meta, Story } from '@storybook/addon-docs';

import { fireEvent, screen, userEvent } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

<Meta title="ClickExamples" component={MyComponent} />

export const Template = (args) => <MyComponent {...args} />;

<Story
  name="ClickExample"
  play={async () => {
    // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(screen.getByRole('button'));
  }}>
  {Template.bind({})}
</Story>

<Story
  name="FireEventExample"
  play={async ()=>{
    // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await fireEvent.click(screen.getByTestId('data-testid'));
  }}>
  {Template.bind({})}
</Story>
```

When Storybook loads the story and the function executes, it interacts with the component and triggers the button click, similar to what a user would do.

Asides from click events, you can also script additional events with the `play` function. For example, if your component includes a select with various options, you can write the following story and test each scenario:

```js
// MyComponent.stories.js|jsx

import React from 'react';

import { userEvent, screen } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'WithSelectEvent',
  component: MyComponent,
};

// Function to emulate pausing between interactions
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Template = (args) => <MyComponent {...args} />;

export const ExampleChangeEvent = Template.bind({});
ExampleChangeEvent.play = async () => {
  const select = screen.getByRole('listbox');

  await userEvent.selectOptions(select, ['One Item']);
  await sleep(2000);

  await userEvent.selectOptions(select, ['Another Item']);
  await sleep(2000);

  await userEvent.selectOptions(select, ['Yet another item']);
};
```

```ts
// MyComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { userEvent, screen } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'WithSelectEvent',
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Template: ComponentStory<typeof MyComponent> = (args) => <MyComponent {...args} />;

export const ExampleChangeEvent = Template.bind({});
ExampleChangeEvent.play = async () => {
  const select = screen.getByRole('listbox');

  await userEvent.selectOptions(select, ['One Item']);
  await sleep(2000);

  await userEvent.selectOptions(select, ['Another Item']);
  await sleep(2000);

  await userEvent.selectOptions(select, ['Yet another item']);
};
```

```md
<!-- MyComponent.stories.mdx -->

import { Meta, Story } from '@storybook/addon-docs';

import { userEvent, screen } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

<Meta title="WithSelectEvent" component={MyComponent}/>

<!-- Function to emulate pausing between interactions -->

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const Template = (args) => <MyComponent {...args} />;

<Story 
  name="ExampleChangeEvent"
  play={async () => {
    const select = screen.getByRole('listbox');

    await userEvent.selectOptions(select, ['One Item']);
    await sleep(2000);

    await userEvent.selectOptions(select, ['Another Item']);
    await sleep(2000);

    await userEvent.selectOptions(select, ['Yet another item']);

  }}>
  {Template.bind({})}
</Story>
```

In addition to events, you can also create interactions with the `play` function based on other types of asynchronous methods. For instance, let's assume that you're working with a component with validation logic implemented (e.g., email validation, password strength). In that case, you can introduce delays within your `play` function to emulate user interaction and assert if the values provided are valid or not:

```js
// MyComponent.stories.js|jsx

import React from 'react';

import { screen, userEvent } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'WithDelay',
  component: MyComponent,
};

const Template = (args) => <MyComponent {...args} />;

export const DelayedStory = Template.bind({});
DelayedStory.play = async () => {
  const exampleElement= screen.getByLabelText('example-element');

  // The delay option set the amount of milliseconds between characters being typed
  await userEvent.type(exampleElement, 'random string', {
    delay: 100,
  });

  const AnotherExampleElement= screen.getByLabelText('another-example-element');
  await userEvent.type(AnotherExampleElement, 'another random string', {
    delay: 100,
  });
};
```

```ts
// MyComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { screen, userEvent } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'WithDelay',
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

const Template: ComponentStory<typeof MyComponent> = (args) => <MyComponent {...args} />;

export const DelayedStory = Template.bind({});
DelayedStory.play = async () => {
  const exampleElement= screen.getByLabelText('example-element');

  // The delay option set the amount of milliseconds between characters being typed
  await userEvent.type(exampleElement, 'random string', {
    delay: 100,
  });

  const AnotherExampleElement= screen.getByLabelText('another-example-element');
  await userEvent.type(AnotherExampleElement, 'another random string', {
    delay: 100,
  });
};
```

```md
<!-- MyComponent.stories.mdx -->

import { Meta, Story } from '@storybook/addon-docs';

import { screen, userEvent } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

<Meta title="WithDelay" component={MyComponent} />

export const Template = (args) => <MyComponent {...args} />;

<Story
  name="DelayedStory"
  play={async () => {
    const exampleElement= screen.getByLabelText('example-element');

    // The delay option set the amount of milliseconds between characters being typed
    await userEvent.type(exampleElement, 'random string', {
      delay: 100,
    });

    const AnotherExampleElement= screen.getByLabelText('another-example-element');
    await userEvent.type(AnotherExampleElement, 'another random string', {
      delay: 100,
    });
  }}>
  {Template.bind({})}
</Story>
```

When Storybook loads the story, it interacts with the component, filling in its inputs and triggering any validation logic defined.

You can also use the `play` function to verify the existence of an element based on a specific interaction. For instance, if you're working on a component and want to check what happens if a user introduces the wrong information. In that case, you could write the following story:

```js
// MyComponent.stories.js|jsx

import React from 'react';

import { screen, userEvent, waitFor } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'WithAsync',
  component: MyComponent,
};

const Template = (args) => <MyComponent {...args} />;

export const ExampleAsyncStory = Template.bind({});
ExampleAsyncStory.play = async () => {
  const Input = screen.getByLabelText('Username', {
    selector: 'input',
  });

  await userEvent.type(Input, 'WrongInput', {
    delay: 100,
  });
  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  const Submit = screen.getByRole('button');

  await userEvent.click(Submit);

  await waitFor(async () => {
    await userEvent.hover(screen.getByTestId('error'));
  });
};
```

```ts
// MyComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { screen, userEvent, waitFor } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'WithAsync',
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

const Template: ComponentStory<typeof MyComponent> = (args) => <MyComponent {...args} />;

export const ExampleAsyncStory = Template.bind({});
ExampleAsyncStory.play = async () => {
  const Input = screen.getByLabelText('Username', {
    selector: 'input',
  });

  await userEvent.type(Input, 'WrongInput', {
    delay: 100,
  });
  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  const Submit = screen.getByRole('button');

  await userEvent.click(Submit);

  await waitFor(async () => {
    await userEvent.hover(screen.getByTestId('error'));
  });
};
```

```md
<!-- MyComponent.stories.mdx -->

import { Meta, Story } from '@storybook/addon-docs';

import { screen, userEvent, waitFor } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

<Meta title="WithAsync" component={MyComponent}/>

export const Template = (args) => <MyComponent {...args} />;

<Story
  name="ExampleAsyncStory"
  play={async () => {
    const Input = screen.getByLabelText('Username', {
      selector: 'input',
    });

    await userEvent.type(Input, 'WrongInput', {
      delay: 100,
    });
    
    // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    const Submit = screen.getByRole('button');

    await userEvent.click(Submit);

    await waitFor(async () => {
      await userEvent.hover(screen.getByTestId('error'));
    });
  }}>
  {Template.bind({})}
</Story>
```

## Querying elements

If you need, you can also adjust your `play` function to find elements based on queries (e.g., role, text content). For example:

```js
// MyComponent.stories.js|jsx

import React from 'react';

import { screen, userEvent } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'QueryMethods',
  component: MyComponent,
};

const Template = (args) => <MyComponent {...args} />;

export const ExampleWithRole = Template.bind({});
ExampleWithRole.play = async () => {
  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(screen.getByRole('button', { name: / button label/i }));
};

export const ExampleWithText = Template.bind({});
ExampleWithText.play = async () => {
  // The play function interacts with the component and looks for the text
  await screen.findByText('example string');
};
```

```ts
// MyComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { screen, userEvent } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'QueryMethods',
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

const Template: ComponentStory<typeof MyComponent> = (args) => <MyComponent {...args} />;

export const ExampleWithRole = Template.bind({});
ExampleWithRole.play = async () => {
  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(screen.getByRole('button', { name: / button label/i }));
};

export const ExampleWithText = Template.bind({});
ExampleWithText.play = async () => {
  // The play function interacts with the component and looks for the text
  await screen.findByText('example string');
};
```

```md
<!-- MyComponent.stories.mdx -->

import { Meta, Story } from '@storybook/addon-docs';

import { screen, userEvent } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

<Meta title="QueryMethods" component={MyComponent} />

export const Template = (args) => <MyComponent {...args} />;

<Story
  name="ExampleWithRole"
  play={async () => {
    // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(screen.getByRole('button', { name: / button label/i }));
  }}>
  {Template.bind({})}
</Story>

<Story
  name="ExampleWithText"
  play={async () => {
    // The play function interacts with the component and looks for the text
    await screen.findByText('example string');
  }}>
  {Template.bind({})}
</Story>
```
<div class="aside">💡 You can read more about the querying elements in the <a href="https://testing-library.com/docs/queries/about/"> Testing library documentation</a>.</div>

## Working with the Canvas

By default, each interaction you write inside your `play` function will be executed starting from the top-level element of the Canvas. This is acceptable for smaller components (e.g., buttons, checkboxes, text inputs), but can be inefficient for complex components (e.g., forms, pages), or for multiple stories. To accommodate this, you can adjust your interactions to start execution from the component's root. For example:

```js
// MyComponent.stories.js|jsx

import React from 'react';

import { getByRole, userEvent, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'WithCanvasElement',
  component: MyComponent,
};

const Template = () => <MyComponent {...args} />;

export const ExampleStory = Template.bind({});
ExampleStory.play = async ({ canvasElement }) => {
  // Assigns canvas to the component root element
  const canvas = within(canvasElement);

  // Starts querying from the component's root element
  await userEvent.type(canvas.getByTestId('example-element'), 'something');
  await userEvent.click(canvas.getByRole('another-element'));
};
```

```ts
// MyComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { userEvent, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'WithCanvasElement',
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

const Template: ComponentStory<typeof MyComponent> = (args) => <MyComponent {...args} />;

export const ExampleStory = Template.bind({});
ExampleStory.play = async ({ canvasElement }) => {
  // Assigns canvas to the component root element
  const canvas = within(canvasElement);

  // Starts querying from the component's root element
  await userEvent.type(canvas.getByTestId('example-element'), 'something');
  await userEvent.click(canvas.getByRole('another-element'));
};
```

```md
import { Meta, Story} from '@storybook/addon-docs'

import { userEvent, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

<Meta title="WithCanvasElement" component={MyComponent}/>

export const Template = (args) => <MyComponent {...args} />;

<Story
  name="ExampleStory"
  play={async ({ canvasElement }) => {
    // Assigns canvas to the component root element
    const canvas = within(canvasElement);

    // Starts querying from the component's root element
    await userEvent.type(canvas.getByTestId('example-element'), 'something');
    await userEvent.click(canvas.getByRole('another-element'));
  }}>
  {Template.bind({})}
</Story>
```

Applying these changes to your stories can provide a performance boost and improved error handling with [`addon-interactions`](https://storybook.js.org/addons/@storybook/addon-interactions).

<a href="https://github.com/storybookjs/storybook/tree/next/docs/writing-stories/play-function.md" target="_blank" rel="noopener" class="e1soj9vu1 e1ja7avb2 css-1ii1tfm e1ja7avb1"><span class="css-1xdhyk6 e1ja7avb3"><span role="img" aria-label="write">✍️</span> Edit on GitHub – PRs welcome!</span></a>
