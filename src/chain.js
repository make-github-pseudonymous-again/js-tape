import { map as _map , chain as _chain } from '@aureooms/js-itertools' ;

import fromiterable from './fromiterable' ;
import toiterable from './toiterable' ;

/**
 * Converts a stream of streams of tokens to a stream of tokens.
 * @param {Stream} stream the stream to read from
 */
export default function chain ( stream ) {

	return fromiterable( _chain( _map( toiterable , toiterable( stream ) ) ) ) ;

}
