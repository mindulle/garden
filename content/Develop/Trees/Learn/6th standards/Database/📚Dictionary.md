---
# configs for document itself.
title: "📚Dictionary"
lastModified: "2022-12-26"

# field for querying only entry point notes.
isDictionary: true

# add some tags for specifying particular subjects.
tags:
  - "dictionary"
---
```toc
```
# C
## Candidate key
> A **candidate key**, or simply a **key**, of a [relational database](https://en.wikipedia.org/wiki/Relation_schema "Relation schema") is a minimal [superkey](https://en.wikipedia.org/wiki/Superkey "Superkey"). In other words, it is any set of columns that have a unique combination of values in each row (which makes it a superkey), with the additional constraint that removing any column would possibly produce duplicate rows (which makes it a minimal superkey).
- pk, fk가 아닌 그냥 키

## Composite key
> In [database design](https://en.wikipedia.org/wiki/Data_modeling "Data modeling"), a **composite key** is a [candidate key](https://en.wikipedia.org/wiki/Candidate_key "Candidate key") that consists of two or more attributes (table columns) that together uniquely identify an entity occurrence (table row). A **compound key** is a composite key for which each attribute that makes up the key is a [foreign](https://en.wikipedia.org/wiki/Foreign_key "Foreign key") key in its own right. **_[wikipedia](https://en.wikipedia.org/wiki/Composite_key)_**
- 학교 출석부 예제에서, firstName + LastName으로 composite key가 구성 될 수 있다.

# D
## Data source name(DSN)
> [In](https://en.wikipedia.org/wiki/Internet "Internet") [computing](https://en.wikipedia.org/wiki/Computing "Computing"), a **data source name** (**DSN**, sometimes known as a **database source name**, though "[data sources](https://en.wikipedia.org/wiki/Computer_file "Computer file")" can comprise other repositories apart from [databases](https://en.wikipedia.org/wiki/Database_management_system "Database management system")) is a string that has an associated [data structure](https://en.wikipedia.org/wiki/Data_structure "Data structure") used to describe a connection to a data source. **_[wikipedia](https://en.wikipedia.org/wiki/Data_source_name)_**

## Data control language(DCL)
> A **data control language** (**DCL**) is a syntax similar to a computer [programming language](https://en.wikipedia.org/wiki/Programming_language "Programming language") used to control access to data stored in a database ([authorization](https://en.wikipedia.org/wiki/Authorization "Authorization")). In particular, it is a component of [Structured Query Language](https://en.wikipedia.org/wiki/Structured_Query_Language "Structured Query Language") (SQL).**_[wikipedia](https://en.wikipedia.org/wiki/Data_control_language)_**
- `GRANT`, `DENY`, `REVOKE`

## Data defenition language(DDL)
> In the context of [SQL](https://en.wikipedia.org/wiki/SQL "SQL"), **data definition** or **data description language** (**DDL**) is a syntax for creating and modifying database objects such as tables, indices, and users. **[wikipedia](https://en.wikipedia.org/wiki/Data_definition_language)**
- In SQL, `CREATE`, `DROP`, `ALTER`, `TRUNCATE`
- In other languages, [XML Schema](https://en.wikipedia.org/wiki/XML_Schema_(W3C) "XML Schema (W3C)") is an example of a DDL for [XML](https://en.wikipedia.org/wiki/XML) and [JSON Schema](https://en.wikipedia.org/wiki/JSON#Metadata_and_schema) is an example of a DDL for [JSON](https://en.wikipedia.org/wiki/JSON "JSON").

## Data manipulation language(DML)
> A **data manipulation language** (**DML**) is a computer [programming language](https://en.wikipedia.org/wiki/Programming_language "Programming language") used for adding (inserting), deleting, and modifying (updating) data in a [database](https://en.wikipedia.org/wiki/Database "Database"). **_[wikipedia](https://en.wikipedia.org/wiki/Data_manipulation_language)_**
- `CRUD`
- [Insert (SQL)](https://en.wikipedia.org/wiki/Insert_(SQL) "Insert (SQL)"), [Select (SQL)](https://en.wikipedia.org/wiki/Select_(SQL)), [Update (SQL)](https://en.wikipedia.org/wiki/Update_(SQL) "Update (SQL)"), [Delete (SQL)](https://en.wikipedia.org/wiki/Delete_(SQL) "Delete (SQL)")

## Data query language
> **Data Query Language** (**DQL**) is part of the base grouping of [SQL](https://en.wikipedia.org/wiki/SQL "SQL") sub-languages. **_[wikipedia](https://en.wikipedia.org/wiki/Data_query_language)_**
- `SELECT`
# F
## Foreign key
> A **foreign key** is a set of attributes in a table that refers to the [primary key](https://en.wikipedia.org/wiki/Primary_key "Primary key") of another table. The foreign key links these two tables. **_[wikipedia](https://en.wikipedia.org/wiki/Foreign_key)_**
- fk가 싱글 키면 아래와 같이 지정 할 수 있다.
```SQL
CREATE TABLE child_table (
  col1 INTEGER PRIMARY KEY,
  col2 CHARACTER VARYING(20),
  col3 INTEGER,
  col4 INTEGER REFERENCES parent_table(col1) ON DELETE CASCADE
)
```

# P
## Primary key
> Informally, a primary key is "which attributes identify a record," and in simple cases constitute a single attribute: a unique ID. More formally, a primary key is a choice of [candidate key](https://en.wikipedia.org/wiki/Candidate_key "Candidate key") (a minimal [superkey](https://en.wikipedia.org/wiki/Superkey "Superkey")); any other candidate key is an **alternate key**. **_[wikipedia](https://en.wikipedia.org/wiki/Primary_key)_**
- 아래와 같이 SQL문에서 PK를 지정 할 수 있다.
```SQL
CREATE TABLE table_name (
   id_col  INT  PRIMARY KEY,
   col2    CHARACTER VARYING(20),
   ...
)
```
- 한 후보키가 프라이머리 키가 되면, 다른 `UNIQUE`한 키가 대체키가 될 수 있다.

# S
## Serialization
> **직렬화**(直列化) 또는 **시리얼라이제이션**(serialization)은 [컴퓨터 과학](https://ko.wikipedia.org/wiki/%EC%BB%B4%ED%93%A8%ED%84%B0_%EA%B3%BC%ED%95%99 "컴퓨터 과학")의 데이터 스토리지 문맥에서 [데이터 구조](https://ko.wikipedia.org/wiki/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EA%B5%AC%EC%A1%B0 "데이터 구조")나 [오브젝트](https://ko.wikipedia.org/wiki/%EC%98%A4%EB%B8%8C%EC%A0%9D%ED%8A%B8 "오브젝트") 상태를 동일하거나 다른 컴퓨터 환경에 저장(이를테면 [파일](https://ko.wikipedia.org/wiki/%EC%BB%B4%ED%93%A8%ED%84%B0_%ED%8C%8C%EC%9D%BC "컴퓨터 파일")이나 메모리 [버퍼](https://ko.wikipedia.org/wiki/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%B2%84%ED%8D%BC "데이터 버퍼")에서, 또는 [네트워크](https://ko.wikipedia.org/wiki/%EC%BB%B4%ED%93%A8%ED%84%B0_%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC "컴퓨터 네트워크") 연결 링크 간 전송)하고 나중에 재구성할 수 있는 포맷으로 변환하는 과정이다.
> 
> 오브젝트를 직렬화하는 과정은 오브젝트를 [마샬링](https://ko.wikipedia.org/wiki/%EB%A7%88%EC%83%AC%EB%A7%81_(%EC%BB%B4%ED%93%A8%ED%84%B0_%EA%B3%BC%ED%95%99) "마샬링 (컴퓨터 과학)")한다고도 한다. 반대로, 일련의 바이트로부터 데이터 구조를 추출하는 일은 **역직렬화** 또는 **디시리얼라이제이션**(deserialization)이라고 한다. __*[위키백과](https://en.wikipedia.org/wiki/Serialization)*__

## Surrogate key
> **대체키**(Surrogate key)란 [자연키](https://ko.wikipedia.org/w/index.php?title=%EC%9E%90%EC%97%B0%ED%82%A4&action=edit&redlink=1 "자연키 (없는 문서)")에 대한 대체용으로 인공적이거나 합성적인 키를 말하며, 주로 [주민등록번호](https://ko.wikipedia.org/wiki/%EC%A3%BC%EB%AF%BC%EB%93%B1%EB%A1%9D%EB%B2%88%ED%98%B8 "주민등록번호") 같은 중요한 자료를 숨기기 위해 대체키로 사용하거나, 여러 개의 컬럼을 합성하여 검색 시 속도 향상을 위해 사용한다. **_[wikipedia](https://en.wikipedia.org/wiki/Surrogate_key)_**

