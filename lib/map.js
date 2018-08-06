"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = map;

var _fromasynciterable = _interopRequireDefault(require("./fromasynciterable"));

var _toiterable = _interopRequireDefault(require("./toiterable"));

var _asyncMap = _interopRequireDefault(require("./asyncMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Applies a callable to each token of a stream.
 * @param {Callable} callable the callable to apply
 * @param {Stream} stream the stream to process
 */
function map(callable, stream) {
  return (0, _fromasynciterable.default)((0, _asyncMap.default)(callable, (0, _toiterable.default)(stream)));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXAuanMiXSwibmFtZXMiOlsibWFwIiwiY2FsbGFibGUiLCJzdHJlYW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBOzs7OztBQUtlLFNBQVNBLEdBQVQsQ0FBZUMsUUFBZixFQUEwQkMsTUFBMUIsRUFBbUM7QUFFakQsU0FBTyxnQ0FBbUIsdUJBQVVELFFBQVYsRUFBcUIseUJBQVlDLE1BQVosQ0FBckIsQ0FBbkIsQ0FBUDtBQUVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZyb21hc3luY2l0ZXJhYmxlIGZyb20gJy4vZnJvbWFzeW5jaXRlcmFibGUnIDtcbmltcG9ydCB0b2l0ZXJhYmxlIGZyb20gJy4vdG9pdGVyYWJsZScgO1xuaW1wb3J0IGFzeW5jTWFwIGZyb20gJy4vYXN5bmNNYXAnIDtcblxuLyoqXG4gKiBBcHBsaWVzIGEgY2FsbGFibGUgdG8gZWFjaCB0b2tlbiBvZiBhIHN0cmVhbS5cbiAqIEBwYXJhbSB7Q2FsbGFibGV9IGNhbGxhYmxlIHRoZSBjYWxsYWJsZSB0byBhcHBseVxuICogQHBhcmFtIHtTdHJlYW19IHN0cmVhbSB0aGUgc3RyZWFtIHRvIHByb2Nlc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFwICggY2FsbGFibGUgLCBzdHJlYW0gKSB7XG5cblx0cmV0dXJuIGZyb21hc3luY2l0ZXJhYmxlKCBhc3luY01hcCggY2FsbGFibGUgLCB0b2l0ZXJhYmxlKCBzdHJlYW0gKSApICkgO1xuXG59XG4iXX0=