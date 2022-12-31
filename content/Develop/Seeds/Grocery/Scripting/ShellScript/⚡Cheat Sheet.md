---
# configs for document itself.
title: "⚡Cheat Sheet"
lastModified: "2022-12-31"

# field for querying only cheat sheet notes.
isCheatSheet: true

# add some tags for specifying particular subjects.
tags:
  - "cheatSheet"
---
# Shortcuts
| Name | key bindings | Target(If needed) | Importance |
| ---- | ------------ |:-----------------:| ---------- |
|      |              |                   |            |

# My cheat sheet
## Basic commands
> [Bash 쉘스크립트 개발 시작하기 - wikidocs](https://wikidocs.net/29453) 를 바탕으로 작성했습니다.

|    Command    | Purpose |    Target     | Description                                                                              | example                                                |
|:-------------:|:-------:|:-------------:| ---------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| **_crontab_** |  관리   | 💻<br/>시스템 | 정기적으로 지정한 시간에 실행하고 싶은 명령어를 등록                                     |                                                        |
|  **_free_**   |  관리   | 💻<br/>시스템 | 메모리 사용량 확인                                                                       |                                                        |
|  **_ps⭐_**   |  관리   | 💻<br/>시스템 | 프로세스 정보를 표시                                                                     | `$ ps -e -f`                                           |
|   **_top_**   |  관리   | 💻<br/>시스템 | 프로세스 정보를 실시간으로 표시                                                          |                                                        |
|  **_uname_**  |  관리   | 💻<br/>시스템 | 시스템 정보를 표시                                                                       |                                                        |
|   **_df_**    |  관리   |    📁파일     | 파일시스템의 디스크 사용량을 표시                                                        |                                                        |
| **_find⭐_**  |  관리   |    📁파일     | 파일을 검색 할 때 사용                                                                   | `$ find ./logs/ -name "*20190101*" -exec rm -rf {} \;` |
|  **_ls⭐_**   |  관리   |    📁파일     | 파일 엔트리(파일, 디렉토리) 정보를 표시                                                  | `$ ls -alh`                                            |
| **_mkdir⭐_** |  관리   |    📁파일     | 디렉토리를 생성합니다                                                                    | `$ mkdir -p dir/subdir`                                |
|  **_mv⭐_**   |  관리   |    📁파일     | 파일, 디렉토리를 이동합니다. **이름을 변경**하는데에도 사용합니다.                       | `$ mv source.file traget.file `                        |
|  **_gzip_**   |  관리   |    🥚압축     | gzip 형식으로 파일을 압축                                                                |                                                        |
| **_gunzip_**  |  관리   |    🥚압축     | gzip 형식 파일의 압축해제                                                                |                                                        |
|   **_tar_**   |  관리   |    🥚압축     | 여러개의 파일을 하나의 파일로 묶음                                                       |                                                        |
|   **_awk_**   |  처리   | ✏️<br/>문자열 | 입력을 주어진 분리자(field seperator)로 분리하여 명령을 처리                             |                                                        |
|  **_cat⭐_**  |  처리   | ✏️<br/>문자열 | 파일 내용을 표준 출력으로 출력합니다. 인수에 복수의 파일을 지정하면 연결하여 출력합니다. | `$ cat -n sample.txt`                                  |
|  **_diff_**   |  처리   | ✏️<br/>문자열 | 파일 두개를 비교하여 다른 부분을 출력                                                    |                                                        |
| **_echo⭐_**  |  처리   | ✏️<br/>문자열 | 문자열이나 변수를 출력                                                                   |                                                        |
| **_grep⭐_**  |  처리   | ✏️<br/>문자열 | 지정한 문자열을 포함하고 있는 행을 검색                                                  | `$ cat file_name.txt \| grep PATTERN`                  |
|  **_sed⭐_**  |  처리   | ✏️<br/>문자열 | 텍스트 데이터를 패턴 매칭하여 처리                                                       | `$ sed 's/origin-text/replacing-text/g' sample.txt`    |
|  **_sort_**   |  처리   | ✏️<br/>문자열 | 텍스트를 정렬                                                                            |                                                        |
|  **_date_**   |  처리   |    📆날짜     | 일자, 시간을 처리                                                                        |                                                        |
|               |         |               |                                                                                          |                                                        |

## commands for shell scripting
