import test from 'ava';

import {fromString, toString, map} from '#module';

/**
 * @test {map}
 */
test('can use map', async (t) => {
	const input = 'ababbaab';
	const myTape1 = fromString(input);
	const myTape2 = map((x) => (x === 'a' ? 0 : 1), myTape1);
	const expected = input.replaceAll('a', '0').replaceAll('b', '1');
	t.is(await toString(myTape2), expected);
});
