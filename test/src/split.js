import test from 'ava';

import {fromString, split, toString} from '#module';

/**
 * @test {split}
 */
test('can split tape', async (t) => {
	const input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t';
	let myTape = fromString(input);
	myTape = split(myTape, ' \t\n');
	t.is(await toString(await myTape.read()), '1');
	t.is(await toString(await myTape.read()), ',');
	t.is(await toString(await myTape.read()), '22');
	t.is(await toString(await myTape.read()), ',');
	t.is(await toString(await myTape.read()), '333');
	t.is(await toString(await myTape.read()), ',');
	t.is(await toString(await myTape.read()), '-44');
	t.is(await toString(await myTape.read()), ',');
	t.is(await toString(await myTape.read()), '-5');
	t.is(await myTape.read(), myTape.eof);
});
