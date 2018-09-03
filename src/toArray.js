import toAsyncIterable from './toAsyncIterable';
import asyncIterableToArray from './asyncIterableToArray';

/**
 * Converts a tape to an array.
 *
 * @function
 * @param {Tape} tape - The tape to read from.
 * @returns {Array} The converted array.
 */
export default tape => asyncIterableToArray(toAsyncIterable(tape));
