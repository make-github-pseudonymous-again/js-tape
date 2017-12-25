import test from 'ava' ;

import * as stream from '../../src' ;

/**
 * @test {stream#from}
 * @test {stream#to}
 */
test( 'can read from string' , t => {

	let input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
	let mystream = stream.fromstring( input ) ;
	t.deepEqual(stream.tostring( mystream ), input ) ;

} ) ;
