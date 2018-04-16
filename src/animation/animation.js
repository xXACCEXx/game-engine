var Frame = require('./frame');
var Graphic = require('../graphic')

class Animation extends Graphic {
	constructor() {
		super()
	}

	config(sequenceObj) {
		this._sequences = sequenceObj;

		try {
			this.setSequence(sequenceObj.default);
		}
		catch (e) {
			throw new Error(`Default sequence name '${sequenceObj.default}' was not defined in the config`);
		}
	}

	setSequence(name) {
		if (!this._sequences[name]) throw new Error(`Sequence '${name}' has not been added.`);
		this.activeSequence = this._sequences[name];
		this.activeSequence.reset();
	}

	tickFrame() {
		if (!this.timeOnFrame) this.timeOnFrame = 0;

		if (this.timeOnFrame > Animation.timeOnFrame) {
			if (this.activeSequence.stepFrame) this.activeSequence.stepFrame();
			this.timeOnFrame = 0;
		}

		this.timeOnFrame++;
	}

	currentFrame() {
		if (!this.activeSequence) return {
			pos: { x: 0, y: 0 },
			size: { x: 0, y: 0 },
			offset: { x: 0, y: 0 }
		};

		return this.activeSequence.currentFrame();
	}

	update() {
		if (!this.__element) return;
		this.tickFrame();
		super.update();
	}
}

Animation.timeOnFrame = 10;

module.exports = Animation;