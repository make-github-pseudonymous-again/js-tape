import test from 'ava' ;

import tape from '../../src' ;

/**
 * @test {tape#tocallable}
 */
test( 'tape#tocallable' , async t => {

	const input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
	const myTape1 = tape.fromString( input ) ;
	const mycallable = tape.toCallable( myTape1 ) ;
	const myTape2 = tape.fromCallable( mycallable ) ;
	t.deepEqual((await mycallable()).value, '\n');
	t.deepEqual('\n'+(await tape.toString( myTape2 )), input ) ;

} ) ;
