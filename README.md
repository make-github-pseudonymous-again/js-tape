[@aureooms/js-tape](https://make-github-pseudonymous-again.github.io/js-tape)
==

Tape library for JavaScript. Served with asynchronous goodness.
See [docs](https://make-github-pseudonymous-again.github.io/js-tape/index.html).

> :warning: The code requires `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
const stdin = fs.createReadStream( '/dev/stdin' , { encoding : 'utf8'} ) ;
const myTape = tape.fromReadStream( stdin ) ;
for await ( const character of myTape ) ... ;
```

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-tape.svg)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-tape/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-tape.svg)](https://www.npmjs.org/package/@aureooms/js-tape)
[![Build](https://img.shields.io/travis/make-github-pseudonymous-again/js-tape/main.svg)](https://travis-ci.org/make-github-pseudonymous-again/js-tape/branches)
[![Dependencies](https://img.shields.io/david/make-github-pseudonymous-again/js-tape.svg)](https://david-dm.org/make-github-pseudonymous-again/js-tape)
[![Dev dependencies](https://img.shields.io/david/dev/make-github-pseudonymous-again/js-tape.svg)](https://david-dm.org/make-github-pseudonymous-again/js-tape?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-tape.svg)](https://github.com/make-github-pseudonymous-again/js-tape/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-tape.svg)](https://www.npmjs.org/package/@aureooms/js-tape)

[![Code issues](https://img.shields.io/codeclimate/issues/make-github-pseudonymous-again/js-tape.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-tape/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/make-github-pseudonymous-again/js-tape.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-tape/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/make-github-pseudonymous-again/js-tape/main.svg)](https://codecov.io/gh/make-github-pseudonymous-again/js-tape)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/make-github-pseudonymous-again/js-tape.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-tape/trends/technical_debt)
[![Documentation](https://make-github-pseudonymous-again.github.io/js-tape/badge.svg)](https://make-github-pseudonymous-again.github.io/js-tape/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-tape)](https://bundlephobia.com/result?p=@aureooms/js-tape)
