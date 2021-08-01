import fromCallable from './fromCallable.js';

/**
 * Converts an iterator to a tape.
 *
 * @function
 * @param {Iterator} iterator - The iterator to convert.
 * @returns {Tape} The converted tape.
 */
export default (iterator) => fromCallable(iterator.next.bind(iterator));
