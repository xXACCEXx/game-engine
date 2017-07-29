var Point = require('./math/point.js');

var _actor = {}

_actor.update = function () {
	this.pos = this.pos.add(this.vel);
	if(this.__element) this.updateElement();
}

_actor.bindElement = function (el, unit) {
	this.__element = el;

	if(!unit || (unit != 'px' || unit != '%')) unit = 'px';
	this.__unit = unit;
}

_actor.updateElement = function () {
	this.__element.style.left = this.pos.x + this.__unit;
	this.__element.style.top = this.pos.y + this.__unit;
}

module.exports = {
	create: function (pos, vel) {
		var actor = Object.create(_actor);

		actor.pos = pos || Point.create();
		actor.vel = vel || Point.create();

		return actor;
	}
};