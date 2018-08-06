import toAsyncIterable from './toAsyncIterable' ;

/**
 * Converts a stream to an iterator.
 * @kind function
 * @param {Stream} stream the stream to read from
 */
export default stream => toAsyncIterable( stream )[Symbol.asyncIterator]( ) ;
