import test from 'ava';

import {fromString, toAsyncCallable, fromCallable, toString} from '../../src';

/**
 * @test {Tape#unread}
 */
test('unread token', async t => {
	const input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t';
	const myTape1 = fromString(input);
	const mycallable = toAsyncCallable(myTape1);
	const myTape2 = fromCallable(mycallable);
	t.is((await mycallable()).value, '\n');
	myTape1.unread('\n');
	t.is(await toString(myTape2), input);
});
