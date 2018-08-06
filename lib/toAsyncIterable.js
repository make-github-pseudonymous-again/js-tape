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
 * Converts a stream to an iterable.
 * @param {Stream} stream the stream to read from
 */
function toAsyncIterable(_x) {
  return _toAsyncIterable.apply(this, arguments);
}

function _toAsyncIterable() {
  _toAsyncIterable = _wrapAsyncGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(stream) {
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
            return _awaitAsyncGenerator(stream.read());

          case 3:
            token = _context.sent;

            if (!(token === stream.eof)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b0FzeW5jSXRlcmFibGUuanMiXSwibmFtZXMiOlsidG9Bc3luY0l0ZXJhYmxlIiwic3RyZWFtIiwicmVhZCIsInRva2VuIiwiZW9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O1NBSStCQSxlOzs7Ozs7OzBCQUFoQixpQkFBa0NDLE1BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVOLElBRk07QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx3Q0FJT0EsTUFBTSxDQUFDQyxJQUFQLEVBSlA7O0FBQUE7QUFJUEMsWUFBQUEsS0FKTzs7QUFBQSxrQkFNUkEsS0FBSyxLQUFLRixNQUFNLENBQUNHLEdBTlQ7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQVFiLG1CQUFNRCxLQUFOOztBQVJhO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb252ZXJ0cyBhIHN0cmVhbSB0byBhbiBpdGVyYWJsZS5cbiAqIEBwYXJhbSB7U3RyZWFtfSBzdHJlYW0gdGhlIHN0cmVhbSB0byByZWFkIGZyb21cbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24qIHRvQXN5bmNJdGVyYWJsZSAoIHN0cmVhbSApIHtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRjb25zdCB0b2tlbiA9IGF3YWl0IHN0cmVhbS5yZWFkKCApIDtcblxuXHRcdGlmICggdG9rZW4gPT09IHN0cmVhbS5lb2YgKSBicmVhayA7XG5cblx0XHR5aWVsZCB0b2tlbiA7XG5cblx0fVxuXG59XG4iXX0=