---
# configs for document itself.
title: "My issues"
lastModified: "2022-12-09"
visibility: "public"

# configs for annotating data to obsidian dataview plugin.
noteImportance: ⭐⭐⭐⭐⭐
noteStatus: "in progress"
noteCertanity: "certain"
noteField:
  - "develop"
notePurpose:
  - "background"
  - "individual"
  - "business"
noteTimeliness:
  - "lts"

# configs for selecting tree type.
treeType:
  - "expirence"
  - "ecosystem"

# configs to decide whether external contents are appropriate to me or not.
contentLevel:
  - "beginner"
  - "intermediate"
  - "professional"
contentType:
  - "text"
contentPurpose:
  - "howto"
  - "realworld"

# configs for querying particular datas to specify notes which have been noted expirences related to particular subject.
# e.g. performance optimization using lighthouse in web development environments:
# tags=[#tree, #web, #lighthouse, #perfOpt]
tags:
  - "tree"
  - "dev"
  - "versionControl"
  - "myIssues"
---
```toc
style: bullet
```

# Frequently used
## Commands
### 

## configs
### Activate git hooks with [Husky](https://typicode.github.io/husky/#/?id=automatic-recommended)
```shell
npx husky-init && npm install # npm
npx husky-init && yarn # Yarn 1 yarn
dlx husky-init --yarn2 && yarn # Yarn 2+
pnpm dlx husky-init && pnpm install # pnpm
```

### Add emoji in commit message with githook using [gitmoji-cli](https://github.com/carloscuesta/gitmoji-cli#usage)
To initialize hooks in husky, do this :
```shell
$ gitmoji --init
or
$ gitmoji -i
```

### Apply plain conventional commit style in yarn2+
```shell
yarn add --dev @commitlint/config-conventional @commitlint/cli 

echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js 

yarn dlx husky add .husky/commit-msg "yarn commitlint --edit $1"
```

# About Action
### Actions
### [Manually running a workflow](https://docs.github.com/en/actions/managing-workflow-runs/manually-running-a-workflow?tool=webui)

### Configs


# About Repo
## Remote


## Branch

## commit
