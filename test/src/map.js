import test from 'ava' ;

import tape from '../../src' ;

/**
 * @test {map}
 */
test( 'can use map' , async t => {

	const input = 'ababbaab' ;
	const myTape1 = tape.fromString( input ) ;
	const myTape2 = tape.map( x => x === 'a' ? 0 : 1, myTape1) ;
	const expected = input.replace(/a/g, '0').replace(/b/g, '1');
	t.deepEqual(await tape.toString( myTape2 ), expected ) ;

} ) ;
