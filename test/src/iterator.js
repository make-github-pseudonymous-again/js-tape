import test from 'ava' ;

import tape from '../../src' ;

/**
 * @test {Tape#[Symbol.iterator]}
 */
function iterator ( t , string ) {
	const myTape = tape.fromString(string) ;
	t.throws( () => myTape[Symbol.iterator]() ) ;
}

iterator.title = ( title , string ) => `Throws when trying to access synchronous iterator of fromString('${string}')` ;


test( iterator , '' ) ;
test( iterator , 'x' ) ;
test( iterator , 'abc' ) ;
