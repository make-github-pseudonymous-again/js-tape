/**
 * Outputs the next token of a tape that is not contained in a given toskip
 * set.
 *
 * @private
 * @param {Tape} tape - The input tape.
 * @param {Iterable} toskip - The (hashable) tokens to skip.
 * @returns {Promise} The next token not in `toskip`.
 */
export default async function skip(tape, toskip) {
	const _toskip = new Set(toskip);

	for (;;) {
		const token = await tape.read(); // eslint-disable-line no-await-in-loop
		if (!_toskip.has(token)) return token;
	}
}
