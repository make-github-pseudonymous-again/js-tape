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
            _context.next = 3;
            return tape.read();

          case 3:
            token = _context.sent;

            if (_toskip.has(token)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", token);

          case 6:
            _context.next = 1;
            break;

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _skip.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9za2lwLmpzIl0sIm5hbWVzIjpbInNraXAiLCJ0YXBlIiwidG9za2lwIiwiX3Rvc2tpcCIsIlNldCIsInJlYWQiLCJ0b2tlbiIsImhhcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O1NBUzhCQSxJOzs7Ozs7OzBCQUFmLGlCQUFvQkMsSUFBcEIsRUFBMEJDLE1BQTFCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUkMsWUFBQUEsT0FEUSxHQUNFLElBQUlDLEdBQUosQ0FBUUYsTUFBUixDQURGOztBQUFBO0FBQUE7QUFBQSxtQkFJT0QsSUFBSSxDQUFDSSxJQUFMLEVBSlA7O0FBQUE7QUFJUEMsWUFBQUEsS0FKTzs7QUFBQSxnQkFLUkgsT0FBTyxDQUFDSSxHQUFSLENBQVlELEtBQVosQ0FMUTtBQUFBO0FBQUE7QUFBQTs7QUFBQSw2Q0FLbUJBLEtBTG5COztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBPdXRwdXRzIHRoZSBuZXh0IHRva2VuIG9mIGEgdGFwZSB0aGF0IGlzIG5vdCBjb250YWluZWQgaW4gYSBnaXZlbiB0b3NraXBcbiAqIHNldC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtUYXBlfSB0YXBlIC0gVGhlIGlucHV0IHRhcGUuXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSB0b3NraXAgLSBUaGUgKGhhc2hhYmxlKSB0b2tlbnMgdG8gc2tpcC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBuZXh0IHRva2VuIG5vdCBpbiBgdG9za2lwYC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gc2tpcCh0YXBlLCB0b3NraXApIHtcblx0Y29uc3QgX3Rvc2tpcCA9IG5ldyBTZXQodG9za2lwKTtcblxuXHRmb3IgKDs7KSB7XG5cdFx0Y29uc3QgdG9rZW4gPSBhd2FpdCB0YXBlLnJlYWQoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1hd2FpdC1pbi1sb29wXG5cdFx0aWYgKCFfdG9za2lwLmhhcyh0b2tlbikpIHJldHVybiB0b2tlbjtcblx0fVxufVxuIl19