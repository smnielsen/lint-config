# @smnielsen/eslint-config

A shared [ESLint](https://eslint.org) config for @smnielsen. Rules are carefully selected to be as restrictive as necessary but no more. This config aims to reduce bugs and cause as much consistency as possible in a codebase while keeping the code readable even for not-so-experienced developers.

## Installation

Depending which linting you want to run you need to install different set of plugins. This module will not force install any dependencies.

### To start install the base that always is required

```sh
yarn add -D eslint @smnielsen/eslint-config 
```

### Then add an `.eslintrc.json` file with the following content to the root of your project and install dependencies

```json
{
  "extends": ["@smnielsen/eslint-config"]
}
```

#### Add linting for React/JSX

```json
{
  "extends": ["@smnielsen", "@smnielsen/eslint-config/react"]
}
```

##### Install plugins

```terminal
yarn add -D eslint-plugin-react eslint-config-react-app eslint-config-prettier eslint-plugin-jsx-a11y eslint-plugin-react-hooks babel-eslint eslint-plugin-flowtype react
```


#### Add linting for Vue

```json
{
  "extends": ["@smnielsen", "@smnielsen/eslint-config/vue"]
}
```

##### Install plugins

```terminal
yarn add -D vue @vue/eslint-config-prettier eslint-plugin-jsx-a11y
```

#### Add linting with Prettier

If you're using Prettier as well, use this to run with prettier.
Make sure the prettier config always is last

```json
{
  "extends": ["@smnielsen", "@smnielsen/eslint-config/prettier"]
}
```

##### Install plugins

```terminal
yarn add -D eslint-config-prettier
```

#### Add linting with TypeScript

If you want to use TypeScript, that's fine:

```json
{
  "extends": ["@smnielsen", "@smnielsen/eslint-config/typescript"]
}
```

##### Install plugins

```terminal
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript
```

### If you use Mocha+Chai instead of Jest

#### Add linting for Mocha and Chai:

```json
{
  "extends": ["@smnielsen", "@smnielsen/eslint-config/mocha"]
}
```

##### Install plugins

```terminal
yarn add -D eslint-plugin-mocha eslint-plugin-chai-expect eslint-plugin-chai-friendly
```

### Application Ready Examples

#### React + Typescript + Prettier

```json
{
  "extends": [
    "@smnielsen",
    "@smnielsen/eslint-config/react",
    "@smnielsen/eslint-config/typescript",
    "@smnielsen/eslint-config/prettier"
  ]
}
```

##### Install plugins

```terminal
yarn add -D eslint-plugin-react eslint-config-react-app eslint-config-prettier eslint-plugin-jsx-a11y eslint-plugin-react-hooks babel-eslint eslint-plugin-flowtype react eslint-config-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript
```

#### Vue + Typescript + Prettier

```json
{
  "extends": [
    "@smnielsen",
    "@smnielsen/eslint-config/vue",
    "@smnielsen/eslint-config/typescript",
    "@smnielsen/eslint-config/prettier"
  ]
}
```

##### Install plugins

```terminal
yarn add -D vue @vue/eslint-config-prettier eslint-config-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript
```

For more information see: http://eslint.org/docs/user-guide/configuring
