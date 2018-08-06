"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = asyncChain;

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume("next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

function _asyncIterator(iterable) { var method; if (typeof Symbol === "function") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

/**
 * Utility function to chain an async iterable of async iterables.
 */
function asyncChain(_x) {
  return _asyncChain.apply(this, arguments);
}

function _asyncChain() {
  _asyncChain = _wrapAsyncGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(iterables) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, iterable, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _value2, item;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 2;
            _iterator = _asyncIterator(iterables);

          case 4:
            _context.next = 6;
            return _awaitAsyncGenerator(_iterator.next());

          case 6:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 10;
            return _awaitAsyncGenerator(_step.value);

          case 10:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 50;
              break;
            }

            iterable = _value;
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _context.prev = 15;
            _iterator2 = _asyncIterator(iterable);

          case 17:
            _context.next = 19;
            return _awaitAsyncGenerator(_iterator2.next());

          case 19:
            _step2 = _context.sent;
            _iteratorNormalCompletion2 = _step2.done;
            _context.next = 23;
            return _awaitAsyncGenerator(_step2.value);

          case 23:
            _value2 = _context.sent;

            if (_iteratorNormalCompletion2) {
              _context.next = 31;
              break;
            }

            item = _value2;
            _context.next = 28;
            return item;

          case 28:
            _iteratorNormalCompletion2 = true;
            _context.next = 17;
            break;

          case 31:
            _context.next = 37;
            break;

          case 33:
            _context.prev = 33;
            _context.t0 = _context["catch"](15);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t0;

          case 37:
            _context.prev = 37;
            _context.prev = 38;

            if (!(!_iteratorNormalCompletion2 && _iterator2.return != null)) {
              _context.next = 42;
              break;
            }

            _context.next = 42;
            return _awaitAsyncGenerator(_iterator2.return());

          case 42:
            _context.prev = 42;

            if (!_didIteratorError2) {
              _context.next = 45;
              break;
            }

            throw _iteratorError2;

          case 45:
            return _context.finish(42);

          case 46:
            return _context.finish(37);

          case 47:
            _iteratorNormalCompletion = true;
            _context.next = 4;
            break;

          case 50:
            _context.next = 56;
            break;

          case 52:
            _context.prev = 52;
            _context.t1 = _context["catch"](2);
            _didIteratorError = true;
            _iteratorError = _context.t1;

          case 56:
            _context.prev = 56;
            _context.prev = 57;

            if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
              _context.next = 61;
              break;
            }

            _context.next = 61;
            return _awaitAsyncGenerator(_iterator.return());

          case 61:
            _context.prev = 61;

            if (!_didIteratorError) {
              _context.next = 64;
              break;
            }

            throw _iteratorError;

          case 64:
            return _context.finish(61);

          case 65:
            return _context.finish(56);

          case 66:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 52, 56, 66], [15, 33, 37, 47], [38,, 42, 46], [57,, 61, 65]]);
  }));
  return _asyncChain.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hc3luY0NoYWluLmpzIl0sIm5hbWVzIjpbImFzeW5jQ2hhaW4iLCJpdGVyYWJsZXMiLCJpdGVyYWJsZSIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O1NBRytCQSxVOzs7Ozs7OzBCQUFoQixpQkFBNkJDLFNBQTdCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FDZ0JBLFNBRGhCOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0lDLFlBQUFBLFFBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FFYUEsUUFGYjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVLQyxZQUFBQSxJQUZMO0FBQUE7QUFFd0IsbUJBQU1BLElBQU47O0FBRnhCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gY2hhaW4gYW4gYXN5bmMgaXRlcmFibGUgb2YgYXN5bmMgaXRlcmFibGVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiogYXN5bmNDaGFpbiAoIGl0ZXJhYmxlcyApIHtcblx0Zm9yIGF3YWl0ICggY29uc3QgaXRlcmFibGUgb2YgaXRlcmFibGVzICkge1xuXHRcdGZvciBhd2FpdCAoIGNvbnN0IGl0ZW0gb2YgaXRlcmFibGUgKSB5aWVsZCBpdGVtIDtcblx0fVxufVxuIl19