/**
 * Exhausts a tape.
 * @param {Tape} tape the tape to read from
 */
export default async function exhaust ( tape ) {

	while ( await tape.read( ) !== tape.eof ) ;

}
