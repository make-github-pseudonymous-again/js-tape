"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ignore;

var _split = _interopRequireDefault(require("./split"));

var _chain = _interopRequireDefault(require("./chain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Filters a tape by ignoring a given set of tokens.
 * @param {Tape} tape - The tape to filter.
 * @param {Iterable} toignore - The tokens to ignore.
 * @returns {Tape} The input tape but with some tokens ignored.
 */
function ignore(tape, toignore) {
  return (0, _chain["default"])((0, _split["default"])(tape, toignore));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pZ25vcmUuanMiXSwibmFtZXMiOlsiaWdub3JlIiwidGFwZSIsInRvaWdub3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBTWUsU0FBU0EsTUFBVCxDQUFnQkMsSUFBaEIsRUFBc0JDLFFBQXRCLEVBQWdDO0FBQzlDLFNBQU8sdUJBQU0sdUJBQU1ELElBQU4sRUFBWUMsUUFBWixDQUFOLENBQVA7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzcGxpdCBmcm9tICcuL3NwbGl0JztcbmltcG9ydCBjaGFpbiBmcm9tICcuL2NoYWluJztcblxuLyoqXG4gKiBGaWx0ZXJzIGEgdGFwZSBieSBpZ25vcmluZyBhIGdpdmVuIHNldCBvZiB0b2tlbnMuXG4gKiBAcGFyYW0ge1RhcGV9IHRhcGUgLSBUaGUgdGFwZSB0byBmaWx0ZXIuXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSB0b2lnbm9yZSAtIFRoZSB0b2tlbnMgdG8gaWdub3JlLlxuICogQHJldHVybnMge1RhcGV9IFRoZSBpbnB1dCB0YXBlIGJ1dCB3aXRoIHNvbWUgdG9rZW5zIGlnbm9yZWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlnbm9yZSh0YXBlLCB0b2lnbm9yZSkge1xuXHRyZXR1cm4gY2hhaW4oc3BsaXQodGFwZSwgdG9pZ25vcmUpKTtcbn1cbiJdfQ==