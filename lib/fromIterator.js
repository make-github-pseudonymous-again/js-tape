"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fromCallable = _interopRequireDefault(require("./fromCallable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts an iterator to a stream.
 * @param {Iterator} _iterator the iterator to convert
 * @function
 */
var _default = function _default(_iterator) {
  return (0, _fromCallable.default)(_iterator.next.bind(_iterator));
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcm9tSXRlcmF0b3IuanMiXSwibmFtZXMiOlsiX2l0ZXJhdG9yIiwibmV4dCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7OztlQUtlLGtCQUFBQSxTQUFTO0FBQUEsU0FBSSwyQkFBY0EsU0FBUyxDQUFDQyxJQUFWLENBQWVDLElBQWYsQ0FBcUJGLFNBQXJCLENBQWQsQ0FBSjtBQUFBLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnJvbUNhbGxhYmxlIGZyb20gJy4vZnJvbUNhbGxhYmxlJyA7XG5cbi8qKlxuICogQ29udmVydHMgYW4gaXRlcmF0b3IgdG8gYSBzdHJlYW0uXG4gKiBAcGFyYW0ge0l0ZXJhdG9yfSBfaXRlcmF0b3IgdGhlIGl0ZXJhdG9yIHRvIGNvbnZlcnRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBfaXRlcmF0b3IgPT4gZnJvbUNhbGxhYmxlKCBfaXRlcmF0b3IubmV4dC5iaW5kKCBfaXRlcmF0b3IgKSApIDtcbiJdfQ==