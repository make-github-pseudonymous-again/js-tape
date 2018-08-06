import fromasynciterable from './fromasynciterable' ;
import toiterable from './toiterable' ;
import asyncChain from './asyncChain' ;
import asyncMap from './asyncMap' ;

/**
 * Converts a stream of streams of tokens to a stream of tokens.
 * @param {Stream} stream the stream to read from
 */
export default function chain ( stream ) {

	return fromasynciterable( asyncChain( asyncMap( toiterable , toiterable( stream ) ) ) ) ;

}
