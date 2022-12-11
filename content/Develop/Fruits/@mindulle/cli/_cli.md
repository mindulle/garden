---
# configs for document itself.
title: "_cli"
lastModified: "2022-12-03"

# field for querying only entry point notes.
isEntryPoint: true

# add some tags for specifying particular subjects.
tags:
  - "entrypoint"
  - "fruit"
  - "web"
  - "@mindulle"
---
```toc
style: bullet
```

# TL;DR
- you can summarize contents as a table format.
- or just write down statements you think it is important within 3 lines.

# Receipes
## Receipe map
- Draw a simple excalidraw scatch to understand this tools rough workflows.

## Featured APIs
- List up frequently used APIs.

## My issues
- what design patterns adapated to each features.
- how to pipe logics to build features.
- challenges during implementing features.
- helpful supports deserve to remember.

## Showcases
- construct visual gallery to summarize your expriences.

## From community
- Glean tips using `mindulle-cli` for digital gardening.

# Version-controled documents
## vMajor.Minor.patch
- link to each version's entry point note.
- list of important changes.




# [[COMMANDS]]
## 공부용 명령어
| 명령어 | 예시                                                   | 설명                                     |
| ------ | ------------------------------------------------------ | ---------------------------------------- |
| glean  | `$ mindulle glean https://chartscss.org/ shovel`       | 내 디지털 정원에 씨앗을 줍기 위한 명령어 |
| learn  | `$ mindulle learn html-basic --docs`                   | 주요 기초 개념 학습을 위한 명령어        |
| issue  | `$ mindulle issue @mindulle/cli 2 modern-web-patterns` | 내가 직접 해본 경험이나 특별한 이슈를 해결하는 데에 참고한 이슈를 보관하기 위한 명령어                                         |

## 개발용 명령어
| 명령어 | 예시                                            | 설명                                                                                                    |
| ------ | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| code   | `$ mindulle code s-animation --demo --scope=FE` | 자주 사용되는 코드를 빠르게 실제 개발에서 사용하기 위한 명령어입니다.                                   |
| env    | `$ mindulle env githubAction --docs`            | 다양한 플랫폼, 라이브러리, 시스템 별 환경 설정 방법을 빠르고 쉽게 이해하고 사용하기 위한 명령어 입니다. |
| module | `$ mindulle module monochrome.css --docs`       | 모듈화 해 둔 다양한 코드 모음을 설치하거나 문서를 엽니다.                                               |
| script | `$ mindulle script prepare-msw --docs`          | 개발 과정에서 단순 반복 작업의 자동화 스크립트, 자주 사용되는 유닛 테스트 패턴 등 보조적인 역할을 수행하는 스크립트들을 빠르고 쉽게 사용하기 위한 명령어                                                                                                        |

# [[feature specifiactions]]