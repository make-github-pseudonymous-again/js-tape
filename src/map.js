import fromAsyncIterable from './fromAsyncIterable' ;
import toIterable from './toIterable' ;
import asyncMap from './asyncMap' ;

/**
 * Applies a callable to each token of a stream.
 * @param {Callable} callable the callable to apply
 * @param {Stream} stream the stream to process
 */
export default function map ( callable , stream ) {

	return fromAsyncIterable( asyncMap( callable , toIterable( stream ) ) ) ;

}
