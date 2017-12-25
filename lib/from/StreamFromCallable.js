'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.StreamFromCallable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = require('..');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class that wraps a callable with a stream.
 */
var StreamFromCallable = exports.StreamFromCallable = function () {

	/**
  * The constructor. Stores the callable that yields values to stream.
  *
  * @param {Callable} callable - The callable to use.
  * @returns {StreamFromCallable}
  *
  */
	function StreamFromCallable(callable) {
		_classCallCheck(this, StreamFromCallable);

		this.callable = callable;
		this.buffer = [];
		this.eof = _.EOF;
	}

	/**
  * Returns the next token in the stream or {@link StreamFromCallable#eof}
  * if the stream has been exhausted.
  *
  * @returns {Object}
  */


	_createClass(StreamFromCallable, [{
		key: 'read',
		value: function read() {

			if (this.buffer.length > 0) return this.buffer.pop();

			var state = this.callable();

			if (state.done) return this.eof;

			return state.value;
		}

		/**
   * Puts a token back in the stream. If {@link StreamFromCallable#read} is
   * used just after, this token will be returned.
   *
   * @param {Object} token - The token to put back in the stream.
   */

	}, {
		key: 'unread',
		value: function unread(token) {

			this.buffer.push(token);
		}
	}]);

	return StreamFromCallable;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcm9tL1N0cmVhbUZyb21DYWxsYWJsZS5qcyJdLCJuYW1lcyI6WyJTdHJlYW1Gcm9tQ2FsbGFibGUiLCJjYWxsYWJsZSIsImJ1ZmZlciIsImVvZiIsImxlbmd0aCIsInBvcCIsInN0YXRlIiwiZG9uZSIsInZhbHVlIiwidG9rZW4iLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7SUFHYUEsa0IsV0FBQUEsa0I7O0FBRVo7Ozs7Ozs7QUFPQSw2QkFBY0MsUUFBZCxFQUF5QjtBQUFBOztBQUN4QixPQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLE9BQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsT0FBS0MsR0FBTDtBQUNBOztBQUVEOzs7Ozs7Ozs7O3lCQU1TOztBQUVSLE9BQUssS0FBS0QsTUFBTCxDQUFZRSxNQUFaLEdBQXFCLENBQTFCLEVBQThCLE9BQU8sS0FBS0YsTUFBTCxDQUFZRyxHQUFaLEVBQVA7O0FBRTlCLE9BQU1DLFFBQVEsS0FBS0wsUUFBTCxFQUFkOztBQUVBLE9BQUtLLE1BQU1DLElBQVgsRUFBa0IsT0FBTyxLQUFLSixHQUFaOztBQUVsQixVQUFPRyxNQUFNRSxLQUFiO0FBRUE7O0FBRUQ7Ozs7Ozs7Ozt5QkFNU0MsSyxFQUFROztBQUVoQixRQUFLUCxNQUFMLENBQVlRLElBQVosQ0FBa0JELEtBQWxCO0FBRUEiLCJmaWxlIjoiU3RyZWFtRnJvbUNhbGxhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRU9GIH0gZnJvbSAnLi4nIDtcblxuLyoqXG4gKiBDbGFzcyB0aGF0IHdyYXBzIGEgY2FsbGFibGUgd2l0aCBhIHN0cmVhbS5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmVhbUZyb21DYWxsYWJsZSB7XG5cblx0LyoqXG5cdCAqIFRoZSBjb25zdHJ1Y3Rvci4gU3RvcmVzIHRoZSBjYWxsYWJsZSB0aGF0IHlpZWxkcyB2YWx1ZXMgdG8gc3RyZWFtLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0NhbGxhYmxlfSBjYWxsYWJsZSAtIFRoZSBjYWxsYWJsZSB0byB1c2UuXG5cdCAqIEByZXR1cm5zIHtTdHJlYW1Gcm9tQ2FsbGFibGV9XG5cdCAqXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciAoIGNhbGxhYmxlICkge1xuXHRcdHRoaXMuY2FsbGFibGUgPSBjYWxsYWJsZSA7XG5cdFx0dGhpcy5idWZmZXIgPSBbIF0gO1xuXHRcdHRoaXMuZW9mID0gRU9GIDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBuZXh0IHRva2VuIGluIHRoZSBzdHJlYW0gb3Ige0BsaW5rIFN0cmVhbUZyb21DYWxsYWJsZSNlb2Z9XG5cdCAqIGlmIHRoZSBzdHJlYW0gaGFzIGJlZW4gZXhoYXVzdGVkLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fVxuXHQgKi9cblx0cmVhZCAoICkge1xuXG5cdFx0aWYgKCB0aGlzLmJ1ZmZlci5sZW5ndGggPiAwICkgcmV0dXJuIHRoaXMuYnVmZmVyLnBvcCggKSA7XG5cblx0XHRjb25zdCBzdGF0ZSA9IHRoaXMuY2FsbGFibGUoICkgO1xuXG5cdFx0aWYgKCBzdGF0ZS5kb25lICkgcmV0dXJuIHRoaXMuZW9mIDtcblxuXHRcdHJldHVybiBzdGF0ZS52YWx1ZSA7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBQdXRzIGEgdG9rZW4gYmFjayBpbiB0aGUgc3RyZWFtLiBJZiB7QGxpbmsgU3RyZWFtRnJvbUNhbGxhYmxlI3JlYWR9IGlzXG5cdCAqIHVzZWQganVzdCBhZnRlciwgdGhpcyB0b2tlbiB3aWxsIGJlIHJldHVybmVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gdG9rZW4gLSBUaGUgdG9rZW4gdG8gcHV0IGJhY2sgaW4gdGhlIHN0cmVhbS5cblx0ICovXG5cdHVucmVhZCAoIHRva2VuICkge1xuXG5cdFx0dGhpcy5idWZmZXIucHVzaCggdG9rZW4gKSA7XG5cblx0fVxuXG59XG4iXX0=