---
# configs for document itself.
title: "COMMANDS"
lastModified: "2022-12-06"
visibility: "public"

# configs for annotating data to obsidian dataview plugin.
noteImportance: ⭐⭐⭐⭐⭐
noteStatus: "in progress"
noteCertanity: "certain"
noteField:
  - "develop"
notePurpose:
  - "individual"
  - "business"
noteTimeliness:
  - "lts"

# configs for fruit.
fruitLevel:
  - "beginner"
  - "intermediate"
  - "professional"
fruitType:
  - "text"
fruitPurpose:
  - "howto"
  - "explain"
fruitTarget:
  - "githubRepo"
  - "blogPost"
  - "youtubeShorts"
  - "others"

# config for querying particular datas to specify notes which have been noted expirences related to particular subject.
# e.g. how to use mindulle-cli module.
# tags=[#fruit, #mindulle-cli, #customModule, #web]
tags:
  - "fruit"
  - "web"
  - "@mindulle"
---
```toc
style: bullet
```

> [!info] 모든 명령어는 기본적으로
> 아무런 추가 패러미터를 넘기지 않으면 대화형 인터페이스가 실행됩니다.
# 공통 변수
## Category
- 분자(molecule) 수준의 주제를 선정할 것.
- 유기체(Organism) 수준의 분류는 learn 명령어에서 이루어짐.

| Category                 | Description                                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------------------- |
| none                     | 미분류, 기본값                                                                                                        |
| performance              | 성능 최적화를 위한 카테고리                                                                             |
| build-excellent-websites | PWA, a11y, Network, securem payments 등 심화된 웹 기능을 위한 카테고리                                  |
| Frameworks               | 다양한 프레임워크를 위한 카테고리                                                                       |
| Lighthouse               | Lighthouse를 위한 카테고리                                                                              |
| modern-web-patterns      | advanced apps, animation, clipboard, component, files and directory, layout, media, theming, web vitals |


# 학습 목적 명령어
## glean
### 문법과 예시
```shell
$ mindulle glean URL TRIAGE [TITLE] [CATEGORY]
```

```shell
$ mindulle glean https://chartscss.org/ shovel 
```

### 용도
> 내 디지털 정원에 씨앗을 줍기 위한 명령어. 
> 넘겨받은 URL 인자를 개인 [JSON API](https://my-json-server.typicode.com/mindulle/learning-materials/pick-up) 서버에 저장합니다.

### 필수
__URL__
- 디지털 정원에 심을 씨앗의 주소를 입력합니다.

__TRIAGE__

| Triage  | Description                                                                                      |
| ------- | ------------------------------------------------------------------------------------------------ |
| grocery | 상하지 않은 싱싱한 씨앗을 정돈하고 진열하기 위한 식료품점                                        |
| storage | 상한 씨앗이나 기능은 하지만 오래된 씨앗, 특별한 경우 한 두 번 사용되는 씨앗들을 모으기 위한 창고 |
| shovel  | 수집한 씨앗을 직접 심고 가꿀때 유용한 역할을 해줄 수 있는 도우미 도구들을 위한 삽                |
| miscs   | 기타 등등                                                                                                 |

### 선택
__TITLE__
- `-t`, `--title` : 제목을 지정하는 옵션입니다. 미입력시 기본값은 `untitled`입니다.

__CATEGORY__
- `-c`, `--category` : 카테고리를 지정하는 옵션입니다. 미입력시 기본값은 `none`입니다. 최상단 [[#공통 변수]]를 참고해주세요.


## learn
### 문법과 예시
```shell
$ mindulle learn SUBJECT [OPTIONS]
```

```shell
$ mindulle learn html-basic --docs
```

### 용도
>  해당 주제의 기초 학습내용 중 가장 신뢰 할 수 있는 조직이나 단체의 공식 자료를 열람하거나 자료를 바탕으로 재생산된 데모를 브라우저에서 엽니다.
>  데모와 자료의 목록은 [JSON API](https://my-json-server.typicode.com/mindulle/learning-materials/learn) 서버에 요청을 보내 활용 할 수 있습니다.

### 필수
__SUBJECT__

| SUBEJCT         | Description                                                                                                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| html-basic      | html 기초 학습의 진입점이 되는 [web.dev](https://web.dev/learn/html/)문서 와 [mdn](https://developer.mozilla.org/ko/docs/Learn/Getting_started_with_the_web/HTML_basics) 문서                             |
| css-basic       | css 기초 학습의 진입점이 되는 [web.dev](https://web.dev/learn/css/)와 [mdn](https://developer.mozilla.org/ko/docs/Learn/Getting_started_with_the_web/CSS_basics) 문서                                     |
| css-practical   | css 심화 학습의 진입점이 되는 [web.dev의 css 카테고리 문서](https://web.dev/tags/css/)와 [mdn의 css 추가자료](https://developer.mozilla.org/en-US/docs/Web/CSS#reference)                                               |
| js-basic        | js 기초 학습의 진입점이 되는 [모던 자바스크립트 튜토리얼 파트1](https://ko.javascript.info/#tab-1)과 [mdn](https://developer.mozilla.org/ko/docs/Learn/Getting_started_with_the_web/JavaScript_basics) 문서     |
| js-practical    | js 심화 학습의 진입점이 되는 [모던 자바스크립트 튜토리얼 파트2 이후의 내용](https://ko.javascript.info/#tab-2)과 [mdn](https://developer.mozilla.org/ko/docs/Learn/JavaScript) 문서 |
| ts-practical    | js 학습 후 타입스크립트의 추가 개념을 빠르게 학습하기 위한 [자바스크립트 개발자를 위한 타입스크립트 공식 문서의 cheat sheet](https://www.typescriptlang.org/cheatsheets) 문서.                                          |
| react-basic     | [facebook의 react 공식문서 주요 개념 섹션](https://ko.reactjs.org/docs/hello-world.html), [리액트로 사고하기](https://ko.reactjs.org/docs/thinking-in-react.html) 리액트를 빠르게 시작하기 위한 일종의 보일러플레이트인 [Creat-react-app(CRA) 문서](https://create-react-app.dev/docs/getting-started).                                                                                                                                                                                                                       |
| react-practical | react 공식문서의 [고급 안내서](https://ko.reactjs.org/docs/accessibility.html)와 [API 참고서](https://ko.reactjs.org/docs/react-api.html), [HOOK](https://ko.reactjs.org/docs/hooks-intro.html), [테스팅](https://ko.reactjs.org/docs/testing.html), [자주 묻는 질문](https://ko.reactjs.org/docs/faq-ajax.html), 섹션 CRA보다 좋은 성능의 리액트 보일러플레이트를 제공하는 [vite](https://vitejs-kr.github.io/) 문서.                                                                                                                                                                                                                       |
| vue-basic       | vue 공식문서의 [Guide](https://vuejs.org/guide/introduction.html) 문서와 [Tutorial](https://vuejs.org/tutorial/#step-1) 문서, [Quick Start](https://vuejs.org/guide/quick-start.html)문서.                                                                                                                                                                                                                        |
| vue-practical   | vue 공식문서의 [examples](https://vuejs.org/examples/#hello-world) 문서                                                                                                                                                                                                                        |

### 선택
__OPTIONS__
- `-ls`, `--list` : 사용가능한 SUBJECT 목록을 출력합니다.
- `-d`, `--docs` : 해당 SUBJECT와 관련된 가장 공식적이고 신뢰할 수 있는 사이트 목록을 출력하고, 사용자가 선택한 항목에 해당하는 사이트를 엽니다. (기본값)
- `-ex`, `--example` : 해당 SUBJECT와 관련된 다양한 예시(각종 데모, 블로그 글 등 비공식적이어도 잘 정리되거나 잘 설명된 글들) 목록을 출력하고 사용자가 선택한 항목에 해당하는 사이트를 엽니다.


## issue
### 문법과 예시
```shell
$ mindulle issue @USERNAME/REPO ISSUENUM [CATEGORY]
```

```shell
$ mindulle issue @mindulle/cli 2 modern-web-patterns
```
### 용도
> 내가 직접 해본 경험이나 특별한 이슈를 해결하는 데에 참고한 이슈를 보관하기 위한 명령어

### 필수
__@USERNAME/REPO__
- 깃허브 유저 이름, 저장소 명을 차례로 입력합니다.

__ISSUENUM__
- 이슈 번호를 자연수로 입력합니다.

### 선택
__CATEGORY__
- `-c`, `--category` : 카테고리를 지정하는 옵션입니다. 미입력시 기본값은 `none`입니다. 최상단 [[#공통 변수]]를 참고 해 주세요.


# 개발 목적 명령어
## code
### 문법과 예시
```shell
$ mindulle code s-animation --demo --scope=FE
```

```shell
$ mindulle code TITLE [OPTIONS] [SCOPE]
```

### 용도
> 자주 사용되는 코드를 빠르게 실제 개발에서 사용하기 위한 명령어입니다.

### 필수
__TITLE__
- 사용할 코드의 제목입니다.
- 가급적 [SMACSS](http://smacss.com/) [방법론](https://blog.illunex.com/20201106-2/)을 참고해 TITLE을 정합니다. 아래 TITLE NAMING CONVETNION을 참고하세요.
- `mindulle code help` 입력시 간단한 사용법을 출력합니다.

__TITLE NAMING CONVENTION__

| Category | Description                                                                                                    | Examples                                                       |
| -------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| base     | 코드가 사용되는 개발 영역                                                                                      | FE, BE, DB, DEVOPS, AI, QA                                     |
| layout   | 코드의 [디자인 패턴](https://m.hanbit.co.kr/channel/category/category_view.html?cms_code=CMS8616098823)        | Template method, Singletone, Proxy, Observer, Mixin, etc...    |
| module   | 코드의 언어나 라이브러리와 같은 문법적 배경                                                                    | HTML, CSS, JS, TS, SQL, Python, etc...                         |
| state    | 코드가 필요해지는 주제나 상황, 이슈                                                                            | Animation, Layout, Transaction, etc...                         |
| theme    | 코드의 테마. [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/#summary) 커밋 타입을 따라감. | feat, fix, build, chore, ci, docs, style, refactor, perf, test, ... |

### 선택
__OPTIONS__
- `-cb`, `--clipboard` : `TITLE`에 해당하는 코드를 클립보드에 복사합니다.
- `-ex`, `--example` : `TITLE`에 해당하는 데모 중 `codepen`이나 `codesandbox`, `stackblitz` 예제 중 존재하는 것을 브라우저에서 엽니다. (기본값)
- `-ls`, `--list` : 사용 가능한 `TITLE` 목록을 출력합니다.
- `-p`, `--print` : `TITLE`에 해당하는 코드를 터미널에 출력합니다.

__SCOPE__
- `-s=<SCOPE_NAME>`, `--scope=<SCOPE_NAME>` : 활용하려는 code의 범위를 제한 할 수 있습니다. `<SCOPE_NAME>`에는 __TITLE NAMING CONVENTION__ 의 다섯가지  카테고리 혹은 카테고리의 모든 하위 요소가 사용될 수 있습니다.
- e.g. `--scope=base`, `--scope=HTML`, `--scope=animation`, `--scope=FE`, ...


## env
### 문법과 예시
```shell
$ mindulle env SERVICE_NAME [OPTIONS]
```

```shell
$ mindulle env githubAction --docs
```

### 용도
> 다양한 플랫폼, 라이브러리, 시스템 별 환경 설정 방법을 빠르고 쉽게 이해하고 사용하기 위한 명령어 입니다.

### 필수
__SERVICE_NAME__
- 환경설정이 필요한 서비스의 이름입니다. 다양한 플랫폼이나 솔루션 혹은 라이브러리등이 예시가 될 수 있습니다.
- e.g. `githubAction`, `githubRepo`, `dockerHub`, `dockerDesktop`, `k8s`, `pgadmin`, `dockerCompose`, `cypress`, `jest`, `eslint`, 등 매우 많은 사례가 존재 할 수 있음.
- TODO : 한번 표로 싹 정리해두기

| Service name | docs | example |
| ------------ | ---- | ------- |
|              |      |         |


[awsome-actions](https://github.com/sdras/awesome-actions#frontend-tools)
[awesome-docker-compose](https://github.com/docker/awesome-compose)
[awesome-docker](https://github.com/veggiemonk/awesome-docker)
[zx module example](https://github.com/google/zx/blob/main/examples/parallel.mjs)
[yargs](https://github.com/yargs/yargs)

### 선택
__OPTIONS__
- `-d`, `--docs` : 사용자가 선택한 서비스의 전반적인 환경 설정 가이드 문서를 웹 브라우저에서 엽니다. 미입력시 기본값이 되는 옵션입니다.
- `-p`, `--print` : 사용자가 선택한 서비스의 용도별 핵심 설정 파일(`packge.json`, `*.yml`, `.SERVICE_NAMErc` 등)목록 중 하나를 선택하면 그 내용을 터미널에 출력합니다.
- `-cb`, `--clipboard` : 사용자가 선택한 서비스의 용도별 핵심 설정파일의 목록 중 하나를 선택하여 그 내용을 클립보드에 저장합니다.


## module
### 문법과 예시
```shell
$ mindulle module NAME [OPTIONS]
```

```shell
$ mindulle module monochrome.css --docs
```

### 용도
> 모듈화 해 둔 다양한 코드 모음을 설치하거나 문서를 엽니다.

### 필수
__NAME__
- 단일 모듈 이름 혹은
- 개발시 자주 마주하면서도 중요한 주제(성능, 클린코드, 클린 아키텍쳐 등)가 올 수 있습니다.
- TODO : 모든 사용 가능 목록 표로 작성해두기. 표로 작성한 것들을 RDB화 할것임.

| Module         | Type       | Description                                         |
| -------------- | ---------- | --------------------------------------------------- |
| monochrome.css | css module | monochromatic styling module for my web components. |
|                |            |                                                     |

### 선택
__OPTIONS__
- `-i`, `--init` : `NAME`과 연관된 모든 의존성을 설치합니다.
- `-d`, `--docs` : `NAME`과 관련된 문서를 엽니다. (기본값)
- `-ex`, `--example` : `NAME`을 활용한 간단한 데모를 엽니다.

## script
문법과 예시
```shell
$ mindulle script TASK [OPTIONS]
```

```shell
$ mindulle script prepare-msw --docs
```

용도
> 개발 과정에서 단순 반복 작업의 자동화 스크립트, 자주 사용되는 유닛 테스트 패턴 등 보조적인 역할을 수행하는 스크립트들을 빠르고 쉽게 사용하기 위한 명령어

필수
__TASK__
- 개발 과정에서 발생 할 수 있는 이슈의 주제라면 무엇이든 여기 올 수 있습니다.
- TODO : 표 만들어두기

| Task                    | Type                       | Description |
| ----------------------- | -------------------------- | ----------- |
| prepare-ts-cli.js       | npm commands script module |             |
| prepare-ts-frontend.js  | npm commands script module |             |
| prepare-ts-backend.js   | npm commands script module |             |
| prepare-ts-fullstack.js | npm commands script module |             |


선택
__OPTIONS__
- `-d`, `--docs` : `TITLE`에 해당하는 간략한 설명 문서를 브라우저에서 엽니다. (기본값)
- `-p`, `--print` : `TITLE`에 해당하는 스크립트를 터미널에 출력합니다.
- `-cb`, `--clipboard` : `TITLE`에 해당하는 스크립트를 클립보드에 복사합니다.
- `-r`, `--run` : `TITLE`에 해당하는 스크립트를 현재 디렉터리에서 실행합니다.


# Script 명령어를 아래 세 명령어로 세분화 해 두세요.
## predev
- 개발 전 환경설정 스크립트 실행

## pipe
- API 통신, fetch, back <-> front, 등 다양한 통신 주체별 연결을 중개하기 위한 명령어.

## postdev
- operation에 해당하는 작업들(백엔드 작업 포함, operate, deploy, monitoring, etc...) 을 수행하기 위한 스크립트 모음
