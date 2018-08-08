"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _EOF = _interopRequireDefault(require("./EOF"));

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

    this.callable = callable;
    this.buffer = [];
    this.eof = _EOF.default;
  }
  /**
   * Returns the next token on the tape or {@link Tape#eof}
   * if the tape has been exhausted.
   *
   * @returns {Object}
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
      // should this be async too ?
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
     * @returns {AsyncIterator}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UYXBlLmpzIl0sIm5hbWVzIjpbIlRhcGUiLCJjYWxsYWJsZSIsImJ1ZmZlciIsImVvZiIsIkVPRiIsImxlbmd0aCIsInBvcCIsInN0YXRlIiwiZG9uZSIsInZhbHVlIiwidG9rZW4iLCJwdXNoIiwibiIsInNraXAiLCJTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwiaXRlcmF0b3IiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBSXFCQSxJOzs7QUFFcEI7Ozs7O0FBS0EsZ0JBQWNDLFFBQWQsRUFBeUI7QUFBQTs7QUFDeEIsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtDLEdBQUwsR0FBV0MsWUFBWDtBQUNBO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBUU0sS0FBS0YsTUFBTCxDQUFZRyxNQUFaLEdBQXFCLEM7Ozs7O2lEQUFXLEtBQUtILE1BQUwsQ0FBWUksR0FBWixFOzs7O3VCQUVqQixLQUFLTCxRQUFMLEU7OztBQUFkTSxnQkFBQUEsSzs7cUJBRURBLEtBQUssQ0FBQ0MsSTs7Ozs7aURBQWMsS0FBS0wsRzs7O2lEQUV2QkksS0FBSyxDQUFDRSxLOzs7Ozs7Ozs7Ozs7OztBQUlkOzs7Ozs7Ozs7MkJBTVNDLEssRUFBUTtBQUVoQjtBQUNBLFdBQUtSLE1BQUwsQ0FBWVMsSUFBWixDQUFrQkQsS0FBbEI7QUFFQTtBQUVEOzs7Ozs7Ozs7Ozs7OztzQkFLTSxLQUFLUixNQUFMLENBQVlHLE1BQVosR0FBcUIsQzs7Ozs7QUFBSSxxQkFBS0gsTUFBTCxDQUFZSSxHQUFaOzs7Ozs7dUJBQ25CLEtBQUtMLFFBQUwsRTs7Ozs7Ozs7Ozs7Ozs7QUFJWjs7Ozs7Ozs7Ozs7Z0RBS2lCVyxDOzs7OztzQkFFUkEsQ0FBQyxLQUFLLEM7Ozs7Ozt1QkFBVSxLQUFLQyxJQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl6Qjs7Ozs7Ozs7Ozs7U0FTQ0MsTUFBTSxDQUFDQyxhOzRCQUFtQjtBQUUxQixhQUFPLDhCQUFnQixJQUFoQixDQUFQO0FBRUE7QUFFRDs7Ozs7OztTQUtDRCxNQUFNLENBQUNFLFE7NEJBQWM7QUFFckIsWUFBTSxJQUFJQyxLQUFKLENBQVUsNkZBQVYsQ0FBTjtBQUVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVPRiBmcm9tICcuL0VPRicgO1xuaW1wb3J0IHRvQXN5bmNJdGVyYXRvciBmcm9tICcuL3RvQXN5bmNJdGVyYXRvcicgO1xuXG4vKipcbiAqIENsYXNzIHRoYXQgd3JhcHMgYSBjYWxsYWJsZSB3aXRoIGEgdGFwZS5cbiAqIERvIG5vdCB1c2UgZGlyZWN0bHkuIFVzZSB7QGxpbmsgZnJvbUNhbGxhYmxlfSBpbnN0ZWFkLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXBlIHtcblxuXHQvKipcblx0ICogVGhlIGNvbnN0cnVjdG9yLiBTdG9yZXMgdGhlIGNhbGxhYmxlIHRoYXQgeWllbGRzIHZhbHVlcyB0byBwdXQgb24gdGhlIHRhcGUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Q2FsbGFibGV9IGNhbGxhYmxlIC0gVGhlIGNhbGxhYmxlIHRvIHVzZS5cblx0ICovXG5cdGNvbnN0cnVjdG9yICggY2FsbGFibGUgKSB7XG5cdFx0dGhpcy5jYWxsYWJsZSA9IGNhbGxhYmxlIDtcblx0XHR0aGlzLmJ1ZmZlciA9IFsgXSA7XG5cdFx0dGhpcy5lb2YgPSBFT0YgO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIG5leHQgdG9rZW4gb24gdGhlIHRhcGUgb3Ige0BsaW5rIFRhcGUjZW9mfVxuXHQgKiBpZiB0aGUgdGFwZSBoYXMgYmVlbiBleGhhdXN0ZWQuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9XG5cdCAqL1xuXHRhc3luYyByZWFkICggKSB7XG5cblx0XHRpZiAoIHRoaXMuYnVmZmVyLmxlbmd0aCA+IDAgKSByZXR1cm4gdGhpcy5idWZmZXIucG9wKCApIDtcblxuXHRcdGNvbnN0IHN0YXRlID0gYXdhaXQgdGhpcy5jYWxsYWJsZSggKSA7XG5cblx0XHRpZiAoIHN0YXRlLmRvbmUgKSByZXR1cm4gdGhpcy5lb2YgO1xuXG5cdFx0cmV0dXJuIHN0YXRlLnZhbHVlIDtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFB1dHMgYSB0b2tlbiBiYWNrIG9uIHRoZSB0YXBlLiBJZiB7QGxpbmsgVGFwZSNyZWFkfSBpc1xuXHQgKiB1c2VkIGp1c3QgYWZ0ZXIsIHRoaXMgdG9rZW4gd2lsbCBiZSByZXR1cm5lZC5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IHRva2VuIC0gVGhlIHRva2VuIHRvIHB1dCBiYWNrIG9uIHRoZSB0YXBlLlxuXHQgKi9cblx0dW5yZWFkICggdG9rZW4gKSB7XG5cblx0XHQvLyBzaG91bGQgdGhpcyBiZSBhc3luYyB0b28gP1xuXHRcdHRoaXMuYnVmZmVyLnB1c2goIHRva2VuICkgO1xuXG5cdH1cblxuXHQvKipcblx0ICogU2tpcHMgdGhlIG5leHQgdG9rZW4gb24gdGhlIHRhcGUuXG5cdCAqL1xuXHRhc3luYyBza2lwICggKSB7XG5cblx0XHRpZiAoIHRoaXMuYnVmZmVyLmxlbmd0aCA+IDAgKSB0aGlzLmJ1ZmZlci5wb3AoICkgO1xuXHRcdGVsc2UgYXdhaXQgdGhpcy5jYWxsYWJsZSggKSA7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTa2lwIHRoZSBuZXh0IGBuYCB0b2tlbnMgb24gdGhlIHRhcGUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBuIC0gVGhlIG51bWJlciBvZiB0b2tlbnMgdG8gc2tpcC5cblx0ICovXG5cdGFzeW5jIHNraXBNYW55ICggbiApIHtcblxuXHRcdHdoaWxlICggbiAtLT4gMCApIGF3YWl0IHRoaXMuc2tpcCgpIDtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYW4gYXN5bmMgaXRlcmF0b3Igb24gdGhlIHRva2VucyBvZiB0aGUgdGFwZS5cblx0ICpcblx0ICogQGV4YW1wbGVcblx0ICogZnJvbVN0cmluZygnYWJjJyk7XG5cdCAqIGZvciBhd2FpdCAoIGNvbnN0IHRva2VuIG9mIHRhcGUgKSBjb25zb2xlLmxvZyh0b2tlbikgO1xuXHQgKlxuXHQgKiBAcmV0dXJucyB7QXN5bmNJdGVyYXRvcn1cblx0ICovXG5cdFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gKCApIHtcblxuXHRcdHJldHVybiB0b0FzeW5jSXRlcmF0b3IodGhpcyk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBFeHBsaWNpdGVseSB0aHJvd3Mgd2hlbiB0cnlpbmcgdG8gYWNjZXNzIGl0ZXJhdG9yIHN5bWJvbC5cblx0ICpcblx0ICogQHRocm93cyB7RXJyb3J9IEFsd2F5cy5cblx0ICovXG5cdFtTeW1ib2wuaXRlcmF0b3JdICggKSB7XG5cblx0XHR0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZC4gQSB0YXBlIGhhcyBubyAqc3luY2hyb25vdXMqIGl0ZXJhdG9yLiBVc2UgYHRvQXJyYXlgIG9yIGB0b1N0cmluZ2AgaW5zdGVhZC4nKSA7XG5cblx0fVxuXG59XG4iXX0=