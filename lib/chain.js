"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = chain;

var _fromAsyncIterable = _interopRequireDefault(require("./fromAsyncIterable"));

var _toAsyncIterable = _interopRequireDefault(require("./toAsyncIterable"));

var _asyncIterableChain = _interopRequireDefault(require("./asyncIterableChain"));

var _asyncIterableMap = _interopRequireDefault(require("./asyncIterableMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts a tape of tapes of tokens to a tape of tokens.
 * @param {Tape} tape the tape to read from
 */
function chain(tape) {
  return (0, _fromAsyncIterable.default)((0, _asyncIterableChain.default)((0, _asyncIterableMap.default)(_toAsyncIterable.default, (0, _toAsyncIterable.default)(tape))));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFpbi5qcyJdLCJuYW1lcyI6WyJjaGFpbiIsInRhcGUiLCJ0b0FzeW5jSXRlcmFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBOzs7O0FBSWUsU0FBU0EsS0FBVCxDQUFpQkMsSUFBakIsRUFBd0I7QUFFdEMsU0FBTyxnQ0FBbUIsaUNBQW9CLCtCQUFrQkMsd0JBQWxCLEVBQW9DLDhCQUFpQkQsSUFBakIsQ0FBcEMsQ0FBcEIsQ0FBbkIsQ0FBUDtBQUVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZyb21Bc3luY0l0ZXJhYmxlIGZyb20gJy4vZnJvbUFzeW5jSXRlcmFibGUnIDtcbmltcG9ydCB0b0FzeW5jSXRlcmFibGUgZnJvbSAnLi90b0FzeW5jSXRlcmFibGUnIDtcbmltcG9ydCBhc3luY0l0ZXJhYmxlQ2hhaW4gZnJvbSAnLi9hc3luY0l0ZXJhYmxlQ2hhaW4nIDtcbmltcG9ydCBhc3luY0l0ZXJhYmxlTWFwIGZyb20gJy4vYXN5bmNJdGVyYWJsZU1hcCcgO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgdGFwZSBvZiB0YXBlcyBvZiB0b2tlbnMgdG8gYSB0YXBlIG9mIHRva2Vucy5cbiAqIEBwYXJhbSB7VGFwZX0gdGFwZSB0aGUgdGFwZSB0byByZWFkIGZyb21cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhaW4gKCB0YXBlICkge1xuXG5cdHJldHVybiBmcm9tQXN5bmNJdGVyYWJsZSggYXN5bmNJdGVyYWJsZUNoYWluKCBhc3luY0l0ZXJhYmxlTWFwKCB0b0FzeW5jSXRlcmFibGUgLCB0b0FzeW5jSXRlcmFibGUoIHRhcGUgKSApICkgKSA7XG5cbn1cbiJdfQ==