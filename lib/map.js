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
 * Applies a callable to each token of a tape.
 * @param {Callable} callable the callable to apply
 * @param {Tape} tape the tape to process
 */
function map(callable, tape) {
  return (0, _fromAsyncIterable.default)((0, _asyncIterableMap.default)(callable, (0, _toAsyncIterable.default)(tape)));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXAuanMiXSwibmFtZXMiOlsibWFwIiwiY2FsbGFibGUiLCJ0YXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7Ozs7QUFLZSxTQUFTQSxHQUFULENBQWVDLFFBQWYsRUFBMEJDLElBQTFCLEVBQWlDO0FBRS9DLFNBQU8sZ0NBQW1CLCtCQUFrQkQsUUFBbEIsRUFBNkIsOEJBQWlCQyxJQUFqQixDQUE3QixDQUFuQixDQUFQO0FBRUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnJvbUFzeW5jSXRlcmFibGUgZnJvbSAnLi9mcm9tQXN5bmNJdGVyYWJsZScgO1xuaW1wb3J0IHRvQXN5bmNJdGVyYWJsZSBmcm9tICcuL3RvQXN5bmNJdGVyYWJsZScgO1xuaW1wb3J0IGFzeW5jSXRlcmFibGVNYXAgZnJvbSAnLi9hc3luY0l0ZXJhYmxlTWFwJyA7XG5cbi8qKlxuICogQXBwbGllcyBhIGNhbGxhYmxlIHRvIGVhY2ggdG9rZW4gb2YgYSB0YXBlLlxuICogQHBhcmFtIHtDYWxsYWJsZX0gY2FsbGFibGUgdGhlIGNhbGxhYmxlIHRvIGFwcGx5XG4gKiBAcGFyYW0ge1RhcGV9IHRhcGUgdGhlIHRhcGUgdG8gcHJvY2Vzc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXAgKCBjYWxsYWJsZSAsIHRhcGUgKSB7XG5cblx0cmV0dXJuIGZyb21Bc3luY0l0ZXJhYmxlKCBhc3luY0l0ZXJhYmxlTWFwKCBjYWxsYWJsZSAsIHRvQXN5bmNJdGVyYWJsZSggdGFwZSApICkgKSA7XG5cbn1cbiJdfQ==