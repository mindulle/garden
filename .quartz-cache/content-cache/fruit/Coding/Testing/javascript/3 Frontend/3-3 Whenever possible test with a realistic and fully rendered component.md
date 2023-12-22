## ⚪ ️ 3.3 Whenever possible, test with a realistic and fully rendered component

:white_check_mark: **Do:** Whenever reasonably sized, test your component from outside like your users do, fully render the UI, act on it and assert that the rendered UI behaves as expected. Avoid all sort of mocking, partial and shallow rendering - this approach might result in untrapped bugs due to lack of details and harden the maintenance as the tests mess with the internals (see bullet ['Favour blackbox testing'](https://github.com/goldbergyoni/javascript-testing-best-practices#-%EF%B8%8F-14-stick-to-black-box-testing-test-only-public-methods)). If one of the child components is significantly slowing down (e.g. animation) or complicating the setup - consider explicitly replacing it with a fake

With all that said, a word of caution is in order: this technique works for small/medium components that pack a reasonable size of child components. Fully rendering a component with too many children will make it hard to reason about test failures (root cause analysis) and might get too slow. In such cases, write only a few tests against that fat parent component and more tests against its children

<br/>

❌ **Otherwise:** When poking into a component's internal by invoking its private methods, and checking the inner state - you would have to refactor all tests when refactoring the components implementation. Do you really have a capacity for this level of maintenance?

<br/>

<details><summary>✏ <b>Code Examples</b></summary>

<br/>

### :clap: Doing It Right Example: Working realistically with a fully rendered component

![](https://img.shields.io/badge/🔧%20Example%20using%20React-blue.svg "Examples with React") ![](https://img.shields.io/badge/🔧%20Example%20using%20Enzyme-blue.svg "Examples with Enzyme")

```javascript
class Calendar extends React.Component {
  static defaultProps = { showFilters: false };

  render() {
    return (
      <div>
        A filters panel with a button to hide/show filters
        <FiltersPanel showFilter={showFilters} title="Choose Filters" />
      </div>
    );
  }
}

//Examples use React & Enzyme
test("Realistic approach: When clicked to show filters, filters are displayed", () => {
  // Arrange
  const wrapper = mount(<Calendar showFilters={false} />);

  // Act
  wrapper.find("button").simulate("click");

  // Assert
  expect(wrapper.text().includes("Choose Filter"));
  // This is how the user will approach this element: by text
});
```

### :thumbsdown: Anti-Pattern Example: Mocking the reality with shallow rendering

```javascript
test("Shallow/mocked approach: When clicked to show filters, filters are displayed", () => {
  // Arrange
  const wrapper = shallow(<Calendar showFilters={false} title="Choose Filter" />);

  // Act
  wrapper
    .find("filtersPanel")
    .instance()
    .showFilters();
  // Tap into the internals, bypass the UI and invoke a method. White-box approach

  // Assert
  expect(wrapper.find("Filter").props()).toEqual({ title: "Choose Filter" });
  // what if we change the prop name or don't pass anything relevant?
});
```

</details>

<br/>

