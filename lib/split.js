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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcGxpdC5qcyJdLCJuYW1lcyI6WyJzcGxpdCIsInRhcGUiLCJzZXAiLCJfc3BsaXQiLCJfc2VwIiwiU2V0IiwicmVhZCIsInRva2VuIiwiZW9mIiwiaGFzIiwiZ3JvdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0FBUWUsU0FBU0EsS0FBVCxDQUFpQkMsSUFBakIsRUFBd0JDLEdBQXhCLEVBQThCO0FBRTVDLFNBQU8sZ0NBQW1CQyxNQUFNLENBQUVGLElBQUYsRUFBU0MsR0FBVCxDQUF6QixDQUFQO0FBRUE7QUFFRDs7Ozs7Ozs7O1NBT3VCQyxNOzs7Ozs7OzBCQUFoQixrQkFBeUJGLElBQXpCLEVBQWdDQyxHQUFoQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUFFLFlBQUFBLElBRkEsR0FFTyxJQUFJQyxHQUFKLENBQVNILEdBQVQsQ0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQU1lRCxJQUFJLENBQUNLLElBQUwsRUFOZjs7QUFBQTtBQU1DQyxzQkFBQUEsS0FORDs7QUFBQSw0QkFRQUEsS0FBSyxLQUFLTixJQUFJLENBQUNPLEdBUmY7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQSwyQkFVQUosSUFBSSxDQUFDSyxHQUFMLENBQVVGLEtBQVYsQ0FWQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQVlDRyxzQkFBQUEsS0FaRCxHQVlTLGdDQUFtQjtBQUFBO0FBQUEsOENBQUU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWxDLHVDQUFNSCxLQUFOOztBQUZrQztBQUFBLHFDQUkxQixJQUowQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDREQU1iTixJQUFJLENBQUNLLElBQUwsRUFOYTs7QUFBQTtBQU0zQkMsZ0NBQUFBLE1BTjJCOztBQUFBLHFDQVE1QkgsSUFBSSxDQUFDSyxHQUFMLENBQVVGLE1BQVYsQ0FSNEI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQVVqQyx1Q0FBTUEsTUFBTjs7QUFWaUM7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFGLElBQW5CLENBWlQ7QUFBQTtBQTRCTCw2QkFBTUcsS0FBTjs7QUE1Qks7QUFBQTtBQUFBLGtEQThCQyxzQkFBU0EsS0FBVCxDQTlCRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGlCQUlFLElBSkY7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnJvbUFzeW5jSXRlcmFibGUgZnJvbSAnLi9mcm9tQXN5bmNJdGVyYWJsZScgO1xuaW1wb3J0IGV4aGF1c3QgZnJvbSAnLi9leGhhdXN0JyA7XG5cbi8qKlxuICogU3BsaXRzIHRoZSBpbnB1dCB0YXBlIGludG8gYSB0YXBlIG9mIHRhcGVzIGFjY29yZGluZyB0byBzb21lIHNldCBvZlxuICogc2VwYXJhdG9ycy4gU2VlIHtAbGluayBfc3BsaXR9IGZvciB0aGUgYWN0dWFsIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEBwYXJhbSB7VGFwZX0gdGFwZSAtIFRoZSBpbnB1dCB0YXBlLlxuICogQHBhcmFtIHtJdGVyYWJsZX0gc2VwIC0gQW4gaXRlcmFibGUgb2Ygc2VwYXJhdG9ycy5cbiAqIEByZXR1cm5zIHtUYXBlfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzcGxpdCAoIHRhcGUgLCBzZXAgKSB7XG5cblx0cmV0dXJuIGZyb21Bc3luY0l0ZXJhYmxlKCBfc3BsaXQoIHRhcGUgLCBzZXAgKSApIDtcblxufVxuXG4vKipcbiAqIFNhbWUgYXMge0BsaW5rIHNwbGl0fSwgYnV0IHJldHVybnMgYW4gaXRlcmF0b3IgcmF0aGVyIHRoYW4gYSB0YXBlLlxuICpcbiAqIEBwYXJhbSB7VGFwZX0gdGFwZSAtIFRoZSBpbnB1dCB0YXBlLlxuICogQHBhcmFtIHtJdGVyYWJsZX0gc2VwIC0gQW4gaXRlcmFibGUgb2Ygc2VwYXJhdG9ycy5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uKiBfc3BsaXQgKCB0YXBlICwgc2VwICkge1xuXG5cdGNvbnN0IF9zZXAgPSBuZXcgU2V0KCBzZXAgKSA7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0Y29uc3QgdG9rZW4gPSBhd2FpdCB0YXBlLnJlYWQoICkgO1xuXG5cdFx0aWYgKCB0b2tlbiA9PT0gdGFwZS5lb2YgKSBicmVhayA7XG5cblx0XHRpZiAoIF9zZXAuaGFzKCB0b2tlbiApICkgY29udGludWUgO1xuXG5cdFx0Y29uc3QgZ3JvdXAgPSBmcm9tQXN5bmNJdGVyYWJsZSggKCBhc3luYyBmdW5jdGlvbiogKCApIHtcblxuXHRcdFx0eWllbGQgdG9rZW4gO1xuXG5cdFx0XHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRcdFx0Y29uc3QgdG9rZW4gPSBhd2FpdCB0YXBlLnJlYWQoICkgO1xuXG5cdFx0XHRcdGlmICggX3NlcC5oYXMoIHRva2VuICkgKSBicmVhayA7XG5cblx0XHRcdFx0eWllbGQgdG9rZW4gO1xuXG5cdFx0XHR9XG5cblx0XHR9ICkoICkgKSA7XG5cblx0XHR5aWVsZCBncm91cCA7XG5cblx0XHRhd2FpdCBleGhhdXN0KCBncm91cCApIDtcblxuXHR9XG5cbn1cbiJdfQ==