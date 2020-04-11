# @smnielsen/prettier-config

This is the shared [Prettier](https://www.prettier.io) config for all things @smnielsen related.

## Installation

```bash
yarn add -D prettier @smnielsen/prettier-config
```

```bash
npm install --save-dev prettier @smnielsen/prettier-config
```

## Usage

To use this config as base in any of your projects, create a `.prettierrc.js` file in your project folder and add the following content:

```js
module.exports = require('@smnielsen/prettier-config')
```

**Important:** filename must be `.prettierrc.js` or `prettier.config.js` or otherwise Prettier will try to parse it as JSON or YML and will fail.

### Internet Explorer 11 Support?

If you need to support IE11 you will need the `legacy` config.

```js
module.exports = require('@smnielsen/prettier-config/legacy')
```

### Override Rules

You can override (or add) rules by extending the prettier-configuration like below.

```js
module.exports = {
  ...require('@smnielsen/prettier-config'),
  // add your overrides here
}
```

Read the Prettier docs on [sharing configurations](https://prettier.io/docs/en/configuration.html#sharing-configurations) for more info.
