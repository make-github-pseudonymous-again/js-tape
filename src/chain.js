import fromAsyncIterable from './fromAsyncIterable';
import toAsyncIterable from './toAsyncIterable';
import asyncIterableChain from './asyncIterableChain';
import asyncIterableMap from './asyncIterableMap';

/**
 * Converts a tape of tapes of tokens to a tape of tokens.
 * @param {Tape} tape - The tape of tapes of tokens to read from.
 * @return {Tape} The converted tape of tokens.
 */
export default function chain(tape) {
	return fromAsyncIterable(
		asyncIterableChain(asyncIterableMap(toAsyncIterable, toAsyncIterable(tape)))
	);
}
