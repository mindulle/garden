---
# configs for document itself.
title: "⚡Cheat sheet"
lastModified: "2023-01-13"

# field for querying only cheat sheet notes.
isCheatSheet: true

# add some tags for specifying particular subjects.
tags:
  - "cheatSheet"
---
# Dependencies
| Name                                                                           | How to install                          |
| ------------------------------------------------------------------------------ | --------------------------------------- |
| [eslint](https://www.npmjs.com/package/eslint)                                 | `yarn add --dev eslint`                 |
| [prettier](https://www.npmjs.com/package/prettier)                             | `yarn add --dev prettier`               |
| [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) | `yarn add --dev eslint-config-prettier` |
| [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier) | `yarn add --dev eslint-plugin-prettier` |
| [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)       | `yarn add --dev eslint-plugin-react`    |
| [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue)           | `yarn add --dev eslint-plugin-vue`      |
| [eslint-plugin-svelte](https://www.npmjs.com/package/eslint-plugin-svelte)     | `yarn add --dev eslint-plugin-svelte`                                        |

# My cheat sheet
## ESLint
```yaml {title="eslintrc.yml"}
# An environment provides predefined global variables. The available environments
# See this page if you need more informations:
# https://eslint.org/docs/latest/user-guide/configuring/language-options#specifying-environments

env:
  # Type of all key's value is boolean. Its value is true or false.
  # browser: browser global variables.
  # node: Node.js global variables and Node.js scoping.
  # es202X: adds all ECMAScript 202x globals and automatically sets the `ecmaVersion` parser option to 2X-9.

# It is possible to override settings based on file glob patterns
overrides:
  # Type of file and excludeFiles key can be string or string array.
  # - files: You can specificy files using glob patterns. (e.g. ["bin/*.js*", "lib/*.js"])
  # - excludeFiles: exclude files too. (e.g. "*.test.js")
  
  # Type of rulees key is object.
  # You can set this option to adapt another diffrent rules from origin one.
  # - rules:
    # quotes:
      # - error
      # - single

extends:
  - standard-with-typescript
  - plugin:prettier/recommended
  - plugin:@typescript-eslint/recommended
  - prettier
parserOptions:
  ecmaVersion: latest
  sourceType: module
  project: "./tsconfig.json"
rules: { "@typescript-eslint/explicit-function-return-type": "off" }
```

### ESLint + Typescript + React
```
```
### ESLint + Typescript + VUe

## Prettier
```yaml {title="prettierrc.yml"}
# .prettierrc or .prettierrc.yaml
trailingComma: "es5" 
tabWidth: 2 
semi: true 
singleQuote: flase
```