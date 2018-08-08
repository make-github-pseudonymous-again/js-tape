"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TapeFromCallable = _interopRequireDefault(require("./TapeFromCallable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts a callable to a tape.
 * @param {Callable} _callable the callable to convert
 * @function
 */
var _default = function _default(_callable) {
  return new _TapeFromCallable.default(_callable);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcm9tQ2FsbGFibGUuanMiXSwibmFtZXMiOlsiX2NhbGxhYmxlIiwiVGFwZUZyb21DYWxsYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7O2VBS2Usa0JBQUFBLFNBQVM7QUFBQSxTQUFJLElBQUlDLHlCQUFKLENBQXNCRCxTQUF0QixDQUFKO0FBQUEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYXBlRnJvbUNhbGxhYmxlIGZyb20gJy4vVGFwZUZyb21DYWxsYWJsZScgO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgY2FsbGFibGUgdG8gYSB0YXBlLlxuICogQHBhcmFtIHtDYWxsYWJsZX0gX2NhbGxhYmxlIHRoZSBjYWxsYWJsZSB0byBjb252ZXJ0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgX2NhbGxhYmxlID0+IG5ldyBUYXBlRnJvbUNhbGxhYmxlKCBfY2FsbGFibGUgKSA7XG4iXX0=