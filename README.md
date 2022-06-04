# aceDavon-bugs-management-app-react-redux

Bugs management for integration with react apps

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

#### @reduxjs/toolkit

consist of few libraries

- redux (core library, state management)
- immer (allows state mutations)
- redux-thunk (simplles and handles async functions)
- reselect (simplifes reducer logic)

## extras

- redux devtools
- combine reducers

## react-redux

- connects our app to redux store

## Setup redux store

- create store.js

```js

import { configureStore } from "@reduxjs/toolkit

export default const Store = configureStore({
    reducers: {

    }
});

```

## Connect store to app

- index.js

```js
import { Store } from "./Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider Store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

## Create App features

- Create Features folder
- Create /features/bugs/bugSlice.js
  -create /features/bug/bugContainer.js
  -create /features/bugs/bugitem.js
  -create Services folder
  -create /services/userAPI.js

## bugSlice

- Initializes state to default values,
- Create bugslice and pass initial state, reducers and name keys to a create Slice function from @reduxjs/toolkit,
- Export the bugslice.reducer function automatically generated

```js
import { createSlice } from @reduxjs/toolkit
import { bugItems } from ../bugItems.js

const initialId = 0;
const qty = bugItems.length
const initialState = {
  id: ++initialId,
  resolve: false,
  bug: [],
  qty,
}

const bugSlice = createSlice({
  name: "bugs",
  initialState,
  reducer,
});

export default bugSlice.reducer;
```

## bugcontainer

- Destructures bug, qty from state data
- Checks for qty < 1 and display an empty store notification else maps through the destructured bug array and pass props to bugitem component for render.

# userSlice

- Initializes state to default values,
- Create Userslice and pass initial state, reducers and name keys to a create Slice function from @reduxjs/toolkit,
- Export the userslice.reducer function automatically generated

```js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  isloggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers,


```

## userContainer

- Make an async fetch request to API for users ans set local state with return data,
- render a minimal UI and pass the state to a authenticating component.
- Upon authentication, user should see total issues, who added them and the time they were added as well as navigate to their own dashboards to see their own issues they added and track them.

## services/userAPI

- Create a userAPI function and pass a reducer path, baseQuery to fetchBasequery
  with a baseUrl key assigned a base API url, define endpoints on the API with appropriate keys and values,
- Export an automatically generated API key,
- Add a reducer.path key with the userAPI reducer as value in the store

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
