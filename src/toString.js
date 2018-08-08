import toArray from './toArray' ;

/**
 * Converts a tape to a string.
 *
 * @function
 * @param {Tape} tape - the tape to read from
 * @returns {String}
 */
export default async tape => (await toArray( tape )).join( '' ) ;
