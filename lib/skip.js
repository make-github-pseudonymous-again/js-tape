"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = skip;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Outputs the next token of a stream that is not contained in a given toskip
 * set.
 * @param {Stream} stream
 * @param {Iterable} toskip
 */
function skip(_x, _x2) {
  return _skip.apply(this, arguments);
}

function _skip() {
  _skip = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(stream, toskip) {
    var _toskip, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _toskip = new Set(toskip);

          case 1:
            if (!true) {
              _context.next = 12;
              break;
            }

            _context.next = 4;
            return stream.read();

          case 4:
            token = _context.sent;

            if (!(token === stream.eof)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", stream.eof);

          case 7:
            if (!_toskip.has(token)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("continue", 1);

          case 9:
            return _context.abrupt("return", token);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _skip.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9za2lwLmpzIl0sIm5hbWVzIjpbInNraXAiLCJzdHJlYW0iLCJ0b3NraXAiLCJfdG9za2lwIiwiU2V0IiwicmVhZCIsInRva2VuIiwiZW9mIiwiaGFzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7U0FNOEJBLEk7Ozs7Ozs7MEJBQWYsaUJBQXNCQyxNQUF0QixFQUErQkMsTUFBL0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVSQyxZQUFBQSxPQUZRLEdBRUUsSUFBSUMsR0FBSixDQUFTRixNQUFULENBRkY7O0FBQUE7QUFBQSxpQkFJTixJQUpNO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBTU9ELE1BQU0sQ0FBQ0ksSUFBUCxFQU5QOztBQUFBO0FBTVBDLFlBQUFBLEtBTk87O0FBQUEsa0JBUVJBLEtBQUssS0FBS0wsTUFBTSxDQUFDTSxHQVJUO0FBQUE7QUFBQTtBQUFBOztBQUFBLDZDQVFzQk4sTUFBTSxDQUFDTSxHQVI3Qjs7QUFBQTtBQUFBLGlCQVVSSixPQUFPLENBQUNLLEdBQVIsQ0FBYUYsS0FBYixDQVZRO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUEsNkNBWU5BLEtBWk07O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBPdXRwdXRzIHRoZSBuZXh0IHRva2VuIG9mIGEgc3RyZWFtIHRoYXQgaXMgbm90IGNvbnRhaW5lZCBpbiBhIGdpdmVuIHRvc2tpcFxuICogc2V0LlxuICogQHBhcmFtIHtTdHJlYW19IHN0cmVhbVxuICogQHBhcmFtIHtJdGVyYWJsZX0gdG9za2lwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNraXAgKCBzdHJlYW0gLCB0b3NraXAgKSB7XG5cblx0Y29uc3QgX3Rvc2tpcCA9IG5ldyBTZXQoIHRvc2tpcCApIDtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRjb25zdCB0b2tlbiA9IGF3YWl0IHN0cmVhbS5yZWFkKCApIDtcblxuXHRcdGlmICggdG9rZW4gPT09IHN0cmVhbS5lb2YgKSByZXR1cm4gc3RyZWFtLmVvZiA7XG5cblx0XHRpZiAoIF90b3NraXAuaGFzKCB0b2tlbiApICkgY29udGludWUgO1xuXG5cdFx0cmV0dXJuIHRva2VuIDtcblxuXHR9XG5cbn1cbiJdfQ==