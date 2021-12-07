import asyncIteratorMap from './asyncIteratorMap.js';

/**
 * Utility function to apply a sync callable to each item of an async iterable.
 *
 * @private
 * @param {Function} callable - The callable to apply.
 * @param {AsyncIterable} iterable - The iterable to process.
 * @returns {AsyncIterable} The iterable of mapped values.
 */
export default function asyncIterableMap(callable, iterable) {
	return asyncIteratorMap(callable, iterable[Symbol.asyncIterator]());
}
