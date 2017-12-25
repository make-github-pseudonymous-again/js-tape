import test from 'ava' ;

import * as stream from '../../src' ;

/**
 * @test {stream#ignore}
 */
test( 'can ignore tokens from stream' , t => {

	let input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
	let mystream = stream.fromstring( input ) ;
	mystream = stream.ignore( mystream , ' \t\n' ) ;
	t.deepEqual(stream.tostring( mystream ), '1,22,333,-44,-5' ) ;

} ) ;
