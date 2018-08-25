"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Tape = _interopRequireDefault(require("./Tape"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts a callable to a tape.
 *
 * @function
 * @param {Callable} callable - The callable to convert.
 * @returns {Tape} The converted tape.
 */
var _default = function _default(callable) {
  return new _Tape.default(callable);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcm9tQ2FsbGFibGUuanMiXSwibmFtZXMiOlsiY2FsbGFibGUiLCJUYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQTs7Ozs7OztlQU9lLGtCQUFBQSxRQUFRO0FBQUEsU0FBSSxJQUFJQyxhQUFKLENBQVNELFFBQVQsQ0FBSjtBQUFBLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFwZSBmcm9tICcuL1RhcGUnO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgY2FsbGFibGUgdG8gYSB0YXBlLlxuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtDYWxsYWJsZX0gY2FsbGFibGUgLSBUaGUgY2FsbGFibGUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtUYXBlfSBUaGUgY29udmVydGVkIHRhcGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNhbGxhYmxlID0+IG5ldyBUYXBlKGNhbGxhYmxlKTtcbiJdfQ==