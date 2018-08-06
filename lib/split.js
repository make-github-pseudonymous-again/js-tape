'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = split;
exports._split = _split;

var _fromiterable = require('./fromiterable');

var _fromiterable2 = _interopRequireDefault(_fromiterable);

var _exhaust = require('./exhaust');

var _exhaust2 = _interopRequireDefault(_exhaust);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(_split);

/**
 * Splits the input stream into a stream of streams according to some set of
 * separators. See {@link _split} for the actual implementation.
 *
 * @param {Stream} stream - The input stream.
 * @param {Iterable} sep - An iterable of separators.
 * @returns {Stream}
 */
function split(stream, sep) {

	return (0, _fromiterable2.default)(_split(stream, sep));
}

/**
 * Same as {@link split}, but returns an iterator rather than a stream.
 *
 * @param {Stream} stream - The input stream.
 * @param {Iterable} sep - An iterable of separators.
 * @returns {Iterator}
 */
function _split(stream, sep) {
	var _this = this;

	var _sep, _loop, _ret;

	return regeneratorRuntime.wrap(function _split$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					_sep = new Set(sep);
					_loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
						var token, group;
						return regeneratorRuntime.wrap(function _loop$(_context2) {
							while (1) {
								switch (_context2.prev = _context2.next) {
									case 0:
										token = stream.read();

										if (!(token === stream.eof)) {
											_context2.next = 3;
											break;
										}

										return _context2.abrupt('return', 'break');

									case 3:
										if (!_sep.has(token)) {
											_context2.next = 5;
											break;
										}

										return _context2.abrupt('return', 'continue');

									case 5:
										group = (0, _fromiterable2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
											var _token;

											return regeneratorRuntime.wrap(function _callee$(_context) {
												while (1) {
													switch (_context.prev = _context.next) {
														case 0:
															_context.next = 2;
															return token;

														case 2:
															if (!true) {
																_context.next = 10;
																break;
															}

															_token = stream.read();

															if (!_sep.has(_token)) {
																_context.next = 6;
																break;
															}

															return _context.abrupt('break', 10);

														case 6:
															_context.next = 8;
															return _token;

														case 8:
															_context.next = 2;
															break;

														case 10:
														case 'end':
															return _context.stop();
													}
												}
											}, _callee, this);
										})());
										_context2.next = 8;
										return group;

									case 8:

										(0, _exhaust2.default)(group);

									case 9:
									case 'end':
										return _context2.stop();
								}
							}
						}, _loop, _this);
					});

				case 2:
					if (!true) {
						_context3.next = 12;
						break;
					}

					return _context3.delegateYield(_loop(), 't0', 4);

				case 4:
					_ret = _context3.t0;
					_context3.t1 = _ret;
					_context3.next = _context3.t1 === 'break' ? 8 : _context3.t1 === 'continue' ? 9 : 10;
					break;

				case 8:
					return _context3.abrupt('break', 12);

				case 9:
					return _context3.abrupt('continue', 2);

				case 10:
					_context3.next = 2;
					break;

				case 12:
				case 'end':
					return _context3.stop();
			}
		}
	}, _marked, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcGxpdC5qcyJdLCJuYW1lcyI6WyJzcGxpdCIsIl9zcGxpdCIsInN0cmVhbSIsInNlcCIsIl9zZXAiLCJTZXQiLCJ0b2tlbiIsInJlYWQiLCJlb2YiLCJoYXMiLCJncm91cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBYXdCQSxLO1FBYVBDLE0sR0FBQUEsTTs7QUF6QmpCOzs7O0FBRUE7Ozs7OzttREF1QmlCQSxNOztBQXJCakI7Ozs7Ozs7O0FBUWUsU0FBU0QsS0FBVCxDQUFpQkUsTUFBakIsRUFBMEJDLEdBQTFCLEVBQWdDOztBQUU5QyxRQUFPLDRCQUFjRixPQUFRQyxNQUFSLEVBQWlCQyxHQUFqQixDQUFkLENBQVA7QUFFQTs7QUFFRDs7Ozs7OztBQU9PLFNBQVVGLE1BQVYsQ0FBbUJDLE1BQW5CLEVBQTRCQyxHQUE1QjtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUFDLFNBRkEsR0FFTyxJQUFJQyxHQUFKLENBQVNGLEdBQVQsQ0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1DRyxlQU5ELEdBTVNKLE9BQU9LLElBQVAsRUFOVDs7QUFBQSxnQkFRQUQsVUFBVUosT0FBT00sR0FSakI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQSxlQVVBSixLQUFLSyxHQUFMLENBQVVILEtBQVYsQ0FWQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQVlDSSxlQVpELEdBWVMsNEJBQWMsc0NBQUU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRXZCSixLQUZ1Qjs7QUFBQTtBQUFBLG9CQUlyQixJQUpxQjtBQUFBO0FBQUE7QUFBQTs7QUFNdEJBLHFCQU5zQixHQU1kSixPQUFPSyxJQUFQLEVBTmM7O0FBQUEsb0JBUXZCSCxLQUFLSyxHQUFMLENBQVVILE1BQVYsQ0FSdUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBLHNCQVV0QkEsTUFWc0I7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUYsR0FBZCxDQVpUO0FBQUE7QUFBQSxpQkE0QkNJLEtBNUJEOztBQUFBOztBQThCTCxpQ0FBU0EsS0FBVDs7QUE5Qks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxVQUlFLElBSkY7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InNwbGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgZnJvbWl0ZXJhYmxlIGZyb20gJy4vZnJvbWl0ZXJhYmxlJyA7XG5cbmltcG9ydCBleGhhdXN0IGZyb20gJy4vZXhoYXVzdCcgO1xuXG4vKipcbiAqIFNwbGl0cyB0aGUgaW5wdXQgc3RyZWFtIGludG8gYSBzdHJlYW0gb2Ygc3RyZWFtcyBhY2NvcmRpbmcgdG8gc29tZSBzZXQgb2ZcbiAqIHNlcGFyYXRvcnMuIFNlZSB7QGxpbmsgX3NwbGl0fSBmb3IgdGhlIGFjdHVhbCBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmVhbX0gc3RyZWFtIC0gVGhlIGlucHV0IHN0cmVhbS5cbiAqIEBwYXJhbSB7SXRlcmFibGV9IHNlcCAtIEFuIGl0ZXJhYmxlIG9mIHNlcGFyYXRvcnMuXG4gKiBAcmV0dXJucyB7U3RyZWFtfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzcGxpdCAoIHN0cmVhbSAsIHNlcCApIHtcblxuXHRyZXR1cm4gZnJvbWl0ZXJhYmxlKCBfc3BsaXQoIHN0cmVhbSAsIHNlcCApICkgO1xuXG59XG5cbi8qKlxuICogU2FtZSBhcyB7QGxpbmsgc3BsaXR9LCBidXQgcmV0dXJucyBhbiBpdGVyYXRvciByYXRoZXIgdGhhbiBhIHN0cmVhbS5cbiAqXG4gKiBAcGFyYW0ge1N0cmVhbX0gc3RyZWFtIC0gVGhlIGlucHV0IHN0cmVhbS5cbiAqIEBwYXJhbSB7SXRlcmFibGV9IHNlcCAtIEFuIGl0ZXJhYmxlIG9mIHNlcGFyYXRvcnMuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogX3NwbGl0ICggc3RyZWFtICwgc2VwICkge1xuXG5cdGNvbnN0IF9zZXAgPSBuZXcgU2V0KCBzZXAgKSA7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0Y29uc3QgdG9rZW4gPSBzdHJlYW0ucmVhZCggKSA7XG5cblx0XHRpZiAoIHRva2VuID09PSBzdHJlYW0uZW9mICkgYnJlYWsgO1xuXG5cdFx0aWYgKCBfc2VwLmhhcyggdG9rZW4gKSApIGNvbnRpbnVlIDtcblxuXHRcdGNvbnN0IGdyb3VwID0gZnJvbWl0ZXJhYmxlKCAoIGZ1bmN0aW9uKiAoICkge1xuXG5cdFx0XHR5aWVsZCB0b2tlbiA7XG5cblx0XHRcdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdFx0XHRjb25zdCB0b2tlbiA9IHN0cmVhbS5yZWFkKCApIDtcblxuXHRcdFx0XHRpZiAoIF9zZXAuaGFzKCB0b2tlbiApICkgYnJlYWsgO1xuXG5cdFx0XHRcdHlpZWxkIHRva2VuIDtcblxuXHRcdFx0fVxuXG5cdFx0fSApKCApICkgO1xuXG5cdFx0eWllbGQgZ3JvdXAgO1xuXG5cdFx0ZXhoYXVzdCggZ3JvdXAgKSA7XG5cblx0fVxuXG59XG4iXX0=