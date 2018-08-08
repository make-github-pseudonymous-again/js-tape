import test from 'ava' ;
import fs from 'fs' ;

import tape from '../../src' ;

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

	const myTape = tape.fromReadStream( readStream ) ;

	t.deepEqual(await tape.toString( myTape ), expected ) ;

} ) ;
