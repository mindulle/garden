---
# configs for document itself.
title: "004 - How to set svelte language server with svelte for vscode extension"
lastModified: "2023-01-21"

# configs for annotating data to obsidian dataview plugin.
noteImportance: ⭐⭐⭐⭐
noteStatus: "finished"
noteCertanity: "certain"
noteField:
  - "develop"
notePurpose:
  - "background"
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
# 1. Install svelte language server module
```shell
$ yarn add --dev svelte-language-server
```

# 2. Generate or update the VSCode/Yarn integration SDKs.
```shell
$ yarn dlx @yarnpkg/sdks vscode
```

# 3. Set the `svelte.language-server.ls-path` setting in your user configuration
> settings > svelte.language-erver.ls-path > `"./.yarn/sdks/svelte-language-server/bin/server.js"`

# 4. Restart VSCode.
# 5. Commit the changes to `.yarn/sdks`