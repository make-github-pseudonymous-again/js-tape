import test from 'ava' ;

import stream from '../../src' ;

/**
 * @test {stream#split}
 */
test( 'can split stream' , async t => {

	const input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
	let mystream = stream.fromString( input ) ;
	mystream = stream.split( mystream , ' \t\n' ) ;
	t.deepEqual(await stream.toString( await mystream.read( ) ), '1' ) ;
	t.deepEqual(await stream.toString( await mystream.read( ) ), ',' ) ;
	t.deepEqual(await stream.toString( await mystream.read( ) ), '22' ) ;
	t.deepEqual(await stream.toString( await mystream.read( ) ), ',' ) ;
	t.deepEqual(await stream.toString( await mystream.read( ) ), '333' ) ;
	t.deepEqual(await stream.toString( await mystream.read( ) ), ',' ) ;
	t.deepEqual(await stream.toString( await mystream.read( ) ), '-44' ) ;
	t.deepEqual(await stream.toString( await mystream.read( ) ), ',' ) ;
	t.deepEqual(await stream.toString( await mystream.read( ) ), '-5' ) ;
	t.deepEqual(await mystream.read( ), mystream.eof ) ;

} ) ;
