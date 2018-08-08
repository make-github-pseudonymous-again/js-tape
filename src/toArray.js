import toAsyncIterable from './toAsyncIterable' ;
import asyncIterableToArray from './asyncIterableToArray' ;

/**
 * Converts a tape to an array.
 *
 * @function
 * @param {Tape} tape - the tape to read from
 * @returns {Array}
 */
export default async tape => asyncIterableToArray( toAsyncIterable( tape ) ) ;
