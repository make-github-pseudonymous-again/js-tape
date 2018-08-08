"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toAsyncIterable = _interopRequireDefault(require("./toAsyncIterable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts a tape to an iterator.
 * @kind function
 * @param {Tape} tape the tape to read from
 */
var _default = function _default(tape) {
  return (0, _toAsyncIterable.default)(tape)[Symbol.asyncIterator]();
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b0l0ZXJhdG9yLmpzIl0sIm5hbWVzIjpbInRhcGUiLCJTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQTs7Ozs7ZUFLZSxrQkFBQUEsSUFBSTtBQUFBLFNBQUksOEJBQWlCQSxJQUFqQixFQUF3QkMsTUFBTSxDQUFDQyxhQUEvQixHQUFKO0FBQUEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b0FzeW5jSXRlcmFibGUgZnJvbSAnLi90b0FzeW5jSXRlcmFibGUnIDtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIHRhcGUgdG8gYW4gaXRlcmF0b3IuXG4gKiBAa2luZCBmdW5jdGlvblxuICogQHBhcmFtIHtUYXBlfSB0YXBlIHRoZSB0YXBlIHRvIHJlYWQgZnJvbVxuICovXG5leHBvcnQgZGVmYXVsdCB0YXBlID0+IHRvQXN5bmNJdGVyYWJsZSggdGFwZSApW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSggKSA7XG4iXX0=