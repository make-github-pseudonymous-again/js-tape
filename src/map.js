import fromAsyncIterable from './fromAsyncIterable' ;
import toAsyncIterable from './toAsyncIterable' ;
import asyncIterableMap from './asyncIterableMap' ;

/**
 * Applies a callable to each token of a tape.
 * @param {Callable} callable the callable to apply
 * @param {Tape} tape the tape to process
 */
export default function map ( callable , tape ) {

	return fromAsyncIterable( asyncIterableMap( callable , toAsyncIterable( tape ) ) ) ;

}
