/**
 * Converts a tape to an asynchronous iterable.
 *
 * @param {Tape} tape - The tape to read from.
 * @returns {AsyncIterable} The converted iterable.
 */
export default async function* toAsyncIterable(tape) {
	while (true) {
		const token = await tape.read(); // eslint-disable-line no-await-in-loop

		if (token === tape.eof) break;

		yield token;
	}
}
