"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _StreamFromCallable = _interopRequireDefault(require("./StreamFromCallable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts a callable to a stream.
 * @param {Callable} _callable the callable to convert
 * @function
 */
var _default = function _default(_callable) {
  return new _StreamFromCallable.default(_callable);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcm9tY2FsbGFibGUuanMiXSwibmFtZXMiOlsiX2NhbGxhYmxlIiwiU3RyZWFtRnJvbUNhbGxhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQTs7Ozs7ZUFLZSxrQkFBQUEsU0FBUztBQUFBLFNBQUksSUFBSUMsMkJBQUosQ0FBd0JELFNBQXhCLENBQUo7QUFBQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmVhbUZyb21DYWxsYWJsZSBmcm9tICcuL1N0cmVhbUZyb21DYWxsYWJsZScgO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgY2FsbGFibGUgdG8gYSBzdHJlYW0uXG4gKiBAcGFyYW0ge0NhbGxhYmxlfSBfY2FsbGFibGUgdGhlIGNhbGxhYmxlIHRvIGNvbnZlcnRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBfY2FsbGFibGUgPT4gbmV3IFN0cmVhbUZyb21DYWxsYWJsZSggX2NhbGxhYmxlICkgO1xuIl19