import chain from './chain.js';
import split from './split.js';

/**
 * Filters a tape by ignoring a given set of tokens.
 * @param {Tape} tape - The tape to filter.
 * @param {Iterable} toignore - The tokens to ignore.
 * @returns {Tape} The input tape but with some tokens ignored.
 */
export default function ignore(tape, toignore) {
	return chain(split(tape, toignore));
}
