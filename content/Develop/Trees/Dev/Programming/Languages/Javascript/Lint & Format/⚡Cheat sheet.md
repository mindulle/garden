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
# Initialize
## ESLint
```shell
$ yarn dlx eslint --init
```

```shell
$ yarn add --dev eslint-config-prettier
```
## Prettier
```yaml {title="prettierrc.yml"}
# .prettierrc or .prettierrc.yaml
trailingComma: "es5" 
tabWidth: 2 
semi: true 
singleQuote: false
```

# Dependencies
| Name                                                                           | How to install                          |
| ------------------------------------------------------------------------------ | --------------------------------------- |
| [eslint](https://www.npmjs.com/package/eslint)                                 | `yarn add --dev eslint`                 |
| [prettier](https://www.npmjs.com/package/prettier)                             | `yarn add --dev prettier`               |
| [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) | `yarn add --dev eslint-config-prettier` |
| [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier) | `yarn add --dev eslint-plugin-prettier` |
| [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)       | `yarn add --dev eslint-plugin-react`    |
| [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue)           | `yarn add --dev eslint-plugin-vue`      |
| [eslint-plugin-svelte](https://www.npmjs.com/package/eslint-plugin-svelte)     | `yarn add --dev eslint-plugin-svelte`   |
| [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier) | `yarn add --dev eslint-plugin-prettier`                                        |

# Playground
- [ESLint Playground](https://eslint.org/play/)
- [Prettier Playground](https://prettier.io/playground/)

# Explanations for config files
## ESLint
```yaml {title="eslintrc.yml"}
# Docs for env key : https://eslint.org/docs/latest/user-guide/configuring/language-options#specifying-environments
# Docs for overrides key : https://eslint.org/docs/latest/user-guide/configuring/configuration-files#how-do-overrides-work
# Docs for extends key : # https://eslint.org/docs/latest/user-guide/configuring/configuration-files#how-do-overrides-work
# Docs for parser key : https://eslint.org/docs/latest/user-guide/configuring/plugins#configure-a-parser
# Docs for parserOptions key : https://eslint.org/docs/latest/user-guide/configuring/language-options#specifying-parser-options
# Docs for parseroOptions using typescript : https://typescript-eslint.io/linting/typed-linting/monorepos


env:
  # Type of all key's value is boolean. Its value is either true or false.
  # browser: browser global variables.
  # node: Node.js global variables and Node.js scoping.
  # es202X: adds all ECMAScript 202x globals and automatically sets the `ecmaVersion` parser option to 2X-9.

	# Example settings for command line interface development using es2022 script.
	node: true
	es2022: true


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

	# Example
- files:
  - bin/*.js
  - lib/*.js
  excludedFiles: "*.test.js"


extends:
  # shareable configuration package: it's a npm package that exports a configuration object.
  # There are two commonly used packages, "eslint:recommended" and "eslint:all".
  # In most cases, use eslint:recommended that has a subset of core rules which report common problems.
  # If you need specify a particular version of eslint. use eslint:all. It make version of ESlint cannot be changed whatever hapeend.
  # And If you want to lint your code of frontend library, you can use plugins for various frontend library such as React, vue, svelte, and so on.
  # e.g. plugin:react/recommended, plugin:vue/vue3-recommended, plugin:svelte/recommended
  # Lastly, two custom packages to support silly javascript typescript and prettier. use "standard-with-typescript" and "prettier". There's no need to add suffix or preix. just set a plain string value.
  
  # Example for project implemented by Reactjs, Typescript, and prettier
  - eslint:recommended
  - standard-with-typescript
  - prettier
  - plugin:prettier/recommended
  - plugin:@typescript-eslint/recommended
  - plugin:@typescript-eslint/recommended-requiring-type-checking
  - plugin:react/recommended


praser: 
  # By default, Eslint uses Espree as its parser.
  # But in recent modern javascript development, it's bare to find a proejct that doesn't use typescript and frontend library in realworld development.
  # So many cases you can casually find another parser option to be set just like '@typescript-eslint/parser' for typescript project.
  # or "vue-eslint-parser" and addtionally add a one more parser key in parserOptions key set to "@typescript-eslint/parser" for vue proejct with typescript.
  # You can see an example from here:
  # https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
	"@typescript-eslint/parser"

parserOptions:
  # ecmaVersion: set to 3, 5(default), 6, 7, 8, 9, 10, 11, 12, 13 or 14, or "latest"
  # sourceType: script(default) or module if your code is in ECMAScript modules.
  # project:
    # - ./tsconfig.json
    # - (optional value for monorepo) ./packages/*/tsconfig.json
  # rules:
    # If some rules so strick that it makes you be annoyed, you can turn off it as below value of rule set to off.
    # @typescript-eslint/explicit-function-return-type: off

  # Example for project using lateset ECMAScript, module, typescript, and you want turn off the option that annoying you.
  ecmaVersion: latest
  sourceType: module
  project: ./tsconfig.json
  rules:
    @typescript-eslint/explicit-function-return-type: off
```

## Prettier
```yaml {title="prettierrc.yml"}
# .prettierrc or .prettierrc.yaml
trailingComma: "es5" | "none" | "all" 
tabWidth: 2 
semi: true | false
singleQuote: false | true
```

### Overrides
```yaml
semi: false 
overrides: 
  - files: "*.test.js" 
    options: 
      semi: true 
  - files: 
      - "*.html" 
      - "legacy/**/*.js" 
    options: tabWidth: 4
```