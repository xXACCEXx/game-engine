var Point = require('./math/point.js');

var _graphic = {};

_graphic.appendChild = function (child) {
	if (this.__element) this.__element.appendChild(child);
}

_graphic.bindElement = function (el, unit) {
	this.__element = el;

	if (!unit || (unit != 'px' || unit != '%')) unit = 'px';
	this.__unit = unit;

	this.updateElement();
}

_graphic.updateElement = function () {
	if (this.size) {
		this.__element.style.width = this.size.x + this.__unit;
		this.__element.style.height = this.size.y + this.__unit;
	}

	if (this.pos) {
		this.__element.style.left = this.pos.x + this.__unit;
		this.__element.style.top = this.pos.y + this.__unit;
	}
}

module.exports = {
	create: Object.create.bind(null, _graphic)
}