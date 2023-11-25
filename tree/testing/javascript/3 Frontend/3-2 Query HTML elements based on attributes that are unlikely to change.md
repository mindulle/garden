## ⚪ ️ 3.2 Query HTML elements based on attributes that are unlikely to change

:white_check_mark: **Do:** Query HTML elements based on attributes that are likely to survive graphic changes unlike CSS selectors and like form labels. If the designated element doesn't have such attributes, create a dedicated test attribute like 'test-id-submit-button'. Going this route not only ensures that your functional/logic tests never break because of look & feel changes but also it becomes clear to the entire team that this element and attribute are utilized by tests and shouldn't get removed

<br/>

❌ **Otherwise:** You want to test the login functionality that spans many components, logic and services, everything is set up perfectly - stubs, spies, Ajax calls are isolated. All seems perfect. Then the test fails because the designer changed the div CSS class from 'thick-border' to 'thin-border'

<br/>

<details><summary>✏ <b>Code Examples</b></summary>

<br/>

### :clap: Doing It Right Example: Querying an element using a dedicated attribute for testing

![](https://img.shields.io/badge/🔧%20Example%20using%20React-blue.svg "Examples with React")

```jsx
// the markup code (part of React component)
<h3>
  <Badge pill className="fixed_badge" variant="dark">
    <span data-test-id="errorsLabel">{value}</span>
    <!-- note the attribute data-test-id -->
  </Badge>
</h3>
```

```javascript
// this example is using react-testing-library
test("Whenever no data is passed to metric, show 0 as default", () => {
  // Arrange
  const metricValue = undefined;

  // Act
  const { getByTestId } = render(<dashboardMetric value={undefined} />);

  expect(getByTestId("errorsLabel").text()).toBe("0");
});
```

<br/>

### :thumbsdown: Anti-Pattern Example: Relying on CSS attributes

```jsx
<!-- the markup code (part of React component) -->
<span id="metric" className="d-flex-column">{value}</span>
<!-- what if the designer changes the classs? -->
```

```javascript
// this exammple is using enzyme
test("Whenever no data is passed, error metric shows zero", () => {
  // ...

  expect(wrapper.find("[className='d-flex-column']").text()).toBe("0");
});
```

</details>

<br/>

