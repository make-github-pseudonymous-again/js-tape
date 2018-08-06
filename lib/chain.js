"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = chain;

var _fromasynciterable = _interopRequireDefault(require("./fromasynciterable"));

var _toiterable = _interopRequireDefault(require("./toiterable"));

var _asyncChain = _interopRequireDefault(require("./asyncChain"));

var _asyncMap = _interopRequireDefault(require("./asyncMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts a stream of streams of tokens to a stream of tokens.
 * @param {Stream} stream the stream to read from
 */
function chain(stream) {
  return (0, _fromasynciterable.default)((0, _asyncChain.default)((0, _asyncMap.default)(_toiterable.default, (0, _toiterable.default)(stream))));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFpbi5qcyJdLCJuYW1lcyI6WyJjaGFpbiIsInN0cmVhbSIsInRvaXRlcmFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBOzs7O0FBSWUsU0FBU0EsS0FBVCxDQUFpQkMsTUFBakIsRUFBMEI7QUFFeEMsU0FBTyxnQ0FBbUIseUJBQVksdUJBQVVDLG1CQUFWLEVBQXVCLHlCQUFZRCxNQUFaLENBQXZCLENBQVosQ0FBbkIsQ0FBUDtBQUVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZyb21hc3luY2l0ZXJhYmxlIGZyb20gJy4vZnJvbWFzeW5jaXRlcmFibGUnIDtcbmltcG9ydCB0b2l0ZXJhYmxlIGZyb20gJy4vdG9pdGVyYWJsZScgO1xuaW1wb3J0IGFzeW5jQ2hhaW4gZnJvbSAnLi9hc3luY0NoYWluJyA7XG5pbXBvcnQgYXN5bmNNYXAgZnJvbSAnLi9hc3luY01hcCcgO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgc3RyZWFtIG9mIHN0cmVhbXMgb2YgdG9rZW5zIHRvIGEgc3RyZWFtIG9mIHRva2Vucy5cbiAqIEBwYXJhbSB7U3RyZWFtfSBzdHJlYW0gdGhlIHN0cmVhbSB0byByZWFkIGZyb21cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhaW4gKCBzdHJlYW0gKSB7XG5cblx0cmV0dXJuIGZyb21hc3luY2l0ZXJhYmxlKCBhc3luY0NoYWluKCBhc3luY01hcCggdG9pdGVyYWJsZSAsIHRvaXRlcmFibGUoIHN0cmVhbSApICkgKSApIDtcblxufVxuIl19