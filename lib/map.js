"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = map;

var _fromAsyncIterable = _interopRequireDefault(require("./fromAsyncIterable"));

var _toAsyncIterable = _interopRequireDefault(require("./toAsyncIterable"));

var _asyncIterableMap = _interopRequireDefault(require("./asyncIterableMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Applies a callable to each token of a stream.
 * @param {Callable} callable the callable to apply
 * @param {Stream} stream the stream to process
 */
function map(callable, stream) {
  return (0, _fromAsyncIterable.default)((0, _asyncIterableMap.default)(callable, (0, _toAsyncIterable.default)(stream)));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXAuanMiXSwibmFtZXMiOlsibWFwIiwiY2FsbGFibGUiLCJzdHJlYW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBOzs7OztBQUtlLFNBQVNBLEdBQVQsQ0FBZUMsUUFBZixFQUEwQkMsTUFBMUIsRUFBbUM7QUFFakQsU0FBTyxnQ0FBbUIsK0JBQWtCRCxRQUFsQixFQUE2Qiw4QkFBaUJDLE1BQWpCLENBQTdCLENBQW5CLENBQVA7QUFFQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcm9tQXN5bmNJdGVyYWJsZSBmcm9tICcuL2Zyb21Bc3luY0l0ZXJhYmxlJyA7XG5pbXBvcnQgdG9Bc3luY0l0ZXJhYmxlIGZyb20gJy4vdG9Bc3luY0l0ZXJhYmxlJyA7XG5pbXBvcnQgYXN5bmNJdGVyYWJsZU1hcCBmcm9tICcuL2FzeW5jSXRlcmFibGVNYXAnIDtcblxuLyoqXG4gKiBBcHBsaWVzIGEgY2FsbGFibGUgdG8gZWFjaCB0b2tlbiBvZiBhIHN0cmVhbS5cbiAqIEBwYXJhbSB7Q2FsbGFibGV9IGNhbGxhYmxlIHRoZSBjYWxsYWJsZSB0byBhcHBseVxuICogQHBhcmFtIHtTdHJlYW19IHN0cmVhbSB0aGUgc3RyZWFtIHRvIHByb2Nlc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFwICggY2FsbGFibGUgLCBzdHJlYW0gKSB7XG5cblx0cmV0dXJuIGZyb21Bc3luY0l0ZXJhYmxlKCBhc3luY0l0ZXJhYmxlTWFwKCBjYWxsYWJsZSAsIHRvQXN5bmNJdGVyYWJsZSggc3RyZWFtICkgKSApIDtcblxufVxuIl19