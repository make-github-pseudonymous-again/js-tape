import test from 'ava' ;

import { fromstring , skip } from '../../src' ;

/**
 * @test {stream#fromstring}
 * @test {stream#skip}
 */
test( 'can skip tokens from stream' , async t => {

	const input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
	const stream = fromstring( input ) ;
	t.deepEqual( await skip( stream , ' \t\n' ) , '1' ) ;
	t.deepEqual( await skip( stream , ' \t\n' ) , ',' ) ;
	t.deepEqual( await skip( stream , ' \t\n' ) , '2' ) ;
	t.deepEqual( await skip( stream , ' \t\n' ) , '2' ) ;
	t.deepEqual( await skip( stream , ' \t\n' ) , ',' ) ;
	t.deepEqual( await skip( stream , ' \t\n' ) , '3' ) ;
	t.deepEqual( await skip( stream , ' \t\n' ) , '3' ) ;
	t.deepEqual( await skip( stream , ' \t\n' ) , '3' ) ;
	t.deepEqual( await skip( stream , ' \t\n' ) , ',' ) ;
	t.deepEqual( await skip( stream , ' \t\n' ) , '-' ) ;
	t.deepEqual( await skip( stream , ' \t\n' ) , '4' ) ;
	t.deepEqual( await skip( stream , ' \t\n' ) , '4' ) ;
	t.deepEqual( await skip( stream , ' \t\n' ) , ',' ) ;
	t.deepEqual( await skip( stream , ' \t\n' ) , '-' ) ;
	t.deepEqual( await skip( stream , ' \t\n' ) , '5' ) ;
	t.deepEqual( await skip( stream , ' \t\n' ) , stream.eof ) ;

} ) ;
