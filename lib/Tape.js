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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UYXBlLmpzIl0sIm5hbWVzIjpbIlRhcGUiLCJjYWxsYWJsZSIsImJ1ZmZlciIsImVvZiIsIkVPRiIsImxlbmd0aCIsInBvcCIsInN0YXRlIiwiZG9uZSIsInZhbHVlIiwidG9rZW4iLCJwdXNoIiwibiIsInNraXAiLCJTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwiaXRlcmF0b3IiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBSXFCQSxJOzs7QUFFcEI7Ozs7O0FBS0EsZ0JBQWNDLFFBQWQsRUFBeUI7QUFBQTs7QUFFeEI7Ozs7QUFJQSxTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUVBOzs7OztBQUlBLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBRUE7Ozs7O0FBSUEsU0FBS0MsR0FBTCxHQUFXQyxZQUFYO0FBRUE7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkFRTSxLQUFLRixNQUFMLENBQVlHLE1BQVosR0FBcUIsQzs7Ozs7aURBQVcsS0FBS0gsTUFBTCxDQUFZSSxHQUFaLEU7Ozs7dUJBRWpCLEtBQUtMLFFBQUwsRTs7O0FBQWRNLGdCQUFBQSxLOztxQkFFREEsS0FBSyxDQUFDQyxJOzs7OztpREFBYyxLQUFLTCxHOzs7aURBRXZCSSxLQUFLLENBQUNFLEs7Ozs7Ozs7Ozs7Ozs7O0FBSWQ7Ozs7Ozs7OzsyQkFNU0MsSyxFQUFRO0FBRWhCO0FBQ0EsV0FBS1IsTUFBTCxDQUFZUyxJQUFaLENBQWtCRCxLQUFsQjtBQUVBO0FBRUQ7Ozs7Ozs7Ozs7Ozs7O3NCQUtNLEtBQUtSLE1BQUwsQ0FBWUcsTUFBWixHQUFxQixDOzs7OztBQUFJLHFCQUFLSCxNQUFMLENBQVlJLEdBQVo7Ozs7Ozt1QkFDbkIsS0FBS0wsUUFBTCxFOzs7Ozs7Ozs7Ozs7OztBQUlaOzs7Ozs7Ozs7OztnREFLaUJXLEM7Ozs7O3NCQUVSQSxDQUFDLEtBQUssQzs7Ozs7O3VCQUFVLEtBQUtDLElBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXpCOzs7Ozs7Ozs7OztTQVNDQyxNQUFNLENBQUNDLGE7NEJBQW1CO0FBRTFCLGFBQU8sOEJBQWdCLElBQWhCLENBQVA7QUFFQTtBQUVEOzs7Ozs7O1NBS0NELE1BQU0sQ0FBQ0UsUTs0QkFBYztBQUVyQixZQUFNLElBQUlDLEtBQUosQ0FBVSw2RkFBVixDQUFOO0FBRUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRU9GIGZyb20gJy4vRU9GJyA7XG5pbXBvcnQgdG9Bc3luY0l0ZXJhdG9yIGZyb20gJy4vdG9Bc3luY0l0ZXJhdG9yJyA7XG5cbi8qKlxuICogQ2xhc3MgdGhhdCB3cmFwcyBhIGNhbGxhYmxlIHdpdGggYSB0YXBlLlxuICogRG8gbm90IHVzZSBkaXJlY3RseS4gVXNlIHtAbGluayBmcm9tQ2FsbGFibGV9IGluc3RlYWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcGUge1xuXG5cdC8qKlxuXHQgKiBUaGUgY29uc3RydWN0b3IuIFN0b3JlcyB0aGUgY2FsbGFibGUgdGhhdCB5aWVsZHMgdmFsdWVzIHRvIHB1dCBvbiB0aGUgdGFwZS5cblx0ICpcblx0ICogQHBhcmFtIHtDYWxsYWJsZX0gY2FsbGFibGUgLSBUaGUgY2FsbGFibGUgdG8gdXNlLlxuXHQgKi9cblx0Y29uc3RydWN0b3IgKCBjYWxsYWJsZSApIHtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBjYWxsYWJsZSB5aWVsZGluZyB2YWx1ZXMgdG8gcHV0IG9uIHRoZSB0YXBlLlxuXHRcdCAqIEB0eXBlIHtDYWxsYWJsZX1cblx0XHQgKi9cblx0XHR0aGlzLmNhbGxhYmxlID0gY2FsbGFibGUgO1xuXG5cdFx0LyoqXG5cdFx0ICogQnVmZmVyIHVzZWQgdG8gaW1wbGVtZW50IHtAbGluayBUYXBlI3VucmVhZH0uXG5cdFx0ICogQHR5cGUge0FycmF5fVxuXHRcdCAqL1xuXHRcdHRoaXMuYnVmZmVyID0gWyBdIDtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBlb2Ygc3ltYm9sLlxuXHRcdCAqIEB0eXBlIHtTdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5lb2YgPSBFT0YgO1xuXG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgbmV4dCB0b2tlbiBvbiB0aGUgdGFwZSBvciB7QGxpbmsgVGFwZSNlb2Z9XG5cdCAqIGlmIHRoZSB0YXBlIGhhcyBiZWVuIGV4aGF1c3RlZC5cblx0ICpcblx0ICogQHJldHVybnMge09iamVjdH1cblx0ICovXG5cdGFzeW5jIHJlYWQgKCApIHtcblxuXHRcdGlmICggdGhpcy5idWZmZXIubGVuZ3RoID4gMCApIHJldHVybiB0aGlzLmJ1ZmZlci5wb3AoICkgO1xuXG5cdFx0Y29uc3Qgc3RhdGUgPSBhd2FpdCB0aGlzLmNhbGxhYmxlKCApIDtcblxuXHRcdGlmICggc3RhdGUuZG9uZSApIHJldHVybiB0aGlzLmVvZiA7XG5cblx0XHRyZXR1cm4gc3RhdGUudmFsdWUgO1xuXG5cdH1cblxuXHQvKipcblx0ICogUHV0cyBhIHRva2VuIGJhY2sgb24gdGhlIHRhcGUuIElmIHtAbGluayBUYXBlI3JlYWR9IGlzXG5cdCAqIHVzZWQganVzdCBhZnRlciwgdGhpcyB0b2tlbiB3aWxsIGJlIHJldHVybmVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gdG9rZW4gLSBUaGUgdG9rZW4gdG8gcHV0IGJhY2sgb24gdGhlIHRhcGUuXG5cdCAqL1xuXHR1bnJlYWQgKCB0b2tlbiApIHtcblxuXHRcdC8vIHNob3VsZCB0aGlzIGJlIGFzeW5jIHRvbyA/XG5cdFx0dGhpcy5idWZmZXIucHVzaCggdG9rZW4gKSA7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTa2lwcyB0aGUgbmV4dCB0b2tlbiBvbiB0aGUgdGFwZS5cblx0ICovXG5cdGFzeW5jIHNraXAgKCApIHtcblxuXHRcdGlmICggdGhpcy5idWZmZXIubGVuZ3RoID4gMCApIHRoaXMuYnVmZmVyLnBvcCggKSA7XG5cdFx0ZWxzZSBhd2FpdCB0aGlzLmNhbGxhYmxlKCApIDtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNraXAgdGhlIG5leHQgYG5gIHRva2VucyBvbiB0aGUgdGFwZS5cblx0ICpcblx0ICogQHBhcmFtIHtOdW1iZXJ9IG4gLSBUaGUgbnVtYmVyIG9mIHRva2VucyB0byBza2lwLlxuXHQgKi9cblx0YXN5bmMgc2tpcE1hbnkgKCBuICkge1xuXG5cdFx0d2hpbGUgKCBuIC0tPiAwICkgYXdhaXQgdGhpcy5za2lwKCkgO1xuXG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBhbiBhc3luYyBpdGVyYXRvciBvbiB0aGUgdG9rZW5zIG9mIHRoZSB0YXBlLlxuXHQgKlxuXHQgKiBAZXhhbXBsZVxuXHQgKiBmcm9tU3RyaW5nKCdhYmMnKTtcblx0ICogZm9yIGF3YWl0ICggY29uc3QgdG9rZW4gb2YgdGFwZSApIGNvbnNvbGUubG9nKHRva2VuKSA7XG5cdCAqXG5cdCAqIEByZXR1cm5zIHtBc3luY0l0ZXJhdG9yfVxuXHQgKi9cblx0W1N5bWJvbC5hc3luY0l0ZXJhdG9yXSAoICkge1xuXG5cdFx0cmV0dXJuIHRvQXN5bmNJdGVyYXRvcih0aGlzKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIEV4cGxpY2l0ZWx5IHRocm93cyB3aGVuIHRyeWluZyB0byBhY2Nlc3MgaXRlcmF0b3Igc3ltYm9sLlxuXHQgKlxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gQWx3YXlzLlxuXHQgKi9cblx0W1N5bWJvbC5pdGVyYXRvcl0gKCApIHtcblxuXHRcdHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkLiBBIHRhcGUgaGFzIG5vICpzeW5jaHJvbm91cyogaXRlcmF0b3IuIFVzZSBgdG9BcnJheWAgb3IgYHRvU3RyaW5nYCBpbnN0ZWFkLicpIDtcblxuXHR9XG5cbn1cbiJdfQ==