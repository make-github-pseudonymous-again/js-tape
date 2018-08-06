import fromIterator from './fromIterator' ;

/**
 * Converts an asynchronous iterable to a stream.
 * @param {AsyncIterable} _iterable the iterable to convert
 * @function
 */
export default _iterable => fromIterator( _iterable[Symbol.asyncIterator]( ) ) ;
