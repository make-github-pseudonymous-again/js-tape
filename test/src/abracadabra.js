import test from 'ava' ;

import tape from '../../src' ;

/**
 * @test {fromString}
 * @test {TapeFromCallable#read}
 * @test {TapeFromCallable#unread}
 */
test( 'As a promise' , t => {

	const myTape = tape.fromString( 'abracadabra' ) ;

	return myTape.read()
		.then( c => t.is(c, 'a') )
		.then( () => myTape.read() )
		.then( c => t.is(c, 'b') )
		.then( () => myTape.unread('Z').unread('X') )
		.then( () => myTape.read() )
		.then( c => t.is(c, 'X') )
		.then( () => myTape.read() )
		.then( c => t.is(c, 'Z') )
		.then( () => myTape.read() )
		.then( c => t.is(c, 'r') )
		.then( () => myTape.read() )
		.then( c => t.is(c, 'a') )
		.then( () => myTape.read() )
		.then( c => t.is(c, 'c') )
		.then( () => myTape.read() )
		.then( c => t.is(c, 'a') )
		.then( () => myTape.read() )
		.then( c => t.is(c, 'd') )
		.then( () => myTape.read() )
		.then( c => t.is(c, 'a') )
		.then( () => myTape.read() )
		.then( c => t.is(c, 'b') )
		.then( () => myTape.read() )
		.then( c => t.is(c, 'r') )
		.then( () => myTape.read() )
		.then( c => t.is(c, 'a') )
		.then( () => myTape.read() )
		.then( c => t.is(c, myTape.eof) )
		.then( () => myTape.read() )
		.then( c => t.is(c, myTape.eof) )
		.then( () => myTape.read() )
		.then( c => t.is(c, myTape.eof) )
		.then( () => myTape.unread('X').unread('Y') )
		.then( () => myTape.read() )
		.then( c => t.is(c, 'Y') )
		.then( () => myTape.read() )
		.then( c => t.is(c, 'X') )
		.then( () => myTape.read() )
		.then( c => t.is(c, myTape.eof) )
		.then( () => myTape.read() )
		.then( c => t.is(c, myTape.eof) )
		.then( () => myTape.read() )
		.then( c => t.is(c, myTape.eof) ) ;

} ) ;
