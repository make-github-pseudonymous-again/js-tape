"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toAsyncIterator = _interopRequireDefault(require("./toAsyncIterator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts a tape to a callable.
 *
 * @function
 * @param {Tape} tape - the tape to read from
 * @return {Callable}
 */
var _default = function _default(tape) {
  var it = (0, _toAsyncIterator.default)(tape);
  return it.next.bind(it);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b0FzeW5jQ2FsbGFibGUuanMiXSwibmFtZXMiOlsidGFwZSIsIml0IiwibmV4dCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7Ozs7O2VBT2Usa0JBQUFBLElBQUksRUFBSTtBQUN0QixNQUFNQyxFQUFFLEdBQUcsOEJBQWlCRCxJQUFqQixDQUFYO0FBQ0EsU0FBT0MsRUFBRSxDQUFDQyxJQUFILENBQVFDLElBQVIsQ0FBY0YsRUFBZCxDQUFQO0FBQ0EsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b0FzeW5jSXRlcmF0b3IgZnJvbSAnLi90b0FzeW5jSXRlcmF0b3InIDtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIHRhcGUgdG8gYSBjYWxsYWJsZS5cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7VGFwZX0gdGFwZSAtIHRoZSB0YXBlIHRvIHJlYWQgZnJvbVxuICogQHJldHVybiB7Q2FsbGFibGV9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHRhcGUgPT4ge1xuXHRjb25zdCBpdCA9IHRvQXN5bmNJdGVyYXRvciggdGFwZSApIDtcblx0cmV0dXJuIGl0Lm5leHQuYmluZCggaXQgKSA7XG59IDtcbiJdfQ==