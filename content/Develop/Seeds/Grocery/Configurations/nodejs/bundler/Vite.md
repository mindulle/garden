---
last-modified: "2022-11-23"
tags:
  - tree
  - web
  - bundler
  - vite
---
```toc
style: bullet
```

# vite.config.js
## sourcemap
- https://vitejs.dev/config/build-options.html#build-sourcemap

## build for library mode
- https://vitejs.dev/config/build-options.html#build-lib

## build for watching
- https://vitejs.dev/config/build-options.html#build-watch

# Frequently used features
## [Client Types](https://vitejs.dev/guide/features.html#client-types)
### pros
- Asset imports (e.g. importing an `.svg` file)
- Types for the Vite-injected [env variables](https://vitejs.dev/guide/env-and-mode.html#env-variables) on `import.meta.env`
- Types for the [HMR API](https://vitejs.dev/guide/api-hmr.html) on `import.meta.hot`

