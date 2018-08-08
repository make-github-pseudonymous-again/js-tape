import toAsyncIterable from './toAsyncIterable' ;

/**
 * Converts a tape to an iterator.
 * @kind function
 * @param {Tape} tape the tape to read from
 */
export default tape => toAsyncIterable( tape )[Symbol.asyncIterator]( ) ;
