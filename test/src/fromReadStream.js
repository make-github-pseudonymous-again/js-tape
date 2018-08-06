import test from 'ava' ;
import fs from 'fs' ;

import stream from '../../src' ;

test( 'unread token' , async t => {

	const filepath = 'test/data/hello-world.txt' ;
	const encoding = 'utf8' ;
	const expected = fs.readFileSync(filepath, encoding);

	const readStream = fs.createReadStream(
		filepath ,
		{
			encoding: encoding ,
			highWaterMark: 1024 ,
		}
	) ;

	const myStream = stream.fromReadStream( readStream ) ;

	t.deepEqual(await stream.toString( myStream ), expected ) ;

} ) ;
