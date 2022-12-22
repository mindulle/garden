---
# configs for document itself.
title: "Build pages and screens"
lastModified: "2022-12-10"
visibility: "public"

# configs for annotating data to obsidian dataview plugin.
noteImportance: ⭐⭐⭐⭐⭐
noteStatus: "in progress"
noteCertanity: "certain"
noteField:
  - "develop"
  - "design"
  - "devsigner"
notePurpose:
  - "background"
  - "individual"
  - "business"
noteTimeliness:
  - "lts"

# configs for selecting tree type.
treeType:
  - "learn"
  - "expirence"
  - "ecosystem"

# configs to decide whether external contents are appropriate to me or not.
contentLevel:
  - "intermediate"
  - "professional"
contentType:
  - "text"
  - "img"
  - "video"
contentPurpose:
  - "tutorial"
  - "howto"
  - "explain"
  - "reference"
  - "realworld"

# configs for querying particular datas to specify notes which have been noted expirences related to particular subject.
# e.g. performance optimization using lighthouse in web development environments:
# tags=[#tree, #web, #lighthouse, #perfOpt]
tags:
  - "tree"
  - "storybook"
  - "test"
  - "web"
---
```toc
style: bullet
```
# Building pages with Storybook

Storybook helps you build any component, from small “atomic” components to composed pages. But as you move up the component hierarchy toward the level of pages, you end up dealing with more complexity.

There are many ways to build pages in Storybook. Here are common patterns and solutions.

-   Pure presentational pages.
-   Connected components (e.g., network requests, context, browser environment).

## Pure presentational pages

Teams at the BBC, The Guardian, and the Storybook maintainers themselves build pure presentational pages. If you take this approach, you don't need to do anything special to render your pages in Storybook.

It's straightforward to write components to be fully presentational up to the screen level. That makes it easy to show in Storybook. The idea is that you do all the messy “connected” logic in a single wrapper component in your app outside of Storybook. You can see an example of this approach in the [Data](https://storybook.js.org/tutorials/intro-to-storybook/react/en/data/) chapter of the Intro to Storybook tutorial.

The benefits:

-   Easy to write stories once components are in this form.
-   All the data for the story is encoded in the args of the story, which works well with other parts of Storybook's tooling (e.g. [controls](https://storybook.js.org/docs/react/essentials/controls)).

The downsides:

-   Your existing app may not be structured in this way, and it may be difficult to change it.
-   Fetching data in one place means that you need to drill it down to the components that use it. This can be natural in a page that composes one big GraphQL query (for instance), but other data fetching approaches may make this less appropriate.
-   It's less flexible if you want to load data incrementally in different places on the screen.

### Args composition for presentational screens

When you are building screens in this way, it is typical that the inputs of a composite component are a combination of the inputs of the various sub-components it renders. For instance, if your screen renders a page layout (containing details of the current user), a header (describing the document you are looking at), and a list (of the subdocuments), the inputs of the screen may consist of the user, document and subdocuments.

```js
// YourPage.js|jsx

import React from 'react';

import { PageLayout } from './PageLayout';
import { DocumentHeader } from './DocumentHeader';
import { DocumentList } from './DocumentList';

export function DocumentScreen({ user, document, subdocuments }) {
  return (
    <PageLayout user={user}>
      <DocumentHeader document={document} />
      <DocumentList documents={subdocuments} />
    </PageLayout>
  );
}
```

```js
// YourPage.ts|tsx

import React from 'react';

import PageLayout from './PageLayout';
import Document from './Document';
import SubDocuments from './SubDocuments';
import DocumentHeader from './DocumentHeader';
import DocumentList from './DocumentList';

export interface DocumentScreen {
  user?: {};
  document?: Document;
  subdocuments?: SubDocuments[];
}

function DocumentScreen({ user, document, subdocuments }) {
  return (
    <PageLayout user={user}>
      <DocumentHeader document={document} />
      <DocumentList documents={subdocuments} />
    </PageLayout>
  );
}
```

In such cases it is natural to use [args composition](https://storybook.js.org/docs/react/writing-stories/args#args-composition) to build the stories for the page based on the stories of the sub-components:

```js
// YourPage.stories.js|jsx

import React from 'react';

import { DocumentScreen } from './YourPage';

//👇 Imports the required stories
import * as PageLayout from './PageLayout.stories';
import * as DocumentHeader from './DocumentHeader.stories';
import * as DocumentList from './DocumentList.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'DocumentScreen',
  component: DocumentScreen,
};

const Template = (args) => <DocumentScreen {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  user: PageLayout.Simple.args.user,
  document: DocumentHeader.Simple.args.document,
  subdocuments: DocumentList.Simple.args.documents,
};
```

```ts
// YourPage.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DocumentScreen } from './YourPage';

import PageLayout from './PageLayout.stories';
import DocumentHeader from './DocumentHeader.stories';
import DocumentList from './DocumentList.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'DocumentScreen',
  component: DocumentScreen,
} as ComponentMeta<typeof DocumentScreen>;


const Template: ComponentStory<typeof DocumentScreen> = (args) => <DocumentScreen {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  user: PageLayout.Simple.args.user,
  document: DocumentHeader.Simple.args.document,
  subdocuments: DocumentList.Simple.args.documents,
};
```

This approach is beneficial when the various subcomponents export a complex list of different stories. You can pick and choose to build realistic scenarios for your screen-level stories without repeating yourself. Your story maintenance burden is minimal by reusing the data and taking a Don't-Repeat-Yourself(DRY) philosophy.

## Mocking connected components

If you need to render a connected component in Storybook, you can mock the network requests to fetch its data. There are various layers in which you can do that.

### Mocking providers

If you are using a provider that supplies data via the context, you can wrap your story in a decorator that provides a mocked version of that provider. For example, in the [Screens](https://storybook.js.org/tutorials/intro-to-storybook/react/en/screen/) chapter of the Intro to Storybook tutorial, we mock a Redux provider with mock data.

### Mocking API Services

Connected applications such as Twitter, Instagram, amongst others, are everywhere, consuming data either from REST or GraphQL endpoints. If you're working in an application that relies on either of these data providers, you can add Mock Service Worker (MSW) via [Storybook's MSW addon](https://storybook.js.org/addons/msw-storybook-addon) to mock data alongside your app and stories.

[Mock Service Worker](https://mswjs.io/) is an API mocking library. It relies on service workers to capture network requests and provides mocked data in response. The MSW addon adds this functionality into Storybook, allowing you to mock API requests in your stories.

#### Mocking REST requests with MSW addon

If you're working with pure presentational screens, adding stories through [args composition](https://storybook.js.org/docs/react/writing-stories/parameters#args-composition-for-presentational-screens) is recommended. You can easily encode all the data via [args](https://storybook.js.org/docs/react/writing-stories/args), removing the need for handling it with "wrapper components". However, this approach loses its flexibility if the screen's data is retrieved from a RESTful endpoint within the screen itself. For instance, if your screen had a similar implementation to retrieve a list of documents:

```js
// YourPage.js|jsx|ts|tsx

import React, { useState, useEffect } from 'react';

import { PageLayout } from './PageLayout';
import { DocumentHeader } from './DocumentHeader';
import { DocumentList } from './DocumentList';

// Example hook to retrieve data from an external endpoint
function useFetchData() {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);
  useEffect(() => {
    setStatus('loading');
    fetch('https://your-restful-endpoint')
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => {
        setStatus('success');
        setData(data);
      })
      .catch(() => {
        setStatus('error');
      });
  }, []);
  return {
    status,
    data,
  };
}
export function DocumentScreen() {
  const { status, data } = useFetchData();

  const { user, document, subdocuments } = data;

  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  if (status === 'error') {
    return <p>There was an error fetching the data!</p>;
  }
  return (
    <PageLayout user={user}>
      <DocumentHeader document={document} />
      <DocumentList documents={subdocuments} />
    </PageLayout>
  );
}
```

To test your screen with the mocked data, you could write a similar set of stories:

```js
// YourPage.stories.js|jsx|ts|tsx

import React from 'react';

import { rest } from 'msw';

import { DocumentScreen } from './YourPage';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'DocumentScreen',
  component: DocumentScreen,
};

//👇The mocked data that will be used in the story
const TestData = {
  user: {
    userID: 1,
    name: 'Someone',
  },
  document: {
    id: 1,
    userID: 1,
    title: 'Something',
    brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    status: 'approved',
  },
  subdocuments: [
    {
      id: 1,
      userID: 1,
      title: 'Something',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
    {
      id: 2,
      userID: 1,
      title: 'Something else',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'awaiting review',
    },
    {
      id: 3,
      userID: 2,
      title: 'Another document',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
    {
      id: 4,
      userID: 2,
      title: 'Something',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
  ],
};

const PageTemplate = () => <DocumentScreen />;

export const MockedSuccess = PageTemplate.bind({});
MockedSuccess.parameters = {
  msw: [
    rest.get('https://your-restful-endpoint/', (_req, res, ctx) => {
      return res(ctx.json(TestData));
    }),
  ],
};

export const MockedError = PageTemplate.bind({});
MockedError.parameters = {
  msw: [
    rest.get('https://your-restful-endpoint', (_req, res, ctx) => {
      return res(ctx.delay(800), ctx.status(403));
    }),
  ],
};
```

💡 This example details how you can mock the REST request with fetch. Similar HTTP clients such as [axios](https://axios-http.com/) can be used as well.

The mocked data (i.e., `TestData`) will be injected via [parameters](https://storybook.js.org/docs/react/writing-stories/parameters), enabling you to configure it per-story basis.

#### Mocking GraphQL queries with MSW addon

In addition to mocking RESTful requests, the other noteworthy feature of the [MSW addon](https://msw-sb.vercel.app/?path=/story/guides-introduction--page) is the ability to mock incoming data from any of the mainstream [GraphQL](https://www.apollographql.com/docs/react/integrations/integrations/) clients (e.g., [Apollo Client](https://www.apollographql.com/docs/), [URQL](https://formidable.com/open-source/urql/) or [React Query](https://react-query.tanstack.com/)). For instance, if your screen retrieves the user's information and a list of documents based on a query result, you could have a similar implementation:

```js
// YourPage.js|jsx|ts|tsx

import React from 'react';

import { useQuery, gql } from '@apollo/client';

import { PageLayout } from './PageLayout';
import { DocumentHeader } from './DocumentHeader';
import { DocumentList } from './DocumentList';

const AllInfoQuery = gql`
  query AllInfo {
    user {
      userID
      name
    }
    document {
      id
      userID
      title
      brief
      status
    }
    subdocuments {
      id
      userID
      title
      content
      status
    }
  }
`;

function useFetchInfo() {
  const { loading, error, data } = useQuery(AllInfoQuery);

  return { loading, error, data };
}

export function DocumentScreen() {
  const { loading, error, data } = useFetchInfo();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There was an error fetching the data!</p>;
  }

  return (
    <PageLayout user={data.user}>
      <DocumentHeader document={data.document} />
      <DocumentList documents={data.subdocuments} />
    </PageLayout>
  );
}
```

To test your screen with the GraphQL mocked data, you could write the following stories:

```js
// YourPage.stories.js|jsx|ts|tsx

import React from 'react';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { graphql } from 'msw';

import { DocumentScreen } from './YourPage';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'DocumentScreen',
  component: DocumentScreen,
};

const mockedClient = new ApolloClient({
  uri: 'https://your-graphql-endpoint',
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});

//👇The mocked data that will be used in the story
const TestData = {
  user: {
    userID: 1,
    name: 'Someone',
  },
  document: {
    id: 1,
    userID: 1,
    title: 'Something',
    brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    status: 'approved',
  },
  subdocuments: [
    {
      id: 1,
      userID: 1,
      title: 'Something',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
    {
      id: 2,
      userID: 1,
      title: 'Something else',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'awaiting review',
    },
    {
      id: 3,
      userID: 2,
      title: 'Another document',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
    {
      id: 4,
      userID: 2,
      title: 'Something',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
  ],
};

const PageTemplate = () => (
  <ApolloProvider client={mockedClient}>
    <DocumentScreen />
  </ApolloProvider>
);

export const MockedSuccess = PageTemplate.bind({});
MockedSuccess.parameters = {
  msw: [
    graphql.query('AllInfoQuery', (req, res, ctx) => {
      return res(ctx.data(TestData));
    }),
  ],
};

export const MockedError = PageTemplate.bind({});
MockedError.parameters = {
  msw: [
    graphql.query('AllInfoQuery', (req, res, ctx) => {
      return res(
        ctx.delay(800),
        ctx.errors([
          {
            message: 'Access denied',
          },
        ])
      );
    }),
  ],
};
```

### Mocking imports

It is also possible to mock imports directly, as you might in a unit test, using Webpack’s aliasing. It's advantageous if your component makes network requests directly with third-party libraries.

We're going to use [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch) as an example.

Inside a directory called `__mocks__`, create a new file called `isomorphic-fetch.js` with the following code:

```
// __mocks__/isomorphic-fetch.js

// Your fetch implementation to be added to ./storybook/main.js.
// In your webpackFinal configuration object.

let nextJson;
export default async function fetch() {
  if (nextJson) {
    return {
      json: () => nextJson,
    };
  }
  nextJson = null;
}

// The decorator to be used in ./storybook/preview to apply the mock to all stories

export function decorator(story, { parameters }) {
  if (parameters && parameters.fetch) {
    nextJson = parameters.fetch.json;
  }
  return story();  
}
```

The code above creates a decorator which reads story-specific data off the story's [parameters](https://storybook.js.org/docs/react/writing-stories/parameters), enabling you to configure the mock on a per-story basis.

To use the mock in place of the real import, we use [webpack aliasing](https://webpack.js.org/configuration/resolve/#resolvealias):

```js
// .storybook/main.js

module.exports = {
  // Your Storybook configuration

  webpackFinal: async (config) => {
    config.resolve.alias['isomorphic-fetch'] = require.resolve('../__mocks__/isomorphic-fetch.js');
    return config;
  },
};
```

Add the decorator you've just implemented to your [storybook/preview.js](https://storybook.js.org/docs/react/configure/overview#configure-story-rendering):

```js
// .storybook/preview.js

import { decorator } from '../__mocks__/isomorphic-fetch';

// Add the decorator to all stories
export const decorators = [decorator];
```

Finally, we can set the mock values in a specific story. Let's borrow an example from this [blog post](https://medium.com/@edogc/visual-unit-testing-with-react-storybook-and-fetch-mock-4594d3a281e6):

```js
// App.stories.js|jsx

import React from 'react';

import App from './App';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'App',
  component: App,
};

const Template = (ags) => <App />;

export const Success = Template.bind({});
Success.parameters = {
  fetch: {
    json: {
      JavaScript: 3390991,
      'C++': 44974,
      TypeScript: 15530,
      CoffeeScript: 12253,
      Python: 9383,
      C: 5341,
      Shell: 5115,
      HTML: 3420,
      CSS: 3171,
      Makefile: 189,
    }
  }
};
```

```ts
// App.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import App from './App';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'App',
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App />;

export const Success = Template.bind({});
Success.parameters = {
  fetch: {
    json: {
      JavaScript: 3390991,
      'C++': 44974,
      TypeScript: 15530,
      CoffeeScript: 12253,
      Python: 9383,
      C: 5341,
      Shell: 5115,
      HTML: 3420,
      CSS: 3171,
      Makefile: 189,
    }
  }
};
```

### Specific mocks

Another mocking approach is to use libraries that intercept calls at a lower level. For instance, you can use [`fetch-mock`](https://www.npmjs.com/package/fetch-mock) to mock fetch requests specifically.

Like the [import mocking](https://storybook.js.org/docs/react/writing-stories/parameters##mocking-imports) above, once you have a mock, you’ll still want to set the return value of the mock per-story basis. Do this in Storybook with a [decorator](https://storybook.js.org/docs/react/writing-stories/decorators) that reads the story's [parameters](https://storybook.js.org/docs/react/writing-stories/parameters).

### Avoiding mocking dependencies

It's possible to avoid mocking the dependencies of connected "container" components entirely by passing them around via props or React context. However, it requires a strict split of the container and presentational component logic. For example, if you have a component responsible for data fetching logic and rendering DOM, it will need to be mocked as previously described.

It’s common to import and embed container components amongst presentational components. However, as we discovered earlier, to render them within Storybook, we’ll likely have to mock their dependencies or the imports themselves.

Not only can this quickly grow to become a tedious task, but it’s also challenging to mock container components that use local states. So, instead of importing containers directly, a solution to this problem is to create a React context that provides the container components. It allows you to freely embed container components as usual, at any level in the component hierarchy without worrying about subsequently mocking their dependencies; since we can swap out the containers themselves with their mocked presentational counterpart.

We recommend dividing context containers up over specific pages or views in your app. For example, if you had a `ProfilePage` component, you might set up a file structure as follows:

```
ProfilePage.js
ProfilePage.stories.js
ProfilePageContainer.js
ProfilePageContext.js
```

It’s also often helpful to set up a “global” container context (perhaps named `GlobalContainerContext`) for container components that may be rendered on every page of your app and adding them to the top level of your application. While it’s possible to place every container within this global context, it should only provide globally required containers.

Let’s look at an example implementation of this approach.

First, create a React context, and name it `ProfilePageContext`. It does nothing more than export a React context:

```
// ProfilePageContext.js | ProfilePageContext.jsx

import { createContext } from 'react';

const ProfilePageContext = createContext();

export default ProfilePageContext;
```

`ProfilePage` is our presentational component. It will use the `useContext` hook to retrieve the container components from `ProfilePageContext`:

```
// ProfilePage.js|jsx

import { useContext } from 'react';

import ProfilePageContext from './ProfilePageContext';

export const ProfilePage = ({ name, userId }) => {
  const { UserPostsContainer, UserFriendsContainer } = useContext(ProfilePageContext);

  return (
    <div>
      <h1>{name}</h1>
      <UserPostsContainer userId={userId} />
      <UserFriendsContainer userId={userId} />
    </div>
  );
};
```

#### Mocking containers in Storybook

In the context of Storybook, instead of providing container components through context, we’ll instead provide their mocked counterparts. In most cases, the mocked versions of these components can often be borrowed directly from their associated stories.

```js
// ProfilePage.stories.js|jsx

import React from 'react';

import { ProfilePage } from './ProfilePage';
import { UserPosts } from './UserPosts';

//👇 Imports a specific story from a story file
import { normal as UserFriendsNormal } from './UserFriends.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ProfilePage',
  component: ProfilePage,
};

const ProfilePageProps = {
  name: 'Jimi Hendrix',
  userId: '1',
};

const context = {
  //👇 We can access the `userId` prop here if required:
  UserPostsContainer({ userId }) {
    return <UserPosts {...UserPostsProps} />;
  },
  // Most of the time we can simply pass in a story.
  // In this case we're passing in the `normal` story export
  // from the `UserFriends` component stories.
  UserFriendsContainer: UserFriendsNormal,
};

export const normal = () => {
  return (
    <ProfilePageContext.Provider value={context}>
      <ProfilePage {...ProfilePageProps} />
    </ProfilePageContext.Provider>
  );
};
```

If the same context applies to all `ProfilePage` stories, we can also use a [decorator](https://storybook.js.org/docs/react/writing-stories/decorators).

#### Providing containers to your application

Now, in the context of your application, you’ll need to provide `ProfilePage` with all of the container components it requires by wrapping it with `ProfilePageContext.Provider`:

For example, in Next.js, this would be your `pages/profile.js` component.

```js
// pages/profile.js|jsx

import React from 'react';

import ProfilePageContext from './ProfilePageContext';
import { ProfilePageContainer } from './ProfilePageContainer';
import { UserPostsContainer } from './UserPostsContainer';
import { UserFriendsContainer } from './UserFriendsContainer';

//👇 Ensure that your context value remains referentially equal between each render.
const context = {
  UserPostsContainer,
  UserFriendsContainer,
};

export const AppProfilePage = () => {
  return (
    <ProfilePageContext.Provider value={context}>
      <ProfilePageContainer />
    </ProfilePageContext.Provider>
  );
};
```

#### Mocking global containers in Storybook

If you’ve set up `GlobalContainerContext`, you’ll need to set up a decorator within Storybook’s `preview.js` to provide context to all stories. For example:

```js
// .storybook/preview.js

import React from 'react';

import { normal as NavigationNormal } from '../components/Navigation.stories';

import GlobalContainerContext from '../components/lib/GlobalContainerContext';

const context = {
  NavigationContainer: NavigationNormal,
};

const AppDecorator = (storyFn) => {
  return (
    <GlobalContainerContext.Provider value={context}>{storyFn()}</GlobalContainerContext.Provider>
  );
};

addDecorator(AppDecorator);
```

<a href="https://github.com/storybookjs/storybook/tree/next/docs/writing-stories/build-pages-with-storybook.md" target="_blank" rel="noopener" class="e1soj9vu1 e1ja7avb2 css-1ii1tfm e1ja7avb1"><span class="css-1xdhyk6 e1ja7avb3"><span role="img" aria-label="write">✍️</span> Edit on GitHub – PRs welcome!</span></a>

