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
 * Splits the input tape into a tape of tapes according to some set of
 * separators. See {@link _split} for the actual implementation.
 *
 * @param {Tape} tape - The input tape.
 * @param {Iterable} sep - An iterable of separators.
 * @returns {Tape}
 */
function split(tape, sep) {
  return (0, _fromAsyncIterable.default)(_split(tape, sep));
}
/**
 * Same as {@link split}, but returns an iterator rather than a tape.
 *
 * @private
 * @param {Tape} tape - The input tape.
 * @param {Iterable} sep - An iterable of separators.
 * @returns {Iterator}
 */


function _split(_x, _x2) {
  return _split2.apply(this, arguments);
}

function _split2() {
  _split2 = _wrapAsyncGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(tape, sep) {
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
                      return _awaitAsyncGenerator(tape.read());

                    case 2:
                      token = _context2.sent;

                      if (!(token === tape.eof)) {
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
                                return _awaitAsyncGenerator(tape.read());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcGxpdC5qcyJdLCJuYW1lcyI6WyJzcGxpdCIsInRhcGUiLCJzZXAiLCJfc3BsaXQiLCJfc2VwIiwiU2V0IiwicmVhZCIsInRva2VuIiwiZW9mIiwiaGFzIiwiZ3JvdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0FBUWUsU0FBU0EsS0FBVCxDQUFpQkMsSUFBakIsRUFBd0JDLEdBQXhCLEVBQThCO0FBRTVDLFNBQU8sZ0NBQW1CQyxNQUFNLENBQUVGLElBQUYsRUFBU0MsR0FBVCxDQUF6QixDQUFQO0FBRUE7QUFFRDs7Ozs7Ozs7OztTQVF1QkMsTTs7Ozs7OzswQkFBaEIsa0JBQXlCRixJQUF6QixFQUFnQ0MsR0FBaEM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBRSxZQUFBQSxJQUZBLEdBRU8sSUFBSUMsR0FBSixDQUFTSCxHQUFULENBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrREFNZUQsSUFBSSxDQUFDSyxJQUFMLEVBTmY7O0FBQUE7QUFNQ0Msc0JBQUFBLEtBTkQ7O0FBQUEsNEJBUUFBLEtBQUssS0FBS04sSUFBSSxDQUFDTyxHQVJmO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUEsMkJBVUFKLElBQUksQ0FBQ0ssR0FBTCxDQUFVRixLQUFWLENBVkE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFZQ0csc0JBQUFBLEtBWkQsR0FZUyxnQ0FBbUI7QUFBQTtBQUFBLDhDQUFFO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVsQyx1Q0FBTUgsS0FBTjs7QUFGa0M7QUFBQSxxQ0FJMUIsSUFKMEI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSw0REFNYk4sSUFBSSxDQUFDSyxJQUFMLEVBTmE7O0FBQUE7QUFNM0JDLGdDQUFBQSxNQU4yQjs7QUFBQSxxQ0FRNUJILElBQUksQ0FBQ0ssR0FBTCxDQUFVRixNQUFWLENBUjRCO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFVakMsdUNBQU1BLE1BQU47O0FBVmlDO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBRixJQUFuQixDQVpUO0FBQUE7QUE0QkwsNkJBQU1HLEtBQU47O0FBNUJLO0FBQUE7QUFBQSxrREE4QkMsc0JBQVNBLEtBQVQsQ0E5QkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxpQkFJRSxJQUpGO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZyb21Bc3luY0l0ZXJhYmxlIGZyb20gJy4vZnJvbUFzeW5jSXRlcmFibGUnIDtcbmltcG9ydCBleGhhdXN0IGZyb20gJy4vZXhoYXVzdCcgO1xuXG4vKipcbiAqIFNwbGl0cyB0aGUgaW5wdXQgdGFwZSBpbnRvIGEgdGFwZSBvZiB0YXBlcyBhY2NvcmRpbmcgdG8gc29tZSBzZXQgb2ZcbiAqIHNlcGFyYXRvcnMuIFNlZSB7QGxpbmsgX3NwbGl0fSBmb3IgdGhlIGFjdHVhbCBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1RhcGV9IHRhcGUgLSBUaGUgaW5wdXQgdGFwZS5cbiAqIEBwYXJhbSB7SXRlcmFibGV9IHNlcCAtIEFuIGl0ZXJhYmxlIG9mIHNlcGFyYXRvcnMuXG4gKiBAcmV0dXJucyB7VGFwZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3BsaXQgKCB0YXBlICwgc2VwICkge1xuXG5cdHJldHVybiBmcm9tQXN5bmNJdGVyYWJsZSggX3NwbGl0KCB0YXBlICwgc2VwICkgKSA7XG5cbn1cblxuLyoqXG4gKiBTYW1lIGFzIHtAbGluayBzcGxpdH0sIGJ1dCByZXR1cm5zIGFuIGl0ZXJhdG9yIHJhdGhlciB0aGFuIGEgdGFwZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtUYXBlfSB0YXBlIC0gVGhlIGlucHV0IHRhcGUuXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBzZXAgLSBBbiBpdGVyYWJsZSBvZiBzZXBhcmF0b3JzLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24qIF9zcGxpdCAoIHRhcGUgLCBzZXAgKSB7XG5cblx0Y29uc3QgX3NlcCA9IG5ldyBTZXQoIHNlcCApIDtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRjb25zdCB0b2tlbiA9IGF3YWl0IHRhcGUucmVhZCggKSA7XG5cblx0XHRpZiAoIHRva2VuID09PSB0YXBlLmVvZiApIGJyZWFrIDtcblxuXHRcdGlmICggX3NlcC5oYXMoIHRva2VuICkgKSBjb250aW51ZSA7XG5cblx0XHRjb25zdCBncm91cCA9IGZyb21Bc3luY0l0ZXJhYmxlKCAoIGFzeW5jIGZ1bmN0aW9uKiAoICkge1xuXG5cdFx0XHR5aWVsZCB0b2tlbiA7XG5cblx0XHRcdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdFx0XHRjb25zdCB0b2tlbiA9IGF3YWl0IHRhcGUucmVhZCggKSA7XG5cblx0XHRcdFx0aWYgKCBfc2VwLmhhcyggdG9rZW4gKSApIGJyZWFrIDtcblxuXHRcdFx0XHR5aWVsZCB0b2tlbiA7XG5cblx0XHRcdH1cblxuXHRcdH0gKSggKSApIDtcblxuXHRcdHlpZWxkIGdyb3VwIDtcblxuXHRcdGF3YWl0IGV4aGF1c3QoIGdyb3VwICkgO1xuXG5cdH1cblxufVxuIl19