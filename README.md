# eslint-plugin-react-typescript

Enforce Interface when creating react components with typescript

## Installation

```
$ npm i eslint @fabriece/eslint-plugin-react-typescript --save-dev
```

```
$ yarn add eslint @fabriece/eslint-plugin-react-typescript -D
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `@fabriece/eslint-plugin-react-typescript` globally.

## Usage

Add `@fabriece/react-typescript` to the plugins section of your `.eslintrc` configuration file.

```json
{
  "plugins": ["@fabriece/react-typescript"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "@fabriece/react-typescript/require-props-suffix": "error",
    "@fabriece/react-typescript/require-component-props-interface": "error"
  }
}
```

## Supported Rules

| Name                                                                                                   | Description                                                   |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| [`@fabriece/react-typescript/require-props-suffix`](./docs/rules/require-component-props-interface.md) | Require a props interface to be provided to a react component |
| [`@fabriece/react-typescript/require-component-props-interface`](./docs/rules/require-props-suffix.md) | Require a props interface to have a `Props` suffix            |
