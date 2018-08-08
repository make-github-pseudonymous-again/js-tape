import toAsyncIterable from './toAsyncIterable' ;

/**
 * Converts a tape to an async iterator.
 *
 * @function
 * @param {Tape} tape - the tape to read from
 * @returns {AsyncIterator}
 */
export default tape => toAsyncIterable( tape )[Symbol.asyncIterator]( ) ;
