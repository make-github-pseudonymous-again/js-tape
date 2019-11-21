import fromIterator from './fromIterator';

/**
 * Converts an asynchronous iterable to a tape.
 *
 * @function
 * @param {AsyncIterable} _iterable - The iterable to convert.
 * @returns {Tape} The converted tape.
 */
export default _iterable => fromIterator(_iterable[Symbol.asyncIterator]());
