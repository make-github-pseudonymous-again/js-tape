import fromAsyncIterable from './fromAsyncIterable' ;
import exhaust from './exhaust' ;

/**
 * Splits the input tape into a tape of tapes according to some set of
 * separators. See {@link _split} for the actual implementation.
 *
 * @param {Tape} tape - The input tape.
 * @param {Iterable} sep - An iterable of separators.
 * @returns {Tape}
 */
export default function split ( tape , sep ) {

	return fromAsyncIterable( _split( tape , sep ) ) ;

}

/**
 * Same as {@link split}, but returns an iterator rather than a tape.
 *
 * @private
 * @param {Tape} tape - The input tape.
 * @param {Iterable} sep - An iterable of separators.
 * @returns {Iterator}
 */
export async function* _split ( tape , sep ) {

	const _sep = new Set( sep ) ;

	while ( true ) {

		const token = await tape.read( ) ;

		if ( token === tape.eof ) break ;

		if ( _sep.has( token ) ) continue ;

		const group = fromAsyncIterable( ( async function* ( ) {

			yield token ;

			while ( true ) {

				const token = await tape.read( ) ;

				if ( _sep.has( token ) ) break ;

				yield token ;

			}

		} )( ) ) ;

		yield group ;

		await exhaust( group ) ;

	}

}
