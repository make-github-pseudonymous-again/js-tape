import EOF from './EOF' ;

/**
 * Class that wraps a callable with a stream.
 */
export default class StreamFromCallable {

	/**
	 * The constructor. Stores the callable that yields values to stream.
	 *
	 * @param {Callable} callable - The callable to use.
	 * @returns {StreamFromCallable}
	 *
	 */
	constructor ( callable ) {
		this.callable = callable ;
		this.buffer = [ ] ;
		this.eof = EOF ;
	}

	/**
	 * Returns the next token in the stream or {@link StreamFromCallable#eof}
	 * if the stream has been exhausted.
	 *
	 * @returns {Object}
	 */
	read ( ) {

		if ( this.buffer.length > 0 ) return this.buffer.pop( ) ;

		const state = this.callable( ) ;

		if ( state.done ) return this.eof ;

		return state.value ;

	}

	/**
	 * Puts a token back in the stream. If {@link StreamFromCallable#read} is
	 * used just after, this token will be returned.
	 *
	 * @param {Object} token - The token to put back in the stream.
	 */
	unread ( token ) {

		this.buffer.push( token ) ;

	}

}
