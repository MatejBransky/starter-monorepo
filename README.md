# starter-lerna

Monorepo with support for multiple packages and one app.

## Features

- ES6 support
- HMR enabled
- ESLint enabled
- Prettier-Eslint enabled for `precommit`

## Requirements

- Node.js >= 6
- Yarn >= 1

## How to use

**Instal dependencies**

```
$ yarn install
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
3.  add `pkg.source` with the path to the source folder (uncompiled code) - this ensures that Parcel compiles symlinked modules in app with HMR support
4.  add package as dependency to the app
5.  start development with `yarn start`

If you want some package dependencies to be external then include them in `pkg.peerDependencies`.

## Config

The app is built with [Parcel](https://parceljs.org/).
Packages are built with [Rollup](http://rollupjs.org) and they use single config file `rollup.config.js` in the `packages` folder.

**Babel config (`.babelrc`)**
_WIP_

### Caveats

- don't use `app` as the package name (if you really want package with name `app` then update `--ignore` in npm scripts)