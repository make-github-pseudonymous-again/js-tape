"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toIterator = _interopRequireDefault(require("./toIterator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts a tape to a callable.
 * @kind function
 * @param {Tape} tape the tape to read from
 */
var _default = function _default(tape) {
  var it = (0, _toIterator.default)(tape);
  return it.next.bind(it);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b0NhbGxhYmxlLmpzIl0sIm5hbWVzIjpbInRhcGUiLCJpdCIsIm5leHQiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQTs7Ozs7ZUFLZSxrQkFBQUEsSUFBSSxFQUFJO0FBQ3RCLE1BQU1DLEVBQUUsR0FBRyx5QkFBWUQsSUFBWixDQUFYO0FBQ0EsU0FBT0MsRUFBRSxDQUFDQyxJQUFILENBQVFDLElBQVIsQ0FBY0YsRUFBZCxDQUFQO0FBQ0EsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b0l0ZXJhdG9yIGZyb20gJy4vdG9JdGVyYXRvcicgO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgdGFwZSB0byBhIGNhbGxhYmxlLlxuICogQGtpbmQgZnVuY3Rpb25cbiAqIEBwYXJhbSB7VGFwZX0gdGFwZSB0aGUgdGFwZSB0byByZWFkIGZyb21cbiAqL1xuZXhwb3J0IGRlZmF1bHQgdGFwZSA9PiB7XG5cdGNvbnN0IGl0ID0gdG9JdGVyYXRvciggdGFwZSApIDtcblx0cmV0dXJuIGl0Lm5leHQuYmluZCggaXQgKSA7XG59IDtcbiJdfQ==