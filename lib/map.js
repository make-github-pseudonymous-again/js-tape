"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = map;

var _fromAsyncIterable = _interopRequireDefault(require("./fromAsyncIterable"));

var _toAsyncIterable = _interopRequireDefault(require("./toAsyncIterable"));

var _asyncIterableMap = _interopRequireDefault(require("./asyncIterableMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Applies a callable to each token of a tape.
 * @param {Callable} callable - the callable to apply
 * @param {Tape} tape - the tape to process
 * @returns {Tape} The processed tape.
 */
function map(callable, tape) {
  return (0, _fromAsyncIterable["default"])((0, _asyncIterableMap["default"])(callable, (0, _toAsyncIterable["default"])(tape)));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXAuanMiXSwibmFtZXMiOlsibWFwIiwiY2FsbGFibGUiLCJ0YXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBTWUsU0FBU0EsR0FBVCxDQUFhQyxRQUFiLEVBQXVCQyxJQUF2QixFQUE2QjtBQUMzQyxTQUFPLG1DQUFrQixrQ0FBaUJELFFBQWpCLEVBQTJCLGlDQUFnQkMsSUFBaEIsQ0FBM0IsQ0FBbEIsQ0FBUDtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZyb21Bc3luY0l0ZXJhYmxlIGZyb20gJy4vZnJvbUFzeW5jSXRlcmFibGUnO1xuaW1wb3J0IHRvQXN5bmNJdGVyYWJsZSBmcm9tICcuL3RvQXN5bmNJdGVyYWJsZSc7XG5pbXBvcnQgYXN5bmNJdGVyYWJsZU1hcCBmcm9tICcuL2FzeW5jSXRlcmFibGVNYXAnO1xuXG4vKipcbiAqIEFwcGxpZXMgYSBjYWxsYWJsZSB0byBlYWNoIHRva2VuIG9mIGEgdGFwZS5cbiAqIEBwYXJhbSB7Q2FsbGFibGV9IGNhbGxhYmxlIC0gdGhlIGNhbGxhYmxlIHRvIGFwcGx5XG4gKiBAcGFyYW0ge1RhcGV9IHRhcGUgLSB0aGUgdGFwZSB0byBwcm9jZXNzXG4gKiBAcmV0dXJucyB7VGFwZX0gVGhlIHByb2Nlc3NlZCB0YXBlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXAoY2FsbGFibGUsIHRhcGUpIHtcblx0cmV0dXJuIGZyb21Bc3luY0l0ZXJhYmxlKGFzeW5jSXRlcmFibGVNYXAoY2FsbGFibGUsIHRvQXN5bmNJdGVyYWJsZSh0YXBlKSkpO1xufVxuIl19