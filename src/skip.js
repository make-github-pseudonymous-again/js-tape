
/**
 * Outputs the next token of a tape that is not contained in a given toskip
 * set.
 * @param {Tape} tape
 * @param {Iterable} toskip
 */
export default async function skip ( tape , toskip ) {

	const _toskip = new Set( toskip ) ;

	while ( true ) {

		const token = await tape.read( ) ;

		if ( token === tape.eof ) return tape.eof ;

		if ( _toskip.has( token ) ) continue ;

		return token ;

	}

}
