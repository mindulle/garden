# [pre-commit](https://pre-commit.com/#installation)
## Installation
### Set up hooks for checking before making a commit to git.
```shell
pre-commit install
```

### Auto-update pre-commit config to the latest repos' versions.
```
pre-commit autoupdate
```

## Configuration
### .pre-commit-config.yaml
```shell
pre-commit sample-config
```
- 터미널에 출력되는 결과를 바탕으로 `.pre-commit-config.yaml` 파일을 작성합니다.
- [지원되는 훅 목록](https://pre-commit.com/hooks.html)을 참고하여 커밋 직전 검사할 작업을 모두 훅으로 등록 해 둘 수 있습니다.

### Sample
**javascript/typecsript**
```yaml
repos:
  - repo: https://github.com/pre-commit/mirrors-eslint
    rev: "v8.38.0"
    hooks:
      - id: eslint
        files: \.[jt]sx?$ # *.js, *.jsx, *.ts and *.tsx
        types: [file]
        additional_dependencies:
          - eslint@^8.0.1
          - eslint-config-standard-with-typescript@latest
          - eslint-plugin-import@^2.25.2
          - eslint-plugin-n@^15.0.0
          - eslint-plugin-promise@^6.0.0
          - "@typescript-eslint/eslint-plugin@^5.43.0"
```

**golang**
```yaml
repos:
  - repo: https://github.com/dnephin/pre-commit-golang
    rev: main
    hooks:
      - id: go-fmt
      - id: go-vet
      - id: go-imports
      - id: go-cyclo
        args: [-over=15]
      - id: validate-toml
      - id: no-go-testing
      - id: golangci-lint
      - id: go-critic
      - id: go-unit-tests
      - id: go-build
      - id: go-mod-tidy
```