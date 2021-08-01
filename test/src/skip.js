import test from 'ava';

import {fromString, skip} from '../../src/index.js';

/**
 * @test {fromString}
 * @test {skip}
 */
test('can skip tokens from tape', async (t) => {
	const input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t';
	const tape = fromString(input);
	t.is(await skip(tape, ' \t\n'), '1');
	t.is(await skip(tape, ' \t\n'), ',');
	t.is(await skip(tape, ' \t\n'), '2');
	t.is(await skip(tape, ' \t\n'), '2');
	t.is(await skip(tape, ' \t\n'), ',');
	t.is(await skip(tape, ' \t\n'), '3');
	t.is(await skip(tape, ' \t\n'), '3');
	t.is(await skip(tape, ' \t\n'), '3');
	t.is(await skip(tape, ' \t\n'), ',');
	t.is(await skip(tape, ' \t\n'), '-');
	t.is(await skip(tape, ' \t\n'), '4');
	t.is(await skip(tape, ' \t\n'), '4');
	t.is(await skip(tape, ' \t\n'), ',');
	t.is(await skip(tape, ' \t\n'), '-');
	t.is(await skip(tape, ' \t\n'), '5');
	t.is(await skip(tape, ' \t\n'), tape.eof);
});
