const buffer = require('buffer');

if (!buffer.SlowBuffer) {
	function SlowBuffer(size) {
		return Buffer.allocUnsafeSlow(size);
	}
	SlowBuffer.prototype = Buffer.prototype;
	buffer.SlowBuffer = SlowBuffer;
}
