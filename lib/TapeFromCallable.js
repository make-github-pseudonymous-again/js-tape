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
 * Do not use directly. Use {@link fromCallable} instead.
 */
var TapeFromCallable =
/*#__PURE__*/
function () {
  /**
   * The constructor. Stores the callable that yields values to put on the tape.
   *
   * @param {Callable} callable - The callable to use.
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
  }]);

  return TapeFromCallable;
}();

exports.default = TapeFromCallable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UYXBlRnJvbUNhbGxhYmxlLmpzIl0sIm5hbWVzIjpbIlRhcGVGcm9tQ2FsbGFibGUiLCJjYWxsYWJsZSIsImJ1ZmZlciIsImVvZiIsIkVPRiIsImxlbmd0aCIsInBvcCIsInN0YXRlIiwiZG9uZSIsInZhbHVlIiwidG9rZW4iLCJwdXNoIiwibiIsInNraXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7OztJQUlxQkEsZ0I7OztBQUVwQjs7Ozs7QUFLQSw0QkFBY0MsUUFBZCxFQUF5QjtBQUFBOztBQUN4QixTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQyxZQUFYO0FBQ0E7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkFRTSxLQUFLRixNQUFMLENBQVlHLE1BQVosR0FBcUIsQzs7Ozs7aURBQVcsS0FBS0gsTUFBTCxDQUFZSSxHQUFaLEU7Ozs7dUJBRWpCLEtBQUtMLFFBQUwsRTs7O0FBQWRNLGdCQUFBQSxLOztxQkFFREEsS0FBSyxDQUFDQyxJOzs7OztpREFBYyxLQUFLTCxHOzs7aURBRXZCSSxLQUFLLENBQUNFLEs7Ozs7Ozs7Ozs7Ozs7O0FBSWQ7Ozs7Ozs7OzsyQkFNU0MsSyxFQUFRO0FBRWhCO0FBQ0EsV0FBS1IsTUFBTCxDQUFZUyxJQUFaLENBQWtCRCxLQUFsQjtBQUVBO0FBRUQ7Ozs7Ozs7Ozs7Ozs7O3NCQUtNLEtBQUtSLE1BQUwsQ0FBWUcsTUFBWixHQUFxQixDOzs7OztBQUFJLHFCQUFLSCxNQUFMLENBQVlJLEdBQVo7Ozs7Ozt1QkFDbkIsS0FBS0wsUUFBTCxFOzs7Ozs7Ozs7Ozs7OztBQUlaOzs7Ozs7Ozs7OztnREFLaUJXLEM7Ozs7O3NCQUVSQSxDQUFDLEtBQUssQzs7Ozs7O3VCQUFVLEtBQUtDLElBQUwsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFT0YgZnJvbSAnLi9FT0YnIDtcblxuLyoqXG4gKiBDbGFzcyB0aGF0IHdyYXBzIGEgY2FsbGFibGUgd2l0aCBhIHRhcGUuXG4gKiBEbyBub3QgdXNlIGRpcmVjdGx5LiBVc2Uge0BsaW5rIGZyb21DYWxsYWJsZX0gaW5zdGVhZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFwZUZyb21DYWxsYWJsZSB7XG5cblx0LyoqXG5cdCAqIFRoZSBjb25zdHJ1Y3Rvci4gU3RvcmVzIHRoZSBjYWxsYWJsZSB0aGF0IHlpZWxkcyB2YWx1ZXMgdG8gcHV0IG9uIHRoZSB0YXBlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0NhbGxhYmxlfSBjYWxsYWJsZSAtIFRoZSBjYWxsYWJsZSB0byB1c2UuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciAoIGNhbGxhYmxlICkge1xuXHRcdHRoaXMuY2FsbGFibGUgPSBjYWxsYWJsZSA7XG5cdFx0dGhpcy5idWZmZXIgPSBbIF0gO1xuXHRcdHRoaXMuZW9mID0gRU9GIDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBuZXh0IHRva2VuIG9uIHRoZSB0YXBlIG9yIHtAbGluayBUYXBlRnJvbUNhbGxhYmxlI2VvZn1cblx0ICogaWYgdGhlIHRhcGUgaGFzIGJlZW4gZXhoYXVzdGVkLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fVxuXHQgKi9cblx0YXN5bmMgcmVhZCAoICkge1xuXG5cdFx0aWYgKCB0aGlzLmJ1ZmZlci5sZW5ndGggPiAwICkgcmV0dXJuIHRoaXMuYnVmZmVyLnBvcCggKSA7XG5cblx0XHRjb25zdCBzdGF0ZSA9IGF3YWl0IHRoaXMuY2FsbGFibGUoICkgO1xuXG5cdFx0aWYgKCBzdGF0ZS5kb25lICkgcmV0dXJuIHRoaXMuZW9mIDtcblxuXHRcdHJldHVybiBzdGF0ZS52YWx1ZSA7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBQdXRzIGEgdG9rZW4gYmFjayBvbiB0aGUgdGFwZS4gSWYge0BsaW5rIFRhcGVGcm9tQ2FsbGFibGUjcmVhZH0gaXNcblx0ICogdXNlZCBqdXN0IGFmdGVyLCB0aGlzIHRva2VuIHdpbGwgYmUgcmV0dXJuZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB0b2tlbiAtIFRoZSB0b2tlbiB0byBwdXQgYmFjayBvbiB0aGUgdGFwZS5cblx0ICovXG5cdHVucmVhZCAoIHRva2VuICkge1xuXG5cdFx0Ly8gc2hvdWxkIHRoaXMgYmUgYXN5bmMgdG9vID9cblx0XHR0aGlzLmJ1ZmZlci5wdXNoKCB0b2tlbiApIDtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNraXBzIHRoZSBuZXh0IHRva2VuIG9uIHRoZSB0YXBlLlxuXHQgKi9cblx0YXN5bmMgc2tpcCAoICkge1xuXG5cdFx0aWYgKCB0aGlzLmJ1ZmZlci5sZW5ndGggPiAwICkgdGhpcy5idWZmZXIucG9wKCApIDtcblx0XHRlbHNlIGF3YWl0IHRoaXMuY2FsbGFibGUoICkgO1xuXG5cdH1cblxuXHQvKipcblx0ICogU2tpcCB0aGUgbmV4dCBgbmAgdG9rZW5zIG9uIHRoZSB0YXBlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge051bWJlcn0gbiAtIFRoZSBudW1iZXIgb2YgdG9rZW5zIHRvIHNraXAuXG5cdCAqL1xuXHRhc3luYyBza2lwTWFueSAoIG4gKSB7XG5cblx0XHR3aGlsZSAoIG4gLS0+IDAgKSBhd2FpdCB0aGlzLnNraXAoKSA7XG5cblx0fVxuXG59XG4iXX0=