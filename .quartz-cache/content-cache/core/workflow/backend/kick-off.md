## 시안을 바탕으로 데이터베이스 설계하기.
### 개념적 설계
- 개념적 설계. ER Diagram을 https://dbdiagram.io 에서 그린다.
- 이 과정에서 트랜잭션(작업) 도 모델링 해 준다.

### 논리적 설계
- 선택한 DBMS의 데이터 모델을 사용하여 논리적 스키마를 사용하는 단계이다.
- 선택한 DBMS의 문법에 맞추어 논리 스키마로 정규화하는 과정이다.
- 과정에서 해당 DBMS에 맞는 DB 스키마가 도출된다.
-  트랜잭션 인터페이스를 설계하고

###  물리적 설계
 - 데이터베이스 인덱스를 사용해 저장 구조와 접근 경로 등을 설정한다.
 - 주로 성능에 대해 고민하는 단계이다.
	 - 응답 시간, 트랜잭션 처리율, 전체 DB에 대한 보고서를 작성하는데 걸리는 시간 등이 전체 성능에 영향을 미치는 요인이 된다.
- 트랜잭션 세부사항을 설계하는 단계이다.


## API 구조를 설계한다.
### REST API
- REST API라면 [Swagger Editor](https://editor.swagger.io/) 등을 이용해 open-api specification에 맞추어 API 스펙을 작성한다.
- UI 설계를 살펴보며 필요한 resources 단위로 설계하는 것이 일반적이다.
- ERD상의 Entity와 Relation들을 잘 떠올리며 적절한 http method를 지정하고 endpoint의 이름을 지어 준다.
- [openapi-generator](https://openapi-generator.tech/) 를 활용해 스펙으로부터 코드를 생성 할 수 있다. 

### [Graphql API](https://devblog.kakaostyle.com/ko/2022-10-04-1-understanding-graphql-1-schema/)
- [Apollo graphql API Studio](https://studio.apollographql.com/), [Altair Graphql Client](https://altair-gql.sirmuel.design/) 등을 활용해 API 스펙을 작성 할 수 있다.
- REST API와 달리, 스크럼에서 지정한 [[seed/UX/User Stories|User Stories]] 단위로 api endpoint를 지정하는 경우가 일반적이다.
- 마찬가지로 [GraphQL Code Generator](https://www.graphql-code-generator.com/) 를 활용하여 정의된 [schema.graphql](https://the-guild.dev/graphql/codegen/docs/getting-started#the-perfect-graphql-developer-experience) 과 같은 파일을 작성해 스키마를 정의하여, 작성된 스키마로부터 프론트엔드 코드와 백엔드 코드를 생성 할 수 있습니다. 

### 비즈니스 로직을 테스트하고 구현한다.
- 설계에 따라 다양한 경우의 수가 발생 할 수 있다.
- 통신 성능이 중요한 서비스라면 SQL 쿼리문을 직접 작성하고 관리하여 성능 향상을 꾀할 수 있다.
- 전형적이고 잘 알려진 형식의 개발이고, 성능보단 개발 속도가 중요한 경우에 ORM 등을 이용하여 개발 속도를 빠르게 할 수 있다.
- 이외에도 비용 절감, 안정적인 서비스 제공을 위해 데이터베이스를 지속적으로 모니터링하며 튜닝한다.
