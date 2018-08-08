import TapeFromCallable from './TapeFromCallable' ;

/**
 * Converts a callable to a tape.
 * @param {Callable} _callable the callable to convert
 * @function
 */
export default _callable => new TapeFromCallable( _callable ) ;
