"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toAsyncIterable = _interopRequireDefault(require("./toAsyncIterable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Converts a tape to an async iterator.
 *
 * @function
 * @param {Tape} tape - The tape to read from.
 * @returns {AsyncIterator} The converted iterator.
 */
var _default = function _default(tape) {
  return (0, _toAsyncIterable["default"])(tape)[Symbol.asyncIterator]();
}; // eslint-disable-line no-use-extend-native/no-use-extend-native


exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b0FzeW5jSXRlcmF0b3IuanMiXSwibmFtZXMiOlsidGFwZSIsIlN5bWJvbCIsImFzeW5jSXRlcmF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7Ozs7O2VBT2Usa0JBQUFBLElBQUk7QUFBQSxTQUFJLGlDQUFnQkEsSUFBaEIsRUFBc0JDLE1BQU0sQ0FBQ0MsYUFBN0IsR0FBSjtBQUFBLEMsRUFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9Bc3luY0l0ZXJhYmxlIGZyb20gJy4vdG9Bc3luY0l0ZXJhYmxlJztcblxuLyoqXG4gKiBDb252ZXJ0cyBhIHRhcGUgdG8gYW4gYXN5bmMgaXRlcmF0b3IuXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1RhcGV9IHRhcGUgLSBUaGUgdGFwZSB0byByZWFkIGZyb20uXG4gKiBAcmV0dXJucyB7QXN5bmNJdGVyYXRvcn0gVGhlIGNvbnZlcnRlZCBpdGVyYXRvci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgdGFwZSA9PiB0b0FzeW5jSXRlcmFibGUodGFwZSlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlLWV4dGVuZC1uYXRpdmUvbm8tdXNlLWV4dGVuZC1uYXRpdmVcbiJdfQ==