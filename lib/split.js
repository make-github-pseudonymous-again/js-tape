"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = split;
exports._split = _split;

var _fromAsyncIterable = _interopRequireDefault(require("./fromAsyncIterable"));

var _exhaust = _interopRequireDefault(require("./exhaust"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume("next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

/**
 * Splits the input stream into a stream of streams according to some set of
 * separators. See {@link _split} for the actual implementation.
 *
 * @param {Stream} stream - The input stream.
 * @param {Iterable} sep - An iterable of separators.
 * @returns {Stream}
 */
function split(stream, sep) {
  return (0, _fromAsyncIterable.default)(_split(stream, sep));
}
/**
 * Same as {@link split}, but returns an iterator rather than a stream.
 *
 * @param {Stream} stream - The input stream.
 * @param {Iterable} sep - An iterable of separators.
 * @returns {Iterator}
 */


function _split(_x, _x2) {
  return _split2.apply(this, arguments);
}

function _split2() {
  _split2 = _wrapAsyncGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(stream, sep) {
    var _sep, _loop2, _ret;

    return regeneratorRuntime.wrap(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _sep = new Set(sep);
            _loop2 =
            /*#__PURE__*/
            regeneratorRuntime.mark(function _loop2() {
              var token, group;
              return regeneratorRuntime.wrap(function _loop2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return _awaitAsyncGenerator(stream.read());

                    case 2:
                      token = _context2.sent;

                      if (!(token === stream.eof)) {
                        _context2.next = 5;
                        break;
                      }

                      return _context2.abrupt("return", "break");

                    case 5:
                      if (!_sep.has(token)) {
                        _context2.next = 7;
                        break;
                      }

                      return _context2.abrupt("return", "continue");

                    case 7:
                      group = (0, _fromAsyncIterable.default)(_wrapAsyncGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        var _token;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return token;

                              case 2:
                                if (!true) {
                                  _context.next = 12;
                                  break;
                                }

                                _context.next = 5;
                                return _awaitAsyncGenerator(stream.read());

                              case 5:
                                _token = _context.sent;

                                if (!_sep.has(_token)) {
                                  _context.next = 8;
                                  break;
                                }

                                return _context.abrupt("break", 12);

                              case 8:
                                _context.next = 10;
                                return _token;

                              case 10:
                                _context.next = 2;
                                break;

                              case 12:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }))());
                      _context2.next = 10;
                      return group;

                    case 10:
                      _context2.next = 12;
                      return _awaitAsyncGenerator((0, _exhaust.default)(group));

                    case 12:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _loop2, this);
            });

          case 2:
            if (!true) {
              _context3.next = 12;
              break;
            }

            return _context3.delegateYield(_loop2(), "t0", 4);

          case 4:
            _ret = _context3.t0;
            _context3.t1 = _ret;
            _context3.next = _context3.t1 === "break" ? 8 : _context3.t1 === "continue" ? 9 : 10;
            break;

          case 8:
            return _context3.abrupt("break", 12);

          case 9:
            return _context3.abrupt("continue", 2);

          case 10:
            _context3.next = 2;
            break;

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee2, this);
  }));
  return _split2.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcGxpdC5qcyJdLCJuYW1lcyI6WyJzcGxpdCIsInN0cmVhbSIsInNlcCIsIl9zcGxpdCIsIl9zZXAiLCJTZXQiLCJyZWFkIiwidG9rZW4iLCJlb2YiLCJoYXMiLCJncm91cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7QUFRZSxTQUFTQSxLQUFULENBQWlCQyxNQUFqQixFQUEwQkMsR0FBMUIsRUFBZ0M7QUFFOUMsU0FBTyxnQ0FBbUJDLE1BQU0sQ0FBRUYsTUFBRixFQUFXQyxHQUFYLENBQXpCLENBQVA7QUFFQTtBQUVEOzs7Ozs7Ozs7U0FPdUJDLE07Ozs7Ozs7MEJBQWhCLGtCQUF5QkYsTUFBekIsRUFBa0NDLEdBQWxDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQUUsWUFBQUEsSUFGQSxHQUVPLElBQUlDLEdBQUosQ0FBU0gsR0FBVCxDQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBTWVELE1BQU0sQ0FBQ0ssSUFBUCxFQU5mOztBQUFBO0FBTUNDLHNCQUFBQSxLQU5EOztBQUFBLDRCQVFBQSxLQUFLLEtBQUtOLE1BQU0sQ0FBQ08sR0FSakI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQSwyQkFVQUosSUFBSSxDQUFDSyxHQUFMLENBQVVGLEtBQVYsQ0FWQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQVlDRyxzQkFBQUEsS0FaRCxHQVlTLGdDQUFtQjtBQUFBO0FBQUEsOENBQUU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWxDLHVDQUFNSCxLQUFOOztBQUZrQztBQUFBLHFDQUkxQixJQUowQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDREQU1iTixNQUFNLENBQUNLLElBQVAsRUFOYTs7QUFBQTtBQU0zQkMsZ0NBQUFBLE1BTjJCOztBQUFBLHFDQVE1QkgsSUFBSSxDQUFDSyxHQUFMLENBQVVGLE1BQVYsQ0FSNEI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQVVqQyx1Q0FBTUEsTUFBTjs7QUFWaUM7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFGLElBQW5CLENBWlQ7QUFBQTtBQTRCTCw2QkFBTUcsS0FBTjs7QUE1Qks7QUFBQTtBQUFBLGtEQThCQyxzQkFBU0EsS0FBVCxDQTlCRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGlCQUlFLElBSkY7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnJvbUFzeW5jSXRlcmFibGUgZnJvbSAnLi9mcm9tQXN5bmNJdGVyYWJsZScgO1xuaW1wb3J0IGV4aGF1c3QgZnJvbSAnLi9leGhhdXN0JyA7XG5cbi8qKlxuICogU3BsaXRzIHRoZSBpbnB1dCBzdHJlYW0gaW50byBhIHN0cmVhbSBvZiBzdHJlYW1zIGFjY29yZGluZyB0byBzb21lIHNldCBvZlxuICogc2VwYXJhdG9ycy4gU2VlIHtAbGluayBfc3BsaXR9IGZvciB0aGUgYWN0dWFsIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyZWFtfSBzdHJlYW0gLSBUaGUgaW5wdXQgc3RyZWFtLlxuICogQHBhcmFtIHtJdGVyYWJsZX0gc2VwIC0gQW4gaXRlcmFibGUgb2Ygc2VwYXJhdG9ycy5cbiAqIEByZXR1cm5zIHtTdHJlYW19XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNwbGl0ICggc3RyZWFtICwgc2VwICkge1xuXG5cdHJldHVybiBmcm9tQXN5bmNJdGVyYWJsZSggX3NwbGl0KCBzdHJlYW0gLCBzZXAgKSApIDtcblxufVxuXG4vKipcbiAqIFNhbWUgYXMge0BsaW5rIHNwbGl0fSwgYnV0IHJldHVybnMgYW4gaXRlcmF0b3IgcmF0aGVyIHRoYW4gYSBzdHJlYW0uXG4gKlxuICogQHBhcmFtIHtTdHJlYW19IHN0cmVhbSAtIFRoZSBpbnB1dCBzdHJlYW0uXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBzZXAgLSBBbiBpdGVyYWJsZSBvZiBzZXBhcmF0b3JzLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24qIF9zcGxpdCAoIHN0cmVhbSAsIHNlcCApIHtcblxuXHRjb25zdCBfc2VwID0gbmV3IFNldCggc2VwICkgO1xuXG5cdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdGNvbnN0IHRva2VuID0gYXdhaXQgc3RyZWFtLnJlYWQoICkgO1xuXG5cdFx0aWYgKCB0b2tlbiA9PT0gc3RyZWFtLmVvZiApIGJyZWFrIDtcblxuXHRcdGlmICggX3NlcC5oYXMoIHRva2VuICkgKSBjb250aW51ZSA7XG5cblx0XHRjb25zdCBncm91cCA9IGZyb21Bc3luY0l0ZXJhYmxlKCAoIGFzeW5jIGZ1bmN0aW9uKiAoICkge1xuXG5cdFx0XHR5aWVsZCB0b2tlbiA7XG5cblx0XHRcdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdFx0XHRjb25zdCB0b2tlbiA9IGF3YWl0IHN0cmVhbS5yZWFkKCApIDtcblxuXHRcdFx0XHRpZiAoIF9zZXAuaGFzKCB0b2tlbiApICkgYnJlYWsgO1xuXG5cdFx0XHRcdHlpZWxkIHRva2VuIDtcblxuXHRcdFx0fVxuXG5cdFx0fSApKCApICkgO1xuXG5cdFx0eWllbGQgZ3JvdXAgO1xuXG5cdFx0YXdhaXQgZXhoYXVzdCggZ3JvdXAgKSA7XG5cblx0fVxuXG59XG4iXX0=