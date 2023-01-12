---
# configs for document itself.
title: "📚Dictionary"
lastModified: "2023-01-05"

# field for querying only dictionary notes.
isDictionary: true

# add some tags for specifying particular subjects.
tags:
  - "dictionary"
  - "techInterview"
---

> [!error] TOO
> Bring detailed descriptions into [[Develop/Trees/Dev/Programming/Test/🗝️Terminologies|🗝️Terminologies]].

# B
## Behavior Driven Development
> (...) BDD is largely facilitated through the use of a simple [domain-specific language](https://en.wikipedia.org/wiki/Domain-specific_language "Domain-specific language") (DSL) using natural-language constructs (e.g., English-like sentences) that can express the behaviour and the expected outcomes. (...) **_[wikipedia](https://en.wikipedia.org/wiki/Behavior-driven_development)_**

> [!NOTE] Principles of BDD
- define a test set for the **unit _first_**;
- make the tests **fail**;
- then **implement _the unit_**;
- finally verify that the implementation of the unit **makes the tests succeed**.

> [!NOTE] Behavioral specifications

**Title**
	An **explicit** title.

**Narrative**
	A short introductory section with the following structure:
   - **As a**: the person or role who will benefit from the feature;
   - **I want**: the feature;
   - **so that**: the benefit or value of the featur

**Acceptance criteria**
A description of each specific [scenario](https://en.wikipedia.org/wiki/Scenario_(computing) "Scenario (computing)") of the narrative with the following structure:
- **Given**: the initial context at the beginning of the scenario, in one or more clauses;
- **When**: the event that triggers the scenario;
- **Then**: the expected outcome, in one or more clauses.

> [!NOTE] Story versus specification

---
**Specification:** Stack

**When** a new stack is created
**Then** it is empty

**When** an element is added to the stack
**Then** that element is at the top of the stack

**When** a stack has N elements 
**And** element E is on top of the stack
**Then** a pop operation returns E
**And** the new size of the stack is N-1

---

vs

---

```shell
describe Hash do
  let(:hash) { Hash[:hello, 'world'] }

  it { expect(Hash.new).to eq({}) }

  it "hashes the correct information in a key" do
    expect(hash[:hello]).to eq('world')
  end

  it 'includes key' do
    hash.keys.include?(:hello).should be true
  end
end
```
---

# T
## Test Driven Development
> **테스트 주도 개발**(Test-driven development TDD)은 매우 짧은 개발 사이클을 반복하는 [소프트웨어 개발 프로세스](https://ko.wikipedia.org/wiki/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EA%B0%9C%EB%B0%9C_%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4 "소프트웨어 개발 프로세스") 중 하나이다. 개발자는 먼저 요구사항을 검증하는 자동화된 테스트 케이스를 작성한다. 그런 후에, 그 테스트 케이스를 통과하기 위한 최소한의 코드를 생성한다. 마지막으로 작성한 코드를 표준에 맞도록 [리팩토링](https://ko.wikipedia.org/wiki/%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81 "리팩토링")한다. **_[wikipedia](https://en.wikipedia.org/wiki/Test-driven_development)_**

> [!NOTE] Test-Driven development cycle
> 
1. **Add a test**
		The adding of a new feature begins by writing a test that passes [iff](https://en.wikipedia.org/wiki/Iff "Iff") the feature's specifications are met. The developer can discover these specifications by asking about [use cases](https://en.wikipedia.org/wiki/Use_case "Use case") and [user stories](https://en.wikipedia.org/wiki/User_story "User story"). A key benefit of test-driven development is that it makes the developer focus on requirements _before_ writing code. This is in contrast with the usual practice, where unit tests are only written _after_ code.

2. Run all tests. The new test **_should fail_** for **expected reasons**
		This shows that new code is actually needed for the desired feature. **It validates that the [test harness](https://en.wikipedia.org/wiki/Test_harness "Test harness") is working correctly.** It rules out the possibility that the new test is flawed and will always pass.

3. Write the **simplest code** that passes the new test
		Inelegant or [hard code](https://en.wikipedia.org/wiki/Hard_code "Hard code") is acceptable, as long as it passes the test. The code will be honed anyway in Step 5. No code should be added beyond the tested functionality.

4. All tests ***should now pass***
		If any fail, the new code **must be revised until they pass**. This ensures the new code **meets the [test requirements](https://en.wikipedia.org/wiki/Software_requirements "Software requirements")** and **does not break** existing features.

5. **Refactor** as needed, using tests after each refactor to ensure that functionality is preserved
		Code is [refactored](https://en.wikipedia.org/wiki/Code_refactoring "Code refactoring") for [readability](https://en.wikipedia.org/wiki/Code_readability "Code readability") and maintainability. In particular, **hard-coded test data should be removed**. Running the test suite after each refactor helps ensure that no existing functionality is broken.
	  - Examples of refactoring:
		  - **mov**ing **code** to where it **most logically belongs**
		  - **remov**ing [**dup**licate code](https://en.wikipedia.org/wiki/Duplicate_code "Duplicate code")
		  - making [**names**](https://en.wikipedia.org/wiki/Name "Name") [**self-documenting**](https://en.wikipedia.org/wiki/Self-documenting_code "Self-documenting code")
		  - **split**ting _methods_ into **smaller pieces**
		  - **re-arrang**ing [**inheritance hierarchies**](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming) "Inheritance (object-oriented programming)")

**Repeat**
	The cycle above is repeated for each new piece of functionality. Tests should be small and incremental, and commits made often. That way, if new code fails some tests, **the programmer can _simply_ [undo](https://en.wikipedia.org/wiki/Undo "Undo")** or revert rather than [debug](https://en.wikipedia.org/wiki/Debug "Debug") excessively. 
	When using [external libraries](https://en.wikipedia.org/wiki/Library_(computing) "Library (computing)"), it is important **not to write** tests that are **so small** as **to** effectively **test** merely **the library itself**, unless there is some reason to believe that the library is buggy or not feature-rich enough to serve all the needs of the software under development.


> [!NOTE] Best practices

**Test structure**
A commonly applied structure for test cases has **(1) setup, (2) execution, (3) validation, and (4) cleanup**.
- **Setup**: Put the Unit Under Test (UUT) or the overall test system in the state needed to run the test.
- **Execution**: Trigger/drive the UUT to perform the target behavior and **capture all output, such as return values and output parameters**. This step is usually very simple.
- **Validation**: Ensure the results of the **test are correct**. These results may include **explicit outputs** captured during **execution or state changes** in the UUT.
- **Cleanup**: **_Restore_** the UUT or the overall test system to the pre-test state. This restoration **permits another test to execute immediately after this one**. In some cases, in order **to preserve the information for possible test** failure analysis, the cleanup **should be starting** the test just before the test's **_setup_** run.

### Practices to avoid, or "anti-patterns"
See also: [Anti-pattern](https://en.wikipedia.org/wiki/Anti-pattern "Anti-pattern")

> [!Caution] Do Not these behaviors
- Having test cases depend on system state manipulated from previously executed test cases (i.e., you should always start a unit test from a known and pre-configured state).
- **Dependencies between test cases**. A test suite where test cases are dependent upon each other is brittle and complex. Execution order should not be presumed. Basic refactoring of the initial test cases or structure of the UUT causes a spiral of increasingly pervasive impacts in associated tests.
- **Interdependent tests**. Interdependent tests can cause cascading false negatives. A failure in an early test case breaks a later test case even if no actual fault exists in the UUT, increasing defect analysis and debug efforts.
- **Testing precise execution**, behavior, timing or performance.
- **Building "all-knowing oracles"**. An oracle that inspects more than necessary is more expensive and brittle over time. This very common error is dangerous because it causes a subtle but pervasive time sink across the complex project
- Testing implementation **details**.
- **Slow** running tests.


> [!NOTE] Fakes, mocks and integration test

(...) When **code** under development **relies on a database**, a web service, or any other external process or service, **enforcing a unit-testable separation** is also an opportunity and a driving force to **design more modular**, more testable and more reusable code. Two steps are necessary:
1.  Whenever external access is needed in the final design, an [interface](https://en.wikipedia.org/wiki/Interface_(computer_science) "Interface (computer science)") should be defined that describes the access available. See the [dependency inversion principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle "Dependency inversion principle") for a discussion of the benefits of doing this regardless of TDD.
	- 의존성 주입은 대부분 프로젝트에서 진행하게 됨.
2.  The interface should be implemented in two ways, one of which really accesses the external process, and the other of which is a [fake or mock](https://en.wikipedia.org/wiki/Mock_object "Mock object"). Fake objects need do little more than add a message such as "Person object saved" to a [trace log](https://en.wikipedia.org/wiki/Tracing_(software) "Tracing (software)"), against which a test [assertion](https://en.wikipedia.org/wiki/Assertion_(computing) "Assertion (computing)") can be run to verify correct behaviour. Mock objects differ in that they themselves contain [test assertions](https://en.wikipedia.org/wiki/Assertion_(computing) "Assertion (computing)") that can make the test fail, for example, if the person's name and other data are not as expected.
	- 모킹은 아주 좋은 방법이고 자주 사용하게 될 것임.
(...)
Test double[^Test-double]s are of a number of different types and varying complexities:
- [**Dummy**](https://en.wikipedia.org/wiki/Dummy_code "Dummy code") – A dummy is the **simplest form of a test double**. It facilitates **linker time substitution** by **provid**ing a **default return value** where required.
- [**Stub**](https://en.wikipedia.org/wiki/Method_stub "Method stub") – A stub adds **simplistic logic to a dummy**, **provid**ing **different outputs**.
- **Spy** – A spy **captures and makes available parameter and state information**, publishing accessors to **test code for private** information allowing for more advanced state validation.
- [**Mock**](https://en.wikipedia.org/wiki/Mock_object "Mock object") – A mock is specified by an individual test case to validate test-specific behavior, **checking parameter values and call sequencing**.
- **Simulator** – A simulator is a comprehensive component providing **a higher-fidelity approximation** of the target capability (the thing being doubled). A simulator **typically requires significant additional development effort**.
(...)
**Integration tests** that alter any [persistent store](https://en.wikipedia.org/wiki/Persistent_storage "Persistent storage") or **database** should always be designed carefully with consideration of the initial and final state of the files or database, even if any test fails. This is often achieved using some combination of the following techniques:
- The `TearDown` method, which is integral to many test frameworks.
- `try...catch...finally` [exception handling](https://en.wikipedia.org/wiki/Exception_handling "Exception handling") structures where available.
- [**Database transactions**](https://en.wikipedia.org/wiki/Database_transactions "Database transactions") where a transaction [atomically](https://en.wikipedia.org/wiki/Atomicity_(database_systems) "Atomicity (database systems)") includes perhaps a write, a read and a matching delete operation.
- Taking a **"snapshot"** of the database before running any tests and rolling back to the snapshot after each test run. This may be automated using a framework such as [Ant](https://en.wikipedia.org/wiki/Apache_Ant "Apache Ant") or [NAnt](https://en.wikipedia.org/wiki/NAnt "NAnt") or a [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration "Continuous integration") system such as [CruiseControl](https://en.wikipedia.org/wiki/CruiseControl "CruiseControl").
- **Init**ialising the **database to a clean state _before_ tests**, rather than cleaning up **_after_ them**. This may be relevant where cleaning up may make it difficult to diagnose test failures by deleting the final state of the database before detailed diagnosis can be performed.


> [!quote] External Links
> [TestDrivenDevelopment](http://c2.com/cgi/wiki?TestDrivenDevelopment "c2:TestDrivenDevelopment") on WikiWikiWeb
> [TestDrivenConference](http://tddconf.com/)

# R
## Regression test
> 회귀 [버그](https://ko.wikipedia.org/wiki/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EB%B2%84%EA%B7%B8 "소프트웨어 버그")를 찾는 모든 [소프트웨어 테스트](https://ko.wikipedia.org/wiki/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%ED%85%8C%EC%8A%A4%ED%8A%B8 "소프트웨어 테스트") 방식은 **회귀 테스트**(regression testing, _non-regression testing_ 라 할 수 있다. [회귀 버그](https://ko.wikipedia.org/wiki/%ED%9A%8C%EA%B7%80_%EB%B2%84%EA%B7%B8 "회귀 버그")는 이전에 제대로 작동하던 소프트웨어 기능에 문제가 생기는 것을 가리킨다. 일반적으로 회귀 버그는 프로그램 변경 중 뜻하지 않게 발생한다. **_[wikipedia](https://ko.wikipedia.org/wiki/%ED%9A%8C%EA%B7%80_%ED%85%8C%EC%8A%A4%ED%8A%B8)_**



[^Test-double]:  의존하고 있는 원본 객체가 외부 의존성이 있어(데이터베이스라던지) 불변성이 보장되지 않으면 테스트 결과가 일정하지 않게 된다. 이런 경우 대신할 객체가 하나 필요한데. 이를 테스트 더블이라 부른다. 영화 촬영 시 위험한 역할을 대신 하는 "스턴트 더블" 이라는 용어에서 유래되었다. 이해를 돕기 위한 이미지 : ![Test Doubles example|50](https://miro.medium.com/max/1024/0*AtEcgjYzyuEmkWiv.png)