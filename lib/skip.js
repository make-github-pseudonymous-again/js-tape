"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = skip;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Outputs the next token of a tape that is not contained in a given toskip
 * set.
 *
 * @private
 * @param {Tape} tape - The input tape.
 * @param {Iterable} toskip - The (hashable) tokens to skip.
 * @returns {Object} The next token not in `toskip`.
 */
function skip(_x, _x2) {
  return _skip.apply(this, arguments);
}

function _skip() {
  _skip = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(tape, toskip) {
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
            return tape.read();

          case 4:
            token = _context.sent;

            if (!(token === tape.eof)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", tape.eof);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9za2lwLmpzIl0sIm5hbWVzIjpbInNraXAiLCJ0YXBlIiwidG9za2lwIiwiX3Rvc2tpcCIsIlNldCIsInJlYWQiLCJ0b2tlbiIsImVvZiIsImhhcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7O1NBUzhCQSxJOzs7Ozs7OzBCQUFmLGlCQUFzQkMsSUFBdEIsRUFBNkJDLE1BQTdCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUkMsWUFBQUEsT0FGUSxHQUVFLElBQUlDLEdBQUosQ0FBU0YsTUFBVCxDQUZGOztBQUFBO0FBQUEsaUJBSU4sSUFKTTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQU1PRCxJQUFJLENBQUNJLElBQUwsRUFOUDs7QUFBQTtBQU1QQyxZQUFBQSxLQU5POztBQUFBLGtCQVFSQSxLQUFLLEtBQUtMLElBQUksQ0FBQ00sR0FSUDtBQUFBO0FBQUE7QUFBQTs7QUFBQSw2Q0FRb0JOLElBQUksQ0FBQ00sR0FSekI7O0FBQUE7QUFBQSxpQkFVUkosT0FBTyxDQUFDSyxHQUFSLENBQWFGLEtBQWIsQ0FWUTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBLDZDQVlOQSxLQVpNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogT3V0cHV0cyB0aGUgbmV4dCB0b2tlbiBvZiBhIHRhcGUgdGhhdCBpcyBub3QgY29udGFpbmVkIGluIGEgZ2l2ZW4gdG9za2lwXG4gKiBzZXQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7VGFwZX0gdGFwZSAtIFRoZSBpbnB1dCB0YXBlLlxuICogQHBhcmFtIHtJdGVyYWJsZX0gdG9za2lwIC0gVGhlIChoYXNoYWJsZSkgdG9rZW5zIHRvIHNraXAuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgbmV4dCB0b2tlbiBub3QgaW4gYHRvc2tpcGAuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNraXAgKCB0YXBlICwgdG9za2lwICkge1xuXG5cdGNvbnN0IF90b3NraXAgPSBuZXcgU2V0KCB0b3NraXAgKSA7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0Y29uc3QgdG9rZW4gPSBhd2FpdCB0YXBlLnJlYWQoICkgO1xuXG5cdFx0aWYgKCB0b2tlbiA9PT0gdGFwZS5lb2YgKSByZXR1cm4gdGFwZS5lb2YgO1xuXG5cdFx0aWYgKCBfdG9za2lwLmhhcyggdG9rZW4gKSApIGNvbnRpbnVlIDtcblxuXHRcdHJldHVybiB0b2tlbiA7XG5cblx0fVxuXG59XG4iXX0=