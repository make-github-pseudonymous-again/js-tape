"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fromiterator = _interopRequireDefault(require("./fromiterator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts an iterable to a stream.
 * @param {Iterable} _iterable the iterable to convert
 * @function
 */
var _default = function _default(_iterable) {
  return (0, _fromiterator.default)(_iterable[Symbol.iterator]());
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcm9taXRlcmFibGUuanMiXSwibmFtZXMiOlsiX2l0ZXJhYmxlIiwiU3ltYm9sIiwiaXRlcmF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7OztlQUtlLGtCQUFBQSxTQUFTO0FBQUEsU0FBSSwyQkFBY0EsU0FBUyxDQUFDQyxNQUFNLENBQUNDLFFBQVIsQ0FBVCxFQUFkLENBQUo7QUFBQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZyb21pdGVyYXRvciBmcm9tICcuL2Zyb21pdGVyYXRvcicgO1xuXG4vKipcbiAqIENvbnZlcnRzIGFuIGl0ZXJhYmxlIHRvIGEgc3RyZWFtLlxuICogQHBhcmFtIHtJdGVyYWJsZX0gX2l0ZXJhYmxlIHRoZSBpdGVyYWJsZSB0byBjb252ZXJ0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgX2l0ZXJhYmxlID0+IGZyb21pdGVyYXRvciggX2l0ZXJhYmxlW1N5bWJvbC5pdGVyYXRvcl0oICkgKSA7XG4iXX0=