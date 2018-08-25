import toArray from './toArray';

/**
 * Converts a tape to a string.
 *
 * @function
 * @param {Tape} tape - The tape to read from.
 * @returns {String} The converted string.
 */
export default async tape => (await toArray(tape)).join('');
