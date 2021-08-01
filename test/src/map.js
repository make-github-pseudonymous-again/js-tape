import test from 'ava';

import fromString from '../../src/fromString.js';
import map from '../../src/map.js';
import toString from '../../src/toString.js';

/**
 * @test {map}
 */
test('can use map', async (t) => {
	const input = 'ababbaab';
	const myTape1 = fromString(input);
	const myTape2 = map((x) => (x === 'a' ? 0 : 1), myTape1);
	const expected = input.replace(/a/g, '0').replace(/b/g, '1');
	t.deepEqual(await toString(myTape2), expected);
});
