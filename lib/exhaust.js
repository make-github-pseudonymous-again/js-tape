"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exhaust;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Exhausts a tape.
 * @param {Tape} tape - The tape to read from.
 */
function exhaust(_x) {
  return _exhaust.apply(this, arguments);
}

function _exhaust() {
  _exhaust = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(tape) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return tape.read();

          case 2:
            _context.t0 = _context.sent;
            _context.t1 = tape.eof;

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
    }, _callee);
  }));
  return _exhaust.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGhhdXN0LmpzIl0sIm5hbWVzIjpbImV4aGF1c3QiLCJ0YXBlIiwicmVhZCIsImVvZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztTQUk4QkEsTzs7Ozs7OzswQkFBZixpQkFBdUJDLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNBQSxJQUFJLENBQUNDLElBQUwsRUFEQTs7QUFBQTtBQUFBO0FBQUEsMEJBQ2lCRCxJQUFJLENBQUNFLEdBRHRCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUMwQjtBQUQxQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEV4aGF1c3RzIGEgdGFwZS5cbiAqIEBwYXJhbSB7VGFwZX0gdGFwZSAtIFRoZSB0YXBlIHRvIHJlYWQgZnJvbS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZXhoYXVzdCh0YXBlKSB7XG5cdHdoaWxlICgoYXdhaXQgdGFwZS5yZWFkKCkpICE9PSB0YXBlLmVvZik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxufVxuIl19