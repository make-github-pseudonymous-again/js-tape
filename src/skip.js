
/**
 * Outputs the next token of a stream that is not contained in a given toskip
 * set.
 * @param {Stream} stream
 * @param {Iterable} toskip
 */
export default async function skip ( stream , toskip ) {

	const _toskip = new Set( toskip ) ;

	while ( true ) {

		const token = await stream.read( ) ;

		if ( token === stream.eof ) return stream.eof ;

		if ( _toskip.has( token ) ) continue ;

		return token ;

	}

}
