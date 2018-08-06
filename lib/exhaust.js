"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exhaust;

/**
 * Exhausts a stream.
 * @param {Stream} stream the stream to read from
 */
function exhaust(stream) {

  while (stream.read() !== stream.eof) {}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGhhdXN0LmpzIl0sIm5hbWVzIjpbImV4aGF1c3QiLCJzdHJlYW0iLCJyZWFkIiwiZW9mIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFLd0JBLE87O0FBSnhCOzs7O0FBSWUsU0FBU0EsT0FBVCxDQUFtQkMsTUFBbkIsRUFBNEI7O0FBRTFDLFNBQVFBLE9BQU9DLElBQVAsT0FBbUJELE9BQU9FLEdBQWxDO0FBRUEiLCJmaWxlIjoiZXhoYXVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBFeGhhdXN0cyBhIHN0cmVhbS5cbiAqIEBwYXJhbSB7U3RyZWFtfSBzdHJlYW0gdGhlIHN0cmVhbSB0byByZWFkIGZyb21cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhoYXVzdCAoIHN0cmVhbSApIHtcblxuXHR3aGlsZSAoIHN0cmVhbS5yZWFkKCApICE9PSBzdHJlYW0uZW9mICkgO1xuXG59XG4iXX0=