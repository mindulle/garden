---
last-modified: "2022-11-18"
---
```toc
style: bullet
```
# sdks
## yarn vscode sdks install

```shell
yarn dlx @yanrpkg/sdks vscode
```

# workspaces
## Import workspace-tools plugin
```shell
yarn plugin import workspace-tools
```

## common usage
```shell
yarn workspace <WORKSPACE_NAME> <COMMAND_NAME>
```

## make workspace depends on specific package.
```
yarn workspace <WORKSPACE_NAME> add <PACKAGE_NAME>@major.minor.patch
```

## yarn worksapces list
```shell
yarn workspaces list
```

## yarn workspaces foreach
```shell
yarn workspaces foreach <commnadName> ...
```

### publish all packages in workspace.
```shell
yarn workspaces foreach npm publish
```

### run build script on current and all descendent packages
```shell
yarn workspaces foreach run build
```

# classic vs berry