var Point = require('./math/point');
var Actor = require('./actor');
var Sequence = require('./animation/sequence');

class Player extends Actor {
	constructor(pos, vel) {
		super(pos, vel);
		this.config(require('./anim-lib/player'))
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