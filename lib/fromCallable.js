"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Tape = _interopRequireDefault(require("./Tape"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Converts a callable to a tape.
 *
 * @function
 * @param {Callable} callable - The callable to convert.
 * @returns {Tape} The converted tape.
 */
var _default = function _default(callable) {
  return new _Tape["default"](callable);
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcm9tQ2FsbGFibGUuanMiXSwibmFtZXMiOlsiY2FsbGFibGUiLCJUYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQTs7Ozs7OztlQU9lLGtCQUFBQSxRQUFRO0FBQUEsU0FBSSxJQUFJQyxnQkFBSixDQUFTRCxRQUFULENBQUo7QUFBQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhcGUgZnJvbSAnLi9UYXBlJztcblxuLyoqXG4gKiBDb252ZXJ0cyBhIGNhbGxhYmxlIHRvIGEgdGFwZS5cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7Q2FsbGFibGV9IGNhbGxhYmxlIC0gVGhlIGNhbGxhYmxlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7VGFwZX0gVGhlIGNvbnZlcnRlZCB0YXBlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjYWxsYWJsZSA9PiBuZXcgVGFwZShjYWxsYWJsZSk7XG4iXX0=