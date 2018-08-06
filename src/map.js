import { map as _map } from '@aureooms/js-itertools' ;

import fromiterable from './fromiterable' ;
import toiterable from './toiterable' ;

/**
 * Applies a callable to each token of a stream.
 * @param {Callable} callable the callable to apply
 * @param {Stream} stream the stream to process
 */
export default function map ( callable , stream ) {

	return fromiterable( _map( callable , toiterable( stream ) ) ) ;

}
