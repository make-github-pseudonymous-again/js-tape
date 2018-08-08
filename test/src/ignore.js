import test from 'ava' ;

import tape from '../../src' ;

/**
 * @test {tape#ignore}
 */
test( 'can ignore tokens from tape' , async t => {

	const input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
	let myTape = tape.fromString( input ) ;
	myTape = tape.ignore( myTape , ' \t\n' ) ;
	t.deepEqual(await tape.toString( myTape ), '1,22,333,-44,-5' ) ;

} ) ;

/**
 * @test {tape#ignore}
 */
test( 'can ignore tokens from tape (bis)' , async t => {

	const input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5' ;
	let myTape = tape.fromString( input ) ;
	myTape = tape.ignore( myTape , ' \t\n' ) ;
	t.deepEqual(await tape.toString( myTape ), '1,22,333,-44,-5' ) ;

} ) ;
