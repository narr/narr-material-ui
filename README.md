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

## Add a dependency to packages

```sh
npx lerna add typescript --scope=package1 --dev # Install typescript in package1's devDependencies
npx lerna add typescript --dev # Install typescript in all packages's devDependencies
```

## Build gh-pages

```sh
// Generate gh-pages for narr-material-ui-core
npm run build:nmui-core
```

## Create a build version to publish

```sh
// Generate a build version for narr-material-ui-core
npm run publish:nmui-core
```

## Demo

https://narr.github.io/narr-material-ui/
