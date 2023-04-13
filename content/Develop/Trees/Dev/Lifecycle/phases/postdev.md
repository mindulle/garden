# [Semantic release](https://semantic-release.gitbook.io/semantic-release/)
## [Configuration](https://semantic-release.gitbook.io/semantic-release/usage/configuration#configuration-file)
- via `releaserc.yaml` file

### nodejs example
```releaserc.yaml
preset: angular
branches:
  - vanilla
  - react
  - vue
ci: false
dryRun: false
debug: false
extends: "semantic-release-npm-github-publish"

plugins:
  - "@semantic-release/commit-analyzer"
  - "@semantic-release/release-notes-generator"
  - "@semantic-release/changelog"
  - "@semantic-release/git"
  - - message: "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}"
```

### golang with goreleaser example
```yaml
preset: angular
plugins:
  - "@semantic-release/commit-analyzer"
  - "@semantic-release/release-notes-generator"
  - "@semantic-release/changelog"
  - "@semantic-release/git"
  - - "@semantic-release/exec"
    - publishCmd: |
        echo "${nextRelease.notes}" > /tmp/release-notes.md
        goreleaser release --release-notes /tmp/release-notes.md --clean
```

### Github Action
**for node project**
`.github/workflows/release.yml`
```yaml
name: Release
on:
  push:
    branches:
      - master
jobs:
  release:
    name: Release
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "lts/*"
      - name: Install dependencies
        run: npm ci
      - name: Release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
        run: npx semantic-release
```

**for go project with goreleaser**
```yaml
name: semantic
on:
  push:
    branches:
      - main
jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - name: Semantic tagging
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: npx -p @semantic-release/changelog -p @semantic-release/exec -p @semantic-release/git semantic-release
```

# [goreleaser](https://goreleaser.com/)
## [Configuration](https://goreleaser.com/quick-start/#quick-start)
Run the [init](https://goreleaser.com/cmd/goreleaser_init/) command to create an example `.goreleaser.yaml` file:
```shell
goreleaser init
```

## [with github action](https://goreleaser.com/ci/actions/?h=github+action#github-actions)
`.github/workflows/release.yml`.
```yml
name: goreleaser

on:
  push:
    # run only against tags
    tags:
      - '*'

permissions:
  contents: write
  # packages: write
  # issues: write

jobs:
  goreleaser:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - run: git fetch --force --tags
      - uses: actions/setup-go@v4
        with:
          go-version: stable
      # More assembly might be required: Docker logins, GPG, etc. It all depends
      # on your needs.
      - uses: goreleaser/goreleaser-action@v4
        with:
          # either 'goreleaser' (default) or 'goreleaser-pro':
          distribution: goreleaser
          version: latest
          args: release --clean
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          # Your GoReleaser Pro key, if you are using the 'goreleaser-pro'
          # distribution:
          # GORELEASER_KEY: ${{ secrets.GORELEASER_KEY }}
```