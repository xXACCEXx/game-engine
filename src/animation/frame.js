var Vector = require('../math/vector');
var Point = require('../math/point');


var Frame = {};

Frame.verifyShape = function (obj) {
	if (!obj.pos || !Point.verifyShape(obj.pos)) return false;
	if (!obj.size || !Point.verifyShape(obj.size)) return false;
	if (!obj.offset || !Point.verifyShape(obj.offset)) return false;
	return true;
}

module.exports = Frame;