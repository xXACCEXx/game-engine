var Point = require('./math/point');
var Actor = require('./actor');
var Sequence = require('./animation/sequence');

var frames = require('./anim-lib/player');

class Player extends Actor {
	constructor(pos, vel) {
		super(pos, vel);
		this.frames = frames;
	}

	moveLeft() {
		this.frame = this.frame + 1;
		if (!this.currentFrame.length) this.frame = 0;
		else if (this.frame >= this.currentFrame.length) this.frame = 0;
	}

	update() {
		super.update()
		this.updateBackground();
	}
}

module.exports = Player;