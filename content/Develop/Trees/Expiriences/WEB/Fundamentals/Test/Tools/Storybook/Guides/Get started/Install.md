---
# configs for document itself.
title: "Install"
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
# Install Storybook

Use the Storybook CLI to install it in a single command. Run this inside your _existing project’s_ root directory:

```
# Add Storybook:
npx storybook init
```

If you run into issues with the installation, check the [Troubleshooting section](https://storybook.js.org/docs/react/get-started/introduction#troubleshooting) below for guidance on how to solve it.

<details open=""><summary><code>storybook init</code> is not made for empty projects</summary><p>Storybook needs to be installed into a project that is already set up with a framework. It will not work on an empty project. There are many ways to bootstrap an app in a given framework, including:</p><ul><li>📦 <a href="https://angular.io/cli/new">Create an Angular Workspace</a></li><li>📦 <a href="https://reactjs.org/docs/create-a-new-react-app.html">Create React App</a></li><li>📦 <a href="https://vuejs.org/guide/quick-start.html">Create a Vue App</a></li><li>📦 <a href="https://guides.emberjs.com/release/getting-started/quick-start/">Ember CLI</a></li><li>Or any other tooling available.</li></ul></details>

Storybook will look into your project's dependencies during its install process and provide you with the best configuration available.

The command above will make the following changes to your local environment:

-   📦 Install the required dependencies.
-   🛠 Setup the necessary scripts to run and build Storybook.
-   🛠 Add the default Storybook configuration.
-   📝 Add some boilerplate stories to get you started.
-   📡 Set up telemetry to help us improve Storybook. Read more about it [here](https://storybook.js.org/docs/react/configure/telemetry).

Depending on your framework, first, build your app and then check that everything worked by running:

```shell
npm run storybook
yarn storybook
```

It will start Storybook locally and output the address. Depending on your system configuration, it will automatically open the address in a new browser tab, and you'll be greeted by a welcome screen.

![Storybook welcome screen](https://storybook.js.org/0c574a42143da65f91a53764c711a10e/example-welcome.png)

There are some noteworthy items here:

-   A collection of useful links for more in-depth configuration and customization options you have at your disposal.
-   A second set of links for you to expand your Storybook knowledge and get involved with the ever-growing Storybook community.
-   A few example stories to get you started.

<details><summary><h4 id="troubleshooting">Troubleshooting</h4></summary><p>Below are some of the most common installation issues and instructions on how to solve them.</p><div class="aside"><ul><li><p>Add the <code>--type react</code> flag to the installation command to set up Storybook manually:</p><div><div class="frontpage-code-snippets css-0 e7d06zb5"><div class="css-75nfsd e7d06zb4"><div class="e7d06zb3 css-1yf5hnk e1rbyhvm0"><div><pre class=" language-shell" tabindex="0"><code class=" language-shell">npx storybook init --type react
</code></pre></div><button role="button" class="e7d06zb2 e1lzlo4x0 css-rbv4rl emjsjmc1" aria-controls="a4cd7aa4-cb55-45ff-aa23-9ea2f6937cb3">Copy</button></div></div></div></div><ul><li>Storybook's CLI provides support for both <a href="https://yarnpkg.com/">Yarn</a> and <a href="https://www.npmjs.com/">npm</a> package managers. If you have Yarn installed in your environment but prefer to use npm as your default package manager add the <code>--use-npm</code> flag to your installation command. For example:</li></ul><div><div class="frontpage-code-snippets css-0 e7d06zb5"><div class="css-75nfsd e7d06zb4"><div class="e7d06zb3 css-1yf5hnk e1rbyhvm0"><div><pre class=" language-shell" tabindex="0"><code class=" language-shell">npx storybook init --use-npm
</code></pre></div><button role="button" class="e7d06zb2 e1lzlo4x0 css-rbv4rl emjsjmc1" aria-controls="05ac1b3a-30c5-4ee2-a92a-65ace1ca2c35">Copy</button></div></div></div></div></li><li><p>Storybook supports Webpack 5 out of the box. If you're upgrading from a previous version, run the following command to enable it:</p><div><div class="frontpage-code-snippets css-0 e7d06zb5"><div class="css-75nfsd e7d06zb4"><div class="e7d06zb3 css-1yf5hnk e1rbyhvm0"><div><pre class=" language-shell" tabindex="0"><code class=" language-shell">npx storybook@next automigrate
</code></pre></div><button role="button" class="e7d06zb2 e1lzlo4x0 css-rbv4rl emjsjmc1" aria-controls="c39db755-2727-4c96-91e5-3bd2f01cbc2d">Copy</button></div></div></div></div><p>Check the <a href="https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#cra5-upgrade">Migration Guide</a> for more information on how to set up Webpack 5.</p></li><li><p>For other installation issues, check the <a href="https://github.com/storybookjs/storybook/tree/master/app/react/README.md">React README</a> for additional instructions.</p></li></ul></div><div class="aside"><p>Storybook collects completely anonymous data to help us improve user experience. Participation is optional, and you may <a href="/docs/react/configure/telemetry#how-to-opt-out">opt-out</a> if you'd not like to share any information.</p></div><p>If all else fails, try asking for <a href="https://storybook.js.org/support">help</a></p></details>


Now that you installed Storybook successfully, let’s take a look at a story that was written for us.

Next

What's a story?

Learn how to save component examples as stories