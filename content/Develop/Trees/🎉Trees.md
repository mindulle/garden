---
# configs for document itself.
title: "๐Trees"
lastModified: "2022-12-25"

# field for querying only entry point notes.
isEntryPoint: true

# add some tags for specifying particular subjects.
tags:
  - "entrypoint"
---
# TL;DR
- you can summarize contents as a table format.
- or just write down statements you think it is important within 3 lines.

# Map of contents
```mermaid
flowchart LR
	HERE[&#127881Trees]
	subgraph treeContents
		Dev[&#127881Dev]
		Learn[&#127881Learn]
		Ops[&#127881Ops]
		Trends[&#127881Trends]
	end
	subgraph Features
		readingList[&#128278Reading list]
	end
	HERE --> treeContents
	HERE --> Features
```
- [[Develop/Trees/Dev/๐Dev|๐Dev]] : __์ฝ๋ ์์ฑ__ ๋จ๊ณ์์ ์ ๋ฆฌ๋ ๋๋ฌด[^๋๋ฌด] ๋ชจ์
- [[Develop/Trees/Learn/๐Learn|๐Learn]] : **๊ฐ๋ ํ์ต** ๋จ๊ณ์์ ์ ๋ฆฌ๋  ๋๋ฌด[^๋๋ฌด] ๋ชจ์
- [[Develop/Trees/Ops/๐Ops|๐Ops]] : **์ด์ ๋ฐ ๋ฐฐํฌ** ๋จ๊ณ์์ ์ ๋ฆฌ๋ ๋๋ฌด[^๋๋ฌด] ๋ชจ์
- [[Develop/Trees/Trends/๐Trends|๐Trends]] : **๋ํฅ ํ์** ๋จ๊ณ์์ ์ ๋ฆฌ๋ ๋๋ฌด[^๋๋ฌด] ๋ชจ์

# Features
- [[Develop/Trees/๐Reading list as developer|๐Reading list as developer]]

# Issues
- what design patterns adapated to each features.
- how to pipe logics to build features.
- challenges during implementing features.
- helpful supports deserve to remember.
- Glean tips using `mindulle-cli` for digital gardening.

# Showcases
- construct visual gallery to summarize your expriences.

[^๋๋ฌด]: Grocery์ ์จ์์ด๋ ๊ฒ์ฆ๋ ๊ณต์๋ฌธ์์์ ์จ ์ง์์ด๋ ํ๋ฌธ์ ์ผ๋ก ๋ณดํธ์ฑ์ ๊ฐ๋ ๊ฐ๋์ ๋ถ๋ฅด๋ ๊ฐ์ธ ์์ด . [๋์งํธ ์ ์](https://maggieappleton.com/garden-history) ๊ฐ๋์์ ๋น๋ ค์จ ์ฉ์ด.