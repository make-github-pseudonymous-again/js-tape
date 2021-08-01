import toAsyncIterable from './toAsyncIterable.js';
import asyncIterableToArray from './asyncIterableToArray.js';

/**
 * Converts a tape to an array.
 *
 * @function
 * @param {Tape} tape - The tape to read from.
 * @returns {Promise<any[]>} The converted array.
 */
export default (tape) => asyncIterableToArray(toAsyncIterable(tape));
