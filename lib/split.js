"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = split;
exports._split = _split;

var _fromAsyncIterable = _interopRequireDefault(require("./fromAsyncIterable"));

var _exhaust = _interopRequireDefault(require("./exhaust"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume("next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen["return"] !== "function") { this["return"] = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype["throw"] = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype["return"] = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

/**
 * Splits the input tape into a tape of tapes according to some set of
 * separators. See {@link _split} for the actual implementation.
 *
 * @param {Tape} tape - The input tape.
 * @param {Iterable} sep - An iterable of separators.
 * @returns {Tape} A tape of tapes.
 */
function split(tape, sep) {
  return (0, _fromAsyncIterable["default"])(_split(tape, sep));
}
/**
 * Same as {@link split}, but returns an iterable rather than a tape.
 *
 * @private
 * @param {Tape} tape - The input tape.
 * @param {Iterable} sep - An iterable of separators.
 * @returns {AsyncIterable} An iterable of tapes.
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
                      group = (0, _fromAsyncIterable["default"])(_wrapAsyncGenerator(
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
                        }, _callee);
                      }))());
                      _context2.next = 10;
                      return group;

                    case 10:
                      _context2.next = 12;
                      return _awaitAsyncGenerator((0, _exhaust["default"])(group));

                    case 12:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _loop2);
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
    }, _callee2);
  }));
  return _split2.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcGxpdC5qcyJdLCJuYW1lcyI6WyJzcGxpdCIsInRhcGUiLCJzZXAiLCJfc3BsaXQiLCJfc2VwIiwiU2V0IiwicmVhZCIsInRva2VuIiwiZW9mIiwiaGFzIiwiZ3JvdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0FBUWUsU0FBU0EsS0FBVCxDQUFlQyxJQUFmLEVBQXFCQyxHQUFyQixFQUEwQjtBQUN4QyxTQUFPLG1DQUFrQkMsTUFBTSxDQUFDRixJQUFELEVBQU9DLEdBQVAsQ0FBeEIsQ0FBUDtBQUNBO0FBRUQ7Ozs7Ozs7Ozs7U0FRdUJDLE07Ozs7Ozs7MEJBQWhCLGtCQUF1QkYsSUFBdkIsRUFBNkJDLEdBQTdCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQUUsWUFBQUEsSUFEQSxHQUNPLElBQUlDLEdBQUosQ0FBUUgsR0FBUixDQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBSWVELElBQUksQ0FBQ0ssSUFBTCxFQUpmOztBQUFBO0FBSUNDLHNCQUFBQSxLQUpEOztBQUFBLDRCQU1EQSxLQUFLLEtBQUtOLElBQUksQ0FBQ08sR0FOZDtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBLDJCQVFESixJQUFJLENBQUNLLEdBQUwsQ0FBU0YsS0FBVCxDQVJDO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBVUNHLHNCQUFBQSxLQVZELEdBVVMsbUNBQ2I7QUFBQTtBQUFBLDhDQUFDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLHVDQUFNSCxLQUFOOztBQURBO0FBQUEscUNBR08sSUFIUDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDREQUlxQk4sSUFBSSxDQUFDSyxJQUFMLEVBSnJCOztBQUFBO0FBSU9DLGdDQUFBQSxNQUpQOztBQUFBLHFDQU1LSCxJQUFJLENBQUNLLEdBQUwsQ0FBU0YsTUFBVCxDQU5MO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFRQyx1Q0FBTUEsTUFBTjs7QUFSRDtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQUQsSUFEYSxDQVZUO0FBQUE7QUF3QkwsNkJBQU1HLEtBQU47O0FBeEJLO0FBQUE7QUFBQSxrREEwQkMseUJBQVFBLEtBQVIsQ0ExQkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxpQkFHQyxJQUhEO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZyb21Bc3luY0l0ZXJhYmxlIGZyb20gJy4vZnJvbUFzeW5jSXRlcmFibGUnO1xuaW1wb3J0IGV4aGF1c3QgZnJvbSAnLi9leGhhdXN0JztcblxuLyoqXG4gKiBTcGxpdHMgdGhlIGlucHV0IHRhcGUgaW50byBhIHRhcGUgb2YgdGFwZXMgYWNjb3JkaW5nIHRvIHNvbWUgc2V0IG9mXG4gKiBzZXBhcmF0b3JzLiBTZWUge0BsaW5rIF9zcGxpdH0gZm9yIHRoZSBhY3R1YWwgaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHBhcmFtIHtUYXBlfSB0YXBlIC0gVGhlIGlucHV0IHRhcGUuXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBzZXAgLSBBbiBpdGVyYWJsZSBvZiBzZXBhcmF0b3JzLlxuICogQHJldHVybnMge1RhcGV9IEEgdGFwZSBvZiB0YXBlcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3BsaXQodGFwZSwgc2VwKSB7XG5cdHJldHVybiBmcm9tQXN5bmNJdGVyYWJsZShfc3BsaXQodGFwZSwgc2VwKSk7XG59XG5cbi8qKlxuICogU2FtZSBhcyB7QGxpbmsgc3BsaXR9LCBidXQgcmV0dXJucyBhbiBpdGVyYWJsZSByYXRoZXIgdGhhbiBhIHRhcGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7VGFwZX0gdGFwZSAtIFRoZSBpbnB1dCB0YXBlLlxuICogQHBhcmFtIHtJdGVyYWJsZX0gc2VwIC0gQW4gaXRlcmFibGUgb2Ygc2VwYXJhdG9ycy5cbiAqIEByZXR1cm5zIHtBc3luY0l0ZXJhYmxlfSBBbiBpdGVyYWJsZSBvZiB0YXBlcy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uKiBfc3BsaXQodGFwZSwgc2VwKSB7XG5cdGNvbnN0IF9zZXAgPSBuZXcgU2V0KHNlcCk7XG5cblx0d2hpbGUgKHRydWUpIHtcblx0XHRjb25zdCB0b2tlbiA9IGF3YWl0IHRhcGUucmVhZCgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWF3YWl0LWluLWxvb3BcblxuXHRcdGlmICh0b2tlbiA9PT0gdGFwZS5lb2YpIGJyZWFrO1xuXG5cdFx0aWYgKF9zZXAuaGFzKHRva2VuKSkgY29udGludWU7XG5cblx0XHRjb25zdCBncm91cCA9IGZyb21Bc3luY0l0ZXJhYmxlKFxuXHRcdFx0KGFzeW5jIGZ1bmN0aW9uKigpIHtcblx0XHRcdFx0eWllbGQgdG9rZW47XG5cblx0XHRcdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdFx0XHRjb25zdCB0b2tlbiA9IGF3YWl0IHRhcGUucmVhZCgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWF3YWl0LWluLWxvb3BcblxuXHRcdFx0XHRcdGlmIChfc2VwLmhhcyh0b2tlbikpIGJyZWFrO1xuXG5cdFx0XHRcdFx0eWllbGQgdG9rZW47XG5cdFx0XHRcdH1cblx0XHRcdH0pKClcblx0XHQpO1xuXG5cdFx0eWllbGQgZ3JvdXA7XG5cblx0XHRhd2FpdCBleGhhdXN0KGdyb3VwKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1hd2FpdC1pbi1sb29wXG5cdH1cbn1cbiJdfQ==