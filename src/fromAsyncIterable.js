import fromIterator from './fromIterator' ;

/**
 * Converts an asynchronous iterable to a tape.
 *
 * @function
 * @param {AsyncIterable} _iterable - the iterable to convert
 * @returns {Tape}
 */
export default _iterable => fromIterator( _iterable[Symbol.asyncIterator]( ) ) ;
