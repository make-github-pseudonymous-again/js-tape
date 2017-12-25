'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.split = split;
exports._split = _split;

var _from = require('./from');

var _exhaust = require('./exhaust');

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

	return (0, _from.fromiterable)(_split(stream, sep));
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
										group = (0, _from.fromiterable)( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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

										(0, _exhaust.exhaust)(group);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcGxpdC5qcyJdLCJuYW1lcyI6WyJzcGxpdCIsIl9zcGxpdCIsInN0cmVhbSIsInNlcCIsIl9zZXAiLCJTZXQiLCJ0b2tlbiIsInJlYWQiLCJlb2YiLCJoYXMiLCJncm91cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFhZ0JBLEssR0FBQUEsSztRQWFDQyxNLEdBQUFBLE07O0FBekJqQjs7QUFFQTs7bURBdUJpQkEsTTs7QUFyQmpCOzs7Ozs7OztBQVFPLFNBQVNELEtBQVQsQ0FBaUJFLE1BQWpCLEVBQTBCQyxHQUExQixFQUFnQzs7QUFFdEMsUUFBTyx3QkFBY0YsT0FBUUMsTUFBUixFQUFpQkMsR0FBakIsQ0FBZCxDQUFQO0FBRUE7O0FBRUQ7Ozs7Ozs7QUFPTyxTQUFVRixNQUFWLENBQW1CQyxNQUFuQixFQUE0QkMsR0FBNUI7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBQyxTQUZBLEdBRU8sSUFBSUMsR0FBSixDQUFTRixHQUFULENBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQ0csZUFORCxHQU1TSixPQUFPSyxJQUFQLEVBTlQ7O0FBQUEsZ0JBUUFELFVBQVVKLE9BQU9NLEdBUmpCO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUEsZUFVQUosS0FBS0ssR0FBTCxDQUFVSCxLQUFWLENBVkE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFZQ0ksZUFaRCxHQVlTLHdCQUFjLHNDQUFFO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUV2QkosS0FGdUI7O0FBQUE7QUFBQSxvQkFJckIsSUFKcUI7QUFBQTtBQUFBO0FBQUE7O0FBTXRCQSxxQkFOc0IsR0FNZEosT0FBT0ssSUFBUCxFQU5jOztBQUFBLG9CQVF2QkgsS0FBS0ssR0FBTCxDQUFVSCxNQUFWLENBUnVCO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQSxzQkFVdEJBLE1BVnNCOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFGLEdBQWQsQ0FaVDtBQUFBO0FBQUEsaUJBNEJDSSxLQTVCRDs7QUFBQTs7QUE4QkwsZ0NBQVNBLEtBQVQ7O0FBOUJLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsVUFJRSxJQUpGO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzcGxpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgZnJvbWl0ZXJhYmxlIH0gZnJvbSAnLi9mcm9tJyA7XG5cbmltcG9ydCB7IGV4aGF1c3QgfSBmcm9tICcuL2V4aGF1c3QnIDtcblxuLyoqXG4gKiBTcGxpdHMgdGhlIGlucHV0IHN0cmVhbSBpbnRvIGEgc3RyZWFtIG9mIHN0cmVhbXMgYWNjb3JkaW5nIHRvIHNvbWUgc2V0IG9mXG4gKiBzZXBhcmF0b3JzLiBTZWUge0BsaW5rIF9zcGxpdH0gZm9yIHRoZSBhY3R1YWwgaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHBhcmFtIHtTdHJlYW19IHN0cmVhbSAtIFRoZSBpbnB1dCBzdHJlYW0uXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBzZXAgLSBBbiBpdGVyYWJsZSBvZiBzZXBhcmF0b3JzLlxuICogQHJldHVybnMge1N0cmVhbX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0ICggc3RyZWFtICwgc2VwICkge1xuXG5cdHJldHVybiBmcm9taXRlcmFibGUoIF9zcGxpdCggc3RyZWFtICwgc2VwICkgKSA7XG5cbn1cblxuLyoqXG4gKiBTYW1lIGFzIHtAbGluayBzcGxpdH0sIGJ1dCByZXR1cm5zIGFuIGl0ZXJhdG9yIHJhdGhlciB0aGFuIGEgc3RyZWFtLlxuICpcbiAqIEBwYXJhbSB7U3RyZWFtfSBzdHJlYW0gLSBUaGUgaW5wdXQgc3RyZWFtLlxuICogQHBhcmFtIHtJdGVyYWJsZX0gc2VwIC0gQW4gaXRlcmFibGUgb2Ygc2VwYXJhdG9ycy5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBfc3BsaXQgKCBzdHJlYW0gLCBzZXAgKSB7XG5cblx0Y29uc3QgX3NlcCA9IG5ldyBTZXQoIHNlcCApIDtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRjb25zdCB0b2tlbiA9IHN0cmVhbS5yZWFkKCApIDtcblxuXHRcdGlmICggdG9rZW4gPT09IHN0cmVhbS5lb2YgKSBicmVhayA7XG5cblx0XHRpZiAoIF9zZXAuaGFzKCB0b2tlbiApICkgY29udGludWUgO1xuXG5cdFx0Y29uc3QgZ3JvdXAgPSBmcm9taXRlcmFibGUoICggZnVuY3Rpb24qICggKSB7XG5cblx0XHRcdHlpZWxkIHRva2VuIDtcblxuXHRcdFx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0XHRcdGNvbnN0IHRva2VuID0gc3RyZWFtLnJlYWQoICkgO1xuXG5cdFx0XHRcdGlmICggX3NlcC5oYXMoIHRva2VuICkgKSBicmVhayA7XG5cblx0XHRcdFx0eWllbGQgdG9rZW4gO1xuXG5cdFx0XHR9XG5cblx0XHR9ICkoICkgKSA7XG5cblx0XHR5aWVsZCBncm91cCA7XG5cblx0XHRleGhhdXN0KCBncm91cCApIDtcblxuXHR9XG5cbn1cbiJdfQ==