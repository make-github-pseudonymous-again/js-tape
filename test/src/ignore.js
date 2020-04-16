import test from 'ava';

import {fromString, ignore, toString} from '../../src';

/**
 * @test {ignore}
 */
test('can ignore tokens from tape', async (t) => {
	const input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t';
	let myTape = fromString(input);
	myTape = ignore(myTape, ' \t\n');
	t.is(await toString(myTape), '1,22,333,-44,-5');
});

/**
 * @test {ignore}
 */
test('can ignore tokens from tape (bis)', async (t) => {
	const input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5';
	let myTape = fromString(input);
	myTape = ignore(myTape, ' \t\n');
	t.is(await toString(myTape), '1,22,333,-44,-5');
});
