import toAsyncIterator from './toAsyncIterator' ;

/**
 * Converts a tape to a callable.
 *
 * @function
 * @param {Tape} tape - the tape to read from
 * @return {Callable}
 */
export default tape => {
	const it = toAsyncIterator( tape ) ;
	return it.next.bind( it ) ;
} ;
