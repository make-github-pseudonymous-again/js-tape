'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toiterable = require('./toiterable');

var _toiterable2 = _interopRequireDefault(_toiterable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Converts a stream to an array.
 * @kind function
 * @param {Stream} stream the stream to read from
 */
exports.default = function (stream) {
  return [].concat(_toConsumableArray((0, _toiterable2.default)(stream)));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b2FycmF5LmpzIl0sIm5hbWVzIjpbInN0cmVhbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7O2tCQUtlO0FBQUEsc0NBQWUsMEJBQVlBLE1BQVosQ0FBZjtBQUFBLEMiLCJmaWxlIjoidG9hcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHRvaXRlcmFibGUgZnJvbSAnLi90b2l0ZXJhYmxlJyA7XG5cbi8qKlxuICogQ29udmVydHMgYSBzdHJlYW0gdG8gYW4gYXJyYXkuXG4gKiBAa2luZCBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJlYW19IHN0cmVhbSB0aGUgc3RyZWFtIHRvIHJlYWQgZnJvbVxuICovXG5leHBvcnQgZGVmYXVsdCBzdHJlYW0gPT4gWyAuLi50b2l0ZXJhYmxlKCBzdHJlYW0gKSBdIDtcbiJdfQ==