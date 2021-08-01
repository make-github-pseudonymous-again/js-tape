import test from 'ava';

import {fromString} from '../../src/index.js';

/**
 * @test {Tape#[Symbol.asyncIterator]}
 */
test('Can iterate on a Tape object', async (t) => {
	const input = 'abcd';
	t.plan(input.length + 1);

	const myTape = fromString(input);

	// The loop does not work for some reason: TypeError: Cannot read property 'file' of undefined
	// NB: needs async test
	// for await ( const token of myTape ) t.is( token , 'x' ) ;

	const it = myTape[Symbol.asyncIterator]();

	const {value: a} = await it.next();
	t.is(a, 'a');
	const {value: b} = await it.next();
	t.is(b, 'b');
	const {value: c} = await it.next();
	t.is(c, 'c');
	const {value: d} = await it.next();
	t.is(d, 'd');
	const {done} = await it.next();
	t.true(done);
});
