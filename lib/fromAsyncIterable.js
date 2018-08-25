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
 * @param {AsyncIterable} _iterable - The iterable to convert.
 * @returns {Tape} The converted tape.
 */
var _default = function _default(_iterable) {
  return (0, _fromIterator.default)(_iterable[Symbol.asyncIterator]());
}; // eslint-disable-line no-use-extend-native/no-use-extend-native


exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcm9tQXN5bmNJdGVyYWJsZS5qcyJdLCJuYW1lcyI6WyJfaXRlcmFibGUiLCJTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQTs7Ozs7OztlQU9lLGtCQUFBQSxTQUFTO0FBQUEsU0FBSSwyQkFBYUEsU0FBUyxDQUFDQyxNQUFNLENBQUNDLGFBQVIsQ0FBVCxFQUFiLENBQUo7QUFBQSxDLEVBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZyb21JdGVyYXRvciBmcm9tICcuL2Zyb21JdGVyYXRvcic7XG5cbi8qKlxuICogQ29udmVydHMgYW4gYXN5bmNocm9ub3VzIGl0ZXJhYmxlIHRvIGEgdGFwZS5cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7QXN5bmNJdGVyYWJsZX0gX2l0ZXJhYmxlIC0gVGhlIGl0ZXJhYmxlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7VGFwZX0gVGhlIGNvbnZlcnRlZCB0YXBlLlxuICovXG5leHBvcnQgZGVmYXVsdCBfaXRlcmFibGUgPT4gZnJvbUl0ZXJhdG9yKF9pdGVyYWJsZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlLWV4dGVuZC1uYXRpdmUvbm8tdXNlLWV4dGVuZC1uYXRpdmVcbiJdfQ==