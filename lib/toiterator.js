'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toiterable = require('./toiterable');

var _toiterable2 = _interopRequireDefault(_toiterable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts a stream to an iterator.
 * @kind function
 * @param {Stream} stream the stream to read from
 */
exports.default = function (stream) {
  return (0, _toiterable2.default)(stream)[Symbol.iterator]();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b2l0ZXJhdG9yLmpzIl0sIm5hbWVzIjpbInN0cmVhbSIsIlN5bWJvbCIsIml0ZXJhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUE7Ozs7O2tCQUtlO0FBQUEsU0FBVSwwQkFBWUEsTUFBWixFQUFxQkMsT0FBT0MsUUFBNUIsR0FBVjtBQUFBLEMiLCJmaWxlIjoidG9pdGVyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b2l0ZXJhYmxlIGZyb20gJy4vdG9pdGVyYWJsZScgO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgc3RyZWFtIHRvIGFuIGl0ZXJhdG9yLlxuICogQGtpbmQgZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyZWFtfSBzdHJlYW0gdGhlIHN0cmVhbSB0byByZWFkIGZyb21cbiAqL1xuZXhwb3J0IGRlZmF1bHQgc3RyZWFtID0+IHRvaXRlcmFibGUoIHN0cmVhbSApW1N5bWJvbC5pdGVyYXRvcl0oICkgO1xuIl19