# Examples

> More examples in [the test files](https://github.com/async-abstraction/tape/tree/main/test/src).


## Import

```js
import tape from '@async-abstraction/tape' ;
```


## `fromString`

```js
import {
  fromString,
  fromArray,
  fromCallable,
  fromIterable,
  fromAsyncIterable,
  fromIterator,
  fromReadStream,
} from '@async-abstraction/tape' ;
const tape = fromString( 'abracadabra' ) ;
// // OR
// const tape = fromArray( ... ) ;
// const tape = fromCallable( ... ) ;
// const tape = fromIterable( ... ) ;
// const tape = fromAsyncIterable( ... ) ;
// const tape = fromIterator( ... ) ;
// const tape = fromReadStream( ... ) ;
```


## `read` and `unread`

```js
tape.read()
  .then( character => console.log(character) ) // 'a'
  .then( () => tape.read() )
  .then( character => console.log(character) ) // 'b'
  .then( () => tape.unread('Z') )
  .then( () => tape.unread('X') )
  .then( () => tape.read() )
  .then( character => console.log(character) ) // 'X'
  .then( () => tape.read() )
  .then( character => console.log(character) ) // 'Z'
  .then( () => tape.read() )
  .then( character => console.log(character) ) // 'r'
  // ...
```
