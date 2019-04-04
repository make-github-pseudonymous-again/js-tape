"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = chain;

var _fromAsyncIterable = _interopRequireDefault(require("./fromAsyncIterable"));

var _toAsyncIterable = _interopRequireDefault(require("./toAsyncIterable"));

var _asyncIterableChain = _interopRequireDefault(require("./asyncIterableChain"));

var _asyncIterableMap = _interopRequireDefault(require("./asyncIterableMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Converts a tape of tapes of tokens to a tape of tokens.
 * @param {Tape} tape - The tape of tapes of tokens to read from.
 * @return {Tape} The converted tape of tokens.
 */
function chain(tape) {
  return (0, _fromAsyncIterable["default"])((0, _asyncIterableChain["default"])((0, _asyncIterableMap["default"])(_toAsyncIterable["default"], (0, _toAsyncIterable["default"])(tape))));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFpbi5qcyJdLCJuYW1lcyI6WyJjaGFpbiIsInRhcGUiLCJ0b0FzeW5jSXRlcmFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBOzs7OztBQUtlLFNBQVNBLEtBQVQsQ0FBZUMsSUFBZixFQUFxQjtBQUNuQyxTQUFPLG1DQUNOLG9DQUFtQixrQ0FBaUJDLDJCQUFqQixFQUFrQyxpQ0FBZ0JELElBQWhCLENBQWxDLENBQW5CLENBRE0sQ0FBUDtBQUdBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZyb21Bc3luY0l0ZXJhYmxlIGZyb20gJy4vZnJvbUFzeW5jSXRlcmFibGUnO1xuaW1wb3J0IHRvQXN5bmNJdGVyYWJsZSBmcm9tICcuL3RvQXN5bmNJdGVyYWJsZSc7XG5pbXBvcnQgYXN5bmNJdGVyYWJsZUNoYWluIGZyb20gJy4vYXN5bmNJdGVyYWJsZUNoYWluJztcbmltcG9ydCBhc3luY0l0ZXJhYmxlTWFwIGZyb20gJy4vYXN5bmNJdGVyYWJsZU1hcCc7XG5cbi8qKlxuICogQ29udmVydHMgYSB0YXBlIG9mIHRhcGVzIG9mIHRva2VucyB0byBhIHRhcGUgb2YgdG9rZW5zLlxuICogQHBhcmFtIHtUYXBlfSB0YXBlIC0gVGhlIHRhcGUgb2YgdGFwZXMgb2YgdG9rZW5zIHRvIHJlYWQgZnJvbS5cbiAqIEByZXR1cm4ge1RhcGV9IFRoZSBjb252ZXJ0ZWQgdGFwZSBvZiB0b2tlbnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYWluKHRhcGUpIHtcblx0cmV0dXJuIGZyb21Bc3luY0l0ZXJhYmxlKFxuXHRcdGFzeW5jSXRlcmFibGVDaGFpbihhc3luY0l0ZXJhYmxlTWFwKHRvQXN5bmNJdGVyYWJsZSwgdG9Bc3luY0l0ZXJhYmxlKHRhcGUpKSlcblx0KTtcbn1cbiJdfQ==