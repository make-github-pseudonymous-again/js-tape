import fromCallable from './fromCallable' ;

/**
 * Converts an iterator to a tape.
 * @param {Iterator} _iterator the iterator to convert
 * @function
 */
export default _iterator => fromCallable( _iterator.next.bind( _iterator ) ) ;
