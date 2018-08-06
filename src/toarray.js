import toiterable from './toiterable' ;
import asyncIterableToArray from './asyncIterableToArray' ;

/**
 * Converts a stream to an array.
 * @kind function
 * @param {Stream} stream the stream to read from
 */
export default async stream => asyncIterableToArray( toiterable( stream ) ) ;
