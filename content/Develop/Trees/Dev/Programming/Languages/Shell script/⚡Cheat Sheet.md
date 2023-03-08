---
# configs for document itself.
title: "⚡Cheat Sheet"
lastModified: "2023-03-07"

# field for querying only cheat sheet notes.
isCheatSheet: true

# add some tags for specifying particular subjects.
tags:
  - "cheatSheet"
---
# My cheat sheet
> Origin cheat sheets here.

## Confusing Expressions
> More generally what does the dollar sign stand for?

_A : It means whatever it means in the given context._

OMG T^T..

Maybe It's better to remember each name of expressions.

| Behavior                                                                                                       | Expression                      | Description                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------- | -------------------------------------------------------------------------------------------------- |
| [Command Substitution](https://www.gnu.org/software/bash/manual/html_node/Command-Substitution.html)           | `$( command )` or \` command \` | execute the command in the parens in a subshell and produces its stdout.                           |
| [Command Grouping](https://www.gnu.org/software/bash/manual/html_node/Command-Grouping.html)                   | `( list )`                     | run the commands listed in the parens in a subshell.                                               |
| [Arithmetic Expansion](https://www.gnu.org/software/bash/manual/html_node/Arithmetic-Expansion.html)           | `$(( expression ))`             | perform arithmetic and produce the result of the calculation.                                      |
| ?                                                                                                              | `(( expression ))`              | perform arithmetic, possibly changing the values of shell variables, but don't produce its result. |
| [Shell Parameter Expansion](https://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html) | `${ parameter }`                 | produce the value of the shell variable named in the braces.                                       |
| [Commands Grouping](https://www.gnu.org/software/bash/manual/html_node/Command-Grouping.html)                  | `{ list; }`                     | execute the commands in the braces as a group.                                                     |

## My choices
| Behavior            | Expression which I have chosen |
| ------------------- | ------------------------------ |
| Grouping            | `( list )`                     |
| Substitution        | `command`                      |
| Parameter Expansion | `${ parameter }`                               |

## 의문점
아래 예제에서 둘의 실행 결과가 달랐다.
```shell {title="inline_output_a_command.sh"}
command=`find .`
for a_line in ${command}
do
  echo "1"
done
```
- "1"이 command의 실행 결과의 줄 수 번 만큼 출력됨.

```shell {title="inline_output_a_command.sh"}
command=`find .`
for a_line in "$command"
do
  echo "1"
done
```
- "1"이 한번 출력됨.

TODO : 이런 차이가 발생하는 이유 이해하기.
- 문서 작성 시점시 필요한 기능은 `${command}` 쪽이라 일단 이것으로 구현함.
- 문자열 취급이 되는지, 배열로 취급이 되는지 차이거나
- 문자열 내부에서의 `\n` 와 같은 시퀀스 이스케이프의 처리 방식과 배열 내부에서의 처리 방식이 달라 생기는 현상이 아닌가 짐작됨.