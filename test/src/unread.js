import test from 'ava' ;

import * as stream from '../../src' ;

test( 'unread token' , async t => {

	const input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
	const mystream1 = stream.fromstring( input ) ;
	const mycallable = stream.tocallable( mystream1 ) ;
	const mystream2 = stream.fromcallable( mycallable ) ;
	t.deepEqual((await mycallable()).value, '\n');
	mystream1.unread('\n');
	t.deepEqual((await stream.tostring( mystream2 )), input ) ;

} ) ;
