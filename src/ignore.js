import split from './split' ;
import chain from './chain' ;

/**
 * Filters a tape by ignoring a given set of tokens.
 * @param {Tape} tape the tape to filter
 * @param {Iterable} toignore the tokens to ignore
 */
export default function ignore ( tape , toignore ) {

	return chain( split( tape , toignore ) ) ;

}
