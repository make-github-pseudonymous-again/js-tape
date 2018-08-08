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
   * Returns the next token in the tape or {@link TapeFromCallable#eof}
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
     * Puts a token back in the tape. If {@link TapeFromCallable#read} is
     * used just after, this token will be returned.
     *
     * @param {Object} token - The token to put back in the tape.
     */

  }, {
    key: "unread",
    value: function unread(token) {
      // should this be async too ?
      this.buffer.push(token);
    }
  }]);

  return TapeFromCallable;
}();

exports.default = TapeFromCallable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UYXBlRnJvbUNhbGxhYmxlLmpzIl0sIm5hbWVzIjpbIlRhcGVGcm9tQ2FsbGFibGUiLCJjYWxsYWJsZSIsImJ1ZmZlciIsImVvZiIsIkVPRiIsImxlbmd0aCIsInBvcCIsInN0YXRlIiwiZG9uZSIsInZhbHVlIiwidG9rZW4iLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdxQkEsZ0I7OztBQUVwQjs7Ozs7OztBQU9BLDRCQUFjQyxRQUFkLEVBQXlCO0FBQUE7O0FBQ3hCLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVdDLFlBQVg7QUFDQTtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQVFNLEtBQUtGLE1BQUwsQ0FBWUcsTUFBWixHQUFxQixDOzs7OztpREFBVyxLQUFLSCxNQUFMLENBQVlJLEdBQVosRTs7Ozt1QkFFakIsS0FBS0wsUUFBTCxFOzs7QUFBZE0sZ0JBQUFBLEs7O3FCQUVEQSxLQUFLLENBQUNDLEk7Ozs7O2lEQUFjLEtBQUtMLEc7OztpREFFdkJJLEtBQUssQ0FBQ0UsSzs7Ozs7Ozs7Ozs7Ozs7QUFJZDs7Ozs7Ozs7OzJCQU1TQyxLLEVBQVE7QUFFaEI7QUFDQSxXQUFLUixNQUFMLENBQVlTLElBQVosQ0FBa0JELEtBQWxCO0FBRUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRU9GIGZyb20gJy4vRU9GJyA7XG5cbi8qKlxuICogQ2xhc3MgdGhhdCB3cmFwcyBhIGNhbGxhYmxlIHdpdGggYSB0YXBlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXBlRnJvbUNhbGxhYmxlIHtcblxuXHQvKipcblx0ICogVGhlIGNvbnN0cnVjdG9yLiBTdG9yZXMgdGhlIGNhbGxhYmxlIHRoYXQgeWllbGRzIHZhbHVlcyB0byB0YXBlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0NhbGxhYmxlfSBjYWxsYWJsZSAtIFRoZSBjYWxsYWJsZSB0byB1c2UuXG5cdCAqIEByZXR1cm5zIHtUYXBlRnJvbUNhbGxhYmxlfVxuXHQgKlxuXHQgKi9cblx0Y29uc3RydWN0b3IgKCBjYWxsYWJsZSApIHtcblx0XHR0aGlzLmNhbGxhYmxlID0gY2FsbGFibGUgO1xuXHRcdHRoaXMuYnVmZmVyID0gWyBdIDtcblx0XHR0aGlzLmVvZiA9IEVPRiA7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgbmV4dCB0b2tlbiBpbiB0aGUgdGFwZSBvciB7QGxpbmsgVGFwZUZyb21DYWxsYWJsZSNlb2Z9XG5cdCAqIGlmIHRoZSB0YXBlIGhhcyBiZWVuIGV4aGF1c3RlZC5cblx0ICpcblx0ICogQHJldHVybnMge09iamVjdH1cblx0ICovXG5cdGFzeW5jIHJlYWQgKCApIHtcblxuXHRcdGlmICggdGhpcy5idWZmZXIubGVuZ3RoID4gMCApIHJldHVybiB0aGlzLmJ1ZmZlci5wb3AoICkgO1xuXG5cdFx0Y29uc3Qgc3RhdGUgPSBhd2FpdCB0aGlzLmNhbGxhYmxlKCApIDtcblxuXHRcdGlmICggc3RhdGUuZG9uZSApIHJldHVybiB0aGlzLmVvZiA7XG5cblx0XHRyZXR1cm4gc3RhdGUudmFsdWUgO1xuXG5cdH1cblxuXHQvKipcblx0ICogUHV0cyBhIHRva2VuIGJhY2sgaW4gdGhlIHRhcGUuIElmIHtAbGluayBUYXBlRnJvbUNhbGxhYmxlI3JlYWR9IGlzXG5cdCAqIHVzZWQganVzdCBhZnRlciwgdGhpcyB0b2tlbiB3aWxsIGJlIHJldHVybmVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gdG9rZW4gLSBUaGUgdG9rZW4gdG8gcHV0IGJhY2sgaW4gdGhlIHRhcGUuXG5cdCAqL1xuXHR1bnJlYWQgKCB0b2tlbiApIHtcblxuXHRcdC8vIHNob3VsZCB0aGlzIGJlIGFzeW5jIHRvbyA/XG5cdFx0dGhpcy5idWZmZXIucHVzaCggdG9rZW4gKSA7XG5cblx0fVxuXG59XG4iXX0=