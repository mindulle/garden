---
# configs for document itself.
title: "๐packages"
lastModified: "2022-12-17"

# field for querying only entry point notes.
isEntryPoint: true

# add some tags for specifying particular subjects.
tags:
  - "entrypoint"
  - "mindulle/packages"
---
# TL;DR
- you can summarize contents as a table format.
- or just write down statements you think it is important within 3 lines.
```mermaid
erDiagram
	You ||--|| Table : Summarize
	You ||--|| Statements : Sentence
```


# Map of contents
- Draw a simple excalidraw scatch to understand how contents are constructed and networked.

# Features
- List up frequently used features.

# Issues
- what design patterns adapated to each features.
- how to pipe logics to build features.
- challenges during implementing features.
- helpful supports deserve to remember.
- Glean tips using `mindulle-cli` for digital gardening.

# Showcases
- construct visual gallery to summarize your expriences.

# ์ด ํ๋ก์ ํธ์ ๊ตฌ์กฐ
```
|--- docs : vitepress docs
|--- packages
|    |--- UI
|         |--- components
|              |--- Vanilla
|              |--- React
|              |--- Vue
|         |--- helpers
|              |--- vanilla
|              |--- React
|              |--- Vue
|    |--- knowledge-bases
|         |--- data-structure
|         |--- algorithms
|         |--- resources
|    |--- scripts
|         |--- Shell
|         |--- Docker
|         |--- nodeEnvs?
|         |--- Actions
|         |--- further more...
```

# ์ ์ฅ์ ํด๋ก ๋จ๊ธฐ ๋ฐ ๊น ์ค์  mindulle๋ก ๋๋ ค๋๊ธฐ
```shell
git clone https://github.com/mindulle/packages.git
git config --local user.name "mindulle"
git config --local user.email "mindullestudio@gmail.com"
```
# ์์ํ๊ธฐ
```shell
npx lerna init
```

## ๋ง๋  ์ ์ฅ์์ vitepress ํจํค์ง ์ค์นํ๊ธฐ
```shell
yarn add --dev vitepress vue
```

## packages ํด๋์์ vite๋ฅผ ์ด์ฉํด npm ๋ชจ๋ ์์ฑํ๊ธฐ
```shell
yarn create vite
```
- ๋ช๋ น์ด ์คํ ํ ์๋ ์์ ์ํํ๊ธฐ
	- [ ] ๋ชจ๋ ์ด๋ฆ ์ง๊ธฐ : @mindulle/packages/MOUDLE_NAME
	- [ ]  ํ๋ ์์ํฌ ์ ํํ๊ธฐ : Others -  Create-vite-extra - library(๊ฑฐ์ ์ ์ผ ์๋) - library ts
	- [ ] ๋ธ๋์น ๋๋๊ณ  ๋ฃจํธ ๋๋ ํ ๋ฆฌ์ ์ก์์ผ๋ก ๋น๋ & ๋ฐฐํฌ ์๋ํํ๊ธฐ(lerna publish ๋ฑ)
	- Vscode์์ ๋ณธ๊ฒฉ์ ์ธ ๋ชจ๋ ์์ํ๊ธฐ.
		- [ ] ์์กด์ฑ ์ค์น (yarn)
		- [ ] ์ธ ๊ฐ์ ์ค์ ํ์ผ(vite.config.js, package.json, tsconfig.json)์์ ๋ชจ๋ ์ด๋ฆ์ด๋ ์ปดํ์ผ ์ค์  ๋ฑ์ ์๋ง๊ฒ ์์ 
		- [ ] ์ด์ ์์ฑํ๊ธฐ
		- [ ] ๋ชจ๋ ๊ตฌํํ๊ธฐ
		- [ ] ์ปค๋ฐ ์๊ธฐ
		- [ ] ์ปค๋ฐ์ด ์ถฉ๋ถํ ์์์ผ๋ฉด ์ด์์ ์๋ง์ ํ๋ฆฌํ ์์ฑํ๊ธฐ
		- [ ] ํ๋ฆฌํ ๊ฒํ ํ๊ณ  ๋จธ์งํ๊ธฐ
	- [ ] ๋ชจ๋ ์์ ํ vitepress ๋ฌธ์ ์๋ฐ์ดํธํ๊ธฐ.