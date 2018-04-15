var Point = require('./point');

class Vector {
	constructor(p0 = new Point(), p1 = new Point()) {
		this.p0 = p0;
		this.p1 = p1;
	}
}

Vector.fromObject = function (obj) {
	var err = 'This object is not the correct shape'
	if (!obj.p0) throw new TypeError(`${err}. missing property 'p0'`)
	if (!obj.p1) throw new TypeError(`${err}. missing property 'p1'`)

	return new Vector(Point.fromObject(obj.p0), Point.fromObject(obj.p1));
}

Vector.makeProto = function (obj) {
	var err = 'This object is not the correct shape'
	if (!obj.p0) throw new TypeError(`${err}. missing property 'p0'`)
	if (!obj.p1) throw new TypeError(`${err}. missing property 'p1'`)

	Point.makeProto(obj.p0)
	Point.makeProto(obj.p1)

	Reflect.setPrototypeOf(obj, Vector);
}

module.exports = Vector;