"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fromCallable = _interopRequireDefault(require("./fromCallable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts an iterator to a tape.
 *
 * @function
 * @param {Iterator} _iterator - the iterator to convert
 * @returns {Tape}
 */
var _default = function _default(_iterator) {
  return (0, _fromCallable.default)(_iterator.next.bind(_iterator));
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcm9tSXRlcmF0b3IuanMiXSwibmFtZXMiOlsiX2l0ZXJhdG9yIiwibmV4dCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7Ozs7O2VBT2Usa0JBQUFBLFNBQVM7QUFBQSxTQUFJLDJCQUFjQSxTQUFTLENBQUNDLElBQVYsQ0FBZUMsSUFBZixDQUFxQkYsU0FBckIsQ0FBZCxDQUFKO0FBQUEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcm9tQ2FsbGFibGUgZnJvbSAnLi9mcm9tQ2FsbGFibGUnIDtcblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBpdGVyYXRvciB0byBhIHRhcGUuXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0l0ZXJhdG9yfSBfaXRlcmF0b3IgLSB0aGUgaXRlcmF0b3IgdG8gY29udmVydFxuICogQHJldHVybnMge1RhcGV9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IF9pdGVyYXRvciA9PiBmcm9tQ2FsbGFibGUoIF9pdGVyYXRvci5uZXh0LmJpbmQoIF9pdGVyYXRvciApICkgO1xuIl19