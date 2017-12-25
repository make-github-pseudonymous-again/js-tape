'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromiterable = undefined;

var _fromiterator = require('./fromiterator');

/**
 * Converts an iterable to a stream.
 * @param {Iterable} _iterable the iterable to convert
 * @function
 */
var fromiterable = exports.fromiterable = function fromiterable(_iterable) {
  return (0, _fromiterator.fromiterator)(_iterable[Symbol.iterator]());
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcm9tL2Zyb21pdGVyYWJsZS5qcyJdLCJuYW1lcyI6WyJmcm9taXRlcmFibGUiLCJfaXRlcmFibGUiLCJTeW1ib2wiLCJpdGVyYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7OztBQUtPLElBQU1BLHNDQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFhLGdDQUFjQyxVQUFVQyxPQUFPQyxRQUFqQixHQUFkLENBQWI7QUFBQSxDQUFyQiIsImZpbGUiOiJmcm9taXRlcmFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmcm9taXRlcmF0b3IgfSBmcm9tICcuL2Zyb21pdGVyYXRvcicgO1xuXG4vKipcbiAqIENvbnZlcnRzIGFuIGl0ZXJhYmxlIHRvIGEgc3RyZWFtLlxuICogQHBhcmFtIHtJdGVyYWJsZX0gX2l0ZXJhYmxlIHRoZSBpdGVyYWJsZSB0byBjb252ZXJ0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21pdGVyYWJsZSA9IF9pdGVyYWJsZSA9PiBmcm9taXRlcmF0b3IoIF9pdGVyYWJsZVtTeW1ib2wuaXRlcmF0b3JdKCApICkgO1xuIl19