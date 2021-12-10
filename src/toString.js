import toArray from './toArray.js';

/**
 * Converts a tape to a string.
 *
 * @function
 * @param {Tape} tape - The tape to read from.
 * @returns {Promise<string>} The converted string.
 */
export default (tape) => toArray(tape).then((x) => x.join(''));
