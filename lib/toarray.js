"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toiterable = _interopRequireDefault(require("./toiterable"));

var _asyncIterableToArray = _interopRequireDefault(require("./asyncIterableToArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Converts a stream to an array.
 * @kind function
 * @param {Stream} stream the stream to read from
 */
var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(stream) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _asyncIterableToArray.default)((0, _toiterable.default)(stream)));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b2FycmF5LmpzIl0sIm5hbWVzIjpbInN0cmVhbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztBQUVBOzs7Ozs7Ozs7OzBCQUtlLGlCQUFNQSxNQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FBZ0IsbUNBQXNCLHlCQUFZQSxNQUFaLENBQXRCLENBQWhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9pdGVyYWJsZSBmcm9tICcuL3RvaXRlcmFibGUnIDtcbmltcG9ydCBhc3luY0l0ZXJhYmxlVG9BcnJheSBmcm9tICcuL2FzeW5jSXRlcmFibGVUb0FycmF5JyA7XG5cbi8qKlxuICogQ29udmVydHMgYSBzdHJlYW0gdG8gYW4gYXJyYXkuXG4gKiBAa2luZCBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJlYW19IHN0cmVhbSB0aGUgc3RyZWFtIHRvIHJlYWQgZnJvbVxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBzdHJlYW0gPT4gYXN5bmNJdGVyYWJsZVRvQXJyYXkoIHRvaXRlcmFibGUoIHN0cmVhbSApICkgO1xuIl19