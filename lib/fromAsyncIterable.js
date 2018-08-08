"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fromIterator = _interopRequireDefault(require("./fromIterator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts an asynchronous iterable to a tape.
 *
 * @function
 * @param {AsyncIterable} _iterable - the iterable to convert
 * @returns {Tape}
 */
var _default = function _default(_iterable) {
  return (0, _fromIterator.default)(_iterable[Symbol.asyncIterator]());
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcm9tQXN5bmNJdGVyYWJsZS5qcyJdLCJuYW1lcyI6WyJfaXRlcmFibGUiLCJTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQTs7Ozs7OztlQU9lLGtCQUFBQSxTQUFTO0FBQUEsU0FBSSwyQkFBY0EsU0FBUyxDQUFDQyxNQUFNLENBQUNDLGFBQVIsQ0FBVCxFQUFkLENBQUo7QUFBQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZyb21JdGVyYXRvciBmcm9tICcuL2Zyb21JdGVyYXRvcicgO1xuXG4vKipcbiAqIENvbnZlcnRzIGFuIGFzeW5jaHJvbm91cyBpdGVyYWJsZSB0byBhIHRhcGUuXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0FzeW5jSXRlcmFibGV9IF9pdGVyYWJsZSAtIHRoZSBpdGVyYWJsZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7VGFwZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgX2l0ZXJhYmxlID0+IGZyb21JdGVyYXRvciggX2l0ZXJhYmxlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSggKSApIDtcbiJdfQ==