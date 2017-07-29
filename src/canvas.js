var Point = require('./math/point.js');
var Graphic = require('./graphic.js');

var _canvas = Graphic.create()

_canvas.update = function () {
	if (this.__element) this.updateElement();
}

module.exports = {
	create: function (size) {
		var canvas = Object.create(_canvas);

		canvas.size = size || Point.create();

		return canvas;
	}
}