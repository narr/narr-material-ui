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
# If you want this command, make sure that you remove node_modules from root folder first.
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

## Clean npm modules from all packages

```sh
npx lerna clean
```

## Install for CI

```sh
# Install modules which is required only for Lint and Test
npm i --no-optional
```

## Lint

```sh
npm run lint
```

## Test

```sh
npm run test
```

## Script for CI

```sh
npm run ci
```

## Commit

```sh
# Please use this script to make a commit because a commit message will be linted by commitlint.
npm run cm
```

## Lint Commit for CI

```sh
# This will run "commitlint -f=FROM_REVISION -t=TO_REVISION"
npm run ci:cmlint
```

## Generate gh-pages

```sh
# Generate gh-pages for narr-material-ui-core
npm run doc:nmui-core
```

## Build a package

```sh
# make files for publish in narr-material-ui-core
npm run build:nmui-core
```

## Publish packages

```sh
npm run pub
```

## Demo

https://narr.github.io/narr-material-ui/
