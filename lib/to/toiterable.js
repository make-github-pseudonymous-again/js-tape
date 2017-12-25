"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.toiterable = toiterable;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90by90b2l0ZXJhYmxlLmpzIl0sIm5hbWVzIjpbInRvaXRlcmFibGUiLCJzdHJlYW0iLCJ0b2tlbiIsInJlYWQiLCJlb2YiXSwibWFwcGluZ3MiOiI7Ozs7O1FBSWlCQSxVLEdBQUFBLFU7O21EQUFBQSxVOztBQUpqQjs7OztBQUlPLFNBQVVBLFVBQVYsQ0FBdUJDLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRUUsSUFGRjtBQUFBO0FBQUE7QUFBQTs7QUFJQ0MsVUFKRCxHQUlTRCxPQUFPRSxJQUFQLEVBSlQ7O0FBQUEsV0FNQUQsVUFBVUQsT0FBT0csR0FOakI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBLFlBUUNGLEtBUkQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InRvaXRlcmFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbnZlcnRzIGEgc3RyZWFtIHRvIGFuIGl0ZXJhYmxlLlxuICogQHBhcmFtIHtTdHJlYW19IHN0cmVhbSB0aGUgc3RyZWFtIHRvIHJlYWQgZnJvbVxuICovXG5leHBvcnQgZnVuY3Rpb24qIHRvaXRlcmFibGUgKCBzdHJlYW0gKSB7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0Y29uc3QgdG9rZW4gPSBzdHJlYW0ucmVhZCggKSA7XG5cblx0XHRpZiAoIHRva2VuID09PSBzdHJlYW0uZW9mICkgYnJlYWsgO1xuXG5cdFx0eWllbGQgdG9rZW4gO1xuXG5cdH1cblxufVxuIl19