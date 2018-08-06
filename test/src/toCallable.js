import test from 'ava' ;

import stream from '../../src' ;

/**
 * @test {stream#tocallable}
 */
test( 'stream#tocallable' , async t => {

	const input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
	const mystream1 = stream.fromString( input ) ;
	const mycallable = stream.toCallable( mystream1 ) ;
	const mystream2 = stream.fromCallable( mycallable ) ;
	t.deepEqual((await mycallable()).value, '\n');
	t.deepEqual('\n'+(await stream.toString( mystream2 )), input ) ;

} ) ;
