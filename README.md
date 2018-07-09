# narr-material-ui

My UI components using Typescript+React+Material-UI

## Prerequisite

```sh
npm i -g npx
```

## Install

```sh
npm i
```

## Development

```sh
npm run storybook
```

## Install dependencies in all packages

```sh
npx lerna bootstrap
```

## Run a npm script in a package

```sh
npx lerna exec --scope narr-material-ui-core -- npm run storybook # run storybook in narr-material-ui-core package
npx lerna exec -- npm i # run npm i in all packages
```

## Add a dependency to packages

```sh
npx lerna add typescript --scope=package1 --dev # Install typescript in package1's devDependencies
npx lerna add typescript --dev # Install typescript in all packages's devDependencies
```

## Install for CI

```sh
# Install modules which is required only for Lint and Test
npm i --no-optional
```

## Script for CI

```sh
npm run ci
```

## Build gh-pages

```sh
# Generate gh-pages for narr-material-ui-core
npm run build:nmui-core
```

## Create a build version to publish

```sh
# Generate a build version for narr-material-ui-core
npm run publish:nmui-core
```

## Demo

https://narr.github.io/narr-material-ui/
