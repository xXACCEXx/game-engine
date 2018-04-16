var Frame = require('./frame');

class Sequence {
	constructor(list) {
		if (!Sequence.verifyShape(list)) {
			console.log('list is not a Frame[]', list);
			throw new TypeError('sequence is not \'Frame[]\'');
		}
	}

	reset() {
		this.frame = 0;
	}

	stepFrame() {
		this.frame += 1;
		if (this.frame >= this.frames.length) this.reset();
	}

	currentFrame() {
		var cFrame = this.frames[this.frame];
		console.log('current frame', cFrame)
		return cFrame;
	}
}

Sequence.frame = 0;

Sequence.verifyShape = function (sequence) {
	if (!(sequence instanceof Array)) return false;
	return sequence.reduce((ok, frame) => ok ? Frame.verifyShape(frame) : false, true);
}

module.exports = Sequence;