'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toiterator = require('./toiterator');

var _toiterator2 = _interopRequireDefault(_toiterator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts a stream to a callable.
 * @kind function
 * @param {Stream} stream the stream to read from
 */
exports.default = function (stream) {
  var it = (0, _toiterator2.default)(stream);
  return it.next.bind(it);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b2NhbGxhYmxlLmpzIl0sIm5hbWVzIjpbIml0Iiwic3RyZWFtIiwibmV4dCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQTs7Ozs7a0JBS2Usa0JBQVU7QUFDeEIsTUFBTUEsS0FBSywwQkFBWUMsTUFBWixDQUFYO0FBQ0EsU0FBT0QsR0FBR0UsSUFBSCxDQUFRQyxJQUFSLENBQWNILEVBQWQsQ0FBUDtBQUNBLEMiLCJmaWxlIjoidG9jYWxsYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b2l0ZXJhdG9yIGZyb20gJy4vdG9pdGVyYXRvcicgO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgc3RyZWFtIHRvIGEgY2FsbGFibGUuXG4gKiBAa2luZCBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJlYW19IHN0cmVhbSB0aGUgc3RyZWFtIHRvIHJlYWQgZnJvbVxuICovXG5leHBvcnQgZGVmYXVsdCBzdHJlYW0gPT4ge1xuXHRjb25zdCBpdCA9IHRvaXRlcmF0b3IoIHN0cmVhbSApIDtcblx0cmV0dXJuIGl0Lm5leHQuYmluZCggaXQgKSA7XG59IDtcbiJdfQ==