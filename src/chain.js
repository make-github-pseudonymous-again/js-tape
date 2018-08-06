import fromAsyncIterable from './fromAsyncIterable' ;
import toAsyncIterable from './toAsyncIterable' ;
import asyncIterableChain from './asyncIterableChain' ;
import asyncIterableMap from './asyncIterableMap' ;

/**
 * Converts a stream of streams of tokens to a stream of tokens.
 * @param {Stream} stream the stream to read from
 */
export default function chain ( stream ) {

	return fromAsyncIterable( asyncIterableChain( asyncIterableMap( toAsyncIterable , toAsyncIterable( stream ) ) ) ) ;

}
