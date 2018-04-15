class Point {
	constructor(x = 0, y = 0) {
		// if (typeof (x) == 'number') this.__x = x;
		if (typeof (x) == 'number') this.x = x;
		if (typeof (y) == 'number') this.y = y;
	}

	// get x() {
	// 	return this.__x;
	// }

	// set x(v) {
	// 	if (isNaN(v)) debugger;
	// 	this.__x = v;
	// }

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
	var err = 'This object is not the correct shape'
	if (!obj.x) throw new TypeError(`${err}. missing property 'x'`)
	if (!obj.y) throw new TypeError(`${err}. missing property 'y'`)

	return new Point(obj.x, obj.y);
}

Point.makeProto = function (obj) {
	var err = 'This object is not the correct shape'
	if (!obj.x) throw new TypeError(`${err}. missing property 'x'`)
	if (!obj.y) throw new TypeError(`${err}. missing property 'y'`)

	Reflect.setPrototypeOf(obj, Point);
}

module.exports = Point;