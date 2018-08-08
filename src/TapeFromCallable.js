import EOF from './EOF' ;

/**
 * Class that wraps a callable with a tape.
 */
export default class TapeFromCallable {

	/**
	 * The constructor. Stores the callable that yields values to tape.
	 *
	 * @param {Callable} callable - The callable to use.
	 * @returns {TapeFromCallable}
	 *
	 */
	constructor ( callable ) {
		this.callable = callable ;
		this.buffer = [ ] ;
		this.eof = EOF ;
	}

	/**
	 * Returns the next token in the tape or {@link TapeFromCallable#eof}
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
	 * Puts a token back in the tape. If {@link TapeFromCallable#read} is
	 * used just after, this token will be returned.
	 *
	 * @param {Object} token - The token to put back in the tape.
	 */
	unread ( token ) {

		// should this be async too ?
		this.buffer.push( token ) ;

	}

}
