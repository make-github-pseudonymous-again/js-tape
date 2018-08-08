import test from 'ava' ;

import tape from '../../src' ;

/**
 * @test {fromString}
 * @test {Tape#read}
 * @test {Tape#unread}
 * @test {Tape#skip}
 * @test {Tape#skipMany}
 */
test( 'As a promise' , t => {

	const myTape = tape.fromString( 'abracadabra' ) ;

	return myTape.read()
		.then( c => t.is(c, 'a') )
		.then( () => myTape.read() )
		.then( c => t.is(c, 'b') )
		.then( () => myTape.unread('Z') )
		.then( () => myTape.unread('X') )
		.then( () => myTape.read() )
		.then( c => t.is(c, 'X') )
		.then( () => myTape.read() )
		.then( c => t.is(c, 'Z') )
		.then( () => myTape.skipMany(0) )
		.then( () => myTape.read() )
		.then( c => t.is(c, 'r') )
		.then( () => myTape.read() )
		.then( c => t.is(c, 'a') )
		.then( () => myTape.skipMany(2) )
		.then( () => myTape.read() )
		.then( c => t.is(c, 'd') )
		.then( () => myTape.skip() )
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
		.then( () => myTape.unread('X') )
		.then( () => myTape.unread('Y') )
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
