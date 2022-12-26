---
# configs for document itself.
title: "Relational database"
lastModified: "2022-12-03"
visibility: "public"

# configs for annotating data to obsidian dataview plugin.
noteStatus: "activate"
noteField:
  - "develop"
notePurpose:
  - "background"
noteTimeliness:
  - "lts"

# configs for selecting tree type.
treeType:
  - "learn"

# configs to decide whether external contents are appropriate to me or not.
contentLevel:
  - "beginner"
  - "intermediate"
contentType:
  - "text"
contentPurpose:
  - "explain"
  - "realworld"

# config for querying particular datas to specify notes which have been noted expirences related to particular subject.
# e.g. performance optimization using lighthouse in web development environments:
# tags=[#tree, #web, #lighthouse, #perfOpt]
tags:
  - "tree"
  - "database"
---
```toc
style: bullet
```
# TL;DR
## Situation
- most cases to save datas.

## Thoughts
- Maybe need to normalize datas.

## Behavior
1. Draw ERD
2. Normalize datas
	1. 1NF
	2. 2NF
	3. 3NF
3. Construct realworld database and write some queries.

## Pros and cons
### Pros
- stable
- No duplications.

### cons
- `Join` command can require many computing resources.
- Need many preperations to begin to code.


# Terminologies
- primary key(pk), foreign key(fk)
- ERD(Entity-Relation Diagram)

# Features
- normalize
- ACID transaction

# References
- [생활코딩 관계형 데이터 모델링 강의](https://opentutorials.org/course/3883)
- [IT위키 데이터베이스 문서](https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4)
- [위키백과 관계형 데이터베이스 문서](https://ko.wikipedia.org/wiki/%EA%B4%80%EA%B3%84%ED%98%95_%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4)