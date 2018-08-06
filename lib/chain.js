"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = chain;

var _fromAsyncIterable = _interopRequireDefault(require("./fromAsyncIterable"));

var _toAsyncIterable = _interopRequireDefault(require("./toAsyncIterable"));

var _asyncIterableChain = _interopRequireDefault(require("./asyncIterableChain"));

var _asyncIterableMap = _interopRequireDefault(require("./asyncIterableMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts a stream of streams of tokens to a stream of tokens.
 * @param {Stream} stream the stream to read from
 */
function chain(stream) {
  return (0, _fromAsyncIterable.default)((0, _asyncIterableChain.default)((0, _asyncIterableMap.default)(_toAsyncIterable.default, (0, _toAsyncIterable.default)(stream))));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFpbi5qcyJdLCJuYW1lcyI6WyJjaGFpbiIsInN0cmVhbSIsInRvQXN5bmNJdGVyYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7QUFJZSxTQUFTQSxLQUFULENBQWlCQyxNQUFqQixFQUEwQjtBQUV4QyxTQUFPLGdDQUFtQixpQ0FBb0IsK0JBQWtCQyx3QkFBbEIsRUFBb0MsOEJBQWlCRCxNQUFqQixDQUFwQyxDQUFwQixDQUFuQixDQUFQO0FBRUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnJvbUFzeW5jSXRlcmFibGUgZnJvbSAnLi9mcm9tQXN5bmNJdGVyYWJsZScgO1xuaW1wb3J0IHRvQXN5bmNJdGVyYWJsZSBmcm9tICcuL3RvQXN5bmNJdGVyYWJsZScgO1xuaW1wb3J0IGFzeW5jSXRlcmFibGVDaGFpbiBmcm9tICcuL2FzeW5jSXRlcmFibGVDaGFpbicgO1xuaW1wb3J0IGFzeW5jSXRlcmFibGVNYXAgZnJvbSAnLi9hc3luY0l0ZXJhYmxlTWFwJyA7XG5cbi8qKlxuICogQ29udmVydHMgYSBzdHJlYW0gb2Ygc3RyZWFtcyBvZiB0b2tlbnMgdG8gYSBzdHJlYW0gb2YgdG9rZW5zLlxuICogQHBhcmFtIHtTdHJlYW19IHN0cmVhbSB0aGUgc3RyZWFtIHRvIHJlYWQgZnJvbVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGFpbiAoIHN0cmVhbSApIHtcblxuXHRyZXR1cm4gZnJvbUFzeW5jSXRlcmFibGUoIGFzeW5jSXRlcmFibGVDaGFpbiggYXN5bmNJdGVyYWJsZU1hcCggdG9Bc3luY0l0ZXJhYmxlICwgdG9Bc3luY0l0ZXJhYmxlKCBzdHJlYW0gKSApICkgKSA7XG5cbn1cbiJdfQ==