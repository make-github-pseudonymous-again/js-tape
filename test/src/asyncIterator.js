import test from 'ava' ;

import tape from '../../src' ;

/**
 * @test {Tape#[Symbol.asyncIterator]}
 */
test( 'Can iterate on a Tape object' , t => {


	const input = 'abcd' ;
	t.plan(input.length + 1) ;

	const myTape = tape.fromString( input ) ;

	// The loop does not work for some reason: TypeError: Cannot read property 'file' of undefined
	// NB: needs async test
	// for await ( const token of myTape ) t.is( token , 'x' ) ;

	const it = myTape[Symbol.asyncIterator]() ;

	return it.next()
		.then( ({ value }) => t.is(value, 'a') )
		.then( () => it.next() )
		.then( ({ value }) => t.is(value, 'b') )
		.then( () => it.next() )
		.then( ({ value }) => t.is(value, 'c') )
		.then( () => it.next() )
		.then( ({ value }) => t.is(value, 'd') )
		.then( () => it.next() )
		.then( ({ done }) => t.is(done, true) ) ;

} ) ;
