import test from 'ava';

import {fromString, toString} from '../../src/index.js';

/**
 * @test {fromString}
 * @test {toString}
 */
test('can read from string', async (t) => {
	const input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t';
	const myTape = fromString(input);
	t.deepEqual(await toString(myTape), input);
});
