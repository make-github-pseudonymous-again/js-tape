import fromIterator from './fromIterator' ;

/**
 * Converts an iterable to a tape.
 *
 * @function
 * @param {Iterable} _iterable - the iterable to convert
 * @returns {Tape}
 */
export default _iterable => fromIterator( _iterable[Symbol.iterator]( ) ) ;
