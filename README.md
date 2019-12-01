# @smnielsen - lint-configurations

This repository holds lint configurations with some default rules based on my own preferences

- [eslint-config](https://github.com/smnielsen/smn-linting/tree/master/packages/eslint-config)

- [prettier-config](https://github.com/smnielsen/smn-linting/tree/master/packages/prettier-config)

## Installation and Usage

```
$ yarn add eslint @smnielsen/eslint-config prettier @smnielsen/prettier-config -D
```

**.eslintrc.js**

```
module.exports = {
  extends: [
    '@smnielsen/eslint-config',
    '@smnielsen/eslint-config/node',
    '@smnielsen/eslint-config/prettier'
  ]
}
```

**.prettierrc.js**

```
module.exports = require('@smnielsen/prettier-config')
```

**package.json**

```
"scripts": {
  "eslint": "eslint 'src/**/*.{js,jsx}'",
  "prettier": "prettier src/**/*.{js,md}",
  "lint": "yarn run eslint && yarn run prettier -l",
  "lint:fix": "yarn run eslint --fix && yarn run prettier --write",
  ....
}
```

### Pre-Commit hook

Use Husky + lint-staged to setup pre-commit hook for always keeping lint files in your development.

1. Install : `$ yarn add husky lint-staged -D`
2. add to `package.json`

```
"lint-staged": {
  "**/*.{js,jsx}": [
    "yarn run lint:fix",
    "git add"
  ],
  "**/*.{md,scss,css}": [
    "yarn run prettier --write",
    "git add"
  ]
},
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
}
```

## Development

### Install and bootstrap monorepo

```
$ yarn install
$ yarn run bootstrap
```

Note: Root ESLint and Prettier configs point to the packages implementations

### Test lint configurations

```
$ yarn run lint
$ yarn run lint:fix
```

## Publishing new Version

This repository is based on [Lerna](https://github.com/lerna/lerna) which is a tool for monorepos. It is used for deployment and development.

NOTE: Publishing to NPM requires a publish token, this is setup in bitbucket pipelines so any package can only be released after merge to master.

1. Check what will be the next version for your packages
2. Update the changelog `CHANGELOG.md` for each package
3. Push changes to repository
4. Publish to NPM by running `$ make publish`.
