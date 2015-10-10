# eslint-config-ecliptic

This ESLint config extends [Airbnb's config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

## Differences from Airbnb

### Variables

* `no-unused-vars` - reset back to the ESLint default, no options
* `no-use-before-define` - changed to a warning, added the "nofunc" option

### Best Practices

* `dot-location` - require the dot to be on the same line as the property

### Style

* `camelcase` - always require camelcase for properties
* `indent` - enable the SwitchCase option to indent case statements
* `padded-blocks` - disable this rule

### React

* `react/display-name` - require a display name
* `react/jsx-boolean-value` - require values for boolean JSX attributes
* `react/jsx-quotes` - require double quotes for JSX attributes
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

### 1.0.0

- switch to modular rules files, following eslint-config-airbnb's example
- define only what has changed, rather than defining everything
