"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fromIterator = _interopRequireDefault(require("./fromIterator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts an asynchronous iterable to a tape.
 * @param {AsyncIterable} _iterable the iterable to convert
 * @function
 */
var _default = function _default(_iterable) {
  return (0, _fromIterator.default)(_iterable[Symbol.asyncIterator]());
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcm9tQXN5bmNJdGVyYWJsZS5qcyJdLCJuYW1lcyI6WyJfaXRlcmFibGUiLCJTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQTs7Ozs7ZUFLZSxrQkFBQUEsU0FBUztBQUFBLFNBQUksMkJBQWNBLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDQyxhQUFSLENBQVQsRUFBZCxDQUFKO0FBQUEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcm9tSXRlcmF0b3IgZnJvbSAnLi9mcm9tSXRlcmF0b3InIDtcblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBhc3luY2hyb25vdXMgaXRlcmFibGUgdG8gYSB0YXBlLlxuICogQHBhcmFtIHtBc3luY0l0ZXJhYmxlfSBfaXRlcmFibGUgdGhlIGl0ZXJhYmxlIHRvIGNvbnZlcnRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBfaXRlcmFibGUgPT4gZnJvbUl0ZXJhdG9yKCBfaXRlcmFibGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCApICkgO1xuIl19