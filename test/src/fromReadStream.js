import fs from 'fs';
import test from 'ava';

import fromReadStream from '../../src/fromReadStream.js';
import toString from '../../src/toString.js';

test('unread token', async (t) => {
	const filepath = 'test/data/hello-world.txt';
	const encoding = 'utf8';
	const expected = fs.readFileSync(filepath, encoding);

	const readStream = fs.createReadStream(filepath, {
		encoding,
		highWaterMark: 1024,
	});

	const myTape = fromReadStream(readStream);

	t.deepEqual(await toString(myTape), expected);
});
