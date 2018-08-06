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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcm9tL1N0cmVhbUZyb21DYWxsYWJsZS5qcyJdLCJuYW1lcyI6WyJTdHJlYW1Gcm9tQ2FsbGFibGUiLCJjYWxsYWJsZSIsImJ1ZmZlciIsImVvZiIsIkVPRiIsImxlbmd0aCIsInBvcCIsInN0YXRlIiwiZG9uZSIsInZhbHVlIiwidG9rZW4iLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7SUFHYUEsa0IsV0FBQUEsa0I7O0FBRVo7Ozs7Ozs7QUFPQSw2QkFBY0MsUUFBZCxFQUF5QjtBQUFBOztBQUN4QixPQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLE9BQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsT0FBS0MsR0FBTCxHQUFXQyxLQUFYO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7eUJBTVM7O0FBRVIsT0FBSyxLQUFLRixNQUFMLENBQVlHLE1BQVosR0FBcUIsQ0FBMUIsRUFBOEIsT0FBTyxLQUFLSCxNQUFMLENBQVlJLEdBQVosRUFBUDs7QUFFOUIsT0FBTUMsUUFBUSxLQUFLTixRQUFMLEVBQWQ7O0FBRUEsT0FBS00sTUFBTUMsSUFBWCxFQUFrQixPQUFPLEtBQUtMLEdBQVo7O0FBRWxCLFVBQU9JLE1BQU1FLEtBQWI7QUFFQTs7QUFFRDs7Ozs7Ozs7O3lCQU1TQyxLLEVBQVE7O0FBRWhCLFFBQUtSLE1BQUwsQ0FBWVMsSUFBWixDQUFrQkQsS0FBbEI7QUFFQSIsImZpbGUiOiJTdHJlYW1Gcm9tQ2FsbGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFT0YgfSBmcm9tICcuLicgO1xuXG4vKipcbiAqIENsYXNzIHRoYXQgd3JhcHMgYSBjYWxsYWJsZSB3aXRoIGEgc3RyZWFtLlxuICovXG5leHBvcnQgY2xhc3MgU3RyZWFtRnJvbUNhbGxhYmxlIHtcblxuXHQvKipcblx0ICogVGhlIGNvbnN0cnVjdG9yLiBTdG9yZXMgdGhlIGNhbGxhYmxlIHRoYXQgeWllbGRzIHZhbHVlcyB0byBzdHJlYW0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7Q2FsbGFibGV9IGNhbGxhYmxlIC0gVGhlIGNhbGxhYmxlIHRvIHVzZS5cblx0ICogQHJldHVybnMge1N0cmVhbUZyb21DYWxsYWJsZX1cblx0ICpcblx0ICovXG5cdGNvbnN0cnVjdG9yICggY2FsbGFibGUgKSB7XG5cdFx0dGhpcy5jYWxsYWJsZSA9IGNhbGxhYmxlIDtcblx0XHR0aGlzLmJ1ZmZlciA9IFsgXSA7XG5cdFx0dGhpcy5lb2YgPSBFT0YgO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIG5leHQgdG9rZW4gaW4gdGhlIHN0cmVhbSBvciB7QGxpbmsgU3RyZWFtRnJvbUNhbGxhYmxlI2VvZn1cblx0ICogaWYgdGhlIHN0cmVhbSBoYXMgYmVlbiBleGhhdXN0ZWQuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9XG5cdCAqL1xuXHRyZWFkICggKSB7XG5cblx0XHRpZiAoIHRoaXMuYnVmZmVyLmxlbmd0aCA+IDAgKSByZXR1cm4gdGhpcy5idWZmZXIucG9wKCApIDtcblxuXHRcdGNvbnN0IHN0YXRlID0gdGhpcy5jYWxsYWJsZSggKSA7XG5cblx0XHRpZiAoIHN0YXRlLmRvbmUgKSByZXR1cm4gdGhpcy5lb2YgO1xuXG5cdFx0cmV0dXJuIHN0YXRlLnZhbHVlIDtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFB1dHMgYSB0b2tlbiBiYWNrIGluIHRoZSBzdHJlYW0uIElmIHtAbGluayBTdHJlYW1Gcm9tQ2FsbGFibGUjcmVhZH0gaXNcblx0ICogdXNlZCBqdXN0IGFmdGVyLCB0aGlzIHRva2VuIHdpbGwgYmUgcmV0dXJuZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB0b2tlbiAtIFRoZSB0b2tlbiB0byBwdXQgYmFjayBpbiB0aGUgc3RyZWFtLlxuXHQgKi9cblx0dW5yZWFkICggdG9rZW4gKSB7XG5cblx0XHR0aGlzLmJ1ZmZlci5wdXNoKCB0b2tlbiApIDtcblxuXHR9XG5cbn1cbiJdfQ==