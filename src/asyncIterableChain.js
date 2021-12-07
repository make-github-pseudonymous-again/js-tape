/**
 * Utility function to chain an async iterable of async iterables.
 *
 * @private
 * @param {AsyncIterable<AsyncIterable>} iterables - the input iterable of iterables.
 * @returns {AsyncIterable} The chain of the input iterables.
 */
export default function asyncIterableChain(iterables) {
	return new Chain(iterables);
}

export class Chain {
	constructor(iterables) {
		this.iterators = iterables[Symbol.asyncIterator]();
		this.iterator = null;
	}

	async next() {
		for (;;) {
			if (this.iterator === null) {
				// eslint-disable-next-line no-await-in-loop
				const {done, value} = await this.iterators.next();
				if (done) return {done: true};
				this.iterator = value[Symbol.asyncIterator]();
			}

			// eslint-disable-next-line no-await-in-loop
			const {done, value} = await this.iterator.next();
			if (done) {
				this.iterator = null;
			} else {
				return {done: false, value};
			}
		}
	}

	[Symbol.asyncIterator]() {
		return this;
	}
}
