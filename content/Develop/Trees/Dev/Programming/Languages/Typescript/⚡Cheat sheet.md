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


# My cheat sheet
> Origin cheat sheets here.

- tsconfig init 해보고 쓰일 것 같은 옵션만 일단 적기
- 옵션 나누기(tsconfig.base.json, tsconfig.json 사용하는 법 알기)

# tsconfig.base.json
| Name                        | install                                           | extends in `tsconfig.json`                                    |
| --------------------------- | ------------------------------------------------- | ------------------------------------------------------------- |
| Recommended                 | `yarn add --dev @tsconfig/recommended`            | `"extends": "@tsconfig/recommended/tsconfig.json"`            |
| Create React app            | `yarn add --dev @tsconfig/create-react-app`       | `"extends": "@tsconfig/create-react-app/tsconfig.json"`       |
| Cypress                     | `yarn add --dev @tsconfig/cypress`                | `"extends": "@tsconfig/cypress/tsconfig.json"`                |
| Deno                        | `yarn add --dev @tsconfig/deno`                   | `"extends": "@tsconfig/deno/tsconfig.json"`                   |
| Docusaurus v2               | `yarn add --dev @tsconfig/docusaurus`             | `"extends": "@tsconfig/docusaurus/tsconfig.json"`             |
| Ember                       | `yarn add --dev @tsconfig/ember`                  | `"extends": "@tsconfig/ember/tsconfig.json"`                  |
| ESM                         | `yarn add --dev @tsconfig/esm`                    | `"extends": "@tsconfig/esm/tsconfig.json"`                    |
| Next.js strictest           | `yarn add --dev @tsconfig/next-strictest`         | `"extends": "@tsconfig/next-strictest/tsconfig.json"`         |
| Next.js                     | `yarn add --dev @tsconfig/next`                   | `"extends": "@tsconfig/next/tsconfig.json"`                   |
| Node LTS + ESM + Strictest  | `yarn add --dev @tsconfig/node-lts-strictest-esm` | `"extends": "@tsconfig/node-lts-strictest-esm/tsconfig.json"` |
| Node LTS + Strictest        | `yarn add --dev @tsconfig/node-lts-strictest`     | `"extends": "@tsconfig/node-lts-strictest/tsconfig.json"`     |
| Node LTS                    | `yarn add --dev @tsconfig/node-lts`               | `"extends": "@tsconfig/node-lts/tsconfig.json"`               |
| Node xx - strictest? - ESM? | `yarn add --dev @tsconfig/nodexx-strictest?-esm?` | `"extends": "@tsconfig/nodexx-strictest?-esm?/tsconfig.json"` |
| Nuxt                        | `yarn add --dev @tsconfig/nuxt`                   | `"extends": "@tsconfig/nuxt/tsconfig.json"`                   |
| React Native                | `yarn add --dev @tsconfig/react-native`           | `"extends": "@tsconfig/react-native/tsconfig.json"`           |
| Remix                       | `yarn add --dev @tsconfig/remix`                  | `"extends": "@tsconfig/remix/tsconfig.json"`                  |
| Svelte                      | `yarn add --dev @tsconfig/svelte`                 | `"extends": "@tsconfig/svelte/tsconfig.json"`                 |
| Vite React                  | `yarn add --dev @tsconfig/vite-react`             | `"extends": "@tsconfig/vite-react/tsconfig.json"`                                                              |

# tsconfig.json
```json
{
	// Array of string that contain filenames. Doesn't support glob pattern
	"files": [
		"module1.ts",
		...
		"modulen.ts"
	],
	// Allow tsconfig to extend its options. only string value will be allowed.
	"extends": "/path/to/basefile.json"
	// Directory which is able to have glob pattern that will be transpiled by typescript compiler.
	"include": [
		"dir/with/patterns"
	],
	// Directory which is able to have glob pattern that will be excluded from directory defiend in include field.
	"exclude": [
		"dir/to/exclude"
	],
	// Field for monorepo. See this:
	// https://www.typescriptlang.org/docs/handbook/project-references.html#what-is-a-project-reference
	"references": [
		{
			"path": "path/for/subproject",
			"prepend": true | false // option to resolve project dependency order. It MUST be treated carefully.
		}
	],
	
	"compilerOptions": {
		// There are options only recommended.
		// Fields for type checking
		"awlwaysStrict": true(default) | false,
		"exactOptionalPropertyTypes": true(recommended) | false,
		"noImplicitAny": true(default) | false,
		"noImplicitThis": true(default) | false,
		// Will be supported more stricter options into this field.
		"strict": true | false,
		"strictBindCallApply": true(default) | false,
		"strictFunctionTypes": true(default) | false,
		"strictNullChecks": true(default) | false,
		"strictPropertyInitialization": true(default) | false,
		
		// Fields for Interop Constraints
		// This flag resolve compaitibility problems between import statement and require statement.
		// It this set to true, typescript compiler will tear down codes into plain javascript code that has no require statement.
		"esModuleInterop": true | false,
		// If this set to true, developer should be case-sensitive in decideing name of importing modules.
		"forceConsistentCasingInFileNames": true | false,
		
		// Fields for Completeness
		// When you have two or more type modules for libraries, set this option to true.
		// In that case, you should consdier using a feature like yarn's resolutions to resolve dependency problems.
		"skipLibCheck": true | false
	}
	// if you want to see more detailed example, see this blog post:
	// https://velog.io/@yongbum/TSconfig-Reference-%EC%A0%95%EB%A6%AC
}
```