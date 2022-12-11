---
# configs for document itself.
title: "feature specifiactions"
lastModified: "2022-12-04"
visibility: "public"

# configs for annotating data to obsidian dataview plugin.
noteStatus: "activate"
noteField:
  - "develop"
notePurpose:
  - "individual"
  - "business"
noteTimeliness:
  - "lts"

# configs for fruit.
fruitLevel:
  - "intermediate"
  - "professional"
fruitType:
  - "text"
fruitPurpose:
  - "howto"
  - "explain"
  - "realworld"
fruitTarget:
  - "githubRepo"

# config for querying particular datas to specify notes which have been noted expirences related to particular subject.
# e.g. how to use mindulle-cli module.
# tags=[#fruit, #mindulle-cli, #customModule, #web]
tags:
  - "fruit"
  - "web"
  - "@mindulle"
---

TODO : COMMANDS 문서 보고 다시 쓰기.
- 우테코 기능 명세서처럼 쓰기.

Syntax:
mindulle [COMMAND]

[COMMAND]
- learn
- collection
- case-study
- trend
- code
- env
- module

(OPTIONS)
```json
{
  "-h": "--help",
  "-ls": "--list",
  "-cb": "--clipboard",
  "-p": "--print",
  "-d": "--docs",
  "-ex": "--example"
}
```

"-p" : print a short code such as snippet, codeblock, particular styled code, etc...
"-cb": copy code to clipboard.
"-d" : open document site.
"-h" : print help
"-ls" : print list of site or demo or snippet's shorthanded name.


specs
$ get user input using yargs module(https://www.npmjs.com/package/yargs).

$ cli docs generating using cli-docs-generator module.(https://www.npmjs.com/package/cli-docs-generator)

$ terminal spinner using ora module.(https://www.npmjs.com/package/ora)

$ decorate terminal using chalk module.(https://www.npmjs.com/package/chalk)

$ open default browser for '-d' option using open module.(https://www.npmjs.com/package/open)

$ copy to clipboard for '-cb' option using clipboard api(https://developer.mozilla.org/ko/docs/Web/API/Clipboard_API)

$ construct json api server and request to that server for fetching shorthanded name list with fetch api(https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch)

