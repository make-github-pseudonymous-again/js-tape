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
 * @param {Iterable} _iterable - the iterable to convert
 * @returns {Tape}
 */
var _default = function _default(_iterable) {
  return (0, _fromIterator.default)(_iterable[Symbol.iterator]());
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcm9tSXRlcmFibGUuanMiXSwibmFtZXMiOlsiX2l0ZXJhYmxlIiwiU3ltYm9sIiwiaXRlcmF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7Ozs7O2VBT2Usa0JBQUFBLFNBQVM7QUFBQSxTQUFJLDJCQUFjQSxTQUFTLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUixDQUFULEVBQWQsQ0FBSjtBQUFBLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnJvbUl0ZXJhdG9yIGZyb20gJy4vZnJvbUl0ZXJhdG9yJyA7XG5cbi8qKlxuICogQ29udmVydHMgYW4gaXRlcmFibGUgdG8gYSB0YXBlLlxuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtJdGVyYWJsZX0gX2l0ZXJhYmxlIC0gdGhlIGl0ZXJhYmxlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtUYXBlfVxuICovXG5leHBvcnQgZGVmYXVsdCBfaXRlcmFibGUgPT4gZnJvbUl0ZXJhdG9yKCBfaXRlcmFibGVbU3ltYm9sLml0ZXJhdG9yXSggKSApIDtcbiJdfQ==