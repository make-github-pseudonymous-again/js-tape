import toArray from './toArray' ;

/**
 * Converts a tape to a string.
 * @kind function
 * @param {Tape} tape the tape to read from
 */
export default async tape => (await toArray( tape )).join( '' ) ;
