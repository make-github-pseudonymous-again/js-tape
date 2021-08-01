import toAsyncIterator from './toAsyncIterator.js';

/**
 * Converts a tape to a callable.
 *
 * @function
 * @param {Tape} tape - The tape to read from.
 * @return {Callable} The converted callable.
 */
export default (tape) => {
	const it = toAsyncIterator(tape);
	return it.next.bind(it);
};
