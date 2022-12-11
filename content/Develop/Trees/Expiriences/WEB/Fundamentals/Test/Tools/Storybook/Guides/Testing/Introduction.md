---
# configs for document itself.
title: "Introduction"
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
# How to test UIs with Storybook
Storybook provides a clean-room environment for testing components in isolation. Stories make it easy to explore a component in all its variations, no matter how complex.

That means stories are a pragmatic starting point for your UI testing strategy. You already write stories as a natural part of UI development, testing those stories is a low-effort way to prevent UI bugs over time.

![Stories are tests](https://storybook.js.org/8659edaa8ee4016e4d83e32c7e13d97f/stories-are-tests-cropped.gif)

The simplest testing method is manual “spot checking”. You run Storybook locally, then eyeball every story to verify its appearance and behavior. [Publish](https://storybook.js.org/docs/react/sharing/publish-storybook) your Storybook online to share reproductions and get teammates involved.

To test a component in isolation, you often have to mock data, dependencies, or even network requests. Check out our guide on [mocking in Storybook](https://storybook.js.org/docs/react/writing-stories/build-pages-with-storybook#mocking-connected-components) for more info.

Storybook also comes with tools, [a test runner](https://storybook.js.org/docs/react/writing-tests/test-runner), and [handy integrations](https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests) with the larger JavaScript ecosystem to expand your UI test coverage. These docs detail how you can use Storybook for UI testing.

-   [**Test runner**](https://storybook.js.org/docs/react/writing-tests/test-runner) to automatically test your entire Storybook and catch broken stories.
-   [**Visual tests**](https://storybook.js.org/docs/react/writing-tests/visual-testing) capture a screenshot of every story then compare it against baselines to detect appearance and integration issues
-   [**Accessibility tests**](https://storybook.js.org/docs/react/writing-tests/accessibility-testing) catch usability issues related to visual, hearing, mobility, cognitive, speech, or neurological disabilities
-   [**Interaction tests**](https://storybook.js.org/docs/react/writing-tests/interaction-testing) verify component functionality by simulating user behaviour, firing events, and ensuring that state is updated as expected
-   [**Snapshot tests**](https://storybook.js.org/docs/react/writing-tests/snapshot-testing) detect changes in the rendered markup to surface rendering errors or warnings
-   [**Import stories in other tests**](https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests) to QA even more UI characteristics

<a href="https://github.com/storybookjs/storybook/tree/next/docs/writing-tests/introduction.md" target="_blank" rel="noopener" class="e1soj9vu1 e1ja7avb2 css-1ii1tfm e1ja7avb1"><span class="css-1xdhyk6 e1ja7avb3"><span role="img" aria-label="write">✍️</span> <!-- -->Edit on GitHub – PRs welcome!</span></a>
