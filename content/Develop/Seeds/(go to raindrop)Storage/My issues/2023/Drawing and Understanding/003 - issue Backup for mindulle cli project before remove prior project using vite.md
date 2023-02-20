---
# configs for document itself.
title: "003 - issue Backup for mindulle cli project before remove prior project using vite"
lastModified: "2023-01-21"

# configs for annotating data to obsidian dataview plugin.
noteImportance: ⭐⭐⭐
noteStatus: "finished"
noteCertanity: "certain"
noteField:
  - "develop"
notePurpose:
  - "individual"
noteTimeliness:
  - "lts"

# configs for selecting seed type.
seedType:
  - "storage"
seedPurpose:
  - "My issues"
  - "Drawing and Understanding"

# configs for querying particular datas to specify notes which have been noted expirences related to particular subject.
# e.g. short tips for useful vscode extensions to let me know how errors occur.
# tags=[#seed, #shortTip, #vscode, #extension, #errorHandling]
tags:
  - "seed"
---
## Dev ecosystems(refer to [these](https://yozm.wishket.com/magazine/detail/1796/) [article](http://blog.hwahae.co.kr/all/tech/tech-tech/9507/))
### prepare to commit with [husky](https://typicode.github.io/husky/#/)
- [x] set `pre-commit` githook for `unit testing` and to lint staged file using `lint-staged` library.
- [x] set `prepare-commit-msg` githook to set commit message template with emoji using `gitmoji --init` command.
- [ ] set `pre-push` githook to protect `main` branch.
- [x] separate branches let each branch have appropriate purpose.
  - [x] `feature`
  - [x] `release`
  - [x] `hotfix`

### prepare local develop environment before starting `typescript` project.
- [x] install and config `eslint`
- [x] install and config `prettier`
- [x] install and config `typescript`
- [x] install and config `jest` for unit testing
- [x] if each config collides with themselves, run `yarn dlx @yarnpkg/sdks vscode` to resolve errors in vscode


## Gthub environments([pull request](https://www.vantage-ai.com/blog/how-to-enforce-good-pull-requests-on-github), issue [b](https://github.com/robvanderleek/create-issue-branch)[o](https://github.com/marketplace/issue-label-bot)[t](https://github.com/marketplace/semantic-pull-requests)[s](https://docs.github.com/en/code-security/dependabot/working-with-dependabot/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands), [a](https://github.com/marketplace/actions/issue-bot-action)[c](https://github.com/marketplace/actions/labeler)[t](https://github.com/marketplace/actions/pr-labeler)ions, [tags and project board](http://blog.hwahae.co.kr/all/tech/tech-tech/7407/))
### set tags and project board
- [ ] remember to tag a feature's last commit
- [ ] config project board refering to upper article.

### set templates
- [ ] make issue templates.
- [ ] make pull request template.

### set up bots
- [ ] install and configure create issue branch bot
- [ ] install and configure issue label bot
- [ ] install and configure semantic pull request bot
- [ ] install and configure dependabot

### set up actions
- [ ] make `.github/workflows/pr-labeler.yml` file for pull request labeling.
- [ ] make `.github/labeler.yml` file for issue labeling.
- [ ] make `.github/semantic.yml` file to prefix pull request's title have a particular type such as feat, fix, etc... 
- [ ] make `.github/issue-bot.yml` file to manage issue and project panel.


## Proejct structure (refer [to](https://github.com/carloscuesta/gitmoji-cli) [these](https://github.com/vuejs/vue-cli) [examples](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/file-structure.html))
```
|--- lib
|     |--- commands
|     |--- constants
|     |--- utils
```

## Initialize wiki
- [x] create sidebar
- [x] create [`Home`](https://github.com/mindulle/cli/wiki) page.
- [x] create footer