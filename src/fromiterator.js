import fromcallable from './fromcallable' ;

/**
 * Converts an iterator to a stream.
 * @param {Iterator} _iterator the iterator to convert
 * @function
 */
export default _iterator => fromcallable( _iterator.next.bind( _iterator ) ) ;
