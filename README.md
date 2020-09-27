[@aureooms/js-tape](https://aureooms.github.io/js-tape)
==

Tape library for JavaScript. Served with asynchronous goodness.
See [docs](https://aureooms.github.io/js-tape/index.html).

> :warning: The code requires `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

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
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-tape.svg)](https://codeclimate.com/github/aureooms/js-tape/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-tape/master.svg)](https://codecov.io/gh/aureooms/js-tape)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-tape.svg)](https://codeclimate.com/github/aureooms/js-tape/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-tape/badge.svg)](https://aureooms.github.io/js-tape/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-tape)](https://bundlephobia.com/result?p=@aureooms/js-tape)
