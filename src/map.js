import fromAsyncIterable from './fromAsyncIterable.js';
import toAsyncIterable from './toAsyncIterable.js';
import asyncIterableMap from './asyncIterableMap.js';

/**
 * Applies a callable to each token of a tape.
 * @param {Callable} callable - the callable to apply
 * @param {Tape} tape - the tape to process
 * @returns {Tape} The processed tape.
 */
export default function map(callable, tape) {
	return fromAsyncIterable(asyncIterableMap(callable, toAsyncIterable(tape)));
}
