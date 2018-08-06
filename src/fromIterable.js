import fromIterator from './fromIterator' ;

/**
 * Converts an iterable to a stream.
 * @param {Iterable} _iterable the iterable to convert
 * @function
 */
export default _iterable => fromIterator( _iterable[Symbol.iterator]( ) ) ;
