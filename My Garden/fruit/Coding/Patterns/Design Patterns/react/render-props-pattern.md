---
description: Pass JSX elements to components through props
lang: en
---
# Render Props Pattern

In the section on [Higher Order Components](/posts/hoc-pattern), we saw that being able to reuse component logic can be very convenient if multiple components need access to the same data, or contain the same
logic.

Another way of making components very reusable, is by using the **render prop** pattern. A render prop is a prop on a component, which value is a function that returns a JSX element. The component itself does not render anything besides the render prop. Instead, the component simply calls the render prop, instead of implementing its own rendering logic.

Imagine that we have a `Title` component. In this case, the `Title`
component shouldn't do anything besides rendering the value that we pass. We can use a render prop for this! Let's pass the value that we want the `Title` component to render to the `render` prop.

```jsx
<Title render={() => <h1>I am a render prop!</h1>} />
```

Within the `Title` component, we can render this data by returning the invoked `render` prop!

```jsx
const Title = (props) => props.render();
```

To the `Component` element, we have to pass a prop called `render`,
which is a function that returns a React element.

<iframe src="https://codesandbox.io/embed/y6wst?view=Editor+%2B+Preview"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="renderprops-1"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Perfect, works smoothly! The cool thing about render props, is that the component that receives the prop is very reusable. We can use it multiple times, passing different values to the `render` prop each time.

<iframe src="https://codesandbox.io/embed/hou0c?view=Editor+%2B+Preview"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="renderprops-2"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Although they're called *render* props, a render prop doesn't have to be called `render`. Any prop that renders JSX is considered a render prop! Let's rename the render props that were used in the previous example, and give them specific names instead!

<iframe src="https://codesandbox.io/embed/u0sfh?view=Editor+%2B+Preview"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="renderprops-3"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Great! We've just seen that we can use render props in order to make a component reusable, as we can pass different data to the render prop each time. But, why would you want to use this?

A component that takes a render prop usually does a lot more than simply invoking the `render` prop. Instead, we usually want to pass data from the component that takes the render prop, to the element that we pass as a render prop!

```jsx
function Component(props) {
  const data = { ... }

  return props.render(data)
}
```

The render prop can now receive this value that we passed as its
argument.

```jsx
<Component render={data => <ChildComponent data={data} />}
```

------------------------------------------------------------------------

Let's look at an example! We have a simple app, where a user can type a temperature in Celsius. The app shows the value of this temperature in Fahrenheit and Kelvin.

<iframe src="https://codesandbox.io/embed/wk0uy?view=Editor+%2B+Preview"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="renderprops-4"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Hmm.. Currently there's a problem. The stateful `Input` component
contains the value of the user's input, meaning that the `Fahrenheit`
and `Kelvin` component don't have access to the user's input!

------------------------------------------------------------------------

## Lifting state
---

One way to make the users input available to both the `Fahrenheit` and `Kelvin` component in the above example, we'd have to lift the state.

In this case, we have a stateful `Input` component. However, the sibling components `Fahrenheit` and `Kelvin` also need access to this data. Instead of having a stateful `Input` component, we can lift the state up to the first common ancestor component that has a connection to `Input`, `Fahrenheit` and `Kelvin`: the `App` component in this case!

```jsx
function Input({ value, handleChange }) {
  return <input value={value} onChange={(e) => handleChange(e.target.value)} />;
}

export default function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input value={value} handleChange={setValue} />
      <Kelvin value={value} />
      <Fahrenheit value={value} />
    </div>
  );
}
```

Although this is a valid solution, it can be tricky to lift state in
larger applications with components that handle many children. Each state change could cause a re-render of all the children, even the ones that don't handle the data, which could negatively affect the performance of your app.

---
## Render props

Instead, we can use render props! Let's change the `Input` component in a way that it can receive render props.

```jsx
function Input(props) {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Temp in °C"
      />
      {props.render(value)}
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input
        render={(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      />
    </div>
  );
}
```

Perfect, the `Kelvin` and `Fahrenheit` components now have access to the value of the user's input!

<iframe src="https://codesandbox.io/embed/couq1?view=Editor+%2B+Preview"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="renderprops-5"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

---
## Children as a function

Besides regular JSX components, we can pass functions as children to React components. This function is available to us through the
`children` prop, which is technically also a render prop.

Let's change the `Input` component. Instead of explicitly passing the
`render` prop, we'll just pass a function as a child for the `Input`
component.

```jsx
export default function App() {
  return (
    <div className="App">
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input>
        {(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      </Input>
    </div>
  );
}
```

We have access to this function, through the `props.children` prop
that's available on the `Input` component. Instead of calling
`props.render` with the value of the user input, we'll call
`props.children` with the value of the user input.

```jsx
function Input(props) {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Temp in °C"
      />
      {props.children(value)}
    </>
  );
}
```

Great, this way the `Kelvin` and `Fahrenheit` component have access to the value, without having to worry about the name of the `render`prop. 

<iframe src="https://codesandbox.io/embed/e23m4?view=Editor+%2B+Preview"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="renderprops-6"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


---
## Hooks

In some cases, we can replace render props with Hooks. A good example of this is [Apollo Client](https://www.apollographql.com/docs/react).

> No experience with Apollo Client is needed to understand this example.

One way to use Apollo Client is through the `Mutation` and `Query`
components. Let's look at the same `Input` example that was covered in the Higher Order Components section. Instead of using the `graphql()` higher order component, we'll now use the `Mutation` component that receives a render prop.

<iframe src="https://codesandbox.io/embed/jfdxg?view=Editor+%2B+Preview"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="renderprops-7"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

In order to pass data down from the `Mutation` component to the elements that need the data, we pass a function as a child. The function receives the value of the data through its arguments.

```jsx
<Mutation mutation={...} variables={...}>
  {addMessage => <div className="input-row">...</div>}
</Mutation>
```

Although we can still use the render prop pattern and is often preferred compared to the higher order component pattern, it has its downsides.

One of the downsides is deep component nesting. We can nest multiple `Mutation` or `Query` components, if a component needs access to multiple mutations or queries.

```jsx
<Mutation mutation={FIRST_MUTATION}>
  {(firstMutation) => (
    <Mutation mutation={SECOND_MUTATION}>
      {(secondMutation) => (
        <Mutation mutation={THIRD_MUTATION}>
          {(thirdMutation) => (
            <Element
              firstMutation={firstMutation}
              secondMutation={secondMutation}
              thirdMutation={thirdMutation}
            />
          )}
        </Mutation>
      )}
    </Mutation>
  )}
</Mutation>
```

After the release of Hooks, Apollo added Hooks support to the Apollo Client library. Instead of using the `Mutation` and `Query` render props, developers can now directly access the data through the hooks that the library provides.

Let's look at an example that uses the exact same data as we previously saw in the example with the `Query` render prop. This time, we'll provide the data to the component by using the `useQuery` hook that Apollo Client provided for us.

<iframe src="https://codesandbox.io/embed/n3td8?view=Editor+%2B+Preview"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="apollo-hoc-hooks"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


By using the `useQuery` hook, we reduced the amount of code that was needed in order to provide the data to the component.

---
## Pros

Sharing logic and data among several components is easy with the render props pattern. Components can be made very reusable, by using a render or `children` prop. Although the Higher Order Component pattern mainly solves the same issues, namely **reusability** and **sharing data**, the render props pattern solves some of the issues we could encounter by using the HOC pattern.

The issue of **naming collisions** that we can run into by using the HOC pattern no longer applies by using the render props pattern, since we don't automatically merge props. We explicitly pass the props down to the child components, with the value provided by the parent component.

Since we explicitly pass props, we solve the HOC's implicit props issue. The props that should get passed down to the element, are all visible in the render prop's arguments list. This way, we know exactly where certain props come from.

We can separate our app's logic from rendering components through render props. The stateful component that receives a render prop can pass the data onto stateless components, which merely render the data.

---
## Cons

The issues that we tried to solve with render props, have largely been replaced by React Hooks. As Hooks changed the way we can add reusability and data sharing to components, they can replace the render props pattern in many cases.

Since we can't add lifecycle methods to a `render` prop, we can only use it on components that don't need to alter the data they receive.

---
## References
- [Render Props - React](https://reactjs.org/docs/render-props.html)
- [React, Inline Functions, and Performance - Ryan Florence](https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578)
- [Use a Render Prop! - Michael Jackson](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce)
