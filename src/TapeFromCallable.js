import EOF from './EOF' ;

/**
 * Class that wraps a callable with a tape.
 * Do not use directly. Use {@link fromCallable} instead.
 */
export default class TapeFromCallable {

	/**
	 * The constructor. Stores the callable that yields values to put on the tape.
	 *
	 * @param {Callable} callable - The callable to use.
	 */
	constructor ( callable ) {
		this.callable = callable ;
		this.buffer = [ ] ;
		this.eof = EOF ;
	}

	/**
	 * Returns the next token on the tape or {@link TapeFromCallable#eof}
	 * if the tape has been exhausted.
	 *
	 * @returns {Object}
	 */
	async read ( ) {

		if ( this.buffer.length > 0 ) return this.buffer.pop( ) ;

		const state = await this.callable( ) ;

		if ( state.done ) return this.eof ;

		return state.value ;

	}

	/**
	 * Puts a token back on the tape. If {@link TapeFromCallable#read} is
	 * used just after, this token will be returned.
	 *
	 * @param {Object} token - The token to put back on the tape.
	 */
	unread ( token ) {

		// should this be async too ?
		this.buffer.push( token ) ;

	}

	/**
	 * Skips the next token on the tape.
	 */
	async skip ( ) {

		if ( this.buffer.length > 0 ) this.buffer.pop( ) ;
		else await this.callable( ) ;

	}

	/**
	 * Skip the next `n` tokens on the tape.
	 *
	 * @param {Number} n - The number of tokens to skip.
	 */
	async skipMany ( n ) {

		while ( n --> 0 ) await this.skip() ;

	}

}
