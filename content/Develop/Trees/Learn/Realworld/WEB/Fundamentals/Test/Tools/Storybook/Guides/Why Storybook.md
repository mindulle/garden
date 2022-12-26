---
# configs for document itself.
title: "Why storybook"
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

## The problem

The web’s universality is pushing more complexity into the frontend. It began with responsive web design, which turned every user interface from one to 10, 100, 1000 different user interfaces. Over time, additional requirements piled on like devices, browsers, accessibility, performance, and async states.

Component-driven tools like React, Vue, and Angular help break down complex UIs into simple components but they’re not silver bullets. As frontends grow, the number of components swells. Mature projects can contain hundreds of components that yield thousands of discrete variations.

To complicate matters further, those UIs are painful to debug because they’re entangled in business logic, interactive states, and app context.

The breadth of modern frontends overwhelm existing workflows. Developers must consider countless UI variations, yet aren’t equipped to develop or organize them all. You end up in a situation where UIs are tougher to build, less satisfying to work on, and brittle.

![UI multiverse](https://storybook.js.org/0930d02ee2c69e80e8eb796e8be8981c/multiverse.png)

## The solution

#### Build UIs in isolation

Every piece of UI is now a [component](https://www.componentdriven.org/). The superpower of components is that you don't need to spin up the whole app just to see how they render. You can render a specific variation in isolation by passing in props, mocking data, or faking events.

Storybook is packaged as a small, development-only, [workshop](https://bradfrost.com/blog/post/a-frontend-workshop-environment/) that lives alongside your app. It provides an isolated iframe to render components without interference from app business logic and context. That helps you focus development on each variation of a component, even the hard-to-reach edge cases.

<video autoplay="" muted="" playsinline="" loop="" draggable="true"><source src="https://storybook.js.org/ef49deb4e1999a89b796fdd33dfdffc1/whats-a-story.mp4" type="video/mp4"></video>

#### Capture UI variations as “stories”

When developing a component variation in isolation, save it as a story. [Stories](https://github.com/ComponentDriven/csf) are a declarative syntax for supplying props and mock data to simulate component variations. Each component can have multiple stories. Each story allows you to demonstrate a specific variation of that component to verify appearance and behavior.

You write stories for granular UI component variation and then use those stories in development, testing, and documentation.

```js
// Histogram.stories.js|jsx

import React from 'react';

import { Histogram } from './Histogram';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Histogram',
  component: Histogram,
};

const Template = (args) => <Histogram {...args} />;

export const Default = Template.bind({});
Default.args = {
  dataType: 'latency',
  showHistogramLabels: true,
  histogramAccentColor: '#1EA7FD',
  label: 'Latency distribution',
};
```

```ts
// Histogram.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Histogram } from './Histogram';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Histogram',
  component: Histogram,
} as ComponentMeta<typeof Histogram>;

const Template: ComponentStory<typeof Histogram> = (args) => <Histogram {...args} />;

export const Default = Template.bind({});
Default.args = {
  dataType: 'latency',
  showHistogramLabels: true,
  histogramAccentColor: '#1EA7FD',
  label: 'Latency distribution',
};
```

```md
<!-- Histogram.stories.mdx -->

import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { Histogram } from './Histogram';

<Meta title="Histogram" component={Histogram} />

export const Template = (args) => <Histogram {...args} />;

<Canvas>
  <Story
    name="Default"
    args={{
      dataType: 'latency',
      showHistogramLabels: true,
      histogramAccentColor: '#1EA7FD',
      label: 'Latency distribution',
    }} >
    {Template.bind({})}
  </Story>
</Canvas>
```

#### Storybook keeps track of every story

Storybook is an interactive directory of your UI components and their stories. In the past, you'd have to spin up the app, navigate to a page, and contort the UI into the right state. This is a huge waste of time and bogs down frontend development. With Storybook, you can skip all those steps and jump straight to working on a UI component in a specific state.

<video autoplay="" muted="" playsinline="" loop="" draggable="true"><source src="https://storybook.js.org//0f37e3bc4895c3ad120d760b704a2ee1/7.0-storybook-hero-video.mp4" type="video/mp4"></video>

<details><summary>Where does Storybook fit into my project?</summary><p>Storybook is packaged as a small, development-only, <a href="https://bradfrost.com/blog/post/a-frontend-workshop-environment/">workshop</a> that lives alongside your app. Install it by <a href="/docs/react/get-started/install">running a command</a>.</p><p>During development, run it in a separate node process. If you’re working on UI in isolation, the only thing you’ll need to run is Storybook.</p></details>
<details><summary>Does Storybook work with X?</summary><p>Storybook aims to integrate with industry-standard tools and platforms to simplify setup. Thanks to our ambitious developer community, we’ve made significant progress. There are hundreds of <a href="https://storybook.js.org/addons/">addons</a> and tutorials that walk through how to set up Storybook in all types of projects.</p><p>If you’re using a niche framework or a recently launched tool, we might not have an integration for it yet. Consider creating a <a href="/docs/react/addons/writing-addons">proof of concept</a> yourself first to lead the way for the rest of the community.</p></details>
<details><summary>What’s the recommended Storybook workflow?</summary><p>Every team is different and so is their workflow. Storybook is designed to be incrementally adoptable. Teams can gradually try features to see what works best for them.</p><p>Most community members choose a <a href="https://www.componentdriven.org/">Component-Driven</a> workflow. UIs are developed in isolation from the “bottom up” starting with basic components then progressively combined to assemble pages.</p><ol><li>Build each component in isolation and write stories for its variations.</li><li>Compose small components together to enable more complex functionality.</li><li>Assemble pages by combining composite components.</li><li>Integrate pages into your project by hooking up data and business logic.</li></ol></details>

## Benefits

When you write stories for components, you get a bunch of additional benefits for free.

#### 📝 Develop UIs that are more durable

Isolate components and pages and track their use cases as [stories](https://storybook.js.org/docs/react/writing-stories/introduction). Verify hard-to-reach edge cases of UI. Use addons to mock everything a component needs—context, API requests, device features, etc.



#### ✅ Test UIs with less effort and no flakes

Stories are a pragmatic, reproducible way of tracking UI states. Use them to spot-test the UI during development. Storybook offers built-in workflows for automated [Accessibility](https://storybook.js.org/docs/react/writing-tests/accessibility-testing), [Interaction](https://storybook.js.org/docs/react/writing-tests/interaction-testing), and [Visual](https://storybook.js.org/docs/react/writing-tests/visual-testing) testing. Or use stories as test cases by importing them into other JavaScript testing tools.

#### 📚 Document UI for your team to reuse

Storybook is the single source of truth for your UI. Stories index all your components and their various states, making it easy for your team to find and reuse existing UI patterns. Storybook also auto-generates [documentation](https://storybook.js.org/docs/react/writing-docs/introduction) from those stories.

Stories show how UIs actually work, not just a picture of how they're supposed to work. That keeps everyone aligned on what's currently in production. [Publish Storybook](https://storybook.js.org/docs/react/sharing/publish-storybook) to get sign-off from teammates. Or [embed](https://storybook.js.org/docs/react/sharing/embed) them in wikis, Markdown, and Figma to streamline collaboration.

#### 🚦Automate UI workflows

Storybook is compatible with your continuous integration workflow. Add it as a CI step to automate user interface testing, review implementation with teammates, and get signoff from stakeholders.

## [](https://storybook.js.org/docs/react/why-storybook#write-stories-once-reuse-everywhere)Write stories once, reuse everywhere

Storybook is powered by [Component Story Format](https://github.com/ComponentDriven/csf), an open standard based on JavaScript ES6 modules. This enables stories to interoperate between development, testing, and design tools. Each story is exported as a JavaScript function enabling you to reuse it with other tools. No vendor lock-in.

Reuse stories with [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/) to verify interactions. Put them in [Chromatic](https://www.chromatic.com/) for visual testing. Audit story accessibility with [Axe](https://github.com/dequelabs/axe-core). Or test user flows with [Playwright](https://playwright.dev/) and [Cypress](https://www.cypress.io/). Reuse unlocks more workflows at no extra cost.

---

Storybook is purpose-built to help you develop complex UIs faster with greater durability and lower maintenance. It’s used by 100s of [leading companies](https://storybook.js.org/showcase) and thousands of [developers](https://github.com/storybookjs/storybook/).