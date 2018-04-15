var Vector = require('../math/vector');
var Point = require('../math/point');

class Frame extends Vector {
	constructor(pos = new Point(), size = new Point()) {
		super(pos, pos.add(size))
	}
}

Frame.fromVector = function () {
	if (!vector) throw new Error('Must provide a vector');
	if (!Vector.isPrototypeOf(vector)) vector = Vector.fromObject(vector);
	// if (!Vector.isPrototypeOf(vector)) throw new TypeError('vector must be of type Vector');

	return new Frame(vector.p0, vector.p1);
}

Frame.fromPoints = function (p0, p1) {
	return new Vector(Point.fromObject(p0), Point.fromObject(p1))
}

module.exports = Frame;