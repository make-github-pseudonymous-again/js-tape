import fromAsyncIterable from './fromAsyncIterable' ;

/**
 * Converts a ReadStream object to an async iterable of tokens.
 *
 * @private
 * @param {ReadStream} readStream - the ReadStream object to convert
 * @returns {AsyncIterable}
 */
export async function* _fromReadStream ( readStream ) {

	for await (const chunk of readStream) {
		for (const piece of chunk) yield piece ;
	}

}

/**
 * Converts a ReadStream object to a tape.
 *
 * @function
 * @param {ReadStream} readStream - the ReadStream object to convert
 * @returns {Tape}
 */
export default readStream => fromAsyncIterable( _fromReadStream( readStream ) ) ;
