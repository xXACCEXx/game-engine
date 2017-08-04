var Point = require('./point.js');

var _vector = {};

module.exports = {
	create: function (p0, p1) {
		var tmp = Object.create(_vector);

		tmp.p0 = p0 || Point.create();
		tmp.p1 = p1 || Point.create();

		return tmp;
	}
}