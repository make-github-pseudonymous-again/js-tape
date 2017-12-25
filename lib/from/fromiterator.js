'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromiterator = undefined;

var _fromcallable = require('./fromcallable');

/**
 * Converts an iterator to a stream.
 * @param {Iterator} _iterator the iterator to convert
 * @function
 */
var fromiterator = exports.fromiterator = function fromiterator(_iterator) {
  return (0, _fromcallable.fromcallable)(_iterator.next.bind(_iterator));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcm9tL2Zyb21pdGVyYXRvci5qcyJdLCJuYW1lcyI6WyJmcm9taXRlcmF0b3IiLCJfaXRlcmF0b3IiLCJuZXh0IiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7OztBQUtPLElBQU1BLHNDQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFhLGdDQUFjQyxVQUFVQyxJQUFWLENBQWVDLElBQWYsQ0FBcUJGLFNBQXJCLENBQWQsQ0FBYjtBQUFBLENBQXJCIiwiZmlsZSI6ImZyb21pdGVyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZyb21jYWxsYWJsZSB9IGZyb20gJy4vZnJvbWNhbGxhYmxlJyA7XG5cbi8qKlxuICogQ29udmVydHMgYW4gaXRlcmF0b3IgdG8gYSBzdHJlYW0uXG4gKiBAcGFyYW0ge0l0ZXJhdG9yfSBfaXRlcmF0b3IgdGhlIGl0ZXJhdG9yIHRvIGNvbnZlcnRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgZnJvbWl0ZXJhdG9yID0gX2l0ZXJhdG9yID0+IGZyb21jYWxsYWJsZSggX2l0ZXJhdG9yLm5leHQuYmluZCggX2l0ZXJhdG9yICkgKSA7XG4iXX0=