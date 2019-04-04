"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toAsyncIterator = _interopRequireDefault(require("./toAsyncIterator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Converts a tape to a callable.
 *
 * @function
 * @param {Tape} tape - The tape to read from.
 * @return {Callable} The converted callable.
 */
var _default = function _default(tape) {
  var it = (0, _toAsyncIterator["default"])(tape);
  return it.next.bind(it);
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b0FzeW5jQ2FsbGFibGUuanMiXSwibmFtZXMiOlsidGFwZSIsIml0IiwibmV4dCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7Ozs7O2VBT2Usa0JBQUFBLElBQUksRUFBSTtBQUN0QixNQUFNQyxFQUFFLEdBQUcsaUNBQWdCRCxJQUFoQixDQUFYO0FBQ0EsU0FBT0MsRUFBRSxDQUFDQyxJQUFILENBQVFDLElBQVIsQ0FBYUYsRUFBYixDQUFQO0FBQ0EsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b0FzeW5jSXRlcmF0b3IgZnJvbSAnLi90b0FzeW5jSXRlcmF0b3InO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgdGFwZSB0byBhIGNhbGxhYmxlLlxuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtUYXBlfSB0YXBlIC0gVGhlIHRhcGUgdG8gcmVhZCBmcm9tLlxuICogQHJldHVybiB7Q2FsbGFibGV9IFRoZSBjb252ZXJ0ZWQgY2FsbGFibGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHRhcGUgPT4ge1xuXHRjb25zdCBpdCA9IHRvQXN5bmNJdGVyYXRvcih0YXBlKTtcblx0cmV0dXJuIGl0Lm5leHQuYmluZChpdCk7XG59O1xuIl19