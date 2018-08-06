"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = asyncIterableToArray;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _asyncIterator(iterable) { var method; if (typeof Symbol === "function") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

function asyncIterableToArray(_x) {
  return _asyncIterableToArray.apply(this, arguments);
}

function _asyncIterableToArray() {
  _asyncIterableToArray = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(asyncIterable) {
    var array, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, item;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            array = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 3;
            _iterator = _asyncIterator(asyncIterable);

          case 5:
            _context.next = 7;
            return _iterator.next();

          case 7:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 11;
            return _step.value;

          case 11:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 18;
              break;
            }

            item = _value;
            array.push(item);

          case 15:
            _iteratorNormalCompletion = true;
            _context.next = 5;
            break;

          case 18:
            _context.next = 24;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](3);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 24:
            _context.prev = 24;
            _context.prev = 25;

            if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
              _context.next = 29;
              break;
            }

            _context.next = 29;
            return _iterator.return();

          case 29:
            _context.prev = 29;

            if (!_didIteratorError) {
              _context.next = 32;
              break;
            }

            throw _iteratorError;

          case 32:
            return _context.finish(29);

          case 33:
            return _context.finish(24);

          case 34:
            return _context.abrupt("return", array);

          case 35:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 20, 24, 34], [25,, 29, 33]]);
  }));
  return _asyncIterableToArray.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hc3luY0l0ZXJhYmxlVG9BcnJheS5qcyJdLCJuYW1lcyI6WyJhc3luY0l0ZXJhYmxlVG9BcnJheSIsImFzeW5jSXRlcmFibGUiLCJhcnJheSIsIml0ZW0iLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1NBQThCQSxvQjs7Ozs7OzswQkFBZixpQkFBc0NDLGFBQXRDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUkMsWUFBQUEsS0FEUSxHQUNBLEVBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FFV0QsYUFGWDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVHRSxZQUFBQSxJQUZIO0FBRTBCRCxZQUFBQSxLQUFLLENBQUNFLElBQU4sQ0FBV0QsSUFBWDs7QUFGMUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQSw2Q0FHUEQsS0FITzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYXN5bmNJdGVyYWJsZVRvQXJyYXkgKCBhc3luY0l0ZXJhYmxlICkge1xuXHRjb25zdCBhcnJheSA9IFsgXSA7XG5cdGZvciBhd2FpdCAoY29uc3QgaXRlbSBvZiBhc3luY0l0ZXJhYmxlKSBhcnJheS5wdXNoKGl0ZW0pIDtcblx0cmV0dXJuIGFycmF5IDtcbn1cbiJdfQ==