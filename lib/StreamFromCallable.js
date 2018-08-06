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
 * Class that wraps a callable with a stream.
 */
var StreamFromCallable =
/*#__PURE__*/
function () {
  /**
   * The constructor. Stores the callable that yields values to stream.
   *
   * @param {Callable} callable - The callable to use.
   * @returns {StreamFromCallable}
   *
   */
  function StreamFromCallable(callable) {
    _classCallCheck(this, StreamFromCallable);

    this.callable = callable;
    this.buffer = [];
    this.eof = _EOF.default;
  }
  /**
   * Returns the next token in the stream or {@link StreamFromCallable#eof}
   * if the stream has been exhausted.
   *
   * @returns {Object}
   */


  _createClass(StreamFromCallable, [{
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
     * Puts a token back in the stream. If {@link StreamFromCallable#read} is
     * used just after, this token will be returned.
     *
     * @param {Object} token - The token to put back in the stream.
     */

  }, {
    key: "unread",
    value: function unread(token) {
      // should this be async too ?
      this.buffer.push(token);
    }
  }]);

  return StreamFromCallable;
}();

exports.default = StreamFromCallable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TdHJlYW1Gcm9tQ2FsbGFibGUuanMiXSwibmFtZXMiOlsiU3RyZWFtRnJvbUNhbGxhYmxlIiwiY2FsbGFibGUiLCJidWZmZXIiLCJlb2YiLCJFT0YiLCJsZW5ndGgiLCJwb3AiLCJzdGF0ZSIsImRvbmUiLCJ2YWx1ZSIsInRva2VuIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHcUJBLGtCOzs7QUFFcEI7Ozs7Ozs7QUFPQSw4QkFBY0MsUUFBZCxFQUF5QjtBQUFBOztBQUN4QixTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQyxZQUFYO0FBQ0E7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkFRTSxLQUFLRixNQUFMLENBQVlHLE1BQVosR0FBcUIsQzs7Ozs7aURBQVcsS0FBS0gsTUFBTCxDQUFZSSxHQUFaLEU7Ozs7dUJBRWpCLEtBQUtMLFFBQUwsRTs7O0FBQWRNLGdCQUFBQSxLOztxQkFFREEsS0FBSyxDQUFDQyxJOzs7OztpREFBYyxLQUFLTCxHOzs7aURBRXZCSSxLQUFLLENBQUNFLEs7Ozs7Ozs7Ozs7Ozs7O0FBSWQ7Ozs7Ozs7OzsyQkFNU0MsSyxFQUFRO0FBRWhCO0FBQ0EsV0FBS1IsTUFBTCxDQUFZUyxJQUFaLENBQWtCRCxLQUFsQjtBQUVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVPRiBmcm9tICcuL0VPRicgO1xuXG4vKipcbiAqIENsYXNzIHRoYXQgd3JhcHMgYSBjYWxsYWJsZSB3aXRoIGEgc3RyZWFtLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJlYW1Gcm9tQ2FsbGFibGUge1xuXG5cdC8qKlxuXHQgKiBUaGUgY29uc3RydWN0b3IuIFN0b3JlcyB0aGUgY2FsbGFibGUgdGhhdCB5aWVsZHMgdmFsdWVzIHRvIHN0cmVhbS5cblx0ICpcblx0ICogQHBhcmFtIHtDYWxsYWJsZX0gY2FsbGFibGUgLSBUaGUgY2FsbGFibGUgdG8gdXNlLlxuXHQgKiBAcmV0dXJucyB7U3RyZWFtRnJvbUNhbGxhYmxlfVxuXHQgKlxuXHQgKi9cblx0Y29uc3RydWN0b3IgKCBjYWxsYWJsZSApIHtcblx0XHR0aGlzLmNhbGxhYmxlID0gY2FsbGFibGUgO1xuXHRcdHRoaXMuYnVmZmVyID0gWyBdIDtcblx0XHR0aGlzLmVvZiA9IEVPRiA7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgbmV4dCB0b2tlbiBpbiB0aGUgc3RyZWFtIG9yIHtAbGluayBTdHJlYW1Gcm9tQ2FsbGFibGUjZW9mfVxuXHQgKiBpZiB0aGUgc3RyZWFtIGhhcyBiZWVuIGV4aGF1c3RlZC5cblx0ICpcblx0ICogQHJldHVybnMge09iamVjdH1cblx0ICovXG5cdGFzeW5jIHJlYWQgKCApIHtcblxuXHRcdGlmICggdGhpcy5idWZmZXIubGVuZ3RoID4gMCApIHJldHVybiB0aGlzLmJ1ZmZlci5wb3AoICkgO1xuXG5cdFx0Y29uc3Qgc3RhdGUgPSBhd2FpdCB0aGlzLmNhbGxhYmxlKCApIDtcblxuXHRcdGlmICggc3RhdGUuZG9uZSApIHJldHVybiB0aGlzLmVvZiA7XG5cblx0XHRyZXR1cm4gc3RhdGUudmFsdWUgO1xuXG5cdH1cblxuXHQvKipcblx0ICogUHV0cyBhIHRva2VuIGJhY2sgaW4gdGhlIHN0cmVhbS4gSWYge0BsaW5rIFN0cmVhbUZyb21DYWxsYWJsZSNyZWFkfSBpc1xuXHQgKiB1c2VkIGp1c3QgYWZ0ZXIsIHRoaXMgdG9rZW4gd2lsbCBiZSByZXR1cm5lZC5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IHRva2VuIC0gVGhlIHRva2VuIHRvIHB1dCBiYWNrIGluIHRoZSBzdHJlYW0uXG5cdCAqL1xuXHR1bnJlYWQgKCB0b2tlbiApIHtcblxuXHRcdC8vIHNob3VsZCB0aGlzIGJlIGFzeW5jIHRvbyA/XG5cdFx0dGhpcy5idWZmZXIucHVzaCggdG9rZW4gKSA7XG5cblx0fVxuXG59XG4iXX0=