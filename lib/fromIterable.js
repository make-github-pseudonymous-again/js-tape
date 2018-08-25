"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fromIterator = _interopRequireDefault(require("./fromIterator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts an iterable to a tape.
 *
 * @function
 * @param {Iterable} iterable - The iterable to convert.
 * @returns {Tape} The converted tape.
 */
var _default = function _default(iterable) {
  return (0, _fromIterator.default)(iterable[Symbol.iterator]());
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcm9tSXRlcmFibGUuanMiXSwibmFtZXMiOlsiaXRlcmFibGUiLCJTeW1ib2wiLCJpdGVyYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7Ozs7ZUFPZSxrQkFBQUEsUUFBUTtBQUFBLFNBQUksMkJBQWFBLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxRQUFSLENBQVIsRUFBYixDQUFKO0FBQUEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcm9tSXRlcmF0b3IgZnJvbSAnLi9mcm9tSXRlcmF0b3InO1xuXG4vKipcbiAqIENvbnZlcnRzIGFuIGl0ZXJhYmxlIHRvIGEgdGFwZS5cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGl0ZXJhYmxlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7VGFwZX0gVGhlIGNvbnZlcnRlZCB0YXBlLlxuICovXG5leHBvcnQgZGVmYXVsdCBpdGVyYWJsZSA9PiBmcm9tSXRlcmF0b3IoaXRlcmFibGVbU3ltYm9sLml0ZXJhdG9yXSgpKTtcbiJdfQ==