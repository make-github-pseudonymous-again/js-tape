"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toArray = _interopRequireDefault(require("./toArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Converts a tape to a string.
 *
 * @function
 * @param {Tape} tape - The tape to read from.
 * @returns {String} The converted string.
 */
var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(tape) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _toArray.default)(tape);

          case 2:
            return _context.abrupt("return", _context.sent.join(''));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b1N0cmluZy5qcyJdLCJuYW1lcyI6WyJ0YXBlIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7MEJBT2UsaUJBQU1BLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXFCLHNCQUFRQSxJQUFSLENBQXJCOztBQUFBO0FBQUEsMkRBQW9DQyxJQUFwQyxDQUF5QyxFQUF6Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvQXJyYXkgZnJvbSAnLi90b0FycmF5JztcblxuLyoqXG4gKiBDb252ZXJ0cyBhIHRhcGUgdG8gYSBzdHJpbmcuXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1RhcGV9IHRhcGUgLSBUaGUgdGFwZSB0byByZWFkIGZyb20uXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgdGFwZSA9PiAoYXdhaXQgdG9BcnJheSh0YXBlKSkuam9pbignJyk7XG4iXX0=