:vhs:
[@async-abstraction/tape](https://async-abstraction.github.io/tape)
==

Tape library for JavaScript. Served with asynchronous goodness.
See [docs](https://async-abstraction.github.io/tape/index.html).

> :warning: The code requires `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import { fromReadStream } from '@async-abstraction/tape' ;
const stdin = fs.createReadStream( '/dev/stdin' , { encoding : 'utf8'} ) ;
const tape = fromReadStream( stdin ) ;
for await ( const character of tape ) ... ;
```

[![License](https://img.shields.io/github/license/async-abstraction/tape.svg)](https://raw.githubusercontent.com/async-abstraction/tape/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@async-abstraction/tape.svg)](https://www.npmjs.org/package/@async-abstraction/tape)
[![Tests](https://img.shields.io/github/workflow/status/async-abstraction/tape/ci:test?event=push&label=tests)](https://github.com/async-abstraction/tape/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/david/async-abstraction/tape.svg)](https://david-dm.org/async-abstraction/tape)
[![Dev dependencies](https://img.shields.io/david/dev/async-abstraction/tape.svg)](https://david-dm.org/async-abstraction/tape?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/async-abstraction/tape.svg)](https://github.com/async-abstraction/tape/issues)
[![Downloads](https://img.shields.io/npm/dm/@async-abstraction/tape.svg)](https://www.npmjs.org/package/@async-abstraction/tape)

[![Code issues](https://img.shields.io/codeclimate/issues/async-abstraction/tape.svg)](https://codeclimate.com/github/async-abstraction/tape/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/async-abstraction/tape.svg)](https://codeclimate.com/github/async-abstraction/tape/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/async-abstraction/tape/main.svg)](https://codecov.io/gh/async-abstraction/tape)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/async-abstraction/tape.svg)](https://codeclimate.com/github/async-abstraction/tape/trends/technical_debt)
[![Documentation](https://async-abstraction.github.io/tape/badge.svg)](https://async-abstraction.github.io/tape/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@async-abstraction/tape)](https://bundlephobia.com/result?p=@async-abstraction/tape)
