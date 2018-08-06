"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toAsyncIterable = _interopRequireDefault(require("./toAsyncIterable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts a stream to an iterator.
 * @kind function
 * @param {Stream} stream the stream to read from
 */
var _default = function _default(stream) {
  return (0, _toAsyncIterable.default)(stream)[Symbol.asyncIterator]();
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b0l0ZXJhdG9yLmpzIl0sIm5hbWVzIjpbInN0cmVhbSIsIlN5bWJvbCIsImFzeW5jSXRlcmF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7OztlQUtlLGtCQUFBQSxNQUFNO0FBQUEsU0FBSSw4QkFBaUJBLE1BQWpCLEVBQTBCQyxNQUFNLENBQUNDLGFBQWpDLEdBQUo7QUFBQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvQXN5bmNJdGVyYWJsZSBmcm9tICcuL3RvQXN5bmNJdGVyYWJsZScgO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgc3RyZWFtIHRvIGFuIGl0ZXJhdG9yLlxuICogQGtpbmQgZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyZWFtfSBzdHJlYW0gdGhlIHN0cmVhbSB0byByZWFkIGZyb21cbiAqL1xuZXhwb3J0IGRlZmF1bHQgc3RyZWFtID0+IHRvQXN5bmNJdGVyYWJsZSggc3RyZWFtIClbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCApIDtcbiJdfQ==