import test from 'ava';

import fromString from '../../src/fromString.js';
import toString from '../../src/toString.js';

/**
 * @test {fromString}
 * @test {toString}
 */
test('can read from string', async (t) => {
	const input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t';
	const myTape = fromString(input);
	t.deepEqual(await toString(myTape), input);
});
