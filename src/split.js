import assert from 'node:assert';
import fromAsyncIterable from './fromAsyncIterable.js';
import exhaust from './exhaust.js';

/**
 * Splits the input tape into a tape of tapes according to some set of
 * separators. See {@link _split} for the actual implementation.
 *
 * @param {Tape} tape - The input tape.
 * @param {Iterable} sep - An iterable of separators.
 * @returns {Tape} A tape of tapes.
 */
export default function split(tape, sep) {
	return fromAsyncIterable(_split(tape, sep));
}

export class Group {
	constructor(first, sep, tape) {
		this.first = first;
		this.sep = sep;
		this.tape = tape;
		this.state = 0;
	}

	async next() {
		if (this.state === 0) {
			this.state = 1;
			return {done: false, value: this.first};
		}

		if (this.state === 1) {
			const value = await this.tape.read();
			if (value !== this.tape.eof && !this.sep.has(value))
				return {done: false, value};
			this.sep = null;
			this.tape = null;
			this.state = 2;
			return {done: true};
		}

		return {done: true};
	}

	[Symbol.asyncIterator]() {
		return this;
	}
}

/**
 * Same as {@link split}, but returns an iterable rather than a tape.
 *
 * @private
 * @param {Tape} tape - The input tape.
 * @param {Iterable} sep - An iterable of separators.
 * @returns {AsyncIterable} An iterable of tapes.
 */
export function _split(tape, sep) {
	return new Split(tape, sep);
}

class Split {
	constructor(tape, sep) {
		this.tape = tape;
		this.sep = new Set(sep);
		this.group = null;
		this.state = 0;
		assert(!this.sep.has(this.tape.eof));
	}

	async next() {
		if (this.state === 0) {
			if (this.group !== null) await exhaust(this.group);
			let token;
			do {
				// eslint-disable-next-line no-await-in-loop
				token = await this.tape.read();
			} while (this.sep.has(token));

			if (token === this.tape.eof) {
				this.tape = null;
				this.sep = null;
				this.group = null;
				this.state = 1;
				return {done: true};
			}

			assert(!this.sep.has(token));
			this.group = fromAsyncIterable(new Group(token, this.sep, this.tape));
			return {done: false, value: this.group};
		}

		return {done: true};
	}

	[Symbol.asyncIterator]() {
		return this;
	}
}
