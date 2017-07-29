var _point = {};

_point.clone = function () {
	return Point.create(this.x, this.y);
}

_point.len = function () {
	return Math.sqrt(this.x * this.x + this.y * this.y);
}

_point.add = function (point) {
	if (typeof (point) == 'number') Point.create(point, point);
	var p = this.clone();
	p.x += point.x;
	p.y += point.y
	return p;
}

_point.sub = function (point) {
	if (typeof (point) == 'number') Point.create(point, point);
	var p = this.clone();
	p.x -= point.x;
	p.y -= point.y;
	return p;
}

_point.mul = function (magnitude) {
	var p = this.clone();
	p.x *= magnitude;
	p.y *= magnitude;
	return p;
}

_point.div = function (magnitude) {
	var p = this.clone();
	p.x /= magnitude;
	p.y /= magnitude;
	return p;
}

var Point = module.exports = {
	create: function (x, y) {
		var point = Object.create(_point);

		point.x = x || 0;
		point.y = y || 0;

		return point;
	}
};