/**
 * Exhausts a tape.
 * @param {Tape} tape - The tape to read from.
 */
export default async function exhaust(tape) {
	// While ((await tape.read()) !== tape.eof); // eslint-disable-line no-await-in-loop
	for (;;) {
		// eslint-disable-next-line no-await-in-loop
		const token = await tape.read();
		if (token === tape.eof) return;
	}
}
