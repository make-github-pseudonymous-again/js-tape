"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ignore;

var _split = _interopRequireDefault(require("./split"));

var _chain = _interopRequireDefault(require("./chain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Filters a stream by ignoring a given set of tokens.
 * @param {Stream} stream the stream to filter
 * @param {Iterable} toignore the tokens to ignore
 */
function ignore(stream, toignore) {
  return (0, _chain.default)((0, _split.default)(stream, toignore));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pZ25vcmUuanMiXSwibmFtZXMiOlsiaWdub3JlIiwic3RyZWFtIiwidG9pZ25vcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBOzs7OztBQUtlLFNBQVNBLE1BQVQsQ0FBa0JDLE1BQWxCLEVBQTJCQyxRQUEzQixFQUFzQztBQUVwRCxTQUFPLG9CQUFPLG9CQUFPRCxNQUFQLEVBQWdCQyxRQUFoQixDQUFQLENBQVA7QUFFQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzcGxpdCBmcm9tICcuL3NwbGl0JyA7XG5pbXBvcnQgY2hhaW4gZnJvbSAnLi9jaGFpbicgO1xuXG4vKipcbiAqIEZpbHRlcnMgYSBzdHJlYW0gYnkgaWdub3JpbmcgYSBnaXZlbiBzZXQgb2YgdG9rZW5zLlxuICogQHBhcmFtIHtTdHJlYW19IHN0cmVhbSB0aGUgc3RyZWFtIHRvIGZpbHRlclxuICogQHBhcmFtIHtJdGVyYWJsZX0gdG9pZ25vcmUgdGhlIHRva2VucyB0byBpZ25vcmVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaWdub3JlICggc3RyZWFtICwgdG9pZ25vcmUgKSB7XG5cblx0cmV0dXJuIGNoYWluKCBzcGxpdCggc3RyZWFtICwgdG9pZ25vcmUgKSApIDtcblxufVxuIl19