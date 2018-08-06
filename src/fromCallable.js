import StreamFromCallable from './StreamFromCallable' ;

/**
 * Converts a callable to a stream.
 * @param {Callable} _callable the callable to convert
 * @function
 */
export default _callable => new StreamFromCallable( _callable ) ;
