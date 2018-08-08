import fromCallable from './fromCallable' ;

/**
 * Converts an iterator to a tape.
 *
 * @function
 * @param {Iterator} _iterator - the iterator to convert
 * @returns {Tape}
 */
export default _iterator => fromCallable( _iterator.next.bind( _iterator ) ) ;
