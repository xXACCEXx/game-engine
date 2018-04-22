class Point {
	constructor(x = 0, y = 0) {
		if (typeof (x) == 'number') this.x = x;
		if (typeof (y) == 'number') this.y = y;
	}

	clone() {
		return new Point(this.x, this.y);
	}

	get length() {
		return Math.sqrt(this.x ** 2, this.y ** 2);
	}

	add(point) {
		if (typeof (point) == 'number') point = new Point(point, point);

		var _p = this.clone();
		_p.x += point.x;
		_p.y += point.y;

		return _p;
	}

	sub(point) {
		if (typeof (point) == 'number') point = new Point(point, point);

		var _p = this.clone();
		_p.x -= point.x;
		_p.y -= point.y;

		return _p;
	}

	mul(magnitude) {
		var _p = this.clone();

		if (typeof (magnitude) == 'number') {
			_p.x *= magnitude;
			_p.y *= magnitude;
		}

		return _p;
	}

	div(magnitude) {
		var _p = this.clone();

		if (typeof (magnitude) == 'number') {
			_p.x /= magnitude;
			_p.y /= magnitude;
		}

		return _p;
	}
}

Point.fromObject = function (obj) {
	if (!Point.verifyShape(obj)) throw new TypeError('This object is not the correct shape');
	return new Point(obj.x, obj.y);
}

Point.verifyShape = function (obj) {
	if (obj.x == undefined || typeof (obj.x) != 'number') return false;
	if (obj.y == undefined || typeof (obj.y) != 'number') return false;
	return true;
}

Point.equal = function (p1, p2) {
	if (p1.x != p2.x) return false;
	if (p1.y != p2.y) return false;
	return true;
}

module.exports = Point;