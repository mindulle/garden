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
**[stylelint](https://stylelint.io/user-guide/configure)**
```yaml
- repo: https://github.com/awebdeveloper/pre-commit-stylelint
  rev: '' # Use the sha or tag you want to point at like 0.0.1
  hooks:
    - id: stylelint
      additional_dependencies: 
        - 'stylelint@major.minor.patch'
        - 'stylelint-config-prettier@major.minor.patch'
        - 'stylelint-config-standard@major.minor.patch'
```
- `stylelint`, `stylelint-config-standard`, `stylelint-config-prettier` 패키지를 설치 한 뒤, 버전을 알맞게 변경 해 주세요.
- 루트 디렉토리에 `.stylelintrc.yaml` 파일 생성 후 `extends` 필드에 [`stylelintlint-config-`](https://github.com/stylelint/awesome-stylelint#configs) 패키지들을 배열 형태로 추가 해 주세요.
- 필요하다면, [예시](https://github.com/launchdarkly/launchpad-ui/blob/main/.stylelintignore)와 같은 `.stylelintignore` 파일을 작성해도 좋습니다.

**[eslint](https://eslint.org/docs/latest/use/command-line-interface#miscellaneous)**
```yaml
- repo: https://github.com/pre-commit/mirrors-eslint
  rev: '' # Use the sha or tag you want to point at like 0.0.1
  hooks:
    - id: eslint
      files: \.[jt]sx?$ # *.js, *.jsx, *.ts and *.tsx
      types: [file]
      additional_dependencies:
        - eslint@^major.minor.patch
        - eslint-config-standard-with-typescript@latest
        - eslint-plugin-import@^major.minor.patch
        - eslint-plugin-n@^major.minor.patch
        - eslint-plugin-promise@^major.minor.patch
        - "@typescript-eslint/eslint-plugin@^major.minor.patch"
```
- `npx|yarn dlx|pnpx eslint --init` 명령어 실행 후 설치된 패키지들의 버전을 알맞게 수정 해 주세요.
- 실행 후 생성된 `.eslintrc.yaml` 등 설정 파일을 원하는 대로 설정 해 주세요.

**[prettier](https://prettier.io/docs/en/install.html)**
```yaml
- repo: https://github.com/pre-commit/mirrors-prettier
  rev: ''  # Use the sha / tag you want to point at
  hooks:
    - id: prettier
      # you can format only specific files which you want.
      # types: [suffix you want]
      # types_or: [css, javascript]
      # files: [src/*]
```
- `.prettierrc.yaml` 등 [설정](https://prettier.io/docs/en/configuration.html#setting-the-parserdocsenoptionshtmlparser-option) 파일을 작성합니다. 이 예시 처럼 [`.prettierrc.js`](https://github.com/launchdarkly/launchpad-ui/blob/main/.prettierrc.js) 파일을 사용하여 js 문법을 이용 할 수도 있습니다.

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