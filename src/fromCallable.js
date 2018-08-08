import TapeFromCallable from './TapeFromCallable' ;

/**
 * Converts a callable to a tape.
 *
 * @function
 * @param {Callable} _callable - the callable to convert
 * @returns {Tape}
 */
export default _callable => new TapeFromCallable( _callable ) ;
