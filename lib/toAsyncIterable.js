"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toAsyncIterable;

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume("next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

/**
 * Converts a tape to an asynchronous iterable.
 *
 * @param {Tape} tape - The tape to read from.
 * @returns {AsyncIterable} The converted iterable.
 */
function toAsyncIterable(_x) {
  return _toAsyncIterable.apply(this, arguments);
}

function _toAsyncIterable() {
  _toAsyncIterable = _wrapAsyncGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(tape) {
    var token;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!true) {
              _context.next = 10;
              break;
            }

            _context.next = 3;
            return _awaitAsyncGenerator(tape.read());

          case 3:
            token = _context.sent;

            if (!(token === tape.eof)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("break", 10);

          case 6:
            _context.next = 8;
            return token;

          case 8:
            _context.next = 0;
            break;

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _toAsyncIterable.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b0FzeW5jSXRlcmFibGUuanMiXSwibmFtZXMiOlsidG9Bc3luY0l0ZXJhYmxlIiwidGFwZSIsInJlYWQiLCJ0b2tlbiIsImVvZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O1NBTStCQSxlOzs7Ozs7OzBCQUFoQixpQkFBZ0NDLElBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNQLElBRE87QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx3Q0FFT0EsSUFBSSxDQUFDQyxJQUFMLEVBRlA7O0FBQUE7QUFFUEMsWUFBQUEsS0FGTzs7QUFBQSxrQkFJVEEsS0FBSyxLQUFLRixJQUFJLENBQUNHLEdBSk47QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQU1iLG1CQUFNRCxLQUFOOztBQU5hO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb252ZXJ0cyBhIHRhcGUgdG8gYW4gYXN5bmNocm9ub3VzIGl0ZXJhYmxlLlxuICpcbiAqIEBwYXJhbSB7VGFwZX0gdGFwZSAtIFRoZSB0YXBlIHRvIHJlYWQgZnJvbS5cbiAqIEByZXR1cm5zIHtBc3luY0l0ZXJhYmxlfSBUaGUgY29udmVydGVkIGl0ZXJhYmxlLlxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiogdG9Bc3luY0l0ZXJhYmxlKHRhcGUpIHtcblx0d2hpbGUgKHRydWUpIHtcblx0XHRjb25zdCB0b2tlbiA9IGF3YWl0IHRhcGUucmVhZCgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWF3YWl0LWluLWxvb3BcblxuXHRcdGlmICh0b2tlbiA9PT0gdGFwZS5lb2YpIGJyZWFrO1xuXG5cdFx0eWllbGQgdG9rZW47XG5cdH1cbn1cbiJdfQ==