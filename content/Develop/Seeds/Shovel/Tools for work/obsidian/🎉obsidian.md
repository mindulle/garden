---
# configs for document itself.
title: "🎉obsidian"
lastModified: "2022-12-14"
visibility: "public"

# configs for annotating data to obsidian dataview plugin.
noteImportance: ⭐⭐⭐⭐⭐
noteStatus: "in progress"
noteCertanity: "certain"
noteField:
  - "develop"
  - "design"
  - "devsigner"
  - "dataScience"
notePurpose:
  - "background"
  - "individual"
  - "business"
noteTimeliness:
  - "lts"

# configs for selecting seed type.
seedType:
  - "shovel"

# configs to decide whether external contents are appropriate to me or not.
contentLevel:
  - "beginner"
  - "intermediate"
  - "professional"
contentType:
  - "text"
  - "img"
  - "video"
contentPurpose:
  - "explain"
  - "reference"
  - "realworld"

# configs for querying particular datas to specify notes which have been noted expirences related to particular subject.
# e.g. short tips useful vscode extensions to let me know how errors occur.
# tags=[#seed, #shortTip, #vscode, #extension, #errorHandling]
tags:
  - "seed"
  - "shovel"
  - "obsidian"
  - "toolsForWork"
---
```toc
style: bullet
```

# Markdown
## Frequently used
## Documents & Specs


# Shortcuts

# Plugins
## My favorites
## Customize
### obsidian better codeblock
```diff {title="yourObsidianPluginFolder/obsidian-bettercodeblock/main.js"}
- titleRegExp = /TI:"([^"]*)"}/i/
+ titleRegExp = /{title="([^"]*)"}/i;

- highLightLinesRegExp = /HL="([^"]*)"/i;
+ highLightLinesRegExp = /{highlight="([^"]*)"}/i;
```
- It's customized to sync with Quartz's code block syntax.
- If plugin updated, this changes will be lost. you shoud update this two line after  you update this plugin.
- [TODO](https://marcus.se.net/obsidian-plugin-docs/) : make my own plugin to preserve this changes and add a feature that make a number on top of codeblock could be changed to another number.

## Documents

# Deploy
## Free
### Quartz 🎯

## Paid
### Obsidian Publish