import fs from 'node:fs';
import test from 'ava';

import {fromReadStream, toString} from '#module';

test('unread token', async (t) => {
	const filepath = 'test/data/hello-world.txt';
	const encoding = 'utf8';
	const expected = fs.readFileSync(filepath, encoding);

	const readStream = fs.createReadStream(filepath, {
		encoding,
		highWaterMark: 1024,
	});

	const myTape = fromReadStream(readStream);

	t.is(await toString(myTape), expected);
});
