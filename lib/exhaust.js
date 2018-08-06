"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exhaust;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Exhausts a stream.
 * @param {Stream} stream the stream to read from
 */
function exhaust(_x) {
  return _exhaust.apply(this, arguments);
}

function _exhaust() {
  _exhaust = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(stream) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return stream.read();

          case 2:
            _context.t0 = _context.sent;
            _context.t1 = stream.eof;

            if (!(_context.t0 !== _context.t1)) {
              _context.next = 8;
              break;
            }

            ;
            _context.next = 0;
            break;

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _exhaust.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGhhdXN0LmpzIl0sIm5hbWVzIjpbImV4aGF1c3QiLCJzdHJlYW0iLCJyZWFkIiwiZW9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O1NBSThCQSxPOzs7Ozs7OzBCQUFmLGlCQUF5QkMsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRUFBLE1BQU0sQ0FBQ0MsSUFBUCxFQUZBOztBQUFBO0FBQUE7QUFBQSwwQkFFbUJELE1BQU0sQ0FBQ0UsR0FGMUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRWdDO0FBRmhDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRXhoYXVzdHMgYSBzdHJlYW0uXG4gKiBAcGFyYW0ge1N0cmVhbX0gc3RyZWFtIHRoZSBzdHJlYW0gdG8gcmVhZCBmcm9tXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGV4aGF1c3QgKCBzdHJlYW0gKSB7XG5cblx0d2hpbGUgKCBhd2FpdCBzdHJlYW0ucmVhZCggKSAhPT0gc3RyZWFtLmVvZiApIDtcblxufVxuIl19