import fromAsyncIterable from './fromAsyncIterable' ;
import toAsyncIterable from './toAsyncIterable' ;
import asyncIterableMap from './asyncIterableMap' ;

/**
 * Applies a callable to each token of a stream.
 * @param {Callable} callable the callable to apply
 * @param {Stream} stream the stream to process
 */
export default function map ( callable , stream ) {

	return fromAsyncIterable( asyncIterableMap( callable , toAsyncIterable( stream ) ) ) ;

}
