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
## What I understood when read official document.
```json {title="tsconfig.json"}
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

## Generated by `tsc --init`
```json {title="tsconfig.json"}
{
  "compilerOptions": {

    /* Visit https://aka.ms/tsconfig to read more about this file */

  

    // /* Projects */

    // "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */

    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */

    // "tsBuildInfoFile": "./.tsbuildinfo",              /* Specify the path to .tsbuildinfo incremental compilation file. */

    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects. */

    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */

    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */

  

    /* Language and Environment */

    "target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,

    // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */

    // "jsx": "preserve",                                /* Specify what JSX code is generated. */

    // "experimentalDecorators": true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */

    // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */

    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'. */

    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */

    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using 'jsx: react-jsx*'. */

    // "reactNamespace": "",                             /* Specify the object invoked for 'createElement'. This only applies when targeting 'react' JSX emit. */

    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */

    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */

    // "moduleDetection": "auto",                        /* Control what method is used to detect module-format JS files. */

  

    /* Modules */

    "module": "commonjs" /* Specify what module code is generated. */,

    // "rootDir": "./",                                  /* Specify the root folder within your source files. */

    // "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */

    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */

    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */

    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */

    // "typeRoots": [],                                  /* Specify multiple folders that act like './node_modules/@types'. */

    // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */

    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */

    // "moduleSuffixes": [],                             /* List of file name suffixes to search when resolving a module. */

    // "resolveJsonModule": true,                        /* Enable importing .json files. */

    // "noResolve": true,                                /* Disallow 'import's, 'require's or '<reference>'s from expanding the number of files TypeScript should add to a project. */

  

    /* JavaScript Support */

    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */

    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */

    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'. */

  

    /* Emit */

    // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */

    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */

    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */

    // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */

    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */

    // "outDir": "./",                                   /* Specify an output folder for all emitted files. */

    // "removeComments": true,                           /* Disable emitting comments. */

    // "noEmit": true,                                   /* Disable emitting files from a compilation. */

    // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */

    // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types. */

    // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */

    // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */

    // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */

    // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */

    // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */

    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */

    // "newLine": "crlf",                                /* Set the newline character for emitting files. */

    // "stripInternal": true,                            /* Disable emitting declarations that have '@internal' in their JSDoc comments. */

    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like '__extends' in compiled output. */

    // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */

    // "preserveConstEnums": true,                       /* Disable erasing 'const enum' declarations in generated code. */

    // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */

    // "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */

  

    /* Interop Constraints */

    // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */

    // "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */

    "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,

    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */

    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,

  

    /* Type Checking */

    "strict": true /* Enable all strict type-checking options. */,

    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */

    // "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */

    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */

    // "strictBindCallApply": true,                      /* Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. */

    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */

    // "noImplicitThis": true,                           /* Enable error reporting when 'this' is given the type 'any'. */

    // "useUnknownInCatchVariables": true,               /* Default catch clause variables as 'unknown' instead of 'any'. */

    // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */

    // "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */

    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */

    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */

    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */

    // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */

    // "noUncheckedIndexedAccess": true,                 /* Add 'undefined' to a type when accessed using an index. */

    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */

    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type. */

    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */

    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */

  

    /* Completeness */

    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */

    "skipLibCheck": true /* Skip type checking all .d.ts files. */

  }

}
```