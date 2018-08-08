import toAsyncIterable from './toAsyncIterable' ;
import asyncIterableToArray from './asyncIterableToArray' ;

/**
 * Converts a tape to an array.
 * @kind function
 * @param {Tape} tape the tape to read from
 */
export default async tape => asyncIterableToArray( toAsyncIterable( tape ) ) ;
