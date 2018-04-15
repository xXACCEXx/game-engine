var Point = require('./math/point.js');

class Graphic {
	constructor() {
		this.__unit = 'px';
	}

	appendChild(child) {
		if (this.__element) this.__element.appendChild(child);
	}

	bindElement(el, unit) {
		this.__element = el;
		this.__element.__instance = this;

		if (!unit || (unit != 'px' || unit != '%')) unit = 'px';
		this.__unit = unit;

		this.updateElement();
	}

	updateElement() {
		if (this.size) {
			this.__element.style.width = this.size.x + this.__unit;
			this.__element.style.height = this.size.y + this.__unit;
		}

		if (this.pos) {
			this.__element.style.left = this.pos.x + this.__unit;
			this.__element.style.top = this.pos.y + this.__unit;
		}
	}

	updateBackground(frame) {
		this.__element.style.backgroundPositionX = -this.currentFrame().x + this.__unit;
		this.__element.style.backgroundPositionY = -this.currentFrame().y + this.__unit;
	}

	currentFrame() {
		return this.frames[this.action][this.direction];
	}
}

module.exports = Graphic;