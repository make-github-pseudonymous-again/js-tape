import toArray from './toArray' ;

/**
 * Converts a stream to a string.
 * @kind function
 * @param {Stream} stream the stream to read from
 */
export default async stream => (await toArray( stream )).join( '' ) ;
