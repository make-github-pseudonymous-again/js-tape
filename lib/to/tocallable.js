'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tocallable = undefined;

var _toiterator = require('./toiterator');

/**
 * Converts a stream to a callable.
 * @kind function
 * @param {Stream} stream the stream to read from
 */
var tocallable = exports.tocallable = function tocallable(stream) {
  var it = (0, _toiterator.toiterator)(stream);
  return it.next.bind(it);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90by90b2NhbGxhYmxlLmpzIl0sIm5hbWVzIjpbInRvY2FsbGFibGUiLCJpdCIsInN0cmVhbSIsIm5leHQiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7O0FBS08sSUFBTUEsa0NBQWEsU0FBYkEsVUFBYSxTQUFVO0FBQ25DLE1BQU1DLEtBQUssNEJBQVlDLE1BQVosQ0FBWDtBQUNBLFNBQU9ELEdBQUdFLElBQUgsQ0FBUUMsSUFBUixDQUFjSCxFQUFkLENBQVA7QUFDQSxDQUhNIiwiZmlsZSI6InRvY2FsbGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b2l0ZXJhdG9yIH0gZnJvbSAnLi90b2l0ZXJhdG9yJyA7XG5cbi8qKlxuICogQ29udmVydHMgYSBzdHJlYW0gdG8gYSBjYWxsYWJsZS5cbiAqIEBraW5kIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmVhbX0gc3RyZWFtIHRoZSBzdHJlYW0gdG8gcmVhZCBmcm9tXG4gKi9cbmV4cG9ydCBjb25zdCB0b2NhbGxhYmxlID0gc3RyZWFtID0+IHtcblx0Y29uc3QgaXQgPSB0b2l0ZXJhdG9yKCBzdHJlYW0gKSA7XG5cdHJldHVybiBpdC5uZXh0LmJpbmQoIGl0ICkgO1xufSA7XG4iXX0=