---
# configs for document itself.
title: "Visual tests"
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
# Visual tests
Visual tests, also called visual regression tests, catch bugs in UI appearance. They work by taking screenshots of every story and comparing them commit-to-commit to identify changes.

Ideal for verifying what the user sees: layout, color, size, and contrast. Storybook is a fantastic tool for visual testing because every story is essentially a test specification. Any time you write or update a story, you get a spec for free.

![Visually testing a component in Storybook](https://storybook.js.org/b2d5cc75d84f4519e390a495ebc0b949/component-visual-testing.gif)

There are [many tools](https://github.com/mojoaxel/awesome-regression-testing) for visual testing. We recommend [Chromatic](https://www.chromatic.com/) by Storybook maintainers to run visual tests in a lightning-fast cloud browser environment.

For a self-managed alternative to Chromatic, we offer [StoryShots](https://github.com/storybookjs/storybook/tree/main/addons/storyshots). It allows you to run visual tests on stories by integrating with [jest-image-snapshot](https://github.com/storybookjs/storybook/tree/main/addons/storyshots/storyshots-puppeteer#imagesnapshots).

## Setup Chromatic addon

Chromatic is a cloud service built for Storybook. It allows you to run visual tests with zero-config.

To get started, sign up with your [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/), [Bitbucket](https://bitbucket.org/), or email and generate a unique `<project-token>` for your Storybook.

Next, install the [chromatic](https://www.npmjs.com/package/chromatic) CLI package from npm:

```shell
yarn add --dev chromatic
```

```shell
npm install chromatic --save-dev
```

Run the following command after the package finishes installing:

```shell
npx chromatic --project-token <your-project-token>
```

> Don't forget to replace \`your-project-token\` with the one provided by Chromatic.

```
Build 1 published.

View it online at https://www.chromatic.com/build?appId=...&number=1.
```

> 💡 Before running Chromatic's CLI ensure you have at least two commits added to the repository to prevent build failures, as Chromatic relies on a full Git history graph to establish the baselines. Read more about baselines in Chromatic's [documentation](https://www.chromatic.com/docs/branching-and-baselines)

When Chromatic finishes, it should have successfully deployed your Storybook and established the baselines, that is to say, the starting point for all your component's stories. Additionally, providing you with a link to the published Storybook that you can share with your team to gather feedback.

![Chromatic project first build](https://storybook.js.org/f549a19ae43988ee990a7b3ec43344c6/chromatic-first-build-optimized.png)

## Catching UI changes

Each time you run Chromatic, it will generate new snapshots and compare them against the existing baselines. That’s ideal for detecting UI changes and preventing potential UI regressions.

For example, let's assume you're working on a component and you tweak the styling. When Chromatic is re-run, it will highlight the difference between the baseline and the updated component.

![Chromatic project second build](https://storybook.js.org/43567dec8252929d48c86a1de3fb4026/chromatic-second-build-optimized.png)

If the changes are intentional, accept them as baselines. Otherwise, deny them to prevent UI regressions.

Learn how to [integrate Chromatic UI Tests](https://www.chromatic.com/docs/) into your CI pipeline.

---

#### What’s the difference between visual tests and snapshot tests?

Snapshot tests compare the rendered markup of every story against known baselines. This means the test compares blobs of HTML and not what the user actually sees. Which in turn, can lead to an increase in false positives as code changes don’t always yield visual changes in the component.

#### Learn about other UI tests

-   [Test runner](https://storybook.js.org/docs/react/writing-tests/test-runner) to automate test execution
-   Visual tests for appearance
-   [Accessibility tests](https://storybook.js.org/docs/react/writing-tests/accessibility-testing) for accessibility
-   [Interaction tests](https://storybook.js.org/docs/react/writing-tests/interaction-testing) for user behavior simulation
-   [Snapshot tests](https://storybook.js.org/docs/react/writing-tests/snapshot-testing) for rendering errors and warnings
-   [Import stories in other tests](https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests) for other tools

<a href="https://github.com/storybookjs/storybook/tree/next/docs/writing-tests/visual-testing.md" target="_blank" rel="noopener" class="e1soj9vu1 e1ja7avb2 css-1ii1tfm e1ja7avb1"><span class="css-1xdhyk6 e1ja7avb3"><span role="img" aria-label="write">✍️</span> <!-- -->Edit on GitHub – PRs welcome!</span></a>
