"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._fromReadStream = _fromReadStream;
exports.default = void 0;

var _fromAsyncIterable = _interopRequireDefault(require("./fromAsyncIterable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
 * Converts a ReadStream object to an async iterable of tokens.
 *
 * @private
 * @param {ReadStream} readStream - The ReadStream object to convert.
 * @returns {AsyncIterable} The converted iterable.
 */
function _fromReadStream(_x) {
  return _fromReadStream2.apply(this, arguments);
}
/**
 * Converts a ReadStream object to a tape.
 *
 * @function
 * @param {ReadStream} readStream - The ReadStream object to convert.
 * @returns {Tape} The converted tape.
 */


function _fromReadStream2() {
  _fromReadStream2 = _wrapAsyncGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(readStream) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, chunk, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, piece;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 2;
            _iterator = _asyncIterator(readStream);

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
              _context.next = 42;
              break;
            }

            chunk = _value;
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 16;
            _iterator2 = chunk[Symbol.iterator]();

          case 18:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context.next = 25;
              break;
            }

            piece = _step2.value;
            _context.next = 22;
            return piece;

          case 22:
            _iteratorNormalCompletion2 = true;
            _context.next = 18;
            break;

          case 25:
            _context.next = 31;
            break;

          case 27:
            _context.prev = 27;
            _context.t0 = _context["catch"](16);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t0;

          case 31:
            _context.prev = 31;
            _context.prev = 32;

            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }

          case 34:
            _context.prev = 34;

            if (!_didIteratorError2) {
              _context.next = 37;
              break;
            }

            throw _iteratorError2;

          case 37:
            return _context.finish(34);

          case 38:
            return _context.finish(31);

          case 39:
            _iteratorNormalCompletion = true;
            _context.next = 4;
            break;

          case 42:
            _context.next = 48;
            break;

          case 44:
            _context.prev = 44;
            _context.t1 = _context["catch"](2);
            _didIteratorError = true;
            _iteratorError = _context.t1;

          case 48:
            _context.prev = 48;
            _context.prev = 49;

            if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
              _context.next = 53;
              break;
            }

            _context.next = 53;
            return _awaitAsyncGenerator(_iterator.return());

          case 53:
            _context.prev = 53;

            if (!_didIteratorError) {
              _context.next = 56;
              break;
            }

            throw _iteratorError;

          case 56:
            return _context.finish(53);

          case 57:
            return _context.finish(48);

          case 58:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 44, 48, 58], [16, 27, 31, 39], [32,, 34, 38], [49,, 53, 57]]);
  }));
  return _fromReadStream2.apply(this, arguments);
}

var _default = function _default(readStream) {
  return (0, _fromAsyncIterable.default)(_fromReadStream(readStream));
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcm9tUmVhZFN0cmVhbS5qcyJdLCJuYW1lcyI6WyJfZnJvbVJlYWRTdHJlYW0iLCJyZWFkU3RyZWFtIiwiY2h1bmsiLCJwaWVjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7O1NBT3VCQSxlOzs7QUFNdkI7Ozs7Ozs7Ozs7OzswQkFOTyxpQkFBZ0NDLFVBQWhDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FDb0JBLFVBRHBCOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ1dDLFlBQUFBLEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUVlQSxLQUZmOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRU1DLFlBQUFBLEtBRk47QUFBQTtBQUVzQixtQkFBTUEsS0FBTjs7QUFGdEI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O2VBYVEsa0JBQUFGLFVBQVU7QUFBQSxTQUFJLGdDQUFrQkQsZUFBZSxDQUFDQyxVQUFELENBQWpDLENBQUo7QUFBQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZyb21Bc3luY0l0ZXJhYmxlIGZyb20gJy4vZnJvbUFzeW5jSXRlcmFibGUnO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgUmVhZFN0cmVhbSBvYmplY3QgdG8gYW4gYXN5bmMgaXRlcmFibGUgb2YgdG9rZW5zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1JlYWRTdHJlYW19IHJlYWRTdHJlYW0gLSBUaGUgUmVhZFN0cmVhbSBvYmplY3QgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBc3luY0l0ZXJhYmxlfSBUaGUgY29udmVydGVkIGl0ZXJhYmxlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24qIF9mcm9tUmVhZFN0cmVhbShyZWFkU3RyZWFtKSB7XG5cdGZvciBhd2FpdCAoY29uc3QgY2h1bmsgb2YgcmVhZFN0cmVhbSkge1xuXHRcdGZvciAoY29uc3QgcGllY2Ugb2YgY2h1bmspIHlpZWxkIHBpZWNlO1xuXHR9XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBSZWFkU3RyZWFtIG9iamVjdCB0byBhIHRhcGUuXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1JlYWRTdHJlYW19IHJlYWRTdHJlYW0gLSBUaGUgUmVhZFN0cmVhbSBvYmplY3QgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtUYXBlfSBUaGUgY29udmVydGVkIHRhcGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHJlYWRTdHJlYW0gPT4gZnJvbUFzeW5jSXRlcmFibGUoX2Zyb21SZWFkU3RyZWFtKHJlYWRTdHJlYW0pKTtcbiJdfQ==