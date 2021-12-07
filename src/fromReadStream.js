import fromAsyncIterable from './fromAsyncIterable.js';

/**
 * Converts a ReadStream iterator to an async iterable of tokens.
 *
 * @private
 * @param {AsyncIterator} iterator - The ReadStream iterator to convert.
 * @returns {AsyncIterable} The converted iterable.
 */
export async function* _fromReadStreamIterator(iterator) {
	for (;;) {
		// eslint-disable-next-line no-await-in-loop
		const {done, value: chunk} = await iterator.next();
		if (done) break;
		const chunkIterator = chunk[Symbol.iterator]();
		for (;;) {
			const {done, value} = chunkIterator.next();
			if (done) break;
			yield value;
		}
	}
}

/**
 * Converts a ReadStream object to an async iterable of tokens.
 *
 * @private
 * @param {ReadStream} readStream - The ReadStream object to convert.
 * @returns {AsyncIterable} The converted iterable.
 */
export function _fromReadStream(readStream) {
	return _fromReadStreamIterator(readStream[Symbol.asyncIterator]());
}

/**
 * Converts a ReadStream object to a tape.
 *
 * @function
 * @param {ReadStream} readStream - The ReadStream object to convert.
 * @returns {Tape} The converted tape.
 */
export default (readStream) => fromAsyncIterable(_fromReadStream(readStream));
