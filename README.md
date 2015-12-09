# eslint-config-ecliptic

This ESLint config extends [Airbnb's config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

## Differences from Airbnb

### Variables

* `no-unused-vars` - reset back to the ESLint default, no options
* `no-use-before-define` - changed to a warning, added the "nofunc" option

### Best Practices

* `dot-location` - require the dot to be on the same line as the property
* `no-unused-expressions` - allow the use of expressions in statement position

### Style

* `camelcase` - always require camelcase for properties
* `no-unexpected-multiline` - prevent problems when not using semicolons
* `padded-blocks` - disable this rule
* `semi` - this is the big one - never use semicolons!

### React

* `react/jsx-boolean-value` - require values for boolean JSX attributes
* `react/jsx-sort-prop-types` - require propTypes to be sorted alphabetically
* `react/jsx-sort-props` - require props to be sorted alphabetically

## Usage

We export two ESLint configurations for your usage.

### eslint-config-ecliptic

Our default export contains all of our ESLint rules, including EcmaScript 6+
and React. It requires `eslint`, `babel-eslint`, and `eslint-plugin-react`.

1. `npm install --save-dev eslint-config-ecliptic babel-eslint eslint-plugin-react eslint`
2. add `"extends": "ecliptic"` to your .eslintrc

### eslint-config-ecliptic/base

Lints ES6+ but does not lint React. Requires `eslint` and `babel-eslint`.

1. `npm install --save-dev eslint-config-ecliptic babel-eslint eslint`
2. add `"extends": "ecliptic/base"` to your .eslintrc

## Changelog

### 1.4.0

- remove `indent` and `react/jsx-quotes` because they match airbnb now

### 1.3.0

- allow the use of expressions in statement position

### 1.2.0

- no more displayName on React components

### 1.1.0

- no more semicolons!
- fix a typo in the base config

### 1.0.0

- switch to modular rules files, following eslint-config-airbnb's example
- define only what has changed, rather than defining everything
