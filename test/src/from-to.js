import test from 'ava' ;

import tape from '../../src' ;

/**
 * @test {tape#from}
 * @test {tape#to}
 */
test( 'can read from string' , async t => {

	const input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
	const myTape = tape.fromString( input ) ;
	t.deepEqual(await tape.toString( myTape ), input ) ;

} ) ;
