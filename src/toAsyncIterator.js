import toAsyncIterable from './toAsyncIterable.js';

/**
 * Converts a tape to an async iterator.
 *
 * @function
 * @param {Tape} tape - The tape to read from.
 * @returns {AsyncIterator} The converted iterator.
 */
export default (tape) => toAsyncIterable(tape)[Symbol.asyncIterator]();
