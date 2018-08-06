import test from 'ava' ;

import stream from '../../src' ;

test( 'unread token' , async t => {

	const input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
	const mystream1 = stream.fromString( input ) ;
	const mycallable = stream.toCallable( mystream1 ) ;
	const mystream2 = stream.fromCallable( mycallable ) ;
	t.deepEqual((await mycallable()).value, '\n');
	mystream1.unread('\n');
	t.deepEqual((await stream.toString( mystream2 )), input ) ;

} ) ;
