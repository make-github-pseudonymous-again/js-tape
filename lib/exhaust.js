"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exhaust = exhaust;

/**
 * Exhausts a stream.
 * @param {Stream} stream the stream to read from
 */
function exhaust(stream) {

  while (stream.read() !== stream.eof) {}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGhhdXN0LmpzIl0sIm5hbWVzIjpbImV4aGF1c3QiLCJzdHJlYW0iLCJyZWFkIiwiZW9mIl0sIm1hcHBpbmdzIjoiOzs7OztRQUtnQkEsTyxHQUFBQSxPOztBQUpoQjs7OztBQUlPLFNBQVNBLE9BQVQsQ0FBbUJDLE1BQW5CLEVBQTRCOztBQUVsQyxTQUFRQSxPQUFPQyxJQUFQLE9BQW1CRCxPQUFPRSxHQUFsQztBQUVBIiwiZmlsZSI6ImV4aGF1c3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogRXhoYXVzdHMgYSBzdHJlYW0uXG4gKiBAcGFyYW0ge1N0cmVhbX0gc3RyZWFtIHRoZSBzdHJlYW0gdG8gcmVhZCBmcm9tXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGhhdXN0ICggc3RyZWFtICkge1xuXG5cdHdoaWxlICggc3RyZWFtLnJlYWQoICkgIT09IHN0cmVhbS5lb2YgKSA7XG5cbn1cbiJdfQ==