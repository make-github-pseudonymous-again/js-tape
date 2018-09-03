[@aureooms/js-tape](https://aureooms.github.io/js-tape)
==

Tape library for JavaScript. Served with asynchronous goodness.
See [docs](https://aureooms.github.io/js-tape/index.html).

> :warning: The code needs a ES2015+ polyfill to work (`regeneratorRuntime`),
> for instance [@babel/polyfill](https://babeljs.io/docs/usage/polyfill).

```js
const stdin = fs.createReadStream( '/dev/stdin' , { encoding : 'utf8'} ) ;
const myTape = tape.fromReadStream( stdin ) ;
for await ( const character of myTape ) ... ;
```

[![License](https://img.shields.io/github/license/aureooms/js-tape.svg)](https://raw.githubusercontent.com/aureooms/js-tape/master/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-tape.svg)](https://www.npmjs.org/package/@aureooms/js-tape)
[![Build](https://img.shields.io/travis/aureooms/js-tape/master.svg)](https://travis-ci.org/aureooms/js-tape/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-tape.svg)](https://david-dm.org/aureooms/js-tape)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-tape.svg)](https://david-dm.org/aureooms/js-tape?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-tape.svg)](https://github.com/aureooms/js-tape/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-tape.svg)](https://www.npmjs.org/package/@aureooms/js-tape)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-tape.svg)](https://codeclimate.com/github/aureooms/js-tape/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/github/aureooms/js-tape.svg)](https://codeclimate.com/github/aureooms/js-tape/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/github/aureooms/js-tape.svg)](https://codecov.io/gh/aureooms/js-tape)
[![Code coverage (clim)](https://img.shields.io/codeclimate/coverage-letter/aureooms/js-tape.svg)](https://codeclimate.com/github/aureooms/js-tape/trends/test_coverage_new_code)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-tape.svg)](https://codeclimate.com/github/aureooms/js-tape/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-tape/badge.svg)](https://aureooms.github.io/js-tape/source.html)
