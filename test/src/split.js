import test from 'ava';

import {fromString, split, toString} from '../../src';

/**
 * @test {split}
 */
test('can split tape', async t => {
	const input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t';
	let myTape = fromString(input);
	myTape = split(myTape, ' \t\n');
	t.deepEqual(await toString(await myTape.read()), '1');
	t.deepEqual(await toString(await myTape.read()), ',');
	t.deepEqual(await toString(await myTape.read()), '22');
	t.deepEqual(await toString(await myTape.read()), ',');
	t.deepEqual(await toString(await myTape.read()), '333');
	t.deepEqual(await toString(await myTape.read()), ',');
	t.deepEqual(await toString(await myTape.read()), '-44');
	t.deepEqual(await toString(await myTape.read()), ',');
	t.deepEqual(await toString(await myTape.read()), '-5');
	t.deepEqual(await myTape.read(), myTape.eof);
});
