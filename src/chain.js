import fromAsyncIterable from './fromAsyncIterable' ;
import toAsyncIterable from './toAsyncIterable' ;
import asyncIterableChain from './asyncIterableChain' ;
import asyncIterableMap from './asyncIterableMap' ;

/**
 * Converts a tape of tapes of tokens to a tape of tokens.
 * @param {Tape} tape the tape to read from
 */
export default function chain ( tape ) {

	return fromAsyncIterable( asyncIterableChain( asyncIterableMap( toAsyncIterable , toAsyncIterable( tape ) ) ) ) ;

}
