import toIterator from './toIterator' ;

/**
 * Converts a tape to a callable.
 * @kind function
 * @param {Tape} tape the tape to read from
 */
export default tape => {
	const it = toIterator( tape ) ;
	return it.next.bind( it ) ;
} ;
