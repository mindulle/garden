---
# configs for document itself.
title: "Publish"
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
# Publish Storybook
Teams publish Storybook online to review and collaborate on works in progress. That allows developers, designers, PMs, and other stakeholders to check if the UI looks right without touching code or requiring a local dev environment.

<video autoplay="" muted="" playsinline="" loop="" draggable="true"><source src="https://storybook.js.org/176ade9827a6e71bd325b053d7f92c16/storybook-publish-review-optimized.mp4" type="video/mp4"></video>

## Build Storybook as a static web application

First, we'll need to build Storybook as a static web application. The functionality is already built-in and pre-configured for most supported frameworks. Others require a bit of customization (e.g., Angular). Run the following command inside your project's root directory:

```shell
yarn build-storybook
```

```shell
npm run build-storybook
```

> 💡 You can provide additional flags to customize the command. Read more about the flag options [here](https://storybook.js.org/docs/react/api/cli-options).

Storybook will create a static web application capable of being served by any web server. Preview it locally by running the following command:

```shell
npx http-server ./path/to/build
```

## Publish Storybook with Chromatic

Once you've built your Storybook as a static web app, you can publish it to your web host. We recommend [Chromatic](https://www.chromatic.com/), a free publishing service made for Storybook that documents, versions, and indexes your UI components securely in the cloud.

![Storybook publishing workflow](https://storybook.js.org/46ec976e159c37b5aebfa211c470aa36/workflow-publish.png)

To get started, sign up with your GitHub, GitLab, Bitbucket, or email and generate a unique *project-token* for your project.

Next, install the [Chromatic CLI](https://www.npmjs.com/package/chromatic) package from npm:

Run the following command after the package finishes installing. Make sure that you replace `your-project-token` with your own project token.

```shell
npx chromatic --project-token=<your-project-token>
```

```shell
npm install chromatic --save-dev
```

When Chromatic finishes, you should have successfully deployed your Storybook. Preview it by clicking the link provided (i.e., [https://random-uuid.chromatic.com](https://random-uuid.chromatic.com/)).

```
Build 1 published.

View it online at https://www.chromatic.com/build?appId=...&number=1.
```

![Chromatic publish build](https://storybook.js.org/72194ff6ebdd0d8ff56ecc54ccd15deb/build-publish-only.png)

### Setup CI to publish automatically

Configure your CI environment to publish your Storybook and [run Chromatic](https://www.chromatic.com/docs/ci)) whenever you push code to a repository. Let's see how to set it up using GitHub Actions.

In your project's root directory, add a new file called `chromatic.yml` inside the `.github/workflows` directory:

```yml
# .github/workflows/chromatic.yml

# Workflow name
name: 'Chromatic Publish'

# Event for the workflow
on: push

# List of jobs
jobs:
  test:
    # Operating System
    runs-on: ubuntu-latest
    # Job steps
    steps:
      - uses: actions/checkout@v1
      - run: yarn
        #👇 Adds Chromatic as a step in the workflow
      - uses: chromaui/action@v1
        # Options required for Chromatic's GitHub Action
        with:
          #👇 Chromatic projectToken,
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
          token: ${{ secrets.GITHUB_TOKEN }}
```

> 💡 Secrets are secure environment variables provided by GitHub so that you don't need to hard code your `project-token`. Read the [official documentation](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) to learn how to configure them.

Commit and push the file. Congratulations, you've successfully automated publishing your Storybook. Now whenever you open a PR you’ll get a handy link to your published Storybook in your PR checks.

![PR check publish](https://storybook.js.org/d55f4adbd1d93ad78acaf4eee8713e2c/prbadge-publish.png)

### Review with your team

Publishing Storybook as part of the development process makes it quick and easy to [gather team feedback](https://storybook.js.org/tutorials/design-systems-for-developers/react/en/review/).

A common method to ask for review is to paste a link to the published Storybook in a pull request or Slack.

If you publish your Storybook to Chromatic, you can use the [UI Review](https://www.chromatic.com/features/publish) feature to automatically scan your PRs for new and updated stories. That makes it easy to identify what changed and give feedback.

![UI review in Chromatic](https://storybook.js.org/92cfee533a9e7947f7f57717e56a20f1/workflow-uireview.png)

### Versioning and history

When you publish Storybook, you also get component history and versioning down to the commit. That's useful during implementation review for comparing components between branches/commits to past versions.

![Library history in Chromatic](https://storybook.js.org/db0a58e7688656be74cccc5fd61f6d75/workflow-history-versioning.png)

## Publish Storybook to other services

You can publish the static Storybook web app to many hosts. We maintain [`storybook-deployer`](https://github.com/storybookjs/storybook-deployer), a handy tool to help you publish to AWS or GitHub pages.

But features like [Composition](https://storybook.js.org/docs/react/sharing/storybook-composition), [embed](https://storybook.js.org/docs/react/sharing/embed), history, and versioning require tighter integration with Storybook APIs and secure authentication. Your hosting provider may not be capable of supporting these features. Learn about the Component Publishing Protocol (CPP) to see what.

## Component Publishing Protocol (CPP)

Storybook can communicate with services that host built Storybooks online. This enables features such as [Composition](https://storybook.js.org/docs/react/sharing/storybook-composition). We categorize services via compliance with the "Component Publishing Protocol" (CPP) with various levels of support in Storybook.

### CPP level 1

This level of service serves published Storybooks and makes the following available:

-   Versioned endpoints, URLs that resolve to different published Storybooks depending on a `version=x.y.z` query parameter (where `x.y.z` is the released version of the package).
-   Support for `/stories.json`
-   Support for `/metadata.json` and the `releases` field.

Example: [Chromatic](https://www.chromatic.com/)

### CPP level 0

This level of service can serve published Storybooks but has no further integration with Storybook’s APIs.

Examples: [Netlify](https://www.netlify.com/), [S3](https://aws.amazon.com/en/s3/)

## Search engine optimization (SEO)

If your Storybook is publically viewable, you may wish to configure how it is represented in search engine result pages.

### Description

You can provide a description for search engines to display in the results listing, by adding the following to the `manager-head.html` file in your config directory:

```html
<!-- .storybook/manager-head.html -->

<meta name="description" content="Components for my awesome project" key="desc" />
```

> 💡 You cannot also define `<title>` in this file, because Storybook generates the document title for you to include information about the currently-viewed component and story.

### Preventing your Storybook from being crawled

You can prevent your published Storybook from appearing in search engine results by including a noindex meta tag, which you can do by adding the following to the `manager-head.html` file in your config directory:

```html
<!-- .storybook/manager-head.html -->

<meta name="robots" content="noindex" />
```

<a href="https://github.com/storybookjs/storybook/tree/next/docs/sharing/publish-storybook.md" target="_blank" rel="noopener" class="e1soj9vu1 e1ja7avb2 css-1ii1tfm e1ja7avb1"><span class="css-1xdhyk6 e1ja7avb3"><span role="img" aria-label="write">✍️</span> <!-- -->Edit on GitHub – PRs welcome!</span></a>
