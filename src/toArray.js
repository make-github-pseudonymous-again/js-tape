import {asyncIterableToArray} from '@async-iterable-iterator/async-iterable-to-array';

import toAsyncIterable from './toAsyncIterable.js';

/**
 * Converts a tape to an array.
 *
 * @function
 * @param {Tape} tape - The tape to read from.
 * @returns {Promise<any[]>} The converted array.
 */
export default (tape) => asyncIterableToArray(toAsyncIterable(tape));
