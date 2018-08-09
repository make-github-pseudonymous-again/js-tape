# Example

Create a tape from a string then read or unread characters.
More examples in [the test files](https://github.com/aureooms/js-tape/tree/master/test/src).

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
