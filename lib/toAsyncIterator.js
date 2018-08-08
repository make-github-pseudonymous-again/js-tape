"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toAsyncIterable = _interopRequireDefault(require("./toAsyncIterable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts a tape to an async iterator.
 *
 * @function
 * @param {Tape} tape - the tape to read from
 * @returns {AsyncIterator}
 */
var _default = function _default(tape) {
  return (0, _toAsyncIterable.default)(tape)[Symbol.asyncIterator]();
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b0FzeW5jSXRlcmF0b3IuanMiXSwibmFtZXMiOlsidGFwZSIsIlN5bWJvbCIsImFzeW5jSXRlcmF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7Ozs7O2VBT2Usa0JBQUFBLElBQUk7QUFBQSxTQUFJLDhCQUFpQkEsSUFBakIsRUFBd0JDLE1BQU0sQ0FBQ0MsYUFBL0IsR0FBSjtBQUFBLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9Bc3luY0l0ZXJhYmxlIGZyb20gJy4vdG9Bc3luY0l0ZXJhYmxlJyA7XG5cbi8qKlxuICogQ29udmVydHMgYSB0YXBlIHRvIGFuIGFzeW5jIGl0ZXJhdG9yLlxuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtUYXBlfSB0YXBlIC0gdGhlIHRhcGUgdG8gcmVhZCBmcm9tXG4gKiBAcmV0dXJucyB7QXN5bmNJdGVyYXRvcn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgdGFwZSA9PiB0b0FzeW5jSXRlcmFibGUoIHRhcGUgKVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oICkgO1xuIl19