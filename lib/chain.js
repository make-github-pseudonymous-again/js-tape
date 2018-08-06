'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = chain;

var _jsItertools = require('@aureooms/js-itertools');

var _fromiterable = require('./fromiterable');

var _fromiterable2 = _interopRequireDefault(_fromiterable);

var _toiterable = require('./toiterable');

var _toiterable2 = _interopRequireDefault(_toiterable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts a stream of streams of tokens to a stream of tokens.
 * @param {Stream} stream the stream to read from
 */
function chain(stream) {

  return (0, _fromiterable2.default)((0, _jsItertools.chain)((0, _jsItertools.map)(_toiterable2.default, (0, _toiterable2.default)(stream))));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFpbi5qcyJdLCJuYW1lcyI6WyJjaGFpbiIsInN0cmVhbSIsInRvaXRlcmFibGUiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQVN3QkEsSzs7QUFUeEI7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7QUFJZSxTQUFTQSxLQUFULENBQWlCQyxNQUFqQixFQUEwQjs7QUFFeEMsU0FBTyw0QkFBYyx3QkFBUSxzQkFBTUMsb0JBQU4sRUFBbUIsMEJBQVlELE1BQVosQ0FBbkIsQ0FBUixDQUFkLENBQVA7QUFFQSIsImZpbGUiOiJjaGFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1hcCBhcyBfbWFwICwgY2hhaW4gYXMgX2NoYWluIH0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuXG5pbXBvcnQgZnJvbWl0ZXJhYmxlIGZyb20gJy4vZnJvbWl0ZXJhYmxlJyA7XG5pbXBvcnQgdG9pdGVyYWJsZSBmcm9tICcuL3RvaXRlcmFibGUnIDtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIHN0cmVhbSBvZiBzdHJlYW1zIG9mIHRva2VucyB0byBhIHN0cmVhbSBvZiB0b2tlbnMuXG4gKiBAcGFyYW0ge1N0cmVhbX0gc3RyZWFtIHRoZSBzdHJlYW0gdG8gcmVhZCBmcm9tXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYWluICggc3RyZWFtICkge1xuXG5cdHJldHVybiBmcm9taXRlcmFibGUoIF9jaGFpbiggX21hcCggdG9pdGVyYWJsZSAsIHRvaXRlcmFibGUoIHN0cmVhbSApICkgKSApIDtcblxufVxuIl19