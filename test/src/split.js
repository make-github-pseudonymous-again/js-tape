import test from 'ava' ;

import * as stream from '../../src' ;

/**
 * @test {stream#split}
 */
test( 'can split stream' , t => {

	let input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
	let mystream = stream.fromstring( input ) ;
	mystream = stream.split( mystream , ' \t\n' ) ;
	t.deepEqual(stream.tostring( mystream.read( ) ), '1' ) ;
	t.deepEqual(stream.tostring( mystream.read( ) ), ',' ) ;
	t.deepEqual(stream.tostring( mystream.read( ) ), '22' ) ;
	t.deepEqual(stream.tostring( mystream.read( ) ), ',' ) ;
	t.deepEqual(stream.tostring( mystream.read( ) ), '333' ) ;
	t.deepEqual(stream.tostring( mystream.read( ) ), ',' ) ;
	t.deepEqual(stream.tostring( mystream.read( ) ), '-44' ) ;
	t.deepEqual(stream.tostring( mystream.read( ) ), ',' ) ;
	t.deepEqual(stream.tostring( mystream.read( ) ), '-5' ) ;
	t.deepEqual(mystream.read( ), mystream.eof ) ;

} ) ;
