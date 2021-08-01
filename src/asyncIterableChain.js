/**
 * Utility function to chain an async iterable of async iterables.
 *
 * @private
 * @param {AsyncIterable<AsyncIterable>} iterables - the input iterable of iterables.
 * @returns {AsyncIterable} The chain of the input iterables.
 */
export default async function* asyncIterableChain(iterables) {
	for await (const iterable of iterables) {
		for await (const item of iterable) yield item;
	}
}
