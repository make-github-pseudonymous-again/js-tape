"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toiterable;

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
function toiterable(_x) {
  return _toiterable.apply(this, arguments);
}

function _toiterable() {
  _toiterable = _wrapAsyncGenerator(
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
  return _toiterable.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b2l0ZXJhYmxlLmpzIl0sIm5hbWVzIjpbInRvaXRlcmFibGUiLCJzdHJlYW0iLCJyZWFkIiwidG9rZW4iLCJlb2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7U0FJK0JBLFU7Ozs7Ozs7MEJBQWhCLGlCQUE2QkMsTUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRU4sSUFGTTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHdDQUlPQSxNQUFNLENBQUNDLElBQVAsRUFKUDs7QUFBQTtBQUlQQyxZQUFBQSxLQUpPOztBQUFBLGtCQU1SQSxLQUFLLEtBQUtGLE1BQU0sQ0FBQ0csR0FOVDtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBUWIsbUJBQU1ELEtBQU47O0FBUmE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbnZlcnRzIGEgc3RyZWFtIHRvIGFuIGl0ZXJhYmxlLlxuICogQHBhcmFtIHtTdHJlYW19IHN0cmVhbSB0aGUgc3RyZWFtIHRvIHJlYWQgZnJvbVxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiogdG9pdGVyYWJsZSAoIHN0cmVhbSApIHtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRjb25zdCB0b2tlbiA9IGF3YWl0IHN0cmVhbS5yZWFkKCApIDtcblxuXHRcdGlmICggdG9rZW4gPT09IHN0cmVhbS5lb2YgKSBicmVhayA7XG5cblx0XHR5aWVsZCB0b2tlbiA7XG5cblx0fVxuXG59XG4iXX0=