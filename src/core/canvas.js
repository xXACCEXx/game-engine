var Point = require('./math/point.js');
var Graphic = require('./graphic.js');

class Canvas extends Graphic {
	constructor(size = new Point(340, 200)) {
		super();

		this.size = size;
	}
}

module.exports = Canvas;