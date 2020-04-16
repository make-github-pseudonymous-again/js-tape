import fromIterator from './fromIterator';

/**
 * Converts an iterable to a tape.
 *
 * @function
 * @param {Iterable} iterable - The iterable to convert.
 * @returns {Tape} The converted tape.
 */
export default (iterable) => fromIterator(iterable[Symbol.iterator]());
