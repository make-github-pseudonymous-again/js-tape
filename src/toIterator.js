import toIterable from './toIterable' ;

/**
 * Converts a stream to an iterator.
 * @kind function
 * @param {Stream} stream the stream to read from
 */
export default stream => toIterable( stream )[Symbol.asyncIterator]( ) ;
