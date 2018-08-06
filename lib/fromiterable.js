'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fromiterator = require('./fromiterator');

var _fromiterator2 = _interopRequireDefault(_fromiterator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts an iterable to a stream.
 * @param {Iterable} _iterable the iterable to convert
 * @function
 */
exports.default = function (_iterable) {
  return (0, _fromiterator2.default)(_iterable[Symbol.iterator]());
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcm9taXRlcmFibGUuanMiXSwibmFtZXMiOlsiX2l0ZXJhYmxlIiwiU3ltYm9sIiwiaXRlcmF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQTs7Ozs7a0JBS2U7QUFBQSxTQUFhLDRCQUFjQSxVQUFVQyxPQUFPQyxRQUFqQixHQUFkLENBQWI7QUFBQSxDIiwiZmlsZSI6ImZyb21pdGVyYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcm9taXRlcmF0b3IgZnJvbSAnLi9mcm9taXRlcmF0b3InIDtcblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBpdGVyYWJsZSB0byBhIHN0cmVhbS5cbiAqIEBwYXJhbSB7SXRlcmFibGV9IF9pdGVyYWJsZSB0aGUgaXRlcmFibGUgdG8gY29udmVydFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IF9pdGVyYWJsZSA9PiBmcm9taXRlcmF0b3IoIF9pdGVyYWJsZVtTeW1ib2wuaXRlcmF0b3JdKCApICkgO1xuIl19