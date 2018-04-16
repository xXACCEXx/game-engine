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

	update(frame) {
		if (!Point.equal(frame.pos, this.lastFrame.pos))
			this.updateBackground(frame.pos);

		if (!Point.equal(frame.size, this.lastFrame.size))
			this.updateBackground(frame.size);

		if (!Point.equal(frame.offset, this.lastFrame.offset))
			this.updatePosition(this.pos.sub(this.offset));

		else if (!Point.equal(this.pos, this.lastPos))
			this.updatePosition(this.pos.sub(this.offset));

		this.lastFrame = frame;
		this.lastPos = this.pos.clone();
	}

	updatePosition(pos) {
		if (this.__element) {
			this.__element.style.left = pos.x + this.__unit;
			this.__element.style.top = pos.y + this.__unit;
		}
	}

	updateBackground(pos) {
		if (this.__element) {
			this.__element.style.backgroundPositionX = -pos.x + this.__unit;
			this.__element.style.backgroundPositionY = -pos.y + this.__unit;
		}
	}

	updateSize(size) {
		if (this.__element) {
			this.__element.style.width = size.x + this.__unit;
			this.__element.style.height = size.y + this.__unit;
		}
	}
}

module.exports = Graphic;