"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fromiterator = _interopRequireDefault(require("./fromiterator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts an asynchronous iterable to a stream.
 * @param {AsyncIterable} _iterable the iterable to convert
 * @function
 */
var _default = function _default(_iterable) {
  return (0, _fromiterator.default)(_iterable[Symbol.asyncIterator]());
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcm9tYXN5bmNpdGVyYWJsZS5qcyJdLCJuYW1lcyI6WyJfaXRlcmFibGUiLCJTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQTs7Ozs7ZUFLZSxrQkFBQUEsU0FBUztBQUFBLFNBQUksMkJBQWNBLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDQyxhQUFSLENBQVQsRUFBZCxDQUFKO0FBQUEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcm9taXRlcmF0b3IgZnJvbSAnLi9mcm9taXRlcmF0b3InIDtcblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBhc3luY2hyb25vdXMgaXRlcmFibGUgdG8gYSBzdHJlYW0uXG4gKiBAcGFyYW0ge0FzeW5jSXRlcmFibGV9IF9pdGVyYWJsZSB0aGUgaXRlcmFibGUgdG8gY29udmVydFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IF9pdGVyYWJsZSA9PiBmcm9taXRlcmF0b3IoIF9pdGVyYWJsZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oICkgKSA7XG4iXX0=