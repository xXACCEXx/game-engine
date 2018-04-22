var Point = require('./math/point');
var Actor = require('./actor');
var Sequence = require('./animation/sequence');

class Player extends Actor {
	constructor(pos, vel) {
		super(pos, vel);

		fetch('/data/player.json')
			.then(resp => resp.json())
			.then(data => this.config(data));
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