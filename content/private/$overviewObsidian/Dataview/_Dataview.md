---
tags:
- 
---

```toc
style: bullet
```

# 메모
카테고리별 분류?
전통적 RDBMS식 분류?
NoSQL식 자체 문법 생성해서 분류?

일단 현재 Seeds 단에 정보가 병목이 될 것이다
아마도 Tree 단계로 넘어갈때 상한 씨앗과 발아한 씨앗을 구분하게 될 것이고
Fruits 단계에서는 공유 레벨까지 넘어가게 될 것이다.

현재 데이터뷰 플러그인에서 제공하는 주요 기능들은
- SQL 쿼리 전체
- 자체 TASK 기능
- 쿼리 문법 사용 가능(DQL)

본디 데이터베이스란 쓰든 안쓰든 모든 데이터를 모아두는것에 의의가 있다.
물론 공간이 무한하지 않기 때문에 특정 주기마다 데이터를 비워줘야 하겠지만
아마도 그를 위해 자주 쓰는 데이터와 자주 쓰지 않는 데이터의 분류와 그 기준이 중요할 것이고
어쨌든 확실한건 마크다운 문서 정도로는 리미트에 걸릴만한 위험은 솔직히 없다는 것

하지만 이 저장소 자체가 나의 2번뇌라는 컨셉이 있는 만큼 이 저장소의 모습 자체는 뇌를 다루는것과 비슷해야 할 것이다. 과한 정보를 넣어둬봤자 기억 못하고 오히려 legacy가 되어서 날 더 혼란스럽게 할 가능성이 높아보인다

그렇다면 역시 상한것과 아닌것을 구분하고 상한(stale) 문서는 일단 stale을 두고 보관하다가 번거롭다 느껴지는 순간 바로 휴지통 문서에 넣어버리고 짬짬이 틈 날때마다 한번 쭉 훑어보고 휴지통을 비워버리는식으로 관리하자

# 사용법
## 데이터 형식 지정
### 원시형(Primitive)
- 문자열 : "String"
- 이후 확인 필요
### 함수로 지정하기
- object(key1, value1, ...)
- list(value1, value2, ...)
- date(any)
- number(string)
- string(any)
- link(path, [display])
Link examples)
```
link("Hello") => link to page named 'Hello' link("Hello", "Goodbye") => link to page named 'Hello', displays as 'Goodbye'
```
- 


# 테스트
```dataview
LIST FROM #excalidraw/
```
```
#tagname/alias
Ymal frontmatter로 정의하면 dataview에서 쓸 수 있는듯.
```

