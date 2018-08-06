import fromAsyncIterable from './fromAsyncIterable' ;
import toIterable from './toIterable' ;
import asyncChain from './asyncChain' ;
import asyncMap from './asyncMap' ;

/**
 * Converts a stream of streams of tokens to a stream of tokens.
 * @param {Stream} stream the stream to read from
 */
export default function chain ( stream ) {

	return fromAsyncIterable( asyncChain( asyncMap( toIterable , toIterable( stream ) ) ) ) ;

}
