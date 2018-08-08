[@aureooms/js-tape](https://aureooms.github.io/js-tape)
==

Tape library for JavaScript. Served with asynchronous goodness.
See [docs](https://aureooms.github.io/js-tape/index.html).

```js
import tape from '@aureooms/js-tape' ;
const myTape = tape.fromString( 'abracadabra' ) ;
// // OR
// const myTape = tape.fromArray( ... ) ;
// const myTape = tape.fromCallable( ... ) ;
// const myTape = tape.fromIterable( ... ) ;
// const myTape = tape.fromAsyncIterable( ... ) ;
// const myTape = tape.fromIterator( ... ) ;
// const myTape = tape.fromReadStream( ... ) ;

myTape.read()
      .then( character => console.log(character) ) // 'a'
      .then( () => myTape.read() )
      .then( character => console.log(character) ) // 'b'
      .then( () => myTape.unread('Z') )
      .then( () => myTape.unread('X') )
      .then( () => myTape.read() )
      .then( character => console.log(character) ) // 'X'
      .then( () => myTape.read() )
      .then( character => console.log(character) ) // 'Z'
      .then( () => myTape.read() )
      .then( character => console.log(character) ) // 'r'
      // ...
```

[![License](https://img.shields.io/github/license/aureooms/js-tape.svg)](https://raw.githubusercontent.com/aureooms/js-tape/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-tape.svg)](https://www.npmjs.org/package/@aureooms/js-tape)
[![Build status](https://img.shields.io/travis/aureooms/js-tape.svg)](https://travis-ci.org/aureooms/js-tape)
[![Dependencies status](https://img.shields.io/david/aureooms/js-tape.svg)](https://david-dm.org/aureooms/js-tape)
[![Dev dependencies status](https://img.shields.io/david/dev/aureooms/js-tape.svg)](https://david-dm.org/aureooms/js-tape?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-tape.svg)](https://github.com/aureooms/js-tape/issues)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-tape.svg)](https://www.npmjs.org/package/@aureooms/js-tape)

[![Code Climate issues](https://img.shields.io/codeclimate/issues/aureooms/js-tape.svg)](https://codeclimate.com/github/aureooms/js-tape/issues)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/github/aureooms/js-tape.svg)](https://codeclimate.com/github/aureooms/js-tape/trends/churn)
[![Coverage status](https://img.shields.io/coveralls/aureooms/js-tape.svg)](https://coveralls.io/r/aureooms/js-tape)
[![Code Climate coverage](https://img.shields.io/codeclimate/coverage-letter/aureooms/js-tape.svg)](https://codeclimate.com/github/aureooms/js-tape/trends/test_coverage_new_code)
[![Code Climate technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-tape.svg)](https://codeclimate.com/github/aureooms/js-tape/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-tape/badge.svg)](https://aureooms.github.io/js-tape/source.html)
