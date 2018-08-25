"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eof = _interopRequireDefault(require("./eof"));

var _toAsyncIterator = _interopRequireDefault(require("./toAsyncIterator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Class that wraps a callable with a tape.
 * Do not use directly. Use {@link fromCallable} instead.
 */
var Tape =
/*#__PURE__*/
function () {
  /**
   * The constructor. Stores the callable that yields values to put on the tape.
   *
   * @param {Callable} callable - The callable to use.
   */
  function Tape(callable) {
    _classCallCheck(this, Tape);

    /**
     * The callable yielding values to put on the tape.
     * @type {Callable}
     */
    this.callable = callable;
    /**
     * Buffer used to implement {@link Tape#unread}.
     * @type {Array}
     */

    this.buffer = [];
    /**
     * The eof symbol.
     * @type {String}
     */

    this.eof = _eof.default;
  }
  /**
   * Returns the next token on the tape or {@link Tape#eof}
   * if the tape has been exhausted.
   *
   * @returns {Object} The next token on the tape or {@link Tape#eof}.
   */


  _createClass(Tape, [{
    key: "read",
    value: function () {
      var _read = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var state;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.buffer.length > 0)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", this.buffer.pop());

              case 2:
                _context.next = 4;
                return this.callable();

              case 4:
                state = _context.sent;

                if (!state.done) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", this.eof);

              case 7:
                return _context.abrupt("return", state.value);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function read() {
        return _read.apply(this, arguments);
      };
    }()
    /**
     * Puts a token back on the tape. If {@link Tape#read} is
     * used just after, this token will be returned.
     *
     * @param {Object} token - The token to put back on the tape.
     */

  }, {
    key: "unread",
    value: function unread(token) {
      // Should this be async too ?
      this.buffer.push(token);
    }
    /**
     * Skips the next token on the tape.
     */

  }, {
    key: "skip",
    value: function () {
      var _skip = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this.buffer.length > 0)) {
                  _context2.next = 4;
                  break;
                }

                this.buffer.pop();
                _context2.next = 6;
                break;

              case 4:
                _context2.next = 6;
                return this.callable();

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function skip() {
        return _skip.apply(this, arguments);
      };
    }()
    /**
     * Skip the next `n` tokens on the tape.
     *
     * @param {Number} n - The number of tokens to skip.
     */

  }, {
    key: "skipMany",
    value: function () {
      var _skipMany = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(n) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(n-- > 0)) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 3;
                return this.skip();

              case 3:
                _context3.next = 0;
                break;

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function skipMany(_x) {
        return _skipMany.apply(this, arguments);
      };
    }()
    /**
     * Returns an async iterator on the tokens of the tape.
     *
     * @example
     * fromString('abc');
     * for await ( const token of tape ) console.log(token) ;
     *
     * @returns {AsyncIterator} Iterator on the tokens of the tape.
     */

  }, {
    key: Symbol.asyncIterator,
    value: function value() {
      return (0, _toAsyncIterator.default)(this);
    }
    /**
     * Explicitely throws when trying to access iterator symbol.
     *
     * @throws {Error} Always.
     */

  }, {
    key: Symbol.iterator,
    value: function value() {
      throw new Error('Not implemented. A tape has no *synchronous* iterator. Use `toArray` or `toString` instead.');
    }
  }]);

  return Tape;
}();

exports.default = Tape;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UYXBlLmpzIl0sIm5hbWVzIjpbIlRhcGUiLCJjYWxsYWJsZSIsImJ1ZmZlciIsImVvZiIsImxlbmd0aCIsInBvcCIsInN0YXRlIiwiZG9uZSIsInZhbHVlIiwidG9rZW4iLCJwdXNoIiwibiIsInNraXAiLCJTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwiaXRlcmF0b3IiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBSXFCQSxJOzs7QUFDcEI7Ozs7O0FBS0EsZ0JBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDckI7Ozs7QUFJQSxTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUVBOzs7OztBQUlBLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBRUE7Ozs7O0FBSUEsU0FBS0MsR0FBTCxHQUFXQSxZQUFYO0FBQ0E7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkFPSyxLQUFLRCxNQUFMLENBQVlFLE1BQVosR0FBcUIsQzs7Ozs7aURBQVUsS0FBS0YsTUFBTCxDQUFZRyxHQUFaLEU7Ozs7dUJBRWYsS0FBS0osUUFBTCxFOzs7QUFBZEssZ0JBQUFBLEs7O3FCQUVGQSxLQUFLLENBQUNDLEk7Ozs7O2lEQUFhLEtBQUtKLEc7OztpREFFckJHLEtBQUssQ0FBQ0UsSzs7Ozs7Ozs7Ozs7Ozs7QUFHZDs7Ozs7Ozs7OzJCQU1PQyxLLEVBQU87QUFDYjtBQUNBLFdBQUtQLE1BQUwsQ0FBWVEsSUFBWixDQUFpQkQsS0FBakI7QUFDQTtBQUVEOzs7Ozs7Ozs7Ozs7OztzQkFJSyxLQUFLUCxNQUFMLENBQVlFLE1BQVosR0FBcUIsQzs7Ozs7QUFBRyxxQkFBS0YsTUFBTCxDQUFZRyxHQUFaOzs7Ozs7dUJBQ2pCLEtBQUtKLFFBQUwsRTs7Ozs7Ozs7Ozs7Ozs7QUFHWjs7Ozs7Ozs7Ozs7Z0RBS2VVLEM7Ozs7O3NCQUNQQSxDQUFDLEtBQUssQzs7Ozs7O3VCQUFTLEtBQUtDLElBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3ZCOzs7Ozs7Ozs7OztTQVNDQyxNQUFNLENBQUNDLGE7NEJBQWlCO0FBQ3hCLGFBQU8sOEJBQWdCLElBQWhCLENBQVA7QUFDQTtBQUVEOzs7Ozs7O1NBS0NELE1BQU0sQ0FBQ0UsUTs0QkFBWTtBQUNuQixZQUFNLElBQUlDLEtBQUosQ0FDTCw2RkFESyxDQUFOO0FBR0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZW9mIGZyb20gJy4vZW9mJztcbmltcG9ydCB0b0FzeW5jSXRlcmF0b3IgZnJvbSAnLi90b0FzeW5jSXRlcmF0b3InO1xuXG4vKipcbiAqIENsYXNzIHRoYXQgd3JhcHMgYSBjYWxsYWJsZSB3aXRoIGEgdGFwZS5cbiAqIERvIG5vdCB1c2UgZGlyZWN0bHkuIFVzZSB7QGxpbmsgZnJvbUNhbGxhYmxlfSBpbnN0ZWFkLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXBlIHtcblx0LyoqXG5cdCAqIFRoZSBjb25zdHJ1Y3Rvci4gU3RvcmVzIHRoZSBjYWxsYWJsZSB0aGF0IHlpZWxkcyB2YWx1ZXMgdG8gcHV0IG9uIHRoZSB0YXBlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0NhbGxhYmxlfSBjYWxsYWJsZSAtIFRoZSBjYWxsYWJsZSB0byB1c2UuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihjYWxsYWJsZSkge1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBjYWxsYWJsZSB5aWVsZGluZyB2YWx1ZXMgdG8gcHV0IG9uIHRoZSB0YXBlLlxuXHRcdCAqIEB0eXBlIHtDYWxsYWJsZX1cblx0XHQgKi9cblx0XHR0aGlzLmNhbGxhYmxlID0gY2FsbGFibGU7XG5cblx0XHQvKipcblx0XHQgKiBCdWZmZXIgdXNlZCB0byBpbXBsZW1lbnQge0BsaW5rIFRhcGUjdW5yZWFkfS5cblx0XHQgKiBAdHlwZSB7QXJyYXl9XG5cdFx0ICovXG5cdFx0dGhpcy5idWZmZXIgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBlb2Ygc3ltYm9sLlxuXHRcdCAqIEB0eXBlIHtTdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5lb2YgPSBlb2Y7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgbmV4dCB0b2tlbiBvbiB0aGUgdGFwZSBvciB7QGxpbmsgVGFwZSNlb2Z9XG5cdCAqIGlmIHRoZSB0YXBlIGhhcyBiZWVuIGV4aGF1c3RlZC5cblx0ICpcblx0ICogQHJldHVybnMge09iamVjdH0gVGhlIG5leHQgdG9rZW4gb24gdGhlIHRhcGUgb3Ige0BsaW5rIFRhcGUjZW9mfS5cblx0ICovXG5cdGFzeW5jIHJlYWQoKSB7XG5cdFx0aWYgKHRoaXMuYnVmZmVyLmxlbmd0aCA+IDApIHJldHVybiB0aGlzLmJ1ZmZlci5wb3AoKTtcblxuXHRcdGNvbnN0IHN0YXRlID0gYXdhaXQgdGhpcy5jYWxsYWJsZSgpO1xuXG5cdFx0aWYgKHN0YXRlLmRvbmUpIHJldHVybiB0aGlzLmVvZjtcblxuXHRcdHJldHVybiBzdGF0ZS52YWx1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQdXRzIGEgdG9rZW4gYmFjayBvbiB0aGUgdGFwZS4gSWYge0BsaW5rIFRhcGUjcmVhZH0gaXNcblx0ICogdXNlZCBqdXN0IGFmdGVyLCB0aGlzIHRva2VuIHdpbGwgYmUgcmV0dXJuZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB0b2tlbiAtIFRoZSB0b2tlbiB0byBwdXQgYmFjayBvbiB0aGUgdGFwZS5cblx0ICovXG5cdHVucmVhZCh0b2tlbikge1xuXHRcdC8vIFNob3VsZCB0aGlzIGJlIGFzeW5jIHRvbyA/XG5cdFx0dGhpcy5idWZmZXIucHVzaCh0b2tlbik7XG5cdH1cblxuXHQvKipcblx0ICogU2tpcHMgdGhlIG5leHQgdG9rZW4gb24gdGhlIHRhcGUuXG5cdCAqL1xuXHRhc3luYyBza2lwKCkge1xuXHRcdGlmICh0aGlzLmJ1ZmZlci5sZW5ndGggPiAwKSB0aGlzLmJ1ZmZlci5wb3AoKTtcblx0XHRlbHNlIGF3YWl0IHRoaXMuY2FsbGFibGUoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTa2lwIHRoZSBuZXh0IGBuYCB0b2tlbnMgb24gdGhlIHRhcGUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBuIC0gVGhlIG51bWJlciBvZiB0b2tlbnMgdG8gc2tpcC5cblx0ICovXG5cdGFzeW5jIHNraXBNYW55KG4pIHtcblx0XHR3aGlsZSAobi0tID4gMCkgYXdhaXQgdGhpcy5za2lwKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYW4gYXN5bmMgaXRlcmF0b3Igb24gdGhlIHRva2VucyBvZiB0aGUgdGFwZS5cblx0ICpcblx0ICogQGV4YW1wbGVcblx0ICogZnJvbVN0cmluZygnYWJjJyk7XG5cdCAqIGZvciBhd2FpdCAoIGNvbnN0IHRva2VuIG9mIHRhcGUgKSBjb25zb2xlLmxvZyh0b2tlbikgO1xuXHQgKlxuXHQgKiBAcmV0dXJucyB7QXN5bmNJdGVyYXRvcn0gSXRlcmF0b3Igb24gdGhlIHRva2VucyBvZiB0aGUgdGFwZS5cblx0ICovXG5cdFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSB7XG5cdFx0cmV0dXJuIHRvQXN5bmNJdGVyYXRvcih0aGlzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBFeHBsaWNpdGVseSB0aHJvd3Mgd2hlbiB0cnlpbmcgdG8gYWNjZXNzIGl0ZXJhdG9yIHN5bWJvbC5cblx0ICpcblx0ICogQHRocm93cyB7RXJyb3J9IEFsd2F5cy5cblx0ICovXG5cdFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdCdOb3QgaW1wbGVtZW50ZWQuIEEgdGFwZSBoYXMgbm8gKnN5bmNocm9ub3VzKiBpdGVyYXRvci4gVXNlIGB0b0FycmF5YCBvciBgdG9TdHJpbmdgIGluc3RlYWQuJ1xuXHRcdCk7XG5cdH1cbn1cbiJdfQ==