import fromAsyncIterable from './fromAsyncIterable' ;

async function* _fromReadStream ( readStream ) {

	for await (const chunk of readStream) {
		for (const piece of chunk) yield piece ;
	}

}

/**
 * Converts a ReadStream object to a stream.
 * @param {ReadStream} readStream the ReadStream object to convert
 * @function
 */
export default readStream => fromAsyncIterable( _fromReadStream( readStream ) ) ;
