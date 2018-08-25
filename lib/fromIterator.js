"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fromCallable = _interopRequireDefault(require("./fromCallable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts an iterator to a tape.
 *
 * @function
 * @param {Iterator} iterator - The iterator to convert.
 * @returns {Tape} The converted tape.
 */
var _default = function _default(iterator) {
  return (0, _fromCallable.default)(iterator.next.bind(iterator));
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcm9tSXRlcmF0b3IuanMiXSwibmFtZXMiOlsiaXRlcmF0b3IiLCJuZXh0IiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7Ozs7ZUFPZSxrQkFBQUEsUUFBUTtBQUFBLFNBQUksMkJBQWFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxJQUFkLENBQW1CRixRQUFuQixDQUFiLENBQUo7QUFBQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZyb21DYWxsYWJsZSBmcm9tICcuL2Zyb21DYWxsYWJsZSc7XG5cbi8qKlxuICogQ29udmVydHMgYW4gaXRlcmF0b3IgdG8gYSB0YXBlLlxuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtJdGVyYXRvcn0gaXRlcmF0b3IgLSBUaGUgaXRlcmF0b3IgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtUYXBlfSBUaGUgY29udmVydGVkIHRhcGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGl0ZXJhdG9yID0+IGZyb21DYWxsYWJsZShpdGVyYXRvci5uZXh0LmJpbmQoaXRlcmF0b3IpKTtcbiJdfQ==