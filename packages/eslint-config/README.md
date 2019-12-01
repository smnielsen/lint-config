# @smnielsen/eslint-config

A shared [ESLint](https://eslint.org) config for @smnielsen. Rules are carefully selected to be as restrictive as necessary but no more. This config aims to reduce bugs and cause as much consistency as possible in a codebase while keeping the code readable even for not-so-experienced developers.

## Installation

### Get started by running this command in the root of your project:

```sh
yarn add -D eslint @smnielsen/eslint-config
```

or use npm

```sh
npm install --save-dev eslint @smnielsen/eslint-config
```

### Then add an `.eslintrc.json` file with the following content to the root of your project:

```json
{
  "extends": ["@smnielsen/eslint-config"]
}
```

Add linting for React/JSX

```json
{
  "extends": ["@smnielsen", "@smnielsen/eslint-config/react"]
}
```

If you're using Prettier as well, use this to run with prettier.
Make sure the prettier config always is last

```json
{
  "extends": ["@smnielsen", "@smnielsen/eslint-config/prettier"]
}
```

Add linting for Node.js:

```json
{
  "extends": ["@smnielsen", "@smnielsen/eslint-config/node"]
}
```

If you want to use TypeScript, that's fine:

```json
{
  "extends": ["@smnielsen", "@smnielsen/eslint-config/typescript"]
}
```

Or use them all at once:

```json
{
  "extends": [
    "@smnielsen",
    "@smnielsen/eslint-config/node",
    "@smnielsen/eslint-config/react",
    "@smnielsen/eslint-config/typescript",
    "@smnielsen/eslint-config/prettier"
  ]
}
```

For more information see: http://eslint.org/docs/user-guide/configuring
