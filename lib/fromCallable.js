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
 * @param {Callable} _callable - the callable to convert
 * @returns {Tape}
 */
var _default = function _default(_callable) {
  return new _Tape.default(_callable);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcm9tQ2FsbGFibGUuanMiXSwibmFtZXMiOlsiX2NhbGxhYmxlIiwiVGFwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7Ozs7ZUFPZSxrQkFBQUEsU0FBUztBQUFBLFNBQUksSUFBSUMsYUFBSixDQUFVRCxTQUFWLENBQUo7QUFBQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhcGUgZnJvbSAnLi9UYXBlJyA7XG5cbi8qKlxuICogQ29udmVydHMgYSBjYWxsYWJsZSB0byBhIHRhcGUuXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0NhbGxhYmxlfSBfY2FsbGFibGUgLSB0aGUgY2FsbGFibGUgdG8gY29udmVydFxuICogQHJldHVybnMge1RhcGV9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IF9jYWxsYWJsZSA9PiBuZXcgVGFwZSggX2NhbGxhYmxlICkgO1xuIl19