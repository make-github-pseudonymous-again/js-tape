'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fromcallable = require('./fromcallable');

var _fromcallable2 = _interopRequireDefault(_fromcallable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts an iterator to a stream.
 * @param {Iterator} _iterator the iterator to convert
 * @function
 */
exports.default = function (_iterator) {
  return (0, _fromcallable2.default)(_iterator.next.bind(_iterator));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcm9taXRlcmF0b3IuanMiXSwibmFtZXMiOlsiX2l0ZXJhdG9yIiwibmV4dCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQTs7Ozs7a0JBS2U7QUFBQSxTQUFhLDRCQUFjQSxVQUFVQyxJQUFWLENBQWVDLElBQWYsQ0FBcUJGLFNBQXJCLENBQWQsQ0FBYjtBQUFBLEMiLCJmaWxlIjoiZnJvbWl0ZXJhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZyb21jYWxsYWJsZSBmcm9tICcuL2Zyb21jYWxsYWJsZScgO1xuXG4vKipcbiAqIENvbnZlcnRzIGFuIGl0ZXJhdG9yIHRvIGEgc3RyZWFtLlxuICogQHBhcmFtIHtJdGVyYXRvcn0gX2l0ZXJhdG9yIHRoZSBpdGVyYXRvciB0byBjb252ZXJ0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgX2l0ZXJhdG9yID0+IGZyb21jYWxsYWJsZSggX2l0ZXJhdG9yLm5leHQuYmluZCggX2l0ZXJhdG9yICkgKSA7XG4iXX0=