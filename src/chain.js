import asyncIterableChain from './asyncIterableChain.js';
import asyncIterableMap from './asyncIterableMap.js';
import fromAsyncIterable from './fromAsyncIterable.js';
import toAsyncIterable from './toAsyncIterable.js';

/**
 * Converts a tape of tapes of tokens to a tape of tokens.
 * @param {Tape} tape - The tape of tapes of tokens to read from.
 * @returns {Tape} The converted tape of tokens.
 */
export default function chain(tape) {
	return fromAsyncIterable(
		asyncIterableChain(
			asyncIterableMap(toAsyncIterable, toAsyncIterable(tape)),
		),
	);
}
