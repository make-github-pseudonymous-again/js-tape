'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromcallable = undefined;

var _StreamFromCallable = require('./StreamFromCallable');

/**
 * Converts a callable to a stream.
 * @param {Callable} _callable the callable to convert
 * @function
 */
var fromcallable = exports.fromcallable = function fromcallable(_callable) {
  return new _StreamFromCallable.StreamFromCallable(_callable);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcm9tL2Zyb21jYWxsYWJsZS5qcyJdLCJuYW1lcyI6WyJmcm9tY2FsbGFibGUiLCJfY2FsbGFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7QUFLTyxJQUFNQSxzQ0FBZSxTQUFmQSxZQUFlO0FBQUEsU0FBYSwyQ0FBd0JDLFNBQXhCLENBQWI7QUFBQSxDQUFyQiIsImZpbGUiOiJmcm9tY2FsbGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJlYW1Gcm9tQ2FsbGFibGUgfSBmcm9tICcuL1N0cmVhbUZyb21DYWxsYWJsZScgO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgY2FsbGFibGUgdG8gYSBzdHJlYW0uXG4gKiBAcGFyYW0ge0NhbGxhYmxlfSBfY2FsbGFibGUgdGhlIGNhbGxhYmxlIHRvIGNvbnZlcnRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgZnJvbWNhbGxhYmxlID0gX2NhbGxhYmxlID0+IG5ldyBTdHJlYW1Gcm9tQ2FsbGFibGUoIF9jYWxsYWJsZSApIDtcbiJdfQ==