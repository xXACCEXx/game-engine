var Point = require('./math/point');
var Animation = require('./animation');

class Actor extends Animation {
	constructor(pos = new Point(), vel = new Point()) {
		super();

		this.pos = pos;
		this.vel = vel;

		this.speed = 1;
		this.frame = 0;

		this.action = 'idle';
		this.direction = 'down';
	}

	update() {
		this.vel = this.vel.mul(0.1);
		this.pos = this.pos.add(this.vel);
		this.updateElement();	//	needs a check for this.__element
	}

	_moveLeft() {
		this.vel = this.vel.add(new Point(this.speed * -1))
	}

	_moveDown() {
		this.vel = this.vel.add(new Point(0, this.speed));
	}

	_moveRight() {
		this.vel = this.vel.add(new Point(this.speed));
	}

	_moveUp() {
		this.vel = this.vel.add(new Point(0, this.speed * -1))
	}

	_move(xdir, ydir) {
		if (xdir) {
			xdir = xdir[0].toUpperCase() + xdir.slice(1);
			this['_move' + xdir]();
		}

		if (ydir) {
			ydir = ydir[0].toUpperCase() + ydir.slice(1);
			this['_move' + ydir]();
		}
	}
}

module.exports = Actor;