---
# configs for document itself.
title: "📚Dictionary"
lastModified: "2022-12-28"

# field for querying only entry point notes.
isDictionary: true

# add some tags for specifying particular subjects.
tags:
  - "dictionary/react"
---
# C
## Container Components
?
> Container components, also known as smart components or ==stateful components==, are responsible for ==managing the state and logic of the application.== ChatGPT, by **_[Dan Abramov](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)_**
- May contain both presentational and container components** inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles.
- Provide the data and behavior to presentational or other container components.
- Call Flux actions and provide these as callbacks to the presentational components.

# H
## Higher Order Component
?
> Components are reusable functions that take a component as input and return a new component with enhanced functionality. They ==can be used to add common features such as logging, caching, or authorization to existing components==. ChatGPT, **_[ReactJS](https://reactjs.org/docs/higher-order-components.html)_**
- HOCs can also be used to handle [cross-cutting concerns](https://reactjs.org/docs/higher-order-components.html#use-hocs-for-cross-cutting-concerns) such as ==authentication== and ==authorization==.

# P
## Presentational Components
?
> Presentational components, also known as dumb components or ==stateless components==, are responsible for ==rendering the UI based on the props== passed to them. 
> ChatGPT, by **_[Dan Abramov](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)_** 


# R
## Render Prop Components
?
> Render Prop Components are components ==that accept a function as a prop== and ==render the output of that function.== They are ==used to share code between components== and can be used for ==features such as data fetching, state management, and event handling.== ChatGPT, **_[ReactJS](https://reactjs.org/docs/render-props.html)_**
- Render Prop Components are a flexible alternative to Higher-Order Components.
- Render Prop comopnent also be used to handle [cross-cutting-concerns](https://reactjs.org/docs/render-props.html#use-render-props-for-cross-cutting-concerns).
