'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ignore;

var _split = require('./split');

var _split2 = _interopRequireDefault(_split);

var _chain = require('./chain');

var _chain2 = _interopRequireDefault(_chain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Filters a stream by ignoring a given set of tokens.
 * @param {Stream} stream the stream to filter
 * @param {Iterable} toignore the tokens to ignore
 */
function ignore(stream, toignore) {

  return (0, _chain2.default)((0, _split2.default)(stream, toignore));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pZ25vcmUuanMiXSwibmFtZXMiOlsiaWdub3JlIiwic3RyZWFtIiwidG9pZ25vcmUiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQVN3QkEsTTs7QUFSeEI7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7O0FBS2UsU0FBU0EsTUFBVCxDQUFrQkMsTUFBbEIsRUFBMkJDLFFBQTNCLEVBQXNDOztBQUVwRCxTQUFPLHFCQUFPLHFCQUFPRCxNQUFQLEVBQWdCQyxRQUFoQixDQUFQLENBQVA7QUFFQSIsImZpbGUiOiJpZ25vcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBzcGxpdCBmcm9tICcuL3NwbGl0JyA7XG5pbXBvcnQgY2hhaW4gZnJvbSAnLi9jaGFpbicgO1xuXG4vKipcbiAqIEZpbHRlcnMgYSBzdHJlYW0gYnkgaWdub3JpbmcgYSBnaXZlbiBzZXQgb2YgdG9rZW5zLlxuICogQHBhcmFtIHtTdHJlYW19IHN0cmVhbSB0aGUgc3RyZWFtIHRvIGZpbHRlclxuICogQHBhcmFtIHtJdGVyYWJsZX0gdG9pZ25vcmUgdGhlIHRva2VucyB0byBpZ25vcmVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaWdub3JlICggc3RyZWFtICwgdG9pZ25vcmUgKSB7XG5cblx0cmV0dXJuIGNoYWluKCBzcGxpdCggc3RyZWFtICwgdG9pZ25vcmUgKSApIDtcblxufVxuIl19