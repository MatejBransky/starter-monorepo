# starter-monorepo

Monorepo with support for multiple packages and one app.

## Features

- [React](https://reactjs.org/) with [HMR](http://gaearon.github.io/react-hot-loader/) support enabled
- [ES6](https://www.robinwieruch.de/javascript-fundamentals-react-requirements/) support
- [ESLint](https://eslint.org/) enabled
- [Prettier](https://prettier.io/)-[ESLint](https://eslint.org/) enabled for `precommit`
- testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://github.com/kentcdodds/react-testing-library)
- two outputs of packages:
  - bundled to the `cjs` with [Webpack](https://webpack.js.org/)
  - compiled to ES5 code into the `lib` folder with [Babel CLI](http://babeljs.io/docs/en/babel-cli)

## Requirements

- [Node.js](http://nodejs.org/) >= 6
- [Yarn](https://yarnpkg.com/lang/en/) >= 1

## How to use

**Install dependencies**

```
$ yarn install
```

**Test:**

Once:

```
$ yarn test
```

In watch mode:

```
$ yarn tdd
```

**Start development:**

```
$ yarn start
```

It starts the server with app.

**Build all for production:**

```
$ yarn build
```

**Build packages:**

```
$ yarn build:pkg
```

**Build app:**

```
$ yarn build:app
```

**Build a new package:**

1.  create package folder in `packages/`
2.  open command line in that folder and create `package.json` (`pkg` refers to its content) with `yarn init`
3.  add `pkg.source` with the path to the source folder (uncompiled code) - this
    ensures that [Parcel compiles symlinked modules in app with HMR support](https://github.com/parcel-bundler/parcel/pull/1101)
4.  add package as dependency to the app
5.  start development with `yarn start`

If you want some package dependencies to be external ([CommonJS](https://requirejs.org/docs/commonjs.html)) then include them in `pkg.peerDependencies`.

**Install root dependencies:**

```
$ yarn add -D -W <package>
```

**Install package dependencies:**

```
$ lerna add [--scope] <package>
```

Or you can type all your deps in `package.json` and then run `yarn install`.

## Config

The app is built with [Parcel](https://parceljs.org/).
Packages are built with [Webpack](https://webpack.js.org) and [Babel CLI](https://babeljs.io/docs/en/babel-cli).
They use shared config file `webpack.config.js` in the `packages` folder and each package has custom `.babelrc`
([JSON5](https://github.com/json5/json5) format).
Tests are runned with [Jest](https://facebook.github.io/jest/).

### Caveats

- don't use `app` as the package name (if you really want package with name `app` then update `--ignore` in npm scripts and change name of app in `package.json`)
