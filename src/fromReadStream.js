import fromAsyncIterable from './fromAsyncIterable.js';

/**
 * Converts a ReadStream object to an async iterable of tokens.
 *
 * @private
 * @param {ReadStream} readStream - The ReadStream object to convert.
 * @returns {AsyncIterable} The converted iterable.
 */
export async function* _fromReadStream(readStream) {
	for await (const chunk of readStream) {
		for (const piece of chunk) yield piece;
	}
}

/**
 * Converts a ReadStream object to a tape.
 *
 * @function
 * @param {ReadStream} readStream - The ReadStream object to convert.
 * @returns {Tape} The converted tape.
 */
export default (readStream) => fromAsyncIterable(_fromReadStream(readStream));
