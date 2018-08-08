"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toAsyncIterable = _interopRequireDefault(require("./toAsyncIterable"));

var _asyncIterableToArray = _interopRequireDefault(require("./asyncIterableToArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Converts a tape to an array.
 * @kind function
 * @param {Tape} tape the tape to read from
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
            return _context.abrupt("return", (0, _asyncIterableToArray.default)((0, _toAsyncIterable.default)(tape)));

          case 1:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b0FycmF5LmpzIl0sIm5hbWVzIjpbInRhcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7OzswQkFLZSxpQkFBTUEsSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBQWMsbUNBQXNCLDhCQUFpQkEsSUFBakIsQ0FBdEIsQ0FBZDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvQXN5bmNJdGVyYWJsZSBmcm9tICcuL3RvQXN5bmNJdGVyYWJsZScgO1xuaW1wb3J0IGFzeW5jSXRlcmFibGVUb0FycmF5IGZyb20gJy4vYXN5bmNJdGVyYWJsZVRvQXJyYXknIDtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIHRhcGUgdG8gYW4gYXJyYXkuXG4gKiBAa2luZCBmdW5jdGlvblxuICogQHBhcmFtIHtUYXBlfSB0YXBlIHRoZSB0YXBlIHRvIHJlYWQgZnJvbVxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyB0YXBlID0+IGFzeW5jSXRlcmFibGVUb0FycmF5KCB0b0FzeW5jSXRlcmFibGUoIHRhcGUgKSApIDtcbiJdfQ==