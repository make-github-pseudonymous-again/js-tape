"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _EOF = _interopRequireDefault(require("./EOF"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Class that wraps a callable with a tape.
 */
var TapeFromCallable =
/*#__PURE__*/
function () {
  /**
   * The constructor. Stores the callable that yields values to tape.
   *
   * @param {Callable} callable - The callable to use.
   * @returns {TapeFromCallable}
   *
   */
  function TapeFromCallable(callable) {
    _classCallCheck(this, TapeFromCallable);

    this.callable = callable;
    this.buffer = [];
    this.eof = _EOF.default;
  }
  /**
   * Returns the next token on the tape or {@link TapeFromCallable#eof}
   * if the tape has been exhausted.
   *
   * @returns {Object}
   */


  _createClass(TapeFromCallable, [{
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
     * Puts a token back on the tape. If {@link TapeFromCallable#read} is
     * used just after, this token will be returned.
     *
     * @param {Object} token - The token to put back on the tape.
     * @returns {TapeFromCallable} Self, for chaining.
     */

  }, {
    key: "unread",
    value: function unread(token) {
      // should this be async too ?
      this.buffer.push(token);
      return this;
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
  }]);

  return TapeFromCallable;
}();

exports.default = TapeFromCallable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UYXBlRnJvbUNhbGxhYmxlLmpzIl0sIm5hbWVzIjpbIlRhcGVGcm9tQ2FsbGFibGUiLCJjYWxsYWJsZSIsImJ1ZmZlciIsImVvZiIsIkVPRiIsImxlbmd0aCIsInBvcCIsInN0YXRlIiwiZG9uZSIsInZhbHVlIiwidG9rZW4iLCJwdXNoIiwibiIsInNraXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR3FCQSxnQjs7O0FBRXBCOzs7Ozs7O0FBT0EsNEJBQWNDLFFBQWQsRUFBeUI7QUFBQTs7QUFDeEIsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtDLEdBQUwsR0FBV0MsWUFBWDtBQUNBO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBUU0sS0FBS0YsTUFBTCxDQUFZRyxNQUFaLEdBQXFCLEM7Ozs7O2lEQUFXLEtBQUtILE1BQUwsQ0FBWUksR0FBWixFOzs7O3VCQUVqQixLQUFLTCxRQUFMLEU7OztBQUFkTSxnQkFBQUEsSzs7cUJBRURBLEtBQUssQ0FBQ0MsSTs7Ozs7aURBQWMsS0FBS0wsRzs7O2lEQUV2QkksS0FBSyxDQUFDRSxLOzs7Ozs7Ozs7Ozs7OztBQUlkOzs7Ozs7Ozs7OzJCQU9TQyxLLEVBQVE7QUFFaEI7QUFDQSxXQUFLUixNQUFMLENBQVlTLElBQVosQ0FBa0JELEtBQWxCO0FBRUEsYUFBTyxJQUFQO0FBRUE7QUFFRDs7Ozs7Ozs7Ozs7Ozs7c0JBS00sS0FBS1IsTUFBTCxDQUFZRyxNQUFaLEdBQXFCLEM7Ozs7O0FBQUkscUJBQUtILE1BQUwsQ0FBWUksR0FBWjs7Ozs7O3VCQUNuQixLQUFLTCxRQUFMLEU7Ozs7Ozs7Ozs7Ozs7O0FBSVo7Ozs7Ozs7Ozs7O2dEQUtpQlcsQzs7Ozs7c0JBRVJBLENBQUMsS0FBSyxDOzs7Ozs7dUJBQVUsS0FBS0MsSUFBTCxFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVPRiBmcm9tICcuL0VPRicgO1xuXG4vKipcbiAqIENsYXNzIHRoYXQgd3JhcHMgYSBjYWxsYWJsZSB3aXRoIGEgdGFwZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFwZUZyb21DYWxsYWJsZSB7XG5cblx0LyoqXG5cdCAqIFRoZSBjb25zdHJ1Y3Rvci4gU3RvcmVzIHRoZSBjYWxsYWJsZSB0aGF0IHlpZWxkcyB2YWx1ZXMgdG8gdGFwZS5cblx0ICpcblx0ICogQHBhcmFtIHtDYWxsYWJsZX0gY2FsbGFibGUgLSBUaGUgY2FsbGFibGUgdG8gdXNlLlxuXHQgKiBAcmV0dXJucyB7VGFwZUZyb21DYWxsYWJsZX1cblx0ICpcblx0ICovXG5cdGNvbnN0cnVjdG9yICggY2FsbGFibGUgKSB7XG5cdFx0dGhpcy5jYWxsYWJsZSA9IGNhbGxhYmxlIDtcblx0XHR0aGlzLmJ1ZmZlciA9IFsgXSA7XG5cdFx0dGhpcy5lb2YgPSBFT0YgO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIG5leHQgdG9rZW4gb24gdGhlIHRhcGUgb3Ige0BsaW5rIFRhcGVGcm9tQ2FsbGFibGUjZW9mfVxuXHQgKiBpZiB0aGUgdGFwZSBoYXMgYmVlbiBleGhhdXN0ZWQuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9XG5cdCAqL1xuXHRhc3luYyByZWFkICggKSB7XG5cblx0XHRpZiAoIHRoaXMuYnVmZmVyLmxlbmd0aCA+IDAgKSByZXR1cm4gdGhpcy5idWZmZXIucG9wKCApIDtcblxuXHRcdGNvbnN0IHN0YXRlID0gYXdhaXQgdGhpcy5jYWxsYWJsZSggKSA7XG5cblx0XHRpZiAoIHN0YXRlLmRvbmUgKSByZXR1cm4gdGhpcy5lb2YgO1xuXG5cdFx0cmV0dXJuIHN0YXRlLnZhbHVlIDtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFB1dHMgYSB0b2tlbiBiYWNrIG9uIHRoZSB0YXBlLiBJZiB7QGxpbmsgVGFwZUZyb21DYWxsYWJsZSNyZWFkfSBpc1xuXHQgKiB1c2VkIGp1c3QgYWZ0ZXIsIHRoaXMgdG9rZW4gd2lsbCBiZSByZXR1cm5lZC5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IHRva2VuIC0gVGhlIHRva2VuIHRvIHB1dCBiYWNrIG9uIHRoZSB0YXBlLlxuXHQgKiBAcmV0dXJucyB7VGFwZUZyb21DYWxsYWJsZX0gU2VsZiwgZm9yIGNoYWluaW5nLlxuXHQgKi9cblx0dW5yZWFkICggdG9rZW4gKSB7XG5cblx0XHQvLyBzaG91bGQgdGhpcyBiZSBhc3luYyB0b28gP1xuXHRcdHRoaXMuYnVmZmVyLnB1c2goIHRva2VuICkgO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTa2lwcyB0aGUgbmV4dCB0b2tlbiBvbiB0aGUgdGFwZS5cblx0ICovXG5cdGFzeW5jIHNraXAgKCApIHtcblxuXHRcdGlmICggdGhpcy5idWZmZXIubGVuZ3RoID4gMCApIHRoaXMuYnVmZmVyLnBvcCggKSA7XG5cdFx0ZWxzZSBhd2FpdCB0aGlzLmNhbGxhYmxlKCApIDtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNraXAgdGhlIG5leHQgYG5gIHRva2VucyBvbiB0aGUgdGFwZS5cblx0ICpcblx0ICogQHBhcmFtIHtOdW1iZXJ9IG4gLSBUaGUgbnVtYmVyIG9mIHRva2VucyB0byBza2lwLlxuXHQgKi9cblx0YXN5bmMgc2tpcE1hbnkgKCBuICkge1xuXG5cdFx0d2hpbGUgKCBuIC0tPiAwICkgYXdhaXQgdGhpcy5za2lwKCkgO1xuXG5cdH1cblxufVxuIl19