import fromiterator from './fromiterator' ;

/**
 * Converts an iterable to a stream.
 * @param {Iterable} _iterable the iterable to convert
 * @function
 */
export default _iterable => fromiterator( _iterable[Symbol.iterator]( ) ) ;
