import test from 'ava';

import {fromString} from '#module';

/**
 * Checks that trying to access the synchronous iterator of a tape throws.
 *
 * @test {Tape#[Symbol.iterator]}
 * @param {Object} t - Test object.
 * @param {String} string - A string to test.
 */
function iterator(t, string) {
	const myTape = fromString(string);
	t.throws(() => myTape[Symbol.iterator]());
}

iterator.title = (title, string) =>
	`Throws when trying to access synchronous iterator of fromString('${string}')`;

test(iterator, '');
test(iterator, 'x');
test(iterator, 'abc');
