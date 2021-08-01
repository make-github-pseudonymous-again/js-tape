# Examples

> More examples in [the test files](https://github.com/async-abstraction/tape/tree/main/test/src).


## Import

```js
import tape from '@async-abstraction/tape' ;
```


## `fromString`

```js
import tape from '@async-abstraction/tape' ;
const myTape = tape.fromString( 'abracadabra' ) ;
// // OR
// const myTape = tape.fromArray( ... ) ;
// const myTape = tape.fromCallable( ... ) ;
// const myTape = tape.fromIterable( ... ) ;
// const myTape = tape.fromAsyncIterable( ... ) ;
// const myTape = tape.fromIterator( ... ) ;
// const myTape = tape.fromReadStream( ... ) ;
```


## `read` and `unread`

```js
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
