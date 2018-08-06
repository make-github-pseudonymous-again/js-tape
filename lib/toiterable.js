"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = toiterable;

var _marked = /*#__PURE__*/regeneratorRuntime.mark(toiterable);

/**
 * Converts a stream to an iterable.
 * @param {Stream} stream the stream to read from
 */
function toiterable(stream) {
	var token;
	return regeneratorRuntime.wrap(function toiterable$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					if (!true) {
						_context.next = 8;
						break;
					}

					token = stream.read();

					if (!(token === stream.eof)) {
						_context.next = 4;
						break;
					}

					return _context.abrupt("break", 8);

				case 4:
					_context.next = 6;
					return token;

				case 6:
					_context.next = 0;
					break;

				case 8:
				case "end":
					return _context.stop();
			}
		}
	}, _marked, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b2l0ZXJhYmxlLmpzIl0sIm5hbWVzIjpbInRvaXRlcmFibGUiLCJzdHJlYW0iLCJ0b2tlbiIsInJlYWQiLCJlb2YiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUl5QkEsVTs7bURBQUFBLFU7O0FBSnpCOzs7O0FBSWUsU0FBVUEsVUFBVixDQUF1QkMsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFFTixJQUZNO0FBQUE7QUFBQTtBQUFBOztBQUlQQyxVQUpPLEdBSUNELE9BQU9FLElBQVAsRUFKRDs7QUFBQSxXQU1SRCxVQUFVRCxPQUFPRyxHQU5UO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQSxZQVFQRixLQVJPOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJ0b2l0ZXJhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb252ZXJ0cyBhIHN0cmVhbSB0byBhbiBpdGVyYWJsZS5cbiAqIEBwYXJhbSB7U3RyZWFtfSBzdHJlYW0gdGhlIHN0cmVhbSB0byByZWFkIGZyb21cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHRvaXRlcmFibGUgKCBzdHJlYW0gKSB7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0Y29uc3QgdG9rZW4gPSBzdHJlYW0ucmVhZCggKSA7XG5cblx0XHRpZiAoIHRva2VuID09PSBzdHJlYW0uZW9mICkgYnJlYWsgO1xuXG5cdFx0eWllbGQgdG9rZW4gO1xuXG5cdH1cblxufVxuIl19