import { toiterator } from './toiterator' ;

/**
 * Converts a stream to a callable.
 * @kind function
 * @param {Stream} stream the stream to read from
 */
export const tocallable = stream => {
	const it = toiterator( stream ) ;
	return it.next.bind( it ) ;
} ;
