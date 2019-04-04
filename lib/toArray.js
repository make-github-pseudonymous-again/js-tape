"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toAsyncIterable = _interopRequireDefault(require("./toAsyncIterable"));

var _asyncIterableToArray = _interopRequireDefault(require("./asyncIterableToArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Converts a tape to an array.
 *
 * @function
 * @param {Tape} tape - The tape to read from.
 * @returns {Array} The converted array.
 */
var _default = function _default(tape) {
  return (0, _asyncIterableToArray["default"])((0, _toAsyncIterable["default"])(tape));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b0FycmF5LmpzIl0sIm5hbWVzIjpbInRhcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBOzs7Ozs7O2VBT2Usa0JBQUFBLElBQUk7QUFBQSxTQUFJLHNDQUFxQixpQ0FBZ0JBLElBQWhCLENBQXJCLENBQUo7QUFBQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvQXN5bmNJdGVyYWJsZSBmcm9tICcuL3RvQXN5bmNJdGVyYWJsZSc7XG5pbXBvcnQgYXN5bmNJdGVyYWJsZVRvQXJyYXkgZnJvbSAnLi9hc3luY0l0ZXJhYmxlVG9BcnJheSc7XG5cbi8qKlxuICogQ29udmVydHMgYSB0YXBlIHRvIGFuIGFycmF5LlxuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtUYXBlfSB0YXBlIC0gVGhlIHRhcGUgdG8gcmVhZCBmcm9tLlxuICogQHJldHVybnMge0FycmF5fSBUaGUgY29udmVydGVkIGFycmF5LlxuICovXG5leHBvcnQgZGVmYXVsdCB0YXBlID0+IGFzeW5jSXRlcmFibGVUb0FycmF5KHRvQXN5bmNJdGVyYWJsZSh0YXBlKSk7XG4iXX0=