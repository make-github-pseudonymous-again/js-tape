import test from 'ava' ;

import tape from '../../src' ;

/**
 * @test {split}
 */
test( 'can split tape' , async t => {

	const input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
	let myTape = tape.fromString( input ) ;
	myTape = tape.split( myTape , ' \t\n' ) ;
	t.deepEqual(await tape.toString( await myTape.read( ) ), '1' ) ;
	t.deepEqual(await tape.toString( await myTape.read( ) ), ',' ) ;
	t.deepEqual(await tape.toString( await myTape.read( ) ), '22' ) ;
	t.deepEqual(await tape.toString( await myTape.read( ) ), ',' ) ;
	t.deepEqual(await tape.toString( await myTape.read( ) ), '333' ) ;
	t.deepEqual(await tape.toString( await myTape.read( ) ), ',' ) ;
	t.deepEqual(await tape.toString( await myTape.read( ) ), '-44' ) ;
	t.deepEqual(await tape.toString( await myTape.read( ) ), ',' ) ;
	t.deepEqual(await tape.toString( await myTape.read( ) ), '-5' ) ;
	t.deepEqual(await myTape.read( ), myTape.eof ) ;

} ) ;
