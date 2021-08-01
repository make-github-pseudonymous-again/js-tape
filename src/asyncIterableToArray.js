/**
 * Spreads an asynchronous iterable inside a new array.
 *
 * @private
 * @param {AsyncIterable} asyncIterable - the input iterable.
 * @returns {Promise<any[]>} A new array filled with the elements of the input iterable.
 */
export default async function asyncIterableToArray(asyncIterable) {
	const array = [];
	for await (const item of asyncIterable) array.push(item);
	return array;
}
