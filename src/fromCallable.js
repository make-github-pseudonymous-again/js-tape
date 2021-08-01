import Tape from './Tape.js';

/**
 * Converts a callable to a tape.
 *
 * @function
 * @param {Function} callable - The callable to convert.
 * @returns {Tape} The converted tape.
 */
export default (callable) => new Tape(callable);
