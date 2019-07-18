# eslint-plugin-react-interface-props

Enforce Interface when creating react components

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-react-interface-props`:

```
$ npm install eslint-plugin-react-interface-props --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-react-interface-props` globally.

## Usage

Add `react-interface-props` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["react-interface-props"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "react-interface-props/rule-name": 2
  }
}
```

## Supported Rules

- Fill in provided rules here
