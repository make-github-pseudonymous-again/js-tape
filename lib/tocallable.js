"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toiterator = _interopRequireDefault(require("./toiterator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts a stream to a callable.
 * @kind function
 * @param {Stream} stream the stream to read from
 */
var _default = function _default(stream) {
  var it = (0, _toiterator.default)(stream);
  return it.next.bind(it);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b2NhbGxhYmxlLmpzIl0sIm5hbWVzIjpbInN0cmVhbSIsIml0IiwibmV4dCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7OztlQUtlLGtCQUFBQSxNQUFNLEVBQUk7QUFDeEIsTUFBTUMsRUFBRSxHQUFHLHlCQUFZRCxNQUFaLENBQVg7QUFDQSxTQUFPQyxFQUFFLENBQUNDLElBQUgsQ0FBUUMsSUFBUixDQUFjRixFQUFkLENBQVA7QUFDQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvaXRlcmF0b3IgZnJvbSAnLi90b2l0ZXJhdG9yJyA7XG5cbi8qKlxuICogQ29udmVydHMgYSBzdHJlYW0gdG8gYSBjYWxsYWJsZS5cbiAqIEBraW5kIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmVhbX0gc3RyZWFtIHRoZSBzdHJlYW0gdG8gcmVhZCBmcm9tXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHN0cmVhbSA9PiB7XG5cdGNvbnN0IGl0ID0gdG9pdGVyYXRvciggc3RyZWFtICkgO1xuXHRyZXR1cm4gaXQubmV4dC5iaW5kKCBpdCApIDtcbn0gO1xuIl19