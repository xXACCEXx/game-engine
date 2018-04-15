var Frame = require('./frame');

class Sequence {
	constructor(list, size) {
		if (!(list instanceof Array)) throw new TypeError('Not an array');

		this.frames = list.map(pos => Frame.fromPoints(pos, size));
		this.frame = 0;
	}

	reset() {
		this.frame = 0;
	}

	getNext() {
		this.frame++;
		return this.frames[this.frame] || this.frames[(this.frame = 0)];
	}
}

module.exports = Sequence;