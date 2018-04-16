var Point = require('./math/point.js');
var Graphic = require('./graphic.js');

class Canvas extends Graphic {
	constructor(size = new Point(340, 200)) {
		super();

		this.size = size;
	}

	appendChild(child) {
		super.appendChild(child);
		this.updateBackground({
			p0: new Point(),
			p1: this.size
		});
	}

	update() {
		this.updateElement();
	}
}

module.exports = Canvas;