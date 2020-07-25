[![eslint: airbnb](https://img.shields.io/badge/eslint-airbnb-blue.svg)](https://github.com/airbnb/javascript)
[![prettier](https://img.shields.io/badge/-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
## A Meteor 1.10, React 16, React Router 5, Material UI 4 template

Based off the official meteor scaffolding, with accounts and a demo collection that persists on signin/signout.

Current routes setup:

- landing (default logged out route)
- signin
- signup
- profile
- recover-password
- reset-password
- terms-of-use
- privacy-policy
- not-found

## Quick start
Clone repository:
```
git clone git@gitlab.com:johnner/meteor-react-material-template.git
```
Install packages:
```
meteor npm install
```
Start Meteor:
```
meteor npm run start
```

Navigate to [http://localhost:3000](http://localhost:3000) in any browser.


## Routing and redirects
React Router 5 `props` are accessible in every top level 'page' component. This allows any page to access react router's 'redirect' functions and url params, etc. These values can be passed onto any further components or React Router hooks can be used.

## Folder structure

The folder structure is modular, developer friendly, easy to navigate and follows the import structure of the official Meteor docs.

### Pages
Each 'route' is represented by a folder in the 'pages' directory. Most data fetching is done at this top page level. These pages are the 'smart' or 'container' components. They fetch data and pass it as props to presentational components.

### Components
Reusable components in the 'components' directory are 'dumb' or ''presentational' components. These are mostly functional, stateless components. If a component requires data, it is passed as props from it's page component.

*Note:* The Meteor `useTracker` hook can also fetch data in any sub component (if needed).

### Styling

[Material UI](https://material-ui.com/) is used to create a top level style theme.

The theme is accessible in each React component and used for consistent styling (colors, padding, border, etc.). The `@material-ui` package is used for [CSS normalization](https://material-ui.com/style/css-baseline/), responsive grid and layout. Material UI [components](https://material-ui.com/demos/app-bar/) are used including navbars, forms, modals, inputs, buttons, etc.

### API
The 'api' folder contains 1 folder per collection (all methods and publications for each endpoint are exclusive to each folder). This makes it easy to maintain each collection endpoint. All collections use `aldeed:collection2` to enable schema validation on inserts. Both collections and methods use `simpl-schema` to validate parameters.

#### Methods
Methods use MDG's [mdg:validated-method](https://atmospherejs.com/mdg/validated-method). The benefits of validated methods over regular Meteor methods are listed here: [https://atmospherejs.com/mdg/validated-method#benefits-of-validatedmethod](https://atmospherejs.com/mdg/validated-method#benefits-of-validatedmethod)

##### Validated Method Mixins:

The following mixins are used:

- [didericis:callpromise-mixin](https://atmospherejs.com/didericis/callpromise-mixin) is used to return a promise to the client instead of a callback. Async/await code is used on the client for handling methods.

- [lacosta:method-hooks](https://atmospherejs.com/lacosta/method-hooks) provides before and after hooks when methods are called.

- [tunifight:loggedin-mixin](https://atmospherejs.com/tunifight/loggedin-mixin) is used to only allow logged-in users to call methods and uses `alanning:roles` to check the user has the correct role privileges to call the method.

## Roles
Basic roles are defined using `alanning:roles`.

The first user created is assigned the 'admin' role. Subsequent users are assigned the 'user' role. These roles can be used to give special access to server publications, render conditional UI and prevent unauthorized users from accessing server methods.

## Testing

### Unit tests
Jest and React Testing Library are used for unit testing React components.

To run unit tests:

```
npm run test:unit
```

### Server tests
Mocha and Chai are used to test Meteor server collections, methods and publications.

To run server tests:

```
npm run test:server
```

### E2E tests
Cypress is used for end-to-end testing.

To run e2e tests:

```
npm run test:e2e
```

These tests appear live in-browser for debugging.

### CI
CircleCI is used for continuous integration

To run CI tests:

```
npm run test:e2e:ci
```

These tests run in headless mode.

## ESLint

ESLint is used with `plugin:prettier/recommended` to enforce consistent styling.

To format files using prettier:
```
npm run prettier
```

This will update files in the 'imports', 'client' and 'server' folders using prettier style presets.

## Connecting this template to an existing meteor backend
A ddp connection can be made to an existing meteor server, following steps in [Meteor's official docs](https://docs.meteor.com/api/connections.html#DDP-connect)

The ddp connection enables access to the existing server's methods, collections and publications.

**Links**:

[Splitting into multiple Meteor apps](https://guide.meteor.com/structure.html#splitting-your-app)

[Meteor multi app accounts](https://github.com/tmeasday/multi-app-accounts)

<!-- **npm packages added**:

- @babel/runtime (updated to work with latest meteor)
- bcrypt
- meteor-node-stubs
- prop-types
- react
- react-dom
- react-router-dom
- autoprefixer
- prettier
- simpl-schema
- recompose
- jest

**Meteor packages added**:

- react-meteor-data       (provides HOCs to fetch data reactively from collections using `withTracker`)
- accounts-password
- alanning:roles
- mdg:validated-method
- aldeed:collection2@3.0.0
- matb33:collection-hooks
- msavin:mongol
- fourseven:scss          (sass/css support in .scss files)
- juliancwirko:postcss    (enables autoprefxer)
- browser-policy          (restrict allowed origins for added security)
- fortawesome:fontawesome (icons)
- mizzao:user-status -->

## What is not included?
There is no state management such as [Redux](https://github.com/reactjs/redux) or [MobX](https://github.com/mobxjs/mobx). This is partly because this template is so small and state is locally managed in components as needed. Also the Meteor collections reactively update the UI when changed. However, any state management tool can be easily added to the top level App component to provide a global store.
