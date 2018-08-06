import fromasynciterable from './fromasynciterable' ;
import toiterable from './toiterable' ;
import asyncMap from './asyncMap' ;

/**
 * Applies a callable to each token of a stream.
 * @param {Callable} callable the callable to apply
 * @param {Stream} stream the stream to process
 */
export default function map ( callable , stream ) {

	return fromasynciterable( asyncMap( callable , toiterable( stream ) ) ) ;

}
