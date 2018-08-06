/**
 * Exhausts a stream.
 * @param {Stream} stream the stream to read from
 */
export default async function exhaust ( stream ) {

	while ( await stream.read( ) !== stream.eof ) ;

}
