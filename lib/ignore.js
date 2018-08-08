"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ignore;

var _split = _interopRequireDefault(require("./split"));

var _chain = _interopRequireDefault(require("./chain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Filters a tape by ignoring a given set of tokens.
 * @param {Tape} tape the tape to filter
 * @param {Iterable} toignore the tokens to ignore
 */
function ignore(tape, toignore) {
  return (0, _chain.default)((0, _split.default)(tape, toignore));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pZ25vcmUuanMiXSwibmFtZXMiOlsiaWdub3JlIiwidGFwZSIsInRvaWdub3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQTs7Ozs7QUFLZSxTQUFTQSxNQUFULENBQWtCQyxJQUFsQixFQUF5QkMsUUFBekIsRUFBb0M7QUFFbEQsU0FBTyxvQkFBTyxvQkFBT0QsSUFBUCxFQUFjQyxRQUFkLENBQVAsQ0FBUDtBQUVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNwbGl0IGZyb20gJy4vc3BsaXQnIDtcbmltcG9ydCBjaGFpbiBmcm9tICcuL2NoYWluJyA7XG5cbi8qKlxuICogRmlsdGVycyBhIHRhcGUgYnkgaWdub3JpbmcgYSBnaXZlbiBzZXQgb2YgdG9rZW5zLlxuICogQHBhcmFtIHtUYXBlfSB0YXBlIHRoZSB0YXBlIHRvIGZpbHRlclxuICogQHBhcmFtIHtJdGVyYWJsZX0gdG9pZ25vcmUgdGhlIHRva2VucyB0byBpZ25vcmVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaWdub3JlICggdGFwZSAsIHRvaWdub3JlICkge1xuXG5cdHJldHVybiBjaGFpbiggc3BsaXQoIHRhcGUgLCB0b2lnbm9yZSApICkgO1xuXG59XG4iXX0=