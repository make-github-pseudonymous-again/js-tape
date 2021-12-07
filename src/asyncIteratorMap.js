/**
 * Utility function to apply a sync callable to each item of an async iterator.
 *
 * @private
 * @param {Function} callable - The callable to apply.
 * @param {AsyncIterator} iterator - The iterator to process.
 * @returns {AsyncIterator} The iterator of mapped values.
 */
export default async function* asyncIteratorMap(callable, iterator) {
	// Should the callable also be async ?
	for (;;) {
		// eslint-disable-next-line no-await-in-loop
		const {done, value} = await iterator.next();
		if (done) break;
		yield callable(value);
	}
}
