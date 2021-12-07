/**
 * Spreads an asynchronous iterable inside a new array.
 *
 * @private
 * @param {AsyncIterable} asyncIterable - the input iterable.
 * @returns {Promise<any[]>} A new array filled with the elements of the input iterable.
 */
export default async function asyncIterableToArray(asyncIterable) {
	const array = [];
	const it = asyncIterable[Symbol.asyncIterator]();
	for (;;) {
		// eslint-disable-next-line no-await-in-loop
		const {done, value} = await it.next();
		if (done) break;
		array.push(value);
	}

	return array;
}
