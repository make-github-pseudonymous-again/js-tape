/**
 * Converts a tape to an asynchronous iterable.
 *
 * @param {Tape} tape - the tape to read from
 * @returns {AsyncIterable}
 */
export default async function* toAsyncIterable ( tape ) {

	while ( true ) {

		const token = await tape.read( ) ;

		if ( token === tape.eof ) break ;

		yield token ;

	}

}
