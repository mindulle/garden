---
# configs for document itself.
title: "๐Dictionary"
lastModified: "2023-01-05"

# field for querying only dictionary notes.
isDictionary: true

# add some tags for specifying particular subjects.
tags:
  - "dictionary"
---
> [!error] TODO
> Bring detailed descriptions into [[Develop/Trees/Learn/6th standards/Network/๐๏ธTerminologies|๐๏ธTerminologies]]

# C
## CNAME
> **์บ๋ธ๋์ปฌ ๋ค์ ๋ ์ฝ๋**(Canonical Name record), ์ค์ฌ์ย **CNAME ๋ ์ฝ๋**(CNAME record)๋ ํ๋์ ๋๋ฉ์ธ ๋ค์(์์ผ๋ฆฌ์ด์ค)์ ๋ค๋ฅธ ์ด๋ฆ([ํ์ค ํ์](https://ko.wikipedia.org/wiki/%ED%91%9C%EC%A4%80_%ED%98%95%EC%8B%9D "ํ์ค ํ์")์ ์ด๋ฆ)์ผ๋ก ๋งคํ์ํค๋ย [๋๋ฉ์ธ ๋ค์ ์์คํ](https://ko.wikipedia.org/wiki/%EB%8F%84%EB%A9%94%EC%9D%B8_%EB%84%A4%EC%9E%84_%EC%8B%9C%EC%8A%A4%ED%85%9C "๋๋ฉ์ธ ๋ค์ ์์คํ")(DNS)์ย [๋ฆฌ์์ค ๋ ์ฝ๋](https://ko.wikipedia.org/wiki/%EB%8F%84%EB%A9%94%EC%9D%B8_%EB%84%A4%EC%9E%84_%EC%8B%9C%EC%8A%A4%ED%85%9C "๋๋ฉ์ธ ๋ค์ ์์คํ")์ ์ผ์ข์ด๋ค. **_[Wikipedia](https://ko.wikipedia.org/wiki/CNAME_%EB%A0%88%EC%BD%94%EB%93%9C)_**
```shell {title="DNS"}
NAME                    TYPE   VALUE
--------------------------------------------------
bar.example.com.        CNAME  foo.example.com.
foo.example.com.        A      192.0.2.23
```
[A ๋ ์ฝ๋](https://ko.wikipedia.org/wiki/A_%EB%A0%88%EC%BD%94%EB%93%9C)๊ฐย _bar.example.com_ ๋ฅผ ์ฐพ์ ๋ ๋ฆฌ์กธ๋ฒ๋ CNAME ๋ ์ฝ๋๋ฅผ ๋ณด๊ณ ย _foo.example.com_ ์์ ํ์ธ์ ์ฌ์์ํ ๋ค 192.0.2.23์ ๋ฐํํ๋ค.
```mermaid
flowchart RL
	ME --> |plz find bar.example.com| DNS
	subgraph DNS
		direction TB
			CNAME-RECORD --> |foo.example.com| Resolver
			Resolver --> |give me your CNAME| CNAME-RECORD
			foo.example.com --> |192.0.2.23| Resolver
			Resolver --> |give me your A-record| foo.example.com
	end
	DNS --> |192.0.2.23|ME
```
- RFCย [2219](https://datatracker.ietf.org/doc/html/rfc2219)ย โ Use of DNS Aliases for Network Services

# H
## HTTP

# U
## URI 