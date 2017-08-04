var Vector = require('../math/vector.js');

var _animation = {};

_animation.addFrame = function (frame) {
	this.frames.push(frame);
}


module.exports = {
	create: function (playbackSpeed) {
		var tmp = Object.create(_animation);

		tmp.frames = [];
		tmp.playbackSpeed = playbackSpeed || 30;

		return tmp;
	}
}