'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StreamFromCallable = require('./StreamFromCallable');

var _StreamFromCallable2 = _interopRequireDefault(_StreamFromCallable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts a callable to a stream.
 * @param {Callable} _callable the callable to convert
 * @function
 */
exports.default = function (_callable) {
  return new _StreamFromCallable2.default(_callable);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcm9tY2FsbGFibGUuanMiXSwibmFtZXMiOlsiU3RyZWFtRnJvbUNhbGxhYmxlIiwiX2NhbGxhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUE7Ozs7O2tCQUtlO0FBQUEsU0FBYSxJQUFJQSw0QkFBSixDQUF3QkMsU0FBeEIsQ0FBYjtBQUFBLEMiLCJmaWxlIjoiZnJvbWNhbGxhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmVhbUZyb21DYWxsYWJsZSBmcm9tICcuL1N0cmVhbUZyb21DYWxsYWJsZScgO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgY2FsbGFibGUgdG8gYSBzdHJlYW0uXG4gKiBAcGFyYW0ge0NhbGxhYmxlfSBfY2FsbGFibGUgdGhlIGNhbGxhYmxlIHRvIGNvbnZlcnRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBfY2FsbGFibGUgPT4gbmV3IFN0cmVhbUZyb21DYWxsYWJsZSggX2NhbGxhYmxlICkgO1xuIl19