var Point = require('./math/point.js');
var Graphic = require('./graphic.js');

var _actor = Graphic.create()

_actor.update = function () {
	this.pos = this.pos.add(this.vel);
	if (this.__element) this.updateElement();
}

module.exports = {
	create: function (pos, vel) {
		var actor = Object.create(_actor);

		actor.pos = pos || Point.create();
		actor.vel = vel || Point.create();

		return actor;
	}
};