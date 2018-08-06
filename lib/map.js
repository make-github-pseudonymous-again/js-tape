'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = map;

var _jsItertools = require('@aureooms/js-itertools');

var _fromiterable = require('./fromiterable');

var _fromiterable2 = _interopRequireDefault(_fromiterable);

var _toiterable = require('./toiterable');

var _toiterable2 = _interopRequireDefault(_toiterable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Applies a callable to each token of a stream.
 * @param {Callable} callable the callable to apply
 * @param {Stream} stream the stream to process
 */
function map(callable, stream) {

  return (0, _fromiterable2.default)((0, _jsItertools.map)(callable, (0, _toiterable2.default)(stream)));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXAuanMiXSwibmFtZXMiOlsibWFwIiwiY2FsbGFibGUiLCJzdHJlYW0iXSwibWFwcGluZ3MiOiI7Ozs7O2tCQVV3QkEsRzs7QUFWeEI7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7O0FBS2UsU0FBU0EsR0FBVCxDQUFlQyxRQUFmLEVBQTBCQyxNQUExQixFQUFtQzs7QUFFakQsU0FBTyw0QkFBYyxzQkFBTUQsUUFBTixFQUFpQiwwQkFBWUMsTUFBWixDQUFqQixDQUFkLENBQVA7QUFFQSIsImZpbGUiOiJtYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYXAgYXMgX21hcCB9IGZyb20gJ0BhdXJlb29tcy9qcy1pdGVydG9vbHMnIDtcblxuaW1wb3J0IGZyb21pdGVyYWJsZSBmcm9tICcuL2Zyb21pdGVyYWJsZScgO1xuaW1wb3J0IHRvaXRlcmFibGUgZnJvbSAnLi90b2l0ZXJhYmxlJyA7XG5cbi8qKlxuICogQXBwbGllcyBhIGNhbGxhYmxlIHRvIGVhY2ggdG9rZW4gb2YgYSBzdHJlYW0uXG4gKiBAcGFyYW0ge0NhbGxhYmxlfSBjYWxsYWJsZSB0aGUgY2FsbGFibGUgdG8gYXBwbHlcbiAqIEBwYXJhbSB7U3RyZWFtfSBzdHJlYW0gdGhlIHN0cmVhbSB0byBwcm9jZXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hcCAoIGNhbGxhYmxlICwgc3RyZWFtICkge1xuXG5cdHJldHVybiBmcm9taXRlcmFibGUoIF9tYXAoIGNhbGxhYmxlICwgdG9pdGVyYWJsZSggc3RyZWFtICkgKSApIDtcblxufVxuIl19