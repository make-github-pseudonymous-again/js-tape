import test from 'ava' ;

import * as stream from '../../src' ;

/**
 * @test {stream#from}
 * @test {stream#to}
 */
test( 'can read from string' , async t => {

	const input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
	const mystream = stream.fromstring( input ) ;
	t.deepEqual(await stream.tostring( mystream ), input ) ;

} ) ;
