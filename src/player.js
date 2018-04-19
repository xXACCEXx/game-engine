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
		this.direction = 'left'
		this.move()
	}

	moveDown() {
		this.direction = 'down'
		this.move()
	}

	moveUp() {
		this.direction = 'up'
		this.move()
	}

	moveRight() {
		this.direction = 'right'
		this.move()
	}

	move() {
		this.action = 'walk';
	}
}

module.exports = Player;