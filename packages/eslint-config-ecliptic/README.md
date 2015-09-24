# eslint-config-ecliptic

*Note: The markdown files here have not yet been updated, but the eslint config
 has. Check back soon to see the documentation. Thanks!*

This package provides Ecliptic's .eslintrc as an extensible shared config. It
is a fork of Airbnb's [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb).
Thanks, Airbnb!

## Usage

### With React Style

1. `npm install --save-dev eslint-config-ecliptic babel-eslint eslint-plugin-react`
2. add `"extends": "ecliptic"` to your .eslintrc

### Without React Style

1. `npm install --save-dev eslint-config-ecliptic babel-eslint `
2. add `"extends": "ecliptic/base"` to your .eslintrc

See [Ecliptic's Javascript styleguide](https://github.com/eclipticdev/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like
anything involving regexes. Perhaps in a distant future, we could use literate
programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.

## Changelog

### 0.0.8
 - now has a changelog
 - now is modular (see instructions above for with react and without react versions)
