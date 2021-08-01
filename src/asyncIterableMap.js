/**
 * Utility function to apply a sync callable to each item of an async iterable.
 *
 * @private
 * @param {Function} callable - The callable to apply.
 * @param {AsyncIterable} iterable - The iterable to process.
 * @returns {AsyncIterable} The iterable of mapped values.
 */
export default async function* asyncIterableMap(callable, iterable) {
	// Should the callable also be async ?
	for await (const item of iterable) yield callable(item);
}
