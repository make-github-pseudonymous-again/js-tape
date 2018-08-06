import toIterator from './toIterator' ;

/**
 * Converts a stream to a callable.
 * @kind function
 * @param {Stream} stream the stream to read from
 */
export default stream => {
	const it = toIterator( stream ) ;
	return it.next.bind( it ) ;
} ;
