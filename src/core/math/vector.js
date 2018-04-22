var Point = require('./point');

class Vector {
	constructor(p0 = new Point(), p1 = new Point()) {
		this.p0 = p0;
		this.p1 = p1;
	}
}

Vector.fromObject = function (obj) {
	if (!Vector.vertifyShape(obj)) throw new TypeError(`This object is not the correct shape`)
	return new Vector(Point.fromObject(obj.p0), Point.fromObject(obj.p1));
}

Vector.vertifyShape = function (obj) {
	if (!obj.p0 || !Point.verifyShape(obj.p0)) return false;
	if (!obj.p1 || !Point.verifyShape(obj.p1)) return false;
	return true;
}

module.exports = Vector;