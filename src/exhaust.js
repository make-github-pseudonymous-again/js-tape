/**
 * Exhausts a tape.
 * @param {Tape} tape - The tape to read from.
 */
export default async function exhaust(tape) {
	while ((await tape.read()) !== tape.eof); // eslint-disable-line no-await-in-loop
}
