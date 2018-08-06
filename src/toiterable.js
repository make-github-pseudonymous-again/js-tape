/**
 * Converts a stream to an iterable.
 * @param {Stream} stream the stream to read from
 */
export default async function* toiterable ( stream ) {

	while ( true ) {

		const token = await stream.read( ) ;

		if ( token === stream.eof ) break ;

		yield token ;

	}

}
