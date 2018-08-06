import fromiterator from './fromiterator' ;

/**
 * Converts an asynchronous iterable to a stream.
 * @param {AsyncIterable} _iterable the iterable to convert
 * @function
 */
export default _iterable => fromiterator( _iterable[Symbol.asyncIterator]( ) ) ;
